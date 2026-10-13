import React, { useState } from 'react';
import { Search, UserCheck, KeyRound, Rocket, Check, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onBookConsultation: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onBookConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Practice Discovery & Workflow Mapping',
      icon: Search,
      timeframe: 'Day 1–3',
      summary:
        'We conduct a thorough workflow consultation to understand your clinical specialties, daily patient volume, EHR platform, and exact administrative bottlenecks.',
      details: [
        'Detailed review of current inbox volume, phone traffic, and chart backlog',
        'Identification of primary EHR systems (e.g., Epic, Athena, eClinicalWorks)',
        'Establishment of clinic hours, time zones, and required coverage schedule',
        'Definition of success metrics and task delegation boundaries',
      ],
    },
    {
      number: '02',
      title: 'VMA Matching & Specialty Protocol Tailoring',
      icon: UserCheck,
      timeframe: 'Day 4–7',
      summary:
        'We match your practice with dedicated virtual medical assistants experienced in your clinical discipline and preferred communication style.',
      details: [
        'Selection of candidates with verifiable medical administrative background',
        'Review of candidate profiles and optional provider meet-and-greet',
        'Documenting practice SOPs: triage logic, physician preferences, and notation standards',
        'Dry-run simulation of clinic phone greetings and message templates',
      ],
    },
    {
      number: '03',
      title: 'Secure Systems Onboarding & Access Provisioning',
      icon: KeyRound,
      timeframe: 'Day 8–10',
      summary:
        'Execute mutual Business Associate Agreement (BAA) and configure secure, least-privilege credentials directly within your existing practice infrastructure.',
      details: [
        'Execution of formal Business Associate Agreement (BAA)',
        'Configuration of practice-managed EHR user accounts and role permissions',
        'Setup of secure VoIP phone extension and encrypted clinic messaging channels',
        'Verification of zero-local-storage remote protocols on encrypted terminals',
      ],
    },
    {
      number: '04',
      title: 'Phased Go-Live & Dedicated Quality Oversight',
      icon: Rocket,
      timeframe: 'Day 11+',
      summary:
        'Your dedicated assistant begins live clinic operations with dedicated account manager oversight and cross-trained backup coverage.',
      details: [
        'Structured first-week launch with close supervisor check-ins',
        'Daily end-of-day task summaries and communication log reviews',
        'Cross-training of a dedicated secondary backup assistant for planned absence coverage',
        'Regular operational reviews to adjust tasks as clinic needs grow',
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Structured Implementation</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Zero Operational Disruption</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How Practices Integrate Care VMA Health
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Our onboarding process is designed by healthcare administrators to ensure seamless EHR integration, strict data governance, and immediate productivity for your clinic.
          </p>
        </div>

        {/* Interactive Step Timeline Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl p-6 border transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-slate-850 border-cyan-500/70 shadow-lg shadow-cyan-950/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                      STEP {step.number}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-cyan-300 font-medium' : 'text-slate-400'}>
                    {isSelected ? 'Viewing details' : 'Click to inspect'}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-cyan-400' : 'bg-slate-700'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive */}
        <div className="mt-8 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Detailed Protocol · Step {steps[activeStep].number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {steps[activeStep].title}
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Estimated Duration: <strong className="text-white">{steps[activeStep].timeframe}</strong>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps[activeStep].details.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              We guide your practice leadership through every step with an assigned onboarding coordinator.
            </p>
            <button
              type="button"
              onClick={onBookConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              <span>Schedule Workflow Mapping Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
