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
import { HiArrowDown } from "react-icons/hi";
import data from "../data/personalData";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end justify-center pb-24 overflow-hidden bg-surface-900"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* ── Gradient Overlay for Text Readability ──────────────── */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/60 to-transparent pointer-events-none" />

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6 w-full max-w-4xl">
        
        {/* Name in a Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-strong rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl border-t border-brand-400/30 w-full"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            {data.name}
          </h1>
          <p className="mt-2 text-lg md:text-xl text-brand-200/90 font-medium" dir="rtl">
            {data.arabicName}
          </p>
          
          <div className="w-16 h-1 bg-gradient-to-r from-brand-400 to-accent-400 mx-auto my-4 rounded-full" />
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
            <span className="text-xl font-semibold text-accent-400 drop-shadow-md">{data.hero.title}</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shadow-[0_0_8px_var(--color-brand-400)]" />
              {data.university}
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-2"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-surface-900 font-bold bg-gradient-to-r from-brand-400 to-brand-300 hover:shadow-xl hover:shadow-brand-400/30 transition-all duration-300 hover:scale-105"
          >
            {data.hero.cta}
            <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-white glass hover:bg-white/10 hover:border-accent-400/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ───────────────────────────────────── */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 glass flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_8px_var(--color-brand-400)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
