/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Navbar Component — Fixed-top navigation with permanent frosted glass
 * background ensuring readability over hero backgrounds at all times.
 * =====================================================================
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiDownload } from "react-icons/hi";
import data from "../data/personalData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience & Training", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-2xl shadow-2xl shadow-black/70 border-b border-white/15 py-3"
          : "bg-[#0a0a0f]/80 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo / Brand */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-extrabold gradient-text tracking-tight group-hover:scale-105 transition-transform">
            &lt;{data.name.split(" ")[0]} Diaa/&gt;
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full bg-brand-400/15 text-brand-400 border border-brand-400/30">
            CS @ BUA
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-gray-300 hover:text-white transition-colors duration-200 group py-1 font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-400 to-accent-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          {/* Download CV Button */}
          <li>
            <a
              href={`${import.meta.env.BASE_URL}Mohamed_Diaa_CV.pdf`}
              download="Mohamed_Diaa_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full text-xs xl:text-sm font-semibold text-white bg-gradient-to-r from-brand-400 to-accent-400 hover:shadow-lg hover:shadow-brand-400/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-1.5"
            >
              <HiDownload className="text-base" />
              <span>Resume (PDF)</span>
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="lg:hidden text-2xl text-gray-200 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0f]/98 backdrop-blur-2xl border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col items-center gap-4 py-6 px-4">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full text-center">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base text-gray-200 hover:text-brand-400 font-medium py-2 rounded-xl hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="w-full pt-2">
                <a
                  href={`${import.meta.env.BASE_URL}Mohamed_Diaa_CV.pdf`}
                  download="Mohamed_Diaa_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-brand-400 to-accent-400 shadow-lg shadow-brand-400/30"
                >
                  <HiDownload className="text-lg" />
                  <span>Download CV (PDF)</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
