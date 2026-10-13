import React from 'react';
import { Hero3DScene } from './Hero3DScene';
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Clock, Users } from 'lucide-react';

interface HeroProps {
  onBookConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookConsultation }) => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Subtle Background Lighting & Gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(6, 182, 212, 0.25) 0%, rgba(15, 23, 42, 0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed editorial kicker without pill enclosure */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-4">
              <span>US Healthcare Practices</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Dedicated Virtual Care Teams</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>EHR Integration</span>
            </div>

            {/* Required Hero Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Your Trusted Partner in Virtual Medical Assistance
            </h1>

            {/* Required Supporting Text */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Virtual medical assistants help healthcare practices manage administrative tasks and patient communication, so providers can dedicate their full attention to high-quality clinical care, reduce charting backlogs, and run smoother daily operations.
            </p>

            {/* Required Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg shadow-lg shadow-cyan-950/40 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-cyan-400"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Explore Our Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Honest Operational Pillars (No fake stats or fake stamps) */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Practice Focused</span>
                <p className="mt-1 text-sm text-slate-300 leading-snug">
                  Tailored to independent clinics, group practices, and specialty care.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Direct Workflow</span>
                <p className="mt-1 text-sm text-slate-300 leading-snug">
                  Assisting directly inside your existing EHR and practice management tools.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Rigorous Security</span>
                <p className="mt-1 text-sm text-slate-300 leading-snug">
                  Zero local storage policies, strict access controls, and BAA agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Healthcare Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-lg lg:max-w-none aspect-square sm:aspect-[4/3] lg:aspect-square">
              <Hero3DScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
