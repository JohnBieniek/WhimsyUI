# Cloudflare contact worker contract

Set `NEXT_PUBLIC_CONTACT_WORKER_URL` to the deployed Worker URL. The contact form sends a JSON `POST` with `name`, `organization`, `email`, `phone`, `service`, `details`, and an empty `website` honeypot.

The Worker should reject a populated `website` field, validate required values, rate-limit requests, deliver or store the inquiry, and return a `2xx` response. Allow the production site origin with `Access-Control-Allow-Origin`, and answer `OPTIONS` requests when the Worker is hosted on a separate origin.
