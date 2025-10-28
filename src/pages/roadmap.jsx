import { motion } from 'framer-motion';
import { FiFlag, FiGlobe, FiUsers, FiAward } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

const milestones = [
  {
    year: '2025',
    title: 'Neuralyn Founded',
    icon: FiFlag,
    color: 'from-cyan-400 to-blue-400',
    description: 'Neuralyn is born in Chicago, USA, with a mission to revolutionize healthcare through emotionally intelligent AI.'
  },
  {
    year: '2026',
    title: 'HealMind_AI Launch',
    icon: FaRocket,
    color: 'from-orange-400 to-pink-400',
    description: 'Our flagship product, HealMind_AI, launches to deliver AI-powered mental wellness therapy worldwide.'
  },
  {
    year: '2027',
    title: 'Global Expansion',
    icon: FiGlobe,
    color: 'from-blue-400 to-cyan-400',
    description: 'Neuralyn solutions reach hospitals and individuals in 100+ countries, setting new standards for AI-driven healthcare.'
  },
  {
    year: '2028',
    title: 'Strategic Partnerships',
    icon: FiUsers,
    color: 'from-green-400 to-blue-400',
    description: 'Alliances with leading hospitals, research centers, and tech giants accelerate our impact.'
  },
  {
    year: '2029',
    title: 'AI Hospital Pilot',
    icon: FiAward,
    color: 'from-purple-400 to-cyan-400',
    description: 'First AI-powered hospital pilot program launches, integrating Neuralyn\'s technology into real-world care.'
  },
];

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a223a] via-black to-[#1e293b] text-white flex flex-col items-center justify-start px-4 pt-24 pb-12 relative overflow-x-hidden font-sans">
      {/* Parallax/Geometric background accents */}
      <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-br-full blur-2xl z-0" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-pink-400/10 to-transparent rounded-tl-full blur-2xl z-0" />
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-2xl z-0" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl w-full text-center mb-16 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-lg">Neuralyn Roadmap</h1>
        <p className="text-lg md:text-2xl text-white/80 mb-8 font-light">Building the future of AI-driven healthcare, one milestone at a time.</p>
      </motion.div>

      {/* Vertical Animated Timeline */}
      <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center z-10 min-h-[70vh]">
        {/* Glowing Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 rounded-full blur-[2px] opacity-70 z-0" style={{ minHeight: '80%' }} />
        <div className="flex flex-col gap-16 w-full relative z-10">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            // On mobile, always center; on desktop, alternate
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.13, ease: 'easeOut' }}
                className={`group flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} relative`}
              >
                {/* Card and Icon */}
                <div className={`flex flex-col items-center md:items-stretch ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} w-full md:w-1/2`}> 
                  {/* Floating Icon */}
                  <motion.div
                    whileHover={{ scale: 1.18, rotate: 8 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${m.color} shadow-xl flex items-center justify-center border-4 border-white/10 group-hover:shadow-2xl transition-all duration-300 z-20 -mt-4 md:mt-0`}
                  >
                    <Icon className="text-3xl" />
                  </motion.div>
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: '0 0 32px 8px #0ff3' }}
                    className="flex-1 mt-4 md:mt-0 md:ml-4 md:mr-4 bg-white/10 backdrop-blur-lg border border-cyan-300/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 glass-card text-center md:text-left"
                  >
                    <div className="text-cyan-300 font-bold text-lg mb-1">{m.year}</div>
                    <div className="text-white/90 font-semibold text-xl mb-1">{m.title}</div>
                    <div className="text-white/70 text-base">{m.description}</div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="w-full max-w-2xl mx-auto text-center mt-20 z-10"
      >
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Join Us on the Journey</h2>
        <p className="text-white/80 text-lg mb-6">Whether you're an investor, collaborator, or passionate about the future of healthcare, Neuralyn's journey is just beginning. Let's build the future together.</p>
        <a href="mailto:contact@neuralyn.health" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-colors text-white font-semibold shadow-lg text-lg">Contact Neuralyn</a>
      </motion.div>
      <style>{`
        .glass-card {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
          backdrop-filter: blur(8px);
        }
      `}</style>
    </div>
  );
} 