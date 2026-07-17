import test from "node:test";
import assert from "node:assert/strict";

import handler from "../api/send-email.js";

function createResponseMock() {
  return {
    statusCode: 200,
    headers: {},
    body: null,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
  };
}

function restoreEnv(snapshot) {
  for (const [key, value] of Object.entries(snapshot)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

test("send-email handler builds the expected Resend request", async () => {
  const originalEnv = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
  };
  const originalFetch = global.fetch;

  process.env.RESEND_API_KEY = "re_test_key";
  process.env.RESEND_FROM_EMAIL = "hello@coreshade.com";
  process.env.RESEND_TO_EMAIL = "inquiries@coreshade.com";

  let capturedRequest = null;
  global.fetch = async (url, options) => {
    capturedRequest = { url, options };
    return {
      ok: true,
      json: async () => ({ id: "email_123" }),
    };
  };

  try {
    const req = {
      method: "POST",
      body: {
        name: "Ada Lovelace",
        email: "ada@example.com",
        phone: "+2348032687681",
        service: "Commercial Office",
        message: "Please send a quote for our project.",
      },
    };
    const res = createResponseMock();

    await handler(req, res);

    assert.equal(res.statusCode, 200);
    assert.deepEqual(res.body, {
      message: "Inquiry sent successfully.",
      id: "email_123",
    });
    assert.ok(capturedRequest);
    assert.equal(capturedRequest.url, "https://api.resend.com/emails");
    assert.equal(capturedRequest.options.method, "POST");
    assert.equal(
      capturedRequest.options.headers.Authorization,
      "Bearer re_test_key"
    );

    const payload = JSON.parse(capturedRequest.options.body);
    assert.equal(payload.from, "hello@coreshade.com");
    assert.deepEqual(payload.to, ["inquiries@coreshade.com"]);
    assert.equal(payload.reply_to, "ada@example.com");
    assert.equal(
      payload.subject,
      "New contact inquiry from Ada Lovelace"
    );
    assert.equal(
      payload.text,
      "Name: Ada Lovelace\n" +
        "Email: ada@example.com\n" +
        "Phone: +2348032687681\n" +
        "Project type: Commercial Office\n" +
        "\n" +
        "Message:\n" +
        "Please send a quote for our project."
    );
    assert.match(payload.html, /<h2>New contact inquiry<\/h2>/);
    assert.match(payload.html, /<strong>Name:<\/strong> Ada Lovelace/);
    assert.match(payload.html, /<strong>Email:<\/strong> ada@example\.com/);
    assert.match(
      payload.html,
      /<strong>Phone:<\/strong> \+2348032687681/
    );
    assert.match(
      payload.html,
      /<strong>Project type:<\/strong> Commercial Office/
    );
    assert.match(
      payload.html,
      /<strong>Message:<\/strong><br \/>Please send a quote for our project\./
    );
  } finally {
    global.fetch = originalFetch;
    restoreEnv(originalEnv);
  }
});

test("send-email handler rejects missing required fields", async () => {
  const originalEnv = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
  };
  const originalFetch = global.fetch;

  process.env.RESEND_API_KEY = "re_test_key";
  process.env.RESEND_FROM_EMAIL = "hello@coreshade.com";
  process.env.RESEND_TO_EMAIL = "inquiries@coreshade.com";

  let fetchCalled = false;
  global.fetch = async () => {
    fetchCalled = true;
    return {
      ok: true,
      json: async () => ({}),
    };
  };

  try {
    const req = {
      method: "POST",
      body: {
        name: "Ada Lovelace",
        email: "ada@example.com",
        phone: "",
        service: "Commercial Office",
        message: "Please send a quote for our project.",
      },
    };
    const res = createResponseMock();

    await handler(req, res);

    assert.equal(res.statusCode, 400);
    assert.equal(fetchCalled, false);
    assert.deepEqual(res.body, {
      message: "Please complete all required fields before submitting.",
    });
  } finally {
    global.fetch = originalFetch;
    restoreEnv(originalEnv);
  }
});
