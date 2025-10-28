import React from 'react';
import { motion } from 'framer-motion';

const Security = () => (
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
      <h1 className="text-4xl font-bold mb-10 text-left tracking-tight text-white/95">Security at Neuralyn</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">1. Data Security Practices</h2>
        <p className="text-white/80 text-lg leading-relaxed">We use industry-leading security measures to protect your data, including encryption, secure access controls, and regular security audits. Our infrastructure is designed for privacy and resilience.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">2. Compliance</h2>
        <p className="text-white/80 text-lg leading-relaxed">Neuralyn is committed to compliance with healthcare and data protection standards, including HIPAA and ISO 27001. We regularly review and update our practices to meet regulatory requirements.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">3. Responsible Disclosure</h2>
        <p className="text-white/80 text-lg leading-relaxed">If you believe you have found a security vulnerability, please report it responsibly to <a href="mailto:support@neuralyn.health" className="text-blue-400 underline">support@neuralyn.health</a>. We appreciate your help in keeping Neuralyn secure.</p>
      </section>
      <section className="mb-2">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">4. Contact</h2>
        <p className="text-white/80 text-lg leading-relaxed">For security-related questions, contact us at <a href="mailto:support@neuralyn.health" className="text-blue-400 underline">support@neuralyn.health</a>.</p>
      </section>
    </motion.div>
  </div>
);

export default Security; 