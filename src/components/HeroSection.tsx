import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { HeroVisualizer } from './HeroVisualizer';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreArchitecture: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenBooking, 
  onExploreArchitecture 
}) => {
  return (
    <section 
      id="hero-section" 
      className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Hero Header Stack */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121620] border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2E0]" />
            <span className="text-[#94A3B8] text-xs font-mono font-medium tracking-wide">
              AUTONOMOUS B2B OUTBOUND INFRASTRUCTURE
            </span>
          </div>

          {/* Large H1 Headline - Solid High-Contrast Typography */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] mb-6">
            Predictable B2B Pipeline. <br className="hidden sm:inline" />
            <span className="text-white">Zero Manual SDR Overhead.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            We build and operate autonomous outbound systems—enriching verified decision-makers, synthesizing real-time buying signals, and dispatching targeted multi-channel sequences that fill your sales calendar.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <button
              id="hero-primary-cta"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg font-heading font-bold text-xs sm:text-sm text-[#0B0D13] bg-[#00D2E0] hover:bg-[#00D2E0]/90 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Schedule Pipeline Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={onExploreArchitecture}
              className="w-full sm:w-auto px-5 py-3.5 rounded-lg font-heading font-medium text-xs sm:text-sm text-white bg-[#121620] hover:bg-[#161C28] border border-white/10 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>View System Architecture</span>
              <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
            </button>
          </div>

          {/* Micro Proof Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-mono text-[#94A3B8]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2E0]" />
              <span>99.8% Inbox Deliverability</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2E0]" />
              <span>Strict ICP Filtering</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2E0]" />
              <span>Native 2-Way CRM Sync</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Console */}
        <div className="max-w-5xl mx-auto">
          <HeroVisualizer />
        </div>
      </div>
    </section>
  );
};
