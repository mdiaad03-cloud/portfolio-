/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * Hero Section — The opening statement of the portfolio.
 * Displays the user's name, Arabic name, title, animated avatar,
 * university info, and a call-to-action button. Features animated
 * floating orbs for a futuristic background effect.
 */

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import data from "../data/personalData";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-end justify-center pb-8 overflow-hidden bg-surface-900"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* ── Subtle bottom shadow for readability ──────────────── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* ── Sleek Glass Dock (No annoying bouncing elements) ───── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[95%] max-w-5xl glass rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10"
      >
        {/* Left Side: Name and Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            {data.name}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-brand-400 font-medium text-sm md:text-base">{data.hero.title}</span>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden md:block" />
            <span className="text-gray-400 text-sm hidden md:block">{data.university}</span>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <a
          href="#bento-grid"
          className="group flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium transition-all duration-300 backdrop-blur-md"
        >
          {data.hero.cta}
          <HiArrowRight className="group-hover:translate-x-1 transition-transform text-brand-400" />
        </a>
      </motion.div>
    </section>
  );
}
