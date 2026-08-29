import React from 'react';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0B0D13] border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#121620] border border-white/10 flex items-center justify-center text-[#00D2E0]">
                <svg
                  className="w-4 h-4 text-[#00D2E0]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4.5L5.8 17.5H8.2L9.8 13.5H14.2L15.8 17.5H18.2L12 4.5ZM12 8L13.5 12H10.5L12 8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M3 20.5C7 19 11 22 15 20.5C18 19.3 20 20 22 20.5"
                    stroke="#00D2E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg text-white">
                  AutoFlow
                </span>
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.06] text-[#00D2E0] border border-white/10 font-semibold">
                  Agency
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              We design and operate autonomous outbound pipelines, custom enrichment models, and 24/7 qualification systems for B2B sales teams.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#121620] border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Production Systems Operational • 99.8% Deliverability</span>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button
                  onClick={() => scrollTo('services-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Outbound Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Waterfall Enrichment
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Lead Qualification
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  CRM Integration
                </button>
              </li>
            </ul>
          </div>

          {/* Architecture Col */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Architecture
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button
                  onClick={() => scrollTo('workflow-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  System Workflow
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('roi-calculator-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pipeline Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('case-studies-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Client Proof
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Security & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* CTA Card */}
          <div className="md:col-span-3 rounded-xl bg-[#121620] border border-white/10 p-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#00D2E0] uppercase font-semibold block mb-1">
                Strategy Session
              </span>
              <h4 className="text-sm font-bold text-white mb-1.5">
                Book an Outbound Audit
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Get a custom outbound blueprint tailored to your ICP and deal size.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 rounded-lg font-heading font-bold text-xs text-[#0B0D13] bg-[#00D2E0] hover:bg-[#00D2E0]/90 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Schedule Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & security line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white/80">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D2E0]" />
              SOC2 Type II Aligned
            </span>
            <span className="flex items-center gap-1 text-white/80">
              <Lock className="w-3.5 h-3.5 text-[#00D2E0]" />
              GDPR & CAN-SPAM Compliant
            </span>
          </div>

          <div>
            © {new Date().getFullYear()} AutoFlow Technologies Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
