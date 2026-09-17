import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HANDS_OFF_CONTENT } from '../data/content';

export function HandsOffSection() {
  return (
    <section id="hands-off" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Dark card */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
            {/* Image placeholder area */}
            <div className="h-48 sm:h-56 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-6 flex items-center justify-center">
              <div className="bg-white rounded-xl p-4 shadow-xl max-w-xs w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="h-2.5 bg-gray-200 rounded w-3/4 mb-1"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                    <span className="text-xs text-gray-600">Define sales goals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                    <span className="text-xs text-gray-600">Create funnel system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-xs">○</span>
                    <span className="text-xs text-gray-600">Coordinate onboarding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl text-white mb-3">
                {HANDS_OFF_CONTENT.trapTitle}
              </h3>
              <a href="#contact" className="btn-primary text-sm mb-4 inline-flex">
                {HANDS_OFF_CONTENT.trapCta}
                <ArrowRight size={14} />
              </a>
              <p className="text-white/70 text-sm leading-relaxed mt-4">
                {HANDS_OFF_CONTENT.trapDescription}
              </p>
            </div>
          </div>

          {/* Right column - Light content */}
          <div className="flex flex-col">
            {/* Top - Hands off title area */}
            <div className="section-cream rounded-2xl p-8 sm:p-10 flex-1 flex flex-col justify-center">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#1a1a1a] mb-4">
                {HANDS_OFF_CONTENT.title}
              </h2>
              <p className="text-[#4a4a4a] leading-relaxed text-base sm:text-lg text-center lg:text-left">
                {HANDS_OFF_CONTENT.description}
              </p>
            </div>

            {/* Bottom - Chat mockup */}
            <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex flex-col gap-3">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#e8f4f8] rounded-2xl rounded-br-md px-4 py-2.5 max-w-[75%]">
                    <p className="text-sm text-[#1a1a1a]">What's got a custom bot built cost us?</p>
                  </div>
                </div>
                {/* Bot response */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[75%]">
                    <p className="text-sm text-[#1a1a1a]">Great question! Our custom bots start from a fraction of what SaaS platforms charge monthly. Let me explain...</p>
                  </div>
                </div>
                {/* Input mockup */}
                <div className="flex items-center gap-2 mt-2 border border-gray-200 rounded-full px-4 py-2.5">
                  <span className="text-sm text-gray-400 flex-1">Ask your AI Agent anything...</span>
                  <div className="w-7 h-7 rounded-full bg-[#1a8a7d] flex items-center justify-center">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
