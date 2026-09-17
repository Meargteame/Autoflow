import React from 'react';
import { ArrowRight, Zap, FileText, Settings, Target, MessageCircle, GitBranch, ClipboardList, ArrowUpRight } from 'lucide-react';
import { AI_SYSTEMS, USE_CASES } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={24} />,
  FileText: <FileText size={24} />,
  Settings: <Settings size={24} />,
  Target: <Target size={24} />,
  MessageCircle: <MessageCircle size={24} />,
  GitBranch: <GitBranch size={24} />,
  ClipboardList: <ClipboardList size={24} />,
};

const useCaseIconMap: Record<string, string> = {
  ShoppingBag: '🛍',
  Users: '👥',
  TrendingUp: '📈',
  Megaphone: '📢',
  UserCheck: '👤',
  Play: '▶️',
  Map: '🗺',
  BarChart3: '📊',
  Briefcase: '💼',
  ShoppingCart: '🛒',
  FileText: '📄',
  Layers: '📋',
  Lightbulb: '💡',
  PieChart: '📉',
  Edit3: '✏️',
  Minus: '➖',
};

export function AISystemsSection() {
  return (
    <section id="ai-systems" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="section-badge">TOP AI SYSTEMS</span>
        </div>

        {/* Description */}
        <p className="text-center text-[#4a4a4a] max-w-3xl mx-auto mb-14 text-base sm:text-lg leading-relaxed">
          Boost efficiency and growth with smart automation - AI chatbots, CRM
          systems, and reporting dashboards that streamline operations, reduce costs,
          and enhance customer engagement
        </p>

        {/* AI Systems Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {AI_SYSTEMS.map((system) => (
            <div key={system.id} className="card-lime flex flex-col items-start justify-between min-h-[160px]">
              <div className="w-12 h-12 rounded-full bg-[#1a3a2a] flex items-center justify-center text-white mb-auto">
                {iconMap[system.iconName] || <Zap size={24} />}
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-[#1a1a1a] mt-4 leading-tight">
                {system.title}
              </h3>
            </div>
          ))}

          {/* View all features circle */}
          <div className="flex flex-col items-center justify-center min-h-[160px]">
            <a
              href="#"
              className="w-16 h-16 rounded-full border-2 border-[#d4f547] bg-[#f0ffc0] flex items-center justify-center hover:bg-[#d4f547] transition-colors mb-3"
            >
              <ArrowUpRight size={22} className="text-[#1a1a1a]" />
            </a>
            <span className="text-sm font-medium text-[#4a4a4a]">View all features</span>
          </div>
        </div>

        {/* 100+ Uses Section */}
        <div className="mt-20 text-center">
          <h3 className="font-heading text-2xl sm:text-3xl text-[#1a8a7d] mb-10">
            100+ Uses For Ai Systems in Your Business!
          </h3>

          {/* Scrolling tags */}
          <div className="overflow-hidden relative">
            <div className="flex gap-3 flex-wrap justify-center">
              {USE_CASES.map((uc, idx) => (
                <div key={idx} className="use-pill">
                  <span>{useCaseIconMap[uc.iconName] || '📋'}</span>
                  <span>{uc.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <a href="#contact" className="btn-primary">
              Learn More
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
