import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsBar } from './components/MetricsBar';
import { ServicesBento } from './components/ServicesBento';
import { WorkflowPipeline } from './components/WorkflowPipeline';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudies } from './components/CaseStudies';
import { AuditBookingSection } from './components/AuditBookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D13] text-[#F8FAFC] selection:bg-[#00D2E0]/20 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Global Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenBooking={handleOpenBooking} 
          onExploreArchitecture={() => handleScrollToSection('workflow-section')} 
        />

        {/* 2. Core Value Metrics (Social Proof Bar) */}
        <MetricsBar />

        {/* 3. Solutions & Offerings Grid (Bento Box) */}
        <ServicesBento onOpenBooking={handleOpenBooking} />

        {/* 4. Visual System Workflow (Interactive Timeline) */}
        <WorkflowPipeline />

        {/* 5. ROI & Pipeline Estimator */}
        <RoiCalculator onOpenBooking={handleOpenBooking} />

        {/* 6. Enterprise Case Studies & Proof */}
        <CaseStudies onOpenBooking={handleOpenBooking} />

        {/* 7. High-Converting Audit Booking (CTA Section) */}
        <AuditBookingSection />

        {/* 8. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Global Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Global Booking Modal */}
      <AuditModal isOpen={isModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}
