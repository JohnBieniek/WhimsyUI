"use client";

import { FormEvent, useRef, useState } from "react";

const endpoint = process.env.NEXT_PUBLIC_CONTACT_WORKER_URL ??
  "https://whimsy-contact-form.johnbieniekgt.workers.dev";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"warning"|"error">("idle");
  const [message, setMessage] = useState("Your information is used only to respond to your inquiry.");
  const submissionId = useRef<string | null>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("Safely saving your inquiry…");
    const form = event.currentTarget;
    submissionId.current ??= crypto.randomUUID();
    const payload = { ...Object.fromEntries(new FormData(form)), submissionId: submissionId.current };
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json().catch(() => null) as { ok?: boolean; saved?: boolean; queued?: boolean; message?: string } | null;
      if (!response.ok || !result?.ok) {
        setStatus("error");
        setMessage(result?.message ?? "We could not safely save your inquiry. Please try again or email johnbieniekgt@gmail.com directly.");
        return;
      }
      form.reset();
      submissionId.current = null;
      setStatus(result.queued === false ? "warning" : "sent");
      setMessage(result.message ?? "Thanks—your inquiry is safely saved.");
    } catch {
      setStatus("error");
      setMessage("We could not confirm that your inquiry was saved. Please try again; the same submission will not be duplicated. You can also email johnbieniekgt@gmail.com directly.");
    }
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-heading"><div><h3>Let’s make a plan.</h3><p>Fields marked * are required.</p></div></div>
    <div className="form-row"><label>Name *<input required name="name" autoComplete="name" placeholder="Your full name"/></label><label>Business or organization *<input required name="organization" autoComplete="organization" placeholder="Organization name"/></label></div>
    <div className="form-row"><label>Email *<input required type="email" name="email" autoComplete="email" placeholder="you@example.com"/></label><label><span className="field-label"><span>Phone</span><small>(optional)</small></span><input name="phone" autoComplete="tel" placeholder="(517) 555-0123"/></label></div>
    <label>What do you need help with? *<select required name="service" defaultValue=""><option value="" disabled>Choose a service</option><option>Strategy session</option><option>Brand & advertising plan</option><option>Business consulting</option><option>Website support</option><option>Domain change & transfer</option><option>Single-page website</option><option>Five-page website</option><option>Not sure yet</option></select></label>
    <label>Project details *<textarea required name="details" rows={5} placeholder="Tell us about your goals, audience, timeline, and budget."/></label>
    <input name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <button className="button" disabled={status==="sending"}>{status==="sending"?"Sending…":"Send inquiry ↗"}</button>
    <p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p>
  </form>;
}
