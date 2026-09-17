import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none">
      <nav
        id="navbar"
        className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-300 px-5 sm:px-8 border rounded-xl ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl border-gray-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.08)]'
            : 'bg-white/70 backdrop-blur-md border-gray-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="flex items-center justify-between h-[60px]">
          {/* Text-only Logo */}
          <a href="#" className="inline-flex items-center group">
            <span className="text-[1.35rem] font-black text-[#1a1a1a] tracking-tight">
              AutoFlow
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.875rem] font-medium text-gray-600 hover:text-[#1a1a1a] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA with Attention Animation and Sharp Corners */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="nav-cta-attention hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-[0.875rem] font-bold text-[#1a1a1a] bg-[#d4f547] hover:bg-[#c6e83a] transition-all border border-[#b8dc29] group cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-[#1a1a1a] border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 border-t border-gray-100 ${
            isMobileOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block py-2 px-3 text-[0.9rem] font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-[#d4f547] text-[#1a1a1a] font-bold text-sm hover:bg-[#c6e83a] transition-colors border border-[#b8dc29]"
              >
                <span>Get Started</span>
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
