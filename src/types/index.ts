export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  ehrTasks: string[];
  iconName: string;
}

export interface PracticeSpecialty {
  name: string;
  description: string;
  focusAreas: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'onboarding' | 'security' | 'operations' | 'technology';
}

export interface ConsultationFormData {
  practiceName: string;
  contactName: string;
  email: string;
  phone: string;
  specialty: string;
  providerCount: string;
  selectedServices: string[];
  timeline: string;
  message: string;
}
