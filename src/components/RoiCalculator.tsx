import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  const [dealSize, setDealSize] = useState<number>(25000);
  const [targetMeetings, setTargetMeetings] = useState<number>(20);
  const [closeRate, setCloseRate] = useState<number>(20);

  // Financial Calculations
  const monthlyPipeline = targetMeetings * dealSize;
  const estimatedClosedDeals = Math.round((targetMeetings * (closeRate / 100)) * 10) / 10;
  const monthlyClosedWonRevenue = estimatedClosedDeals * dealSize;
  const annualClosedWonRevenue = monthlyClosedWonRevenue * 12;
  const sdrHeadcountSaved = Math.max(1, Math.ceil(targetMeetings / 12));
  const sdrAnnualCostSaved = sdrHeadcountSaved * 95000; // $95k OTE per SDR benchmark

  return (
    <section id="roi-calculator-section" className="relative py-20 md:py-24 bg-[#0B0D13] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121620] border border-white/10 text-xs font-mono text-[#94A3B8] mb-4">
            <span>Economic Impact Model</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Pipeline & Financial ROI Estimator
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
            Estimate your projected revenue pipeline and SDR headcount cost savings with autonomous outbound infrastructure.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-xl bg-[#121620] border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Sliders Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-white">
                    Average Contract Value (ACV / Deal Size)
                  </label>
                  <span className="text-sm font-mono font-bold text-[#00D2E0]">
                    ${dealSize.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={dealSize}
                  onChange={(e) => setDealSize(Number(e.target.value))}
                  className="w-full h-2 bg-[#181E2C] rounded-lg appearance-none cursor-pointer accent-[#00D2E0]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] mt-1">
                  <span>$5,000</span>
                  <span>$50,000</span>
                  <span>$100,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-white">
                    Target Qualified Meetings / Month
                  </label>
                  <span className="text-sm font-mono font-bold text-[#00D2E0]">
                    {targetMeetings} Meetings
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={targetMeetings}
                  onChange={(e) => setTargetMeetings(Number(e.target.value))}
                  className="w-full h-2 bg-[#181E2C] rounded-lg appearance-none cursor-pointer accent-[#00D2E0]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] mt-1">
                  <span>5 calls</span>
                  <span>30 calls</span>
                  <span>60 calls/mo</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-white">
                    Demo-to-Close Conversion Rate
                  </label>
                  <span className="text-sm font-mono font-bold text-[#00D2E0]">
                    {closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="40"
                  step="2"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#181E2C] rounded-lg appearance-none cursor-pointer accent-[#00D2E0]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] mt-1">
                  <span>10% (Conservative)</span>
                  <span>20% (Benchmark)</span>
                  <span>40% (Top Tier)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0E1118] border border-white/[0.06] text-xs">
                <div className="flex items-center gap-2 text-[#00D2E0] font-semibold font-mono mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Managed Deliverability Guarantee</span>
                </div>
                <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                  We calibrate domain volume and intent targeting until your monthly meeting quota is reached.
                </p>
              </div>
            </div>

            {/* Right Output Dashboard */}
            <div className="lg:col-span-6 rounded-xl bg-[#0E1118] border border-white/[0.08] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                  <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                    Projected Value Breakdown
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Net Positive ROI
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#94A3B8]">Monthly Pipeline Created:</span>
                    <span className="text-xl font-mono font-bold text-white">
                      ${monthlyPipeline.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#94A3B8]">Estimated Closed Revenue / Year:</span>
                    <span className="text-xl font-mono font-bold text-[#00D2E0]">
                      ${annualClosedWonRevenue.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pt-3 border-t border-white/[0.06]">
                    <span className="text-xs text-[#94A3B8]">SDR Headcount Saved:</span>
                    <span className="text-sm font-mono font-bold text-white">
                      {sdrHeadcountSaved} Full-Time Reps (~${sdrAnnualCostSaved.toLocaleString()}/yr)
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-lg font-heading font-bold text-xs sm:text-sm text-[#0B0D13] bg-[#00D2E0] hover:bg-[#00D2E0]/90 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Lock In This Pipeline Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
