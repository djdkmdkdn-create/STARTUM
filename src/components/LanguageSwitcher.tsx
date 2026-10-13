import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Language } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; name: string; short: string }[] = [
    { code: 'en', name: 'English', short: 'EN' },
    { code: 'ru', name: 'Русский', short: 'RU' },
    { code: 'uz', name: 'O‘zbekcha', short: 'UZ' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#C4B5D9] hover:text-white bg-[#151020] hover:bg-[#1C142B] border border-[#A855F7]/25 hover:border-[#8B2CFF]/60 rounded-xl transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-[#A855F7]" />
        <span>{currentLang.short}</span>
        <ChevronDown className={`w-3 h-3 text-[#A855F7] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-[#1C142B] border border-[#8B2CFF]/50 rounded-xl shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md">
          {languages.map((l) => {
            const isSelected = l.code === language;
            return (
              <button
                key={l.code}
                onClick={() => handleSelect(l.code)}
                className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-white bg-[#8B2CFF]/20 font-semibold'
                    : 'text-[#C4B5D9] hover:text-white hover:bg-[#151020]'
                }`}
              >
                <span>{l.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#A855F7]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
