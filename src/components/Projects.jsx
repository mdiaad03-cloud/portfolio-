/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Projects Component — Positioned AFTER Education & Experience.
 * Features an interactive Project Flipper with Next & Previous buttons,
 * project indicators, category filters, and spacious comfortable layouts.
 * 100% English.
 * =====================================================================
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiChevronLeft,
  HiChevronRight,
  HiExternalLink,
  HiCode,
  HiCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaTrophy } from "react-icons/fa";
import data from "../data/personalData";

export default function Projects() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const projects = data.projects;
  const currentProject = projects[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-400 bg-brand-400/10 px-3.5 py-1.5 rounded-full border border-brand-400/20">
            // Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
            Commercial production stores, enterprise ERP integration architectures, desktop systems, and algorithmic codebases.
          </p>
        </div>

        {/* Flipper Buttons (< & >) & Counter */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-2xl bg-surface-800 hover:bg-brand-400/20 border border-white/10 hover:border-brand-400/40 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg group"
            aria-label="Previous Project"
            title="Previous Project"
          >
            <HiChevronLeft className="text-2xl group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Project Counter */}
          <div className="px-4 py-2.5 rounded-2xl bg-surface-800 border border-white/10 text-xs sm:text-sm font-mono font-bold text-gray-200 shadow-lg">
            <span className="text-brand-400">0{currentIdx + 1}</span>
            <span className="text-gray-500"> / </span>
            <span>0{projects.length}</span>
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-2xl bg-surface-800 hover:bg-brand-400/20 border border-white/10 hover:border-brand-400/40 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg group"
            aria-label="Next Project"
            title="Next Project"
          >
            <HiChevronRight className="text-2xl group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* ── Main Active Project Showcase Card (Large, Comfortable) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="glass-strong rounded-3xl p-7 sm:p-10 md:p-12 border border-white/15 shadow-2xl relative overflow-hidden mb-10"
        >
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full bg-brand-400/15 text-brand-400 border border-brand-400/30 text-xs font-semibold">
                {currentProject.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-accent-400/15 text-accent-400 border border-accent-400/30 text-xs font-semibold">
                {currentProject.badge}
              </span>
            </div>
            <span className="text-xs font-mono text-gray-400">
              {currentProject.period}
            </span>
          </div>

          {/* Project Title & Description */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            {currentProject.name}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl mb-8">
            {currentProject.description}
          </p>

          {/* Key Architectural Highlights */}
          <div className="mb-8 pt-6 border-t border-white/10">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
              <HiCode className="text-brand-400 text-base" />
              <span>Key Technical Highlights &amp; Architecture</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentProject.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                  <HiCheckCircle className="text-brand-400 text-base mt-0.5 shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Tech Tags & Action Button */}
          <div className="flex flex-wrap items-center justify-between gap-5 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {currentProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-surface-800 text-accent-300 border border-white/10 text-xs font-mono font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Check if project has a GitHub repo or is an official contest qualification */}
            {currentProject.github ? (
              <a
                href={currentProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-400 to-accent-400 text-white font-bold text-sm shadow-lg shadow-brand-400/25 hover:shadow-brand-400/50 hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="text-base" />
                <span>View Repository</span>
                <HiExternalLink className="text-base" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-accent-400/15 border border-accent-400/30 text-accent-300 font-semibold text-xs sm:text-sm shadow-lg">
                <FaTrophy className="text-base text-amber-400" />
                <span>Official ECPC Qualifier (No GitHub Repository)</span>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Quick Project Switcher Cards (Interactive Thumbnails) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((proj, idx) => {
          const isActive = idx === currentIdx;
          return (
            <button
              key={proj.id}
              onClick={() => setCurrentIdx(idx)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                isActive
                  ? "bg-surface-800/95 border-brand-400 shadow-xl shadow-brand-400/10 scale-102"
                  : "bg-surface-800/40 border-white/5 hover:border-white/20 hover:bg-surface-800/70"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-gray-400">0{idx + 1}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                  )}
                </div>
                <h4 className={`text-sm font-bold line-clamp-1 ${isActive ? "text-brand-300" : "text-white"}`}>
                  {proj.name}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                  {proj.description}
                </p>
              </div>
              <span className="text-[11px] text-accent-400 font-mono mt-3 block">
                {proj.category}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
