import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const PANELS = [
  {
    text: "Sometimes, the hardest battles are the ones no one else can see.",
    type: 'dark',
    overlay: 'rgba(0,0,0,0.35)',
  },
  {
    text: "The weight of worry, the silence of pain, the fear of tomorrow...",
    type: 'dark',
    overlay: 'rgba(30,40,60,0.32)',
  },
  {
    text: "But even in the darkest moments, hope can find a way.",
    type: 'hope',
    overlay: 'rgba(0,0,0,0.18)',
  },
  {
    text: "Neuralyn was born from a dream: to bring empathy, intelligence, and support to every journey.",
    type: 'hope',
    overlay: 'rgba(0,0,0,0.18)',
  },
  {
    text: "We don't promise miracles. But we promise to walk with you, every step.",
    type: 'hope',
    overlay: 'rgba(0,0,0,0.12)',
  },
  {
    text: "Together, we can turn struggle into strength, and loneliness into connection.",
    type: 'hope',
    overlay: 'rgba(0,0,0,0.10)',
  },
  {
    text: "You're not alone. Welcome to Neuralyn.",
    type: 'hope',
    overlay: 'rgba(0,0,0,0.18)',
    isFinal: true,
  },
];

const DURATION_PER = 5500;

const NeuralynMangaIntro = ({ onFinish }) => {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (step < PANELS.length - 1) {
      const t = setTimeout(() => setStep(step + 1), DURATION_PER);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => setFadeOut(true), DURATION_PER + 600);
      setTimeout(() => onFinish && onFinish(), DURATION_PER + 1800);
    }
  }, [step, onFinish]);

  const panel = PANELS[step];

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <AnimatedBackground type={panel.type} />
          
          {/* Manga-style overlay */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: panel.overlay,
              backdropFilter: 'blur(2px)',
              zIndex: 1 
            }} 
          />

          {/* Subtle manga lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 2, opacity: 0.08 }}
          >
            <defs>
              <pattern id="mangaLines" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M0 0L8 8ZM8 0L0 8Z" stroke="#fff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mangaLines)" />
          </svg>

          {/* Cinematic bars */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-16 bg-black/90 z-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-16 bg-black/90 z-10"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Panel content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={panel.text}
                initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -60, filter: 'blur(8px)' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="text-2xl md:text-4xl font-semibold text-white text-center max-w-3xl mx-auto px-4 drop-shadow-lg"
                style={{ 
                  letterSpacing: '0.04em',
                  textShadow: panel.type === 'hope' 
                    ? '0 0 24px #fff, 0 0 8px #2de0fc'
                    : '0 0 24px #fff'
                }}
              >
                {panel.text}
              </motion.p>
              {panel.isFinal && (
                <motion.div
                  key="neuralyn-logo"
                  initial={{ opacity: 0, scale: 0.98, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 24 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.7 }}
                  className="mt-10"
                >
                  <span 
                    className="text-4xl md:text-6xl font-bold text-white tracking-wide select-none"
                    style={{
                      letterSpacing: '0.12em',
                      background: 'linear-gradient(120deg, #fff 60%, #b6eaff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 12px rgba(44, 180, 255, 0.10), 0 1px 0 #fff2',
                      fontWeight: 600,
                    }}
                  >
                    Neuralyn
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NeuralynMangaIntro; 