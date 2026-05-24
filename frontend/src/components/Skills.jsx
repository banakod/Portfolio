import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "88%" },
    { name: "React", level: "86%" },
    { name: "Node.js", level: "82%" },
    { name: "Express.js", level: "80%" },
    { name: "MongoDB", level: "78%" },
    { name: "Cyber Security", level: "74%" }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <p className="kicker terminal-line mb-3">Flight systems</p>
        <h2 className="section-title mb-10">Skills</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="glass-panel hud-corners rounded-lg p-5 transition hover:-translate-y-1 hover:border-[#ff8a65]/45"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-black">{skill.name}</h3>
                <span className="text-sm font-bold text-[#5eead4]">{skill.level}</span>
              </div>
              <div className="mt-5 h-2 rounded-lg bg-[#fff7ed]/10">
                <div
                  className="h-full rounded-lg bg-gradient-to-r from-[#ff8a65] via-[#5eead4] to-[#fbbf24]"
                  style={{ width: skill.level }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
