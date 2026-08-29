import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Menu, X, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0B0D13]/95 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#121620] border border-white/10 flex items-center justify-center text-[#00D2E0] group-hover:border-[#00D2E0]/40 transition-colors">
              <svg
                className="w-5 h-5 text-[#00D2E0]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4.5L5.8 17.5H8.2L9.8 13.5H14.2L15.8 17.5H18.2L12 4.5ZM12 8L13.5 12H10.5L12 8Z"
                  fill="currentColor"
                />
                <path
                  d="M3 20.5C7 19 11 22 15 20.5C18 19.3 20 20 22 20.5"
                  stroke="#00D2E0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg tracking-tight text-white">
                  AutoFlow
                </span>
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.06] text-[#00D2E0] border border-white/10">
                  Lead Infrastructure
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121620] px-4 py-1.5 rounded-full border border-white/[0.08]">
            <button
              onClick={() => scrollToSection('services-section')}
              className="px-3 py-1 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('workflow-section')}
              className="px-3 py-1 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollToSection('roi-calculator-section')}
              className="px-3 py-1 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              ROI Estimator
            </button>
            <button
              onClick={() => scrollToSection('case-studies-section')}
              className="px-3 py-1 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              Proof
            </button>
            <button
              onClick={() => scrollToSection('faq-section')}
              className="px-3 py-1 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Action CTA & System Status */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#121620] border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>Pipelines Active</span>
            </div>

            <button
              id="nav-book-audit-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-[#0B0D13] bg-[#00D2E0] hover:bg-[#00D2E0]/90 transition-colors cursor-pointer"
            >
              <span>Schedule Audit</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#121620] border border-white/10 text-[#94A3B8] hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0D13] border-b border-white/10 px-4 pt-3 pb-5 space-y-2 mt-3">
          <button
            onClick={() => scrollToSection('services-section')}
            className="w-full text-left py-2 text-sm text-[#94A3B8] hover:text-white"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection('workflow-section')}
            className="w-full text-left py-2 text-sm text-[#94A3B8] hover:text-white"
          >
            Architecture
          </button>
          <button
            onClick={() => scrollToSection('roi-calculator-section')}
            className="w-full text-left py-2 text-sm text-[#94A3B8] hover:text-white"
          >
            ROI Estimator
          </button>
          <button
            onClick={() => scrollToSection('case-studies-section')}
            className="w-full text-left py-2 text-sm text-[#94A3B8] hover:text-white"
          >
            Proof
          </button>
          <button
            onClick={() => scrollToSection('faq-section')}
            className="w-full text-left py-2 text-sm text-[#94A3B8] hover:text-white"
          >
            FAQ
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-bold text-[#0B0D13] bg-[#00D2E0] text-center"
            >
              Schedule Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
