import { motion } from "framer-motion";
import data from "../data/personalData";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BentoGrid() {
  return (
    <section id="bento-grid" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        
        {/* ── 1. About Me (Span 2x2) ───────────────────────── */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="col-span-1 md:col-span-2 row-span-2 glass rounded-3xl p-8 flex flex-col justify-between group hover:border-brand-400/50 transition-colors"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {data.about.bio.split('\n')[0]}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <img src={data.profileImage} alt="Profile" className="w-16 h-16 rounded-full border-2 border-brand-400 object-cover" />
            <div>
              <p className="text-white font-medium">{data.name}</p>
              <p className="text-brand-400 text-sm">{data.location}</p>
            </div>
          </div>
        </motion.div>

        {/* ── 2. Skills Marquee (Span 2x1) ─────────────────── */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 glass rounded-3xl p-6 overflow-hidden flex flex-col justify-center relative group"
        >
          <h3 className="text-xl font-bold text-white mb-4">Tech Arsenal</h3>
          <div className="flex flex-wrap gap-4">
            {data.skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-2 bg-surface-800/50 px-4 py-2 rounded-xl border border-white/5">
                <skill.icon style={{ color: skill.color }} className="text-xl" />
                <span className="text-sm font-medium text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── 3. Projects (Span 2x1) ───────────────────────── */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 glass rounded-3xl p-6 relative overflow-hidden group hover:border-accent-400/50 transition-colors"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-400/10 rounded-full blur-3xl -mr-10 -mt-10" />
          <h3 className="text-xl font-bold text-white mb-2">Featured Project</h3>
          {data.projects.map((proj) => (
            <div key={proj.name} className="relative z-10">
              <a href={proj.github} target="_blank" rel="noreferrer" className="block text-2xl font-bold text-accent-400 hover:text-white transition-colors mb-2">
                {proj.name} ↗
              </a>
              <p className="text-sm text-gray-400 line-clamp-2 mb-4">{proj.description}</p>
              <div className="flex gap-2 flex-wrap">
                {proj.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-accent-400/20 text-accent-400 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── 4. Education & Courses (Span 2x2) ────────────── */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 glass rounded-3xl p-8 flex flex-col group hover:border-brand-400/50 transition-colors overflow-hidden relative"
        >
           <h2 className="text-2xl font-bold text-white mb-6">CS Journey & Courses</h2>
           <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar flex-1">
             {data.certifications.map((cert, i) => (
               <div key={i} className="relative pl-6 border-l-2 border-brand-400/30">
                 <div className="absolute w-3 h-3 bg-brand-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_var(--color-brand-400)]" />
                 <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                 <p className="text-sm text-brand-400 mb-2">{cert.issuer}</p>
                 <p className="text-sm text-gray-400 leading-relaxed">{cert.description}</p>
               </div>
             ))}
           </div>
        </motion.div>

        {/* ── 5. Experience (Span 1x2) ─────────────────────── */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 glass rounded-3xl p-6 flex flex-col group hover:border-accent-400/50 transition-colors"
        >
          <h3 className="text-xl font-bold text-white mb-6">Training</h3>
          <div className="flex flex-col gap-6">
            {data.experience.map((exp, i) => (
              <div key={i} className="bg-surface-800/50 p-4 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white text-sm">{exp.company}</h4>
                <p className="text-xs text-accent-400 mb-2">{exp.role}</p>
                <p className="text-xs text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── 6. Contact & Social (Span 1x2) ───────────────── */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 glass rounded-3xl p-6 flex flex-col justify-between group bg-gradient-to-br from-surface-800/80 to-brand-900/40 border border-brand-400/20"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's Talk</h3>
            <p className="text-sm text-gray-400">{data.contact.message}</p>
          </div>
          
          <div className="mt-8 space-y-4">
            <a href={`mailto:${data.contact.email}`} className="block w-full py-3 text-center rounded-xl bg-brand-400 text-surface-900 font-bold hover:bg-white transition-colors">
              Email Me
            </a>
            <div className="flex justify-center gap-4">
              {data.socials.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="p-3 glass rounded-xl text-gray-300 hover:text-brand-400 hover:scale-110 transition-all">
                  <s.icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
