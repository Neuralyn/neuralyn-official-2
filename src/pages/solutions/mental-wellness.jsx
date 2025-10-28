import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MentalWellness = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState(0);

  const focusAreas = [
    {
      title: "Accessibility",
      description: "Making mental wellness support available to underserved populations, including immigrants, refugees, rural communities, and individuals who face language or cultural barriers to traditional care.",
      icon: "🌍",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30"
    },
    {
      title: "Affordability", 
      description: "Reducing the cost barrier to mental health support by providing scalable AI-powered tools at a fraction of the cost of traditional therapy.",
      icon: "💰",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30"
    },
    {
      title: "Stigma Reduction",
      description: "Creating safe, anonymous spaces where individuals can seek help without fear of judgment or social stigma.",
      icon: "🛡️",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30"
    },
    {
      title: "Prevention & Early Intervention",
      description: "Using technology to identify early warning signs of mental health challenges and connect users with appropriate support before crises escalate.",
      icon: "🔍",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30"
    },
    {
      title: "Global Reach",
      description: "Expanding our platform to serve diverse populations worldwide, respecting cultural differences and local mental health practices.",
      icon: "🚀",
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-400/30"
    }
  ];

  const buildingAreas = [
    {
      title: "AI-Powered Emotional Support Tools",
      description: "Intelligent systems that provide empathetic, real-time emotional support through text and voice interactions, designed to complement licensed mental health professionals.",
      icon: "🤖",
      features: ["Real-time emotional support", "Text and voice interactions", "Professional complement", "Safe expression space"]
    },
    {
      title: "Multilingual & Culturally Sensitive Solutions",
      description: "Technology designed to understand and respect cultural nuances, supporting users in 50+ languages with plans to expand globally.",
      icon: "🗣️",
      features: ["50+ languages supported", "Cultural sensitivity", "Global expansion", "Native language support"]
    },
    {
      title: "Privacy-First Architecture",
      description: "Advanced encryption technologies protecting all user interactions, ensuring personal mental health information remains confidential and under user control.",
      icon: "🔒",
      features: ["Advanced encryption", "User data control", "Confidential interactions", "Privacy protection"]
    },
    {
      title: "Real-Time Mood & Wellness Tracking",
      description: "Platform enabling users to monitor emotional patterns, identify triggers, and track progress over time—empowering individuals with actionable insights.",
      icon: "📊",
      features: ["Emotional pattern monitoring", "Trigger identification", "Progress tracking", "Actionable insights"]
    },
    {
      title: "Crisis Support & Professional Referrals",
      description: "Systems designed to recognize warning signs and immediately connect users with appropriate professional resources, including crisis hotlines and licensed therapists.",
      icon: "🚨",
      features: ["Warning sign recognition", "Crisis hotline connection", "Emergency services", "Professional referrals"]
    },
    {
      title: "Healthcare Ecosystem Integration",
      description: "Seamless integration with traditional healthcare systems, enabling better coordination between patients, therapists, psychiatrists, and other care providers.",
      icon: "🏥",
      features: ["Healthcare system integration", "Provider coordination", "Patient care continuity", "Seamless workflows"]
    }
  ];

  const principles = [
    {
      title: "Clinical Collaboration",
      description: "Working closely with licensed clinical psychologists, psychiatrists, and mental health researchers to ensure evidence-based and clinically sound tools.",
      icon: "👩‍⚕️"
    },
    {
      title: "Ethical AI Development",
      description: "Maintaining strict ethical standards, continuously auditing systems for bias, fairness, and cultural sensitivity with AI Ethics Board oversight.",
      icon: "⚖️"
    },
    {
      title: "Transparency & User Empowerment",
      description: "Committed to transparency in technology and ensuring users maintain full control over their data and interactions.",
      icon: "🔍"
    },
    {
      title: "Continuous Research & Improvement",
      description: "Continuously researching, testing, and refining tools based on user feedback, clinical insights, and the latest scientific evidence.",
      icon: "🔬"
    }
  ];

  const emergencyResources = [
    { name: "National Suicide Prevention Lifeline (US)", number: "988", description: "24/7 crisis support" },
    { name: "Crisis Text Line (US)", number: "Text HOME to 741741", description: "Text-based crisis support" },
    { name: "International Association for Suicide Prevention", number: "iasp.info/resources/Crisis_Centres/", description: "Global crisis resources" }
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
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mental Wellness
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-white/90 mb-8 max-w-4xl mx-auto"
          >
            Empowering minds with AI-driven emotional intelligence, therapy support, and holistic mental health solutions.
          </motion.p>

          {/* Enhanced gradients */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-32 w-[50vw] h-[50vh] rounded-full blur-[140px] bg-blue-500/15" />
            <div className="absolute top-1/4 -right-32 w-[55vw] h-[55vh] rounded-full blur-[160px] bg-purple-400/15" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40vw] h-[40vh] rounded-full blur-[120px] bg-pink-500/10" />
          </div>
        </motion.div>
      </section>

      {/* Future Scope Section */}
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
              <span className="text-6xl">🌟</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Future Scope
            </h2>
            <p className="text-white/70 text-lg max-w-4xl mx-auto leading-relaxed">
              Neuralyn is committed to delivering personalized, accessible, and stigma-free mental wellness solutions that integrate AI-powered support tools, real-time mood tracking, and global support networks for every individual.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 max-w-6xl mx-auto"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-400/10 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Vision for the Future of Mental Wellness</h3>
              <p className="text-white/80 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Mental health is a universal human right, yet billions worldwide lack access to timely, affordable, and culturally sensitive care. Neuralyn is building the infrastructure for a new era of mental wellness—one where technology complements human compassion, where AI empowers individuals to take control of their emotional well-being, and where no one is left without support.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We're Building Section */}
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
              <span className="text-6xl">🔨</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              What We're Building
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Comprehensive solutions for the future of mental wellness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 h-full hover:border-blue-400/30 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{area.icon}</div>
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {area.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>

                    <div className="space-y-2">
                      {area.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/60 text-xs">
                          <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
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
              <span className="text-6xl">🎯</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Key Focus Areas
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Our strategic priorities for mental wellness innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative rounded-3xl border ${area.borderColor} bg-white/5 p-6 hover:scale-105 transition-all duration-500 group`}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${area.color} pointer-events-none group-hover:opacity-20 transition-all duration-500`} />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-white/70 leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI Section */}
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
              <span className="text-6xl">🤝</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Our Approach to Responsible AI
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Grounded in ethics, collaboration, and user empowerment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-emerald-400/30 transition-all duration-500 group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 pointer-events-none group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{principle.icon}</div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-6xl">⚠️</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Important Disclaimers
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Essential information for safe and responsible use
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl border border-red-400/30 bg-red-500/5 p-8"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-red-300 mb-4">Not a Replacement for Professional Care</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Neuralyn's tools and platforms, including HealMind_AI, are designed to support mental wellness and complement professional mental health services. They are not a substitute for diagnosis, treatment, or therapy provided by licensed mental health professionals.
                </p>
                <p className="text-white/90 font-semibold">
                  If you are experiencing a mental health crisis or have serious mental health concerns, please contact a qualified healthcare provider, therapist, or emergency services immediately.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl border border-yellow-400/30 bg-yellow-500/5 p-8"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">Emergency Resources</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {emergencyResources.map((resource, index) => (
                    <div key={index} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-white font-semibold mb-2">{resource.name}</h4>
                      <div className="text-yellow-300 font-bold text-lg mb-1">{resource.number}</div>
                      <div className="text-white/70 text-sm">{resource.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="px-6 md:px-12 lg:px-20 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10 md:p-12 text-center"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-400/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="text-6xl mb-6">💙</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to You</h2>
            <p className="text-white/80 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              Neuralyn is dedicated to building technology that serves humanity with compassion, integrity, and respect. We recognize that mental wellness is deeply personal, and we are honored to support individuals on their journeys toward healing and growth.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">We are committed to:</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    Listening to user feedback and continuously improving our services
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    Collaborating with mental health professionals and researchers
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    Protecting user privacy and data with the highest standards
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    Advocating for mental health awareness and destigmatization globally
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    Innovating responsibly with ethical AI principles at our core
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Join Us in Building the Future</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Mental wellness is not just about treating illness—it's about fostering resilience, connection, and human flourishing.
                </p>
                <p className="text-white/80">
                  Whether you're a user, clinician, researcher, investor, or advocate, we invite you to join us in this mission. Together, we can create a world where mental health support is accessible, affordable, and available to everyone who needs it.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/products/healmind"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Learn More About HealMind_AI
              </motion.a>
              <motion.a
                href="/careers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/30 bg-white/5 backdrop-blur-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Join Our Mission
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default MentalWellness;