import React, { useState } from 'react';
import { X, Sliders, Save, RotateCcw, Copy, Check, Info } from 'lucide-react';
import { SchoolConfig, initialSchoolConfig } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';

interface SchoolConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: SchoolConfig;
  onSaveConfig: (newConfig: SchoolConfig) => void;
}

export const SchoolConfigDrawer: React.FC<SchoolConfigDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const { language, t } = useLanguage();
  const [draft, setDraft] = useState<SchoolConfig>(config);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(draft);
    onClose();
  };

  const handleReset = () => {
    setDraft(initialSchoolConfig);
    onSaveConfig(initialSchoolConfig);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(draft, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentAddress = typeof draft.address === 'object'
    ? (draft.address[language] || draft.address.en)
    : draft.address;

  const currentWorkingHours = typeof draft.workingHours === 'object'
    ? (draft.workingHours[language] || draft.workingHours.en)
    : draft.workingHours;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#1C142B] border-l border-[#8B2CFF]/50 w-full max-w-md h-full p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="config-drawer-title"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#A855F7]/20 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#8B2CFF]/20 border border-[#8B2CFF]/40 flex items-center justify-center text-[#A855F7]">
                <Sliders className="w-4 h-4" />
              </div>
              <div>
                <h3 id="config-drawer-title" className="text-base font-bold text-white">
                  {t.configDrawer.title}
                </h3>
                <p className="text-[11px] text-[#C4B5D9]">
                  {t.configDrawer.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#C4B5D9] hover:text-white rounded-lg hover:bg-[#151020] transition-colors cursor-pointer"
              aria-label="Close settings"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-5 text-xs">
            {/* Statistics group */}
            <div className="space-y-3">
              <span className="font-mono uppercase font-bold text-[#A855F7] tracking-wider block">
                {t.configDrawer.statsGroup}
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#C4B5D9] mb-1 font-medium">{t.configDrawer.students}</label>
                  <input
                    type="number"
                    value={draft.stats.students}
                    onChange={(e) => setDraft({
                      ...draft,
                      stats: { ...draft.stats, students: Number(e.target.value) }
                    })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[#C4B5D9] mb-1 font-medium">{t.configDrawer.courses}</label>
                  <input
                    type="number"
                    value={draft.stats.courses}
                    onChange={(e) => setDraft({
                      ...draft,
                      stats: { ...draft.stats, courses: Number(e.target.value) }
                    })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[#C4B5D9] mb-1 font-medium">{t.configDrawer.projects}</label>
                  <input
                    type="number"
                    value={draft.stats.projects}
                    onChange={(e) => setDraft({
                      ...draft,
                      stats: { ...draft.stats, projects: Number(e.target.value) }
                    })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[#C4B5D9] mb-1 font-medium">{t.configDrawer.practical}</label>
                  <input
                    type="number"
                    value={draft.stats.practicalPercentage}
                    onChange={(e) => setDraft({
                      ...draft,
                      stats: { ...draft.stats, practicalPercentage: Number(e.target.value) }
                    })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Contact details group */}
            <div className="space-y-3 pt-3 border-t border-[#A855F7]/15">
              <span className="font-mono uppercase font-bold text-[#A855F7] tracking-wider block">
                {t.configDrawer.contactGroup}
              </span>

              <div>
                <label className="block text-[#C4B5D9] mb-1 font-medium">{t.configDrawer.phone}</label>
                <input
                  type="text"
                  value={draft.phone}
                  onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
                  className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-[#C4B5D9] mb-1 font-medium">{t.configDrawer.telegram}</label>
                <input
                  type="text"
                  value={draft.telegram}
                  onChange={(e) => setDraft({ ...draft, telegram: e.target.value })}
                  className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[#C4B5D9] mb-1 font-medium">{t.configDrawer.instagram}</label>
                <input
                  type="text"
                  value={draft.instagram}
                  onChange={(e) => setDraft({ ...draft, instagram: e.target.value })}
                  className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[#C4B5D9] mb-1 font-medium">{t.configDrawer.address}</label>
                <input
                  type="text"
                  value={currentAddress}
                  onChange={(e) => {
                    const newAddress = typeof draft.address === 'object'
                      ? { ...draft.address, [language]: e.target.value }
                      : e.target.value;
                    setDraft({ ...draft, address: newAddress as any });
                  }}
                  className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[#C4B5D9] mb-1 font-medium">{t.configDrawer.hours}</label>
                <input
                  type="text"
                  value={currentWorkingHours}
                  onChange={(e) => {
                    const newHours = typeof draft.workingHours === 'object'
                      ? { ...draft.workingHours, [language]: e.target.value }
                      : e.target.value;
                    setDraft({ ...draft, workingHours: newHours as any });
                  }}
                  className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-white"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyJSON}
                className="flex-1 py-2 px-3 bg-[#151020] hover:bg-[#201831] border border-[#A855F7]/30 rounded-lg text-white font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#A855F7]" />}
                <span>{copied ? t.configDrawer.copiedJson : t.configDrawer.exportJson}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="py-2 px-3 bg-[#151020] hover:bg-[#201831] border border-[#A855F7]/30 rounded-lg text-[#C4B5D9] hover:text-white transition-colors cursor-pointer"
                title="Reset to defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-4 border-t border-[#A855F7]/20 flex gap-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] text-white rounded-xl font-bold shadow-md shadow-[#8B2CFF]/30 hover:opacity-95 transition-opacity cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Save className="w-4 h-4" />
                <span>{t.configDrawer.applyChanges}</span>
              </button>
            </div>
          </form>
        </div>

        <div className="pt-4 border-t border-[#A855F7]/15 text-[11px] text-[#C4B5D9]/70 flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#A855F7] shrink-0" />
          <span>{t.configDrawer.footerNote}</span>
        </div>
      </div>
    </div>
  );
};
