/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Footer Component — Site-wide footer with updated quick navigation,
 * direct socials, and branding.
 * =====================================================================
 */

import data from "../data/personalData";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience & Training", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 bg-[#0a0a0f]/90 border-t border-white/10">
      {/* Gradient divider line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand & Summary */}
          <div>
            <a href="#hero" className="text-2xl font-black gradient-text tracking-tight">
              &lt;{data.name.split(" ")[0]} Diaa/&gt;
            </a>
            <p className="mt-3 text-gray-400 text-sm max-w-sm leading-relaxed">
              Full-Stack Developer (.NET • React • Node.js • MongoDB) &amp; ECPC Qualifier based in {data.location}. Third-Year Computer Science Student at Badr University in Assiut.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest font-mono text-brand-400">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Socials */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest font-mono text-accent-400">
              Connect &amp; Socials
            </h4>
            <div className="flex gap-3 mb-4">
              {data.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-gray-300 hover:text-white hover:border-brand-400/50 hover:bg-brand-400/10 transition-all duration-300 text-lg shadow-md"
                  aria-label={s.name}
                >
                  <s.icon />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400 font-mono">
              Email: {data.email}<br />
              Phone: {data.phone}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {year} {data.name}. All rights reserved. Badr University in Assiut (BUA) Scholar.
          </p>
          <p className="font-mono">
            Full-Stack Software Architecture • .NET &bull; React &bull; Node.js &bull; MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
}
