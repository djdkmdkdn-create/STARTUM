import React, { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, FolderCheck, Cpu, Edit3, HelpCircle } from 'lucide-react';
import { SchoolConfig } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';

interface StatisticsSectionProps {
  config: SchoolConfig;
  onOpenConfig?: () => void;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({ config, onOpenConfig }) => {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    projects: 0,
    practical: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const targetStudents = config.stats.students;
    const targetCourses = config.stats.courses;
    const targetProjects = config.stats.projects;
    const targetPractical = config.stats.practicalPercentage;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const factor = progress * (2 - progress);

      setCounts({
        students: Math.round(targetStudents * factor),
        courses: Math.round(targetCourses * factor),
        projects: Math.round(targetProjects * factor),
        practical: Math.round(targetPractical * factor),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          students: targetStudents,
          courses: targetCourses,
          projects: targetProjects,
          practical: targetPractical,
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated, config.stats]);

  const statsCards = [
    {
      id: 'students',
      label: t.stats.studentsLabel,
      value: `${counts.students}${config.stats.studentsSuffix}`,
      subtext: t.stats.studentsSub,
      icon: Users,
    },
    {
      id: 'courses',
      label: t.stats.coursesLabel,
      value: `${counts.courses}${config.stats.coursesSuffix}`,
      subtext: t.stats.coursesSub,
      icon: BookOpen,
    },
    {
      id: 'projects',
      label: t.stats.projectsLabel,
      value: `${counts.projects}${config.stats.projectsSuffix}`,
      subtext: t.stats.projectsSub,
      icon: FolderCheck,
    },
    {
      id: 'practical',
      label: t.stats.practicalLabel,
      value: `${counts.practical}${config.stats.practicalSuffix}`,
      subtext: t.stats.practicalSub,
      icon: Cpu,
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative py-12 bg-[#151020]/70 border-y border-[#A855F7]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial disclaimer & customization trigger */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2 text-xs text-[#C4B5D9]">
            <HelpCircle className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>{t.stats.disclaimer}</span>
          </div>
          {onOpenConfig && (
            <button
              onClick={onOpenConfig}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#C4B5D9] hover:text-white bg-[#1C142B] hover:bg-[#231a38] border border-[#A855F7]/30 rounded-lg transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>{t.stats.customizeBtn}</span>
            </button>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsCards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative bg-[#1C142B] border border-[#A855F7]/20 hover:border-[#A855F7]/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#151020] border border-[#A855F7]/25 flex items-center justify-center text-[#A855F7] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums mb-1">
                  {item.value}
                </div>

                <div className="text-sm font-semibold text-white mb-0.5">
                  {item.label}
                </div>

                <div className="text-xs text-[#C4B5D9]/80 leading-normal">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
