import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  HelpCircle,
  ExternalLink,
  Code,
  Copy,
  Check
} from 'lucide-react';
import { SchoolConfig } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';

interface EnrollmentSectionProps {
  config: SchoolConfig;
  preselectedCourse?: string;
}

export const EnrollmentSection: React.FC<EnrollmentSectionProps> = ({
  config,
  preselectedCourse,
}) => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    course: 'foundation',
    contactMethod: 'telegram',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [showBackendGuide, setShowBackendGuide] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setFormData(prev => ({ ...prev, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = t.contact.errors.nameRequired;
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = t.contact.errors.nameMin;
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = t.contact.errors.phoneRequired;
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(formData.phoneNumber.trim())) {
      errs.phoneNumber = t.contact.errors.phoneInvalid;
    }

    if (!formData.course) {
      errs.course = t.contact.errors.courseRequired;
    }

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData, timestamp: new Date().toLocaleTimeString() });
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      course: 'foundation',
      contactMethod: 'telegram',
      message: '',
    });
  };

  const sampleBackendSnippet = `// Real Backend Integration Example (Express / Node.js)
// In your server.ts:
app.post('/api/enroll', async (req, res) => {
  const { fullName, phoneNumber, course, contactMethod, message } = req.body;
  // Send telegram notification to school admin:
  // await telegramBot.sendMessage(ADMIN_CHAT_ID, \`New student inquiry: \${fullName} (\${phoneNumber})\`);
  res.json({ success: true, message: "Application received" });
});`;

  const copySnippet = () => {
    navigator.clipboard.writeText(sampleBackendSnippet);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const schoolAddress = typeof config.address === 'object'
    ? (config.address[language] || config.address.en)
    : config.address;

  const schoolWorkingHours = typeof config.workingHours === 'object'
    ? (config.workingHours[language] || config.workingHours.en)
    : config.workingHours;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0e0918]/80">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#8B2CFF]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
            {t.contact.badge}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.heading}
          </h2>
          
          <p className="text-base sm:text-lg text-[#C4B5D9] leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Enrollment Form */}
          <div className="lg:col-span-7 bg-[#1C142B] border border-[#A855F7]/30 rounded-3xl p-7 sm:p-10 shadow-2xl relative">
            
            {/* Demo Notice Banner */}
            <div className="mb-6 p-3.5 bg-[#151020] border border-[#A855F7]/25 rounded-xl flex items-start gap-3 text-xs text-[#C4B5D9]">
              <HelpCircle className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-medium">{t.contact.demoNoticeTitle}</strong>
                {t.contact.demoNoticeText}
              </div>
            </div>

            {isSubmitted ? (
              /* Success confirmation state */
              <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2CFF] to-emerald-500 mx-auto flex items-center justify-center text-white shadow-lg shadow-purple-900/40">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    {t.contact.success.title}
                  </h3>
                  <p className="text-sm text-[#C4B5D9] max-w-md mx-auto">
                    {t.contact.success.description}
                  </p>
                </div>

                {/* Submission Receipt Box */}
                <div className="bg-[#151020] border border-[#A855F7]/25 rounded-xl p-4 max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-[#C4B5D9]">
                  <div><span className="text-[#A855F7]">{t.contact.success.applicant}</span> {submittedData?.fullName}</div>
                  <div><span className="text-[#A855F7]">{t.contact.success.contact}</span> {submittedData?.phoneNumber} ({submittedData?.contactMethod})</div>
                  <div><span className="text-[#A855F7]">{t.contact.success.course}</span> {submittedData?.course.toUpperCase()}</div>
                  {submittedData?.message && <div><span className="text-[#A855F7]">{t.contact.success.note}</span> {submittedData?.message}</div>}
                  <div><span className="text-[#A855F7]">{t.contact.success.timestamp}</span> {submittedData?.timestamp}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-[#151020] hover:bg-[#201831] border border-[#A855F7]/40 rounded-xl transition-colors cursor-pointer"
                  >
                    {t.contact.success.submitAnother}
                  </button>
                  <button
                    onClick={() => setShowBackendGuide(!showBackendGuide)}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] rounded-xl shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>{showBackendGuide ? t.contact.success.hideBackend : t.contact.success.connectBackend}</span>
                  </button>
                </div>

                {/* Optional backend integration guide dropdown */}
                {showBackendGuide && (
                  <div className="text-left bg-[#120d1c] border border-[#A855F7]/30 rounded-xl p-4 mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#A855F7] font-semibold">Production Hookup Guide:</span>
                      <button onClick={copySnippet} className="text-xs text-[#C4B5D9] hover:text-white flex items-center gap-1 cursor-pointer">
                        {copiedCurl ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#A855F7]" />}
                        <span>{copiedCurl ? t.contact.success.copied : t.contact.success.copyCode}</span>
                      </button>
                    </div>
                    <pre className="text-[11px] font-mono text-[#C4B5D9] overflow-x-auto p-2 bg-[#0B0714] rounded">
                      <code>{sampleBackendSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            ) : (
              /* Active Application Form */
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name Field */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    {t.contact.fullName} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full bg-[#151020] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#C4B5D9]/40 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-[#A855F7]/30 focus:border-[#8B2CFF]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    {t.contact.phoneNumber} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    placeholder="e.g. +998 (91) 068 03 08"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    className={`w-full bg-[#151020] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#C4B5D9]/40 focus:outline-none transition-colors ${
                      errors.phoneNumber
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-[#A855F7]/30 focus:border-[#8B2CFF]'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>

                {/* Course of Interest */}
                <div>
                  <label htmlFor="course" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    {t.contact.courseInterest} <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8B2CFF] transition-colors cursor-pointer"
                  >
                    <option value="foundation">Foundation — Start Your Coding Journey</option>
                    <option value="frontend">Frontend Development — Build Modern Interfaces</option>
                    <option value="backend">Backend Development — Power the Web</option>
                    <option value="literacy">Computer Literacy — Master Your Computer</option>
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    {t.contact.contactMethod}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'telegram', label: 'Telegram' },
                      { id: 'phone', label: 'Phone Call' },
                      { id: 'whatsapp', label: 'WhatsApp' },
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: method.id })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          formData.contactMethod === method.id
                            ? 'bg-[#8B2CFF] border-[#8B2CFF] text-white shadow-md shadow-[#8B2CFF]/20'
                            : 'bg-[#151020] border-[#A855F7]/25 text-[#C4B5D9] hover:text-white'
                        }`}
                      >
                        {method.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    {t.contact.optionalMessage}
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#151020] border border-[#A855F7]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-[#C4B5D9]/40 focus:outline-none focus:border-[#8B2CFF] transition-colors"
                  />
                </div>

                {/* Submit Application Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-base font-bold text-white bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] hover:from-[#7a23e2] hover:to-[#9333ea] rounded-xl shadow-xl shadow-[#8B2CFF]/25 hover:shadow-[#8B2CFF]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>{t.contact.validating}</span>
                  ) : (
                    <>
                      <span>{t.contact.submitApplication}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Editable School Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1C142B] border border-[#A855F7]/25 rounded-3xl p-7 sm:p-8 space-y-6">
              
              <div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-[#151020] text-[#A855F7] border border-[#A855F7]/20">
                  {t.contact.info.badge}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  {t.contact.info.title}
                </h3>
                <p className="text-xs text-[#C4B5D9] mt-1">
                  {t.contact.info.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#151020] border border-[#A855F7]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#1C142B] border border-[#A855F7]/25 flex items-center justify-center text-[#A855F7] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#C4B5D9]">{t.contact.info.phoneLabel}</div>
                    <div className="font-semibold text-white font-mono">{config.phone}</div>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#151020] border border-[#A855F7]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#1C142B] border border-[#A855F7]/25 flex items-center justify-center text-[#A855F7] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-[#C4B5D9]">{t.contact.info.telegramLabel}</div>
                    <a
                      href={config.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white hover:text-[#C084FC] flex items-center gap-1 transition-colors"
                    >
                      <span>{config.telegram}</span>
                      <ExternalLink className="w-3 h-3 text-[#A855F7]" />
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#151020] border border-[#A855F7]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#1C142B] border border-[#A855F7]/25 flex items-center justify-center text-[#A855F7] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-[#C4B5D9]">{t.contact.info.instagramLabel}</div>
                    <a
                      href={config.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white hover:text-[#C084FC] flex items-center gap-1 transition-colors"
                    >
                      <span>{config.instagram}</span>
                      <ExternalLink className="w-3 h-3 text-[#A855F7]" />
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#151020] border border-[#A855F7]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#1C142B] border border-[#A855F7]/25 flex items-center justify-center text-[#A855F7] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#C4B5D9]">{t.contact.info.locationLabel}</div>
                    <div className="font-semibold text-white">{schoolAddress}</div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#151020] border border-[#A855F7]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#1C142B] border border-[#A855F7]/25 flex items-center justify-center text-[#A855F7] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#C4B5D9]">{t.contact.info.hoursLabel}</div>
                    <div className="font-semibold text-white">{schoolWorkingHours}</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick Consultation Banner */}
            <div className="bg-gradient-to-br from-[#8B2CFF]/20 to-[#5B21B6]/10 border border-[#8B2CFF]/30 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white mb-1">
                {t.contact.info.consultationTitle}
              </h4>
              <p className="text-xs text-[#C4B5D9] leading-relaxed mb-4">
                {t.contact.info.consultationDesc}
              </p>
              <a
                href={config.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#8B2CFF] hover:bg-[#A855F7] px-4 py-2 rounded-xl transition-colors"
              >
                <span>{t.contact.info.consultationBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
