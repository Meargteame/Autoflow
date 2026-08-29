import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { Building2, ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const activeCase = CASE_STUDIES[activeCaseIndex];

  return (
    <section id="case-studies-section" className="relative py-20 md:py-24 bg-[#0B0D13] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121620] border border-white/10 text-xs font-mono text-[#94A3B8] mb-4">
              <span>Verified Client Results</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Production Outcomes & Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
              How high-growth B2B teams replaced manual prospecting bottlenecks with AutoFlow's autonomous acquisition architecture.
            </p>
          </div>

          {/* Case Study Switchers */}
          <div className="flex items-center gap-1.5 bg-[#121620] p-1.5 rounded-lg border border-white/10 self-start md:self-auto">
            {CASE_STUDIES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-colors cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'bg-[#00D2E0] text-[#0B0D13] font-bold'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {c.logoText}
              </button>
            ))}
          </div>
        </div>

        {/* Highlighted Case Study Card */}
        <div className="rounded-xl bg-[#121620] border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Result Highlights */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D2E0] mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{activeCase.industry}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {activeCase.companyName}
                </h3>
                <div className="p-4 rounded-lg bg-[#0E1118] border border-white/[0.06] my-4">
                  <span className="text-3xl sm:text-4xl font-heading font-bold text-[#00D2E0] block mb-1">
                    {activeCase.highlightStat}
                  </span>
                  <span className="text-xs font-mono text-white/90 font-medium">
                    {activeCase.highlightLabel}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#94A3B8]">
                <div>
                  <span className="text-white font-semibold block mb-0.5">Initial Bottleneck:</span>
                  <p>{activeCase.challenge}</p>
                </div>
                <div>
                  <span className="text-white font-semibold block mb-0.5">AutoFlow Architecture:</span>
                  <p>{activeCase.solution}</p>
                </div>
              </div>
            </div>

            {/* Right Metrics Grid & Testimonial Quote */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* 4 Stat Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-[#0E1118] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">Meetings Booked</span>
                  <span className="text-sm font-heading font-bold text-white">
                    {activeCase.results.meetingsBooked}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E1118] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">Pipeline Generated</span>
                  <span className="text-sm font-heading font-bold text-[#00D2E0]">
                    {activeCase.results.pipelineGenerated}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E1118] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">Verified Reply</span>
                  <span className="text-sm font-heading font-bold text-emerald-400">
                    {activeCase.results.replyRate}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E1118] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">First Qtr ROI</span>
                  <span className="text-sm font-heading font-bold text-white">
                    {activeCase.results.roi}
                  </span>
                </div>
              </div>

              {/* Quote Card */}
              <div className="p-5 rounded-lg bg-[#0E1118] border border-white/[0.06]">
                <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed mb-3">
                  "{activeCase.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#181E2C] border border-white/10 flex items-center justify-center font-bold text-xs text-[#00D2E0]">
                    {activeCase.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{activeCase.author}</h4>
                    <p className="text-[11px] text-[#94A3B8]">{activeCase.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
