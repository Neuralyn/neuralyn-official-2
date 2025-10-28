import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const jobOpenings = [
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    subtitle: 'NLP & Emotion AI',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Join Neuralyn\'s core AI team to develop and fine-tune state-of-the-art NLP and emotion recognition models powering HealMind_AI. You\'ll work on multi-language speech-to-text, voice-tone emotion detection, and therapeutic dialogue systems.',
    responsibilities: [
      'Design and optimize large language models for mental health conversational AI',
      'Develop voice and text emotion analysis pipelines',
      'Collaborate with clinical experts to refine therapeutic algorithms',
      'Integrate APIs like OpenAI GPT-4 and Google Speech-to-Text',
      'Research and implement methods for cultural sensitivity and bias mitigation'
    ],
    skills: [
      'Expertise in PyTorch, TensorFlow, Hugging Face Transformers',
      'Strong understanding of NLP and speech processing',
      'Experience with emotion recognition and affective computing',
      'Knowledge of prompt engineering and LLM fine-tuning',
      'Familiarity with HIPAA-conscious data handling'
    ],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-400/30',
    icon: '🧠'
  },
  {
    id: 'fullstack-developer',
    title: 'Full-Stack Developer',
    subtitle: 'Platform & Infrastructure',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Help build and scale HealMind_AI platform with a robust microservices architecture on GCP. Develop user-friendly interfaces and APIs supporting multilingual voice/text interactions and secure data storage.',
    responsibilities: [
      'Develop frontend UI in React with accessible, multilingual design',
      'Build backend services with Python (FastAPI or Django)',
      'Implement PostgreSQL database schema and optimize queries',
      'Deploy, monitor and scale applications on GCP (Cloud Run, GKE)',
      'Collaborate closely with AI and Product teams to ship features'
    ],
    skills: [
      'Strong React, JavaScript, and Python experience',
      'Experience with RESTful APIs, GraphQL, WebSocket integrations',
      'Familiarity with cloud-native architectures on Google Cloud',
      'Experience with containerization (Docker) and orchestration (Kubernetes)',
      'Prior experience building HIPAA-conscious applications a plus'
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-400/30',
    icon: '⚡'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    subtitle: 'Analytics & Insights',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Join Neuralyn\'s data team to analyze user engagement, mental health outcomes, and model performance. Drive data insights that power product improvements and inform marketing and product strategy.',
    responsibilities: [
      'Analyze large user behavior datasets to identify retention and engagement drivers',
      'Build models measuring AI efficacy and mental health outcomes',
      'Collaborate on A/B testing and feature experimentation',
      'Support fundraising with technical data storytelling',
      'Build reporting dashboards and visualization tools'
    ],
    skills: [
      'Expertise with Python data stacks: pandas, NumPy, matplotlib, seaborn',
      'Experience with SQL and BigQuery or similar data warehouses',
      'Statistical modeling and machine learning',
      'Ability to translate complex data into actionable insights',
      'Experience working in regulated health-related domains a plus'
    ],
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-400/30',
    icon: '📊'
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    subtitle: 'GCP & DevOps',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Design, deploy, and maintain scalable cloud infrastructure for HealMind_AI on Google Cloud Platform. Automate CI/CD pipelines and ensure 24/7 reliability of AI-powered services.',
    responsibilities: [
      'Build scalable infrastructure using GCP services: Vertex AI, Cloud Run, GKE, BigQuery',
      'Automate deployments with Terraform, Jenkins, or GitLab CI',
      'Monitor application health and optimize costs and latency',
      'Implement security best practices including quantum-safe encryption',
      'Support data privacy compliance and HIPAA-conscious standards'
    ],
    skills: [
      'Strong experience with GCP and Kubernetes',
      'Infrastructure as Code expertise with Terraform or Cloud Deployment Manager',
      'Experience automating CI/CD workflows',
      'Knowledge of network security, encryption, and compliance',
      'Familiarity with logging, monitoring (Stackdriver/Prometheus)'
    ],
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-400/30',
    icon: '☁️'
  },
  {
    id: 'security-engineer',
    title: 'Security Engineer',
    subtitle: 'Privacy & Compliance',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Lead security and privacy initiatives to safeguard sensitive mental health user data. Implement state-of-the-art quantum-resistant encryption and ensure Neuralyn\'s cloud infrastructure complies with HIPAA-conscious and GDPR standards.',
    responsibilities: [
      'Design and implement quantum-safe data encryption methods',
      'Audit security posture and remediate vulnerabilities',
      'Collaborate on secure software development lifecycle practices',
      'Ensure HIPAA-conscious and GDPR compliance for cloud infrastructure',
      'Lead incident response and risk assessments'
    ],
    skills: [
      'Deep knowledge of cryptographic protocols and quantum-safe algorithms',
      'Experience with HIPAA-conscious and GDPR compliance',
      'Security auditing, vulnerability testing, pen testing experience',
      'Familiarity with cloud security architectures (GCP or AWS)',
      'Strong scripting and automation skills'
    ],
    color: 'from-red-500/20 to-pink-500/20',
    borderColor: 'border-red-400/30',
    icon: '🔒'
  },
  {
    id: 'qa-engineer',
    title: 'QA/Test Engineer',
    subtitle: 'Quality Assurance',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Develop rigorous testing processes to ensure HealMind_AI meets high-quality standards. Automate functional and regression tests for voice and web platforms, focusing on performance and accessibility.',
    responsibilities: [
      'Build automated test suites for frontend and backend',
      'Conduct manual exploratory testing for new features',
      'Collaborate closely with developers to troubleshoot issues',
      'Test multilingual and voice interaction scenarios',
      'Ensure accessibility compliance'
    ],
    skills: [
      'Experience in Selenium, Cypress, or related automation frameworks',
      'Knowledge of API testing (Postman, SoapUI)',
      'Familiarity with accessibility testing (WCAG)',
      'Strong bug reporting and troubleshooting skills',
      'Experience testing voice interfaces a plus'
    ],
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-400/30',
    icon: '🧪'
  },
  {
    id: 'ux-ui-designer',
    title: 'UX/UI Designer',
    subtitle: 'Design & Accessibility',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Design intuitive, accessible, and culturally sensitive experiences for a global user base interacting in 50+ languages. Help craft the voice-first interaction design and mobile/web UI for HealMind_AI.',
    responsibilities: [
      'Develop UX flows and wireframes for multilingual voice/text applications',
      'Create visually appealing and accessible UI designs',
      'Conduct user research and usability testing globally',
      'Collaborate with engineers and product owners to implement designs',
      'Optimize for mobile responsiveness and voice navigations'
    ],
    skills: [
      'Expertise in Figma, Sketch, Adobe XD',
      'Strong understanding of accessibility and localization principles',
      'Experience with voice UI design is highly preferred',
      'User research and usability testing background',
      'Excellent collaboration and communication skills'
    ],
    color: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'border-indigo-400/30',
    icon: '🎨'
  },
  {
    id: 'growth-marketer',
    title: 'Growth Marketer',
    subtitle: 'User Acquisition & Retention',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Drive user acquisition, activation, and retention through creative and data-driven marketing campaigns spanning social media, paid ads, influencer outreach, SEO, and content marketing. Help establish HealMind_AI as the go-to mental wellness AI.',
    responsibilities: [
      'Develop and execute multi-channel growth strategies',
      'Manage paid advertising campaigns (Google Ads, Facebook, TikTok)',
      'Collaborate with content, product, and analytics teams for optimized performance',
      'Analyze marketing funnel metrics to refine targeting and messaging',
      'Experiment with referral, viral loops, and ambassador programs'
    ],
    skills: [
      'Experience in SaaS or healthtech growth marketing',
      'Deep understanding of digital marketing tools and analytics',
      'Strong copywriting and content strategy ability',
      'Data-driven mindset with A/B testing experience',
      'Passion for mental health and social impact'
    ],
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-400/30',
    icon: '📈'
  },
  {
    id: 'content-creator',
    title: 'Content Creator',
    subtitle: 'Storytelling & Brand',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Craft compelling written and visual stories that elevate HealMind_AI\'s brand, educate users, and break down stigma around mental wellness. Produce blogs, social posts, videos, and campaign materials that resonate globally.',
    responsibilities: [
      'Produce engaging blog posts, social content, email newsletters',
      'Create videos, infographics, and multimedia for brand storytelling',
      'Collaborate with marketing and product teams on campaign content',
      'Ensure messaging aligns with cultural sensitivity and user needs',
      'Track content performance and adapt strategies'
    ],
    skills: [
      'Excellent writing, editing, and visual storytelling skills',
      'Experience with social media platforms and content planning tools',
      'Basic video production and graphic design experience',
      'Understanding of mental health topics is a plus',
      'Ability to translate complex AI concepts into accessible language'
    ],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-400/30',
    icon: '✍️'
  },
  {
    id: 'community-manager',
    title: 'Community Manager',
    subtitle: 'User Engagement & Support',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Build and nurture a supportive, engaged user community around HealMind_AI. Moderate peer support groups, facilitate user feedback loops, and co-create content with users to amplify voice and trust.',
    responsibilities: [
      'Manage social channels, forums, and support groups',
      'Facilitate discussions on mental wellness and AI technology',
      'Collect user feedback to guide product and marketing improvements',
      'Organize virtual events and partnerships',
      'Collaborate with content and product teams'
    ],
    skills: [
      'Empathetic communication style with strong interpersonal skills',
      'Social media and community platform management experience',
      'Passion for mental health and user well-being',
      'Experience moderating online communities or social groups',
      'Ability to distill user insights'
    ],
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-400/30',
    icon: '👥'
  },
  {
    id: 'pr-communications',
    title: 'PR & Communications Specialist',
    subtitle: 'Media Relations & Thought Leadership',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Shape Neuralyn\'s external voice through media outreach, press releases, corporate communications, and thought leadership positioning. Partner with industry analysts and key opinion leaders to elevate brand authority.',
    responsibilities: [
      'Develop and execute PR strategy and media relationships',
      'Write and distribute press releases and corporate communications',
      'Arrange interviews, speaking engagements, and events',
      'Monitor media coverage and manage crisis communications',
      'Collaborate with marketing to ensure consistent messaging'
    ],
    skills: [
      'Proven experience in tech or healthtech PR',
      'Excellent writing and presentation skills',
      'Strong network in media and analyst community is a plus',
      'Crisis management experience',
      'Ability to translate technical products for public audiences'
    ],
    color: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'border-amber-400/30',
    icon: '📢'
  },
  {
    id: 'digital-advertising',
    title: 'Digital Advertising Specialist',
    subtitle: 'Paid Campaigns & Optimization',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Plan, execute, and optimize paid online marketing campaigns to drive HealMind_AI awareness and user acquisition at scale.',
    responsibilities: [
      'Manage PPC campaigns across Google, Facebook, LinkedIn, TikTok',
      'Optimize campaigns with data insights and automated tools',
      'Track conversion funnels and cost per acquisition',
      'Test creatives and audience segments',
      'Collaborate with growth marketing and content teams'
    ],
    skills: [
      'Deep knowledge of paid digital advertising platforms',
      'Strong analytical and reporting skills',
      'Experience with conversion rate optimization',
      'Ability to manage budgets efficiently',
      'Familiarity with healthtech regulations is a plus'
    ],
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-400/30',
    icon: '🎯'
  },
  {
    id: 'product-marketing',
    title: 'Product Marketing Manager',
    subtitle: 'Go-to-Market Strategy',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Own the go-to-market strategy for new HealMind_AI features and releases. Translate product capabilities into market value, creating messaging and positioning that drives user adoption.',
    responsibilities: [
      'Develop product launch plans and sales enablement materials',
      'Conduct market research and competitive analysis',
      'Collaborate with product, sales, and marketing teams',
      'Create customer personas and journey maps',
      'Analyze feature adoption and user feedback'
    ],
    skills: [
      'Experience in SaaS product marketing',
      'Strong strategic thinking and communication skills',
      'Ability to translate technical details into business benefits',
      'Data-driven decision making',
      'Passion for AI and mental wellness'
    ],
    color: 'from-lime-500/20 to-green-500/20',
    borderColor: 'border-lime-400/30',
    icon: '🚀'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    subtitle: 'Roadmap & Vision',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Own the roadmap and vision for HealMind_AI. Work cross-functionally to define, prioritize, and ship features that make a real difference in mental health accessibility and user engagement.',
    responsibilities: [
      'Define and prioritize product features with input from users, clinical advisors, and engineers',
      'Write clear specs, manage sprints, and track deliverables',
      'Conduct user and market research to guide decisions',
      'Establish product KPIs and measure success',
      'Work with design, engineering, and marketing for exceptional launch execution'
    ],
    skills: [
      'Experience in SaaS, healthtech, or AI product delivery',
      'Excellent communication and stakeholder management',
      'Analytical mindset and comfort with rapid iteration',
      'Strong empathy for users from diverse backgrounds',
      'Technical literacy (basic understanding of AI, cloud infra, APIs)'
    ],
    color: 'from-slate-500/20 to-gray-500/20',
    borderColor: 'border-slate-400/30',
    icon: '📋'
  },
  {
    id: 'customer-success-manager',
    title: 'Customer Success Manager',
    subtitle: 'User Satisfaction & Support',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Be the champion for user satisfaction. Support onboarding, gather feedback, troubleshoot user concerns, and help grow our thriving community of HealMind_AI advocates.',
    responsibilities: [
      'Onboard new users and provide ongoing support',
      'Field and resolve user issues across platforms',
      'Collect and report on feedback, pain points, and suggestions',
      'Build user tutorials, FAQs, and in-app guides',
      'Support development of testimonials and case studies'
    ],
    skills: [
      'Proven experience in SaaS or app customer support',
      'Friendly, methodical, and empathetic communication',
      'Passion for mental wellness and user empowerment',
      'Process-oriented approach to managing feedback',
      'Familiarity with support ticketing, CRM, or live chat tools'
    ],
    color: 'from-teal-500/20 to-cyan-500/20',
    borderColor: 'border-teal-400/30',
    icon: '💬'
  },
  {
    id: 'business-development-manager',
    title: 'Business Development Manager',
    subtitle: 'Partnerships & Sales',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Lead partnership, sales, and expansion efforts for HealMind_AI in enterprise, education, and wellness ecosystems.',
    responsibilities: [
      'Identify and secure B2B, institutional, and channel partnerships',
      'Develop relationships with healthcare providers, clinics, universities',
      'Pitch the value of HealMind_AI to organizations globally',
      'Support expansion into new markets and user segments',
      'Negotiate contracts, track pipeline milestones'
    ],
    skills: [
      'Background in sales or business development (preferably health or SaaS)',
      'Excellent networking, pitching, and negotiation skills',
      'Deep understanding of customer needs and market trends',
      'Structured, organized, and goal-driven',
      'Growth mindset and passion for product mission'
    ],
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'border-rose-400/30',
    icon: '🤝'
  },
  {
    id: 'legal-compliance-specialist',
    title: 'Legal & Compliance Specialist',
    subtitle: 'Privacy & Regulations',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Own compliance for healthcare, privacy, and AI regulations at Neuralyn. Help ensure HealMind_AI maintains leading standards for trust and safety.',
    responsibilities: [
      'Guide HIPAA-conscious, GDPR, and global data privacy implementation',
      'Manage contracts, consents, and risk disclosures',
      'Oversee SOC2, ISO, or other certifications as required',
      'Review product/features to identify compliance issues',
      'Liaise with external counsel as needed'
    ],
    skills: [
      'Experience with privacy, health, or SaaS legal frameworks',
      'Strong attention to detail and risk management',
      'Effective communicator comfortable with cross-team education',
      'Legal research and documentation background',
      'Experience with rapidly evolving tech environments'
    ],
    color: 'from-stone-500/20 to-neutral-500/20',
    borderColor: 'border-stone-400/30',
    icon: '⚖️'
  },
  {
    id: 'clinical-psychology-consultant',
    title: 'Clinical Psychology Consultant',
    subtitle: 'Ethics, Content Validation',
    location: 'Remote',
    type: 'Contract / Advisory',
    description: 'Advise the product, AI, and content teams to ensure HealMind_AI\'s interactions and advice are clinically sound, ethical, and culturally sensitive. Collaborate on framework to maximize positive, safe outcomes for users globally.',
    responsibilities: [
      'Review AI-generated dialogue, advice, and intervention scripts for clinical validity',
      'Guide the ethical boundaries of automated emotional support',
      'Advise engineers on trauma, crisis prevention, and escalation workflows',
      'Educate product and marketing teams on compassionate communication',
      'Help design and assess studies to validate user impact'
    ],
    skills: [
      'Licensed clinical psychologist, therapist, or equivalent expertise',
      'Experience in digital mental health, ethical consultation, or therapy technology',
      'High standards for ethics and user safety',
      'Skill in communicating research and clinical principles to non-specialists',
      'Commitment to inclusion across languages and cultures'
    ],
    color: 'from-sky-500/20 to-blue-500/20',
    borderColor: 'border-sky-400/30',
    icon: '🧑‍⚕️'
  },
  {
    id: 'ai-ethics-researcher',
    title: 'AI Ethics Researcher',
    subtitle: 'Fairness, Bias Mitigation',
    location: 'Remote',
    type: 'Contract / Part-Time',
    description: 'Ensure HealMind_AI is fair and responsible, with ongoing bias audit of all NLP, voice, and emotion models. Design ethical frameworks and transparency strategies to protect users and build trust.',
    responsibilities: [
      'Audit and document bias and fairness issues in AI outputs in all supported languages',
      'Develop guidelines for consent, transparency, and explainability of model decisions',
      'Participate in external collaborations and publish best practices',
      'Support internal education on ethical AI issues',
      'Advise on user data usage, privacy, and consent models'
    ],
    skills: [
      'Graduate degree or relevant experience in AI ethics, philosophy, law, or related',
      'Track record of research or published work in ethics, bias, or technology law',
      'Deep understanding of fairness and bias in language and emotion AI',
      'Ability to design experiments/audits for model outputs',
      'Excellent collaborative skills'
    ],
    color: 'from-fuchsia-500/20 to-purple-500/20',
    borderColor: 'border-fuchsia-400/30',
    icon: '🔬'
  },
  {
    id: 'medical-data-analyst',
    title: 'Medical Data Analyst',
    subtitle: 'Outcomes Research, Efficacy Studies',
    location: 'Remote / Chicago, IL',
    type: 'Contract',
    description: 'Lead analysis of HealMind_AI user data to measure health outcomes, validate efficacy, and inform clinical and engineering improvements. Produce evidence for scientific publications and product claims.',
    responsibilities: [
      'Analyze user engagement and outcome data for mental health improvements',
      'Design and carry out efficacy studies (literature review, experiment design, results reporting)',
      'Collaborate with clinical, product, and AI teams on data-driven improvements',
      'Create reports and visualizations for internal and external stakeholders',
      'Assist with research paper writing and conference presentations'
    ],
    skills: [
      'MS/PhD in biostatistics, psychology, epidemiology, data science, or equivalent',
      'Proven experience with healthcare or mental health datasets',
      'Mastery of analytical tools: Python (pandas, statsmodels), R, SQL, visualization platforms',
      'Familiarity with IRB, privacy standards, and ethical study conduct',
      'Excellent written and spoken communication of scientific findings'
    ],
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-400/30',
    icon: '📈'
  }
];

const JobCard = ({ job, index }) => (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className={`relative rounded-3xl border ${job.borderColor} bg-white/5 backdrop-blur-xl p-8 hover:scale-[1.02] hover:-rotate-1 transition-all duration-1000 ease-out group`}
  >
    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${job.color} pointer-events-none group-hover:opacity-20 transition-all duration-1000 ease-out`} />
    
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{job.icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{job.title}</h3>
            <p className="text-cyan-300 text-lg font-medium">{job.subtitle}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white/70 text-sm mb-1">{job.location}</div>
          <div className="text-white/70 text-sm">{job.type}</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/80 text-lg leading-relaxed mb-6">{job.description}</p>

      {/* Responsibilities */}
      <div className="mb-6">
        <h4 className="text-white font-semibold text-lg mb-3">Key Responsibilities:</h4>
        <ul className="space-y-2">
          {job.responsibilities.map((responsibility, i) => (
            <li key={i} className="flex items-start gap-3 text-white/70">
              <span className="text-cyan-400 mt-1">•</span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h4 className="text-white font-semibold text-lg mb-3">Must-Have Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Careers = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <p className="text-white/50 text-sm tracking-widest mb-4">JOIN OUR TEAM</p>
        <h1 className="text-5xl md:text-7xl font-light mb-6">Shape the Future of Healthcare</h1>
        <p className="text-white/70 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
          Join Neuralyn's mission to revolutionize mental healthcare with emotionally intelligent AI. 
          Work alongside world-class engineers, researchers, and designers to build HealMind_AI - 
          the most advanced mental wellness platform ever created.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">50+</div>
            <div className="text-white/70 text-sm">Languages Supported</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">24/7</div>
            <div className="text-white/70 text-sm">AI Availability</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">Global</div>
            <div className="text-white/70 text-sm">Remote Team</div>
          </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">HIPAA</div>
              <div className="text-white/70 text-sm">Conscious</div>
            </div>
        </div>
      </motion.div>

      {/* Enhanced gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[50vw] h-[50vh] rounded-full blur-[140px] bg-orange-500/15" />
        <div className="absolute top-1/4 -right-32 w-[55vw] h-[55vh] rounded-full blur-[160px] bg-cyan-400/15" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40vw] h-[40vh] rounded-full blur-[120px] bg-purple-500/10" />
      </div>
    </section>

    {/* Job Openings */}
    <section className="px-6 md:px-12 lg:px-20 pb-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">Open Positions</h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            We're looking for passionate individuals who want to make a real difference in mental healthcare. 
            Join our diverse, talented team and help us build the future of AI-powered wellness.
          </p>
        </motion.div>

        <div className="space-y-8">
          {jobOpenings.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>

    {/* Why Join Us */}
    <section className="px-6 md:px-12 lg:px-20 pb-28">
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-12"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-400/10 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-6">Why Join Neuralyn?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">🚀 Impact & Innovation</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Work on cutting-edge AI technology that directly improves mental health outcomes for millions of people worldwide. 
                Your contributions will help bridge the gap in mental healthcare accessibility.
              </p>
              <h3 className="text-xl font-semibold text-orange-300 mb-4">🌍 Global Mission</h3>
              <p className="text-white/70 leading-relaxed">
                Join a mission-driven team committed to making mental healthcare accessible, affordable, and culturally sensitive 
                across 50+ languages and cultures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-4">💡 Growth & Learning</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Work with state-of-the-art technologies including LLMs, emotion AI, quantum-safe encryption, and cloud-native architectures. 
                Continuous learning and professional development are core to our culture.
              </p>
              <h3 className="text-xl font-semibold text-green-300 mb-4">🤝 Collaborative Culture</h3>
              <p className="text-white/70 leading-relaxed">
                Join a diverse, inclusive team where your voice matters. We foster open communication, 
                creative problem-solving, and a supportive environment for all team members.
              </p>
            </div>
          </div>
        </div>
    </motion.div>
    </section>
  </main>
);
};

export default Careers; 