import { motion } from 'framer-motion';
import LiquidEther from './LiquidEther';

const GooglePartnershipContent = () => {
  const benefits = [
    {
      icon: '🚀',
      title: 'Enhanced AI Development',
      description: 'Groundbreaking developments in our voice-first, emotionally intelligent AI technology'
    },
    {
      icon: '🌍',
      title: 'Global Expansion',
      description: 'Scale to 50+ languages with cultural and linguistic nuance for worldwide accessibility'
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Adherence to rigorous HIPAA and GDPR standards ensuring user privacy and data protection'
    },
    {
      icon: '⚡',
      title: 'Scalable Infrastructure',
      description: 'Leverage Google\'s cloud infrastructure to securely scale to millions of users'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black text-white pt-32 pb-20 px-4 relative"
      style={{ overflowX: 'hidden', overflowY: 'visible' }}
    >
      {/* LiquidEther Background */}
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 pb-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
          style={{ overflow: 'visible', paddingBottom: '1rem' }}
        >
          <div className="inline-block mb-8">
            <img 
              src="/GooglexNeuralyn.jpg" 
              alt="Neuralyn X Google for Startups" 
              className="h-32 w-auto mx-auto rounded-lg shadow-2xl"
            />
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-light mb-6 pb-4 overflow-visible"
            style={{
              background: 'linear-gradient(to right, #60a5fa, #ffffff, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.35',
              paddingBottom: '0.75rem',
              marginBottom: '1.5rem'
            }}
          >
            Neuralyn Selected for Prestigious Google for Startups Program
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We are exceptionally proud to announce that Neuralyn LLC has been officially selected to participate in the distinguished Google for Startups program.
          </p>
        </motion.div>

        {/* What This Means Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div 
            className="relative rounded-3xl p-8 md:p-12 overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
            }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-75"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #9333ea, #ec4899)',
                padding: '2px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 rounded-3xl" />
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                What This Means
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 drop-shadow-lg">
                Being handpicked by Google validates our mission and vision — to make mental health support accessible, affordable, and culturally relevant to billions worldwide. Leveraging Google's unparalleled technical infrastructure, mentorship, and global network empowers us to accelerate innovation and scale impact like never before.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            What's Next?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))'
                  }}
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                />
                
                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-6xl filter drop-shadow-lg">{benefit.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
                        {benefit.title}
                      </h3>
                      <p className="text-white/85 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <div 
            className="relative overflow-hidden rounded-3xl p-8 md:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(249, 115, 22, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}
          >
            {/* Animated gradient border effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #f97316, #ec4899, #a855f7)',
                opacity: 0.6
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Our Commitment to Excellence and Compliance
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
                At Neuralyn, we prioritize safety, privacy, and efficacy. Our participation in Google for Startups strengthens our adherence to rigorous data privacy and security standards, including strict HIPAA and GDPR compliance, reflecting our commitment to ethical AI and user trust.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Appreciation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16"
        >
          <div 
            className="text-center relative overflow-hidden rounded-3xl p-8 md:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}
          >
            {/* Subtle animated glow */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.3) 0%, transparent 70%)'
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                A Word of Appreciation
              </h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic max-w-3xl mx-auto drop-shadow-lg">
                "This partnership is a testament to the hard work, resilience, and passion of our founders and team. It reaffirms our belief that technology, when guided by compassion and scientific rigor, can break barriers and heal minds worldwide."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="border-t border-white/10 pt-12"
        >
          <div 
            className="relative overflow-hidden rounded-2xl p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.6), rgba(0, 0, 0, 0.8))',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 4px 16px rgba(0, 0, 0, 0.5)'
            }}
          >
            <p className="text-sm text-white/70 leading-relaxed relative z-10">
              <strong className="text-white/90">Legal Disclaimer:</strong> Google for Startups' support acknowledges Neuralyn's potential and provides resources but does not constitute endorsement or warranty of specific outcomes. Neuralyn maintains full responsibility for compliance, product efficacy, and user safety.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://startup.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-full font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More About Google for Startups →
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GooglePartnershipContent;

