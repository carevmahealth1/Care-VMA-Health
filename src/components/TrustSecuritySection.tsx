import React from 'react';
import {
  FileText,
  Lock,
  HardDrive,
  UserCheck,
  KeyRound,
  ShieldAlert,
  Server,
  EyeOff
} from 'lucide-react';

export const TrustSecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: 'Business Associate Agreements (BAA)',
      description:
        'Prior to service commencement, Care VMA Health executes a formal Business Associate Agreement (BAA) with your practice, clearly outlining obligations for safeguarding protected health information and establishing legal accountability.',
      icon: FileText,
      tag: 'Legal Framework',
    },
    {
      title: 'Practice-Controlled EHR Credentials',
      description:
        'Your clinic administrators maintain 100% control over assistant accounts. You provision individual, unique user logins within your EHR with role-based permissions restricted strictly to designated job functions, with full audit trail logging.',
      icon: KeyRound,
      tag: 'Access Governance',
    },
    {
      title: 'Strict Zero-Local-Storage Policy',
      description:
        'Virtual medical assistants operate strictly within your cloud EHR portal or secure remote desktop sessions. Assistant hardware is governed by technical controls prohibiting local file downloads, external drives, or unauthorized screen captures.',
      icon: HardDrive,
      tag: 'Data Architecture',
    },
    {
      title: 'Comprehensive Personnel Screening',
      description:
        'Every virtual assistant undergoes multi-stage candidate vetting, including identity verification, criminal background checks, professional reference validation, and mandatory healthcare confidentiality agreements.',
      icon: UserCheck,
      tag: 'Workforce Standards',
    },
    {
      title: 'Multi-Factor Authentication & Encrypted Transport',
      description:
        'All system access points require multi-factor authentication (MFA) and end-to-end encrypted transport (TLS 1.3). Virtual assistants never share credentials or access systems from unsecured public networks.',
      icon: Lock,
      tag: 'Network Safeguards',
    },
    {
      title: 'Dedicated US Account Management',
      description:
        'Your practice is paired with a dedicated US-based account manager who oversees day-to-day coordination, monitors protocol adherence, conducts regular check-ins, and serves as your direct operational point of contact.',
      icon: Server,
      tag: 'Operational Oversight',
    },
  ];

  return (
    <section id="trust-security" className="py-24 bg-slate-950 text-white border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Governance & Privacy</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Uncompromising Safeguards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Built Around Patient Privacy and Practice Security
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Healthcare data demands rigorous operational discipline. We operate on foundational principles of least privilege, mutual accountability, and transparent technical safeguards tailored to US outpatient practices.
          </p>
        </div>

        {/* Security Framework Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practice Control Callout Box */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Practice Sovereignty & Transparency Note
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                You Retain Total Administrative Control Over All System Credentials
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Care VMA Health assistants do not request master or shared accounts. You issue unique user credentials in your practice EHR and phone system, allowing your IT team to monitor audit logs, set specific view/edit permissions, and deactivate logins instantly at your discretion.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950 px-4 py-3 rounded-xl border border-slate-800">
              <EyeOff className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Full Audit Logging Kept in Your EHR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
