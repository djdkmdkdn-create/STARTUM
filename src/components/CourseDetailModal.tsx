import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  ArrowRight, 
  Target 
} from 'lucide-react';
import { Course } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll,
}) => {
  const { language, t } = useLanguage();

  if (!course) return null;

  const title = course.title[language] || course.title.en;
  const subtitle = course.subtitle[language] || course.subtitle.en;
  const description = course.description[language] || course.description.en;
  const badge = course.badge ? (course.badge[language] || course.badge.en) : null;
  const level = course.level[language] || course.level.en;
  const duration = course.duration[language] || course.duration.en;
  const outcomes = course.outcomes[language] || course.outcomes.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#1C142B] border border-[#8B2CFF]/60 rounded-3xl max-w-3xl w-full p-6 sm:p-9 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#C4B5D9] hover:text-white rounded-xl bg-[#151020] border border-[#A855F7]/30 hover:border-[#8B2CFF] transition-colors cursor-pointer"
          aria-label={t.courseModal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            {badge && (
              <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#8B2CFF]/20 text-[#C084FC] border border-[#8B2CFF]/40 uppercase">
                {badge}
              </span>
            )}
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#151020] text-[#C4B5D9] border border-[#A855F7]/25">
              {t.courseModal.level}: {level}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#151020] text-[#C4B5D9] border border-[#A855F7]/25">
              {t.courseModal.duration}: {duration}
            </span>
          </div>

          <h3 id="course-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-[#C084FC] font-medium">
            {subtitle}
          </p>

          <p className="text-sm text-[#C4B5D9] leading-relaxed pt-1">
            {description}
          </p>
        </div>

        {/* Technologies Covered */}
        <div className="p-4 rounded-2xl bg-[#151020] border border-[#A855F7]/20 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>{t.courseModal.toolsLearned}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((item) => (
              <span
                key={item}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-[#1C142B] text-white border border-[#A855F7]/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Curriculum Modules Breakdown */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#A855F7]" />
            <span>{t.courseModal.syllabus}</span>
          </h4>

          <div className="space-y-3">
            {course.modules.map((mod, i) => {
              const modTitle = mod.title[language] || mod.title.en;
              const modDesc = mod.description[language] || mod.description.en;

              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#151020]/90 border border-[#A855F7]/20 space-y-1.5"
                >
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[#8B2CFF]/30 text-[#C084FC] text-xs font-mono flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{modTitle}</span>
                  </div>
                  <p className="text-xs text-[#C4B5D9] leading-relaxed pl-7">
                    {modDesc}
                  </p>
                  <div className="pl-7 pt-1 flex flex-wrap gap-1.5">
                    {mod.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1C142B] text-[#A855F7]"
                      >
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Target className="w-4 h-4 text-[#A855F7]" />
            <span>{t.courseModal.outcomesTitle}</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C4B5D9]">
            {outcomes.map((out, i) => (
              <div key={i} className="flex items-start gap-2 bg-[#151020] p-2.5 rounded-lg border border-[#A855F7]/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                <span>{out}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-4 border-t border-[#A855F7]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#C4B5D9]">
            {t.courseModal.note}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-[#C4B5D9] hover:text-white bg-[#151020] rounded-xl border border-[#A855F7]/30 transition-colors cursor-pointer"
            >
              {t.courseModal.close}
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course.id);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] hover:from-[#7c24e6] hover:to-[#9333ea] rounded-xl shadow-lg shadow-[#8B2CFF]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.courseModal.enrollAction}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
