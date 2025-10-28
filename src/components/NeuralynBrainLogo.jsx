import { motion } from 'framer-motion';

const NeuralynBrainLogo = () => (
  <motion.svg
    width="220"
    height="180"
    viewBox="0 0 220 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto mb-6"
    initial={{ scale: 0.97 }}
    animate={{ scale: [0.97, 1.03, 0.97] }}
    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
  >
    {/* Main brain shape */}
    <path d="M60,90 Q40,40 90,30 Q110,10 130,30 Q180,40 160,90 Q200,120 150,150 Q130,170 110,150 Q90,170 70,150 Q20,120 60,90 Z" fill="#0a223a" stroke="#2de0fc" strokeWidth="5" filter="url(#brainGlow)"/>
    {/* Neural paths */}
    <path d="M90,30 Q100,60 110,150" stroke="#2de0fc" strokeWidth="3" fill="none" opacity="0.7"/>
    <path d="M130,30 Q120,60 110,150" stroke="#2de0fc" strokeWidth="3" fill="none" opacity="0.7"/>
    <path d="M60,90 Q80,110 110,150" stroke="#2de0fc" strokeWidth="3" fill="none" opacity="0.7"/>
    <path d="M160,90 Q140,110 110,150" stroke="#2de0fc" strokeWidth="3" fill="none" opacity="0.7"/>
    {/* Animated neural sparks */}
    <motion.circle
      cx="90"
      cy="30"
      r="6"
      fill="#fff"
      filter="url(#sparkGlow)"
      animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
    />
    <motion.circle
      cx="130"
      cy="30"
      r="6"
      fill="#fff"
      filter="url(#sparkGlow)"
      animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.3, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', delay: 0.7 }}
    />
    <motion.circle
      cx="110"
      cy="150"
      r="6"
      fill="#fff"
      filter="url(#sparkGlow)"
      animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
      transition={{ duration: 1.1, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
    />
    <defs>
      <filter id="brainGlow" x="0" y="0" width="220" height="180" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="sparkGlow" x="-10" y="-10" width="40" height="40" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </motion.svg>
);

export default NeuralynBrainLogo; 