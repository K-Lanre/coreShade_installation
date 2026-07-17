function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailBody({ name, email, phone, service, message }) {
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Project type: ${service}`,
    "",
    "Message:",
    message,
  ];

  const text = lines.join("\n");
  const html = `
    <h2>New contact inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(service)}</p>
    <p><strong>Message:</strong><br />${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  return { text, html };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }

  let body = req.body || {};

  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ message: "Invalid request payload." });
    }
  }

  const {
    name,
    email,
    phone,
    service,
    message,
  } = body;

  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({
      message: "Please complete all required fields before submitting.",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return res.status(500).json({
      message:
        "Email service is not configured. Check RESEND_API_KEY, RESEND_FROM_EMAIL, and RESEND_TO_EMAIL.",
    });
  }

  const subject = `New contact inquiry from ${name}`;
  const { text, html } = buildEmailBody({
    name,
    email,
    phone,
    service,
    message,
  });

  const payload = {
    from: fromEmail,
    to: [toEmail],
    reply_to: email,
    subject,
    text,
    html,
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const responseBody = await response.json().catch(() => ({}));

  if (!response.ok) {
    return res.status(502).json({
      message: responseBody?.message || "Resend rejected the message.",
      details: responseBody,
    });
  }

  return res.status(200).json({
    message: "Inquiry sent successfully.",
    id: responseBody?.id,
  });
}
