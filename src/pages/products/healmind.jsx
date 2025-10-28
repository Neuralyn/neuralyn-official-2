import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Count-up animation component with Numerosity Effect
const CountUpNumber = ({ end, duration = 1.5, suffix = "", color = "text-orange-400" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`count-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth acceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div id={`count-${end}`} className={`text-2xl md:text-3xl font-bold ${color} mb-1`}>
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const HealMind = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    {
      title: "Emotionally Intelligent AI",
      description: "94% accuracy in voice-tone emotion detection",
      icon: "🧠",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30"
    },
    {
      title: "50+ Languages",
      description: "Cultural sensitivity and native language support",
      icon: "🌍",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30"
    },
    {
      title: "24/7 Availability",
      description: "Instant access, no appointments needed",
      icon: "⏰",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30"
    },
    {
      title: "Quantum-Safe Privacy",
      description: "End-to-end encryption and HIPAA compliance",
      icon: "🔒",
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-400/30"
    }
  ];

  const currentFeatures = [
    "Real-Time Text Conversations in 50+ languages",
    "Emotion Recognition through text analysis",
    "Personalized Support based on emotional patterns",
    "Mood Tracking and progress analytics",
    "Crisis Resources and escalation protocols",
    "Quantum-Safe Encryption for complete privacy",
    "24/7 Availability across mobile and web platforms",
    "Dark Mode for comfortable nighttime conversations"
  ];

  const comingSoonFeatures = [
    "Voice Conversations in all 50+ languages",
    "Video Therapy Sessions with lifelike AI therapists",
    "Voice Cloning for personalized, familiar interactions",
    "Hands-Free Navigation for accessibility",
    "Family Plans for household mental wellness",
    "Group Therapy Sessions with AI moderation",
    "Trauma Detection with proactive intervention",
    "Memory Reconstruction therapy for PTSD and healing",
    "Predictive Mental Health alerts 72 hours before potential crises",
  ];

  const targetAudiences = [
    {
      title: "Students & Young Adults",
      description: "Navigate academic stress, social anxiety, and identity challenges with a judgment-free companion.",
      icon: "🎓"
    },
    {
      title: "Immigrants & Refugees",
      description: "Access mental health support in your native language, without cultural barriers or stigma.",
      icon: "🌍"
    },
    {
      title: "Working Professionals",
      description: "Manage burnout, work stress, and imposter syndrome between your busy schedule.",
      icon: "💼"
    },
    {
      title: "Parents & Caregivers",
      description: "Find support for parental anxiety, family stress, and self-care-anytime you need it.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Corporate Teams & Organizations",
      description: "Empower your workforce with mental wellness support. Reduce burnout, improve productivity, and foster a healthier workplace culture with scalable, confidential AI support for every team member.",
      icon: "🏢"
    },
    {
      title: "Anyone Seeking Support",
      description: "Whether you're in therapy or considering it, HealMind_AI is here to support your journey.",
      icon: "🤝"
    }
  ];

  const stats = [
    { number: "4.8/5", label: "Satisfaction Rating", color: "text-orange-400" },
    { number: "87%", label: "Daily Active Users", color: "text-cyan-400" },
    { number: "92%", label: "Feel Heard & Understood", color: "text-purple-400" },
    { number: "89%", label: "Improved Mood Tracking", color: "text-green-400" }
  ];

  return (
    <main className="relative min-h-screen bg-background text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-6xl">🧠</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            HealMind_AI
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-white/90 mb-4"
          >
            Your Emotionally Intelligent Companion for Mental Wellness
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            The Future of Mental Health Support, Available Now. HealMind_AI is the world's first truly emotionally intelligent AI companion, designed to make mental wellness accessible, affordable, and culturally sensitive for every person on Earth.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                {stat.number.includes('/') ? (
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                ) : (
                  <CountUpNumber 
                    end={parseFloat(stat.number.replace(/[^\d.]/g, ''))} 
                    suffix={stat.number.replace(/[\d.]/g, '')} 
                    color={stat.color} 
                    duration={2 + index * 0.2}
                  />
                )}
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://healmind.neuralyn.health/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started Free
            </motion.a>
            <motion.button
              onClick={() => setIsVideoOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl text-white font-semibold text-lg hover:bg-cyan-500/20 transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[50vw] h-[50vh] rounded-full blur-[140px] bg-purple-500/15" />
          <div className="absolute top-1/4 -right-32 w-[55vw] h-[55vh] rounded-full blur-[160px] bg-pink-400/15" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40vw] h-[40vh] rounded-full blur-[120px] bg-cyan-500/10" />
        </div>
      </section>

      {/* Why HealMind_AI Section */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Why HealMind_AI?</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Unlike traditional chatbots, HealMind_AI understands not just what you say, but how you feel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative rounded-3xl border ${feature.borderColor} bg-white/5 backdrop-blur-xl p-8 hover:scale-105 transition-all duration-500 group cursor-pointer`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} pointer-events-none group-hover:opacity-20 transition-all duration-500`} />
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-400/10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Makes HealMind_AI Different?</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-white/70 font-medium">Traditional Therapy</th>
                      <th className="text-left py-4 px-4 text-cyan-300 font-semibold">HealMind_AI</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-4">
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4 text-white/70">$150-300 per session</td>
                      <td className="py-4 px-4 text-green-400 font-medium">Affordable subscription plans</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4 text-white/70">2-6 month wait times</td>
                      <td className="py-4 px-4 text-green-400 font-medium">Instant access, 24/7</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4 text-white/70">Limited language options</td>
                      <td className="py-4 px-4 text-green-400 font-medium">50+ languages with cultural sensitivity</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4 text-white/70">Clinic visits required</td>
                      <td className="py-4 px-4 text-green-400 font-medium">Available anywhere, anytime</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-white/70">Stigma and privacy concerns</td>
                      <td className="py-4 px-4 text-green-400 font-medium">Complete anonymity and encryption</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Features Section */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-6xl">✨</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Current Features
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Experience the power of emotionally intelligent AI today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/15 via-emerald-500/8 to-green-600/5 p-6 h-full hover:border-green-400/40 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/8 via-transparent to-emerald-500/8 pointer-events-none group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                    
                    <h3 className="text-white font-semibold text-sm leading-relaxed group-hover:text-green-300 transition-colors duration-300">
                      {feature}
                    </h3>
                  </div>

                  {/* Animated background elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-6xl">🚀</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Coming Soon
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Revolutionary features that will transform mental healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/15 via-pink-500/8 to-orange-600/5 p-6 h-full hover:border-orange-400/40 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/8 via-transparent to-pink-500/8 pointer-events-none group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">🚀</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
                    </div>
                    
                    <h3 className="text-white font-semibold text-sm leading-relaxed group-hover:text-orange-300 transition-colors duration-300">
                      {feature}
                    </h3>
                  </div>

                  {/* Animated background elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400/20 to-pink-400/20 blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Who Is HealMind_AI For?</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Mental wellness support for everyone, everywhere
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {targetAudiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-105 transition-all duration-500 group h-[280px] flex flex-col"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-400/10 pointer-events-none group-hover:opacity-20 transition-all duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-3xl mb-3">{audience.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight">{audience.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-grow">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">How It Works</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Getting started with HealMind_AI is simple and immediate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Sign Up", description: "Create your account in seconds with email or social login" },
              { step: "2", title: "Start Talking", description: "Type or speak about what's on your mind" },
              { step: "3", title: "Get Support", description: "Receive empathetic responses and coping strategies" },
              { step: "4", title: "Track Progress", description: "Monitor your emotional patterns over time" },
              { step: "5", title: "Grow & Heal", description: "Use HealMind_AI whenever you need support" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Pricing That Works for Everyone</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Trial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between min-h-[500px]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 via-transparent to-blue-400/10 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Free Trial</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">30 Days</div>
                  <div className="text-lg text-white/70 mb-6">Full access, no credit card required</div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-green-400">✓</span>
                      Unlimited conversations
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-green-400">✓</span>
                      Advanced emotion analytics
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-green-400">✓</span>
                      All premium features
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-green-400">✓</span>
                      Voice conversations
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-green-400">✓</span>
                      Family sharing (when launched)
                    </li>
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-full border border-green-400/30 bg-white/5 backdrop-blur-xl text-white font-semibold hover:bg-green-500/20 transition-all duration-300 mt-auto"
                >
                  Start Free Trial
                </motion.button>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl border border-purple-400/30 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between min-h-[500px]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-pink-400/20 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Pro Plan</h3>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">After Trial</span>
                  </div>
                  <div className="text-4xl font-bold text-purple-400 mb-6">$20<span className="text-lg text-white/70">/month</span></div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-purple-400">✓</span>
                      Unlimited conversations
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-purple-400">✓</span>
                      Advanced emotion analytics
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-purple-400">✓</span>
                      Priority features access
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-purple-400">✓</span>
                      Voice conversations
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-purple-400">✓</span>
                      Family sharing (when launched)
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-purple-400">✓</span>
                      Voice Cloning (when launched)
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <span className="text-purple-400">✓</span>
                      Video Therapy Sessions(when launched)
                    </li>
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition-all duration-300 mt-auto"
                >
                  Continue After Trial
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Referral Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <div className="relative rounded-3xl border border-orange-400/30 bg-white/5 backdrop-blur-xl p-8 max-w-4xl mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-400/10 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-white mb-4">Referral Rewards</h3>
                <p className="text-white/80 text-lg mb-6">
                  Both you and your friend get <span className="text-orange-400 font-semibold">4 months free</span> when you refer someone!
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">4 Months</div>
                    <div className="text-white/70">Free for you</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">4 Months</div>
                    <div className="text-white/70">Free for your friend</div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Invite Friends & Earn Rewards
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-20 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-12 text-center"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-400/10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Mental Wellness Revolution</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              Over 2.6 billion people worldwide struggle with mental health challenges. Traditional systems can only reach less than 1% of those who need help. HealMind_AI changes that.
            </p>
            <p className="text-white/80 text-xl mb-8 font-medium">
              We're not just building an app-we're building the emotional operating system for humanity's future.
            </p>
    <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="https://healmind.neuralyn.health/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Try HealMind_AI Today
              </motion.a>
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl text-white font-semibold text-lg hover:bg-cyan-500/20 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Immersive Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-60 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
            </motion.button>

            {/* Video container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-6xl mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video wrapper with glassmorphism */}
              <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* Video header */}
                <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/50 to-transparent">
                  <motion.h3
                    initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-bold text-white mb-2"
    >
                    HealMind_AI Product Demo
                  </motion.h3>
    <motion.p
                    initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-white/70"
    >
                    Experience the future of emotionally intelligent mental wellness
    </motion.p>
                </div>

                {/* Video element */}
                <motion.video
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  controls
                  autoPlay
                  muted
                  playsInline
                  poster="/healmind-poster.jpg"
                >
                  <source src="/HAI_product_demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>

                {/* Video footer with gradient */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-black/50 to-transparent">
    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-white/70 text-sm">
                      Press ESC or click outside to close
                    </div>
    </motion.div>
  </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute -inset-4 -z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default HealMind; 