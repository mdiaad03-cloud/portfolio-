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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Orbs ────────────────────────────────────── */}
      {/* Decorative gradient circles that float in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-400/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent-400/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/5 blur-[150px]"
        />
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-8">
        {/* Animated Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="relative"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-br from-brand-400 to-accent-400 animate-glow">
            {/* Profile image — change URL in personalData.js to update */}
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-full h-full rounded-full object-cover bg-surface-800"
            />
          </div>
          {/* Status indicator */}
          <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-400 border-4 border-surface-900" />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold gradient-text leading-tight">
            {data.name}
          </h1>
          <p className="mt-2 text-lg md:text-xl text-brand-200/70 font-medium" dir="rtl">
            {data.arabicName}
          </p>
        </motion.div>

        {/* Title + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-3"
        >
          <p className="text-xl md:text-2xl text-white font-semibold">
            {data.hero.title}
          </p>
          <p className="text-gray-400 max-w-xl text-sm md:text-base">
            {data.hero.subtitle}
          </p>
        </motion.div>

        {/* University Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="glass rounded-full px-5 py-2 flex items-center gap-3 text-sm text-gray-300"
        >
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          {data.university} &bull; {data.year}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium bg-gradient-to-r from-brand-400 to-accent-400 hover:shadow-xl hover:shadow-brand-400/25 transition-all duration-300 hover:scale-105"
          >
            {data.hero.cta}
            <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-gray-300 glass hover:text-white hover:border-brand-400/40 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex gap-5 mt-4"
        >
          {data.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white text-2xl transition-colors duration-200 hover:scale-110 transform"
              aria-label={s.name}
            >
              <s.icon />
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ───────────────────────────────────── */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-brand-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
