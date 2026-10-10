/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Navbar Component — Fixed-top responsive navigation with glass effect.
 * Smooth scrolling, active links, and mobile menu toggle.
 * =====================================================================
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import data from "../data/personalData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-brand-400/5 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a href="#hero" className="text-xl font-bold gradient-text tracking-tight flex items-center gap-1.5">
          <span>&lt;Mohamed Diaa/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-gray-300 hover:text-white transition-colors duration-200 group py-1"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-400 to-accent-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          {/* Download CV */}
          <li>
            <a
              href={`${import.meta.env.BASE_URL}Mohamed_Diaa_CV.pdf`}
              download="Mohamed_Diaa_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-400 to-accent-400 hover:shadow-lg hover:shadow-brand-400/30 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Download CV</span>
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-gray-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/10 overflow-hidden backdrop-blur-2xl"
          >
            <ul className="flex flex-col items-center gap-5 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base text-gray-200 hover:text-white font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`${import.meta.env.BASE_URL}Mohamed_Diaa_CV.pdf`}
                  download="Mohamed_Diaa_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-400 to-accent-400 shadow-lg shadow-brand-400/30"
                >
                  Download CV (PDF)
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
