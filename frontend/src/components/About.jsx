import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaCode, FaWandMagicSparkles } from "react-icons/fa6";

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full-stack builds",
      text: "React interfaces connected to Node, Express, MongoDB, and clean API flows."
    },
    {
      icon: <FaWandMagicSparkles />,
      title: "Animated UI",
      text: "Motion, transitions, and detail-focused layouts that keep the site alive."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security mindset",
      text: "Practical attention to validation, backend boundaries, and safer data handling."
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <p className="kicker terminal-line mb-3">About the captain</p>
        <h2 className="section-title mb-7">About Me</h2>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <p className="text-lg leading-8 text-[#d8e2e7]">
            I am a passionate MERN stack developer interested in web
            development, cyber security, and creating attractive animated
            websites. I like building experiences that feel polished on the
            surface and dependable underneath.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="glass-panel hud-corners rounded-lg p-5">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-[#ff8a65]/10 text-[#ffb86b]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d8e2e7]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
