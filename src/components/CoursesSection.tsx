import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Monitor, 
  ArrowRight, 
  Clock, 
  Layers 
} from 'lucide-react';
import { Course, COURSES_DATA } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourse,
  onEnrollCourse,
}) => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'beginner' | 'intermediate'>('all');

  const courseIcons: Record<string, React.ReactNode> = {
    foundation: <Code2 className="w-6 h-6 text-[#A855F7]" />,
    frontend: <Layout className="w-6 h-6 text-[#A855F7]" />,
    backend: <Server className="w-6 h-6 text-[#A855F7]" />,
    literacy: <Monitor className="w-6 h-6 text-[#A855F7]" />,
  };

  const filteredCourses = COURSES_DATA.filter(course => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'beginner') return course.level.en.toLowerCase().includes('beginner');
    if (activeFilter === 'intermediate') return course.level.en.toLowerCase().includes('intermediate');
    return true;
  });

  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      {/* Background radial purple glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#8B2CFF]/10 to-[#5B21B6]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
            {t.courses.badge}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.courses.heading}
          </h2>
          
          <p className="text-base sm:text-lg text-[#C4B5D9] leading-relaxed">
            {t.courses.description}
          </p>

          {/* Interactive filter tabs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#8B2CFF] text-white shadow-md shadow-[#8B2CFF]/30'
                  : 'bg-[#151020] text-[#C4B5D9] hover:text-white border border-[#A855F7]/20'
              }`}
            >
              {t.courses.filterAll}
            </button>
            <button
              onClick={() => setActiveFilter('beginner')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'beginner'
                  ? 'bg-[#8B2CFF] text-white shadow-md shadow-[#8B2CFF]/30'
                  : 'bg-[#151020] text-[#C4B5D9] hover:text-white border border-[#A855F7]/20'
              }`}
            >
              {t.courses.filterBeginner}
            </button>
            <button
              onClick={() => setActiveFilter('intermediate')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'intermediate'
                  ? 'bg-[#8B2CFF] text-white shadow-md shadow-[#8B2CFF]/30'
                  : 'bg-[#151020] text-[#C4B5D9] hover:text-white border border-[#A855F7]/20'
              }`}
            >
              {t.courses.filterAdvanced}
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => {
            const icon = courseIcons[course.id];
            const title = course.title[language] || course.title.en;
            const desc = course.description[language] || course.description.en;
            const badge = course.badge ? (course.badge[language] || course.badge.en) : null;
            const level = course.level[language] || course.level.en;
            const duration = course.duration[language] || course.duration.en;
            const format = course.format[language] || course.format.en;

            return (
              <div
                key={course.id}
                className="group relative bg-[#1C142B] border border-[#A855F7]/25 hover:border-[#8B2CFF] rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-[#8B2CFF]/15 flex flex-col justify-between"
              >
                {/* Top card header */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#151020] border border-[#A855F7]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {icon}
                    </div>

                    <div className="flex items-center gap-2">
                      {badge && (
                        <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#8B2CFF]/20 text-[#C084FC] border border-[#8B2CFF]/40 uppercase">
                          {badge}
                        </span>
                      )}
                      <span className="text-xs font-medium text-[#C4B5D9] bg-[#151020] px-2.5 py-1 rounded-md border border-[#A855F7]/20">
                        {level}
                      </span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-[#C084FC] transition-colors">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#C4B5D9] leading-relaxed mb-6">
                    {desc}
                  </p>

                  {/* Key Technologies Chips */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-white/90 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#A855F7]" />
                      <span>{t.courses.techLabel}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#151020] text-[#C4B5D9] border border-[#A855F7]/20"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-xs text-[#C4B5D9] mb-6 pt-4 border-t border-[#A855F7]/15">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A855F7]" />
                      <span>{t.courses.durationPrefix} {duration}</span>
                    </div>
                    <span>·</span>
                    <span>{format}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="flex-1 py-3 px-4 text-sm font-semibold text-white bg-[#151020] hover:bg-[#201831] border border-[#A855F7]/30 hover:border-[#A855F7] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.courses.learnMore}</span>
                    <ArrowRight className="w-4 h-4 text-[#A855F7]" />
                  </button>

                  <button
                    onClick={() => onEnrollCourse(course.id)}
                    className="py-3 px-5 text-sm font-semibold text-white bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] hover:from-[#7a23e2] hover:to-[#9333ea] rounded-xl shadow-md shadow-[#8B2CFF]/20 hover:shadow-[#8B2CFF]/40 transition-all cursor-pointer whitespace-nowrap"
                  >
                    {t.courses.enroll}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
