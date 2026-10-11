/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Hero Section — Impactful full-screen visual hero with strong CTAs,
 * live availability badge, and quick access to work and contact.
 * =====================================================================
 */

import { motion } from "framer-motion";
import { HiArrowRight, HiMail, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import data from "../data/personalData";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-end justify-center pb-10 sm:pb-14 pt-28 overflow-hidden bg-[#0a0a0f]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle bottom shadow and gradient for maximum legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Sleek High-Impact Glass Dock */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[95%] max-w-6xl glass-strong rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-2xl border border-white/15 flex flex-col gap-6"
      >
        {/* Top Row: Availability Pill & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Full-Stack Roles, Integrations & Freelance</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mdiaad03-cloud"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
              title="GitHub Profile"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-diaa-dev/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-brand-400 transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>

        {/* Middle Row: Name, Title & Summary */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Mohamed Diaa <span className="text-brand-400">El-Din Samy</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-brand-300 tracking-wide">
            {data.hero.title}
          </p>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed mt-1">
            {data.hero.subtitle}
          </p>
        </div>

        {/* Bottom Row: High-Impact Dual Call to Actions (CTAs) */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2 border-t border-white/10">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-400 to-accent-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-400/25 hover:shadow-brand-400/50 hover:scale-105 transition-all duration-300"
          >
            <span>{data.hero.ctaProjects}</span>
            <HiArrowRight className="group-hover:translate-x-1.5 transition-transform text-white text-lg" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm sm:text-base backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <HiMail className="text-lg text-brand-400" />
            <span>{data.hero.ctaContact}</span>
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Mohamed_Diaa_CV.pdf`}
            download="Mohamed_Diaa_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-300 sm:ml-auto"
          >
            <HiDownload className="text-lg text-accent-400" />
            <span>{data.hero.ctaCv}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
