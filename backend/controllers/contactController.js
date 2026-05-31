import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import { sendContactEmail } from "../utils/mailer.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const saveContact = async (req, res) => {
  try {
    const { name, email, message, website } = req.body;

    if (website) {
      return res.status(201).json({ message: "Message sent successfully" });
    }

    // Server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    if (name.trim().length < 2 || name.trim().length > 80) {
      return res.status(400).json({ error: "Name must be between 2 and 80 characters." });
    }
    if (!EMAIL_RE.test(email.trim())) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }
    if (message.trim().length < 10 || message.trim().length > 2000) {
      return res.status(400).json({ error: "Message must be between 10 and 2000 characters." });
    }

    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({ name: name.trim(), email: email.trim(), message: message.trim() });
      await newContact.save();
    }

    await sendContactEmail({ name: name.trim(), email: email.trim(), message: message.trim() });

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    if (error.code === "EAUTH" || error.responseCode === 535) {
      return res.status(500).json({ error: "Email login failed. Check EMAIL_USER and EMAIL_PASS in backend/.env." });
    }
    res.status(500).json({ error: error.message });
  }
};

export { saveContact };
