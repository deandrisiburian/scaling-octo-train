import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Atom, FileCode2, FileType, Globe, Wind,
  CircleDot, Bug, Train, Link,
  Database, Shell, GitBranch, Code2, Terminal as TerminalIcon,
  Triangle, Container, Leaf, Hexagon,
  Palette, Settings, HardDrive, BookOpen, Wrench
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Palette size={24} />,
    color: 'bg-neo-pink',
    skills: [
      { name: 'React', level: 85, icon: <Atom size={16} /> },
      { name: 'JavaScript', level: 90, icon: <FileCode2 size={16} /> },
      { name: 'TypeScript', level: 75, icon: <FileType size={16} /> },
      { name: 'HTML/CSS', level: 90, icon: <Globe size={16} /> },
      { name: 'Tailwind CSS', level: 80, icon: <Wind size={16} /> },
    ],
  },
  {
    title: 'Backend',
    icon: <Settings size={24} />,
    color: 'bg-neo-blue',
    skills: [
      { name: 'Node.js', level: 85, icon: <CircleDot size={16} /> },
      { name: 'Python', level: 70, icon: <Bug size={16} /> },
      { name: 'Express.js', level: 80, icon: <Train size={16} /> },
      { name: 'REST API', level: 85, icon: <Link size={16} /> },
    ],
  },
  {
    title: 'Database & Tools',
    icon: <HardDrive size={24} />,
    color: 'bg-neo-orange',
    skills: [
      { name: 'SQL', level: 75, icon: <Database size={16} /> },
      { name: 'MySQL', level: 70, icon: <Shell size={16} /> },
      { name: 'Git', level: 80, icon: <GitBranch size={16} /> },
      { name: 'VS Code', level: 95, icon: <Code2 size={16} /> },
    ],
  },
  {
    title: 'Learning Next',
    icon: <BookOpen size={24} />,
    color: 'bg-neo-purple',
    skills: [
      { name: 'Next.js', level: 40, icon: <Triangle size={16} /> },
      { name: 'Docker', level: 30, icon: <Container size={16} /> },
      { name: 'MongoDB', level: 35, icon: <Leaf size={16} /> },
      { name: 'GraphQL', level: 25, icon: <Hexagon size={16} /> },
    ],
  },
];

const marqueeItems: { icon: ReactNode; name: string }[] = [
  { icon: <Atom size={18} />, name: 'React' },
  { icon: <CircleDot size={18} />, name: 'Node.js' },
  { icon: <Database size={18} />, name: 'SQL' },
  { icon: <FileCode2 size={18} />, name: 'JavaScript' },
  { icon: <FileType size={18} />, name: 'TypeScript' },
  { icon: <Bug size={18} />, name: 'Python' },
  { icon: <Wind size={18} />, name: 'Tailwind' },
  { icon: <Train size={18} />, name: 'Express' },
  { icon: <GitBranch size={18} />, name: 'Git' },
  { icon: <Globe size={18} />, name: 'HTML/CSS' },
  { icon: <Code2 size={18} />, name: 'VS Code' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
          <div className="inline-block neo-border neo-shadow bg-neo-purple text-white px-4 sm:px-6 py-2 rounded-xl mb-3 sm:mb-4">
            <span className="font-mono text-xs sm:text-sm font-bold">03 // SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neo-dark flex items-center gap-2 sm:gap-3 flex-wrap">
            Tech <span className="text-neo-purple">Stack</span> <Wrench size={28} className="text-neo-dark/40 hidden sm:block" />
          </h2>
          <p className="text-neo-dark/50 mt-2 sm:mt-3 text-sm sm:text-lg max-w-xl">
            Tools dan teknologi yang aku pakai sehari-hari (dan yang lagi dipelajari!)
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * catIdx }}>
              <div className={`neo-border neo-shadow-lg ${cat.color} rounded-2xl p-4 sm:p-6 hover:-translate-y-1 transition-transform duration-300`}>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/60 neo-border rounded-xl flex items-center justify-center shrink-0">{cat.icon}</div>
                  <h3 className="text-base sm:text-xl font-bold text-neo-dark">{cat.title}</h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {cat.skills.map((skill, i) => (
                    <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i + 0.2 * catIdx }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm text-neo-dark">{skill.icon}{skill.name}</span>
                        <span className="font-mono text-[10px] sm:text-xs text-neo-dark/60">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 sm:h-4 bg-white/60 neo-border rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 * i }} className="h-full bg-neo-dark rounded-full" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 neo-border bg-white rounded-2xl overflow-hidden neo-shadow">
          <div className="py-3 sm:py-4 overflow-hidden">
            <div className="marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="inline-block">
                  {marqueeItems.map((item, idx) => (
                    <span key={idx + '-' + i} className="inline-flex items-center gap-1 sm:gap-1.5 mx-2.5 sm:mx-4 font-bold text-sm sm:text-lg text-neo-dark/60">
                      {item.icon} {item.name}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
