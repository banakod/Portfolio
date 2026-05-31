import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const socials = [
  { href: "https://github.com/banakod",                  icon: <FaGithub size={16} />,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/vinayak-banakod", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim())                      errors.name    = "Name is required.";
  else if (form.name.trim().length < 2)       errors.name    = "Name must be at least 2 characters.";
  else if (form.name.trim().length > 80)      errors.name    = "Name is too long.";
  if (!form.email.trim())                     errors.email   = "Email is required.";
  else if (!EMAIL_RE.test(form.email.trim())) errors.email   = "Enter a valid email address.";
  if (!form.message.trim())                   errors.message = "Message is required.";
  else if (form.message.trim().length < 10)   errors.message = "Message must be at least 10 characters.";
  else if (form.message.trim().length > 2000) errors.message = "Message is too long (max 2000 chars).";
  return errors;
}

const shakeAnim = { x: [0, -8, 8, -6, 6, -3, 3, 0], transition: { duration: 0.45 } };

const Contact = () => {
  const [form,      setForm]      = useState({ name: "", email: "", message: "", website: "" });
  const [errors,    setErrors]    = useState({});
  const [touched,   setTouched]   = useState({});
  const [status,    setStatus]    = useState("");
  const [isSending, setIsSending] = useState(false);
  const [shakeKey,  setShakeKey]  = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: errs[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [name]: errs[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) { setShakeKey((k) => k + 1); return; }
    try {
      setIsSending(true);
      setStatus("");
      await axios.post(`${API_URL}/api/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", message: "", website: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      setStatus(error.response?.data?.error || "Message failed to send. Please try again.");
      setShakeKey((k) => k + 1);
    } finally {
      setIsSending(false);
    }
  };

  const isSuccess = status === "success";
  const fieldClass = (field) => `form-input${errors[field] && touched[field] ? " error" : ""}`;

  return (
    <section id="contact" className="py-24 pb-32">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="kicker terminal-line mb-3">Open channel</p>
          <h2 className="section-title mb-6">Contact Me</h2>
          <p className="max-w-md text-lg leading-8" style={{ color: "var(--text-secondary)" }}>
            Send a message from the bridge. Share a project idea, internship
            opportunity, collaboration, or quick hello.
          </p>

          <motion.div
            className="glass-panel hud-corners mt-8 rounded-lg p-5"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3" style={{ color: "var(--accent-teal)" }}>
              <FaEnvelope />
              <span className="font-bold">Response orbit</span>
            </div>
            <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
              I usually reply quickly when the signal is clear and the mission sounds interesting.
            </p>
          </motion.div>

          <motion.div
            className="mt-7"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Find me on
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.18, rotate: 6, boxShadow: "0 0 12px rgba(37,99,235,0.25)" }}
                  whileTap={{ scale: 0.92 }}
                  className="grid h-11 w-11 place-items-center rounded-lg transition-colors"
                  style={{ border: "1px solid var(--glass-border)", background: "var(--icon-bg)", color: "var(--text-secondary)" }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* FORM */}
        <motion.form
          key={shakeKey}
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          animate={!isSuccess && status ? shakeAnim : {}}
          className="glass-panel hud-corners flex flex-col gap-5 rounded-lg p-6 md:p-8"
        >
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          {/* NAME */}
          <div className="grid gap-1">
            <label className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>Name</label>
            <input type="text" name="name" placeholder="Your Name" value={form.name}
              onChange={handleChange} onBlur={handleBlur} className={fieldClass("name")} autoComplete="name" />
            <AnimatePresence>
              {errors.name && touched.name && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-xs font-semibold text-red-500 mt-0.5">Warning: {errors.name}</motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* EMAIL */}
          <div className="grid gap-1">
            <label className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>Email</label>
            <input type="email" name="email" placeholder="Your Email" value={form.email}
              onChange={handleChange} onBlur={handleBlur} className={fieldClass("email")} autoComplete="email" />
            <AnimatePresence>
              {errors.email && touched.email && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-xs font-semibold text-red-500 mt-0.5">Warning: {errors.email}</motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* MESSAGE */}
          <div className="grid gap-1">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>Message</label>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{form.message.length}/2000</span>
            </div>
            <textarea name="message" placeholder="Your message..." rows="5" value={form.message}
              onChange={handleChange} onBlur={handleBlur} className={`${fieldClass("message")} min-h-36 resize-y`} />
            <AnimatePresence>
              {errors.message && touched.message && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-xs font-semibold text-red-500 mt-0.5">Warning: {errors.message}</motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* SEND BUTTON */}
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={!isSending ? { scale: 1.03, boxShadow: "0 0 18px rgba(37,99,235,0.28)" } : {}}
            whileTap={!isSending ? { scale: 0.97 } : {}}
          className="inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 font-black text-white transition-all disabled:cursor-not-allowed disabled:opacity-60"
            style={{ background: isSending ? "var(--accent-primary)" : "var(--btn-primary-bg)" }}
          >
            {isSending ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block h-4 w-4 rounded-full border-2 border-[#160b0a]/30 border-t-[#160b0a]"
                />
                Sending...
              </>
            ) : (
              <>Send Message <FaPaperPlane /></>
            )}
          </motion.button>

          {/* STATUS BANNER */}
          <AnimatePresence>
            {status && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-lg border px-4 py-3 text-sm font-semibold"
                style={isSuccess ? {
                  borderColor: "rgba(13,148,136,0.35)",
                  background: "rgba(13,148,136,0.10)",
                  color: "var(--accent-teal)",
                } : {
                  borderColor: "rgba(239,68,68,0.35)",
                  background: "rgba(239,68,68,0.08)",
                  color: "#ef4444",
                }}
              >
                {isSuccess ? "Message sent successfully!" : `Message failed to send: ${status}`}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
