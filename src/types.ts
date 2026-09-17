export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  badge: string;
  headingParts: string[];
  highlightText: string;
  subtitle: string;
  ctaText: string;
  guarantee: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface AISystem {
  id: string;
  title: string;
  iconName: string;
}

export interface UseCase {
  label: string;
  iconName: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  ctaText: string;
  ctaStyle: 'primary' | 'dark' | 'outline';
  subNote: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  company: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  imageUrl: string;
  author?: string;
  authorDate?: string;
  featured?: boolean;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface PartnerLogo {
  name: string;
  iconType: 'text' | 'image';
}
