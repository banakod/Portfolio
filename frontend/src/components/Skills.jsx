import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML",          level: 95 },
  { name: "CSS",           level: 90 },
  { name: "JavaScript",    level: 88 },
  { name: "React",         level: 86 },
  { name: "Node.js",       level: 82 },
  { name: "Express.js",    level: 80 },
  { name: "MongoDB",       level: 78 },
  { name: "Cyber Security",level: 74 },
];

const Skills = () => (
  <section id="skills" className="py-24">
    <div className="section-shell">
      <motion.p
        className="kicker terminal-line mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Flight systems
      </motion.p>
      <motion.h2
        className="section-title mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Skills
      </motion.h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <motion.article
            key={skill.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 90 }}
            whileHover={{ y: -4, borderColor: "rgba(255,138,101,0.45)", transition: { duration: 0.2 } }}
            className="glass-panel hud-corners rounded-lg p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-black">{skill.name}</h3>
              <motion.span
                className="text-sm font-bold text-[#5eead4]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.4 }}
              >
                {skill.level}%
              </motion.span>
            </div>

            {/* animated bar */}
            <div className="mt-5 h-2 rounded-lg bg-[#fff7ed]/10 overflow-hidden">
              <motion.div
                className="h-full rounded-lg bg-gradient-to-r from-[#ff8a65] via-[#5eead4] to-[#fbbf24]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.2, duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
