import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import { useState } from "react";

const EMAIL = "vinayakbanakod@gmail.com";

const socials = [
  { href: "https://github.com/banakod",                  icon: <FaGithub size={16} />,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/vinayak-banakod", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 pb-32">
      <div className="section-shell">

        <motion.p
          className="kicker terminal-line mb-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Open channel
        </motion.p>
        <motion.h2
          className="section-title mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 mb-8" style={{ color: "var(--text-secondary)" }}>
              Have a project idea, internship opportunity, or just want to say hello?
              Reach out directly via email — I usually reply within 24 hours.
            </p>

            {/* Email card */}
            <motion.div
              className="glass-panel hud-corners rounded-xl p-6"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4" style={{ color: "var(--accent-primary)" }}>
                <FaEnvelope size={18} />
                <span className="font-bold text-lg">Email me directly</span>
              </div>

              {/* Email address display with copy */}
              <div
                className="flex items-center justify-between gap-3 rounded-lg px-4 py-3"
                style={{ background: "var(--icon-bg)", border: "1px solid var(--glass-border)" }}
              >
                <span className="font-mono text-sm font-bold" style={{ color: "var(--accent-primary)" }}>
                  {EMAIL}
                </span>
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className="shrink-0"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="Copy email"
                >
                  <FaCopy size={14} />
                </motion.button>
              </div>

              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-semibold mt-3"
                  style={{ color: "var(--accent-primary)" }}
                >
                  ✅ Copied to clipboard!
                </motion.p>
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT — socials + availability */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Availability card */}
            <motion.div
              className="glass-panel hud-corners rounded-xl p-6"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ background: "#22c55e" }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                <span className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                  Available for work
                </span>
              </div>
              <p className="text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                Currently open to internships, freelance projects, and full-time opportunities.
                Response time is usually within 24 hours.
              </p>
            </motion.div>

            {/* Social links card */}
            <motion.div
              className="glass-panel hud-corners rounded-xl p-6"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
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
                    whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 0 12px rgba(37,99,235,0.25)" }}
                    whileTap={{ scale: 0.92 }}
                    className="grid h-12 w-12 place-items-center rounded-lg transition-colors"
                    style={{ border: "1px solid var(--glass-border)", background: "var(--icon-bg)", color: "var(--text-secondary)" }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
