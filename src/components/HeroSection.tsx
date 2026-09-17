import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden bg-white border-b border-gray-100"
    >
      {/* Subtle Background Pattern - Depth without stark white void */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft subtle warmth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(212,245,71,0.07)_0%,_transparent_70%)]" />

        {/* Minimal dot grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 0.75px, transparent 0.75px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* 4. Active Status Badge */}
        <div className="flex justify-center mb-5">
          <div className="section-badge text-xs flex items-center gap-2 border border-gray-200/90 bg-white/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <span className="w-2 h-2 bg-[#1a8a7d] animate-pulse" />
            <span className="font-bold tracking-wider text-[#1a1a1a]">
              ACCEPTING CLIENTS • {HERO_CONTENT.badge}
            </span>
          </div>
        </div>

        {/* Main Heading with Refined Architectural Highlight (Fix #2) */}
        <h1 className="text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem] font-extrabold text-[#1a1a1a] mb-5 max-w-4xl mx-auto leading-[1.08] tracking-tight">
          Done-for-you AI
          <br />
          <span className="relative inline-block my-1.5">
            <span className="bg-[#d4f547] border border-[#b8dc29] px-4 py-1 text-[#1a1a1a] shadow-[0_2px_12px_rgba(212,245,71,0.22)]">
              Plan. Build. Deploy.
            </span>
          </span>
          <br />
          <span className="inline-block">In just 90 Days</span>
        </h1>

        {/* 1. Subtitle with Actual Business Outcome (No Redundancy) */}
        <p className="text-base sm:text-lg text-[#4a4a4a] font-normal max-w-xl mx-auto leading-relaxed">
          We design, build, and integrate custom autonomous AI systems that eliminate manual bottlenecks and scale your operations with zero disruption.
        </p>

        {/* CTA Area */}
        <div className="mt-14 lg:mt-18 flex flex-col items-center gap-4">
          {/* Book a Call CTA */}
          <a
            href="#contact"
            className="hero-cta-idle relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#1a1a1a] text-white font-bold text-[0.95rem] hover:bg-[#000000] border border-[#1a1a1a] group cursor-pointer"
          >
            <span className="radar-beacon" />
            <span>{HERO_CONTENT.ctaText}</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1.5"
            />
          </a>

          <p className="text-xs text-[#6b7280] font-medium tracking-wide">
            {HERO_CONTENT.guarantee}
          </p>

          {/* 3. Micro-Trust Sales Funnel Points */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-[#4a4a4a] pt-1">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#1a8a7d] font-bold">✓</span> Free 30-Min Strategy Audit
            </span>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#1a8a7d] font-bold">✓</span> Custom Automation Roadmap
            </span>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#1a8a7d] font-bold">✓</span> Zero Obligation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
