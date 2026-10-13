import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenEnroll: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnroll }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.courses, href: '#courses' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.why, href: '#why-startum' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0714]/90 backdrop-blur-md border-b border-[#A855F7]/20 shadow-lg shadow-purple-950/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Brand Zone: Custom STARTUM Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] rounded-lg shrink-0"
            aria-label="STARTUM IT SCHOOL Home"
          >
            <img src="/Минималистичный неоновый символ атома.png" className='w-12 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)] shadow-white' alt="" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white font-sans flex items-center gap-1">
                STARTUM
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#C4B5D9] uppercase -mt-0.5">
                IT SCHOOL
              </span>
            </div>
          </a>

          {/* Nav Links: Desktop (includes Projects between Courses and About Us) */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#C4B5D9]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white hover:underline underline-offset-8 decoration-[#8B2CFF] decoration-2 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Semi-compact nav for medium laptops */}
          <nav className="hidden md:flex xl:hidden items-center gap-4 text-xs font-medium text-[#C4B5D9]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone: Language Switcher, Enroll Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Multilingual Selector */}
            <LanguageSwitcher />

            <button
              onClick={() => onOpenEnroll()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] hover:from-[#7c24e6] hover:to-[#9333ea] rounded-xl shadow-lg shadow-[#8B2CFF]/25 hover:shadow-[#8B2CFF]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 group cursor-pointer"
            >
              <span>{t.nav.enrollNow}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Right Controls: Language Switcher + Toggle */}
          <div className="flex items-center gap-2.5 md:hidden">
            <LanguageSwitcher />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C4B5D9] hover:text-white bg-[#151020] border border-[#A855F7]/20 rounded-xl transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0714]/98 border-b border-[#A855F7]/25 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-[#C4B5D9] hover:text-white hover:bg-[#1C142B] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#A855F7]/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnroll();
              }}
              className="w-full py-3 text-center font-semibold text-white bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] rounded-xl shadow-md shadow-[#8B2CFF]/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.nav.enrollNow}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
