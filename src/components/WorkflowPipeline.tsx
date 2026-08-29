import React, { useState } from 'react';
import { 
  Filter, 
  Cpu, 
  Send, 
  CalendarCheck, 
  Check, 
  Database,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/content';
import { WorkflowStep } from '../types';

export const WorkflowPipeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep: WorkflowStep = WORKFLOW_STEPS[activeStepIndex];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Filter':
        return <Filter className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Send':
        return <Send className="w-4 h-4" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-4 h-4" />;
      default:
        return <Database className="w-4 h-4" />;
    }
  };

  return (
    <section id="workflow-section" className="relative py-20 md:py-24 bg-[#0B0D13] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121620] border border-white/10 text-xs font-mono text-[#94A3B8] mb-4">
            <span>System Lifecycle</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            How The Autonomous Pipeline Operates
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
            From raw B2B market signals to qualified sales meetings locked on your calendar in 4 automated stages.
          </p>
        </div>

        {/* 4-Step Pipeline Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;

            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left rounded-xl p-5 transition-colors border cursor-pointer ${
                  isSelected
                    ? 'bg-[#181E2C] border-[#00D2E0]/50 text-white'
                    : 'bg-[#121620] border-white/[0.08] text-[#94A3B8] hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-[#00D2E0] text-[#0B0D13]' : 'bg-white/10 text-[#94A3B8]'
                  }`}>
                    {step.stepNumber}
                  </span>
                  <div className={isSelected ? 'text-[#00D2E0]' : 'text-[#64748B]'}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-sm text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#94A3B8] line-clamp-2">
                  {step.subtitle}
                </p>

                <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#94A3B8]">Execution:</span>
                  <span className={isSelected ? 'text-[#00D2E0] font-semibold' : 'text-white/70'}>
                    {step.executionTime}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Stage Inspector View */}
        <div className="rounded-xl bg-[#121620] border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Step Overview & Guardrails */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/[0.06] text-[#00D2E0] border border-white/10 font-medium">
                    {activeStep.badge}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    Processing: {activeStep.executionTime}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  {activeStep.title}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {activeStep.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block mb-1">
                    System Architecture & Guardrails:
                  </span>
                  {activeStep.technicalDetails.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#F8FAFC]/90">
                      <div className="w-4 h-4 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#00D2E0] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-[#94A3B8]">
                  Automated Pipeline Protocol v4.2
                </span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length)}
                  className="text-xs font-mono text-[#00D2E0] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Advance to Stage 0{((activeStepIndex + 1) % 4) + 1}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Real Stage Input/Output Preview */}
            <div className="lg:col-span-6 bg-[#0E1118] rounded-xl border border-white/[0.08] p-5 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                  <span className="text-xs font-semibold text-white">
                    {activeStep.livePreview.inputTitle}
                  </span>
                  <span className="text-[10px] text-emerald-400">
                    STAGE_{activeStep.stepNumber}_PAYLOAD
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {Object.entries(activeStep.livePreview.inputData).map(([key, value], idx) => (
                    <div key={idx} className="flex items-start justify-between py-1 border-b border-white/[0.04] text-[11px]">
                      <span className="text-[#94A3B8]">{key}:</span>
                      <span className="text-white font-medium text-right max-w-[65%] truncate">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#121620] border border-white/[0.06] mt-3">
                <span className="text-[10px] uppercase text-[#94A3B8] font-bold block mb-1">
                  {activeStep.livePreview.outputTitle}:
                </span>
                <div className="space-y-1">
                  {Object.entries(activeStep.livePreview.outputData).map(([key, value], idx) => (
                    <div key={idx} className="flex items-start justify-between text-[11px]">
                      <span className="text-[#94A3B8]">{key}:</span>
                      <span className="text-[#00D2E0] font-medium text-right max-w-[70%] truncate">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
