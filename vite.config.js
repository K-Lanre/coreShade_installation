import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import sendEmail from "./api/send-email.js";

async function readJsonBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");

  if (!rawBody) {
    return {};
  }

  return JSON.parse(rawBody);
}

function createResponseBridge(res) {
  return {
    statusCode: 200,
    headers: {},
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      if (!res.headersSent) {
        res.statusCode = this.statusCode;

        for (const [name, value] of Object.entries(this.headers)) {
          res.setHeader(name, value);
        }

        res.setHeader("Content-Type", "application/json");
      }

      res.end(JSON.stringify(payload));
      return this;
    },
  };
}

function contactEmailBridge() {
  return {
    name: "contact-email-bridge",
    configureServer(server) {
      server.middlewares.use("/api/send-email", async (req, res, next) => {
        if (req.method !== "POST") {
          next();
          return;
        }

        try {
          req.body = await readJsonBody(req);
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Invalid request payload." }));
          return;
        }

        try {
          await sendEmail(req, createResponseBridge(res));
        } catch (error) {
          next(error);
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use("/api/send-email", async (req, res, next) => {
        if (req.method !== "POST") {
          next();
          return;
        }

        try {
          req.body = await readJsonBody(req);
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Invalid request payload." }));
          return;
        }

        try {
          await sendEmail(req, createResponseBridge(res));
        } catch (error) {
          next(error);
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Vite exposes only VITE_-prefixed values to the client; the bridge also
  // needs the server-only Resend values from the local .env file.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [react(), contactEmailBridge()],
  };
});
