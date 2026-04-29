/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * SectionHeading — Reusable heading component with gradient text
 * and a decorative accent line below it.
 */

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div className="mt-4 mx-auto w-24 h-[3px] rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
    </div>
  );
}
