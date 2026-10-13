import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Shield } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              className="inline-block shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
              aria-label="Care VMA Health Home"
            >
              <img
                src="/Logo 2.jpeg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.tried) {
                    target.dataset.tried = '1';
                    target.src = '/Logo%202.jpeg';
                  } else if (target.dataset.tried === '1') {
                    target.dataset.tried = '2';
                    target.src = '/logo.png';
                  }
                }}
                alt="Care VMA Health"
                className="h-9 sm:h-11 w-auto object-contain max-h-12"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner in virtual medical assistance. Dedicated, trained healthcare support specialists helping US medical practices streamline administrative workloads, enhance patient communication, and eliminate provider documentation backlogs.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <span>Official Website:</span>
              <a
                href="https://carevmahealth.com/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
              >
                carevmahealth.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Virtual Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Patient Communication
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Administrative Support
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Clinical Support & Charting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Virtual Receptionist
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Telehealth Support
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Revenue Cycle Support
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Practice Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Practice Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#benefits" className="hover:text-cyan-400 transition-colors">
                  Provider Benefits
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">
                  Onboarding Timeline
                </a>
              </li>
              <li>
                <a href="#trust-security" className="hover:text-cyan-400 transition-colors">
                  Trust & Security Standards
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Schedule Practice Discovery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Operations */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Contact & Inquiries
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@carevmahealth.com"
                  className="hover:text-cyan-400 transition-colors break-all"
                >
                  hello@carevmahealth.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+12142814464"
                  className="hover:text-cyan-400 transition-colors font-mono text-slate-300"
                >
                  (214) 281-4464
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>6340 N Eldridge Pkwy N 117, Houston, TX 77041</span>
              </li>
              <li className="text-[11px] text-slate-500 pt-1">
                Mon – Fri: 8:00 AM – 6:00 PM (EST / CST / MST / PST)
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Care VMA Health (carevmahealth.com). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <span>Business Associate Agreement Protocols</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Local-Storage Infrastructure</span>
            <span aria-hidden="true">·</span>
            <a href="#consultation" className="hover:text-cyan-400 transition-colors">
              Privacy & Practice Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
