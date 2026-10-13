import React from 'react';
import { MessageSquare, Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import { SchoolConfig, COURSES_DATA } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  config: SchoolConfig;
  onSelectCourseById: (courseId: string) => void;
  onOpenConfig?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onSelectCourseById,
}) => {
  const { language, t } = useLanguage();
  const currentYear = 2026;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const schoolAddress = typeof config.address === 'object'
    ? (config.address[language] || config.address.en)
    : config.address;

  const schoolWorkingHours = typeof config.workingHours === 'object'
    ? (config.workingHours[language] || config.workingHours.en)
    : config.workingHours;

  return (
    <footer className="relative bg-[#07040E] border-t border-[#A855F7]/20 pt-16 pb-12 overflow-hidden text-[#C4B5D9]">
      {/* Decorative purple gradient element */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#8B2CFF] to-transparent shadow-[0_0_15px_#8B2CFF]" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#8B2CFF]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#A855F7]/15">
          
          {/* Column 1 & 2: School Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="inline-flex items-center gap-3 group"
            >
            <img src="/Минималистичный неоновый символ атома.png" className='w-9 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)] shadow-white' alt="" />
              
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider text-white">
                  STARTUM
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#A855F7] uppercase -mt-0.5">
                  IT SCHOOL
                </span>
              </div>
            </a>

            <p className="text-sm text-[#C4B5D9] leading-relaxed max-w-sm">
              {t.footer.schoolDesc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={config.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#151020] border border-[#A855F7]/25 hover:border-[#8B2CFF] hover:text-white flex items-center justify-center text-[#A855F7] transition-all hover:scale-105"
                aria-label="STARTUM Telegram Channel"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#151020] border border-[#A855F7]/25 hover:border-[#8B2CFF] hover:text-white flex items-center justify-center text-[#A855F7] transition-all hover:scale-105"
                aria-label="STARTUM Instagram Page"
              >
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => scrollToSection(e, '#courses')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.courses}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#why-startum"
                  onClick={(e) => scrollToSection(e, '#why-startum')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.why}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Course Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t.footer.programsTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              {COURSES_DATA.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onSelectCourseById(c.id)}
                    className="hover:text-white transition-colors text-left cursor-pointer truncate max-w-[200px]"
                  >
                    {c.title[language] || c.title.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Placeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B5D9]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                <span>{schoolAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A855F7] shrink-0" />
                <span>{config.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A855F7] shrink-0" />
                <span>{config.email}</span>
              </li>
              <li className="pt-1 text-[11px] text-[#A855F7]/80">
                {schoolWorkingHours}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C4B5D9]/70">
          <div>
            © {currentYear} STARTUM IT SCHOOL. {t.footer.allRightsReserved}
          </div>
          <div className="flex items-center gap-6">
            <span>{t.footer.tagline1}</span>
            <span>·</span>
            <span>{t.footer.tagline2}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
