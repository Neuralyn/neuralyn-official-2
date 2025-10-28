import { motion } from 'framer-motion';
import GoogleForStartupsLogo from './GoogleForStartupsLogo';

const GooglePartnershipSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[50vh] z-0 pointer-events-none"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #4285F4 0%, #34A853 60%, transparent 100%)',
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        className="absolute top-1/3 right-[-20vw] w-[50vw] h-[40vh] z-0 pointer-events-none"
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 24, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #FBBC04 0%, #EA4335 60%, transparent 100%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              {/* Google for Startups Logo */}
              <div className="mx-auto">
                <GoogleForStartupsLogo size="lg" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl font-light text-white mb-4"
            >
              Powered by <span className="text-blue-400">Google for Startups</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 text-lg max-w-2xl mx-auto"
            >
              Building the future of AI-driven healthcare with Google's infrastructure, mentorship, and cloud technology.
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: '☁️',
                title: 'Cloud Infrastructure',
                description: 'Leveraging Google Cloud Platform for scalable, secure healthcare solutions'
              },
              {
                icon: '🎯',
                title: 'Expert Mentorship',
                description: 'Supported by Google\'s network of industry leaders and technical experts'
              },
              {
                icon: '🚀',
                title: 'Innovation Platform',
                description: 'Access to cutting-edge AI tools and resources to transform global healthcare'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-light text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://developers.google.com/startups"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-full font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Google for Startups →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GooglePartnershipSection;

