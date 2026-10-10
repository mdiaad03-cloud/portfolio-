import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiExternalLink } from "react-icons/hi";
import { BsArrowsFullscreen } from "react-icons/bs";
import data from "../data/personalData";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BentoGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  return (
    <>
      <section id="bento-grid" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* ── 1. About Me (Span 2x2) ────────────────────────── */}
          <motion.div
            id="about"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-1 md:col-span-2 row-span-2 glass rounded-3xl p-8 flex flex-col justify-between group hover:border-brand-400/50 transition-colors scroll-mt-28"
          >
            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4 shrink-0">
                <h2 className="text-3xl font-bold text-white">About Me</h2>
                <span className="text-xs px-3 py-1 rounded-full bg-brand-400/15 text-brand-400 border border-brand-400/30 font-medium">
                  BUA CS 3rd Year
                </span>
              </div>
              <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
                <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
                  {data.about.bio}
                </p>
              </div>
            </div>

            {/* Profile Avatar with Click-to-Enlarge Lightbox */}
            <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="relative group/avatar cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-brand-400 rounded-full transition-transform hover:scale-105"
                  title="Click to view photo in high resolution"
                >
                  <img
                    src={data.profileImage}
                    alt={data.name}
                    className="w-16 h-16 rounded-full border-2 border-brand-400 object-cover shadow-lg shadow-brand-400/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center text-white text-xs transition-opacity">
                    <BsArrowsFullscreen className="text-sm" />
                  </div>
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-base">{data.name}</p>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-xs text-brand-400 hover:text-white underline cursor-pointer"
                    >
                      (تكبير الصورة)
                    </button>
                  </div>
                  <p className="text-brand-400 text-xs font-medium">{data.title}</p>
                  <p className="text-gray-400 text-xs">{data.location} • {data.university}</p>
                </div>
              </div>

              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs text-accent-400 font-mono font-medium">Graduation: 2028</span>
                <span className="text-xs text-gray-400">ECPC Qualifier 2026</span>
              </div>
            </div>
          </motion.div>

          {/* ── 2. Skills Marquee / Arsenal (Span 2x1) ────────── */}
          <motion.div
            id="skills"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 glass rounded-3xl p-6 overflow-hidden flex flex-col justify-center relative group hover:border-brand-400/50 transition-colors scroll-mt-28"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-white">Tech Arsenal & Frameworks</h3>
              <span className="text-xs text-gray-400 font-mono">.NET • MERN • C++</span>
            </div>
            <div className="flex flex-wrap gap-2.5 overflow-y-auto max-h-[160px] pr-1 custom-scrollbar">
              {data.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-surface-800/60 px-3.5 py-1.5 rounded-xl border border-white/5 hover:border-white/20 transition-all text-xs font-medium"
                >
                  <skill.icon style={{ color: skill.color }} className="text-base" />
                  <span className="text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 3. Featured Projects (Span 2x1) ───────────────── */}
          <motion.div
            id="projects"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 glass rounded-3xl p-6 relative overflow-hidden group hover:border-accent-400/50 transition-colors scroll-mt-28 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-400/10 rounded-full blur-3xl -mr-10 -mt-10" />
            
            <div className="flex items-center justify-between relative z-10 mb-2">
              <h3 className="text-xl font-bold text-white">Featured Projects ({data.projects.length})</h3>
              <div className="flex gap-1">
                {data.projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveProjectIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeProjectIdx === i ? "bg-accent-400 scale-125" : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Project ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              {(() => {
                const current = data.projects[activeProjectIdx];
                return (
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <a
                        href={current.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-bold text-accent-400 hover:text-white transition-colors flex items-center gap-2 group-hover:underline"
                      >
                        {current.name}
                        <HiExternalLink className="text-sm opacity-70" />
                      </a>
                    </div>
                    <p className="text-xs text-gray-300 line-clamp-3 mb-3 leading-relaxed">
                      {current.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {current.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2 py-0.5 bg-accent-400/15 text-accent-400 rounded-md border border-accent-400/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>

          {/* ── 4. CS Journey & Certifications (Span 2x2) ────── */}
          <motion.div
            id="certifications"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 glass rounded-3xl p-8 flex flex-col group hover:border-brand-400/50 transition-colors overflow-hidden relative scroll-mt-28"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold text-white">Certifications & Achievements</h2>
              <span className="text-xs text-brand-400 font-mono">ICPC • ITI • Microsoft</span>
            </div>
            <div className="space-y-5 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {data.certifications.map((cert, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-brand-400/30">
                  <div className="absolute w-3 h-3 bg-brand-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_var(--color-brand-400)]" />
                  <h4 className="text-base font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-brand-400 mb-1.5 font-medium">{cert.issuer}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 5. Experience & Training (Span 1x2) ──────────── */}
          <motion.div
            id="experience"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 glass rounded-3xl p-6 flex flex-col group hover:border-accent-400/50 transition-colors overflow-hidden scroll-mt-28"
          >
            <h3 className="text-xl font-bold text-white mb-4">Experience & Training</h3>
            <div className="flex flex-col gap-3.5 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {data.experience.map((exp, i) => (
                <div key={i} className="bg-surface-800/60 p-3.5 rounded-2xl border border-white/5 shrink-0">
                  <h4 className="font-bold text-white text-xs">{exp.company}</h4>
                  <p className="text-[11px] text-accent-400 mb-1 font-medium">{exp.role}</p>
                  <p className="text-[11px] text-gray-300 leading-snug">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 6. Contact & Social (Span 1x2) ────────────────── */}
          <motion.div
            id="contact"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 glass rounded-3xl p-6 flex flex-col justify-between group bg-gradient-to-br from-surface-800/80 to-brand-900/40 border border-brand-400/20 scroll-mt-28"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">{data.contact.message}</p>
              <div className="text-xs text-gray-400 space-y-1">
                <p><span className="text-brand-400">Phone:</span> {data.contact.phone}</p>
                <p><span className="text-brand-400">Location:</span> {data.contact.location}</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${data.contact.email}`}
                className="block w-full py-2.5 text-center rounded-xl bg-brand-400 text-surface-900 font-bold hover:bg-white transition-colors text-sm shadow-lg shadow-brand-400/25"
              >
                Email Me ({data.contact.email})
              </a>
              <div className="flex justify-center gap-4">
                {data.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 glass rounded-xl text-gray-300 hover:text-brand-400 hover:scale-110 transition-all border border-white/10"
                    title={s.name}
                  >
                    <s.icon className="text-2xl" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── High-Resolution Photo Lightbox Modal ────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-md w-full bg-surface-900/95 p-4 rounded-3xl border border-brand-400/30 shadow-2xl shadow-brand-400/10 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all border border-white/20"
                aria-label="Close image modal"
              >
                <HiX className="text-xl" />
              </button>

              <div className="w-full overflow-hidden rounded-2xl border border-white/10 shadow-inner">
                <img
                  src={data.profileImage}
                  alt={data.name}
                  className="w-full h-auto max-h-[70vh] object-cover rounded-2xl"
                />
              </div>

              <div className="mt-4 text-center">
                <h4 className="text-white font-bold text-lg">{data.name}</h4>
                <p className="text-brand-400 text-xs font-medium mt-0.5">{data.title}</p>
                <p className="text-gray-400 text-xs mt-1">Badr University in Assiut • 2024 - 2028</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
