import { motion } from 'framer-motion';

const NeuralynLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Glowing neural energy ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="mb-8"
      >
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#2de0fc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0a223a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="90" cy="90" r="70" stroke="url(#glow)" strokeWidth="12" fill="none" />
          <motion.circle
            cx="90" cy="90" r="70"
            stroke="#2de0fc"
            strokeWidth="4"
            fill="none"
            strokeDasharray="440"
            strokeDashoffset="440"
            animate={{ strokeDashoffset: [440, 0, 440] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 24px #2de0fc)' }}
          />
        </svg>
      </motion.div>
      {/* Animated Neuralyn text */}
      <motion.h1
        initial={{ letterSpacing: '0.2em', opacity: 0 }}
        animate={{
          letterSpacing: ['0.2em', '0.5em', '0.2em'],
          opacity: [0, 1, 1],
          textShadow: [
            '0 0 24px #2de0fc, 0 0 8px #fff',
            '0 0 48px #2de0fc, 0 0 16px #fff',
            '0 0 24px #2de0fc, 0 0 8px #fff'
          ]
        }}
        transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="text-4xl md:text-6xl font-extrabold text-blue-200 mb-4 select-none"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Neuralyn
      </motion.h1>
      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1], y: [20, 0, 0] }}
        transition={{ duration: 1.2, delay: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="text-lg text-white/70 tracking-widest mt-2"
      >
        Initializing AI Health Systems...
      </motion.p>
    </div>
  );
};

export default NeuralynLoader; 