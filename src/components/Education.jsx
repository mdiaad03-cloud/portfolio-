/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Education Component — Dedicated section for academic education at
 * Badr University in Assiut (BUA) and verified professional certifications.
 * Clean, non-repetitive badges and layout with verified certificate links.
 * =====================================================================
 */

import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaBookOpen, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import data from "../data/personalData";

export default function Education() {
  const edu = data.education;

  return (
    <section id="education" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-14 text-center md:text-left">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-400 bg-brand-400/10 px-3.5 py-1.5 rounded-full border border-brand-400/20">
          // Academic Journey
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Education &amp; <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
          Strong theoretical foundations in computer science from Badr University in Assiut, reinforced by competitive programming and accredited training.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Badr University in Assiut (BUA) - Span 7 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-strong rounded-3xl p-7 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-400/10 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10" />

          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-400/15 border border-brand-400/30 flex items-center justify-center text-2xl text-brand-400 shrink-0 shadow-lg">
              <FaUniversity />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-accent-400 uppercase tracking-widest">
                Higher Education
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {edu.institution}
              </h3>
              <p className="text-brand-300 font-semibold text-sm sm:text-base mt-0.5">
                {edu.degree}
              </p>
            </div>
          </div>

          {/* Clean, Non-Repetitive Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 font-medium">
              📅 {edu.duration}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
              🎓 Third-Year Student
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-brand-400/15 border border-brand-400/30 text-xs font-bold text-brand-300 font-mono">
              ⭐ GPA: {edu.gpa}
            </span>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            {edu.description}
          </p>

          {/* Core Academic Coursework */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <FaBookOpen className="text-brand-400" />
              <span>Core Academic Curriculum</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {edu.coreCourses.map((course) => (
                <div
                  key={course}
                  className="bg-surface-800/70 px-3.5 py-2.5 rounded-xl border border-white/5 text-xs text-gray-200 font-medium flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Verified Certifications & Honors - Span 5 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <div className="mb-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FaGraduationCap className="text-accent-400" />
              <span>Certifications &amp; Accreditations</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">Verified achievements and training programs</p>
          </div>

          {data.certifications.map((cert) => {
            const Icon = cert.icon;
            const certLink = cert.certificateUrl
              ? `${import.meta.env.BASE_URL}${cert.certificateUrl}`
              : null;

            return (
              <div
                key={cert.title}
                className="glass-strong rounded-2xl p-5 border border-white/10 hover:border-accent-400/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-accent-400/15 border border-accent-400/30 flex items-center justify-center text-lg text-accent-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-base font-bold text-white group-hover:text-accent-300 transition-colors">
                        {cert.title}
                      </h4>
                      {certLink && (
                        <a
                          href={certLink}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/30 text-[11px] font-bold transition-all hover:scale-105"
                          title="View Official Certificate PDF"
                        >
                          <FaFilePdf className="text-xs text-red-300" />
                          <span>View Certificate</span>
                          <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs font-medium text-brand-400 mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed mt-2">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
