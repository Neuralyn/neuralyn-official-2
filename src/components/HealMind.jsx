import { motion } from 'framer-motion';
import { useState } from 'react';

const HealMind = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      title: 'Voice Analysis',
      description: 'Advanced AI analyzes your voice patterns to understand emotional states and provide personalized support.',
      icon: '🎤'
    },
    {
      title: 'Emotional Intelligence',
      description: 'Our AI understands and responds to your emotional needs with empathy and care.',
      icon: '🧠'
    },
    {
      title: 'Personalized Plans',
      description: 'Get customized wellness plans based on your unique needs and goals.',
      icon: '📋'
    },
    {
      title: '24/7 Support',
      description: 'Access mental health support whenever you need it, from anywhere in the world.',
      icon: '🌍'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 relative inline-block">
            HealMind_AI
            <motion.span
              layoutId="healmind-underline"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              className="block h-1 bg-gradient-to-r from-blue-400/80 to-white/40 rounded-full absolute left-0 bottom-[-10px]"
              style={{ width: '100%' }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 p-8 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <svg width="96" height="80" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <path d="M60,90 Q40,40 90,30 Q110,10 130,30 Q180,40 160,90 Q200,120 150,150 Q130,170 110,150 Q90,170 70,150 Q20,120 60,90 Z" fill="#0a223a" stroke="#2de0fc" strokeWidth="5"/>
                  <path d="M90,30 Q100,60 110,150" stroke="#2de0fc" strokeWidth="3" fill="none" opacity="0.7"/>
                  <path d="M130,30 Q120,60 110,150" stroke="#2de0fc" strokeWidth="3" fill="none" opacity="0.7"/>
                  <path d="M60,90 Q80,110 110,150" stroke="#2de0fc" strokeWidth="3" fill="none" opacity="0.7"/>
                  <path d="M160,90 Q140,110 110,150" stroke="#2de0fc" strokeWidth="3" fill="none" opacity="0.7"/>
                  <circle cx="90" cy="30" r="6" fill="#fff" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="130" cy="30" r="6" fill="#fff" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="1.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="110" cy="150" r="6" fill="#fff" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="1.1s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-light mb-2">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-500/20 backdrop-blur-md rounded-full text-white border border-blue-400/30 hover:bg-blue-500/30 transition-colors duration-300"
          >
            Try HealMind_AI Now
          </motion.button>
          <p className="text-white/50 mt-4 text-sm">
            Available for individuals, students, and organizations
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HealMind; 