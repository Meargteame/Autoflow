import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  Send, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Terminal,
  Activity,
  ChevronRight
} from 'lucide-react';

interface PipelineStage {
  id: number;
  title: string;
  category: string;
  icon: React.ElementType;
  metric: string;
  metricLabel: string;
  description: string;
  attributes: { key: string; value: string }[];
  payload: Record<string, any>;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 0,
    title: "ICP Ingestion & Signal Filter",
    category: "Step 01",
    icon: Database,
    metric: "100%",
    metricLabel: "Deduplication",
    description: "Crawls live intent triggers, funding rounds, and verified tech footprints while filtering against your existing CRM database.",
    attributes: [
      { key: "Target Persona", value: "VP Sales / CRO / Head of Growth" },
      { key: "Buying Signal", value: "Hiring 4+ SDRs / Raised Series B" },
      { key: "CRM Suppression", value: "Automatic deduplication against HubSpot" },
      { key: "Filter Accuracy", value: "99.4% Verified Match" }
    ],
    payload: {
      account: "LinearTech Corp",
      domain: "lineartech.io",
      funding: "Series B ($18M)",
      headcount_growth: "+32% YoY",
      signal: "Job opening: 5x Account Executives",
      status: "FILTER_PASSED"
    }
  },
  {
    id: 1,
    title: "Waterfall Data Enrichment",
    category: "Step 02",
    icon: Cpu,
    metric: "98.2%",
    metricLabel: "Valid Work Email",
    description: "Stacks 8 data providers to uncover verified direct-dial mobiles, corporate emails, and individual podcast or interview quotes.",
    attributes: [
      { key: "Enrichment Stack", value: "Clay + Apollo + Prospeo + Custom Scraper" },
      { key: "Email Verification", value: "Zero-bounce SMTP handshake passed" },
      { key: "Personalization Hook", value: "Synthesized from latest podcast interview" },
      { key: "Processing Time", value: "1.1 seconds" }
    ],
    payload: {
      decision_maker: "Marcus Vance",
      title: "VP of Revenue Operations",
      email_verified: "marcus.vance@lineartech.io",
      hook: "Referenced your point on RevOps pipeline velocity on SaaS Breakthrough #142",
      smtp_status: "250_OK_DELIVERABLE"
    }
  },
  {
    id: 2,
    title: "Multi-Channel Outbound Dispatch",
    category: "Step 03",
    icon: Send,
    metric: "50 Inboxes",
    metricLabel: "Warm Pool Rotation",
    description: "Dispatches sequence across a rotated cluster of warmed secondary domains with human typing patterns to bypass spam filters.",
    attributes: [
      { key: "Inbox Infrastructure", value: "50 secondary domains with SPF/DKIM/DMARC" },
      { key: "Sending Speed", value: "Randomized human intervals (120s - 450s)" },
      { key: "Multi-Touch", value: "Email Step 1 + LinkedIn Profile Touch" },
      { key: "Deliverability", value: "99.8% Primary Inbox Placement" }
    ],
    payload: {
      dispatch_node: "outbound-eu-central-04",
      channel: "Email + LinkedIn View",
      spin_hash: "v3_variant_09",
      inbox_domain: "mail-linearreach.com",
      status: "SENT_PRIMARY_INBOX"
    }
  },
  {
    id: 3,
    title: "Qualification & Direct Booking",
    category: "Step 04",
    icon: Calendar,
    metric: "< 45s",
    metricLabel: "Response Latency",
    description: "Evaluates inbound replies, handles pricing and timing objections, and routes qualified prospects straight into your sales calendar.",
    attributes: [
      { key: "Objection Resolution", value: "Autonomous budget & timeline handling" },
      { key: "Calendar Allocation", value: "Round-robin AE booking via SavvyCal / Cal.com" },
      { key: "CRM Sync", value: "HubSpot Deal Stage updated in < 800ms" },
      { key: "Outcome", value: "Discovery call scheduled" }
    ],
    payload: {
      sentiment: "POSITIVE_INTEREST",
      qualification_score: "94/100",
      meeting_date: "Thursday @ 2:00 PM EST",
      assigned_rep: "Senior AE (Round-Robin)",
      crm_record: "https://app.hubspot.com/contacts/1849204"
    }
  }
];

export const HeroVisualizer: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(0);
  const activeStage = PIPELINE_STAGES[activeStageId];

  return (
    <div className="w-full rounded-xl bg-[#121620] border border-white/10 p-5 sm:p-6 overflow-hidden">
      {/* Console Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-medium text-white">
              autoflow_runtime_telemetry
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#94A3B8] hidden sm:inline">
            // v4.2.0 • 52/52 Domains Healthy
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
          <span>Deliverability:</span>
          <span className="text-emerald-400 font-semibold">99.8%</span>
        </div>
      </div>

      {/* 4-Stage Stepper Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {PIPELINE_STAGES.map((stage) => {
          const isSelected = activeStageId === stage.id;
          const Icon = stage.icon;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`text-left p-3 rounded-lg border transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[#181E2C] border-[#00D2E0]/50 text-white'
                  : 'bg-[#0E1118] border-white/[0.06] text-[#94A3B8] hover:text-white hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono uppercase text-[#94A3B8]">
                  {stage.category}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#00D2E0]' : 'text-[#64748B]'}`} />
              </div>
              <div className="text-xs font-bold text-white truncate">
                {stage.title.split(' ')[0]} {stage.title.split(' ')[1]}
              </div>
              <div className="text-[10px] font-mono text-emerald-400 mt-1">
                {stage.metric} {stage.metricLabel}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Grid: Architecture Specs + Real Payload */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Technical Architecture & System Specs */}
        <div className="lg:col-span-7 bg-[#0E1118] rounded-lg border border-white/[0.06] p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#00D2E0] font-medium">
                {activeStage.category} // Architectural Specs
              </span>
              <span className="text-xs font-mono text-[#94A3B8]">
                Latency: &lt; 1.2s
              </span>
            </div>

            <h3 className="font-heading font-bold text-base text-white mb-2">
              {activeStage.title}
            </h3>

            <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
              {activeStage.description}
            </p>

            <div className="space-y-2">
              {activeStage.attributes.map((attr, idx) => (
                <div key={idx} className="flex items-start justify-between text-xs py-1 border-b border-white/[0.04]">
                  <span className="text-[#94A3B8] font-mono text-[11px]">{attr.key}:</span>
                  <span className="text-white font-medium text-right max-w-[60%] truncate">{attr.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-2 flex items-center justify-between border-t border-white/[0.06]">
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#94A3B8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D2E0]" />
              <span>Full compliance & deduplication check active</span>
            </div>

            <button
              onClick={() => setActiveStageId((prev) => (prev + 1) % PIPELINE_STAGES.length)}
              className="text-xs font-mono text-[#00D2E0] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Next Stage</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Technical Payload Stream */}
        <div className="lg:col-span-5 bg-[#080A0E] rounded-lg border border-white/[0.06] p-4 flex flex-col font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06]">
            <span className="text-[11px] text-[#94A3B8]">
              // live_payload_buffer
            </span>
            <span className="text-[10px] text-emerald-400">
              STATUS: 200 OK
            </span>
          </div>

          <div className="bg-[#0B0D13] p-3 rounded border border-white/[0.04] text-[11px] leading-relaxed text-[#94A3B8] overflow-x-auto">
            <pre className="text-white/90">
              {JSON.stringify(activeStage.payload, null, 2)}
            </pre>
          </div>

          <div className="mt-auto pt-3 flex items-center justify-between text-[10px] text-[#64748B]">
            <span>Schema: B2B_OUTBOUND_V4</span>
            <span>Security: AES-256 Encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
};
