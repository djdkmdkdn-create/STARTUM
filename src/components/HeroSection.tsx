import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Code2, 
  Layers, 
  Laptop, 
  FolderGit2, 
  Play, 
  Sparkles, 
  Users,
  Copy,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onJoinCommunity: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCourses,
  onJoinCommunity,
}) => {
  const { t } = useLanguage();
  const [activeCodeTab, setActiveCodeTab] = useState<'frontend' | 'backend' | 'foundation'>('frontend');
  const [isRunning, setIsRunning] = useState(false);
  const [outputLogs, setOutputLogs] = useState<string[]>([
    'Compiled successfully in 142ms',
    'Ready at http://localhost:3000',
    'Student workspace initialized'
  ]);
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    frontend: `// STARTUM Frontend Track: React 19 Component
import { useState } from "react";

export function StudentProfile() {
  const [skills, setSkills] = useState(["React", "Next.js"]);

  return (
    <div className="card border-purple">
      <h3>Future Tech Lead</h3>
      <p>Building real web applications with STARTUM</p>
    </div>
  );
}`,
    backend: `// STARTUM Backend Track: Express + Node.js
import express from "express";
const app = express();

app.get("/api/v1/courses", (req, res) => {
  res.json({
    school: "STARTUM IT SCHOOL",
    status: "Enrollment Open",
    tracks: ["Foundation", "Frontend", "Backend"]
  });
});`,
    foundation: `<!-- STARTUM Foundation Track: Semantic Web -->
<section class="learning-hero">
  <h1 class="gradient-text">Hello, World!</h1>
  <p>First step into the world of algorithms</p>
  <button onclick="startCoding()">Level Up</button>
</section>`
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setOutputLogs(prev => [
        `> Executing ${activeCodeTab}.ts [OK]`,
        `> Build completed: 0 errors, 100% test pass`,
        ...prev.slice(0, 2)
      ]);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#8B2CFF]/15 via-[#A855F7]/10 to-transparent rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-20 right-10 w-72 h-72 bg-[#5B21B6]/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Small Trust Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1C142B] border border-[#A855F7]/30 text-xs font-semibold tracking-wider text-[#C4B5D9] uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse" />
              <span>{t.hero.trustLabel}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              {t.hero.headlineLine1} <br />
              <span className="bg-gradient-to-r from-[#8B2CFF] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
                {t.hero.startsWithCode}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#C4B5D9] font-normal leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreCourses}
                className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#8B2CFF] to-[#A855F7] hover:from-[#7b24e4] hover:to-[#9333ea] rounded-xl shadow-xl shadow-[#8B2CFF]/30 hover:shadow-[#8B2CFF]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>{t.hero.exploreCourses}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onJoinCommunity}
                className="px-7 py-4 text-base font-semibold text-[#FFFFFF] hover:text-white bg-[#151020] hover:bg-[#1C142B] border border-[#A855F7]/30 hover:border-[#A855F7]/60 rounded-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Users className="w-5 h-5 text-[#A855F7]" />
                <span>{t.hero.joinCommunity}</span>
              </button>
            </div>

            {/* 3 Compact Highlights */}
            <div className="pt-4 border-t border-[#A855F7]/15 grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#1C142B] border border-[#A855F7]/25 flex items-center justify-center text-[#A855F7] shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  {t.hero.practicalLearning}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#1C142B] border border-[#A855F7]/25 flex items-center justify-center text-[#A855F7] shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  {t.hero.modernTechnologies}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#1C142B] border border-[#A855F7]/25 flex items-center justify-center text-[#A855F7] shrink-0">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  {t.hero.realProjects}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D-inspired Programming Workspace Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Purple Backdrop Glow */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-4 bg-gradient-to-r from-[#8B2CFF]/20 via-[#A855F7]/15 to-[#5B21B6]/25 rounded-3xl blur-2xl -z-10" 
            />

            {/* Main Code Editor Window Mockup */}
            <div className="bg-[#151020] border border-[#A855F7]/30 rounded-2xl shadow-2xl shadow-purple-950/50 overflow-hidden transform lg:hover:rotate-0 transition-transform duration-500">
              
              {/* Window Titlebar */}
              <div className="bg-[#0B0714] px-4 py-3 border-b border-[#A855F7]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-[#C4B5D9] flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#A855F7]" />
                    {t.hero.workspaceFile}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="p-1 text-[#C4B5D9] hover:text-white rounded hover:bg-[#1C142B] transition-colors"
                    title={copied ? t.hero.copied : "Copy code"}
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="px-2.5 py-1 text-xs font-semibold bg-[#8B2CFF] hover:bg-[#A855F7] text-white rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                    <span>{isRunning ? t.hero.running : t.hero.run}</span>
                  </button>
                </div>
              </div>

              {/* Code Tab Switcher */}
              <div className="bg-[#0e091a] px-3 pt-2 flex items-center gap-1 border-b border-[#A855F7]/15 overflow-x-auto">
                <button
                  onClick={() => setActiveCodeTab('frontend')}
                  className={`px-3 py-1.5 text-xs font-mono font-medium rounded-t-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeCodeTab === 'frontend'
                      ? 'bg-[#151020] text-[#A855F7] border-t-2 border-[#A855F7]'
                      : 'text-[#C4B5D9] hover:text-white'
                  }`}
                >
                  Frontend.tsx
                </button>
                <button
                  onClick={() => setActiveCodeTab('backend')}
                  className={`px-3 py-1.5 text-xs font-mono font-medium rounded-t-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeCodeTab === 'backend'
                      ? 'bg-[#151020] text-[#A855F7] border-t-2 border-[#A855F7]'
                      : 'text-[#C4B5D9] hover:text-white'
                  }`}
                >
                  Backend.ts
                </button>
                <button
                  onClick={() => setActiveCodeTab('foundation')}
                  className={`px-3 py-1.5 text-xs font-mono font-medium rounded-t-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeCodeTab === 'foundation'
                      ? 'bg-[#151020] text-[#A855F7] border-t-2 border-[#A855F7]'
                      : 'text-[#C4B5D9] hover:text-white'
                  }`}
                >
                  Foundation.html
                </button>
              </div>

              {/* Editor Code Body */}
              <div className="p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-[#120d1c] min-h-[175px]">
                <pre className="text-[#C4B5D9]">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Simulated Terminal Footer */}
              <div className="bg-[#090510] p-3 border-t border-[#A855F7]/20 font-mono text-[11px]">
                <div className="flex items-center justify-between text-[#A855F7] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    {t.hero.consoleTitle}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-medium">{t.hero.consoleActive}</span>
                </div>
                <div className="space-y-0.5 text-[#C4B5D9]/80">
                  {outputLogs.map((log, i) => (
                    <div key={i} className="truncate">
                      {log}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Floating Achievement Card Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-[#1C142B]/95 backdrop-blur-md border border-[#A855F7]/40 rounded-xl p-3 shadow-xl items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#8B2CFF] to-[#A855F7] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">{t.hero.badgeTitle}</div>
                <div className="text-[11px] text-[#C4B5D9]">{t.hero.badgeDesc}</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
