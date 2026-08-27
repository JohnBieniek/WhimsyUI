# whimsy-contact-form

A Cloudflare Worker that accepts contact-form submissions and emails them
to a fixed inbox using the Cloudflare **Email Service** `send_email` binding.

## Prerequisites

1. **Cloudflare DNS** on your sending domain (required for Email Service).
2. **Onboard the sending domain**: dashboard → **Compute → Email Service →
   Email Sending → Onboard Domain**. Cloudflare adds SPF, DKIM, bounce (MX),
   and DMARC records automatically.
3. Replace the placeholder values in `wrangler.jsonc`:
   - `destination_address` → your inbox
   - `allowed_sender_addresses` → the `From` address on your onboarded domain
   - `ALLOWED_ORIGIN`, `FROM_ADDRESS`, `TO_ADDRESS` in `vars`

## Why the binding is restricted

`destination_address` + `allowed_sender_addresses` lock the binding so that
even if the endpoint is compromised, it can only send **from** the approved
address **to** the approved inbox — it cannot email arbitrary recipients or
spoof arbitrary senders.

## Develop

```bash
npm install
npx wrangler types   # generate worker-configuration.d.ts (includes binding types)
npx wrangler dev
```

Without `remote: true`, `wrangler dev` simulates the email binding locally
(emails are logged to the console, not actually sent). To send real mail
during local dev, add `"remote": true` to the `send_email` entry.

### Test locally

```bash
curl -X POST http://localhost:8787/ \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -d '{"name":"Jane","email":"jane@example.com","message":"Hello!"}'
```

## Deploy

```bash
npx wrangler deploy
```

## Frontend usage

POST JSON `{ name, email, message }` to the Worker URL from your site:

```js
await fetch("https://whimsy-contact-form.<sub>.workers.dev", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message }),
});
```
