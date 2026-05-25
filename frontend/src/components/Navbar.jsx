import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaBars, FaTimes } from "react-icons/fa";

const LINKS = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive]   = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);   // ── NEW: mobile menu state

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const id of [...LINKS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on link click
  const handleNavClick = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
      className={`fixed top-0 w-full z-50 border-b border-[#ff8a65]/20 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-[#060711]/92 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "bg-[#060711]/78"
      }`}
    >
      <div className="section-shell flex items-center justify-between py-4">

        {/* LOGO */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 text-[#fff7ed]"
          whileHover={{ scale: 1.04 }}
          onClick={handleNavClick}
        >
          <motion.span
            className="grid h-10 w-10 place-items-center rounded-lg border border-[#ff8a65]/35 bg-[#ff8a65]/10 text-[#ffb86b]"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaRocket />
          </motion.span>
          <span className="text-lg font-black tracking-wide">
            Vinayak <span className="text-[#ffb86b]">.space</span>
          </span>
        </motion.a>

        {/* ── DESKTOP NAV LINKS ── */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <a
                href={`#${link}`}
                className={`relative rounded-lg px-4 py-2 text-sm font-semibold capitalize transition-all duration-200 ${
                  active === link
                    ? "text-[#ffb86b]"
                    : "text-[#d8e2e7] hover:bg-[#ff8a65]/10 hover:text-[#fff7ed]"
                }`}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-[#ff8a65]/12 border border-[#ff8a65]/25 nav-active-glow"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* ── DESKTOP RIGHT ACTIONS ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Launch CTA only */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06, boxShadow: "0 0 18px rgba(94,234,212,0.35)" }}
            whileTap={{ scale: 0.96 }}
            className="rounded-lg border border-[#5eead4]/35 bg-[#5eead4]/10 px-4 py-2 text-sm font-bold text-[#ccfbf1] transition-colors hover:bg-[#5eead4]/20"
          >
            Launch 🚀
          </motion.a>
        </div>

        {/* ── MOBILE HAMBURGER BUTTON ── */}
        <motion.button
          className="grid h-10 w-10 place-items-center rounded-lg border border-[#ff8a65]/25 bg-[#ff8a65]/8 text-[#ffb86b] md:hidden"
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

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#ff8a65]/15 bg-[#060711]/95 backdrop-blur-xl md:hidden"
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
                    onClick={handleNavClick}
                    className={`block rounded-lg px-4 py-3 text-sm font-semibold capitalize transition-all ${
                      active === link
                        ? "bg-[#ff8a65]/15 text-[#ffb86b] border border-[#ff8a65]/25"
                        : "text-[#d8e2e7] hover:bg-[#ff8a65]/8 hover:text-[#fff7ed]"
                    }`}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}

              {/* Mobile launch only */}
              <li className="mt-3">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="block w-full text-center rounded-lg border border-[#5eead4]/35 bg-[#5eead4]/10 px-4 py-3 text-sm font-bold text-[#ccfbf1] transition-colors hover:bg-[#5eead4]/20"
                >
                  Launch 🚀
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
