import { motion } from 'framer-motion';

const About = () => {
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
            Who We Are
            <motion.span
              layoutId="about-underline"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              className="block h-1 bg-gradient-to-r from-blue-400/80 to-white/40 rounded-full absolute left-0 bottom-[-10px]"
              style={{ width: '100%' }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              Neuralyn is a cutting-edge AI HealthTech company based in Chicago, USA, focused on transforming global healthcare through emotionally intelligent systems.<br/>
              We build medical-grade AI tools that support individuals and hospitals, starting with mental wellness, and expanding into diagnostics, chronic care, and smart hospital infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-light mb-4">Our Approach</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Emotionally intelligent AI systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Voice-based therapy and analysis
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Personalized healthcare guidance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Hospital integration capabilities
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-white/70 italic">
            "Making powerful healthcare accessible to everyone in all 195 countries through compassionate, accurate, and lightning-fast AI."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 