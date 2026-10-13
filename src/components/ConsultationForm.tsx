import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  Calendar,
  Clock,
  Sparkles,
  Download,
  RotateCcw
} from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationFormProps {
  preselectedService?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    practiceName: '',
    contactName: '',
    email: '',
    phone: '',
    specialty: 'Family Medicine',
    providerCount: '2–4 Providers',
    selectedServices: preselectedService ? [preselectedService] : ['patient-communication', 'administrative-support'],
    timeline: 'Within 2 Weeks',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const specialties = [
    'Family Medicine / Primary Care',
    'Internal Medicine',
    'Pediatrics',
    'Cardiology',
    'Dermatology',
    'Orthopedics / Sports Medicine',
    'Obstetrics & Gynecology',
    'Behavioral Health / Psychiatry',
    'Neurology',
    'Multi-Specialty Group Practice',
    'Other Clinical Specialty',
  ];

  const serviceOptions = [
    { id: 'patient-communication', label: 'Patient Communication & Inbound Triage' },
    { id: 'administrative-support', label: 'Administrative Support & Referrals' },
    { id: 'clinical-support', label: 'Clinical Support & Pre-Visit Charting' },
    { id: 'virtual-medical-receptionist', label: 'Virtual Medical Receptionist & Phones' },
    { id: 'telehealth-support', label: 'Telehealth Support & Patient Tech Check' },
    { id: 'revenue-cycle-support', label: 'Revenue Cycle Support & Auth Tracking' },
  ];

  const handleServiceToggle = (id: string) => {
    setFormData((prev) => {
      const current = prev.selectedServices;
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      return { ...prev, selectedServices: updated };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.practiceName.trim()) {
      newErrors.practiceName = 'Please enter your practice or organization name';
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Please enter your full name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your practice contact number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (formData.selectedServices.length === 0) {
      newErrors.services = 'Please select at least one virtual assistant service area';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic asynchronous validation and recording
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleDownloadSummary = () => {
    const summaryText = `CARE VMA HEALTH - PRACTICE CONSULTATION REQUEST
Generated: ${new Date().toLocaleString()}
------------------------------------------------------
Practice: ${formData.practiceName}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Specialty: ${formData.specialty}
Practice Size: ${formData.providerCount}
Target Timeline: ${formData.timeline}
Selected Services:
${formData.selectedServices.map((s) => ` - ${s}`).join('\n')}

Notes / Current EHR:
${formData.message || 'None provided'}
------------------------------------------------------
Care VMA Health Operations Liaison:
hello@carevmahealth.com | (214) 281-4464 | 6340 N Eldridge Pkwy N 117, Houston, TX 77041
Official Website: https://carevmahealth.com/
`;

    const blob = new Blob([summaryText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `care-vma-consultation-${formData.practiceName.toLowerCase().replace(/\s+/g, '-') || 'request'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      practiceName: '',
      contactName: '',
      email: '',
      phone: '',
      specialty: 'Family Medicine',
      providerCount: '2–4 Providers',
      selectedServices: ['patient-communication'],
      timeline: 'Within 2 Weeks',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="consultation" className="py-24 bg-slate-950 text-white border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Practice Context & Consultation Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
              <span>Direct Practice Consultation</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>No Obligation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Book a Practice Consultation
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Speak with a healthcare operations specialist to review your staffing model, calculate your administrative workload, and design a customized virtual medical assistant coverage plan.
            </p>

            {/* Practice Visual Snapshot */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative aspect-[16/9]">
              <img
                src="/src/assets/images/hero_clinic_workspace_1791913819213.jpg"
                alt="Modern healthcare consultation office and clinic operations"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-200">
                Tailored discovery calls for US private practices, health systems, and specialty clinics.
              </div>
            </div>

            {/* What to expect on the call */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                What We Cover on Your Discovery Session:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Evaluation of current telephone, portal, and charting queues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>EHR compatibility analysis and credentialing protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Customized pricing structure based on dedicated full-time or part-time hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Implementation timeline and candidate matching criteria</span>
                </li>
              </ul>
            </div>

            <div className="text-xs text-slate-400 space-y-1.5 pt-1">
              <p>
                Email: <a href="mailto:hello@carevmahealth.com" className="text-cyan-400 hover:underline">hello@carevmahealth.com</a>
              </p>
              <p>
                Phone: <a href="tel:+12142814464" className="text-cyan-400 hover:underline font-mono">(214) 281-4464</a>
              </p>
              <p>
                Address: <span className="text-slate-300">6340 N Eldridge Pkwy N 117, Houston, TX 77041</span>
              </p>
              <p className="text-[11px] text-slate-500 pt-0.5">Operating Hours: Monday – Friday, 8:00 AM – 6:00 PM EST</p>
            </div>
          </div>

          {/* Right Column: Intake Form or Confirmation State */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Practice Profile & Consultation Request
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Complete the details below to receive a customized coverage proposal.
                  </p>
                </div>

                {/* Practice & Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="practiceName" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Practice / Clinic Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="practiceName"
                      type="text"
                      value={formData.practiceName}
                      onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                      placeholder="e.g., Summit Internal Medicine"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                        errors.practiceName ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.practiceName && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.practiceName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Full Name & Role <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g., Dr. Jane Davis / Practice Manager"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                        errors.contactName ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.contactName && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.contactName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@yourpractice.com"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Phone Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Specialty & Provider Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="specialty" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Primary Clinical Specialty
                    </label>
                    <select
                      id="specialty"
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      {specialties.map((spec) => (
                        <option key={spec} value={spec} className="bg-slate-900">
                          {spec}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="providerCount" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Practice Size (Providers)
                    </label>
                    <select
                      id="providerCount"
                      value={formData.providerCount}
                      onChange={(e) => setFormData({ ...formData, providerCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="Solo Practitioner (1)" className="bg-slate-900">Solo Practitioner (1)</option>
                      <option value="2–4 Providers" className="bg-slate-900">2–4 Providers</option>
                      <option value="5–10 Providers" className="bg-slate-900">5–10 Providers</option>
                      <option value="11+ Providers" className="bg-slate-900">11+ Providers</option>
                    </select>
                  </div>
                </div>

                {/* Services Needed Multiselect */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Services You Wish to Explore <span className="text-cyan-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceOptions.map((opt) => {
                      const isChecked = formData.selectedServices.includes(opt.id);
                      return (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-slate-950 border-cyan-500/60 text-white'
                              : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleServiceToggle(opt.id)}
                            className="rounded border-slate-700 text-cyan-400 focus:ring-cyan-400 accent-cyan-400"
                          />
                          <span className="leading-snug">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.services}
                    </p>
                  )}
                </div>

                {/* Additional Notes & EHR Platform */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Current EHR Platform & Practice Workflow Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current EHR (e.g. Athena, Epic, eCW), hours of coverage needed, or specific pain points..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                {/* Transparent Technical Notice */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                  <strong className="text-slate-300">Form Integration Note:</strong> Form fields are validated on the client side with instant state confirmation. In production deployment, this submits to your practice CRM webhook or HIPAA-compliant intake endpoint.
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg shadow-lg shadow-cyan-950/40 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating & Processing...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success / Confirmation State */
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto shadow-lg shadow-cyan-950/50">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Consultation Request Confirmed
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Thank You, {formData.contactName}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                    We have received your practice inquiry for <strong>{formData.practiceName}</strong>. A Care VMA Health operations director will contact you via {formData.email} within one business day.
                  </p>
                </div>

                {/* Summary Snapshot Card */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-left text-xs space-y-2.5 max-w-lg mx-auto">
                  <div className="flex justify-between border-b border-slate-850 pb-2">
                    <span className="text-slate-400">Practice:</span>
                    <span className="text-white font-medium">{formData.practiceName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-850 pb-2">
                    <span className="text-slate-400">Specialty:</span>
                    <span className="text-white font-medium">{formData.specialty}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-850 pb-2">
                    <span className="text-slate-400">Practice Size:</span>
                    <span className="text-white font-medium">{formData.providerCount}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-850 pb-2">
                    <span className="text-slate-400">Contact Number:</span>
                    <span className="text-white font-medium">{formData.phone}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-400 block mb-1">Selected Focus:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {formData.selectedServices.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-cyan-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleDownloadSummary}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download Consultation Summary</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
