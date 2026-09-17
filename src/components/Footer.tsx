import React from 'react';
import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
import { FOOTER_COLUMNS } from '../data/content';

export function Footer() {
  return (
    <footer id="footer" className="pt-8 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1c1c1c] rounded-3xl px-8 sm:px-12 lg:px-16 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
            {/* Logo + description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-xl font-black text-white tracking-tight">
                  AutoFlow
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                A Leading AI Automation Agency focussing on bespoke AI for businesses
                of all sizes.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              AI Automation Agency 2025, All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: <Linkedin size={16} />, label: 'LinkedIn' },
                { icon: <Instagram size={16} />, label: 'Instagram' },
                { icon: <Youtube size={16} />, label: 'YouTube' },
                { icon: <Facebook size={16} />, label: 'Facebook' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
