import { motion } from 'framer-motion';
import { ExternalLink, Server, MonitorPlay, Zap, Globe, Rocket, Hammer } from 'lucide-react';

const projects = [
  {
    title: 'EpanDLabs APIs',
    icon: <Server size={24} />,
    desc: 'REST API service yang menyediakan berbagai endpoint untuk keperluan developer. Dibangun dengan performa dan kemudahan penggunaan sebagai prioritas utama.',
    url: 'https://api-epandlabs.my.id',
    tags: ['API', 'REST', 'Backend', 'Node.js'],
    color: 'bg-neo-blue',
    urlIcon: <Server size={14} />,
    features: ['Multiple Endpoints', 'Fast Response', 'Free to Use', 'Well Documented'],
  },
  {
    title: 'EpanDStream',
    icon: <MonitorPlay size={24} />,
    desc: 'Platform streaming yang memungkinkan pengguna untuk menonton konten secara online. Didesain dengan UI yang clean dan user-friendly.',
    url: 'https://www.epandstream.biz.id',
    tags: ['Streaming', 'Frontend', 'Web App', 'React'],
    color: 'bg-neo-pink',
    urlIcon: <MonitorPlay size={14} />,
    features: ['Clean UI', 'Responsive', 'Fast Loading', 'User Friendly'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-neo-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
          <div className="inline-block neo-border neo-shadow bg-neo-orange px-4 sm:px-6 py-2 rounded-xl mb-3 sm:mb-4">
            <span className="font-mono text-xs sm:text-sm font-bold">02 // PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center gap-2 sm:gap-3 flex-wrap">
            Project-project <span className="text-neo-yellow">Keren</span> <Rocket size={28} className="text-neo-yellow hidden sm:block" />
          </h2>
          <p className="text-white/50 mt-2 sm:mt-3 text-sm sm:text-lg max-w-xl">
            Beberapa project yang udah aku build. Semuanya live dan bisa dicoba!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 * i }}>
              <div className={`neo-border neo-shadow-lg ${project.color} rounded-2xl p-5 sm:p-8 hover:-translate-y-2 transition-transform duration-300`}>
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white neo-border rounded-xl flex items-center justify-center shrink-0">{project.icon}</div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-2xl font-bold text-neo-dark truncate">{project.title}</h3>
                      <div className="flex items-center gap-1 text-neo-dark/60 text-xs sm:text-sm font-mono">
                        {project.urlIcon}<span className="truncate">{project.url.replace('https://', '')}</span>
                      </div>
                    </div>
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="neo-btn bg-white p-2 rounded-xl shrink-0"><ExternalLink size={16} /></a>
                </div>

                <p className="text-neo-dark/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.desc}</p>

                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neo-dark">
                      <Zap size={12} className="text-neo-dark/60 shrink-0" />{feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="neo-border bg-white/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-bold">{tag}</span>
                  ))}
                </div>

                <a href={project.url} target="_blank" rel="noopener noreferrer"
                  className="neo-btn bg-neo-dark text-white px-5 py-2.5 sm:py-3 rounded-xl mt-4 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm w-full justify-center">
                  <Globe size={16} /> Kunjungi Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8 sm:mt-12 text-center">
          <div className="neo-border neo-shadow bg-neo-yellow rounded-2xl p-4 sm:p-6 inline-flex flex-col items-center gap-1">
            <p className="font-bold text-sm sm:text-lg flex items-center gap-2"><Hammer size={18} /> More projects coming soon!</p>
            <p className="text-xs sm:text-sm text-neo-dark/60">Aku terus belajar dan build project baru</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
