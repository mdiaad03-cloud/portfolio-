/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * SectionWrapper — A reusable wrapper that adds a consistent
 * max-width container, padding, and Framer Motion scroll-triggered
 * reveal animation to every major section.
 */

import { motion } from "framer-motion";

export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-7xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
