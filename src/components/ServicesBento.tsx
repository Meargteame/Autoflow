import React, { useState } from 'react';
import { 
  Zap, 
  Bot, 
  Database, 
  Workflow, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Send,
  Layers,
  Calendar,
  Lock
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceOffering } from '../types';

interface ServicesBentoProps {
  onOpenBooking: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('outbound-engine');
  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="services-section" className="relative py-20 md:py-24 bg-[#0B0D13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121620] border border-white/10 text-xs font-mono text-[#94A3B8] mb-4">
              <span>Full-Stack Outbound Capabilities</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Engineered for Pipeline Volume. <br className="hidden sm:inline" />
              Built for Deliverability.
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
              We replace brittle manual SDR workflows with managed outbound infrastructure that targets verified decision-makers and books meetings around the clock.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="self-start md:self-auto px-5 py-2.5 rounded-lg font-heading font-semibold text-xs sm:text-sm text-[#0B0D13] bg-[#00D2E0] hover:bg-[#00D2E0]/90 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Request Architecture Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid (4 Clean Architectural Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Card 1: Featured - Autonomous Outbound Engine (8 cols) */}
          <div className="md:col-span-12 lg:col-span-8 rounded-xl bg-[#121620] border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#181E2C] border border-white/10 flex items-center justify-center text-[#00D2E0]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D2E0] font-semibold block">
                    Core Outbound Engine
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Autonomous Outbound Infrastructure
                  </h3>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-medium">
                8.4% Average Verified Reply
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Multi-channel cold email and LinkedIn touchpoints powered by verified intent signals. Dispatched across a pool of 50+ secondary warm inboxes with automated domain health monitoring.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0E1118] border border-white/[0.04]">
                <CheckCircle2 className="w-4 h-4 text-[#00D2E0] shrink-0 mt-0.5" />
                <span className="text-xs text-[#F8FAFC]/90">
                  Dynamic spin-syntax protecting domain reputation
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0E1118] border border-white/[0.04]">
                <CheckCircle2 className="w-4 h-4 text-[#00D2E0] shrink-0 mt-0.5" />
                <span className="text-xs text-[#F8FAFC]/90">
                  Intent-triggered multi-channel routing (Email + LinkedIn)
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0E1118] border border-white/[0.04]">
                <CheckCircle2 className="w-4 h-4 text-[#00D2E0] shrink-0 mt-0.5" />
                <span className="text-xs text-[#F8FAFC]/90">
                  Continuous SPF, DKIM, and DMARC health rotation
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0E1118] border border-white/[0.04]">
                <CheckCircle2 className="w-4 h-4 text-[#00D2E0] shrink-0 mt-0.5" />
                <span className="text-xs text-[#F8FAFC]/90">
                  Automated sentiment sorting (Interested, Referral, OOO)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono text-[#94A3B8]">
              <span>Throughput: Up to 15,000 personalized touches/mo</span>
              <span className="text-[#00D2E0]">Full DNS Isolation</span>
            </div>
          </div>

          {/* Card 2: Waterfall Enrichment (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 rounded-xl bg-[#121620] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#181E2C] border border-white/10 flex items-center justify-center text-[#00D2E0] mb-4">
                <Database className="w-5 h-5" />
              </div>

              <span className="text-[10px] font-mono uppercase text-[#94A3B8] font-semibold block mb-1">
                Data Precision
              </span>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Waterfall Enrichment
              </h3>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                We stack 8 tier-one data providers in cascade order to uncover valid corporate emails, direct mobiles, and verified active tech stacks.
              </p>

              <div className="space-y-2 mb-4">
                <div className="text-xs font-mono text-white/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2E0]" />
                  <span>Zero-bounce SMTP validation</span>
                </div>
                <div className="text-xs font-mono text-white/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2E0]" />
                  <span>Technographic & hiring signals</span>
                </div>
                <div className="text-xs font-mono text-white/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2E0]" />
                  <span>Real-time executive job changes</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-[#94A3B8]">Accuracy Guarantee:</span>
              <span className="text-emerald-400 font-semibold">&gt; 98%</span>
            </div>
          </div>

          {/* Card 3: Lead Qualification & Objection Engine (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 rounded-xl bg-[#121620] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#181E2C] border border-white/10 flex items-center justify-center text-[#00D2E0] mb-4">
                <Bot className="w-5 h-5" />
              </div>

              <span className="text-[10px] font-mono uppercase text-[#94A3B8] font-semibold block mb-1">
                24/7 Response
              </span>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Lead Qualification & Scoring
              </h3>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Replies are evaluated against your strict ICP criteria (company size, deal budget, authority). Non-ICP inquiries are filtered out before reaching your calendar.
              </p>

              <div className="p-3 rounded-lg bg-[#0E1118] border border-white/[0.04] space-y-1 text-xs font-mono">
                <div className="text-[#94A3B8]">Score Threshold: <span className="text-[#00D2E0]">85/100</span></div>
                <div className="text-[#94A3B8]">Average Response: <span className="text-emerald-400">&lt; 60 seconds</span></div>
                <div className="text-[#94A3B8]">No-Show Rate: <span className="text-white">72% Lower</span></div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-[#94A3B8]">
              Automated objection handling
            </div>
          </div>

          {/* Card 4: CRM & Calendar Sync (8 cols) */}
          <div className="md:col-span-12 lg:col-span-8 rounded-xl bg-[#121620] border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#181E2C] border border-white/10 flex items-center justify-center text-[#00D2E0]">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#94A3B8] font-semibold block">
                      Pipeline Integration
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      CRM & Calendar Synchronization
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#00D2E0] bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.08]">
                  &lt; 800ms Sync Latency
                </span>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                All qualified prospects, conversation logs, and booked appointments are injected directly into your existing CRM (HubSpot, Salesforce, HighLevel) and routed round-robin to your Account Executives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-lg bg-[#0E1118] border border-white/[0.04] text-xs">
                  <span className="font-bold text-white block mb-1">HubSpot / Salesforce</span>
                  <span className="text-[#94A3B8] text-[11px]">Full conversation audit trail and deal stage updates</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E1118] border border-white/[0.04] text-xs">
                  <span className="font-bold text-white block mb-1">Round-Robin Dispatch</span>
                  <span className="text-[#94A3B8] text-[11px]">Even AE distribution with buffer time protection</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E1118] border border-white/[0.04] text-xs">
                  <span className="font-bold text-white block mb-1">SMS & Email Reminders</span>
                  <span className="text-[#94A3B8] text-[11px]">Automated pre-meeting briefings to maximize show rates</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
              <span>Native Webhook & REST API support</span>
              <span className="text-emerald-400">Zero Data Loss Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
