/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TrustSecuritySection } from './components/TrustSecuritySection';
import { FAQSection } from './components/FAQSection';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForIntake, setSelectedServiceForIntake] = useState<string>('Patient Communication');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForIntake(serviceName);
    }
    setIsModalOpen(true);
  };

  const handleScrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Fixed Top Bar Navigation */}
      <Navigation onOpenConsultation={handleScrollToConsultation} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section with Interactive 3D Scene */}
        <Hero onBookConsultation={handleScrollToConsultation} />

        {/* 6 Core Virtual Medical Assistant Services */}
        <ServicesSection
          onSelectService={(serviceId) => {
            const formatted = serviceId
              .split('-')
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(' ');
            handleOpenConsultation(formatted);
          }}
        />

        {/* Healthcare Provider Benefits & Practice Time Calculator */}
        <BenefitsSection onBookConsultation={handleScrollToConsultation} />

        {/* How It Works & Structured Onboarding */}
        <HowItWorksSection onBookConsultation={handleScrollToConsultation} />

        {/* Trust, Privacy & Data Security Architecture */}
        <TrustSecuritySection />

        {/* Frequently Asked Questions */}
        <FAQSection onBookConsultation={handleScrollToConsultation} />

        {/* Detailed Consultation & Practice Profile Intake Form */}
        <ConsultationForm />
      </main>

      {/* Professional Healthcare Footer */}
      <Footer onOpenConsultation={handleScrollToConsultation} />

      {/* Quick Booking Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={selectedServiceForIntake}
      />
    </div>
  );
}
