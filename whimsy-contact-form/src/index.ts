interface ContactPayload {
  name?: unknown; organization?: unknown; email?: unknown; phone?: unknown;
  service?: unknown; details?: unknown; website?: unknown;
}

const limits = { name: 100, organization: 150, email: 254, phone: 50, service: 100, details: 5000 } as const;

function allowedOrigins(env: Env): Set<string> {
  return new Set(env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim()));
}

function corsHeaders(origin: string): HeadersInit {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(origin: string, body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: corsHeaders(origin) });
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function textField(value: unknown): string | null {
  return typeof value === "string" ? value.trim() : null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") ?? "";
    if (!allowedOrigins(env).has(origin)) {
      return Response.json({ ok: false, error: "Origin not allowed" }, { status: 403 });
    }
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
    if (request.method !== "POST") return json(origin, { ok: false, error: "Method not allowed" }, 405);
    if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
      return json(origin, { ok: false, error: "Content-Type must be application/json" }, 415);
    }
    if (Number(request.headers.get("Content-Length") ?? 0) > 16_384) {
      return json(origin, { ok: false, error: "Request body is too large" }, 413);
    }

    let payload: ContactPayload;
    try {
      const parsed: unknown = await request.json();
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return json(origin, { ok: false, error: "Invalid JSON body" }, 400);
      }
      payload = parsed;
    } catch {
      return json(origin, { ok: false, error: "Invalid JSON body" }, 400);
    }

    if (textField(payload.website)) return json(origin, { ok: true });

    const name = textField(payload.name);
    const organization = textField(payload.organization);
    const email = textField(payload.email);
    const phone = textField(payload.phone) ?? "";
    const service = textField(payload.service);
    const details = textField(payload.details);
    if (!name || !organization || !email || !service || !details) {
      return json(origin, { ok: false, error: "Missing required fields" }, 400);
    }
    if (name.length > limits.name || organization.length > limits.organization || email.length > limits.email ||
        phone.length > limits.phone || service.length > limits.service || details.length > limits.details) {
      return json(origin, { ok: false, error: "Field length exceeds limit" }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json(origin, { ok: false, error: "Invalid email address" }, 400);
    }

    const phoneDisplay = phone || "Not provided";
    const subject = `Whimsy inquiry: ${service}`;
    const text = [`Name: ${name}`, `Organization: ${organization}`, `Email: ${email}`, `Phone: ${phoneDisplay}`,
      `Service: ${service}`, "", "Project details:", details].join("\n");
    const html = `<h2>New Whimsy inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phoneDisplay)}</p>
      <p><strong>Service:</strong> ${escapeHtml(service)}</p>
      <p><strong>Project details:</strong></p><p>${escapeHtml(details).replace(/\n/g, "<br>")}</p>`;

    try {
      const result = await env.CONTACT_EMAIL.send({
        to: env.TO_ADDRESS,
        from: { email: env.FROM_ADDRESS, name: "Whimsy Website" },
        replyTo: email, subject, text, html,
      });
      console.log(JSON.stringify({ message: "contact email sent", messageId: result.messageId }));
      return json(origin, { ok: true });
    } catch (error) {
      const failure = error instanceof Error ? error : new Error(String(error));
      const code = "code" in failure && typeof failure.code === "string" ? failure.code : undefined;
      console.error(JSON.stringify({ message: "contact email failed", code, error: failure.message }));
      return json(origin, { ok: false, error: "Failed to send message" }, 500);
    }
  },
} satisfies ExportedHandler<Env>;
