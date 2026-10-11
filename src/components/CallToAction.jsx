/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * CallToAction Component — High-impact, magnetic conversion section
 * featuring direct WhatsApp, Email, Phone, and CV download actions.
 * =====================================================================
 */

import { motion } from "framer-motion";
import { HiMail, HiPhone, HiDownload, HiLightningBolt } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import data from "../data/personalData";

export default function CallToAction() {
  const c = data.contact;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-3xl p-8 sm:p-12 md:p-16 border border-brand-400/30 shadow-2xl relative overflow-hidden text-center"
      >
        {/* Ambient Gradient Backdrops */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent-400/15 rounded-full blur-3xl pointer-events-none" />

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{c.availability}</span>
        </div>

        {/* Headline & Subtitle */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
          {c.headline}
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          {c.subheadline}
        </p>

        {/* Action Buttons Grid (Primary CTAs) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 max-w-3xl mx-auto">
          {/* Email Me */}
          <a
            href={`mailto:${c.email}`}
            className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-400 to-accent-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-brand-400/25 hover:shadow-brand-400/50 hover:scale-105 transition-all duration-300"
          >
            <HiMail className="text-xl" />
            <span>Send Email ({c.email})</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={data.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#25D366]/25 hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Phone Call */}
          <a
            href={`tel:${c.phone}`}
            className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm sm:text-base backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <HiPhone className="text-lg text-brand-400" />
            <span>Call: {c.phone}</span>
          </a>

          {/* Download Official CV */}
          <a
            href={`${import.meta.env.BASE_URL}Mohamed_Diaa_CV.pdf`}
            download="Mohamed_Diaa_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-300"
          >
            <HiDownload className="text-lg text-accent-400" />
            <span>Download Official CV (PDF)</span>
          </a>
        </div>

        {/* Trust Signals & Direct Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10 text-xs sm:text-sm text-gray-400 font-medium">
          <span className="flex items-center gap-1.5">
            <HiLightningBolt className="text-amber-400 text-base" />
            <span>{c.responseTime}</span>
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-brand-400 text-base" />
            <span>{c.location} (Remote &amp; On-Site Ready)</span>
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mohamed-diaa-dev/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-brand-400 transition-colors flex items-center gap-1"
            >
              <FaLinkedin className="text-base" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/mdiaad03-cloud"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-brand-400 transition-colors flex items-center gap-1"
            >
              <FaGithub className="text-base" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
