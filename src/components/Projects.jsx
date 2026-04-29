/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * Projects Section — Featured project cards with GitHub links,
 * technology tags, and animated hover effects. Designed as a
 * spotlight layout for the main project.
 */

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import data from "../data/personalData";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="Real-world applications I've built from the ground up"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {data.projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="relative glass rounded-3xl overflow-hidden group"
          >
            {/* Top gradient stripe */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400" />

            <div className="p-8 md:p-10">
              {/* Project header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-500">
                    {project.name}
                  </h3>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-brand-400 to-accent-400 hover:shadow-lg hover:shadow-brand-400/25 transition-all duration-300 hover:scale-105"
                  >
                    <FaGithub />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium text-brand-200 bg-brand-400/10 border border-brand-400/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative glow on hover */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-brand-400/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
