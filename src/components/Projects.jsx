/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Projects Component — Interactive Showcase with Next/Prev Flipper,
 * Active Showcase Card, Direct GitHub Repository Links,
 * Fullscreen C2A Masterclass Presentation Theater, and
 * ICPC Certificate Modal & PDF Viewers.
 * =====================================================================
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiChevronLeft,
  HiChevronRight,
  HiExternalLink,
  HiCode,
  HiCheckCircle,
  HiX,
} from "react-icons/hi";
import {
  FaGithub,
  FaTrophy,
  FaFilePdf,
  FaAward,
  FaDesktop,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import data from "../data/personalData";

export default function Projects() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isMasterclassModalOpen, setIsMasterclassModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const projects = data.projects;
  const currentProject = projects[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const certPdfUrl = `${import.meta.env.BASE_URL}ICPC_ECPC_Certificate.pdf`;
  const certImgUrl = `${import.meta.env.BASE_URL}images/icpc_certificate.png`;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* ── Section Header with Prev/Next Controls ─────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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
            className="w-12 h-12 rounded-2xl bg-surface-800 hover:bg-brand-400/20 border border-white/10 hover:border-brand-400/40 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg group cursor-pointer"
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
            className="w-12 h-12 rounded-2xl bg-surface-800 hover:bg-brand-400/20 border border-white/10 hover:border-brand-400/40 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg group cursor-pointer"
            aria-label="Next Project"
            title="Next Project"
          >
            <HiChevronRight className="text-2xl group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* ── Main Active Project Showcase Card ─────────────────────────── */}
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
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
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

          {/* Project Title with Direct Repo Link Option */}
          <div className="flex flex-wrap items-center gap-3 mb-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              {currentProject.name}
            </h3>
            {currentProject.github && (
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-300 transition-colors p-1.5 rounded-lg hover:bg-white/5"
                title="Open GitHub Repository in New Tab"
              >
                <FaExternalLinkAlt className="text-base" />
              </a>
            )}
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl mb-8 relative z-10">
            {currentProject.description}
          </p>

          {/* Special Banner 1: C2A Masterclass Presentation (PowerPoint / Interactive Slides) */}
          {currentProject.masterclassUrl && (
            <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-3xl text-orange-400 shrink-0 shadow-lg">
                  <FaDesktop />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-300">
                    Live Architecture Presentation Deck
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">
                    C2A-LAP Ecosystem Engineering Masterclass
                  </h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Interactive slide deck breakdown of MERN architecture, server bootstrap logic, and API security.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsMasterclassModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/25 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <FaDesktop className="text-base" />
                  <span>Open Presentation (Fullscreen)</span>
                </button>

                <a
                  href={currentProject.masterclassUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface-800 hover:bg-surface-700 text-gray-300 hover:text-white border border-white/10 text-sm transition-all"
                  title="Open Masterclass in New Tab"
                >
                  <HiExternalLink className="text-lg" />
                </a>
              </div>
            </div>
          )}

          {/* Special Banner 2: Official ICPC Certificate */}
          {currentProject.certificateUrl && (
            <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-3xl text-amber-300 shrink-0">
                  <FaTrophy />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    Verified Collegiate Achievement
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">
                    The 2026 ICPC ECPC Qualifications — Honorable Mention
                  </h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Awarded to Mohamed Diaa El-Din Samy • Badr University in Assiut • 19 August 2026
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCertModalOpen(true)}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/40 text-amber-200 text-xs sm:text-sm font-bold transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <FaAward className="text-base" />
                <span>Preview Certificate</span>
              </button>
            </div>
          )}

          {/* Key Architectural Highlights */}
          <div className="mb-8 pt-6 border-t border-white/10 relative z-10">
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

          {/* Bottom Bar: Tech Tags & Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-5 pt-6 border-t border-white/10 relative z-20">
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

            {/* Action Buttons: GitHub Repository / Masterclass / Certificate */}
            <div className="flex flex-wrap items-center gap-3">
              {currentProject.masterclassUrl && (
                <button
                  type="button"
                  onClick={() => setIsMasterclassModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/40 font-bold text-sm transition-all hover:scale-105 cursor-pointer shadow-lg"
                >
                  <FaDesktop className="text-base text-orange-400" />
                  <span>Presentation Deck</span>
                </button>
              )}

              {currentProject.github ? (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-400 to-accent-400 text-white font-bold text-sm shadow-lg shadow-brand-400/25 hover:shadow-brand-400/50 hover:scale-105 transition-all duration-300 cursor-pointer relative z-30"
                >
                  <FaGithub className="text-lg" />
                  <span>Open GitHub Repository</span>
                  <HiExternalLink className="text-base" />
                </a>
              ) : currentProject.certificateUrl ? (
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCertModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-brand-400 text-white font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <FaTrophy className="text-base text-yellow-200" />
                    <span>View Official ICPC Certificate</span>
                  </button>

                  <a
                    href={certPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-800 hover:bg-surface-700 text-gray-200 border border-white/10 text-xs sm:text-sm font-semibold transition-all hover:scale-105 cursor-pointer"
                  >
                    <FaFilePdf className="text-red-400 text-base" />
                    <span>Download PDF</span>
                    <HiExternalLink className="text-base text-gray-400" />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Quick Project Switcher Cards (Interactive Thumbnails) ───── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((proj, idx) => {
          const isActive = idx === currentIdx;
          return (
            <div
              key={proj.id}
              onClick={() => setCurrentIdx(idx)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                isActive
                  ? "bg-surface-800/95 border-brand-400 shadow-xl shadow-brand-400/10 scale-102"
                  : "bg-surface-800/40 border-white/5 hover:border-white/20 hover:bg-surface-800/70"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-gray-400">0{idx + 1}</span>
                  <div className="flex items-center gap-2">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-brand-400/20 text-gray-400 hover:text-brand-300 border border-white/5 hover:border-brand-400/30 transition-all cursor-pointer"
                        title="Open GitHub Repository in New Tab"
                      >
                        <FaGithub className="text-xs" />
                      </a>
                    )}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                    )}
                  </div>
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
            </div>
          );
        })}
      </div>

      {/* ── Masterclass Presentation Fullscreen Theater Modal ───────── */}
      <AnimatePresence>
        {isMasterclassModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-2xl p-2 sm:p-5"
            onClick={() => setIsMasterclassModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex-1 w-full max-w-7xl mx-auto bg-[#080810] rounded-3xl border border-orange-500/40 shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Control Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-surface-900 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 text-lg">
                    <FaDesktop />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                      C2A-LAP Architectural Masterclass
                    </h4>
                    <p className="text-xs text-gray-400 hidden sm:block">
                      Interactive Engineering Presentation &bull; mdiaad03-cloud.github.io/masterclass
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Fullscreen Toggle */}
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-2 rounded-xl bg-surface-800 hover:bg-surface-700 text-gray-300 hover:text-white border border-white/10 text-sm transition-all cursor-pointer"
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  >
                    {isFullscreen ? (
                      <BsFullscreenExit className="text-base" />
                    ) : (
                      <BsFullscreen className="text-base" />
                    )}
                  </button>

                  {/* Open in New Tab */}
                  <a
                    href="https://mdiaad03-cloud.github.io/masterclass/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/40 text-xs font-bold transition-all cursor-pointer"
                    title="Open in New Tab"
                  >
                    <span>New Tab</span>
                    <HiExternalLink className="text-sm" />
                  </a>

                  {/* Close Modal */}
                  <button
                    type="button"
                    onClick={() => setIsMasterclassModalOpen(false)}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all border border-white/10 cursor-pointer"
                    aria-label="Close presentation modal"
                  >
                    <HiX className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Fullscreen Interactive Presentation Iframe */}
              <div className="flex-1 w-full bg-[#050508] relative">
                <iframe
                  src="https://mdiaad03-cloud.github.io/masterclass/"
                  title="C2A-LAP Engineering Masterclass"
                  className="w-full h-full border-0 rounded-b-3xl"
                  allow="fullscreen; clipboard-write"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── ICPC Certificate Modal (Lightbox Preview & Actions) ─────── */}
      <AnimatePresence>
        {isCertModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl"
            onClick={() => setIsCertModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full bg-[#0a0a12]/95 p-5 sm:p-8 rounded-3xl border border-amber-400/40 shadow-2xl flex flex-col items-center max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsCertModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110 cursor-pointer"
                aria-label="Close certificate modal"
              >
                <HiX className="text-2xl" />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-5 w-full pr-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                  <FaTrophy className="text-yellow-300" />
                  <span>Official ICPC Certificate of Achievement</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  The 2026 ICPC ECPC Qualifications
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Awarded to <strong className="text-white">Mohamed Diaa El-Din Samy</strong> • Badr University in Assiut • 19 August 2026
                </p>
              </div>

              {/* Certificate Image Frame */}
              <div className="w-full overflow-hidden rounded-2xl border-2 border-amber-400/40 shadow-2xl bg-white p-2 sm:p-3">
                <img
                  src={certImgUrl}
                  alt="Mohamed Diaa El-Din Samy ICPC ECPC Certificate"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 w-full">
                <a
                  href={certPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-brand-400 text-white font-bold text-sm shadow-lg shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer"
                >
                  <FaFilePdf className="text-base text-red-200" />
                  <span>Open PDF in New Tab</span>
                  <HiExternalLink className="text-base" />
                </a>

                <a
                  href={certPdfUrl}
                  download="Mohamed_Diaa_ICPC_Certificate.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-800 hover:bg-surface-700 text-gray-200 border border-white/15 text-sm font-semibold transition-all hover:scale-105 cursor-pointer"
                >
                  <FaAward className="text-amber-400 text-base" />
                  <span>Download Certificate PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(false)}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-sm font-medium transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
