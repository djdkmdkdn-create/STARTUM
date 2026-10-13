import React from 'react';
import { Hammer, Cpu, HeartHandshake, Briefcase, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyStartumSection: React.FC = () => {
  const { t } = useLanguage();

  const featureIcons = [Hammer, Cpu, HeartHandshake, Briefcase];

  return (
    <section id="why-startum" className="py-24 bg-[#151020]/50 relative overflow-hidden">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B2CFF]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
            {t.why.badge}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.why.heading}
          </h2>
          
          <p className="text-base sm:text-lg text-[#C4B5D9] leading-relaxed">
            {t.why.description}
          </p>
        </div>

        {/* Feature Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {t.why.cards.map((feature, index) => {
            const Icon = featureIcons[index] || Hammer;
            return (
              <div
                key={index}
                className="group relative bg-[#1C142B] border border-[#A855F7]/20 hover:border-[#8B2CFF]/60 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B2CFF]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#151020] to-[#25173e] border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7] group-hover:scale-105 group-hover:text-white group-hover:bg-[#8B2CFF] transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <span className="text-xs font-mono font-bold text-[#A855F7]/60 group-hover:text-[#A855F7]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#C084FC] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#C4B5D9] leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#A855F7]/15 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-white/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#A855F7]" />
                    <span>{feature.bullet}</span>
                  </div>
                  <span className="font-mono text-[#A855F7] font-semibold">
                    {feature.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
