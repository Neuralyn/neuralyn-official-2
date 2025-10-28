import React from 'react';
import { motion } from 'framer-motion';

const DiabeX = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
    {/* Film grain overlay */}
    <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'repeating-linear-gradient(0deg, #222 0px, #222 2px, transparent 2px, transparent 4px)', opacity: 0.07 }} />
    {/* Unique geometric animated shapes for products pages */}
    <motion.div
      className="absolute -top-1/4 left-1/4 w-[65vw] h-[60vh] z-0 pointer-events-none"
      initial={{ scale: 1, opacity: 0.16 }}
      animate={{ scale: [1, 1.13, 1], opacity: [0.16, 0.26, 0.16] }}
      transition={{ duration: 19, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      style={{ background: 'radial-gradient(ellipse 60% 40% at 60% 40%, #ffb347 0%, #2de0fc 60%, transparent 100%)', filter: 'blur(110px)' }}
    />
    <motion.div
      className="absolute bottom-[-12vh] right-[-12vw] w-[45vw] h-[45vh] z-0 pointer-events-none"
      initial={{ scale: 1, opacity: 0.13 }}
      animate={{ scale: [1, 1.11, 1], opacity: [0.13, 0.21, 0.13] }}
      transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 50%, #b16cff 0%, #ffb347 60%, transparent 100%)', filter: 'blur(90px)' }}
    />
    {/* Animated circle accent */}
    <motion.svg
      className="absolute left-20 bottom-32 z-0"
      width="90" height="90" viewBox="0 0 90 90"
      initial={{ opacity: 0.14, scale: 0.97 }}
      animate={{ opacity: [0.14, 0.24, 0.14], scale: [0.97, 1.09, 0.97] }}
      transition={{ duration: 17, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    >
      <circle cx="45" cy="45" r="36" stroke="#2de0fc" strokeWidth="2.5" fill="none" />
      <circle cx="45" cy="45" r="22" stroke="#b16cff" strokeWidth="1.5" fill="none" />
    </motion.svg>
    {/* Animated polygon accent */}
    <motion.svg
      className="absolute right-24 top-28 z-0"
      width="72" height="72" viewBox="0 0 72 72"
      initial={{ opacity: 0.12, rotate: 0 }}
      animate={{ opacity: [0.12, 0.20, 0.12], rotate: [0, 18, 0] }}
      transition={{ duration: 23, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    >
      <polygon points="36,10 66,62 6,62" stroke="#ffb347" strokeWidth="2" fill="none" />
    </motion.svg>
    {/* Subtle grid lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.03 }}>
      <defs>
        <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#fff" strokeWidth="0.5" />
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
      DiabeX
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="text-xl text-white/80 mb-8 max-w-2xl text-center z-10"
    >
      Comprehensive diabetes management platform powered by AI. Blood sugar prediction, dietary recommendations, and personalized care for better living.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
      className="bg-white/5 backdrop-blur-2xl rounded-2xl p-8 max-w-2xl w-full border border-cyan-300/20 mt-8 shadow-[0_8px_32px_0_rgba(45,224,252,0.10)]"
    >
      <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
      <p className="text-white/70 text-lg">This is a future product page for DiabeX. Here, you will find detailed features, benefits, and how to get started with our AI-powered diabetes management solution.</p>
    </motion.div>
  </div>
);

export default DiabeX; 