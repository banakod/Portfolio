import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from "../assets/hero.jpeg";

const socials = [
  { href: "https://github.com/banakod",                  icon: <FaGithub size={18} />,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/vinayak-banakod", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
];

const Hero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden pt-28">
    <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr]">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="kicker terminal-line mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          MERN Stack Developer | Cyber Security Enthusiast
        </motion.p>

        <motion.h1
          className="max-w-4xl text-5xl font-black leading-tight md:text-7xl"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Building secure, responsive{" "}
          <span className="neon-text">MERN stack</span> web applications.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-8"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi, I am Vinayak Banakod. I build React, Node.js, Express, and
          MongoDB projects with clean interfaces, practical validation, and a
          security-aware development mindset.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          className="hero-btns mt-9 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.06, boxShadow: "0 0 18px rgba(37,99,235,0.28)" }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary inline-flex items-center gap-3 rounded-lg px-6 py-3 font-black"
          >
            View Projects <FaArrowDown />
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download="Vinayak_Banakod_Resume.pdf"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="btn-resume inline-flex items-center gap-3 rounded-lg px-6 py-3 font-black"
          >
            Download Resume <FaArrowDown />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="btn-contact inline-flex items-center rounded-lg px-6 py-3 font-bold"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          className="mt-8 flex gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {socials.map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.18, rotate: 6, boxShadow: "0 0 14px rgba(37,99,235,0.28)" }}
              whileTap={{ scale: 0.92 }}
              className="grid h-11 w-11 place-items-center rounded-lg border transition-colors"
              style={{ borderColor: "var(--glass-border)", background: "var(--icon-bg)", color: "var(--text-secondary)" }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT - HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.15, type: "spring", stiffness: 80 }}
        className="hero-image glass-panel hud-corners relative mx-auto aspect-square w-full max-w-[430px] overflow-hidden rounded-lg"
      >
        <img
          src={heroImage}
          alt="Vinayak Banakod - MERN Stack Developer"
          className="h-full w-full object-cover"
        />

        {/* glow ring */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg"
          animate={{ boxShadow: ["0 0 0px rgba(37,99,235,0)", "0 0 30px rgba(37,99,235,0.22)", "0 0 0px rgba(37,99,235,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* status bar uses CSS variable so it adapts to light mode */}
        <div className="hero-overlay-bar absolute inset-x-0 bottom-0 p-5">
          <p className="text-sm font-bold" style={{ color: "var(--accent-teal)" }}>Orbit Status</p>
          <div className="mt-1 flex items-center gap-2">
            <motion.span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--accent-secondary)" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            <p className="text-xl font-black" style={{ color: "var(--text-primary)" }}>
              Open to internships and projects
            </p>
          </div>
        </div>
      </motion.div>

    </div>

    {/* SCROLL ARROW */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      style={{ color: "var(--accent-teal)", opacity: 0.65 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
      <FaArrowDown size={14} />
    </motion.div>
  </section>
);

export default Hero;
