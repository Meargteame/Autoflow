import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HandsOffSection } from './components/HandsOffSection';
import { PartnersSection } from './components/PartnersSection';
import { AISystemsSection } from './components/AISystemsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { TeamSection } from './components/TeamSection';
import { BlogSection } from './components/BlogSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased overflow-x-hidden">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Main Features - "The AI Automation Agency" */}
        <FeaturesSection />

        {/* 3. Hands-off AI Systems + Don't fall into the AI trap */}
        <HandsOffSection />

        {/* 4. Partner Logos */}
        <PartnersSection />

        {/* 5. Top AI Systems + 100+ Uses */}
        <AISystemsSection />

        {/* 6. Pricing */}
        <PricingSection />

        {/* 7. Client Testimonials */}
        <TestimonialsSection />

        {/* 8. FAQ */}
        <FaqSection />

        {/* 9. Team */}
        <TeamSection />

        {/* 10. Blog / Insights */}
        <BlogSection />

        {/* 11. CTA - "The Future Belongs to Those Who Automate Today" */}
        <CTASection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
