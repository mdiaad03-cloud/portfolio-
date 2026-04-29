/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * Skills Section — Renders a responsive grid of tech skills,
 * each displayed as a glass card with the technology's official
 * icon and a coloured hover effect.
 */

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import data from "../data/personalData";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200 } },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="The tools and languages I use to bring ideas to life"
      />

      {/* Skill cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
      >
        {data.skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            className="glass rounded-2xl p-6 flex flex-col items-center gap-3 group cursor-default hover:border-brand-400/30 transition-colors duration-300"
          >
            <skill.icon
              className="text-4xl transition-transform duration-300 group-hover:scale-110"
              style={{ color: skill.color }}
            />
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
