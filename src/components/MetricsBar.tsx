import React from 'react';
import { HERO_METRICS, INTEGRATIONS } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  return (
    <section id="metrics-bar" className="relative py-14 border-y border-white/[0.08] bg-[#0B0D13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D2E0]" />
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#94A3B8]">
              Verified Production Pipeline Benchmarks
            </span>
          </div>
          <span className="text-xs font-mono text-[#94A3B8] hidden sm:block">
            Aggregated Across 120,000+ Outbound Sequences
          </span>
        </div>

        {/* 4-Column Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {HERO_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#121620] border border-white/[0.08] p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  {metric.trend}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white mb-1">
                {metric.label}
              </h3>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Native Integrations Ecosystem Bar */}
        <div className="rounded-xl bg-[#121620] border border-white/[0.06] p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Bi-Directional CRM & GTM Integrations
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#94A3B8]">
              Automated webhook dispatch and contact sync
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {INTEGRATIONS.map((tool, idx) => (
              <div
                key={idx}
                className="px-3 py-2.5 rounded-lg bg-[#0E1118] border border-white/[0.06] flex flex-col items-center justify-center text-center hover:border-white/20 transition-colors"
              >
                <span className="text-xs font-semibold text-white truncate w-full">
                  {tool.name}
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8] truncate w-full mt-0.5">
                  {tool.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
