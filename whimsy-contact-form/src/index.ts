interface ContactPayload {
  submissionId?: unknown; name?: unknown; organization?: unknown; email?: unknown;
  phone?: unknown; service?: unknown; details?: unknown; website?: unknown;
}
interface DeliveryMessage { inquiryId: string }
interface InquiryRow {
  id: string; reference: string; name: string; organization: string; email: string;
  phone: string; service: string; details: string; status: string;
}

const limits = { name: 100, organization: 150, email: 254, phone: 50, service: 100, details: 5000 } as const;
const retryDelays = [60, 300, 900, 3600] as const;
const retryableCodes = new Set(["E_RATE_LIMIT_EXCEEDED", "E_DELIVERY_FAILED", "E_INTERNAL_SERVER_ERROR"]);

function isAllowedOrigin(origin: string, env: Env): boolean {
  const configuredOrigins = new Set(env.ALLOWED_ORIGINS.split(",").map((value) => value.trim()));
  if (configuredOrigins.has(origin)) return true;
  try {
    const url = new URL(origin);
    return url.protocol === "https:" && url.hostname.endsWith(".whimsyui-beta.pages.dev");
  } catch { return false; }
}
function corsHeaders(origin: string): HeadersInit {
  return { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Max-Age": "86400", Vary: "Origin" };
}
function json(origin: string, body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: corsHeaders(origin) });
}
function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function textField(value: unknown): string | null { return typeof value === "string" ? value.trim() : null; }
function errorDetails(error: unknown): { code: string; message: string } {
  const failure = error instanceof Error ? error : new Error(String(error));
  const code = "code" in failure && typeof failure.code === "string" ? failure.code : "UNKNOWN";
  return { code, message: failure.message.slice(0, 500) };
}
function publicReference(): string {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `WHM-${date}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
}
async function findInquiry(env: Env, id: string): Promise<InquiryRow | null> {
  return env.CONTACT_DB.prepare(
    "SELECT id, reference, name, organization, email, phone, service, details, status FROM inquiries WHERE id = ?",
  ).bind(id).first<InquiryRow>();
}
async function sendInquiry(env: Env, inquiry: InquiryRow): Promise<void> {
  const phoneDisplay = inquiry.phone || "Not provided";
  const subject = `Whimsy inquiry: ${inquiry.service} [${inquiry.reference}]`;
  const text = [`Reference: ${inquiry.reference}`, `Name: ${inquiry.name}`, `Organization: ${inquiry.organization}`,
    `Email: ${inquiry.email}`, `Phone: ${phoneDisplay}`, `Service: ${inquiry.service}`, "", "Project details:", inquiry.details].join("\n");
  const html = `<h2>New Whimsy inquiry</h2>
    <p><strong>Reference:</strong> ${escapeHtml(inquiry.reference)}</p>
    <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(inquiry.organization)}</p>
    <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneDisplay)}</p>
    <p><strong>Service:</strong> ${escapeHtml(inquiry.service)}</p>
    <p><strong>Project details:</strong></p><p>${escapeHtml(inquiry.details).replace(/\n/g, "<br>")}</p>`;
  await env.CONTACT_EMAIL.send({ to: env.TO_ADDRESS, from: { email: env.FROM_ADDRESS, name: "Whimsy Website" },
    replyTo: inquiry.email, subject, text, html });
}
async function markQueued(env: Env, id: string): Promise<void> {
  const now = new Date().toISOString();
  await env.CONTACT_DB.prepare(
    "UPDATE inquiries SET status = 'queued', updated_at = ?, last_error_code = NULL, last_error_message = NULL WHERE id = ?",
  ).bind(now, id).run();
}

async function acceptInquiry(request: Request, env: Env, origin: string): Promise<Response> {
  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json"))
    return json(origin, { ok: false, message: "The form sent an unsupported request. Please refresh and try again." }, 415);
  if (Number(request.headers.get("Content-Length") ?? 0) > 16_384)
    return json(origin, { ok: false, message: "Your message is too long to submit. Please shorten the project details." }, 413);
  let payload: ContactPayload;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    payload = parsed;
  } catch { return json(origin, { ok: false, message: "We could not read the form. Please refresh and try again." }, 400); }
  if (textField(payload.website)) return json(origin, { ok: true, message: "Thanks—your inquiry is on its way." }, 202);
  const clientId = textField(payload.submissionId);
  const name = textField(payload.name); const organization = textField(payload.organization);
  const email = textField(payload.email); const phone = textField(payload.phone) ?? "";
  const service = textField(payload.service); const details = textField(payload.details);
  if (!clientId || !/^[0-9a-f-]{36}$/i.test(clientId) || !name || !organization || !email || !service || !details)
    return json(origin, { ok: false, message: "Please complete every required field and try again." }, 400);
  if (name.length > limits.name || organization.length > limits.organization || email.length > limits.email ||
      phone.length > limits.phone || service.length > limits.service || details.length > limits.details)
    return json(origin, { ok: false, message: "One of the fields is too long. Please shorten it and try again." }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return json(origin, { ok: false, message: "Please enter a valid email address." }, 400);

  const existing = await env.CONTACT_DB.prepare("SELECT id, reference, status FROM inquiries WHERE client_id = ?")
    .bind(clientId).first<{ id: string; reference: string; status: string }>();
  if (existing) return json(origin, { ok: true, saved: true, reference: existing.reference,
    message: `Your inquiry is safely saved as ${existing.reference}. You do not need to submit it again.` }, 202);

  const id = crypto.randomUUID(); const reference = publicReference(); const now = new Date().toISOString();
  try {
    await env.CONTACT_DB.prepare(
      `INSERT INTO inquiries (id, client_id, reference, name, organization, email, phone, service, details, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?)`,
    ).bind(id, clientId, reference, name, organization, email, phone, service, details, now, now).run();
  } catch (error) {
    const failure = errorDetails(error);
    console.error(JSON.stringify({ message: "contact inquiry storage failed", errorCode: failure.code, error: failure.message }));
    return json(origin, { ok: false, saved: false,
      message: "We could not safely save your inquiry. Please try again in a moment or email johnbieniekgt@gmail.com directly." }, 503);
  }
  try {
    await env.CONTACT_QUEUE.send({ inquiryId: id } satisfies DeliveryMessage); await markQueued(env, id);
    console.log(JSON.stringify({ message: "contact inquiry queued", inquiryId: id, reference }));
    return json(origin, { ok: true, saved: true, queued: true, reference,
      message: `Thanks—your inquiry is safely saved as ${reference}.` }, 202);
  } catch (error) {
    const failure = errorDetails(error);
    await env.CONTACT_DB.prepare(
      "UPDATE inquiries SET status = 'queue_failed', updated_at = ?, last_error_code = ?, last_error_message = ? WHERE id = ?",
    ).bind(new Date().toISOString(), failure.code, failure.message, id).run();
    console.error(JSON.stringify({ message: "contact inquiry queue failed", inquiryId: id, reference,
      errorCode: failure.code, error: failure.message }));
    return json(origin, { ok: true, saved: true, queued: false, reference,
      message: `Your inquiry is safely saved as ${reference}, but delivery is delayed. You do not need to resubmit it.` }, 202);
  }
}

async function deliverMessage(message: Message<DeliveryMessage>, env: Env): Promise<void> {
  const inquiry = await findInquiry(env, message.body.inquiryId);
  if (!inquiry || inquiry.status === "sent") { message.ack(); return; }
  const now = new Date().toISOString();
  await env.CONTACT_DB.prepare(
    "UPDATE inquiries SET status = 'sending', delivery_attempts = delivery_attempts + 1, updated_at = ? WHERE id = ?",
  ).bind(now, inquiry.id).run();
  try {
    await sendInquiry(env, inquiry);
    await env.CONTACT_DB.prepare(
      "UPDATE inquiries SET status = 'sent', sent_at = ?, updated_at = ?, last_error_code = NULL, last_error_message = NULL WHERE id = ?",
    ).bind(now, now, inquiry.id).run();
    console.log(JSON.stringify({ message: "contact email sent", inquiryId: inquiry.id, reference: inquiry.reference, attempt: message.attempts }));
    message.ack();
  } catch (error) {
    const failure = errorDetails(error); const retryable = retryableCodes.has(failure.code) || failure.code === "UNKNOWN";
    const canRetry = retryable && message.attempts <= retryDelays.length; const status = canRetry ? "retrying" : "failed";
    await env.CONTACT_DB.prepare(
      "UPDATE inquiries SET status = ?, updated_at = ?, last_error_code = ?, last_error_message = ? WHERE id = ?",
    ).bind(status, new Date().toISOString(), failure.code, failure.message, inquiry.id).run();
    console.error(JSON.stringify({ message: "contact email failed", inquiryId: inquiry.id, reference: inquiry.reference,
      attempt: message.attempts, retryable, errorCode: failure.code, error: failure.message }));
    if (canRetry) message.retry({ delaySeconds: retryDelays[Math.min(message.attempts - 1, retryDelays.length - 1)] });
    else { await env.CONTACT_DLQ.send({ inquiryId: inquiry.id } satisfies DeliveryMessage); message.ack(); }
  }
}
async function recoverStalledInquiries(env: Env): Promise<void> {
  const cutoff = new Date(Date.now() - 15 * 60_000).toISOString();
  const rows = await env.CONTACT_DB.prepare(
    `SELECT id FROM inquiries WHERE status IN ('pending', 'queue_failed')
     OR (status IN ('queued', 'sending') AND updated_at < ?) ORDER BY created_at ASC LIMIT 50`,
  ).bind(cutoff).all<{ id: string }>();
  for (const row of rows.results) {
    try { await env.CONTACT_QUEUE.send({ inquiryId: row.id } satisfies DeliveryMessage); await markQueued(env, row.id); }
    catch (error) {
      const failure = errorDetails(error);
      console.error(JSON.stringify({ message: "contact inquiry recovery failed", inquiryId: row.id,
        errorCode: failure.code, error: failure.message }));
    }
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") ?? "";
    if (!isAllowedOrigin(origin, env)) return Response.json({ ok: false, message: "This form origin is not allowed." }, { status: 403 });
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
    if (request.method !== "POST") return json(origin, { ok: false, message: "Method not allowed." }, 405);
    return acceptInquiry(request, env, origin);
  },
  async queue(batch: MessageBatch<DeliveryMessage>, env: Env): Promise<void> {
    for (const message of batch.messages) await deliverMessage(message, env);
  },
  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(recoverStalledInquiries(env));
  },
} satisfies ExportedHandler<Env, DeliveryMessage>;
