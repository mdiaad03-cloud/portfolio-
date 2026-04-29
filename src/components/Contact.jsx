/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * Contact Section — Provides a way for visitors to reach out.
 * Includes an email link, a motivational message, and a visual
 * glass card with animated gradient background.
 */

import { motion } from "framer-motion";
import { HiMail, HiArrowRight } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import data from "../data/personalData";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Let's build something amazing together"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto glass rounded-3xl p-10 md:p-14 text-center overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-brand-400/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-accent-400/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400/15 to-accent-400/10 flex items-center justify-center mx-auto mb-6">
            <HiMail className="text-3xl text-brand-300" />
          </div>

          {/* Message */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
            {data.contact.message}
          </p>

          {/* Email Button */}
          <a
            href={`mailto:${data.contact.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium bg-gradient-to-r from-brand-400 to-accent-400 hover:shadow-xl hover:shadow-brand-400/25 transition-all duration-300 hover:scale-105"
          >
            <HiMail className="text-xl" />
            Say Hello
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-5 text-gray-500 text-xs">{data.contact.email}</p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
