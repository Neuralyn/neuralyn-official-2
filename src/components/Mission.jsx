import { motion } from 'framer-motion';

const Mission = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Neuralyn Founded',
      description: 'Founded by a Master\'s in Computer Science with a solid focus and specialization in AI, Neuralyn began its journey to revolutionize healthcare with emotionally intelligent technology.',
      icon: '🚀',
    },
    {
      year: 'Jun 2025',
      title: 'HealMind_AI Launch',
      description: 'Our flagship product, HealMind_AI, is about to launch, bringing AI-powered, emotionally intelligent voice therapy to the world.',
      icon: '🧠',
    },
    {
      year: '2026',
      title: 'Expanding Horizons',
      description: 'Launching VOXHEART for heart disease prediction and DiabeX for diabetes management, expanding our impact in global health.',
      icon: '🌍',
    },
    {
      year: '2027',
      title: 'Global Reach',
      description: 'Neuralyn solutions reach hospitals and individuals in over 100 countries, setting new standards for AI-driven healthcare.',
      icon: '🌐',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 relative inline-block">
            Our Mission
            <motion.span
              layoutId="mission-underline"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              className="block h-1 bg-gradient-to-r from-blue-400/80 to-white/40 rounded-full absolute left-0 bottom-[-10px]"
              style={{ width: '100%' }}
            />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-xl text-white/80 text-center leading-relaxed">
            We're building the future of healthcare, where emotionally intelligent AI helps people live better and enables hospitals to treat more patients, faster. Neuralyn began with a single belief: healing should be intelligent, empathetic, and scalable.
          </p>
        </motion.div>

        {/* Premium Centered Vertical Timeline with Side-Animated Cards */}
        <div className="relative flex w-full justify-center">
          {/* Timeline bar in the center */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-blue-400/80 via-blue-500/60 to-white/20 shadow-lg rounded-full z-0"
            style={{ minHeight: 340, height: milestones.length * 160 }}
          />
          {/* Cards with connector and dot only for each milestone */}
          <div className="w-full flex flex-col gap-16 z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 + index * 0.5 }}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}
                style={{ minHeight: 120 }}
              >
                {/* Card anchored to far left or right, never overlapping timeline */}
                <div
                  className={`w-[320px] bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl`}
                  style={{}}
                >
                  {/* Icon inside card */}
                  <div className="flex items-center gap-3 mb-2">
                    {index === 0 && (
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19l.867-2.6A2 2 0 017.757 15h1.486a2 2 0 011.89 1.4L12 19m0 0l.867-2.6A2 2 0 0114.757 15h1.486a2 2 0 011.89 1.4L19 19m-7 0h6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v16m0 0l-3-3m3 3l3-3" /></svg>
                    )}
                    {index === 1 && (
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12a3 3 0 116 0m-6 0a3 3 0 00-6 0m6 0a3 3 0 006 0m-6 0v6m6-6v6" /></svg>
                    )}
                    {index === 2 && (
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-pink-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" /></svg>
                    )}
                    {index === 3 && (
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                    )}
                    <span className="text-lg font-semibold text-blue-400">{milestone.year}</span>
                    <span className="text-base font-light text-white/80">{milestone.title}</span>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">{milestone.description}</p>
                </div>
                {/* Connector: dot and line, always aligned with card center */}
                <div className="flex flex-col items-center" style={{ minWidth: 64 }}>
                  <span className="w-5 h-5 rounded-full bg-blue-400 shadow-[0_0_12px_2px_rgba(96,165,250,0.4)] border-4 border-white/10" />
                  <span className="w-1 flex-1 bg-blue-400/40 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/70">
            Join us in our mission to redefine what it means to feel cared for.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission; 