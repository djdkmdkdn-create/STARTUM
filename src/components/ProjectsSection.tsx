import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  FolderGit2, 
  Users, 
  Code2, 
  Lock, 
  ArrowUpRight,
  FilterX
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem, PROJECTS_GALLERY } from '../data/projectsData';

export const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'Websites', label: t.projects.filterWebsites },
    { id: 'Web Applications', label: t.projects.filterWebApps },
    { id: 'Student Projects', label: t.projects.filterStudent },
  ];

  const filteredProjects = PROJECTS_GALLERY.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'Student Projects') {
      return project.creatorType === 'Student Project' || project.category === 'Student Projects';
    }
    return project.category === activeCategory;
  });

  const handleProjectClick = (project: ProjectItem) => {
    if (project.projectUrl) {
      window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0c0817]">
      {/* Background radial purple glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#8B2CFF]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.projects.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {t.projects.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#C4B5D9] leading-relaxed">
            {t.projects.description}
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveCategory(opt.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === opt.id
                    ? 'bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] text-white shadow-lg shadow-[#8B2CFF]/30 -translate-y-0.5'
                    : 'bg-[#151020] text-[#C4B5D9] hover:text-white border border-[#A855F7]/20 hover:border-[#A855F7]/50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => {
              const hasUrl = Boolean(project.projectUrl);
              const desc = project.description[language] || project.description.en;
              const isCreatorTeam = project.creatorType === 'Team Project';

              return (
                <div
                  key={project.id}
                  onClick={() => hasUrl && handleProjectClick(project)}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && hasUrl) {
                      e.preventDefault();
                      handleProjectClick(project);
                    }
                  }}
                  tabIndex={hasUrl ? 0 : undefined}
                  role={hasUrl ? 'button' : undefined}
                  aria-label={`${project.title} - ${t.projects.viewProject}`}
                  className={`group bg-[#1C142B] border rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                    hasUrl
                      ? 'border-[#A855F7]/25 hover:border-[#8B2CFF] hover:shadow-2xl hover:shadow-[#8B2CFF]/20 hover:-translate-y-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]'
                      : 'border-[#A855F7]/15 opacity-90'
                  }`}
                >
                  <div>
                    {/* Project Screenshot / Visual Container */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#151020] border-b border-[#A855F7]/20">
                      <img
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />

                      {/* Scrim Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C142B] via-transparent to-black/30" />

                      {/* Top Badges (Featured and Creator Type) */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        {project.featured ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#8B2CFF] text-white shadow-md shadow-[#8B2CFF]/40 uppercase">
                            <Sparkles className="w-3 h-3" />
                            <span>{t.projects.featuredBadge}</span>
                          </span>
                        ) : <span />}

                        <span className={`text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-md backdrop-blur-md border ${
                          isCreatorTeam
                            ? 'bg-[#151020]/90 text-[#C084FC] border-[#8B2CFF]/40'
                            : 'bg-[#0B0714]/90 text-[#C4B5D9] border-white/20'
                        }`}>
                          {isCreatorTeam ? t.projects.teamProject : t.projects.studentProject}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#A855F7] font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#C084FC] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#C4B5D9] leading-relaxed line-clamp-3">
                        {desc}
                      </p>

                      {/* Technologies Chips */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#151020] text-[#C4B5D9] border border-[#A855F7]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-6 pb-6 pt-3 border-t border-[#A855F7]/15 flex items-center justify-between">
                    {hasUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#C084FC] transition-colors"
                      >
                        <span>{t.projects.viewProject}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#A855F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C4B5D9]/60">
                        <Lock className="w-3.5 h-3.5" />
                        <span>{t.projects.comingSoon}</span>
                      </span>
                    )}

                    <span className="text-[10px] font-mono text-[#C4B5D9]/50">
                      ID: {project.id}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 px-4 bg-[#1C142B] border border-[#A855F7]/20 rounded-3xl max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#151020] border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7] mx-auto">
              <FilterX className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {t.projects.emptyTitle}
            </h3>
            <p className="text-sm text-[#C4B5D9]">
              {t.projects.emptyDesc}
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#8B2CFF] hover:bg-[#A855F7] rounded-xl transition-colors cursor-pointer"
            >
              {t.projects.resetFilter}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
