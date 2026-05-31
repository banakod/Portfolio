import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Quiz App",
    type: "MERN Application",
    text: "Developed a MERN-based quiz platform with user/admin dashboards, category-wise quizzes, score tracking, leaderboard, and admin question management using REST APIs and MongoDB.",
    gradient: "linear-gradient(135deg, rgba(37,99,235,0.20), rgba(59,130,246,0.12))",
    github: "https://github.com/banakod/ByteBrain",
  },
  {
    title: "Portfolio Website",
    type: "Animated Frontend",
    text: "Responsive animated portfolio with modern sections, contact integration, and polished motion.",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.20), rgba(37,99,235,0.12))",
    github: "https://github.com/banakod/Portfolio",
  },
  {
    title: "FoodDeliverySystem",
    type: "Backend API",
    text: "Backend API for managing food delivery requests and orders with Node.js, Express, and MongoDB.",
    gradient: "linear-gradient(135deg, rgba(96,165,250,0.20), rgba(37,99,235,0.12))",
    github: "https://github.com/banakod/FoodDeliverySystem.tns",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 80 },
  }),
};

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="section-shell">
      <motion.p className="kicker terminal-line mb-3"
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        Mission archive
      </motion.p>
      <motion.h2 className="section-title mb-10"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
        Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="glass-panel hud-corners group overflow-hidden rounded-xl"
          >
            {/* gradient banner */}
            <div className="h-28 relative overflow-hidden" style={{ background: project.gradient }}>
              {/* shimmer */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.14) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["-100% 0", "200% 0"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear", repeatDelay: 2.5 }}
              />
              {/* type badge */}
              <motion.div
                className="project-badge absolute top-4 left-4 rounded-md px-3 py-1 text-xs font-bold"
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3 }}
              >
                {project.type}
              </motion.div>
            </div>

            <div className="p-6">
              <h3 className="mt-1 text-2xl font-black" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>
              <p className="mt-4 min-h-24 leading-7" style={{ color: "var(--text-secondary)" }}>
                {project.text}
              </p>

              <div className="mt-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, boxShadow: "0 0 12px rgba(37,99,235,0.22)" }}
                  whileTap={{ scale: 0.94 }}
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-all"
                  style={{
                    color: "var(--accent-primary)",
                    border: "1px solid var(--glass-border)",
                    background: "var(--icon-bg)",
                  }}
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
