import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock, MessageCircle, Heart, Link2, PartyPopper, Handshake, GitBranch, MessageSquare, Camera, AtSign } from 'lucide-react';

const socials = [
  { name: 'Instagram', icon: <Camera size={16} />, url: 'https://instagram.com/its.epand_', color: 'bg-pink-500 text-white' },
  { name: 'Email', icon: <AtSign size={16} />, url: 'mailto:deandri.epan21@smp.belajar.id', color: 'bg-neo-blue' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setFormData({ name: '', email: '', message: '' }); }, 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-neo-dark relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-neo-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-neo-blue/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
          <div className="inline-block neo-border neo-shadow bg-neo-pink px-4 sm:px-6 py-2 rounded-xl mb-3 sm:mb-4">
            <span className="font-mono text-xs sm:text-sm font-bold">04 // CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center gap-2 sm:gap-3 flex-wrap">
            Let's <span className="text-neo-yellow">Connect</span> <MessageCircle size={28} className="text-neo-yellow hidden sm:block" />
          </h2>
          <p className="text-white/50 mt-2 sm:mt-3 text-sm sm:text-lg max-w-xl">
            Mau kolaborasi, ngobrol, atau just say hi? Gas aja!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="neo-border neo-shadow-lg bg-white rounded-2xl p-5 sm:p-8">
              {sent ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neo-yellow neo-border rounded-2xl flex items-center justify-center mb-4">
                    <PartyPopper size={32} className="text-neo-dark" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Pesan Terkirim!</h3>
                  <p className="text-neo-dark/60 text-sm">Thanks udah reach out. Aku bakal bales secepatnya!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <MessageCircle size={18} />
                    <h3 className="font-bold text-base sm:text-lg">Kirim Pesan</h3>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-bold block mb-1.5">Nama</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="Nama kamu" className="w-full neo-border rounded-xl p-3 bg-neo-bg focus:outline-none focus:ring-2 focus:ring-neo-dark text-sm" />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-bold block mb-1.5">Email</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="email@example.com" className="w-full neo-border rounded-xl p-3 bg-neo-bg focus:outline-none focus:ring-2 focus:ring-neo-dark text-sm" />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-bold block mb-1.5">Pesan</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder="Tulis pesan kamu di sini..." rows={4} className="w-full neo-border rounded-xl p-3 bg-neo-bg focus:outline-none focus:ring-2 focus:ring-neo-dark text-sm resize-none" />
                  </div>
                  <button type="submit" className="neo-btn bg-neo-pink text-white px-6 py-3 rounded-xl w-full flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Send size={16} /> Kirim Pesan
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info & Socials */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'contact@epand.dev', color: 'bg-neo-yellow' },
                { icon: <MapPin size={18} />, label: 'Lokasi', value: 'Indonesia', color: 'bg-neo-blue' },
                { icon: <Clock size={18} />, label: 'Response', value: '< 24 jam', color: 'bg-neo-green' },
                { icon: <Heart size={18} />, label: 'Status', value: 'Open for collab!', color: 'bg-neo-pink' },
              ].map((info) => (
                <div key={info.label} className={`neo-border neo-shadow-sm ${info.color} rounded-xl p-3 sm:p-4`}>
                  <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
                    {info.icon}
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-neo-dark/60">{info.label}</span>
                  </div>
                  <p className="font-bold text-xs sm:text-sm truncate">{info.value}</p>
                </div>
              ))}
            </div>

            <div className="neo-border neo-shadow-lg bg-white rounded-2xl p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2"><Link2 size={16} /> Social Media</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {socials.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                    className={`neo-btn ${social.color} px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm justify-center font-bold`}>
                    {social.icon} {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="neo-border neo-shadow bg-neo-yellow rounded-2xl p-5 sm:p-6 text-center lg:rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white neo-border rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Handshake size={24} className="text-neo-dark" />
              </div>
              <p className="font-bold text-sm sm:text-lg">Let's build something awesome together!</p>
              <p className="text-xs sm:text-sm text-neo-dark/60 mt-1">Aku selalu terbuka untuk project baru dan kolaborasi</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
