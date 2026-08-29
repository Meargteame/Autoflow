export interface ServiceOffering {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  metrics: { label: string; value: string };
  features: string[];
  samplePayload?: {
    type: string;
    details: Record<string, string | number | boolean>;
  };
  featured?: boolean;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: string;
  technicalDetails: string[];
  executionTime: string;
  livePreview: {
    inputTitle: string;
    inputData: Record<string, string>;
    aiAction: string;
    outputTitle: string;
    outputData: Record<string, string | number>;
  };
}

export interface CaseStudy {
  id: string;
  companyName: string;
  industry: string;
  logoText: string;
  highlightStat: string;
  highlightLabel: string;
  challenge: string;
  solution: string;
  results: {
    meetingsBooked: string;
    pipelineGenerated: string;
    replyRate: string;
    roi: string;
  };
  quote: string;
  author: string;
  role: string;
}

export interface SimulatedLead {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  status: 'scraped' | 'enriching' | 'personalized' | 'engaged' | 'booked';
  icpScore: number;
  channel: 'Email' | 'LinkedIn' | 'Multi-Channel';
  dealPotential: string;
  timestamp: string;
  intentSignals: string[];
}

export interface AuditFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  companyWebsite: string;
  targetIcp: string;
  monthlyOutreachVolume: string;
  currentCrm: string;
  selectedDate: string;
  selectedTimeSlot: string;
  customNotes?: string;
}
