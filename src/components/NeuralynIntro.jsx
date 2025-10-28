import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SEQUENCE = [
  'Depression',
  'Anxiety',
  'Diabetes',
  'Heart Disease',
  'Loneliness',
  'Obesity',
  'Cancer',
  'Chronic Pain',
  'AI Therapy',
  'Predictive Care',
  'Personalized Nutrition',
  'Remote Monitoring',
  'Empathy',
  'Hope',
  'Healing',
];

const DURATION_PER = 320; // ms per word

const NeuralynIntro = ({ onFinish }) => {
  const [step, setStep] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (step < SEQUENCE.length) {
      const t = setTimeout(() => setStep(step + 1), DURATION_PER);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => setShowLogo(true), 600);
      setTimeout(() => setFadeOut(true), 2200);
      setTimeout(() => onFinish && onFinish(), 3000);
    }
  }, [step, onFinish]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {/* Parallax/gradient background */}
          <motion.div
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
            transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(120deg, #0a223a 0%, #2de0fc 100%)',
              opacity: 0.18,
              zIndex: 1,
            }}
          />
          {/* Film grain overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg, #222 0px, #222 2px, transparent 2px, transparent 4px)', opacity: 0.08, zIndex: 2 }} />
          {/* Cinematic bars */}
          <div className="absolute top-0 left-0 w-full h-16 bg-black/90 z-10" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-black/90 z-10" />
          {/* Sequence words/images as sliding panels */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
            {!showLogo ? (
              <motion.span
                key={step}
                initial={{ opacity: 0, x: -120, scale: 0.98, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 120, scale: 1.04, filter: 'blur(8px)' }}
                transition={{ duration: 0.38, ease: 'easeInOut' }}
                className="text-5xl md:text-7xl font-extrabold text-white tracking-widest drop-shadow-lg shadow-blue-400/30"
                style={{ letterSpacing: '0.13em', textShadow: '0 0 32px #fff, 0 0 12px #2de0fc' }}
              >
                {SEQUENCE[step]}
              </motion.span>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.7, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1.1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                <motion.span
                  initial={{ letterSpacing: '0.2em', opacity: 0, scale: 0.9 }}
                  animate={{
                    letterSpacing: ['0.2em', '0.5em', '0.2em'],
                    opacity: [0, 1, 1],
                    scale: [0.9, 1.15, 1],
                    textShadow: [
                      '0 0 32px #2de0fc, 0 0 12px #fff',
                      '0 0 64px #2de0fc, 0 0 24px #fff',
                      '0 0 32px #2de0fc, 0 0 12px #fff'
                    ]
                  }}
                  transition={{ duration: 1.7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                  className="text-6xl md:text-8xl font-extrabold text-white mb-4 select-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Neuralyn
                </motion.span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NeuralynIntro; 