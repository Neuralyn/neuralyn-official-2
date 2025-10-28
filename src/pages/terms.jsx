import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Terms = () => {
  const [openSections, setOpenSections] = useState(new Set(['notice', '1', '2', '3']));

  const toggleSection = (sectionId) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tocItems = [
    { id: 'notice', label: 'Important Notice', icon: '⚠️' },
    { id: '1', label: 'Acceptance of Terms', icon: '📝' },
    { id: '2', label: 'Service Description', icon: '🎯' },
    { id: '3', label: 'Health & Safety', icon: '🏥' },
    { id: '4', label: 'Eligibility', icon: '✓' },
    { id: '5', label: 'User Accounts', icon: '🔐' },
    { id: '6', label: 'Subscription & Billing', icon: '💳' },
    { id: '7', label: 'Use of Service', icon: '⚙️' },
    { id: '8', label: 'Prohibited Conduct', icon: '🚫' },
    { id: '9', label: 'Intellectual Property', icon: '©️' },
    { id: '10', label: 'Privacy & Data', icon: '🔒' },
    { id: '11', label: 'Third-Party Services', icon: '🔗' },
    { id: '12', label: 'Disclaimers', icon: '⚠️' },
    { id: '13', label: 'Indemnification', icon: '🛡️' },
    { id: '14', label: 'Termination', icon: '🏁' },
    { id: '15', label: 'Dispute Resolution', icon: '⚖️' },
    { id: '16', label: 'Changes to Terms', icon: '📝' },
    { id: '17', label: 'General Provisions', icon: '📋' },
    { id: '18', label: 'Contact Information', icon: '📞' }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden" style={{
      background: 'linear-gradient(to bottom, #0a0a0a 0%, #000000 50%, #0a0a0a 100%)',
      position: 'relative'
    }}>
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(20, 20, 30, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(20, 20, 30, 0.3) 0%, transparent 50%),
            #000000
          `,
          opacity: 1
        }}
      />

      <div className="relative z-10 pt-20">
        {/* Still in Review Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full" style={{
                background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.2) 0%, rgba(251, 191, 36, 0.2) 100%)',
                border: '2px solid rgba(251, 191, 36, 0.5)',
                boxShadow: '0 4px 16px rgba(250, 204, 21, 0.3)'
              }}>
                <span className="text-yellow-400 text-lg">⚠️</span>
                <span className="text-yellow-400 font-semibold text-lg">Still in Review</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-light mb-4" style={{
                background: 'linear-gradient(to right, #60a5fa, #ffffff, #fb923c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                NEURALYN LLC
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-blue-400 mb-4">
                TERMS OF SERVICE
              </h2>
              <p className="text-xl text-white/70 mb-4">HealMind_AI Platform</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                <span>Effective Date: October 27, 2025</span>
                <span>•</span>
                <span>Last Updated: October 27, 2025</span>
                <span>•</span>
                <span>Version: 1.0</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-8 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl p-6" style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2)'
              }}>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Navigation</h3>
                <nav className="space-y-2 text-sm max-h-[600px] overflow-y-auto">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-white/70 hover:text-blue-400 transition-colors py-2 px-2 rounded hover:bg-white/5"
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* IMPORTANT NOTICE */}
            <ImportantNoticeSection id="notice" isOpen={openSections.has('notice')} onToggle={() => toggleSection('notice')} />

            {/* SECTION 1 */}
            <Section id="1" isOpen={openSections.has('1')} onToggle={() => toggleSection('1')} />

            {/* SECTION 2 */}
            <Section id="2" isOpen={openSections.has('2')} onToggle={() => toggleSection('2')} />

            {/* SECTION 3 */}
            <Section id="3" isOpen={openSections.has('3')} onToggle={() => toggleSection('3')} />

            {/* SECTION 4 */}
            <Section id="4" isOpen={openSections.has('4')} onToggle={() => toggleSection('4')} />

            {/* SECTION 5 */}
            <Section id="5" isOpen={openSections.has('5')} onToggle={() => toggleSection('5')} />

            {/* SECTION 6 */}
            <Section id="6" isOpen={openSections.has('6')} onToggle={() => toggleSection('6')} />

            {/* SECTION 7 */}
            <Section id="7" isOpen={openSections.has('7')} onToggle={() => toggleSection('7')} />

            {/* SECTION 8 */}
            <Section id="8" isOpen={openSections.has('8')} onToggle={() => toggleSection('8')} />

            {/* SECTION 9 */}
            <Section id="9" isOpen={openSections.has('9')} onToggle={() => toggleSection('9')} />

            {/* SECTION 10 */}
            <Section id="10" isOpen={openSections.has('10')} onToggle={() => toggleSection('10')} />

            {/* SECTION 11 */}
            <Section id="11" isOpen={openSections.has('11')} onToggle={() => toggleSection('11')} />

            {/* SECTION 12 */}
            <Section id="12" isOpen={openSections.has('12')} onToggle={() => toggleSection('12')} />

            {/* SECTION 13 */}
            <Section id="13" isOpen={openSections.has('13')} onToggle={() => toggleSection('13')} />

            {/* SECTION 14 */}
            <Section id="14" isOpen={openSections.has('14')} onToggle={() => toggleSection('14')} />

            {/* SECTION 15 */}
            <Section id="15" isOpen={openSections.has('15')} onToggle={() => toggleSection('15')} />

            {/* SECTION 16 */}
            <Section id="16" isOpen={openSections.has('16')} onToggle={() => toggleSection('16')} />

            {/* SECTION 17 */}
            <Section id="17" isOpen={openSections.has('17')} onToggle={() => toggleSection('17')} />

            {/* SECTION 18 */}
            <Section id="18" isOpen={openSections.has('18')} onToggle={() => toggleSection('18')} />

            {/* Footer reminder */}
            <div className="mt-12 p-8 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Important Reminders</h3>
              <ul className="space-y-2 text-white/90">
                <li>✅ HealMind_AI is NOT a substitute for professional mental health care</li>
                <li>✅ In a crisis, call 911 or 988 immediately</li>
                <li>✅ We collect and protect your data as described in our Privacy Policy</li>
                <li>✅ Your subscription automatically renews unless you cancel</li>
                <li>✅ Disputes are resolved through binding arbitration on an individual basis</li>
              </ul>
            </div>

            <div className="mt-8 p-8 rounded-2xl text-center" style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}>
              <p className="text-lg font-semibold text-white mb-2">BY USING HEALMIND_AI, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.</p>
              <p className="text-white/70">IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICE.</p>
            </div>

            <div className="text-center text-white/60 mt-8 pb-12">
              <p className="mb-2">Last Updated: October 27, 2025 • Version: 1.0 • Effective Date: October 27, 2025</p>
              <p>© 2025 Neuralyn LLC. All rights reserved.</p>
              <p className="mt-4">For questions about these Terms, contact us at <a href="mailto:legal@neuralyn.health" className="text-blue-400 hover:text-blue-300 underline">legal@neuralyn.health</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Important Notice Section
const ImportantNoticeSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection
    id={id}
    title="IMPORTANT NOTICE"
    isOpen={isOpen}
    onToggle={onToggle}
  >
    <div className="space-y-4">
      <p className="text-lg font-semibold text-orange-400">
        PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING HEALMIND_AI.
      </p>
      <p className="text-white/90 leading-relaxed">
        By accessing or using the HealMind_AI platform (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not access or use the Service.
      </p>
      <div className="bg-orange-500/10 border-l-4 border-orange-400 p-4 rounded">
        <p className="font-semibold text-white mb-2">THESE TERMS CONTAIN IMPORTANT INFORMATION ABOUT YOUR LEGAL RIGHTS, INCLUDING:</p>
        <ul className="list-disc list-inside space-y-1 text-white/90">
          <li>Limitations on Neuralyn's liability</li>
          <li>Your agreement to resolve disputes through arbitration</li>
          <li>Health and safety0 disclaimers</li>
          <li>Privacy and data usage practices</li>
        </ul>
      </div>
    </div>
  </CollapsibleSection>
);

// Collapsible Section Component
const CollapsibleSection = ({ id, title, isOpen, onToggle, children }) => (
  <div id={id} className="scroll-mt-24">
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2)'
      }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-blue-400">{title}</h3>
        <span className="text-2xl text-white/70">{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 text-white/90 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </div>
);

// SubSection Component
const SubSection = ({ title, children }) => (
  <div className="mb-4">
    <h4 className="font-semibold text-lg text-purple-300 mb-2">{title}</h4>
    <div className="text-white/90">{children}</div>
  </div>
);

// Section components with full content
const Section = ({ id, isOpen, onToggle }) => {
  const sections = {
    '1': <AcceptanceSection id="1" isOpen={isOpen} onToggle={onToggle} />,
    '2': <ServiceDescriptionSection id="2" isOpen={isOpen} onToggle={onToggle} />,
    '3': <HealthSafetySection id="3" isOpen={isOpen} onToggle={onToggle} />,
    '4': <EligibilitySection id="4" isOpen={isOpen} onToggle={onToggle} />,
    '5': <UserAccountsSection id="5" isOpen={isOpen} onToggle={onToggle} />,
    '6': <BillingSection id="6" isOpen={isOpen} onToggle={onToggle} />,
    '7': <UseOfServiceSection id="7" isOpen={isOpen} onToggle={onToggle} />,
    '8': <ProhibitedConductSection id="8" isOpen={isOpen} onToggle={onToggle} />,
    '9': <IPSection id="9" isOpen={isOpen} onToggle={onToggle} />,
    '10': <PrivacySection id="10" isOpen={isOpen} onToggle={onToggle} />,
    '11': <ThirdPartySection id="11" isOpen={isOpen} onToggle={onToggle} />,
    '12': <DisclaimersSection id="12" isOpen={isOpen} onToggle={onToggle} />,
    '13': <IndemnificationSection id="13" isOpen={isOpen} onToggle={onToggle} />,
    '14': <TerminationSection id="14" isOpen={isOpen} onToggle={onToggle} />,
    '15': <DisputeSection id="15" isOpen={isOpen} onToggle={onToggle} />,
    '16': <ChangesSection id="16" isOpen={isOpen} onToggle={onToggle} />,
    '17': <GeneralSection id="17" isOpen={isOpen} onToggle={onToggle} />,
    '18': <ContactSection id="18" isOpen={isOpen} onToggle={onToggle} />
  };
  return sections[id];
};

// Section 1: Acceptance of Terms
const AcceptanceSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="1. ACCEPTANCE OF TERMS" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="1.1 Agreement to Terms">
        <p>By creating an account, accessing, or using HealMind_AI (including our mobile applications, website at www.neuralyn.health, and any related services), you ("User," "you," or "your") agree to be bound by:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>These Terms of Service</li>
          <li>Our Privacy Policy (incorporated by reference)</li>
          <li>Our Security Policy</li>
          <li>Any additional guidelines, policies, or rules applicable to specific features</li>
        </ul>
      </SubSection>

      <SubSection title="1.2 Legal Capacity">
        <p>You represent and warrant that:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>You are at least 18 years of age, OR</li>
          <li>You are at least 13 years of age with verifiable parental/guardian consent, OR</li>
          <li>You are of the age of majority in your jurisdiction</li>
        </ul>
        <p className="mt-2">If you are under 18, your parent or legal guardian must review and agree to these Terms on your behalf.</p>
      </SubSection>

      <SubSection title="1.3 Entity Acceptance">
        <p>If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms, and references to "you" include both you individually and the organization.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 2: Service Description
const ServiceDescriptionSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="2. SERVICE DESCRIPTION" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="2.1 What HealMind_AI Provides">
        <p className="font-semibold mb-2">HealMind_AI is a digital mental wellness platform that uses artificial intelligence to provide:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Voice-based conversational support</li>
          <li>Text-based chat functionality</li>
          <li>Mood tracking and journaling tools</li>
          <li>Wellness insights and analytics</li>
          <li>Coping strategies and educational content</li>
          <li>Crisis resource routing (not direct crisis intervention)</li>
        </ul>
      </SubSection>

      <SubSection title="2.2 What HealMind_AI Is NOT">
        <p className="font-semibold text-orange-400 mb-2">HealMind_AI is NOT:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>A substitute for professional mental health treatment, therapy, counseling, or medical care</li>
          <li>A diagnostic tool for mental health conditions</li>
          <li>An emergency crisis service</li>
          <li>A provider of medical advice, diagnosis, or treatment</li>
          <li>A licensed therapist, psychologist, psychiatrist, or healthcare provider</li>
          <li>Approved or cleared by the FDA as a medical device</li>
        </ul>
      </SubSection>

      <SubSection title="2.3 Languages and Availability">
        <p>HealMind_AI is designed to support 50+ languages with cultural sensitivity. Service availability may vary by region and language. We do not guarantee uninterrupted access or availability in all locations.</p>
      </SubSection>

      <SubSection title="2.4 Service Modifications">
        <p>Neuralyn reserves the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice, including but not limited to features, functionality, pricing, and availability.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 3: Health & Safety
const HealthSafetySection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="3. CRITICAL HEALTH & SAFETY DISCLAIMERS" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded">
        <h4 className="font-bold text-red-400 text-lg mb-2">3.1 NOT A MEDICAL SERVICE</h4>
        <p className="font-semibold text-white mb-2">HEALMIND_AI IS A WELLNESS TOOL, NOT A MEDICAL SERVICE.</p>
        <p>HealMind_AI is designed to complement—never replace—professional mental health care. It does not provide medical diagnoses, treatment plans, prescription medication recommendations, emergency mental health intervention, or professional psychotherapy or counseling.</p>
        <p className="font-bold text-white mt-3">IF YOU HAVE A MEDICAL OR MENTAL HEALTH CONDITION, CONSULT A LICENSED HEALTHCARE PROVIDER.</p>
      </div>

      <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded">
        <h4 className="font-bold text-orange-400 text-lg mb-2">3.2 EMERGENCY SITUATIONS</h4>
        <p className="font-bold text-white mb-2">IF YOU ARE EXPERIENCING A MENTAL HEALTH EMERGENCY OR CRISIS:</p>
        <p className="font-semibold text-red-400 mb-3">DO NOT RELY ON HEALMIND_AI FOR EMERGENCY SUPPORT.</p>
        <p className="font-semibold mb-3">Immediately contact:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>911 (United States Emergency Services)</li>
          <li>988 (United States Suicide & Crisis Lifeline)</li>
          <li>Crisis Text Line: Text "HELLO" to 741741</li>
          <li>Your local emergency services</li>
          <li>Your nearest hospital emergency department</li>
          <li>A licensed mental health professional</li>
        </ul>
        <p className="font-bold text-white mt-4">If you or someone you know is experiencing thoughts of suicide, self-harm, or immediate danger, STOP USING HEALMIND_AI AND SEEK IMMEDIATE PROFESSIONAL HELP.</p>
      </div>

      <SubSection title="3.3 Crisis Detection and Routing">
        <p>HealMind_AI uses artificial intelligence to detect potential crisis language. When detected, we provide immediate crisis hotline information and offer resources for professional help. However, HEALMIND_AI IS NOT MONITORED BY HEALTHCARE PROFESSIONALS IN REAL-TIME. We cannot guarantee that crisis detection will function perfectly or identify all crisis situations.</p>
      </SubSection>

      <SubSection title="3.4 No Professional Relationship">
        <p>Use of HealMind_AI does not create a doctor-patient, therapist-client, or any other professional healthcare relationship. The AI-generated content is for informational and supportive purposes only.</p>
      </SubSection>

      <SubSection title="3.5 Medication and Treatment Decisions">
        <p className="font-semibold text-orange-400">Never start, stop, or change any medication or treatment without consulting your licensed healthcare provider.</p>
      </SubSection>

      <SubSection title="3.6 Minors and Parental Supervision">
        <p>If you are under 18 years of age, your parent or legal guardian must supervise your use of HealMind_AI. Parents should review their child's usage and ensure it complements appropriate professional care.</p>
      </SubSection>

      <SubSection title="3.7 Assumption of Risk">
        <p>By using HealMind_AI, you acknowledge and accept risks including:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>AI responses may be incorrect, incomplete, or inappropriate</li>
          <li>Technical errors or service disruptions may occur</li>
          <li>HealMind_AI cannot replace human judgment or professional expertise</li>
        </ul>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 4: Eligibility
const EligibilitySection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="4. ELIGIBILITY AND REGISTRATION" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="4.1 Eligibility Requirements">
        <p>To use HealMind_AI, you must:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Be at least 13 years of age (with parental consent if under 18)</li>
          <li>Have the legal capacity to enter into binding contracts</li>
          <li>Not be prohibited from using the Service under applicable law</li>
          <li>Provide accurate and complete registration information</li>
        </ul>
      </SubSection>

      <SubSection title="4.2 Age Verification">
        <p>We may request age verification at any time. Failure to provide verification may result in account suspension or termination.</p>
      </SubSection>

      <SubSection title="4.3 Parental Consent (Users Under 18)">
        <p>If you are under 18, your parent or legal guardian must:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Review and agree to these Terms on your behalf</li>
          <li>Provide verifiable consent for your use of the Service</li>
          <li>Supervise your use of the Service</li>
        </ul>
      </SubSection>

      <SubSection title="4.4 Account Registration">
        <p>To access certain features, you must register for an account by providing:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Valid email address</li>
          <li>Secure password</li>
          <li>Other information as required</li>
        </ul>
        <p className="mt-2">You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.</p>
      </SubSection>

      <SubSection title="4.5 Geographic Restrictions">
        <p>HealMind_AI may not be available in all countries or regions. We reserve the right to restrict access based on geographic location, legal requirements, or business considerations.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 5: User Accounts
const UserAccountsSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="5. USER ACCOUNTS AND SECURITY" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="5.1 Account Responsibility">
        <p>You are responsible for:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying Neuralyn immediately of any unauthorized access or security breach</li>
        </ul>
      </SubSection>

      <SubSection title="5.2 Account Security">
        <p>You agree to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Use a strong, unique password</li>
          <li>Enable two-factor authentication (if available)</li>
          <li>Not share your account credentials with others</li>
          <li>Log out of your account when using shared devices</li>
        </ul>
      </SubSection>

      <SubSection title="5.3 Unauthorized Access">
        <p>You must notify us immediately at security@neuralyn.health if you believe your account has been compromised or accessed without authorization.</p>
      </SubSection>

      <SubSection title="5.4 Account Integrity">
        <p>You agree NOT to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Create an account using false information</li>
          <li>Create multiple accounts for deceptive purposes</li>
          <li>Allow others to use your account</li>
          <li>Transfer or sell your account to others</li>
        </ul>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 6: Billing
const BillingSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="6. SUBSCRIPTION PLANS AND BILLING" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="6.1 Subscription Plans">
        <p className="font-semibold mb-2">HealMind_AI offers the following subscription plans:</p>
        <div className="bg-blue-500/10 p-4 rounded mb-4">
          <p className="font-bold text-blue-300 mb-2">Free Plan:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>5 voice sessions per month</li>
            <li>Unlimited text chat</li>
            <li>Basic mood tracking</li>
            <li>Limited journal entries (50 maximum)</li>
          </ul>
        </div>
        <div className="bg-purple-500/10 p-4 rounded mb-4">
          <p className="font-bold text-purple-300 mb-2">Pro Plan ($19.99/month or $199/year):</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Unlimited voice sessions</li>
            <li>Advanced emotion AI insights</li>
            <li>Unlimited journal entries</li>
            <li>Priority support</li>
            <li>Data export functionality</li>
          </ul>
        </div>
        <div className="bg-pink-500/10 p-4 rounded">
          <p className="font-bold text-pink-300 mb-2">Family Plan ($39.99/month):</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Up to 5 family member accounts</li>
            <li>All Pro Plan features per member</li>
            <li>Shared wellness dashboard (privacy-protected)</li>
          </ul>
        </div>
      </SubSection>

      <SubSection title="6.2 Billing and Payments">
        <p>By subscribing to a paid plan, you agree to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Provide accurate and current billing information</li>
          <li>Authorize automatic recurring charges to your payment method</li>
          <li>Pay all applicable fees and taxes</li>
          <li>Update your payment information as needed</li>
        </ul>
      </SubSection>

      <SubSection title="6.3 Automatic Renewal">
        <p className="font-bold text-orange-400">SUBSCRIPTIONS AUTOMATICALLY RENEW unless you cancel before the renewal date. You will be charged the then-current subscription price at each renewal period.</p>
      </SubSection>

      <SubSection title="6.4 Cancellation">
        <p>You may cancel your subscription at any time through:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Account settings in the HealMind_AI app or website</li>
          <li>Contacting support@neuralyn.health</li>
        </ul>
        <p className="mt-2 font-semibold">Cancellation takes effect at the end of your current billing period. You will retain access to paid features until that date.</p>
      </SubSection>

      <SubSection title="6.5 Refund Policy">
        <p className="font-bold text-orange-400 mb-2">ALL SALES ARE FINAL.</p>
        <p>We do not offer refunds except:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>As required by applicable law</li>
          <li>In cases of billing errors or duplicate charges</li>
          <li>At Neuralyn's sole discretion</li>
        </ul>
        <p className="mt-2">If you believe you are entitled to a refund, contact billing@neuralyn.health within 30 days of the charge.</p>
      </SubSection>

      <SubSection title="6.6 Free Trials">
        <p>Free trials (if offered) are limited to one per user. At the end of the trial period, you will automatically be charged for a paid subscription unless you cancel before the trial ends.</p>
      </SubSection>

      <SubSection title="6.7 Price Changes">
        <p>Neuralyn reserves the right to change subscription prices at any time. We will provide at least 30 days' notice of price increases. Continued use after the price change constitutes acceptance of the new price.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 7: Use of Service
const UseOfServiceSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="7. USE OF THE SERVICE" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="7.1 License Grant">
        <p>Subject to your compliance with these Terms, Neuralyn grants you a limited, non-exclusive, non-transferable, revocable license to access and use HealMind_AI for your personal, non-commercial use.</p>
      </SubSection>

      <SubSection title="7.2 Restrictions">
        <p>You agree NOT to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Use the Service for any unlawful purpose</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Attempt to reverse engineer, decompile, or disassemble any aspect of the Service</li>
          <li>Use automated systems (bots, scrapers, etc.) to access the Service</li>
          <li>Interfere with or disrupt the Service or servers</li>
          <li>Upload viruses, malware, or malicious code</li>
          <li>Impersonate others or misrepresent your identity</li>
          <li>Use the Service to harass, abuse, or harm others</li>
          <li>Attempt to gain unauthorized access to any portion of the Service</li>
        </ul>
      </SubSection>

      <SubSection title="7.3 Appropriate Use">
        <p>You agree to use HealMind_AI:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>In a manner consistent with its intended purpose (mental wellness support)</li>
          <li>Respectfully and responsibly</li>
          <li>In compliance with all applicable laws and regulations</li>
          <li>Without attempting to exploit vulnerabilities or security flaws</li>
        </ul>
      </SubSection>

      <SubSection title="7.4 Research and Development">
        <p>Neuralyn may use aggregated, anonymized, de-identified data from your interactions to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Improve the Service</li>
          <li>Develop new features</li>
          <li>Conduct research on mental health and AI</li>
          <li>Train and improve AI models</li>
        </ul>
        <p className="mt-2">This data cannot be used to identify you personally.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 8: Prohibited Conduct
const ProhibitedConductSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="8. PROHIBITED CONDUCT" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="8.1 Prohibited Activities">
        <p>You agree NOT to use HealMind_AI to:</p>
        <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded mb-4">
          <p className="font-bold text-red-300 mb-2">Harmful Behavior:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Plan, encourage, or glorify self-harm, suicide, or harm to others</li>
            <li>Share graphic, violent, or disturbing content</li>
            <li>Engage in harassment, bullying, or abusive behavior</li>
          </ul>
        </div>
        <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded mb-4">
          <p className="font-bold text-red-300 mb-2">Illegal Activity:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Engage in any illegal activity</li>
            <li>Violate any local, state, national, or international law</li>
            <li>Facilitate criminal activity or provide instructions for illegal acts</li>
          </ul>
        </div>
        <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded mb-4">
          <p className="font-bold text-orange-300 mb-2">Misuse of Service:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Abuse the Service by making excessive requests</li>
            <li>Use the Service for commercial purposes without authorization</li>
            <li>Attempt to sell, rent, or lease access to the Service</li>
            <li>Use the Service on behalf of third parties without permission</li>
          </ul>
        </div>
        <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded">
          <p className="font-bold text-yellow-300 mb-2">Security Violations:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Attempt to bypass security measures</li>
            <li>Access other users' accounts or data</li>
            <li>Introduce malware, viruses, or malicious code</li>
            <li>Conduct security testing without written authorization</li>
          </ul>
        </div>
      </SubSection>

      <SubSection title="8.2 Consequences of Prohibited Conduct">
        <p>Violation of these prohibitions may result in:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Immediate termination of your account</li>
          <li>Reporting to law enforcement</li>
          <li>Legal action to recover damages</li>
          <li>Permanent ban from the Service</li>
        </ul>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 9: IP
const IPSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="9. USER CONTENT AND INTELLECTUAL PROPERTY" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="9.1 Your Content">
        <p>"User Content" means any information, data, text, messages, audio, or other materials you submit to HealMind_AI, including:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Voice recordings and transcripts</li>
          <li>Text messages and chat conversations</li>
          <li>Journal entries</li>
          <li>Mood logs and tracking data</li>
        </ul>
      </SubSection>

      <SubSection title="9.2 Ownership of User Content">
        <p className="font-bold">You retain all ownership rights to your User Content.</p>
        <p>Neuralyn does not claim ownership of your personal data or content.</p>
      </SubSection>

      <SubSection title="9.3 License to Neuralyn">
        <p>By submitting User Content, you grant Neuralyn a limited, worldwide, non-exclusive, royalty-free license to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Store, process, and transmit your User Content to provide the Service</li>
          <li>Use aggregated, anonymized, de-identified data for research and improvement</li>
          <li>Backup and archive your User Content for security and recovery purposes</li>
        </ul>
        <p className="mt-2 font-bold">We will NOT:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Sell your identifiable User Content to third parties</li>
          <li>Use your User Content for advertising without your consent</li>
          <li>Share your identifiable data except as described in our Privacy Policy</li>
        </ul>
      </SubSection>

      <SubSection title="9.4 Content Accuracy">
        <p>Neuralyn is not responsible for the accuracy, quality, or legality of User Content. You are solely responsible for the content you submit.</p>
      </SubSection>

      <SubSection title="9.5 Neuralyn's Intellectual Property">
        <p>All aspects of the Service, including but not limited to software, code, algorithms, AI models, design, text, graphics, user interface, trademarks, logos, branding, and content created by Neuralyn are owned by Neuralyn LLC and protected by copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
      </SubSection>

      <SubSection title="9.6 Restrictions on Use">
        <p>You may NOT:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Copy, modify, or create derivative works of the Service</li>
          <li>Use Neuralyn's trademarks or branding without written permission</li>
          <li>Remove copyright or proprietary notices</li>
          <li>Frame or mirror any part of the Service</li>
        </ul>
      </SubSection>

      <SubSection title="9.7 DMCA Compliance">
        <p>If you believe your copyright has been infringed, contact our DMCA agent at:</p>
        <p className="font-semibold">Email: legal@neuralyn.health</p>
        <p className="font-semibold">Subject: DMCA Copyright Infringement Notice</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 10: Privacy
const PrivacySection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="10. PRIVACY AND DATA PROTECTION" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="10.1 Privacy Policy">
        <p>Your use of HealMind_AI is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at www.neuralyn.health/privacy.</p>
      </SubSection>

      <SubSection title="10.2 Data Collection">
        <p>We collect and process personal information as described in our Privacy Policy, including:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Account information (email, name)</li>
          <li>Usage data (interactions with the Service)</li>
          <li>Device information (IP address, device type)</li>
          <li>Voice recordings and transcripts</li>
          <li>Content you create (journal entries, mood logs)</li>
        </ul>
      </SubSection>

      <SubSection title="10.3 Data Security">
        <p>Neuralyn implements industry-standard security measures, including:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>AES-256 encryption for data at rest</li>
          <li>TLS 1.3 encryption for data in transit</li>
          <li>HIPAA and GDPR compliance measures</li>
          <li>Regular security audits and penetration testing</li>
        </ul>
        <p className="mt-2 font-semibold">However, no system is 100% secure. You acknowledge that you provide information at your own risk.</p>
      </SubSection>

      <SubSection title="10.4 HIPAA and GDPR Compliance">
        <p>Neuralyn is committed to compliance with:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><span className="font-bold">HIPAA</span> (Health Insurance Portability and Accountability Act) for U.S. users</li>
          <li><span className="font-bold">GDPR</span> (General Data Protection Regulation) for European users</li>
          <li>Other applicable data protection laws</li>
        </ul>
      </SubSection>

      <SubSection title="10.5 Your Data Rights">
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Export your data in a portable format</li>
          <li>Object to certain data processing activities</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="mt-2">To exercise these rights, contact privacy@neuralyn.health.</p>
      </SubSection>

      <SubSection title="10.6 Data Retention">
        <p>We retain your data for as long as your account is active or as needed to provide the Service. You may request deletion at any time, subject to legal retention requirements.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 11: Third Party
const ThirdPartySection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="11. THIRD-PARTY SERVICES AND LINKS" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="11.1 Third-Party Services">
        <p>HealMind_AI may integrate with or link to third-party services, including:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Payment processors (Stripe, PayPal, etc.)</li>
          <li>Cloud infrastructure providers (Google Cloud Platform)</li>
          <li>Analytics services</li>
          <li>Crisis hotlines and mental health resources</li>
        </ul>
      </SubSection>

      <SubSection title="11.2 No Endorsement">
        <p>Neuralyn does not endorse, control, or assume responsibility for third-party services. Your use of third-party services is governed by their own terms and privacy policies.</p>
      </SubSection>

      <SubSection title="11.3 Third-Party Links">
        <p>The Service may contain links to external websites or resources. Neuralyn is not responsible for:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>The availability, accuracy, or content of third-party sites</li>
          <li>The privacy practices of third-party sites</li>
          <li>Any damages or losses caused by third-party sites</li>
        </ul>
        <p className="mt-2 font-semibold">You access third-party sites at your own risk.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 12: Disclaimers
const DisclaimersSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="12. DISCLAIMERS AND LIMITATIONS OF LIABILITY" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="12.1 'AS IS' and 'AS AVAILABLE' Basis">
        <p className="font-bold text-red-400 mb-2">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
        <p>Neuralyn disclaims all warranties, including:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
          <li>Warranties that the Service will be uninterrupted, error-free, or secure</li>
          <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
        </ul>
      </SubSection>

      <SubSection title="12.2 AI Limitations">
        <p className="font-bold text-orange-400 mb-2">ARTIFICIAL INTELLIGENCE IS NOT PERFECT.</p>
        <p>You acknowledge and agree that:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>AI responses may be inaccurate, incomplete, or inappropriate</li>
          <li>HealMind_AI cannot replace human judgment or professional expertise</li>
          <li>The AI may misunderstand your input or provide irrelevant responses</li>
          <li>Technical errors, bugs, or malfunctions may occur</li>
        </ul>
      </SubSection>

      <SubSection title="12.3 No Medical Advice">
        <p className="font-bold text-red-400 mb-2">HEALMIND_AI DOES NOT PROVIDE MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.</p>
        <p>Neuralyn disclaims all liability related to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Medical decisions made based on use of the Service</li>
          <li>Reliance on AI-generated content for health decisions</li>
          <li>Failure to seek professional medical care</li>
          <li>Delays in seeking appropriate medical treatment</li>
        </ul>
      </SubSection>

      <SubSection title="12.4 Limitation of Liability">
        <p className="font-bold text-red-400 mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEURALYN SHALL NOT BE LIABLE FOR:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Indirect, incidental, special, consequential, or punitive damages</li>
          <li>Loss of profits, revenue, data, or business opportunities</li>
          <li>Personal injury, emotional distress, or death</li>
          <li>Damages resulting from use or inability to use the Service</li>
          <li>Damages caused by third-party services or content</li>
          <li>Damages from unauthorized access to or alteration of your data</li>
        </ul>
        <p className="mt-2 font-bold">IN NO EVENT SHALL NEURALYN'S TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO NEURALYN IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.</p>
      </SubSection>

      <SubSection title="12.5 Jurisdictional Limitations">
        <p>Some jurisdictions do not allow the exclusion of certain warranties or limitations on liability. In such jurisdictions, Neuralyn's liability is limited to the maximum extent permitted by law.</p>
      </SubSection>

      <SubSection title="12.6 Basis of the Bargain">
        <p>You acknowledge that these disclaimers and limitations of liability are fundamental elements of the agreement between you and Neuralyn. The Service would not be provided without these limitations.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 13: Indemnification
const IndemnificationSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="13. INDEMNIFICATION" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="13.1 Your Indemnification Obligation">
        <p>You agree to indemnify, defend, and hold harmless Neuralyn LLC, its affiliates, officers, directors, employees, agents, licensors, and service providers from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Your use or misuse of the Service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any applicable laws or regulations</li>
          <li>Your User Content or any content you submit</li>
          <li>Your infringement of any third-party rights, including intellectual property rights</li>
          <li>Any harm or injury caused to third parties resulting from your use of the Service</li>
        </ul>
      </SubSection>

      <SubSection title="13.2 Defense and Settlement">
        <p>Neuralyn reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you. You agree to cooperate with Neuralyn in the defense of any such claim.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 14: Termination
const TerminationSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="14. TERMINATION" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="14.1 Termination by You">
        <p>You may terminate your account at any time by:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Contacting support@neuralyn.health</li>
          <li>Using account deletion features in the app or website</li>
        </ul>
        <p className="mt-2">Upon termination, your access to paid features will continue until the end of your current billing period.</p>
      </SubSection>

      <SubSection title="14.2 Termination by Neuralyn">
        <p>Neuralyn may suspend or terminate your account immediately, without prior notice or liability, if:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>You violate these Terms</li>
          <li>You engage in prohibited conduct</li>
          <li>We are required to do so by law</li>
          <li>We cease providing the Service</li>
        </ul>
      </SubSection>

      <SubSection title="14.3 Effect of Termination">
        <p>Upon termination:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Your right to access and use the Service will immediately cease</li>
          <li>We may delete your User Content after a reasonable period (typically 30-90 days)</li>
          <li>You remain liable for all charges incurred prior to termination</li>
          <li>Sections of these Terms that by their nature should survive termination will survive</li>
        </ul>
      </SubSection>

      <SubSection title="14.4 Data Export Before Termination">
        <p>You are responsible for exporting your User Content before terminating your account. After termination, we may delete your data in accordance with our data retention policies.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 15: Dispute Resolution
const DisputeSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="15. DISPUTE RESOLUTION AND ARBITRATION" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="15.1 Governing Law">
        <p>These Terms are governed by and construed in accordance with the laws of the <span className="font-bold">State of Delaware, United States</span>, without regard to its conflict of law principles.</p>
      </SubSection>

      <SubSection title="15.2 Informal Dispute Resolution">
        <p>Before filing a claim, you agree to try to resolve the dispute informally by contacting legal@neuralyn.health. We will attempt to resolve the dispute informally within 60 days.</p>
      </SubSection>

      <SubSection title="15.3 Binding Arbitration">
        <p className="font-bold text-orange-400">IF THE DISPUTE CANNOT BE RESOLVED INFORMALLY, YOU AGREE THAT ANY DISPUTE ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE WILL BE RESOLVED BY BINDING ARBITRATION, RATHER THAN IN COURT.</p>
        <p className="mt-2">Arbitration will be conducted by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration will take place in your location or remotely via video conference.</p>
      </SubSection>

      <SubSection title="15.4 Class Action Waiver">
        <p className="font-bold">YOU AGREE TO RESOLVE DISPUTES WITH NEURALYN ON AN INDIVIDUAL BASIS.</p>
        <p>You waive the right to participate in class actions, class arbitrations, representative actions, and consolidated proceedings.</p>
      </SubSection>

      <SubSection title="15.5 Exceptions to Arbitration">
        <p>Either party may seek relief in small claims court for disputes within that court's jurisdiction. Additionally, either party may seek injunctive or equitable relief in court to protect intellectual property rights.</p>
      </SubSection>

      <SubSection title="15.6 Arbitration Costs">
        <p>Each party will bear its own costs of arbitration. If you cannot afford arbitration costs, Neuralyn will pay your portion if you provide a written request.</p>
      </SubSection>

      <SubSection title="15.7 Opt-Out Right">
        <p>You may opt out of arbitration by sending written notice to legal@neuralyn.health within 30 days of first accepting these Terms. Your notice must include your name, email, and a statement that you wish to opt out of arbitration.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 16: Changes to Terms
const ChangesSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="16. CHANGES TO TERMS" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="16.1 Right to Modify">
        <p>Neuralyn reserves the right to modify these Terms at any time. We will provide notice of material changes by:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Posting the updated Terms on our website</li>
          <li>Sending an email to your registered email address</li>
          <li>Displaying an in-app notification</li>
        </ul>
      </SubSection>

      <SubSection title="16.2 Effective Date of Changes">
        <p>Changes become effective 30 days after notice is provided, except:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Changes required by law may be effective immediately</li>
          <li>Changes that benefit users may be effective immediately</li>
        </ul>
      </SubSection>

      <SubSection title="16.3 Acceptance of Changes">
        <p>Your continued use of the Service after changes become effective constitutes acceptance of the new Terms. If you do not agree to the changes, you must stop using the Service and terminate your account.</p>
      </SubSection>

      <SubSection title="16.4 Version History">
        <p>We maintain a version history of these Terms. You may request prior versions by contacting legal@neuralyn.health.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 17: General Provisions
const GeneralSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="17. GENERAL PROVISIONS" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="17.1 Entire Agreement">
        <p>These Terms, together with our Privacy Policy and any additional policies, constitute the entire agreement between you and Neuralyn regarding the Service.</p>
      </SubSection>

      <SubSection title="17.2 Severability">
        <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.</p>
      </SubSection>

      <SubSection title="17.3 Waiver">
        <p>Neuralyn's failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision. Any waiver must be in writing and signed by Neuralyn.</p>
      </SubSection>

      <SubSection title="17.4 Assignment">
        <p>You may not assign or transfer these Terms or your account without Neuralyn's prior written consent. Neuralyn may assign these Terms without restriction.</p>
      </SubSection>

      <SubSection title="17.5 Force Majeure">
        <p>Neuralyn is not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, pandemics, government actions, or infrastructure failures.</p>
      </SubSection>

      <SubSection title="17.6 Export Control">
        <p>The Service may be subject to U.S. export control laws and regulations. You agree to comply with all applicable export and re-export control laws and regulations.</p>
      </SubSection>

      <SubSection title="17.7 U.S. Government Rights">
        <p>If you are a U.S. government entity, the Service is a "commercial item" as defined in 48 C.F.R. §2.101, and you acquire only the rights granted in these Terms.</p>
      </SubSection>

      <SubSection title="17.8 Notice to California Residents">
        <p>Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice:</p>
        <p className="font-semibold mt-2">Complaint Assistance:</p>
        <p>California Department of Consumer Affairs<br />
        Consumer Information Division<br />
        1625 North Market Blvd., Suite N 112<br />
        Sacramento, CA 95834<br />
        Phone: (916) 445-1254 or (800) 952-5210</p>
      </SubSection>

      <SubSection title="17.9 Language">
        <p>These Terms are provided in English. Any translation is provided for convenience only. In the event of any conflict, the English version shall prevail.</p>
      </SubSection>

      <SubSection title="17.10 Electronic Communications">
        <p>You consent to receive electronic communications from Neuralyn, including emails, in-app messages, and notifications. You agree that all agreements, notices, disclosures, and other communications provided electronically satisfy any legal requirement that such communications be in writing.</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

// Section 18: Contact
const ContactSection = ({ id, isOpen, onToggle }) => (
  <CollapsibleSection id={id} title="18. CONTACT INFORMATION" isOpen={isOpen} onToggle={onToggle}>
    <div className="space-y-4">
      <SubSection title="18.1 How to Contact Us">
        <p>For questions, concerns, or notices regarding these Terms, please contact:</p>
        <div className="bg-blue-500/10 p-4 rounded mt-2">
          <p className="font-bold mb-2">Neuralyn LLC</p>
          <p>Email: legal@neuralyn.health</p>
          <p>Support: support@neuralyn.health</p>
          <p>Website: www.neuralyn.health</p>
        </div>
        <div className="bg-purple-500/10 p-4 rounded mt-4">
          <p className="font-bold mb-2">Mailing Address:</p>
          <p>Neuralyn LLC</p>
          <p>533 E 33rd PL</p>
          <p>Chicago, IL 60616</p>
          <p>United States</p>
        </div>
      </SubSection>

      <SubSection title="18.2 Response Time">
        <p>We aim to respond to all inquiries within 5 business days. For urgent matters, please clearly mark your communication as "URGENT."</p>
      </SubSection>
    </div>
  </CollapsibleSection>
);

export default Terms; 
