import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 bg-[#1C142B]/90 hover:bg-[#8B2CFF] text-[#C4B5D9] hover:text-white rounded-xl border border-[#A855F7]/30 hover:border-[#8B2CFF] shadow-lg shadow-purple-950/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
