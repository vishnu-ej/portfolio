'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  FileText, 
  ArrowRight, 
  Mail, 
  Phone, 
  Check, 
  Copy, 
  Sliders, 
  Sparkles, 
  TrendingUp, 
  Brain, 
  ShieldCheck,
  Trophy,
  Award,
  MapPin
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Two-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Pill / Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-sm shadow-cyan-500/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 -ml-3.5 rounded-full bg-emerald-400"></span>
              <span>Asst. Manager @ Great Learning</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Reliance Foundation Scholar</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 tracking-tight mb-5">
              Product & Performance Analyst{' '}
              <span className="text-cyan-400 font-mono">|</span>{' '}
              Data Scientist
            </h2>

            {/* Concise Value Proposition */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-8">
              Specialized in turning complex acquisition funnels into high-yield growth engines. Combining{' '}
              <strong className="text-slate-200 font-medium">MSc Data Science rigor</strong> with hands-on expertise in{' '}
              <span className="text-cyan-300 font-medium">managing $850K+ monthly ad budgets</span>, and{' '}
              <span className="text-indigo-300 font-medium">building customised LPs and experimenting using self-serve platforms</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm font-semibold border border-cyan-500/30 hover:border-cyan-400/50 shadow-md backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Career Experience (2.5+ Yrs)</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 hover:border-slate-600 shadow-md backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Contact & Social Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-4 border-t border-slate-800/80 w-full">
              {/* Email Pill */}
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Click to copy email address"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-all group"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-400 ml-1" />
                )}
              </button>

              {/* Phone Pill */}
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                title="Click to copy phone number"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-all group"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>{personalInfo.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-400 ml-1" />
                )}
              </button>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/40 text-xs font-medium text-slate-300 hover:text-blue-300 transition-all group"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/40 text-xs font-medium text-slate-300 hover:text-purple-300 transition-all group"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Portrait Card with Glow & Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Ambient Behind Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none"></div>

            {/* Portrait Frame Card */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] p-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/80 via-indigo-500/60 to-purple-500/80 shadow-2xl shadow-cyan-950/40">
              
              {/* Inner container */}
              <div className="relative rounded-[22px] overflow-hidden bg-slate-950">
                
                {/* Profile Image with subtle atmospheric color filter */}
                <img
                  src="/profile.jpg"
                  alt="Vishnu E J"
                  className="w-full aspect-[4/5] object-cover object-top filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle gradient vignette to blend base smoothly */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                {/* Top-Right Location Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-[11px] font-medium text-slate-200 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Bangalore, India</span>
                </div>

                {/* Floating Badge 1 (Top Left): Rookie Rockstar */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-amber-950/90 backdrop-blur-md border border-amber-500/40 text-amber-200 text-[11px] font-bold flex items-center gap-1.5 shadow-lg shadow-black/40">
                  <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Rookie Rockstar &apos;25</span>
                </div>

                {/* Bottom Overlay Info Banner */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/90">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">
                        {personalInfo.name}
                      </div>
                      <div className="text-[11px] text-cyan-300 font-medium">
                        Asst. Manager @ Great Learning
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-300">
                      $850K+ Budgets
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Quick Domain Badges Strip (Bottom of Hero) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 w-full">
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left flex items-start gap-2.5 hover:border-cyan-500/30 transition-colors">
            <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-slate-200">Funnel & CRO Optimization</div>
              <div className="text-[11px] text-slate-400">Search-to-lead acceleration</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left flex items-start gap-2.5 hover:border-indigo-500/30 transition-colors">
            <Brain className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-slate-200">Data Science & ML</div>
              <div className="text-[11px] text-slate-400">Predictive & NLP models</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left flex items-start gap-2.5 hover:border-purple-500/30 transition-colors">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-slate-200">Customized LP & Testing</div>
              <div className="text-[11px] text-slate-400">Cohort hooks & self-serve</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left flex items-start gap-2.5 hover:border-emerald-500/30 transition-colors">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-slate-200">Executive Dashboards</div>
              <div className="text-[11px] text-slate-400">Tableau, Power BI, SQL</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
