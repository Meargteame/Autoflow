import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column - heading */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <span className="section-badge mb-6 inline-flex">FAQS</span>

              <h2 className="font-heading text-3xl sm:text-4xl text-[#1a1a1a] mb-4">
                Frequently Asked Questions
              </h2>

              <p className="text-[#4a4a4a] mb-6 leading-relaxed">
                These FAQs are based on the real, pressing questions our
                clients asked and our answers to for complete clarity!
              </p>

              <a href="#contact" className="btn-dark text-sm">
                Still have a question?
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right column - accordion */}
          <div className="lg:col-span-3 space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="faq-item">
                <button
                  className="faq-trigger"
                  onClick={() => toggle(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className="pr-4">{item.question}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center transition-transform">
                    {openIndex === idx ? (
                      <Minus size={14} className="text-[#1a1a1a]" />
                    ) : (
                      <Plus size={14} className="text-[#1a1a1a]" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="faq-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
