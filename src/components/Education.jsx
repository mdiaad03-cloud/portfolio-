/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * Education Section — Showcases certifications and courses
 * in horizontal glass cards with animated hover effects.
 */

import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import data from "../data/personalData";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        title="Education & Certifications"
        subtitle="Continuous learning through recognized programs"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {data.certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass rounded-2xl p-7 group hover:border-brand-400/30 transition-all duration-300 flex flex-col"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400/15 to-accent-400/10 flex items-center justify-center mb-5 group-hover:from-brand-400/25 transition-colors">
              <HiAcademicCap className="text-2xl text-brand-300" />
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-lg mb-1">{cert.title}</h3>
            <p className="text-accent-400 text-xs font-medium uppercase tracking-wider mb-3">
              {cert.issuer}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed flex-1">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
