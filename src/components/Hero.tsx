import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Rocket, Flame, GraduationCap, Terminal, Atom, CircleDot, Bug } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-14 sm:pt-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="hidden sm:block absolute top-24 left-8 w-20 h-20 bg-neo-pink neo-border rounded-full opacity-60 float-animation" />
      <div className="hidden sm:block absolute top-40 right-12 w-14 h-14 bg-neo-blue neo-border rounded-lg rotate-12 float-animation" style={{ animationDelay: '1s' }} />
      <div className="hidden sm:block absolute bottom-32 left-1/4 w-16 h-16 bg-neo-purple neo-border rounded-full opacity-50 float-animation" style={{ animationDelay: '2s' }} />
      <div className="hidden sm:block absolute bottom-20 right-1/3 w-10 h-10 bg-neo-orange neo-border rotate-45 float-animation" style={{ animationDelay: '0.5s' }} />

      {/* Marquee Banner */}
      <div className="absolute top-14 sm:top-16 left-0 right-0 bg-neo-dark text-neo-yellow py-1.5 sm:py-2 overflow-hidden neo-border border-l-0 border-r-0">
        <div className="marquee whitespace-nowrap">
          <span className="font-mono text-xs sm:text-sm tracking-widest">
            ★ DEVELOPER ★ CREATOR ★ STUDENT ★ BUILDER ★ CODER ★ DREAMER ★ DEVELOPER ★ CREATOR ★ STUDENT ★ BUILDER ★ CODER ★ DREAMER ★ DEVELOPER ★ CREATOR ★ STUDENT ★ BUILDER ★ CODER ★ DREAMER ★
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left content — always first on mobile & desktop left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-neo-dark leading-tight mb-4 sm:mb-6">
              Halo, Aku{' '}
              <span className="relative inline-block">
                <span className="relative z-10">EpanD</span>
                <span className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-3 sm:h-4 bg-neo-yellow -z-0 -rotate-1" />
              </span>
              <span className="text-neo-pink">.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neo-dark/70 mb-6 sm:mb-8 max-w-lg font-medium leading-relaxed">
              Seorang <span className="bg-neo-blue/30 px-1 font-bold">developer muda</span> yang passionate dalam membangun web apps, APIs, dan project-project keren lainnya. Belajar, build, repeat! <Flame size={16} className="inline text-neo-orange" />
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="neo-btn bg-neo-pink text-white px-5 sm:px-6 py-3 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2">
                <Rocket size={18} /> Lihat Projects
              </a>
              <a href="#contact" className="neo-btn bg-white px-5 sm:px-6 py-3 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2">
                <Code2 size={18} /> Hubungi Aku
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-10">
              {[
                { num: '2+', label: 'Projects' },
                { num: '6+', label: 'Skills' },
                { num: '∞', label: 'Semangat' },
              ].map((stat) => (
                <div key={stat.label} className="neo-border bg-white rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 neo-shadow-sm flex-1 sm:flex-none text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-neo-dark">{stat.num}</div>
                  <div className="text-[10px] sm:text-xs text-neo-dark/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Avatar Card — below text on mobile, right side on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-sm">
              {/* Main Card */}
              <div className="neo-border neo-shadow-lg bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 w-full lg:rotate-2 lg:hover:rotate-0 transition-transform duration-300">
                {/* Terminal Window */}
                <div className="neo-border rounded-xl bg-neo-dark p-4 sm:p-5 mb-4">
                  {/* Window dots */}
                  <div className="flex gap-1.5 sm:gap-2 mb-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neo-red" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neo-yellow" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neo-green" />
                  </div>
                  {/* Terminal content */}
                  <div className="font-mono text-[13px] sm:text-sm text-green-400 space-y-2">
                    <div>
                      <p><span className="text-neo-blue">$</span> whoami</p>
                      <p className="text-neo-yellow">→ EpanD</p>
                    </div>
                    <div>
                      <p><span className="text-neo-blue">$</span> cat status.txt</p>
                      <p className="text-neo-pink flex items-center gap-1">→ Student & Dev <GraduationCap size={13} /></p>
                    </div>
                    <div>
                      <p><span className="text-neo-blue">$</span> echo $MOOD</p>
                      <p className="text-neo-green flex items-center gap-1">→ Excited to code <Flame size={13} /></p>
                    </div>
                  </div>
                </div>

                {/* Profile Row */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-13 h-13 sm:w-16 sm:h-16 bg-neo-yellow neo-border rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <Terminal size={24} className="text-neo-dark" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg">EpanD</h3>
                    <p className="text-xs sm:text-sm text-neo-dark/60 font-mono">@epand.dev</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 left-2 sm:-top-4 sm:-left-4 neo-border neo-shadow-sm bg-neo-blue rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-bold -rotate-6 flex items-center gap-1 z-10">
                React <Atom size={13} />
              </div>
              <div className="absolute -bottom-3 right-2 sm:-bottom-3 sm:-right-3 neo-border neo-shadow-sm bg-neo-orange rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-bold rotate-6 flex items-center gap-1 z-10">
                Node.js <CircleDot size={13} />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-6 neo-border neo-shadow-sm bg-neo-purple text-white rounded-lg sm:rounded-xl px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-sm font-bold rotate-12 flex items-center gap-1 z-10">
                Python <Bug size={12} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
