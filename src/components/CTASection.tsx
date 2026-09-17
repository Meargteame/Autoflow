import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section id="contact" className="py-20 lg:py-28 section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fdf5ed] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12 lg:p-16">
            {/* Left - Text */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] mb-4 leading-tight">
                The Future
                <br />
                Belongs to Those
                <br />
                Who Automate
                <br />
                Today
              </h2>
              <p className="text-[#4a4a4a] mb-8 text-base sm:text-lg">
                Speak to us today to get started
              </p>
              <a href="#" className="btn-primary text-base px-7 py-3.5">
                Get started
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right - Visual mockup */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Main mockup - Elements panel */}
                <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-sm font-semibold text-[#1a1a1a]">All Elements</span>
                      <span className="text-xs text-[#6b7280] ml-2">Library</span>
                    </div>
                    <span className="text-[#6b7280]">•••</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 mb-3">
                    <span className="text-xs text-[#6b7280]">🔍 Search elements...</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['Sections', 'Columns', 'Div', 'Box', 'Heading', 'Code', 'Nav Bar', 'Button', 'Image', 'Video', 'Link', 'Grid'].map(
                      (el) => (
                        <div key={el} className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="w-6 h-6 rounded bg-[#e8f4f0] flex items-center justify-center">
                            <span className="text-[#1a8a7d] text-xs">⬡</span>
                          </div>
                          <span className="text-[9px] text-[#4a4a4a] text-center leading-tight">{el}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Floating card - Brand */}
                <div className="absolute -top-4 -right-4 bg-[#1a3a2a] text-white rounded-lg px-4 py-2.5 shadow-lg">
                  <span className="text-xs font-bold">AAA</span>
                  <div className="mt-1">
                    <span className="text-[10px] opacity-70">Brand</span>
                    <div className="text-[9px] opacity-50 mt-0.5">#1a1a1a</div>
                  </div>
                </div>

                {/* Floating card - Name tag */}
                <div className="absolute bottom-8 -left-4 bg-[#1a8a7d] text-white rounded-md px-3 py-1.5 shadow-lg text-xs font-medium">
                  James Doe
                </div>

                {/* Floating card - Google Fonts */}
                <div className="absolute -bottom-6 -right-2 bg-white rounded-lg shadow-lg p-3 border border-gray-100 w-32">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[10px] font-semibold text-[#1a1a1a]">Google Fonts</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] text-[#4a4a4a] block">Roboto</span>
                    <span className="text-[9px] bg-[#1a8a7d] text-white rounded px-1.5 py-0.5 inline-block">Selected</span>
                    <span className="text-[9px] text-[#4a4a4a] block">PT Serif</span>
                    <span className="text-[9px] text-[#4a4a4a] block">Playfair Display</span>
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
