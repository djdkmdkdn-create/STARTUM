import React, { useState } from 'react';
import { Code2, Edit3, CheckCircle2 } from 'lucide-react';
import { Instructor } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';

interface InstructorSectionProps {
  instructor: Instructor;
  onUpdateInstructor?: (updated: Instructor) => void;
}

export const InstructorSection: React.FC<InstructorSectionProps> = ({
  instructor,
  onUpdateInstructor,
}) => {
  const { language, t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Instructor>(instructor);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateInstructor) {
      onUpdateInstructor(editForm);
    }
    setIsEditing(false);
  };

  const roleText = instructor.role[language] || instructor.role.en;
  const expText = instructor.experience[language] || instructor.experience.en;
  const bioText = instructor.bio[language] || instructor.bio.en;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#8B2CFF]/8 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
            {t.instructor.badge}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.instructor.heading}
          </h2>
          
          <p className="text-base sm:text-lg text-[#C4B5D9] leading-relaxed">
            {t.instructor.description}
          </p>
        </div>

        {/* Instructor Profile Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Editable Placeholder Notice */}
          <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#C4B5D9] bg-[#151020] px-4 py-2.5 rounded-xl border border-[#A855F7]/20">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>{t.instructor.placeholderNote}</span>
            </span>
            {onUpdateInstructor && (
              <button
                onClick={() => {
                  setEditForm(instructor);
                  setIsEditing(!isEditing);
                }}
                className="font-medium text-[#A855F7] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? t.instructor.cancelEdit : t.instructor.editProfile}</span>
              </button>
            )}
          </div>

          {/* Edit Form Modal/Drawer */}
          {isEditing && (
            <form onSubmit={handleSave} className="bg-[#1C142B] border border-[#8B2CFF] rounded-2xl p-6 mb-6 space-y-4 animate-in fade-in duration-200">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#A855F7]" />
                {t.instructor.formTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#C4B5D9] mb-1">{t.instructor.fullNameLabel}</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#8B2CFF]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#C4B5D9] mb-1">{t.instructor.roleLabel}</label>
                  <input
                    type="text"
                    value={editForm.role[language] || editForm.role.en}
                    onChange={(e) => setEditForm({
                      ...editForm,
                      role: { ...editForm.role, [language]: e.target.value }
                    })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#8B2CFF]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#C4B5D9] mb-1">{t.instructor.expLabel}</label>
                  <input
                    type="text"
                    value={editForm.experience[language] || editForm.experience.en}
                    onChange={(e) => setEditForm({
                      ...editForm,
                      experience: { ...editForm.experience, [language]: e.target.value }
                    })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#8B2CFF]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#C4B5D9] mb-1">{t.instructor.photoLabel}</label>
                  <input
                    type="text"
                    value={editForm.photoUrl}
                    onChange={(e) => setEditForm({ ...editForm, photoUrl: e.target.value })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#8B2CFF]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#C4B5D9] mb-1">{t.instructor.bioLabel}</label>
                <textarea
                  rows={3}
                  value={editForm.bio[language] || editForm.bio.en}
                  onChange={(e) => setEditForm({
                    ...editForm,
                    bio: { ...editForm.bio, [language]: e.target.value }
                  })}
                  className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#8B2CFF]"
                  required
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#C4B5D9] hover:text-white bg-[#151020] rounded-lg cursor-pointer"
                >
                  {t.instructor.cancel}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] rounded-lg shadow-md cursor-pointer"
                >
                  {t.instructor.saveProfile}
                </button>
              </div>
            </form>
          )}

          {/* Main Profile Card */}
          <div className="bg-[#1C142B] border border-[#A855F7]/25 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-xl hover:border-[#8B2CFF]/50 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Photo & Badge */}
              <div className="md:col-span-4 flex flex-col items-center sm:items-start">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#8B2CFF]/40 shadow-lg shadow-[#8B2CFF]/20 group">
                  <img
                    src={instructor.photoUrl}
                    alt={`${instructor.name} - Instructor at STARTUM IT SCHOOL`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0714]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-[#151020]/90 backdrop-blur-sm rounded-lg text-center">
                    <span className="text-[11px] font-mono text-[#C084FC] font-semibold">
                      {expText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Information & Details */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {instructor.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#151020] text-[#A855F7] border border-[#A855F7]/30">
                      {t.instructor.facultyTag}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#A855F7]">
                    {roleText}
                  </p>
                </div>

                <p className="text-sm text-[#C4B5D9] leading-relaxed">
                  {bioText}
                </p>

                {/* Technologies Taught */}
                <div>
                  <div className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#A855F7]" />
                    <span>{t.instructor.techTaught}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {instructor.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#151020] text-[#C4B5D9] border border-[#A855F7]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mentor commitments */}
                <div className="pt-3 border-t border-[#A855F7]/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C4B5D9]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0" />
                    <span>{t.instructor.commitment1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0" />
                    <span>{t.instructor.commitment2}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
