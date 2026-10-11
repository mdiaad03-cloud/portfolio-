/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Computer Science / Information Systems @ Badr University in Assiut
 * Full-Stack Developer (.NET | React | Node.js | MongoDB)
 * =====================================================================
 *
 * App Component — Cleanly separated sections arranged in optimal order:
 * 1. Navbar (Permanent frosted background)
 * 2. Hero (Strong CTAs & Live Availability)
 * 3. About (Separated from Education, with Photo Lightbox Modal)
 * 4. Services (6 Core Technical Offerings)
 * 5. Skills (Categorized Arsenal)
 * 6. Education & Certifications (Dedicated BUA Academic Showcase)
 * 7. Experience & Professional Training (Expanded Training Section)
 * 8. Featured Projects (After Education & Experience, with Next/Prev Flipper)
 * 9. Call To Action & Contact (High-impact conversion dock)
 * 10. Footer
 * =====================================================================
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200 overflow-x-hidden selection:bg-brand-400/30 selection:text-white">
      {/* 1. Fixed Frosted Navbar */}
      <Navbar />

      {/* 2. Hero Section with Strong CTAs */}
      <Hero />

      {/* 3. About Me (Separated from Education + Lightbox Modal) */}
      <About />

      {/* 4. Services & Technical Solutions */}
      <Services />

      {/* 5. Skills & Tech Arsenal */}
      <Skills />

      {/* 6. Education & Certifications (Separated Academic Focus) */}
      <Education />

      {/* 7. Experience & Professional Training (Expanded Training Space) */}
      <Experience />

      {/* 8. Featured Projects (After Education & Experience + Next/Prev Flipper) */}
      <Projects />

      {/* 9. Strong Call To Action & Direct Contact */}
      <CallToAction />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
