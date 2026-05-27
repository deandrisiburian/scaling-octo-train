import { motion } from 'framer-motion';
import { BookOpen, Heart, Gamepad2, Coffee, GraduationCap, Code, HelpCircle, Terminal, Flame, PartyPopper, Globe, Laptop, Rocket, Star } from 'lucide-react';

const facts = [
  { icon: <GraduationCap size={22} />, label: 'Siswa SMP', desc: 'Belajar sambil ngoding', color: 'bg-neo-blue' },
  { icon: <Code size={22} />, label: 'Self-taught', desc: 'Belajar dari internet', color: 'bg-neo-pink' },
  { icon: <Coffee size={22} />, label: 'Night Coder', desc: 'Paling produktif malam', color: 'bg-neo-orange' },
  { icon: <Gamepad2 size={22} />, label: 'Gamer juga', desc: 'Butuh refreshing dong', color: 'bg-neo-purple' },
  { icon: <Heart size={22} />, label: 'Open Source', desc: 'Love sharing code', color: 'bg-neo-red' },
  { icon: <BookOpen size={22} />, label: 'Always Learning', desc: 'Gak pernah berhenti', color: 'bg-neo-green' },
];

const tags = [
  { icon: <Globe size={13} />, label: 'Indonesia' },
  { icon: <GraduationCap size={13} />, label: 'Student' },
  { icon: <Laptop size={13} />, label: 'Developer' },
  { icon: <Rocket size={13} />, label: 'Dreamer' },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
          <div className="inline-block neo-border neo-shadow bg-neo-blue px-4 sm:px-6 py-2 rounded-xl mb-3 sm:mb-4">
            <span className="font-mono text-xs sm:text-sm font-bold">01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neo-dark flex items-center gap-2 sm:gap-3 flex-wrap">
            Siapa sih <span className="text-neo-pink">EpanD</span>? <HelpCircle size={28} className="text-neo-dark/40 hidden sm:block" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-start">
          {/* About Text */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="neo-border neo-shadow-lg bg-white rounded-2xl p-5 sm:p-8 lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-neo-blue neo-border rounded-xl sm:rounded-2xl flex items-center justify-center mb-4">
                <Terminal size={28} className="text-neo-dark" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-neo-dark">Hey, salam kenal!</h3>
              <div className="space-y-3 sm:space-y-4 text-neo-dark/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Aku <span className="font-bold text-neo-dark">EpanD</span>, seorang developer muda yang masih duduk
                  di bangku <span className="bg-neo-yellow px-1 font-bold text-neo-dark">SMP</span>.
                  Meskipun masih muda, passion aku di dunia programming udah besar banget! <Flame size={14} className="inline text-neo-orange" />
                </p>
                <p>
                  Aku mulai belajar coding secara otodidak dari internet — YouTube, dokumentasi,
                  dan banyak trial & error. Sekarang aku udah bisa bikin <span className="font-bold text-neo-dark">web apps</span>,
                  <span className="font-bold text-neo-dark"> REST APIs</span>, dan berbagai project seru lainnya.
                </p>
                <p>
                  Goal aku? Jadi <span className="bg-neo-pink/20 px-1 font-bold text-neo-dark">full-stack developer</span> yang
                  bisa bikin impact positif lewat teknologi. Dan yang paling penting — have fun while coding! <PartyPopper size={14} className="inline text-neo-purple" />
                </p>
              </div>
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag.label} className="neo-border bg-neo-lime px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1">
                    {tag.icon} {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Fun Facts Grid */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {facts.map((fact, i) => (
                <motion.div key={fact.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                  className={`neo-border neo-shadow-sm ${fact.color} rounded-xl p-3 sm:p-4 rotate-hover transition-all duration-200 cursor-default`}>
                  <div className="mb-1.5 sm:mb-2">{fact.icon}</div>
                  <h4 className="font-bold text-xs sm:text-sm">{fact.label}</h4>
                  <p className="text-[10px] sm:text-xs text-neo-dark/60 mt-0.5 sm:mt-1">{fact.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-4 sm:mt-6 neo-border neo-shadow bg-neo-dark text-white rounded-2xl p-5 sm:p-6 lg:rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="font-mono text-xs sm:text-sm leading-relaxed">
                <span className="text-neo-yellow text-xl sm:text-2xl">"</span>
                <br />
                Umur cuma angka. Yang penting <span className="text-neo-yellow">passion</span>,
                <span className="text-neo-pink"> konsistensi</span>, dan
                <span className="text-neo-blue"> keberanian</span> untuk terus belajar.
                <br />
                <span className="text-neo-yellow text-xl sm:text-2xl">"</span>
              </p>
              <p className="text-right text-neo-yellow font-bold mt-2 text-xs sm:text-sm flex items-center justify-end gap-1">— EpanD <Star size={12} /></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
