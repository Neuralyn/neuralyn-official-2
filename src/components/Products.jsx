import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      name: 'HealMind_AI',
      status: 'Live',
      description: 'AI-powered mental wellness therapy with voice analysis and emotional intelligence.',
      features: [
        'Voice-based therapy sessions',
        'Emotional voice analysis',
        'Personalized wellness plans',
        'Organization-wide mental health support'
      ]
    },
    {
      name: 'VOXHEART',
      status: 'Coming Soon',
      description: 'Advanced AI system for heart disease prediction and prevention.',
      features: [
        'Early heart attack detection',
        'Risk factor analysis',
        'Personalized prevention plans',
        'Real-time health monitoring'
      ]
    },
    {
      name: 'DiabeX',
      status: 'Coming Soon',
      description: 'Comprehensive diabetes management platform powered by AI.',
      features: [
        'Blood sugar prediction',
        'Dietary recommendations',
        'Exercise planning',
        'Medication management'
      ]
    },
    {
      name: 'NeuraDiet',
      status: 'Coming Soon',
      description: 'AI-powered nutrition and lifestyle planning system.',
      features: [
        'Personalized meal plans',
        'Nutritional analysis',
        'Lifestyle recommendations',
        'Progress tracking'
      ]
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
            Our Products
            <motion.span
              layoutId="products-underline"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              className="block h-1 bg-gradient-to-r from-blue-400/80 to-white/40 rounded-full absolute left-0 bottom-[-10px]"
              style={{ width: '100%' }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-light flex items-center gap-2">
                    {product.name}
                    {product.name === 'HealMind_AI' && (
                      <span className="inline-block w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(34,255,120,0.5)] animate-pulse" />
                    )}
                  </h3>
                  {product.name !== 'HealMind_AI' && (
                    <span className={`px-3 py-1 rounded-full text-sm ${product.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>{product.status}</span>
                  )}
                </div>
                <p className="text-white/70 mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + featureIndex * 0.1 }}
                      className="flex items-start group"
                    >
                      <span className="mr-2">
                        <span className="inline-block w-4 h-4 rounded-full bg-blue-400/20 group-hover:bg-green-400/40 transition-all duration-200 flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-400 group-hover:text-green-400 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16"><path d="M4 8l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                      </span>
                      <span className="text-white/80 group-hover:text-green-300 transition-colors duration-200">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 text-right">
                  <a href="#" className="text-blue-300/80 hover:text-blue-200 text-sm font-medium transition-colors duration-200">Learn More &rarr;</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/70">
            More innovative healthcare solutions coming soon...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Products; 