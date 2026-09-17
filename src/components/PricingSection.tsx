import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../data/content';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="section-badge bg-white/10 border-white/20 text-white">
            PRICING
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-center text-white mb-4">
          Simple <span className="highlight-lime text-[#1a1a1a]">flexible</span> pricing.
        </h2>
        <p className="text-center text-white/60 mb-14 text-base sm:text-lg">
          Work short-term or long-term. Your choice.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div key={tier.id} className="pricing-card relative">
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className="font-heading text-xl sm:text-2xl text-[#1a3a2a] mb-4">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-3">
                <span className="font-heading text-4xl sm:text-5xl text-[#1a1a1a]">
                  {tier.price}
                </span>
                <span className="text-[#4a4a4a] text-lg ml-1">{tier.period}</span>
              </div>

              {/* Description */}
              <p className="text-[#4a4a4a] text-sm mb-6 min-h-[40px]">
                {tier.description}
              </p>

              {/* CTA */}
              {tier.ctaStyle === 'primary' ? (
                <a href="#contact" className="btn-primary w-full justify-center mb-3">
                  {tier.ctaText}
                </a>
              ) : tier.ctaStyle === 'dark' ? (
                <a href="#contact" className="btn-dark w-full justify-center mb-3">
                  {tier.ctaText}
                </a>
              ) : (
                <a href="#contact" className="btn-outline w-full justify-center mb-3">
                  {tier.ctaText}
                </a>
              )}

              {/* Sub note */}
              <p className="text-xs text-[#6b7280] mb-6">{tier.subNote}</p>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-5">
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1a1a1a]">
                      <Check size={16} className="text-[#1a8a7d] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tax note */}
        <p className="text-center text-white/40 mt-10 text-sm">
          Prices exclude any applicable taxes.
        </p>
      </div>
    </section>
  );
}
