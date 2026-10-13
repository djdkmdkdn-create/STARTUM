import React from 'react';
import { Target, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const valueIcons = [Target, ShieldCheck, TrendingUp];

  return (
    <section id="about" className="py-24 bg-[#151020]/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#8B2CFF]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Text & Values */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
                {t.about.badge}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {t.about.heading}
              </h2>

              <p className="text-base sm:text-lg text-[#C4B5D9] leading-relaxed">
                {t.about.description}
              </p>
            </div>

            {/* Three Core Values */}
            <div className="space-y-4 pt-2">
              {t.about.values.map((val, idx) => {
                const Icon = valueIcons[idx] || Target;
                return (
                  <div
                    key={val.title}
                    className="p-4 sm:p-5 rounded-xl bg-[#1C142B] border border-[#A855F7]/20 hover:border-[#A855F7]/40 transition-colors flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#151020] border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        {val.title}
                      </h3>
                      <p className="text-sm text-[#C4B5D9] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Classroom Environment */}
          <div className="lg:col-span-6 relative">
            <div 
              aria-hidden="true" 
              className="absolute -inset-4 bg-gradient-to-tr from-[#8B2CFF]/20 via-[#A855F7]/15 to-transparent rounded-3xl blur-2xl" 
            />

            <div className="relative rounded-2xl overflow-hidden border border-[#A855F7]/30 bg-[#1C142B] shadow-2xl shadow-purple-950/40">
              <img
                src="/src/assets/images/about_classroom_1791519701387.jpg"
                alt="STARTUM IT School modern learning classroom"
                className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim overlay & bottom caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0714] via-[#0B0714]/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#A855F7] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.about.classroomBadge}</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {t.about.classroomTitle}
                </div>
              </div>
            </div>

            {/* Ambient detail box */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#151020]/95 backdrop-blur-md border border-[#A855F7]/35 rounded-xl p-4 shadow-xl items-center gap-3 max-w-xs">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs text-[#C4B5D9] leading-normal">
                {t.about.classroomDetail}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
