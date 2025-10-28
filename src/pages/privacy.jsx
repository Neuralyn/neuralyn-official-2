import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
    {/* Geometric accents */}
    <svg className="absolute top-8 right-8 w-32 h-32 opacity-10 z-0" viewBox="0 0 100 100" fill="none">
      <rect x="10" y="10" width="80" height="80" rx="18" stroke="#2de0fc" strokeWidth="2" />
      <line x1="20" y1="80" x2="80" y2="20" stroke="#b16cff" strokeWidth="1.5" />
    </svg>
    <svg className="absolute bottom-8 left-8 w-24 h-24 opacity-10 z-0" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="32" stroke="#b16cff" strokeWidth="2" />
      <circle cx="40" cy="40" r="18" stroke="#2de0fc" strokeWidth="1.5" />
    </svg>
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-3xl w-full mx-auto bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-xl p-10 md:p-14 z-10"
    >
      <h1 className="text-4xl font-bold mb-10 text-left tracking-tight text-white/95">Privacy Policy</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">1. Information We Collect</h2>
        <p className="text-white/80 text-lg leading-relaxed">We collect information you provide directly (such as contact details and messages) and information automatically collected (such as usage data and cookies) when you use Neuralyn's services.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">2. Use of Information</h2>
        <p className="text-white/80 text-lg leading-relaxed">We use your information to provide, improve, and secure our services, communicate with you, and comply with legal obligations. We do not sell your personal information.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">3. Data Security</h2>
        <p className="text-white/80 text-lg leading-relaxed">We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">4. Cookies</h2>
        <p className="text-white/80 text-lg leading-relaxed">We use cookies and similar technologies to enhance your experience, analyze usage, and deliver relevant content. You can control cookies through your browser settings.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">5. Third-Party Services</h2>
        <p className="text-white/80 text-lg leading-relaxed">We may use third-party services (such as analytics and email providers) that collect, use, and share information according to their own privacy policies.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">6. Your Rights</h2>
        <p className="text-white/80 text-lg leading-relaxed">You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">7. Changes to This Policy</h2>
        <p className="text-white/80 text-lg leading-relaxed">We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page.</p>
      </section>
      <section className="mb-2">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">8. Contact</h2>
        <p className="text-white/80 text-lg leading-relaxed">For privacy questions, contact us at <a href="mailto:info@neuralyn.health" className="text-blue-400 underline">info@neuralyn.health</a>.</p>
      </section>
    </motion.div>
  </div>
);

export default Privacy; 