import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  onBookConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onBookConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<'all' | 'onboarding' | 'security' | 'operations'>('all');

  const faqs: FAQItem[] = [
    {
      category: 'technology',
      question: 'Which Electronic Health Record (EHR) systems do your virtual assistants work with?',
      answer:
        'Our virtual medical assistants are trained across major US ambulatory EHR and PM platforms, including Epic, Athenahealth, eClinicalWorks, Cerner / Oracle Health, NextGen, Kareo / Tebra, AdvancedMD, DrChrono, and SimplePractice. Because your assistant operates inside your existing software, no special proprietary software installations are required on your clinic network.',
    },
    {
      category: 'security',
      question: 'How does a Virtual Medical Assistant securely access our practice software?',
      answer:
        'Your clinic administrator creates an individual, designated user account in your EHR and practice telephony system with role-based access restricted specifically to their assigned duties. Assistants connect via secure browser sessions or encrypted remote desktop protocols with multi-factor authentication. Assistants operate under zero-local-storage guidelines and never save patient records to local drives.',
    },
    {
      category: 'operations',
      question: 'What hours and US time zones do your virtual medical assistants support?',
      answer:
        'We support all US continental time zones (Eastern, Central, Mountain, and Pacific) as well as Alaska and Hawaii. Shifts are scheduled to match your clinic’s exact operating hours, whether you need standard 8:00 AM – 5:00 PM coverage, extended evening clinic hours, or Saturday morning coverage.',
    },
    {
      category: 'operations',
      question: 'Are virtual medical assistants dedicated solely to our practice?',
      answer:
        'Yes. When you engage a full-time or part-time virtual medical assistant through Care VMA Health, that individual is assigned exclusively to your practice during their scheduled hours. They learn your physicians’ personal charting habits, patient population nuances, and clinic workflows, functioning as a true remote member of your team.',
    },
    {
      category: 'onboarding',
      question: 'How long does onboarding typically take before our assistant goes live?',
      answer:
        'Most practices complete workflow mapping, candidate matching, systems credentialing, and protocol review within 7 to 14 business days. We provide a structured onboarding roadmap with an assigned onboarding coordinator to keep the timeline on track.',
    },
    {
      category: 'onboarding',
      question: 'Can our practice leadership interview and select our assistant?',
      answer:
        'Absolutely. We present thoroughly vetted candidates who match your clinical specialty and software background. You can conduct a video interview with recommended candidates to evaluate communication style, cultural fit, and clinical acumen before confirming the placement.',
    },
    {
      category: 'operations',
      question: 'What happens if our primary virtual medical assistant is out sick or on planned leave?',
      answer:
        'Care VMA Health maintains a cross-training framework where a designated secondary assistant is trained on your practice’s Standard Operating Procedures. In the event of planned vacation or unexpected illness, backup coverage can be activated to ensure your clinic phones and charting queues remain attended.',
    },
    {
      category: 'security',
      question: 'Does Care VMA Health sign a Business Associate Agreement (BAA)?',
      answer:
        'Yes, universally. Before any assistant begins work or receives system logins, Care VMA Health signs a comprehensive Business Associate Agreement with your practice establishing mutual legal commitments regarding the protection and handling of Protected Health Information (PHI).',
    },
  ];

  const filteredFaqs =
    activeFilter === 'all' ? faqs : faqs.filter((faq) => faq.category === activeFilter);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Answers for Practice Leaders</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Clarity & Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything practice owners, clinical directors, and office managers need to know about integrating virtual medical assistants into their daily workflows.
          </p>
        </div>

        {/* Functional Filter Tabs (Allowable segmented buttons with active/inactive states) */}
        <div className="mt-10 flex flex-wrap items-center gap-2 p-1.5 bg-slate-950/80 border border-slate-800 rounded-xl w-fit">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Questions
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('operations')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeFilter === 'operations'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Clinic Operations
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('security')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeFilter === 'security'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Security & Governance
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('onboarding')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeFilter === 'onboarding'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Onboarding & Matching
          </button>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-8 space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-950/70 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-cyan-950 text-cyan-400 rotate-180' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-850">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpdesk Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Have a specific clinical or technical question?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Our operations team is available to review your unique EHR configuration and staffing model.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onBookConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Ask Our Operations Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
