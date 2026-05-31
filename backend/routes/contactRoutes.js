import express from "express";
import { saveContact } from "../controllers/contactController.js";

const router = express.Router();
const contactAttempts = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const contactRateLimit = (req, res, next) => {
  const now = Date.now();
  const key = req.ip || req.socket.remoteAddress || "unknown";
  const attempt = contactAttempts.get(key) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };

  if (attempt.resetAt <= now) {
    attempt.count = 0;
    attempt.resetAt = now + RATE_LIMIT_WINDOW_MS;
  }

  attempt.count += 1;
  contactAttempts.set(key, attempt);

  if (attempt.count > RATE_LIMIT_MAX) {
    return res.status(429).json({ error: "Too many messages. Please try again later." });
  }

  return next();
};

router.post("/", contactRateLimit, saveContact);

export default router;
