import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#151020]/30">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#8B2CFF]/8 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
            {t.faq.badge}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.faq.heading}
          </h2>
          
          <p className="text-base sm:text-lg text-[#C4B5D9] leading-relaxed">
            {t.faq.description}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-[#1C142B] border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#8B2CFF] shadow-lg shadow-[#8B2CFF]/10'
                    : 'border-[#A855F7]/20 hover:border-[#A855F7]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-[#151020] border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#8B2CFF] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#C4B5D9] leading-relaxed border-t border-[#A855F7]/15 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered Question Callout */}
        <div className="mt-12 text-center p-6 bg-[#1C142B] border border-[#A855F7]/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">
              {t.faq.unansweredTitle}
            </h4>
            <p className="text-xs text-[#C4B5D9]">
              {t.faq.unansweredDesc}
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] rounded-xl hover:shadow-lg hover:shadow-[#8B2CFF]/30 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t.faq.askAdmissions}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
