/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * Experience Section — Displays professional training experiences
 * in a modern vertical timeline layout with glass cards and
 * animated connector lines.
 */

import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import data from "../data/personalData";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Professional training and industry exposure"
      />

      {/* Timeline container */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/50 via-accent-400/30 to-transparent" />

        {data.experience.map((exp, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start mb-12 md:mb-16 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot on the timeline */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-brand-400 to-accent-400 border-4 border-surface-900 z-10" />

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                }`}
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-2xl p-6 group hover:border-brand-400/30 transition-all duration-300"
                >
                  <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                    <div className="w-9 h-9 rounded-xl bg-brand-400/10 flex items-center justify-center text-brand-300 group-hover:bg-brand-400/20 transition-colors">
                      <HiBriefcase className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base">{exp.company}</h3>
                      <p className="text-xs text-accent-400">{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
