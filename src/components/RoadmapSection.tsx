import React, { useState } from 'react';
import { Compass, Code, LayoutGrid, Cpu, Rocket, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RoadmapSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Compass, Code, LayoutGrid, Cpu, Rocket];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial purple glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#8B2CFF]/8 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
            {t.roadmap.badge}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.roadmap.heading}
          </h2>
          
          <p className="text-base sm:text-lg text-[#C4B5D9] leading-relaxed">
            {t.roadmap.description}
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="relative mb-12">
          
          {/* Glowing purple connecting line (desktop) */}
          <div 
            aria-hidden="true"
            className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-gradient-to-r from-[#5B21B6] via-[#8B2CFF] to-[#A855F7] rounded-full shadow-[0_0_12px_rgba(139,44,255,0.6)] z-0" 
          />

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {t.roadmap.steps.map((item, index) => {
              const Icon = stepIcons[index] || Compass;
              const isSelected = activeStep === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`bg-[#1C142B] border rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#8B2CFF] shadow-xl shadow-[#8B2CFF]/20 -translate-y-2'
                      : 'border-[#A855F7]/25 hover:border-[#A855F7]/60 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#8B2CFF] to-[#A855F7] text-white shadow-md shadow-[#8B2CFF]/40'
                          : 'bg-[#151020] text-[#A855F7] border border-[#A855F7]/30'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-[#151020] text-[#C4B5D9] border border-[#A855F7]/20">
                        {t.roadmap.stepPrefix}{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {item.title}
                    </h3>

                    <p className="text-xs font-medium text-[#C084FC] mb-3 leading-snug">
                      {item.tagline}
                    </p>

                    <p className="text-xs text-[#C4B5D9] leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="pt-3 border-t border-[#A855F7]/15">
                    <div className="flex flex-wrap gap-1">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151020] text-[#C4B5D9]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer clarification banner */}
        <div className="bg-[#151020] border border-[#A855F7]/25 rounded-xl p-4 sm:p-5 flex items-start sm:items-center gap-3.5 max-w-3xl mx-auto">
          <div className="w-8 h-8 rounded-lg bg-[#1C142B] border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7] shrink-0 mt-0.5 sm:mt-0">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-[#C4B5D9] leading-relaxed">
            <strong className="text-white font-semibold">{t.roadmap.disclaimerTitle} </strong>
            {t.roadmap.disclaimerText}
          </div>
        </div>

      </div>
    </section>
  );
};
