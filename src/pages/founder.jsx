import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiExternalLink } from 'react-icons/fi';

const founder = {
  name: 'Nithin Rajulapati',
  title: 'Founder & CTO, Neuralyn',
  location: 'Chicago, IL, USA',
  email: 'cto@neuralyn.health',
  phone: '+1 312-409-1816',
  github: 'https://github.com/Nani1-glitch',
  linkedin: 'https://www.linkedin.com/in/nithin-rajulapati-69133a1aa/',
  portfolio: 'https://nani1-glitch.github.io/nithin_rajulapati/',
  photo: '/nithin.jpeg',
  headline: 'Visionary AI Leader. Builder. Global Educator.',
  subheadline: 'Transforming healthcare and technology with emotionally intelligent AI, relentless curiosity, and a passion for empowering people worldwide.',
  note: `"I believe the future belongs to those who blend intelligence with empathy. My mission is to build technology that not only solves problems, but also uplifts humanity."`,
  highlights: [
    'AI HealthTech founder with global impact',
    'Taught 3500+ students in 100+ countries',
    'Expert in AI, ML, Deep Learning, and Data Science',
    'Built real-time AI products for voice, vision, and language',
    'Proven leader, educator, and innovator',
  ],
  quote: '"The best way to predict the future is to invent it."',
  quoteBy: '— Alan Kay',
};

export default function Founder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181a20] via-[#23272f] to-[#0a223a] text-white flex flex-col items-center justify-start px-4 pt-24 pb-12 relative overflow-hidden">
      {/* Fluid Background Elements */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[60vh] z-0 pointer-events-none"
        initial={{ scale: 1, opacity: 0.25 }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #2de0fc 0%, #2de0fc 60%, transparent 100%)',
          filter: 'blur(80px)',
          opacity: 0.16,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-[-20vw] w-[60vw] h-[50vh] z-0 pointer-events-none"
        initial={{ scale: 1, opacity: 0.18 }}
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{ duration: 28, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #2de0fc 0%, #2de0fc 60%, transparent 100%)',
          filter: 'blur(100px)',
          opacity: 0.11,
        }}
      />

      {/* Editorial Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 mb-16 relative z-10"
      >
        {/* Photo with subtle glow */}
        <motion.div 
          className="flex-shrink-0 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"></div>
          <img src={founder.photo} alt="Nithin Rajulapati" className="w-48 h-48 md:w-64 md:h-64 rounded-full grayscale border-4 border-cyan-400 shadow-2xl object-cover bg-white/10 relative z-10" />
        </motion.div>

        {/* Editorial Content */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-serif font-bold text-white/90 leading-tight mb-2"
          >
            {founder.name}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl font-light text-cyan-300 mb-2"
          >
            {founder.title}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/80 font-serif mb-2"
          >
            {founder.headline}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-white/60 font-light mb-4 italic"
          >
            {founder.subheadline}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center mt-2"
          >
            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-blue-400 text-2xl transition-colors duration-300"><FiLinkedin /></a>
            <a href={founder.github} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-blue-400 text-2xl transition-colors duration-300"><FiGithub /></a>
            <a href={`mailto:${founder.email}`} className="text-cyan-300 hover:text-blue-400 text-2xl transition-colors duration-300"><FiMail /></a>
            <a href={founder.portfolio} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-blue-400 text-2xl transition-colors duration-300"><FiExternalLink /></a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/60 text-sm mt-2"
          >
            {founder.location} &bull; {founder.phone}
          </motion.div>
        </div>
      </motion.div>

      {/* Founder Note & Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-10 mb-16 relative z-10"
      >
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="text-xl md:text-2xl font-serif italic text-white/90 border-l-4 border-cyan-400 pl-6 mb-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl">
            {founder.note}
          </div>
          <div className="text-white/60 text-base font-light mt-2">
            Driven by a relentless curiosity and a belief in the power of technology to change lives, Nithin has built a career at the intersection of AI, education, and global impact.
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <div className="text-cyan-300 font-semibold text-lg mb-2">Highlights</div>
          <ul className="space-y-3">
            {founder.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-white/80 text-base flex items-center gap-2"
              >
                <span className="text-cyan-400">•</span> {h}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Inspirational Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        className="w-full max-w-2xl mx-auto text-center mb-16 relative z-10"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20">
          <div className="text-xl md:text-2xl font-serif italic text-white/80 mb-2">{founder.quote}</div>
          <div className="text-cyan-300 text-base font-semibold">{founder.quoteBy}</div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="w-full max-w-2xl mx-auto text-center relative z-10"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Let's Build the Future Together</h2>
          <p className="text-white/80 text-lg mb-6">If you're an investor, collaborator, or just passionate about AI and healthcare, let's connect and make a global impact.</p>
          <motion.a
            href="mailto:cto@neuralyn.health"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 text-white font-semibold shadow-lg text-lg hover:shadow-cyan-400/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="inline mr-2" />Contact Nithin
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
} 