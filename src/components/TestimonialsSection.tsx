import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="section-badge">CLIENTS FEEDBACK</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-center text-[#1a1a1a] mb-14">
          Don't <span className="highlight-teal">just take our words</span> for it!
        </h2>

        {/* Testimonial Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate for infinite feel */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="testimonial-card snap-start flex-shrink-0"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#f97316] fill-[#f97316]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#1a1a1a] text-sm sm:text-base leading-relaxed mb-6 min-h-[100px]">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-[#1a1a1a] text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
