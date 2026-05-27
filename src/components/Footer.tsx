import { Heart, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neo-bg neo-border border-b-0 border-l-0 border-r-0">
      <div className="flex justify-center -mt-6">
        <a href="#home" className="neo-btn bg-neo-yellow px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center gap-2 text-xs sm:text-sm">
          <ArrowUp size={14} /> Kembali ke Atas
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0 sm:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 neo-border rounded-lg overflow-hidden shrink-0">
              <img src="https://pchs2.krakencloud.net/uploads/27-05-2026/1f5eNsXPnE/image.jpeg" alt="EpanD" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-mono font-bold text-lg sm:text-xl text-neo-dark">EpanD</span>
              <p className="text-[10px] sm:text-xs text-neo-dark/50">Developer Portfolio</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-xs sm:text-sm font-bold text-neo-dark/60 hover:text-neo-dark transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="sm:text-right">
            <p className="text-xs sm:text-sm text-neo-dark/60 flex items-center sm:justify-end gap-1">
              Made with <Heart size={12} className="text-neo-red fill-neo-red" /> by EpanD
            </p>
            <p className="text-[10px] sm:text-xs text-neo-dark/40 mt-0.5">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-neo-dark/10 text-center">
          <p className="font-mono text-[10px] sm:text-xs text-neo-dark/30 flex items-center justify-center gap-1">
            {'{ '} built with React + Tailwind CSS + Neo-Brutalism <Sparkles size={10} /> {' }'}
          </p>
        </div>
      </div>
    </footer>
  );
}
