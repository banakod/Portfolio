import nodemailer from "nodemailer";

const requiredEmailConfig = [
  "EMAIL_HOST",
  "EMAIL_PORT",
  "EMAIL_USER",
  "EMAIL_PASS",
  "EMAIL_TO"
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PLACEHOLDER_EMAILS = new Set([
  "your_email@gmail.com",
  "you@example.com",
  "example@gmail.com"
]);

const escapeHtml = (value) => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const getEmailAddress = (key, { required = true } = {}) => {
  const value = process.env[key]?.trim();

  if (!value) {
    if (!required) {
      return "";
    }
    throw new Error(`${key} is missing in backend/.env.`);
  }
  if (!EMAIL_RE.test(value) || PLACEHOLDER_EMAILS.has(value.toLowerCase())) {
    throw new Error(`${key} must be a real email address in backend/.env.`);
  }

  return value;
};

const getTransporter = () => {
  const missingKeys = requiredEmailConfig.filter((key) => !process.env[key]);

  if (missingKeys.length > 0) {
    throw new Error(`Email service is not configured. Missing: ${missingKeys.join(", ")}`);
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

const sendContactEmail = async ({ name, email, message }) => {
  const transporter = getTransporter();
  const fromAddress = getEmailAddress("EMAIL_FROM", { required: false }) || getEmailAddress("EMAIL_USER");
  const toAddress = getEmailAddress("EMAIL_TO");

  return transporter.sendMail({
    from: `"Portfolio Contact" <${fromAddress}>`,
    to: toAddress,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New portfolio contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `
  });
};

export { sendContactEmail };
