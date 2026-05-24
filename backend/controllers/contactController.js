import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import { sendContactEmail } from "../utils/mailer.js";

const saveContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required"
      });
    }

    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({ name, email, message });
      await newContact.save();
    }

    await sendContactEmail({ name, email, message });

    res.status(201).json({
      message: "Message sent successfully"
    });
  } catch (error) {
    if (error.code === "EAUTH" || error.responseCode === 535) {
      return res.status(500).json({
        error: "Email login failed. Check EMAIL_USER and EMAIL_PASS in backend/.env."
      });
    }

    res.status(500).json({
      error: error.message
    });
  }
};

export { saveContact };
