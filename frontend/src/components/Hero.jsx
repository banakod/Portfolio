import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import heroImage from "../assets/hero.png";
import resumePDF from "../assets/vinayak cv.pdf";

const socials = [
  { href: "https://github.com/banakod",icon: <FaGithub size={18} />,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/vinayak-banakod", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr]">

        {/* ── LEFT COLUMN ── */}
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
            MERN developer mission control
          </motion.p>

          <motion.h1
            className="max-w-4xl text-5xl font-black leading-tight text-[#fff7ed] md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Building digital worlds with a{" "}
            <span className="neon-text">galaxy-grade</span> interface.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-[#d8e2e7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I am Vinayak Banakod. I craft responsive MERN stack apps,
            animated portfolio experiences, and security-aware web interfaces
            that feel fast, sharp, and memorable.
          </motion.p>

          {/* ── CTA BUTTONS ── */}
          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* View Projects */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, boxShadow: "0 0 22px rgba(255,138,101,0.55)" }}
              whileTap={{ scale: 0.96 }}
              className="btn-primary inline-flex items-center gap-3 rounded-lg bg-[#ff8a65] px-6 py-3 font-black text-[#160b0a] transition-colors hover:bg-[#ffb86b]"
            >
              View Projects <FaArrowDown />
            </motion.a>

            {/* ── RESUME DOWNLOAD BUTTON ── */}
            <motion.a
              href={resumePDF}
              download="Vinayak_Banakod_Resume.pdf"
              whileHover={{ scale: 1.06, boxShadow: "0 0 22px rgba(251,191,36,0.5)" }}
              whileTap={{ scale: 0.96 }}
              className="btn-resume inline-flex items-center gap-3 rounded-lg border-2 border-[#fbbf24]/60 bg-[#fbbf24]/10 px-6 py-3 font-black text-[#fbbf24] transition-all hover:bg-[#fbbf24]/20 hover:border-[#fbbf24]"
            >
              Download CV <FaDownload />
            </motion.a>

            {/* Contact */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06, boxShadow: "0 0 16px rgba(94,234,212,0.35)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center rounded-lg border border-[#5eead4]/30 px-6 py-3 font-bold text-[#ccfbf1] transition-all hover:bg-[#5eead4]/10 hover:border-[#5eead4]/60"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* ── SOCIAL ICONS (GitHub + LinkedIn + Twitter + Instagram) ── */}
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
                whileHover={{ scale: 1.18, rotate: 6, boxShadow: "0 0 16px rgba(255,138,101,0.35)" }}
                whileTap={{ scale: 0.92 }}
                className="grid h-11 w-11 place-items-center rounded-lg border border-[#ff8a65]/20 bg-[#ff8a65]/5 text-[#d8e2e7] transition-colors hover:border-[#ff8a65]/55 hover:text-[#ffb86b]"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN — HERO IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, type: "spring", stiffness: 80 }}
          className="glass-panel hud-corners relative mx-auto aspect-square w-full max-w-[430px] overflow-hidden rounded-lg"
        >
          <img
            src={heroImage}
            alt="Vinayak portfolio profile"
            className="h-full w-full object-cover"
          />

          {/* animated glow ring */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-lg"
            animate={{ boxShadow: ["0 0 0px rgba(255,138,101,0)", "0 0 40px rgba(255,138,101,0.28)", "0 0 0px rgba(255,138,101,0)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute inset-x-0 bottom-0 border-t border-[#ff8a65]/20 bg-[#080609]/75 p-5 backdrop-blur-md">
            <p className="text-sm font-bold text-[#5eead4]">Orbit Status</p>
            <div className="mt-1 flex items-center gap-2">
              <motion.span
                className="inline-block h-2.5 w-2.5 rounded-full bg-[#5eead4]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              <p className="text-2xl font-black text-[#fff7ed]">Available for projects</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── FLOATING SCROLL-DOWN ARROW ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#5eead4]/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <FaArrowDown size={14} />
      </motion.div>
    </section>
  );
};

export default Hero;
