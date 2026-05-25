import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const socials = [
  { href: "https://github.com/banakod",           icon: <FaGithub size={16} />,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/vinayak-banakod", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
];

const shake = {
  x: [0, -8, 8, -6, 6, -3, 3, 0],
  transition: { duration: 0.5 },
};

const Contact = () => {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState("");
  const [isSending, setIsSending] = useState(false);
  const [shakeKey, setShakeKey]   = useState(0);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSending(true);
      setStatus("");
      await axios.post(`${API_URL}/api/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(error.response?.data?.error || "Message failed to send");
      setShakeKey((k) => k + 1);
    } finally {
      setIsSending(false);
    }
  };

  const isSuccess = status === "success";

  return (
    <section id="contact" className="py-24 pb-32">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

        {/* ── LEFT INFO ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="kicker terminal-line mb-3">Open channel</p>
          <h2 className="section-title mb-6">Contact Me</h2>
          <p className="max-w-md text-lg leading-8 text-[#d8e2e7]">
            Send a message from the bridge. Share a project idea, internship
            opportunity, collaboration, or quick hello.
          </p>

          {/* Response orbit card */}
          <motion.div
            className="glass-panel hud-corners mt-8 rounded-lg p-5"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 text-[#5eead4]">
              <FaEnvelope />
              <span className="font-bold">Response orbit</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#d8e2e7]">
              I usually reply quickly when the signal is clear and the mission
              sounds interesting.
            </p>
          </motion.div>

          {/* ── SOCIAL MEDIA ICONS ── */}
          <motion.div
            className="mt-7"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-3 text-sm font-bold text-[#fff7ed]/60 uppercase tracking-widest">Find me on</p>
            <div className="flex gap-3">
              {socials.map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.18, rotate: 6, boxShadow: "0 0 14px rgba(255,138,101,0.35)" }}
                  whileTap={{ scale: 0.92 }}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-[#ff8a65]/20 bg-[#ff8a65]/5 text-[#d8e2e7] transition-colors hover:border-[#ff8a65]/55 hover:text-[#ffb86b]"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── FORM ── */}
        <motion.form
          key={shakeKey}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          animate={!isSuccess && status ? shake : {}}
          className="glass-panel hud-corners flex flex-col gap-5 rounded-lg p-6 md:p-8"
        >
          {["name", "email"].map((field) => (
            <label key={field} className="grid gap-2">
              <span className="text-sm font-bold capitalize text-[#fff7ed]">{field}</span>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field === "name" ? "Your Name" : "Your Email"}
                value={form[field]}
                onChange={handleChange}
                required
                className="rounded-lg border border-[#ff8a65]/15 bg-[#080609]/72 p-4 text-[#fff7ed] outline-none transition-all placeholder:text-[#7f8790] focus:border-[#ff8a65] focus:shadow-[0_0_12px_rgba(255,138,101,0.2)]"
              />
            </label>
          ))}

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#fff7ed]">Message</span>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="min-h-36 resize-y rounded-lg border border-[#ff8a65]/15 bg-[#080609]/72 p-4 text-[#fff7ed] outline-none transition-all placeholder:text-[#7f8790] focus:border-[#ff8a65] focus:shadow-[0_0_12px_rgba(255,138,101,0.2)]"
            />
          </label>

          {/* ── SEND BUTTON ── */}
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={!isSending ? { scale: 1.03, boxShadow: "0 0 22px rgba(255,138,101,0.45)" } : {}}
            whileTap={!isSending ? { scale: 0.97 } : {}}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#ff8a65] px-6 py-4 font-black text-[#160b0a] transition-all hover:bg-[#ffb86b] disabled:cursor-not-allowed disabled:opacity-60"
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

          {/* STATUS MESSAGE */}
          <AnimatePresence>
            {status && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
                  isSuccess
                    ? "border-[#5eead4]/30 bg-[#5eead4]/10 text-[#ccfbf1]"
                    : "border-rose-300/30 bg-rose-300/10 text-rose-100"
                }`}
              >
                {isSuccess ? "✅ Message sent successfully!" : `❌ ${status}`}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
