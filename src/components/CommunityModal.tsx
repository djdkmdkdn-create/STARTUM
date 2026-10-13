import React from 'react';
import { X, Users, MessageSquare, Sparkles, ExternalLink, Calendar } from 'lucide-react';
import { SchoolConfig } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SchoolConfig;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#1C142B] border border-[#8B2CFF]/60 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="community-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#C4B5D9] hover:text-white rounded-xl bg-[#151020] border border-[#A855F7]/30 transition-colors cursor-pointer"
          aria-label={t.communityModal.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8B2CFF] to-[#5B21B6] flex items-center justify-center text-white shadow-md shadow-[#8B2CFF]/30">
            <Users className="w-6 h-6" />
          </div>
          <h3 id="community-modal-title" className="text-2xl font-extrabold text-white">
            {t.communityModal.title}
          </h3>
          <p className="text-sm text-[#C4B5D9] leading-relaxed">
            {t.communityModal.description}
          </p>
        </div>

        <div className="space-y-3">
          {/* Telegram Channel */}
          <a
            href={config.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#151020] hover:bg-[#201831] border border-[#A855F7]/25 hover:border-[#8B2CFF] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1C142B] border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7] group-hover:bg-[#8B2CFF] group-hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{t.communityModal.telegramTitle}</div>
                <div className="text-xs text-[#C4B5D9]">{config.telegram}</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A855F7] group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Instagram Page */}
          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#151020] hover:bg-[#201831] border border-[#A855F7]/25 hover:border-[#8B2CFF] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1C142B] border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7] group-hover:bg-[#8B2CFF] group-hover:text-white transition-colors">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{t.communityModal.instagramTitle}</div>
                <div className="text-xs text-[#C4B5D9]">{config.instagram}</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A855F7] group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Open Workshops */}
          <div className="p-4 rounded-xl bg-[#151020] border border-[#A855F7]/25 space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A855F7] uppercase font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.communityModal.workshopsTitle}</span>
            </div>
            <div className="text-xs text-white font-medium">
              {t.communityModal.workshopsTime}
            </div>
            <p className="text-[11px] text-[#C4B5D9]">
              {t.communityModal.workshopsDesc}
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#151020] hover:bg-[#201831] border border-[#A855F7]/30 rounded-xl transition-colors cursor-pointer"
          >
            {t.communityModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
