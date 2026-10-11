/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Services Component — Dedicated section showcasing the 6 core
 * services & technical solutions offered by Mohamed Diaa.
 * =====================================================================
 */

import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import data from "../data/personalData";

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-14 text-center md:text-left">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-400 bg-brand-400/10 px-3.5 py-1.5 rounded-full border border-brand-400/20">
          // What I Offer
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Services &amp; <span className="gradient-text">Technical Solutions</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
          Production-grade capabilities delivering resilient web applications, enterprise system integrations, secure APIs, and database architectures.
        </p>
      </div>

      {/* Services Grid (Spacious, Large, Comfortable) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {data.services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-brand-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-400/10 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Title */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                  style={{
                    backgroundColor: `${service.color}18`,
                    border: `1px solid ${service.color}35`,
                    color: service.color,
                  }}
                >
                  <Icon />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Feature Points */}
              <div className="pt-5 border-t border-white/10 space-y-2.5">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                    <HiCheckCircle className="text-brand-400 text-base shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
