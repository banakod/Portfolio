import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28"
    >
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="kicker terminal-line mb-4">MERN developer mission control</p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-[#fff7ed] md:text-7xl">
            Building digital worlds with a galaxy-grade interface.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8e2e7]">
            Hi, I am Vinayak. I craft responsive MERN stack apps, animated
            portfolio experiences, and security-aware web interfaces that feel
            fast, sharp, and memorable.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-lg bg-[#ff8a65] px-6 py-3 font-black text-[#160b0a] transition hover:bg-[#ffb86b]"
            >
              View Projects <FaArrowDown />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-[#5eead4]/30 px-6 py-3 font-bold text-[#ccfbf1] transition hover:bg-[#5eead4]/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="https://github.com/"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-lg border border-[#ff8a65]/20 bg-[#ff8a65]/5 text-[#d8e2e7] transition hover:border-[#ff8a65]/50 hover:text-[#ffb86b]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-lg border border-[#ff8a65]/20 bg-[#ff8a65]/5 text-[#d8e2e7] transition hover:border-[#ff8a65]/50 hover:text-[#ffb86b]"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-panel hud-corners relative mx-auto aspect-square w-full max-w-[430px] overflow-hidden rounded-lg"
        >
          <img
            src={heroImage}
            alt="Vinayak portfolio profile"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 border-t border-[#ff8a65]/20 bg-[#080609]/75 p-5 backdrop-blur-md">
            <p className="text-sm font-bold text-[#5eead4]">Orbit Status</p>
            <p className="mt-1 text-2xl font-black text-[#fff7ed]">Available for projects</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
