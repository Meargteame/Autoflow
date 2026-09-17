import React from 'react';
import { ArrowRight, Linkedin, Mail, Globe, MessageSquare, Zap, GitBranch, BarChart3 } from 'lucide-react';
import { FEATURES_CONTENT } from '../data/content';

const IntegrationWheel = () => {
  const integrations = [
    { name: 'LinkedIn', color: '#0A66C2', icon: '💼' },
    { name: 'Gmail', color: '#EA4335', icon: '📧' },
    { name: 'Outlook', color: '#0078D4', icon: '📨' },
    { name: 'Zapier', color: '#FF4A00', icon: '⚡' },
    { name: 'Make', color: '#6D00CC', icon: '🔧' },
    { name: 'Slack', color: '#4A154B', icon: '💬' },
    { name: 'HubSpot', color: '#FF7A59', icon: '🟠' },
    { name: 'GitHub', color: '#333', icon: '🐙' },
    { name: 'Facebook', color: '#1877F2', icon: '📘' },
    { name: 'Pinterest', color: '#E60023', icon: '📌' },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Center hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#FF4A00] flex items-center justify-center shadow-lg z-10">
        <span className="text-white text-xs font-bold">zapier</span>
      </div>

      {/* Orbit ring */}
      <div className="absolute inset-8 rounded-full border border-dashed border-white/20"></div>
      <div className="absolute inset-16 rounded-full border border-dashed border-white/15"></div>

      {/* Integration nodes */}
      {integrations.map((item, i) => {
        const angle = (i * 360) / integrations.length - 90;
        const radius = 42;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={item.name}
            className="absolute w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg transition-transform hover:scale-110"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            title={item.name}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="section-badge">{FEATURES_CONTENT.badge}</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-center mb-4 text-[#1a1a1a]">
          The <span className="highlight-lime">AI Automation</span> Agency
        </h2>

        {/* Description */}
        <p className="text-center text-[#4a4a4a] max-w-2xl mx-auto mb-16 text-base sm:text-lg">
          {FEATURES_CONTENT.description}
        </p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* Left card - cream */}
          <div className="card-cream flex flex-col justify-between min-h-[320px]">
            <p className="text-[#1a1a1a] text-base sm:text-lg leading-relaxed mb-8">
              {FEATURES_CONTENT.leftCard.text}
            </p>
            <a href="#contact" className="btn-primary self-start">
              {FEATURES_CONTENT.leftCard.cta}
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right card - dark with integration wheel */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2a1e] to-[#142e22] p-6 sm:p-8 flex items-center justify-center min-h-[320px]">
            <IntegrationWheel />
          </div>
        </div>

        {/* Results section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - Operations diagram placeholder */}
          <div className="card-cream p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Marketing Ops', items: ['Ads and lead generation', 'Events and webinars', 'Reporting'] },
                { title: 'Sales Ops', items: ['CRM', 'Sales outreach', 'Qualifying'] },
                { title: 'Support Ops', items: ['Ticketing', 'Escalations', 'Customer feedback'] },
                { title: 'Success Ops', items: ['Onboarding', 'Health monitoring', 'Renewals and upsell'] },
              ].map((op) => (
                <div key={op.title} className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-sm text-[#1a1a1a] mb-2">{op.title}</h4>
                  <ul className="space-y-1">
                    {op.items.map((item) => (
                      <li key={item} className="text-xs text-[#4a4a4a] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#1a8a7d] rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-6 text-xs text-[#4a4a4a]">
                <span>Retention ←</span>
                <span>→ Awareness</span>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <div className="flex items-center gap-6 text-xs text-[#4a4a4a]">
                <span>Conversion ←</span>
                <span>→ Consideration</span>
              </div>
            </div>
          </div>

          {/* Right - Results text */}
          <div className="lg:py-4">
            <div className="bg-gradient-to-br from-[#0f2a1e] to-[#142e22] rounded-2xl p-8 sm:p-10 text-white">
              <h3 className="font-heading text-2xl sm:text-3xl mb-4">
                {FEATURES_CONTENT.rightSection.title}
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                {FEATURES_CONTENT.rightSection.description}
              </p>
              <p className="text-white/70 mb-6 text-sm">
                {FEATURES_CONTENT.rightSection.subtext}
              </p>
              <a href="#contact" className="btn-outline border-white/40 text-white hover:bg-white/10">
                {FEATURES_CONTENT.rightSection.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
