import React from 'react';
import { PARTNER_LOGOS } from '../data/content';

// Styled text logos that approximate the real brand logos
const LogoRenderer = ({ name }: { name: string }) => {
  const styles: Record<string, { className: string; display: string }> = {
    HubSpot: { className: 'text-[#FF7A59] font-bold text-xl tracking-tight', display: 'HubSpot' },
    Salesforce: { className: 'text-white font-bold text-lg bg-[#00A1E0] px-3 py-1 rounded', display: 'salesforce' },
    Zapier: { className: 'text-[#1a1a1a] font-bold text-xl tracking-tight', display: '⚡zapier' },
    Zoho: { className: 'text-[#DC2626] font-bold text-xl tracking-tight', display: 'ZOHO' },
    'monday.com': { className: 'text-[#1a1a1a] font-medium text-lg', display: 'monday.com' },
    UiPath: { className: 'text-[#1a1a1a] font-semibold text-lg tracking-tight', display: 'UiPath' },
    Make: { className: 'text-[#6D00CC] font-bold text-xl tracking-tight', display: '⌘ make' },
    Pipedrive: { className: 'text-[#1a1a1a] font-medium text-lg tracking-tight', display: 'pipedrive' },
  };

  const s = styles[name] || { className: 'text-[#1a1a1a] font-medium text-lg', display: name };

  return <span className={s.className}>{s.display}</span>;
};

export function PartnersSection() {
  return (
    <section id="partners" className="py-16 lg:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl text-center text-[#1a1a1a] mb-12">
          Leading AI Companies We Work With
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
          {PARTNER_LOGOS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-16 w-full opacity-80 hover:opacity-100 transition-opacity cursor-default"
            >
              <LogoRenderer name={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
