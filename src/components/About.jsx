/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * About Component — Dedicated section for personal bio, engineering
 * mindset, and high-resolution photo with click-to-enlarge Lightbox Modal.
 * Education is cleanly separated into its own distinct section.
 * =====================================================================
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaAward, FaGraduationCap, FaLaptopCode, FaShieldAlt } from "react-icons/fa";
import data from "../data/personalData";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-400 bg-accent-400/10 px-3.5 py-1.5 rounded-full border border-accent-400/20">
          // Who I Am
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
          About <span className="gradient-text">Mohamed Diaa</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
          Full-Stack Software Engineer blending solid academic CS fundamentals with real-world, commercial delivery.
        </p>
      </div>

      {/* Main About Card (Comfortable, Large, Spacious) */}
      <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Photo & Quick Credentials (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group/avatar">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="relative block rounded-3xl overflow-hidden border-2 border-brand-400/60 shadow-2xl shadow-brand-400/20 cursor-zoom-in transition-all duration-300 group-hover/avatar:scale-105 group-hover/avatar:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-400/40"
                title="اضغط لتكبير الصورة / Click to view in full resolution"
              >
                <img
                  src={data.profileImage}
                  alt={data.name}
                  className="w-56 h-64 sm:w-64 sm:h-72 object-cover rounded-3xl transition-transform duration-500 group-hover/avatar:scale-105"
                />
                {/* Zoom Hint Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/avatar:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300 gap-2">
                  <BsArrowsFullscreen className="text-2xl text-brand-400" />
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/70 border border-white/20">
                    اضغط للتكبير • Zoom In
                  </span>
                </div>
              </button>
            </div>

            <h3 className="text-xl font-bold text-white mt-5">{data.name}</h3>
            <p className="text-sm font-medium text-brand-400 mt-0.5">{data.title}</p>
            <p className="text-xs text-gray-400 mt-1">{data.location} • {data.university}</p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-3 text-xs text-brand-400 hover:text-white underline cursor-pointer flex items-center gap-1 font-medium"
            >
              <BsArrowsFullscreen className="text-[11px]" />
              <span>عرض الصورة بالحجم الكامل</span>
            </button>
          </div>

          {/* Right Column: Detailed Biography & Pillars (Span 8) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am a Full-Stack Developer and third-year Computer Science &amp; Information Systems student at <strong className="text-white">Badr University in Assiut</strong> (enrolled 2024, expected graduation: 2028 &bull; <strong className="text-brand-400 font-bold">GPA: 3.3</strong>).
              </p>
              <p>
                I specialize in engineering end-to-end applications across the modern web stack, utilizing <strong className="text-brand-300">React, Node.js/Express, ASP.NET Core, Microsoft SQL Server, and MongoDB Atlas</strong>. My experience spans modular REST API development, database architecture, payment and shipping integrations, and application security hardening.
              </p>
              <p>
                In production, I engineered commercial e-commerce storefronts and executive analytics dashboards, providing actionable financial tracking for sales, expenses, and profits with Paymob, InstaPay, and Bosta integrations. I also designed enterprise integration pipelines connecting donation call-center systems with <strong className="text-white">Odoo ERP</strong> using Transactional Outbox and Integration Inbox patterns.
              </p>
              <p>
                Beyond standard development, I am an <strong className="text-accent-400">ICPC / ECPC Qualifier</strong> in C++, which instilled in me deep algorithmic mastery, memory optimization, and fast problem solving under tight execution constraints.
              </p>
            </div>

            {/* Quick Credentials Grid (Updated: GPA 3.3, ECPC, DEPI رواد مصر الرقمية, Full-Stack) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8 pt-6 border-t border-white/10">
              <div className="bg-surface-800/80 p-3.5 rounded-2xl border border-white/5 text-center">
                <FaGraduationCap className="text-xl text-brand-400 mx-auto mb-1.5" />
                <div className="text-lg font-bold text-white">3rd Year</div>
                <div className="text-[11px] text-brand-400 font-bold">GPA: 3.3 • BUA</div>
              </div>

              <div className="bg-surface-800/80 p-3.5 rounded-2xl border border-white/5 text-center">
                <FaAward className="text-xl text-accent-400 mx-auto mb-1.5" />
                <div className="text-lg font-bold text-white">ECPC</div>
                <div className="text-[11px] text-gray-400">Algorithmic Qualifier</div>
              </div>

              <div className="bg-surface-800/80 p-3.5 rounded-2xl border border-white/5 text-center">
                <FaLaptopCode className="text-xl text-purple-400 mx-auto mb-1.5" />
                <div className="text-lg font-bold text-white">DEPI</div>
                <div className="text-[11px] text-brand-300 font-semibold">رواد مصر الرقمية</div>
              </div>

              <div className="bg-surface-800/80 p-3.5 rounded-2xl border border-white/5 text-center">
                <FaShieldAlt className="text-xl text-emerald-400 mx-auto mb-1.5" />
                <div className="text-lg font-bold text-white">Full-Stack</div>
                <div className="text-[11px] text-gray-400">.NET &bull; MERN</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox Modal (Click-to-Enlarge) */}
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
              className="relative max-w-lg w-full bg-[#0a0a0f]/95 p-4 sm:p-6 rounded-3xl border border-brand-400/40 shadow-2xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110"
                aria-label="Close image modal"
              >
                <HiX className="text-2xl" />
              </button>

              <div className="w-full overflow-hidden rounded-2xl border border-white/10 shadow-inner">
                <img
                  src={data.profileImage}
                  alt={data.name}
                  className="w-full h-auto max-h-[75vh] object-cover rounded-2xl"
                />
              </div>

              <div className="mt-4 text-center">
                <h4 className="text-white font-bold text-lg sm:text-xl">{data.name}</h4>
                <p className="text-brand-400 text-xs sm:text-sm font-medium mt-0.5">{data.title}</p>
                <p className="text-gray-400 text-xs mt-1">Badr University in Assiut • Computer Science (2024 – 2028)</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
