import React, { useState } from 'react';
import {
  MessageSquare,
  FileText,
  Stethoscope,
  PhoneCall,
  Video,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('patient-communication');

  const services: ServiceItem[] = [
    {
      id: 'patient-communication',
      title: 'Patient Communication',
      category: 'Inbound & Outbound Engagement',
      tagline: 'Prompt, compassionate patient inquiries and follow-through',
      description:
        'Keep your patient community informed and supported. Virtual medical assistants handle inbound portal inquiries, appointment reminder calls, preventive recall outreach, and post-visit check-ins so no patient falls through the cracks.',
      deliverables: [
        'Secure patient portal message triage & response routing',
        'Appointment confirmation calls and SMS follow-up',
        'Preventive screening & routine follow-up recall campaigns',
        'General clinic inquiry resolution and triage protocol execution',
      ],
      ehrTasks: ['AthenaCommunicator', 'Epic MyChart', 'eClinicalWorks Portal', 'Kareo Engage'],
      iconName: 'MessageSquare',
    },
    {
      id: 'administrative-support',
      title: 'Administrative Support',
      category: 'Operational Workflow Management',
      tagline: 'Eliminate paperwork backlogs and calendar friction',
      description:
        'Alleviate the heavy operational burden weighing on your in-clinic staff. Our virtual assistants coordinate provider schedules, manage medical record releases, organize referrals, and prepare documentation requests with meticulous precision.',
      deliverables: [
        'Multi-provider scheduling, re-booking, and cancellation fill-ins',
        'Specialist referral coordination and record dispatch',
        'Medical records intake, scanning indexing, and release of information',
        'Prior authorization documentation compilation & tracking',
      ],
      ehrTasks: ['Referral Tracking', 'Document Management Indexing', 'Care Coordination Worklists'],
      iconName: 'FileText',
    },
    {
      id: 'clinical-support',
      title: 'Clinical Support',
      category: 'Pre-Visit & Charting Preparation',
      tagline: 'Ready-to-see charts before providers walk into the exam room',
      description:
        'Equip physicians and nurse practitioners with complete, well-organized clinical information before every patient encounter. Virtual medical assistants retrieve outside records, review medication lists, organize lab results, and populate intake templates.',
      deliverables: [
        'Pre-visit chart prep: external lab, imaging, and consult note retrieval',
        'Patient history documentation and allergy/medication reconciliation prep',
        'Lab result routing according to physician standing orders',
        'Prescription refill request triage and pharmacy coordination',
      ],
      ehrTasks: ['Encounter Note Scaffolding', 'Medication Refill Protocol Queue', 'Diagnostic Result Tagging'],
      iconName: 'Stethoscope',
    },
    {
      id: 'virtual-medical-receptionist',
      title: 'Virtual Medical Receptionist',
      category: 'Front-Desk Telephony & Check-In',
      tagline: 'Warm, professional live telephone coverage for busy clinics',
      description:
        'Ensure every ringing phone is answered by a trained, courteous professional. Virtual receptionists handle patient registration, insurance card verification, urgent message forwarding, and routing according to your practice-specific triage guidelines.',
      deliverables: [
        'Live phone answering with customized practice greeting',
        'New patient intake questionnaire collection & demographic entry',
        'Primary and secondary insurance eligibility verification',
        'Urgent call escalation to clinical triage staff',
      ],
      ehrTasks: ['Demographics Registration', 'Insurance Real-time Eligibility Check', 'Phone Encounter Notes'],
      iconName: 'PhoneCall',
    },
    {
      id: 'telehealth-support',
      title: 'Telehealth Support',
      category: 'Virtual Clinic Coordination',
      tagline: 'Smooth, frictionless virtual patient care encounters',
      description:
        'Deliver telehealth experiences that feel just as organized as in-person visits. Virtual medical assistants test patient audio/video, guide first-time telehealth users through the platform, log pre-visit chief complaints, and transition the patient to the provider.',
      deliverables: [
        'Pre-call patient connectivity testing & device troubleshooting',
        'Virtual waiting room queue management & provider handoff',
        'Intake verification and chief complaint documentation',
        'Post-consultation follow-up scheduling & pharmacy confirmation',
      ],
      ehrTasks: ['Zoom for Healthcare', 'Doxy.me', 'Epic Telehealth Integration', 'Doximity Queue'],
      iconName: 'Video',
    },
    {
      id: 'revenue-cycle-support',
      title: 'Revenue Cycle Support',
      category: 'Billing & Administrative Integrity',
      tagline: 'Clean claims groundwork and prompt billing follow-up',
      description:
        'Protect practice revenue by addressing claims friction at the source. Virtual medical assistants assist with charge capture review, verify patient copay collections, follow up on pending prior authorizations, and assist patients with billing inquiries.',
      deliverables: [
        'Charge capture cross-referencing against appointment logs',
        'Prior authorization status checks with commercial & Medicare payers',
        'Basic denial tracking and missing documentation retrieval',
        'Patient statement explanation & payment plan intake',
      ],
      ehrTasks: ['Claim Workqueue Scrubbing', 'Payer Portal Auth Inquiries', 'Superbill Reconciliation'],
      iconName: 'DollarSign',
    },
  ];

  const activeService = services.find((s) => s.id === activeTab) || services[0];

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-cyan-500" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-cyan-500" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-cyan-500" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-cyan-500" />;
      case 'Video':
        return <Video className="w-5 h-5 text-cyan-500" />;
      case 'DollarSign':
        return <DollarSign className="w-5 h-5 text-cyan-500" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Comprehensive Virtual Assistance</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Tailored Clinic Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Specialized Virtual Support for Modern Healthcare Practices
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Care VMA Health delivers dedicated, highly trained virtual medical assistants customized to your specialty, documentation style, and electronic health record system. Learn how a dedicated <a href="https://carevmahealth.com/virtual-medical-assistant/" className="text-cyan-400 hover:text-cyan-300 underline font-medium">Virtual Medical Assistant</a> seamlessly coordinates administrative workflows and elevates patient communication across your clinic.
          </p>
        </div>

        {/* Interactive Service Navigation & Detailed Split Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 px-3 py-1">
              Select a service area to inspect workflows:
            </p>
            {services.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'bg-slate-800/90 border-cyan-500/50 shadow-md shadow-cyan-950/20'
                      : 'bg-slate-950/40 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isActive ? 'bg-cyan-950/80 text-cyan-400' : 'bg-slate-800 text-slate-400 group-hover:text-cyan-400'
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h3
                        className={`text-base font-semibold transition-colors ${
                          isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{service.tagline}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 shrink-0 mt-2 transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Service Deep Dive Panel (Right Column) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
            <div
              className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-20"
              style={{
                background:
                  'radial-gradient(circle at 100% 0%, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Category & Title */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <span>{activeService.category}</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold text-white tracking-tight">
                {activeService.title}
              </h3>
              <p className="mt-3 text-slate-300 leading-relaxed text-sm sm:text-base">
                {activeService.description}
              </p>

              {/* Real Operational Workflows */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Operational Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* EHR Compatibility Context */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Direct EHR & Platform Integration Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.ehrTasks.map((task, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-md"
                    >
                      {task}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Ready to integrate {activeService.title} into your clinic?
                </div>
                <button
                  type="button"
                  onClick={() => onSelectService(activeService.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Request Coverage Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Workflow Spotlight with generated high-fidelity asset */}
        <div className="mt-16 bg-slate-950/70 border border-slate-800/90 rounded-2xl overflow-hidden p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Seamless Clinical Extension
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white tracking-tight">
                Designed to Match Your Exact Practice Protocols
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Virtual medical assistants are onboarded according to your clinic&apos;s specific provider preferences, templates, and specialty guidelines. Rather than changing how your practice operates, our assistants integrate into your established workflow.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-semibold text-white block">Dedicated Personnel</span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Assigned assistants who learn your physician nuances and preferred notation.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-semibold text-white block">Real-Time Team Sync</span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Direct communication with your on-site office manager via your chosen team chat.
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-xl aspect-[4/3]">
                <img
                  src="/src/assets/images/care_coordinator_desk_1791913843642.jpg"
                  alt="Care VMA Health coordinator providing virtual medical practice support"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded border border-slate-800">
                  Dedicated remote coordination for primary care and specialty practices
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
