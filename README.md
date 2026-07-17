# Coreshade Installation

## Contact email setup

The contact form posts to `/api/send-email`. In production, `api/send-email.js`
is a Vercel serverless function that sends the inquiry through Resend. Vite uses
the same handler locally, so restart `npm run dev` after changing its config.

1. Create a Resend account and add a verified sending domain.
2. Create a Resend API key restricted to sending email.
3. Create a local `.env` file from `.env.example` and set `RESEND_API_KEY`,
   `RESEND_FROM_EMAIL` (an address on the verified domain), and
   `RESEND_TO_EMAIL` (the receiving mailbox).
4. In Vercel, add those same three `RESEND_*` variables to Production, Preview,
   and Development, then redeploy.

Do not expose `RESEND_*` values with a `VITE_` prefix. The browser should only
call `/api/send-email`.

A local `404` for `/api/send-email` means the dev server needs restarting; Vite
registers the endpoint when it loads `vite.config.js`.

## Validation

```powershell
npm test
npm run build
```
