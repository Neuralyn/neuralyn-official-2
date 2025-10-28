import { motion } from 'framer-motion';
import { FiDownload, FiCalendar, FiMail, FiLinkedin } from 'react-icons/fi';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const milestones = [
  { year: '2025', title: 'Neuralyn Founded', description: 'Founded by AI visionaries to revolutionize healthcare with emotionally intelligent technology.' },
  { year: '2026', title: 'HealMind_AI Launch', description: 'Flagship product launches, transforming mental wellness with AI-powered voice therapy.' },
  { year: '2027', title: 'Global Expansion', description: 'Neuralyn solutions reach hospitals and individuals in 100+ countries.' },
  { year: '2028', title: 'Strategic Partnerships', description: 'Alliances with leading hospitals, research centers, and tech giants.' },
];

const investorsFAQ = [
  { q: "What is Neuralyn's mission?", a: 'To make healthcare intelligent, empathetic, and accessible for all through advanced AI.' },
  { q: 'What makes Neuralyn unique?', a: 'Emotionally intelligent AI, real-world traction, and a world-class team.' },
  { q: 'How can I invest?', a: 'Request a meeting or download our pitch deck for more information.' },
];

export default function Investors() {
  const [form, setForm] = useState({ name: '', email: '', message: '', linkedin: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const SERVICE_ID = 'service_vwqtnqr';
  const TEMPLATE_ID = 'template_h138sop';
  const PUBLIC_KEY = 'Pgw492EwN6LnnXdgt';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          linkedin: form.linkedin,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setSubmitted(true);
      setForm({ name: '', email: '', message: '', linkedin: '' });
    } catch (err) {
      setError('There was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a223a] via-black to-[#1e293b] text-white flex flex-col items-center justify-start px-4 pt-24 pb-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl w-full text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-lg">Invest in the Future of Healthcare AI</h1>
        <p className="text-lg md:text-2xl text-white/80 mb-8 font-light">Join Neuralyn on our mission to revolutionize global healthcare with emotionally intelligent AI. Be part of the next wave of world-changing innovation.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="/Neuralyn Pitch Deck.pdf" download className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/90 hover:bg-blue-600 transition-colors text-white font-semibold shadow-lg text-lg"><FiDownload /> Download Pitch Deck</a>
          <a href="https://calendly.com/neuralyn-ai/investor-meeting" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-colors text-white font-semibold shadow-lg text-lg"><FiCalendar /> Request a Meeting</a>
        </div>
      </motion.div>

      {/* Why Invest Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="max-w-5xl w-full mb-20 grid md:grid-cols-4 gap-8"
      >
        <div className="bg-white/5 rounded-2xl p-6 border border-cyan-300/20 shadow-xl flex flex-col items-center text-center">
          <span className="text-3xl mb-2">🌍</span>
          <h3 className="font-semibold text-lg mb-2">Massive Market</h3>
          <p className="text-white/70 text-base">Global healthcare AI market projected to reach $200B+ by 2030.</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-cyan-300/20 shadow-xl flex flex-col items-center text-center">
          <span className="text-3xl mb-2">🧠</span>
          <h3 className="font-semibold text-lg mb-2">Breakthrough AI</h3>
          <p className="text-white/70 text-base">Emotionally intelligent, clinically validated, and scalable technology.</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-cyan-300/20 shadow-xl flex flex-col items-center text-center">
          <span className="text-3xl mb-2">🚀</span>
          <h3 className="font-semibold text-lg mb-2">Proven Traction</h3>
          <p className="text-white/70 text-base">Rapid user growth, strategic partnerships, and global expansion.</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-cyan-300/20 shadow-xl flex flex-col items-center text-center">
          <span className="text-3xl mb-2">👥</span>
          <h3 className="font-semibold text-lg mb-2">World-Class Team</h3>
          <p className="text-white/70 text-base">Led by AI pioneers, clinicians, and industry leaders from top companies.</p>
        </div>
      </motion.div>

      {/* Milestones Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="max-w-4xl w-full mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Milestones & Traction</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {milestones.map((m) => (
            <div key={m.year} className="bg-black/60 border border-cyan-300/20 rounded-2xl p-5 text-center shadow-lg">
              <div className="text-2xl font-bold text-cyan-300 mb-2">{m.year}</div>
              <div className="font-semibold mb-1 text-white/90">{m.title}</div>
              <div className="text-white/60 text-sm">{m.description}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials/Press */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="max-w-4xl w-full mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">What Leaders Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-cyan-300/20 rounded-2xl p-6 shadow-lg">
            <p className="text-lg text-white/80 italic mb-4">"Neuralyn is redefining what's possible in healthcare AI. Their emotionally intelligent approach is the future."</p>
            <div className="text-white/60 text-sm">— Dr. Jane Smith, Global Health Advisor</div>
          </div>
          <div className="bg-white/5 border border-cyan-300/20 rounded-2xl p-6 shadow-lg">
            <p className="text-lg text-white/80 italic mb-4">"The team at Neuralyn is world-class. Their vision and execution are unmatched."</p>
            <div className="text-white/60 text-sm">— John Doe, Tech Investor</div>
          </div>
        </div>
      </motion.div>

      {/* Investor Resources & FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className="max-w-4xl w-full mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Investor Resources</h2>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <a href="/Neuralyn Pitch Deck.pdf" download className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-blue-500/90 hover:bg-blue-600 transition-colors text-white font-semibold shadow-lg text-lg"><FiDownload /> Download Pitch Deck</a>
          <a href="https://calendly.com/neuralyn-ai/investor-meeting" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-colors text-white font-semibold shadow-lg text-lg"><FiCalendar /> Request a Meeting</a>
        </div>
        <div className="bg-white/5 border border-cyan-300/20 rounded-2xl p-6 shadow-lg">
          <h3 className="font-semibold text-lg mb-4 text-cyan-300">FAQ</h3>
          <ul className="space-y-4">
            {investorsFAQ.map((faq, i) => (
              <li key={i}>
                <div className="font-semibold text-white/90 mb-1">{faq.q}</div>
                <div className="text-white/70 text-base">{faq.a}</div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        id="investor-contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        className="max-w-lg w-full mx-auto bg-white/5 border border-cyan-300/20 rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Request a Meeting</h2>
        {submitted ? (
          <div className="text-center text-cyan-300 text-lg font-semibold py-8">Thank you! We'll be in touch soon.</div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input required type="text" placeholder="Name" className="px-4 py-3 rounded-lg bg-black/40 border border-cyan-300/20 text-white placeholder-white/60" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-black/40 border border-cyan-300/20 text-white placeholder-white/60" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            <input type="text" placeholder="LinkedIn (optional)" className="px-4 py-3 rounded-lg bg-black/40 border border-cyan-300/20 text-white placeholder-white/60" value={form.linkedin} onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))} />
            <textarea required placeholder="Message" className="px-4 py-3 rounded-lg bg-black/40 border border-cyan-300/20 text-white placeholder-white/60 min-h-[100px]" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
            <button type="submit" disabled={loading} className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-colors text-white font-semibold shadow-lg text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Sending...' : (<><FiMail /> Send Request</>)}
            </button>
            {error && <div className="text-red-400 text-center text-sm mt-2">{error}</div>}
          </form>
        )}
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:invest@neuralyn.health" className="text-cyan-300 hover:text-blue-400 text-2xl" aria-label="Email"><FiMail /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-blue-400 text-2xl" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>
      </motion.div>
    </div>
  );
} 