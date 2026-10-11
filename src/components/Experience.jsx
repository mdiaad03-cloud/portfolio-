/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Experience Component — Comprehensive showcase of production work
 * experience, and an expanded, dedicated area for technical training &
 * corporate internships (NBE, Orascom, El Orman, DEPI, El Rowad).
 * =====================================================================
 */

import { motion } from "framer-motion";
import { FaBriefcase, FaChalkboardTeacher, FaCheckCircle, FaBuilding } from "react-icons/fa";
import data from "../data/personalData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-14 text-center md:text-left">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-400 bg-accent-400/10 px-3.5 py-1.5 rounded-full border border-accent-400/20">
          // Career Milestones
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Work Experience &amp; <span className="gradient-text">Professional Training</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
          Commercial development roles, enterprise banking exposures, telecommunications infrastructure, and accredited fellowships.
        </p>
      </div>

      {/* ── 1. Commercial Work Experience ─────────────────────── */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-brand-400/15 border border-brand-400/30 flex items-center justify-center text-brand-400 text-lg shadow-lg">
            <FaBriefcase />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Commercial Software Engineering</h3>
            <p className="text-xs text-gray-400">Direct production development &amp; platform architecture</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.workExperience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-strong rounded-3xl p-7 sm:p-9 border border-white/10 hover:border-brand-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-400/15 text-brand-400 border border-brand-400/30 font-semibold">
                    {exp.type}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-2xl font-black text-white mt-1">
                  {exp.company}
                </h4>
                <p className="text-sm font-semibold text-accent-400 mb-6">
                  {exp.role}
                </p>

                {/* Achievement Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <FaCheckCircle className="text-brand-400 text-sm mt-1 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 2. Expanded Professional Training & Internships ───── */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-accent-400/15 border border-accent-400/30 flex items-center justify-center text-accent-400 text-lg shadow-lg">
            <FaChalkboardTeacher />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Professional Training &amp; Corporate Internships</h3>
            <p className="text-xs text-gray-400">High-level enterprise exposure, banking workflows, and technology programs</p>
          </div>
        </div>

        {/* Spacious, Comfortable Training Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.training.map((item, index) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong rounded-3xl p-7 border border-white/10 hover:border-accent-400/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-accent-400/15 text-accent-400 border border-accent-400/30 font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {item.period}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-surface-800 flex items-center justify-center text-brand-400 text-sm shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    <FaBuilding />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-accent-300 transition-colors">
                      {item.organization}
                    </h4>
                    <p className="text-xs font-semibold text-brand-300 mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
