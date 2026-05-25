import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Quiz App",
    type: "MERN Application",
    text: "Developed a MERN-based quiz platform with user/admin dashboards, category-wise quizzes, score tracking, leaderboard, and admin question management using REST APIs and MongoDB.",
    accent: "from-[#ff8a65]/25 to-[#5eead4]/10",
    github: "https://github.com/banakod/ByteBrain",
  },
  {
    title: "Portfolio Website",
    type: "Animated Frontend",
    text: "Responsive animated portfolio with modern sections, contact integration, and polished motion.",
    accent: "from-[#fbbf24]/25 to-[#ff8a65]/10",
    github: "https://github.com/banakod/Portfolio",
  },
  {
    title: "FoodDeliverySystem.tns",
    type: "Backend API",
    text: "Backend API for managing food delivery requests and orders.",
    accent: "from-[#5eead4]/20 to-[#ff8a65]/10",
    github: "https://github.com/banakod/FoodDeliverySystem.tns",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 80 },
  }),
};

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="section-shell">
      <motion.p
        className="kicker terminal-line mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Mission archive
      </motion.p>
      <motion.h2
        className="section-title mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="glass-panel hud-corners group overflow-hidden rounded-lg"
          >
            {/* ── GRADIENT BANNER with shimmer ── */}
            <div className={`h-28 bg-gradient-to-br ${project.accent} relative overflow-hidden`}>
              {/* shimmer sweep */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["-100% 0", "200% 0"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 2.5 }}
              />
              {/* floating project type badge */}
              <motion.div
                className="absolute top-4 left-4 rounded-md border border-white/15 bg-[#060711]/55 px-3 py-1 text-xs font-bold text-[#fbbf24] backdrop-blur-sm"
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3 }}
              >
                {project.type}
              </motion.div>
            </div>

            <div className="p-6">
              <h3 className="mt-1 text-2xl font-black">{project.title}</h3>
              <p className="mt-4 min-h-24 leading-7 text-[#d8e2e7]">{project.text}</p>

              {/* ── GITHUB BUTTON ONLY ── */}
              <div className="mt-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.07, boxShadow: "0 0 14px rgba(255,138,101,0.35)" }}
                  whileTap={{ scale: 0.94 }}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#ff8a65]/30 bg-[#ff8a65]/8 px-4 py-2 text-sm font-bold text-[#fff7ed] transition-all hover:border-[#ff8a65]/65 hover:bg-[#ff8a65]/18"
                >
                  <FaGithub /> GitHub
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
