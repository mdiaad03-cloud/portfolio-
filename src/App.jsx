/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * App Component — The root component that assembles all portfolio
 * sections in order. Each section is self-contained and animated
 * independently via Framer Motion scroll triggers.
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface-900 text-gray-200 overflow-x-hidden">
      {/* ── Navigation ─────────────────────────────────────────── */}
      <Navbar />

      {/* ── Hero Section ───────────────────────────────────────── */}
      <Hero />

      {/* ── Interactive Bento Grid ─────────────────────────────── */}
      <BentoGrid />

      {/* ── Footer ─────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
