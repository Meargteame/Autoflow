import { NavLink, PricingTier, Testimonial, FAQItem, TeamMember, BlogPost, FooterColumn, AISystem, UseCase, PartnerLogo } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'AI Systems', href: '#ai-systems' },
  { label: 'About', href: '#team' },
  { label: 'Advice', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const PHONE_NUMBER = '0333 051 0634';

export const HERO_CONTENT = {
  badge: 'DONE FOR YOU AI SETUP',
  subtitle: 'AI fully integrated into business within 90 days.',
  ctaText: 'Book a Call',
  guarantee: 'Money back guarantee*',
};

export const FEATURES_CONTENT = {
  badge: 'MAIN FEATURES',
  description: 'At The AI Automation Agency we tell you exactly what to do, what systems to use, and why they work. Then, we help you put it all in place.',
  leftCard: {
    text: 'We have whole of market access which means we will propose and integrate the most cost effective AI automations. We also create custom built agents without having to pay expensive software companies for the same agents.',
    cta: 'Book a Call',
  },
  rightSection: {
    title: 'We Know the Systems that Get Results',
    description: 'The results speak for themselves: Our clients have generated over £45 million in combined revenue in the last two years alone, powered by the automation strategies and systems we designed and implemented.',
    subtext: 'We know exactly what systems you need as we have whole of market access.',
    cta: 'Book a Call',
  },
};

export const INTEGRATION_LOGOS = [
  'LinkedIn', 'Gmail', 'Outlook', 'Zapier', 'Make',
  'Slack', 'HubSpot', 'Salesforce', 'GitHub', 'Facebook',
  'Pinterest', 'Google Ads', 'Notion',
];

export const HANDS_OFF_CONTENT = {
  title: 'We create hands-off AI systems for you,',
  description: 'We build automation that plugs straight into your existing systems for fast, disruption-free deployment. With proven processes and expert support, your team adopts new tools smoothly and confidently.',
  trapTitle: "Don't fall into the AI trap",
  trapCta: "Let's find out",
  trapDescription: "Many AI systems cost large monthly fees but what most businesses don't know is that the same agents we can build and deploy for a fraction of the price. AI sales bots, customer service, aftercare, job management and field management agents we will build specifically for your business needs.",
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'HubSpot', iconType: 'text' },
  { name: 'Salesforce', iconType: 'text' },
  { name: 'Zapier', iconType: 'text' },
  { name: 'Zoho', iconType: 'text' },
  { name: 'monday.com', iconType: 'text' },
  { name: 'UiPath', iconType: 'text' },
  { name: 'Make', iconType: 'text' },
  { name: 'Pipedrive', iconType: 'text' },
];

export const AI_SYSTEMS: AISystem[] = [
  { id: 'crm', title: 'CRM Automation', iconName: 'Zap' },
  { id: 'financial', title: 'Financial Automation', iconName: 'FileText' },
  { id: 'workflow', title: 'Workflow Automation', iconName: 'Settings' },
  { id: 'marketing', title: 'Marketing Automation', iconName: 'Target' },
  { id: 'chatbots', title: 'Chatbots', iconName: 'MessageCircle' },
  { id: 'bpa', title: 'Business Process Automation', iconName: 'GitBranch' },
  { id: 'hr', title: 'HR Automation', iconName: 'ClipboardList' },
];

export const USE_CASES: UseCase[] = [
  { label: 'Sales', iconName: 'ShoppingBag' },
  { label: 'HR', iconName: 'Users' },
  { label: 'Prediction', iconName: 'TrendingUp' },
  { label: 'Marketing', iconName: 'Megaphone' },
  { label: 'Personalisation', iconName: 'UserCheck' },
  { label: 'Video', iconName: 'Play' },
  { label: 'Navigation', iconName: 'Map' },
  { label: 'Analytics', iconName: 'BarChart3' },
  { label: 'Portfolio', iconName: 'Briefcase' },
  { label: 'Ecommerce', iconName: 'ShoppingCart' },
  { label: 'Text Content', iconName: 'FileText' },
  { label: 'Popups', iconName: 'Layers' },
  { label: 'Insights', iconName: 'Lightbulb' },
  { label: 'Charts', iconName: 'PieChart' },
  { label: 'Blog Posts', iconName: 'Edit3' },
  { label: 'Divider', iconName: 'Minus' },
  { label: 'Content', iconName: 'FileText' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'fast-track',
    name: '90 day fast-track',
    price: '£call',
    period: '/ 3 mo',
    description: 'Done-for-you in 90 days with ongoing support available',
    ctaText: 'Book a Call >',
    ctaStyle: 'primary',
    subNote: 'Money back guarantee*',
    features: [
      '90 days done-for-you',
      'Weekly progress calls',
      'Full system build',
      'Training & handover',
      'ROI guaranteed',
    ],
  },
  {
    id: 'retainer',
    name: 'Retainer',
    price: '£call',
    period: '/ mo',
    description: 'Ongoing monthly management with the latest updates',
    ctaText: 'Book a Call >',
    ctaStyle: 'primary',
    subNote: 'Hands off for you. Hands on for us',
    popular: true,
    features: [
      'Expert AI systems long term',
      'Weekly progress calls',
      'Continuous optimization',
      'Priority support',
      'Massive ROI long term',
    ],
  },
  {
    id: 'support',
    name: 'Support',
    price: '£87',
    period: '/ week',
    description: 'Get experts on hand daily for AI support',
    ctaText: 'Get started',
    ctaStyle: 'outline',
    subNote: 'Billed monthly',
    features: [
      'Access to AI experts daily',
      'Help for one brand/company',
      'Email & chat support',
      'Monthly strategy review',
      'Help with integration',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    text: "I've seen plenty of \"AI solutions,\" but this team actually delivers results. They combine strategy with technology to solve real business problems. I recommend them to any business serious about future-proofing.",
    author: 'Business Owner',
    company: 'Online Pharmacy',
    rating: 5,
  },
  {
    id: 'test-2',
    text: 'This team made AI simple and accessible for my small business. They automated repetitive tasks and saved us hours every week. I finally have time to focus on real, meaningful paperwork.',
    author: 'Small Business Owner',
    company: 'Local Services',
    rating: 5,
  },
  {
    id: 'test-3',
    text: "We needed AI but didn't know where to start—this agency guided us every step. Their custom automation boosted our sales team's efficiency and streamlined operations. The ROI was almost immediate.",
    author: 'Sales Director',
    company: 'Solar Panel Client',
    rating: 5,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What exactly does The AI Automation Agency offer?',
    answer: 'We provide end-to-end AI automation services including custom AI agent development, CRM automation, chatbot deployment, workflow optimization, and strategic consulting. We handle everything from planning to deployment, ensuring AI is fully integrated into your business within 90 days.',
  },
  {
    question: 'Do I need technical expertise to work with you?',
    answer: 'Not at all. We handle all the technical implementation. Our team works closely with you to understand your business needs and then builds, deploys, and manages the AI systems on your behalf. You get the results without needing to understand the technology.',
  },
  {
    question: 'Which types of businesses benefit most from your advisory?',
    answer: 'We work with businesses of all sizes across various industries including retail, financial services, healthcare, logistics, and professional services. Any business looking to automate repetitive processes, improve customer engagement, or streamline operations can benefit significantly.',
  },
  {
    question: 'Can you guarantee automation will increase my revenue or productivity?',
    answer: 'Yes — we offer a money-back guarantee on our 90-day fast-track package. Our track record shows that clients typically see significant improvements in efficiency and revenue within the first 90 days of implementation.',
  },
  {
    question: 'What kinds of processes can be automated?',
    answer: 'Almost any repetitive business process can be automated: customer service responses, lead qualification, appointment scheduling, data entry, invoice processing, HR onboarding, marketing campaigns, reporting, and much more.',
  },
  {
    question: 'Will automation replace my employees?',
    answer: 'No. Our automation solutions are designed to augment your team, not replace them. By automating repetitive tasks, your employees can focus on higher-value work that requires human creativity, judgment, and relationship building.',
  },
  {
    question: 'How do you help with selecting automation software or vendors?',
    answer: 'We have whole-of-market access, meaning we evaluate all available tools and platforms to find the most cost-effective solution for your specific needs. We are not tied to any single vendor, so our recommendations are always in your best interest.',
  },
  {
    question: 'What does your advisory roadmap look like?',
    answer: 'We start with a discovery call to understand your needs, then create a detailed automation roadmap. This includes system architecture planning, implementation timeline, expected ROI projections, and ongoing support structure. Everything is customized to your business.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Myles Robinson',
    role: 'Founder & Strategist',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    socials: {
      linkedin: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 'member-2',
    name: 'Jamie Robinson',
    role: 'Strategist',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    socials: {
      linkedin: '#',
      facebook: '#',
      twitter: '#',
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Why Most UK Companies',
    excerpt: 'Artificial intelligence (AI) is transforming the way UK companies operate, promising faster processes, lower costs, and better customer experiences. Yet despite the hype, most UK',
    date: 'November 11, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=80',
    author: 'Myles Robinson',
    authorDate: 'November 11, 2025',
    featured: true,
  },
  {
    id: 'post-2',
    title: 'Why Choose AI Automation For',
    date: 'October 23, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'post-3',
    title: 'AI in Business',
    date: 'October 31, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'post-4',
    title: 'How AI Is Transforming UK',
    date: 'November 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80',
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'PRODUCT',
    links: [
      { label: 'Ai Automation', href: '#' },
      { label: 'Systems', href: '#' },
      { label: 'Packages', href: '#pricing' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About us', href: '#team' },
      { label: 'Contact', href: '#contact' },
      { label: '0333 051 0634', href: 'tel:03330510634' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Blog', href: '#blog' },
      { label: 'Help center', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
];
