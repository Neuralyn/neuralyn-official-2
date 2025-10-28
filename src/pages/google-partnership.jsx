import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GooglePartnershipContent from '../components/GooglePartnershipContent';
import Prism from '../components/Prism';

const GooglePartnership = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show intro logos for 2 seconds
    const logosTimer = setTimeout(() => {
      setShowIntro(false); // Hide logos
    }, 2000);

    // Show content after fade out
    const contentTimer = setTimeout(() => {
      setShowContent(true); // Show content
    }, 2500); // 2s + 0.5s fade = 2.5s total

    return () => {
      clearTimeout(logosTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Intro Animation with Prism Background */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black"
          >
            {/* Prism Background */}
            <div className="absolute inset-0 opacity-70">
              <Prism
                animationType="rotate"
                timeScale={0.5}
                height={3.5}
                baseWidth={5.5}
                scale={3.6}
                hueShift={0}
                colorFrequency={1}
                noise={0.5}
                glow={1}
              />
            </div>

            {/* Neuralyn X Google Logo Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex items-center gap-8 px-12"
            >
              {/* Neuralyn Logo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                <div className="text-6xl md:text-7xl font-bold tracking-wider text-white mb-4">Neuralyn</div>
              </motion.div>

              {/* X Symbol */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 150 }}
                className="text-white text-7xl md:text-8xl font-light mx-8"
              >
                ×
              </motion.div>

              {/* Google Logo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                <img 
                  src="/Google.png" 
                  alt="Google for Startups" 
                  className="h-24 w-auto"
                />
                <span className="text-white text-xl md:text-2xl font-light mt-4">Google for Startups</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {showContent && <GooglePartnershipContent />}
    </div>
  );
};

export default GooglePartnership;
