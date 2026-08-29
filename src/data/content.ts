import { ServiceOffering, WorkflowStep, CaseStudy, SimulatedLead } from '../types';

export const HERO_METRICS = [
  {
    value: "4.8x",
    label: "Meeting Rate Increase",
    subtext: "vs traditional manual SDR outbound",
    trend: "+380% Qualified pipeline"
  },
  {
    value: "< 60s",
    label: "Lead Response Speed",
    subtext: "Instant qualification & calendar routing",
    trend: "24/7 Multi-time zone"
  },
  {
    value: "100%",
    label: "Automated Pipeline",
    subtext: "Zero manual prospecting friction",
    trend: "Hands-off lead generation"
  },
  {
    value: "0",
    label: "Manual Prospecting Hours",
    subtext: "Full autonomous infrastructure",
    trend: "100+ SDR hours saved /mo"
  }
];

export const INTEGRATIONS = [
  { name: "HubSpot", category: "CRM Sync", status: "Native 2-Way" },
  { name: "Salesforce", category: "Enterprise CRM", status: "Bi-directional" },
  { name: "GoHighLevel", category: "Agency CRM", status: "Instant Webhook" },
  { name: "LinkedIn Sales Nav", category: "Scraping & DM", status: "Cloud Engine" },
  { name: "Apollo.io", category: "B2B Intent Data", status: "API Enriched" },
  { name: "Clay.com", category: "Waterfall Enrichment", status: "Custom Stack" },
  { name: "Instantly / Smartlead", category: "Cold Inbox Pool", status: "Warm Rotator" },
  { name: "OpenAI GPT-4o", category: "Cognitive Engine", status: "Fine-Tuned" },
];

export const SERVICES_DATA: ServiceOffering[] = [
  {
    id: "outbound-engine",
    title: "Autonomous Outbound Engine",
    tagline: "Multi-Channel AI DM & Cold Email Routing",
    description: "Algorithmic outbound infrastructure that writes hyper-personalized messages based on recent news, hiring surges, and funding signals — sent from a warm pool of 50+ secondary domains.",
    badge: "Featured Core Engine",
    iconName: "Zap",
    featured: true,
    metrics: { label: "Average Reply Rate", value: "8.4% Verified" },
    features: [
      "Dynamic AI spin-syntax preventing inbox spam filters",
      "Intent-triggered multi-channel routing (Email + LinkedIn + Voice drop)",
      "Automated domain reputation monitoring & warm-up rotator",
      "Real-time sentiment categorization (Interested, Objection, OOO, Referral)"
    ],
    samplePayload: {
      type: "Autonomous Outreach Spec",
      details: {
        "Target Persona": "VP of Engineering / CTO",
        "Trigger Signal": "Series B Funding ($28M) + 14 Tech Job Openings",
        "Personalization Factor": "Recent GitHub repo release + Podcast quote",
        "Deliverability Health": "99.8% SPF/DKIM/DMARC",
        "Projected Replies": "14-19 Qualified Bookings / mo"
      }
    }
  },
  {
    id: "qualification-bot",
    title: "AI Lead Qualification Bot",
    tagline: "Filters Non-ICP Leads Instantly",
    description: "Cognitive AI agent that engages incoming responses 24/7, handles objections, clarifies budget & tech-stack requirements, and filters out bad-fit prospects before your calendar.",
    badge: "0-100 ICP Scoring",
    iconName: "Bot",
    metrics: { label: "No-Show Reduction", value: "72% Lower" },
    features: [
      "Conversational objection handling trained on your top sales reps",
      "Strict ICP rule filtering (Company size, revenue, tech stack, geography)",
      "Instant calendar injection when qualification threshold exceeds 85/100",
      "Automated fallback routing for warm referrals & nurture sequences"
    ],
    samplePayload: {
      type: "Qualification Logic",
      details: {
        "ICP Fit Score": "94/100 (Enterprise Match)",
        "Budget Validated": "$50k - $150k ARR tier",
        "Authority Verified": "VP Decision Maker",
        "Action Taken": "Calendar locked for Tuesday 2:00 PM EST"
      }
    }
  },
  {
    id: "data-enrichment",
    title: "Real-Time Data Scraping & Enrichment",
    tagline: "Waterfall Intent & Contact Synthesis",
    description: "Proprietary waterfall enrichment stacking 8+ premier data providers to uncover verified direct-dial mobiles, verified corporate emails, and active buying signals.",
    badge: "Waterfall Stack",
    iconName: "Database",
    metrics: { label: "Contact Accuracy", value: "98.2% Direct" },
    features: [
      "Live LinkedIn, Crunchbase, Github, and job board scrapers",
      "Waterfall verification: Zero bounce guarantee across 5 verification checks",
      "Firmographic, technographic, and hiring intent telemetry",
      "Automatic deduplication against your active CRM pipeline"
    ],
    samplePayload: {
      type: "Enrichment Data Object",
      details: {
        "Verified Work Email": "alex.m@scalevelocity.ai (100% Valid)",
        "Direct Mobile": "+1 (415) 892-XXXX",
        "Tech Stack Detected": "Snowflake, Datadog, Next.js, Stripe",
        "Buying Trigger": "Hiring 5 Enterprise AE positions"
      }
    }
  },
  {
    id: "crm-sync",
    title: "CRM & Calendar Integration",
    tagline: "Zero-Lag Pipeline Synchronization",
    description: "End-to-end webhook architecture syncing qualified leads, conversation transcripts, and booked appointments directly into HubSpot, Salesforce, or HighLevel.",
    badge: "Zero Latency",
    iconName: "Workflow",
    metrics: { label: "Sync Latency", value: "< 800ms" },
    features: [
      "Custom field mapping with full AI conversation audit trail",
      "Smart calendar buffer management & round-robin rep assignment",
      "Automated pre-meeting reminder sequences (SMS + Email)",
      "Instant Slack / Discord alerts when high-value accounts book"
    ],
    samplePayload: {
      type: "Sync Status",
      details: {
        "Destination CRM": "HubSpot Enterprise",
        "Deal Stage": "Qualified Discovery Meeting Booked",
        "Rep Assigned": "Senior Account Executive (Round-Robin)",
        "Slack Notification": "Sent to #revenue-wins in 0.4s"
      }
    }
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Scrape & Target Filter",
    subtitle: "Precision Account Sourcing",
    description: "Autonomous crawlers harvest high-intent accounts fitting your exact ICP criteria—filtering by headcount growth, funding stage, executive hires, and active software footprints.",
    badge: "Step 01 • Intent Targeting",
    icon: "Filter",
    executionTime: "~0.8s per target",
    technicalDetails: [
      "Scrapes live job posts & tech stacks",
      "Excludes existing CRM clients & churned accounts",
      "Filters for exact decision-maker roles (CEO, CMO, VP Sales, CTO)"
    ],
    livePreview: {
      inputTitle: "Raw Ingestion Filter",
      inputData: {
        "Industry": "B2B SaaS / FinTech",
        "Headcount": "50-500 employees",
        "Funding": "Series A / B ($10M+)",
        "Target Titles": "VP Revenue / Chief Commercial Officer"
      },
      aiAction: "Filtering 14,200 accounts down to top 850 high-intent targets...",
      outputTitle: "Qualified Target Record",
      outputData: {
        "Company": "HyperGrowth Data Systems",
        "Match Score": "98.5%",
        "Identified Prospect": "Sarah Jenkins, VP Growth",
        "Primary Trigger": "Recently posted 4 SDR openings this week"
      }
    }
  },
  {
    stepNumber: "02",
    title: "AI Deep Personalization",
    subtitle: "Contextual Content Synthesis",
    description: "Our fine-tuned LLM engine synthesizes recent podcast appearances, quarterly reports, and industry triggers into tailored, natural 2-3 sentence value propositions.",
    badge: "Step 02 • Context Synthesis",
    icon: "Cpu",
    executionTime: "~1.2s per prospect",
    technicalDetails: [
      "No generic AI templates or robotic phrasing",
      "Dynamic value proposition matched to prospect pain point",
      "Multiple variations generated for algorithmic A/B testing"
    ],
    livePreview: {
      inputTitle: "Enriched Context Vector",
      inputData: {
        "Podcast Topic": "Discussed reducing SDR ramp time on SaaStr Ep. 412",
        "Product Launch": "Released AI Copilot for logistics last Tuesday",
        "Competitor Mention": "Recently migrated away from legacy outreach tool"
      },
      aiAction: "Synthesizing custom hook addressing outbound efficiency...",
      outputTitle: "Generated Dynamic Angle",
      outputData: {
        "Subject": "quick thought on SaaStr ep 412 + outbound ramp",
        "Custom Hook": "Loved your point about keeping SDR onboarding under 2 weeks. Built an automated qualification pipeline specifically for teams scaling sales headcount...",
        "Spam Score": "0.00 / 10.00 (Clean)"
      }
    }
  },
  {
    stepNumber: "03",
    title: "Multi-Touch Autonomous Outreach",
    subtitle: "Warm Inbox Multi-Channel Routing",
    description: "Sequences launch across rotating sender domains and authenticated LinkedIn touchpoints. Delivery cadence mimics human typing behavior to maintain 99%+ deliverability.",
    badge: "Step 03 • Coordinated Outreach",
    icon: "Send",
    executionTime: "Automated schedule",
    technicalDetails: [
      "Spread across 40+ secondary domain mailboxes",
      "Dynamic human-like delay intervals (14-38 minutes)",
      "Automated follow-ups that adapt based on recipient interactions"
    ],
    livePreview: {
      inputTitle: "Dispatch Schedule",
      inputData: {
        "Channel 1": "Cold Email via Domain Pool #04 (DKIM Verified)",
        "Channel 2": "LinkedIn Soft Profile View + Connection Hook",
        "Channel 3": "Follow-up Thread with Case Study Asset"
      },
      aiAction: "Monitoring replies, tracking open sentiment, pausing on bounce...",
      outputTitle: "Live Engagement Telemetry",
      outputData: {
        "Delivered": "100%",
        "Recipient Action": "Opened in 4 minutes, clicked case link",
        "Reply Received": "'This looks relevant. Are you free Thursday afternoon?'"
      }
    }
  },
  {
    stepNumber: "04",
    title: "Instant Qualification & Booked Call",
    subtitle: "Zero-Human Calendar Locking",
    description: "When the prospect replies, the conversational qualification agent answers questions, overcomes scheduling hesitations, and locks the discovery call directly onto your calendar.",
    badge: "Step 04 • Revenue Conversion",
    icon: "CalendarCheck",
    executionTime: "< 45s response",
    technicalDetails: [
      "Instant response within 60 seconds of prospect reply",
      "Direct Google Meet / Zoom link generation",
      "HubSpot/Salesforce deal creation with complete AI research brief"
    ],
    livePreview: {
      inputTitle: "Incoming Prospect Reply",
      inputData: {
        "Reply Text": "'Yes, Thursday 2pm works. Send over an invite.'",
        "Sentiment": "High Buying Intent (Score: 96/100)",
        "Action Required": "Book Discovery Meeting"
      },
      aiAction: "Generating calendar event, dispatching confirmation email & SMS...",
      outputTitle: "Final Pipeline Outcome",
      outputData: {
        "Meeting Status": "CONFIRMED & LOCKED",
        "Calendar Event": "AutoFlow AI Strategy Demo - Thursday 2:00 PM EST",
        "CRM Deal Created": "$45,000 Expected Value Pipeline",
        "Brief Sent": "Pre-call research PDF sent to AE Slack channel"
      }
    }
  }
];

export const SAMPLE_SIMULATED_LEADS: SimulatedLead[] = [
  {
    id: "lead-1",
    name: "Marcus Vance",
    title: "Chief Revenue Officer",
    company: "CloudVortex Technologies",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    status: "booked",
    icpScore: 96,
    channel: "Multi-Channel",
    dealPotential: "$65,000 ARR",
    timestamp: "Just now",
    intentSignals: ["Series B ($32M)", "Hiring 6 SDRs", "Tech: Salesforce + Apollo"]
  },
  {
    id: "lead-2",
    name: "Elena Rostova",
    title: "VP of Business Development",
    company: "FinScale Dynamics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    status: "personalized",
    icpScore: 92,
    channel: "Email",
    dealPotential: "$48,000 ARR",
    timestamp: "2m ago",
    intentSignals: ["Expanding to US Market", "Using HubSpot Enterprise"]
  },
  {
    id: "lead-3",
    name: "David Sterling",
    title: "Managing Director & Founder",
    company: "Apex Capital Partners",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    status: "engaged",
    icpScore: 89,
    channel: "LinkedIn",
    dealPotential: "$90,000 ARR",
    timestamp: "5m ago",
    intentSignals: ["Active M&A Mandate", "Executive search active"]
  },
  {
    id: "lead-4",
    name: "Sophia Chen",
    title: "Head of Growth & Demand Gen",
    company: "Aetherial AI Platform",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    status: "enriching",
    icpScore: 94,
    channel: "Multi-Channel",
    dealPotential: "$52,000 ARR",
    timestamp: "8m ago",
    intentSignals: ["Launched Enterprise Tier", "Website traffic +140% MoM"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    companyName: "DevPulse Analytics",
    industry: "Developer Tooling SaaS",
    logoText: "DEVPULSE",
    highlightStat: "+420%",
    highlightLabel: "Qualified Demo Volume in 60 Days",
    challenge: "Internal SDR team was spending 65% of their working hours manually searching LinkedIn and copying contact data into spreadsheets.",
    solution: "Deployed AutoFlow Autonomous Engine targeting VP of Eng and Tech Leads with Github release intent scraping.",
    results: {
      meetingsBooked: "47 Meetings / mo",
      pipelineGenerated: "$1.4M Pipeline",
      replyRate: "9.2% Positive",
      roi: "8.4x First Quarter"
    },
    quote: "AutoFlow replaced 3 open SDR headcount requisitions and delivered twice the meeting pipeline in our first 60 days. The AI qualification bot ensures zero time is wasted.",
    author: "Liam Thorne",
    role: "VP of Sales, DevPulse"
  },
  {
    id: "case-2",
    companyName: "Synthex Capital",
    industry: "B2B Financial Services",
    logoText: "SYNTHEX",
    highlightStat: "38 Meetings",
    highlightLabel: "Booked in First 30 Days of Deployment",
    challenge: "High customer acquisition cost ($3,200/meeting) using traditional agency retainers and low response rates from generic cold emails.",
    solution: "Built high-intent waterfall enrichment with custom technographic triggers and sub-60-second AI objection handling.",
    results: {
      meetingsBooked: "38 Enterprise Demos",
      pipelineGenerated: "$2.1M New Pipeline",
      replyRate: "11.4% Reply Rate",
      roi: "12.1x Blended ROI"
    },
    quote: "The speed to response is game changing. When a prospect replies asking about compliance, the bot handles it immediately and has them booked on our calendar before competitors even open the email.",
    author: "Claire Moreau",
    role: "Chief Commercial Officer, Synthex"
  },
  {
    id: "case-3",
    companyName: "Nexus Commerce",
    industry: "Enterprise Logistics Infrastructure",
    logoText: "NEXUS LOGISTICS",
    highlightStat: "$3.8M",
    highlightLabel: "Closed-Won Pipeline Attributed in 90 Days",
    challenge: "Scaling sales globally required outreach in European and US timezones, but hiring distributed teams was too slow and expensive.",
    solution: "AutoFlow 24/7 autonomous multi-channel engine running across 60 secondary inbox pools with timezone-aware delivery.",
    results: {
      meetingsBooked: "62 Qualified Calls",
      pipelineGenerated: "$3.8M Attributed",
      replyRate: "8.7% Avg Reply",
      roi: "9.6x ROI Ratio"
    },
    quote: "We expanded into North America completely autonomously. The infrastructure works seamlessly around the clock.",
    author: "Julian Richter",
    role: "Global Head of Revenue, Nexus"
  }
];

export const FAQ_ITEMS = [
  {
    question: "How does AutoFlow protect our primary domain reputation?",
    answer: "We never send cold outreach from your primary corporate email domain. We purchase, configure, and authenticate 20 to 50+ secondary lookalike domains with full SPF, DKIM, DMARC, and Custom Tracking Domains. Each domain is warmed up algorithmically for 14-21 days before sending a single prospect email."
  },
  {
    question: "What makes your AI personalization different from generic templates?",
    answer: "Most automated tools simply merge 'Hi {{firstName}} at {{company}}'. AutoFlow pulls live signals: recent executive podcast interviews, hiring posts, tech stack migrations, and quarterly filings to generate genuine 2-sentence context hooks tailored to each specific buyer."
  },
  {
    question: "How does the AI Lead Qualification Bot handle objections?",
    answer: "Our qualification engine is fine-tuned on your best sales playbook and objection matrix (pricing tiers, existing competitor contracts, timing objections). If a prospect is out-of-scope, it politely routes them away; if they are qualified, it locks the meeting on your calendar in under 60 seconds."
  },
  {
    question: "Which CRMs and calendars do you support?",
    answer: "We offer native bidirectional synchronization with HubSpot, Salesforce, GoHighLevel, Pipedrive, Close, Google Calendar, and Microsoft 365 Outlook. Every booked call creates a deal card with full transcript history and an executive research brief."
  },
  {
    question: "What happens during the Automation Audit call?",
    answer: "In this 30-minute session, we inspect your current outbound bottleneck, identify high-intent data sources for your target ICP, calculate your realistic pipeline ceiling, and show you the exact system architecture blueprint we would implement for your sales team."
  }
];
