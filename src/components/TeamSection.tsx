import React from 'react';
import { Linkedin, Facebook } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/content';

// Simple X (Twitter) icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28 section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="section-badge">DEDICATED TEAM</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-center text-[#1a1a1a] mb-4">
          The <span className="highlight-teal">Expert team</span> By Your Side
        </h2>

        <p className="text-center text-[#4a4a4a] max-w-2xl mx-auto mb-14 text-base sm:text-lg">
          Our philosophy is simple — Give our clients access to the best current automation
          systems in each industry.
        </p>

        {/* Team Cards */}
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="card-cream text-center w-full sm:w-80 flex flex-col items-center py-10 px-8"
            >
              {/* Avatar */}
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-5 border-4 border-white shadow-sm"
              />

              {/* Name */}
              <h3 className="font-semibold text-lg text-[#1a1a1a] mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[#4a4a4a] text-sm mb-4">{member.role}</p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="w-8 h-8 rounded-md bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin size={14} />
                  </a>
                )}
                {member.socials.facebook && (
                  <a
                    href={member.socials.facebook}
                    className="w-8 h-8 rounded-md bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label={`${member.name} Facebook`}
                  >
                    <Facebook size={14} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    className="w-8 h-8 rounded-md bg-[#1a1a1a] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label={`${member.name} X (Twitter)`}
                  >
                    <XIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
