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
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface-900 text-gray-200 overflow-x-hidden">
      {/* ── Navigation ─────────────────────────────────────────── */}
      {/* Fixed top navbar with glass effect and mobile hamburger */}
      <Navbar />

      {/* ── Hero Section ───────────────────────────────────────── */}
      {/* Opening statement: name, title, avatar, and CTA */}
      <Hero />

      {/* ── Decorative divider ─────────────────────────────────── */}
      <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />

      {/* ── About Me ───────────────────────────────────────────── */}
      {/* Bio and personal info cards */}
      <About />

      {/* ── Skills & Technologies ──────────────────────────────── */}
      {/* Grid of tech skills with icons */}
      <Skills />

      {/* ── Experience / Training ──────────────────────────────── */}
      {/* Professional training timeline */}
      <Experience />

      {/* ── Education & Certifications ─────────────────────────── */}
      {/* Certification cards */}
      <Education />

      {/* ── Featured Projects ──────────────────────────────────── */}
      {/* Project showcase with GitHub links */}
      <Projects />

      {/* ── Contact ────────────────────────────────────────────── */}
      {/* Email CTA and message */}
      <Contact />

      {/* ── Footer ─────────────────────────────────────────────── */}
      {/* Social links, quick links, and copyright */}
      <Footer />
    </div>
  );
}
