import React, { useState } from 'react';
import {
  Clock,
  HeartPulse,
  TrendingUp,
  Users2,
  FileCheck2,
  Sparkles,
  Calculator,
  ArrowRight
} from 'lucide-react';

interface BenefitsSectionProps {
  onBookConsultation: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onBookConsultation }) => {
  const [providerCount, setProviderCount] = useState<number>(3);
  const [adminHoursPerDay, setAdminHoursPerDay] = useState<number>(2.5);

  // Calculated estimates:
  const monthlyAdminHours = Math.round(providerCount * adminHoursPerDay * 20);
  const reclaimedHours = Math.round(monthlyAdminHours * 0.72);
  const additionalAppointmentsPossible = Math.round(reclaimedHours * 1.8);

  const providerBenefits = [
    {
      title: 'Alleviate Clinician Burnout',
      description:
        'Physicians frequently spend hours after clinic hours catching up on EHR charts and inbox queues. VMAs offload repetitive charting prep and inbox sorting so providers finish on time.',
      icon: Clock,
      highlight: 'End "pajama time" charting sessions',
    },
    {
      title: 'Elevate Patient Access',
      description:
        'When phones ring unanswered or hold times lengthen, patient satisfaction plunges. Dedicated virtual receptionists ensure calls are answered promptly and professionally.',
      icon: HeartPulse,
      highlight: 'Zero dropped patient calls during peak hours',
    },
    {
      title: 'Protect Front-Desk Morale',
      description:
        'In-clinic staff are often pulled simultaneously between ringing phones, patients standing at the desk, and rooming. Shifting phone traffic to virtual assistants restores calm.',
      icon: Users2,
      highlight: 'Uninterrupted in-person patient hospitality',
    },
    {
      title: 'Practice Growth Without Real Estate',
      description:
        'Expand patient capacity and add specialists without spending capital on physical desks, hardware setups, or larger square footage in high-rent medical office suites.',
      icon: TrendingUp,
      highlight: 'Flexible capacity scaling on demand',
    },
    {
      title: 'Consistent Protocol Adherence',
      description:
        'Virtual medical assistants follow strict standard operating procedures for eligibility checks, prior authorization filings, and referral record distribution.',
      icon: FileCheck2,
      highlight: 'Standardized clinic operational checklists',
    },
    {
      title: 'Seamless Continuity of Care',
      description:
        'Our cross-trained coverage model ensures that if your primary virtual assistant is on planned leave, a trained backup steps in without interrupting your clinic routine.',
      icon: Sparkles,
      highlight: 'Reliable practice operational continuity',
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-950 text-white border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Provider Impact</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Measurable Operational Relief</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How Dedicated Virtual Assistance Transforms Practice Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Running an efficient outpatient practice requires balancing clinical care with non-stop administrative obligations. Virtual medical assistants shoulder the operational friction so providers can focus on medicine.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providerBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{benefit.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Practice Impact & Reclaimed Time Estimator */}
        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Interactive Inputs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <Calculator className="w-4 h-4" />
                <span>Practice Time & Capacity Estimator</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Calculate Time Reclaimed for Your Clinical Team
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Adjust the sliders below to estimate the cumulative hours your providers spend on administrative inbox triage, chart preparation, and call management.
              </p>

              {/* Slider 1: Provider Count */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">Number of Providers in Practice:</span>
                  <span className="font-mono text-cyan-400 font-bold text-base tabular-nums">
                    {providerCount} {providerCount === 1 ? 'Provider' : 'Providers'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={providerCount}
                  onChange={(e) => setProviderCount(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  aria-label="Number of providers in practice slider"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Provider</span>
                  <span>5 Providers</span>
                  <span>15 Providers</span>
                </div>
              </div>

              {/* Slider 2: Daily Admin Load */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">Admin & Documentation Hours per Provider / Day:</span>
                  <span className="font-mono text-cyan-400 font-bold text-base tabular-nums">
                    {adminHoursPerDay} hrs / day
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="0.5"
                  value={adminHoursPerDay}
                  onChange={(e) => setAdminHoursPerDay(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  aria-label="Admin hours per day slider"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1.0 hr</span>
                  <span>2.5 hrs</span>
                  <span>4.0 hrs</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 italic">
                * Based on typical outpatient workflow benchmarks across 20 clinic operating days per month.
              </div>
            </div>

            {/* Calculated Results Panel */}
            <div className="lg:col-span-6 bg-slate-950 border border-slate-800/90 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Estimated Monthly Practice Output
                </span>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block">Total Admin Burden</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1 block font-mono tabular-nums">
                      ~{monthlyAdminHours} <span className="text-xs text-slate-400 font-normal">hrs/mo</span>
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Current monthly practice load</span>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                    <span className="text-xs text-cyan-300 block">Reclaimed Clinical Hours</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-1 block font-mono tabular-nums">
                      ~{reclaimedHours} <span className="text-xs text-cyan-300 font-normal">hrs/mo</span>
                    </span>
                    <span className="text-[11px] text-cyan-200/80 mt-1 block">Transferred to Care VMA</span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-slate-300">Potential Patient Visits Capacity</span>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Estimated appointments accommodated with reclaimed clinic time
                    </p>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                    +{additionalAppointmentsPossible}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Ready to map this model to your clinic?
                </span>
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Discuss Your Practice Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Real Clinical Context Snapshot */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl aspect-[4/3]">
              <img
                src="/src/assets/images/physician_collaboration_1791913875622.jpg"
                alt="Physician reviewing optimized clinical workflow and documentation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Provider Well-Being & Patient Retention
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              A Sustainable Care Delivery Model
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              When medical assistants handle administrative queues reliably in the background, physicians can engage with patients without the pressure of mounting inbox tasks. Clinics experience lower staff turnover, fewer administrative delays, and a more structured operating environment.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</div>
                <div>
                  <span className="text-sm font-semibold text-white block">Dedicated, Consistent Assignment</span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Your assigned assistant becomes an accustomed extension of your clinical routine, not an anonymous pool of rotating operators.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</div>
                <div>
                  <span className="text-sm font-semibold text-white block">Specialty-Tailored Terminology</span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Trained in family medicine, cardiology, dermatology, pediatrics, behavioral health, and surgical specialties.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
