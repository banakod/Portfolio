import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { FaCode, FaWandMagicSparkles } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaCode />,
    title: "Full-stack builds",
    text: "React interfaces connected to Node, Express, MongoDB, and clean API flows.",
  },
  {
    icon: <FaWandMagicSparkles />,
    title: "Animated UI",
    text: "Motion, transitions, and detail-focused layouts that keep the site alive.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security mindset",
    text: "Practical attention to validation, backend boundaries, and safer data handling.",
  },
];

const About = () => (
  <section id="about" className="py-24">
    <div className="section-shell">
      <motion.p
        className="kicker terminal-line mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        About the captain
      </motion.p>
      <motion.h2
        className="section-title mb-7"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        About Me
      </motion.h2>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.p
          className="text-lg leading-8 text-[#d8e2e7]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          I am a passionate MERN stack developer interested in web development,
          cyber security, and creating attractive animated websites. I like
          building experiences that feel polished on the surface and dependable
          underneath.
        </motion.p>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.55, type: "spring", stiffness: 90 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel hud-corners rounded-lg p-5"
            >
              <motion.div
                className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-[#ff8a65]/10 text-[#ffb86b]"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#d8e2e7]">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
