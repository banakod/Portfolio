import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaRocket } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const footerSocials = [
  { href: "https://github.com/banakod", icon: <FaGithub size={16} />,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/vinayak-banakod", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
];

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* ── FOOTER ── */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-[#ff8a65]/15 py-10"
      >
        <div className="section-shell flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#ff8a65]/30 bg-[#ff8a65]/10 text-[#ffb86b]">
              <FaRocket size={13} />
            </span>
            <div>
              <p className="font-black text-[#fff7ed]">Vinayak <span className="text-[#ffb86b]">.space</span></p>
              <p className="text-xs text-[#b6c4c9]">MERN Stack Developer &amp; Cyber Security Enthusiast</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {footerSocials.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 0 12px rgba(255,138,101,0.3)" }}
                whileTap={{ scale: 0.92 }}
                className="grid h-9 w-9 place-items-center rounded-lg border border-[#ff8a65]/18 bg-[#ff8a65]/5 text-[#b6c4c9] transition-colors hover:border-[#ff8a65]/45 hover:text-[#ffb86b]"
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#b6c4c9]">
            © {new Date().getFullYear()} Vinayak Banakod. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
