import React from 'react';
import { motion } from 'framer-motion';

const Docs = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
    {/* Film grain overlay */}
    <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'repeating-linear-gradient(0deg, #222 0px, #222 2px, transparent 2px, transparent 4px)', opacity: 0.07 }} />
    {/* Unique geometric animated shapes for footer pages */}
    <motion.div
      className="absolute -top-1/4 left-1/3 w-[60vw] h-[60vh] z-0 pointer-events-none"
      initial={{ scale: 1, opacity: 0.13 }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.13, 0.22, 0.13] }}
      transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      style={{ background: 'radial-gradient(ellipse 60% 40% at 60% 40%, #ffb347 0%, #2de0fc 60%, transparent 100%)', filter: 'blur(90px)' }}
    />
    <motion.div
      className="absolute bottom-[-10vh] right-[-10vw] w-[40vw] h-[40vh] z-0 pointer-events-none"
      initial={{ scale: 1, opacity: 0.10 }}
      animate={{ scale: [1, 1.07, 1], opacity: [0.10, 0.18, 0.10] }}
      transition={{ duration: 24, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 50%, #b16cff 0%, #ffb347 60%, transparent 100%)', filter: 'blur(70px)' }}
    />
    {/* Animated circle accent */}
    <motion.svg
      className="absolute left-12 bottom-24 z-0"
      width="80" height="80" viewBox="0 0 80 80"
      initial={{ opacity: 0.12, scale: 0.97 }}
      animate={{ opacity: [0.12, 0.22, 0.12], scale: [0.97, 1.07, 0.97] }}
      transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    >
      <circle cx="40" cy="40" r="32" stroke="#2de0fc" strokeWidth="2.5" fill="none" />
      <circle cx="40" cy="40" r="18" stroke="#b16cff" strokeWidth="1.5" fill="none" />
    </motion.svg>
    {/* Animated polygon accent */}
    <motion.svg
      className="absolute right-16 top-24 z-0"
      width="64" height="64" viewBox="0 0 64 64"
      initial={{ opacity: 0.10, rotate: 0 }}
      animate={{ opacity: [0.10, 0.18, 0.10], rotate: [0, 12, 0] }}
      transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    >
      <polygon points="32,8 56,56 8,56" stroke="#ffb347" strokeWidth="2" fill="none" />
    </motion.svg>
    {/* Subtle grid lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.04 }}>
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <motion.h1
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-4xl md:text-6xl font-bold mb-6 z-10"
    >
      Neuralyn Docs
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="text-xl text-white/80 mb-8 max-w-2xl text-center z-10"
    >
      Comprehensive guides and documentation for Neuralyn products and solutions.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
      className="bg-white/5 backdrop-blur-2xl rounded-2xl p-8 max-w-2xl w-full border border-cyan-300/20 mt-8 shadow-[0_8px_32px_0_rgba(45,224,252,0.10)]"
    >
      <h2 className="text-2xl font-semibold mb-4">Documentation will be available soon.</h2>
    </motion.div>
  </div>
);

export default Docs; 