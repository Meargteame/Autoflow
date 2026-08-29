import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="relative py-20 md:py-24 bg-[#0B0D13] border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121620] border border-white/10 text-xs font-mono text-[#94A3B8] mb-4">
            <span>Technical FAQ</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
            Everything you need to know about our secondary domain infrastructure, deliverability protocols, and qualification engine.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors overflow-hidden ${
                  isOpen
                    ? 'bg-[#181E2C] border-[#00D2E0]/40'
                    : 'bg-[#121620] border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#00D2E0] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.04] pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
