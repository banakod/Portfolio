import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const LINKS = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active,   setActive]  = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle }       = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const id of [...LINKS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
      className={`fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "nav-bg-scrolled shadow-[0_4px_24px_rgba(99,102,241,0.10)]" : "nav-bg"
      }`}
      style={{ borderBottomColor: "var(--glass-border)" }}
    >
      <div className="section-shell flex items-center justify-between py-4">

        {/* LOGO */}
        <motion.a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
          style={{ color: "var(--text-primary)" }}
          whileHover={{ scale: 1.04 }}
        >
          <motion.span
            className="grid h-10 w-10 place-items-center rounded-lg"
            style={{ border: "1px solid var(--glass-border)", background: "rgba(99,102,241,0.10)", color: "var(--accent-primary)" }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaRocket />
          </motion.span>
          <span className="text-lg font-black tracking-wide">
            Vinayak <span style={{ color: "var(--accent-primary)" }}>.space</span>
          </span>
        </motion.a>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
            >
              <a
                href={`#${link}`}
                className="relative rounded-lg px-4 py-2 text-sm font-semibold capitalize transition-all duration-200"
                style={{ color: active === link ? "var(--accent-primary)" : "var(--text-secondary)" }}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg nav-active-glow"
                    style={{ background: "rgba(99,102,241,0.10)", border: "1px solid rgba(99,102,241,0.22)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-2">
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.92 }}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <FaSun size={15} /> : <FaMoon size={15} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="btn-launch"
          >
            Launch
          </motion.a>
        </div>

        {/* MOBILE RIGHT */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.92 }}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
          </motion.button>

          <motion.button
            className="grid h-10 w-10 place-items-center rounded-lg"
            style={{ border: "1px solid var(--glass-border)", background: "rgba(99,102,241,0.08)", color: "var(--accent-primary)" }}
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden backdrop-blur-xl md:hidden"
            style={{ background: "var(--nav-bg-scroll)", borderTop: "1px solid var(--glass-border)" }}
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={`#${link}`}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-3 text-sm font-semibold capitalize transition-all"
                    style={{
                      color:      active === link ? "var(--accent-primary)" : "var(--text-secondary)",
                      background: active === link ? "rgba(99,102,241,0.10)" : "transparent",
                      border:     active === link ? "1px solid rgba(99,102,241,0.22)" : "1px solid transparent",
                    }}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
              <li className="mt-3">
                <a href="#contact" onClick={closeMenu} className="btn-launch block w-full text-center">
                  Launch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
