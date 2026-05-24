import React from "react";
import { FaRocket } from "react-icons/fa";

const Navbar = () => {
  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#ff8a65]/20 bg-[#060711]/78 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3 text-[#fff7ed]">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#ff8a65]/35 bg-[#ff8a65]/10 text-[#ffb86b]">
            <FaRocket />
          </span>
          <span className="text-lg font-black tracking-wide">
            Vinayak<span className="text-[#ffb86b]">.space</span>
          </span>
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="rounded-lg px-4 py-2 text-sm font-semibold capitalize text-[#d8e2e7] transition hover:bg-[#ff8a65]/10 hover:text-[#fff7ed]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-lg border border-[#5eead4]/35 bg-[#5eead4]/10 px-4 py-2 text-sm font-bold text-[#ccfbf1] transition hover:bg-[#5eead4]/20"
        >
          Launch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
