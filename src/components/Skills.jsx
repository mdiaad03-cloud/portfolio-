/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Skills Component — Spacious, organized technical stack showcase.
 * =====================================================================
 */

import { useState } from "react";
import { motion } from "framer-motion";
import data from "../data/personalData";

const categories = ["All", "Backend", "Frontend", "Database", "Languages", "Security", "DevOps"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? data.skills
      : data.skills.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-400 bg-accent-400/10 px-3.5 py-1.5 rounded-full border border-accent-400/20">
            // Core Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
            Comprehensive proficiency across enterprise backend architectures, modern client-side frameworks, and cloud databases.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-400 text-surface-900 shadow-lg shadow-brand-400/30 scale-105"
                  : "bg-surface-800/80 text-gray-300 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid (Spacious, Large, Readable) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5">
        {filteredSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="glass-strong rounded-2xl p-5 border border-white/10 hover:border-brand-400/50 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-400/10"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${skill.color}15`,
                  border: `1px solid ${skill.color}30`,
                  color: skill.color,
                }}
              >
                <Icon />
              </div>
              <span className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                {skill.name}
              </span>
              <span className="text-[11px] text-gray-400 mt-1 font-mono uppercase tracking-wider">
                {skill.category}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
