import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const teamMembers = [
  {
    name: 'Nithin Rajulapati',
    role: 'Founder & CTO',
    focus: 'Vision, Product, AI Systems',
    image: '/nithin.jpeg',
    achievements: ['3,600+ Students Taught', 'AI Research & Development', 'Python Expert Instructor'],
    expertise: ['AI/ML', 'Computer Vision', 'Deep Learning', 'Reinforcement Learning'],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nithin-rajulapati-69133a1aa', icon: 'in' },
      { label: 'GitHub', href: 'https://github.com/Nani1-glitch', icon: 'gh' },
    ],
  },
  {
    name: 'Lalitha Velagapudi',
    role: 'Co-Founder & AI Product Strategist',
    focus: 'Roadmap, Market Analysis, Collaboration',
    image: '/lalitha.jpeg',
    achievements: ['4,600+ Students Taught', 'Multi-Disease Prediction ML', 'Ethical Hacking Expert'],
    expertise: ['Machine Learning', 'Data Analysis', 'Cloud Computing', 'Cybersecurity'],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lalithavelagapudi', icon: 'in' },
      { label: 'GitHub', href: 'https://github.com/Lalitha-9912', icon: 'gh' },
    ],
  },
  {
    name: 'Kevin Godfrey Verpula',
    role: 'Co-founder & AI Developer',
    focus: 'LLMs, Voice, Payments, Evaluation',
    image: '/kevin.jpeg',
    achievements: ['2.8 Years Full-Stack Experience', 'VR Research at IIT', 'TCS Systems Engineer'],
    expertise: ['Full-Stack Development', 'AI/ML', 'Game Development', 'VR Technologies'],
    links: [
      { label: 'LinkedIn', href: 'https://in.linkedin.com/in/kevin-godfrey-6a5885244', icon: 'in' },
    ],
  },
];

function Avatar({ image, name }) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="h-32 w-32 rounded-full object-cover ring-2 ring-white/20 shadow-2xl"
      />
    );
  }
  const initials = name
    .split(' ')
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="h-32 w-32 rounded-full grid place-items-center text-2xl font-bold bg-gradient-to-br from-cyan-500/30 to-orange-500/30 text-white/90 ring-2 ring-white/20 shadow-2xl">
      {initials}
    </div>
  );
}

const Card = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
    className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col items-center text-center transition-all duration-1000 ease-out group hover:scale-105 hover:-rotate-1 hover:border-orange-400/30"
  >
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-400/10 pointer-events-none group-hover:from-orange-500/15 group-hover:to-cyan-400/15 transition-all duration-1000 ease-out" />
    
    {/* Profile Section */}
    <div className="relative z-10 mb-6">
      <Avatar image={member.image} name={member.name} />
    </div>
    
    {/* Name & Role */}
    <div className="relative z-10 mb-6">
      <h3 className="text-2xl font-bold tracking-wide mb-2">{member.name}</h3>
      <p className="text-cyan-300 text-lg font-medium mb-3">{member.role}</p>
      <p className="text-white/70 text-sm">{member.focus}</p>
    </div>

    {/* Achievements */}
    <div className="relative z-10 mb-6 w-full">
      <h4 className="text-white/90 text-sm font-semibold mb-3 tracking-wider">KEY ACHIEVEMENTS</h4>
      <div className="space-y-2">
        {member.achievements.map((achievement, i) => (
          <div key={i} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs border border-white/10">
            {achievement}
          </div>
        ))}
      </div>
    </div>

    {/* Expertise */}
    <div className="relative z-10 mb-6 w-full">
      <h4 className="text-white/90 text-sm font-semibold mb-3 tracking-wider">EXPERTISE</h4>
      <div className="flex flex-wrap gap-2 justify-center">
        {member.expertise.map((skill, i) => (
          <span key={i} className="px-2 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs border border-orange-500/30">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Social Links */}
    <div className="relative z-10 flex items-center gap-4">
      {member.links.map((l) => (
        <a 
          key={l.label} 
          href={l.href} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-cyan-300 text-sm font-medium underline-offset-4 hover:underline transition-colors duration-200"
        >
          {l.label}
        </a>
      ))}
    </div>
  </motion.div>
);

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
    <div id={`count-${end}`} className={`text-3xl md:text-4xl font-bold ${color} mb-2`}>
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export default function Team() {
  return (
    <main className="relative min-h-screen bg-background text-white">
      {/* Header */}
      <section className="relative pt-28 pb-16 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="text-white/50 text-sm tracking-widest mb-4">HEALMIND_AI</p>
          <h1 className="text-5xl md:text-7xl font-light mb-6">The Team Behind HealMind_AI</h1>
          <p className="text-white/70 text-lg max-w-4xl mx-auto leading-relaxed">
            We're a focused, experienced team building the future of emotionally intelligent healthcare. 
            Our craft blends science, empathy, and precision engineering - advancing rapidly while earning every ounce of trust.
          </p>
        </motion.div>

        {/* Enhanced gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[50vw] h-[50vh] rounded-full blur-[140px] bg-orange-500/15" />
          <div className="absolute top-1/4 -right-32 w-[55vw] h-[55vh] rounded-full blur-[160px] bg-cyan-400/15" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40vw] h-[40vh] rounded-full blur-[120px] bg-purple-500/10" />
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <Card key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <CountUpNumber end={8000} suffix="+" color="text-orange-400" duration={2} />
              <div className="text-white/70 text-sm">Students Taught</div>
            </div>
            <div className="text-center">
              <CountUpNumber end={3.5} suffix="+" color="text-cyan-400" duration={1.8} />
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <CountUpNumber end={50} suffix="+" color="text-purple-400" duration={1.5} />
              <div className="text-white/70 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <CountUpNumber end={4} suffix="+" color="text-green-400" duration={1.2} />
              <div className="text-white/70 text-sm">Universities</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What we are building */}
      <section className="px-6 md:px-12 lg:px-20 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-12 transition-all duration-1000 ease-out hover:scale-[1.02] hover:-rotate-1 hover:border-orange-400/30"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-400/10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-6">What we're building</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-4xl mb-8">
              At Neuralyn, we're building HealMind_AI - a groundbreaking emotionally intelligent AI companion that offers 24/7 personalized mental wellness support in 50+ languages. It bridges the gap between therapy sessions by providing empathetic, private, and inclusive care worldwide. HealMind_AI is designed to empower healing, not replace doctors, with advanced features like voice cloning, AI therapists, trauma detection, group sessions, and memory reconstruction - bringing mental health support to everyone, everywhere.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                'Voice Understanding', 
                'On‑device Privacy', 
                'Safety by Design', 
                'Evaluation Lab', 
                'Healthcare Integrations',
                'Multilingual Support',
                'Emotion Detection',
                'Real-Time Assistance',
                'AI Therapist',
                'Group Therapy',
                'Trauma Care',
                'Memory Reconstruction',
                'Hands-Free Navigation',
                'Family Plans',
                'Quantum Encryption',
                'Community Safety',
                'Instant Feedback',
                'Culturally Aware',
                'Continuous Learning',
                'Accessibility First',
                'Stigma-Free',
                'Remote Care',
                'Crisis Intervention',
                'Personalized Insights',
                'User Empowerment',
                'Scalable Wellness',
                'Seamless Experience'
              ].map((chip) => (
                <span key={chip} className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm border border-white/10 hover:bg-white/15 transition-colors duration-200">
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://healmind.neuralyn.health/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-orange-400/30 bg-white/5 hover:bg-orange-500/20 transition-colors font-medium">
                Explore HealMind_AI
              </a>
              <Link to="/careers" className="px-8 py-3 rounded-full border border-cyan-400/30 bg-white/5 hover:bg-cyan-500/20 transition-colors font-medium">
                Join Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}


