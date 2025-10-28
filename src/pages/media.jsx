import { motion } from 'framer-motion';
import { FiRss, FiVideo, FiGlobe, FiCamera } from 'react-icons/fi';

export default function Media() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a223a] via-black to-[#1e293b] flex flex-col items-center justify-center px-4 pt-24 pb-12 relative overflow-x-hidden font-sans">
      {/* Parallax/Geometric background accents */}
      <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-br-full blur-2xl z-0" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-pink-400/10 to-transparent rounded-tl-full blur-2xl z-0" />
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-2xl z-0" />

      {/* Animated Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            Media & News
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
          className="relative flex flex-col items-center"
        >
          <motion.div
            animate={{
              textShadow: [
                '0 0 32px #7ee0ff, 0 0 64px #0ff',
                '0 0 64px #7ee0ff, 0 0 32px #0ff',
                '0 0 32px #7ee0ff, 0 0 64px #0ff',
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="text-3xl md:text-5xl font-bold text-white/90 mb-8 select-none"
          >
            Coming Soon
          </motion.div>
          {/* Floating Media Icons */}
          <div className="flex gap-8 mt-4">
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="text-cyan-400 text-4xl drop-shadow-lg"
            >
              <FiRss />
            </motion.div>
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="text-pink-400 text-4xl drop-shadow-lg"
            >
              <FiVideo />
            </motion.div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="text-yellow-400 text-4xl drop-shadow-lg"
            >
              <FiGlobe />
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="text-blue-400 text-4xl drop-shadow-lg"
            >
              <FiCamera />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 