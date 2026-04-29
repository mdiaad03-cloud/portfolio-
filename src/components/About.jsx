/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * About Section — Displays a rich bio alongside personal details
 * in a glass-styled card layout. Shows the user's location,
 * university, ID, and competitive programming achievements.
 */

import { motion } from "framer-motion";
import { HiLocationMarker, HiAcademicCap, HiIdentification, HiBadgeCheck } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import data from "../data/personalData";

const details = [
  { icon: HiLocationMarker, label: "Location", value: data.location },
  { icon: HiAcademicCap, label: "University", value: data.university },
  { icon: HiIdentification, label: "Student ID", value: data.id },
  { icon: HiBadgeCheck, label: "Achievement", value: "ECPC Qualifier" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Get to know the person behind the code"
      />

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* ── Bio Text ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5"
        >
          {data.about.bio.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-gray-300 leading-relaxed text-sm md:text-base">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* ── Info Cards ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
        >
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-2xl p-5 flex items-start gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-400/10 flex items-center justify-center text-brand-300 group-hover:bg-brand-400/20 transition-colors">
                <d.icon className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{d.label}</p>
                <p className="text-sm text-white font-medium mt-0.5">{d.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
