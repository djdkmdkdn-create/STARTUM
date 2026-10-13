import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, HelpCircle, User } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = TESTIMONIALS_DATA;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const current = testimonials[currentIndex];
  const courseTaken = current.courseTaken[language] || current.courseTaken.en;
  const quote = current.quote[language] || current.quote.en;
  const outcome = current.outcome[language] || current.outcome.en;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#8B2CFF]/8 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
            {t.testimonials.badge}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.testimonials.heading}
          </h2>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#151020] border border-[#A855F7]/25 text-xs text-[#C4B5D9]">
            <HelpCircle className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>{t.testimonials.placeholderNote}</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="bg-[#1C142B] border border-[#A855F7]/25 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl transition-all duration-300">
            
            {/* Top row with quote mark and course tag */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#151020] border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7]">
                <Quote className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#151020] text-[#C084FC] border border-[#A855F7]/30">
                  {courseTaken}
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {t.testimonials.placeholderTag}
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl text-white font-normal leading-relaxed mb-8">
              "{quote}"
            </blockquote>

            {/* Student Info and Outcome */}
            <div className="pt-6 border-t border-[#A855F7]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8B2CFF] to-[#5B21B6] flex items-center justify-center text-white font-bold text-sm">
                  <User className="w-5 h-5 text-purple-200" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">
                    {current.studentName}
                  </div>
                  <div className="text-xs text-[#C4B5D9]">
                    {t.testimonials.verifiedGraduate}
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#A855F7] font-medium sm:text-right max-w-xs">
                {t.testimonials.outcomePrefix} {outcome}
              </div>
            </div>

          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Indicator dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i
                      ? 'w-8 bg-[#8B2CFF]'
                      : 'w-2 bg-[#1C142B] hover:bg-[#A855F7]/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-[#1C142B] border border-[#A855F7]/30 hover:border-[#8B2CFF] text-[#C4B5D9] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-[#1C142B] border border-[#A855F7]/30 hover:border-[#8B2CFF] text-[#C4B5D9] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
