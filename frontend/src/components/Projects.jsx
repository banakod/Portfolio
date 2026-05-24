import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  const projects = [
    {
      title: "Quiz App",
      type: "MERN Application",
      text: "Online quiz platform with reusable question flows, backend APIs, and MongoDB storage.",
      accent: "from-[#ff8a65]/25 to-[#5eead4]/10"
    },
    {
      title: "Portfolio Website",
      type: "Animated Frontend",
      text: "Responsive animated portfolio with modern sections, contact integration, and polished motion.",
      accent: "from-[#fbbf24]/25 to-[#ff8a65]/10"
    },
    {
      title: "Contact Mail API",
      type: "Node + Nodemailer",
      text: "Backend contact route that validates form data and sends portfolio messages through SMTP.",
      accent: "from-[#5eead4]/20 to-[#ff8a65]/10"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <p className="kicker terminal-line mb-3">Mission archive</p>
        <h2 className="section-title mb-10">Projects</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-panel hud-corners group overflow-hidden rounded-lg"
            >
              <div className={`h-28 bg-gradient-to-br ${project.accent}`} />
              <div className="p-6">
                <p className="text-sm font-bold text-[#fbbf24]">{project.type}</p>
                <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                <p className="mt-4 min-h-24 leading-7 text-[#d8e2e7]">{project.text}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#ff8a65]/20 px-4 py-2 text-sm font-bold text-[#fff7ed] transition group-hover:border-[#ff8a65]/50 group-hover:bg-[#ff8a65]/10"
                >
                  Discuss project <FaArrowUpRightFromSquare />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
