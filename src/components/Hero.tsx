'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Check, 
  Copy, 
  TrendingUp, 
  Brain, 
  Sparkles, 
  BarChart3,
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
    <section className="bg-[#f4f4f5] py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small ember badge at top */}
            <div className="inline-flex items-center gap-2 bg-[#ff5a00] text-white text-xs rounded-xl px-2.5 py-1 font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>Asst. Manager @ Great Learning</span>
            </div>

            {/* Massive headline */}
            <h1 className="text-5xl sm:text-6xl font-bold text-[#09090b] leading-[1.12] tracking-tight mb-4">
              Data-Driven Growth & Performance Marketing
            </h1>

            {/* Sub headline */}
            <p className="text-lg text-[#52525b] leading-[1.45] mb-8 max-w-xl font-normal">
              Hi, I&apos;m <span className="font-semibold text-[#09090b]">{personalInfo.name}</span> — Product & Performance Analyst with a Master&apos;s in Data Science. Specializing in turning complex acquisition funnels into high-yield growth engines, managing $850K+ monthly budgets, and building customized self-serve experimentation.
            </p>

            {/* Two CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
              <a href="#projects" className="btn-primary">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#experience" className="btn-ghost">
                <span>View Experience</span>
              </a>

              <button
                onClick={onOpenResume}
                className="bg-[#f4f4f5] hover:bg-[#ececee] text-[#18181b] border border-[#ececee] rounded-[14px] px-5 py-3 text-sm font-medium inline-flex items-center gap-2 transition-colors"
              >
                <span>Resume</span>
              </button>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[#ececee] w-full">
              {/* Email Pill */}
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Click to copy email address"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#ececee] text-xs font-medium text-[#18181b] hover:bg-[#fafafa] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#52525b]" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-[#71717a] ml-1" />
                )}
              </button>

              {/* Phone Pill */}
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                title="Click to copy phone number"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#ececee] text-xs font-medium text-[#18181b] hover:bg-[#fafafa] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#52525b]" />
                <span>{personalInfo.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-[#71717a] ml-1" />
                )}
              </button>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#ececee] text-xs font-medium text-[#18181b] hover:bg-[#fafafa] transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#52525b]" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#ececee] text-xs font-medium text-[#18181b] hover:bg-[#fafafa] transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-[#52525b]" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px] bg-white rounded-[36px] border border-[#ececee] p-7">
              {/* Profile Photo */}
              <div className="w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-[#f4f4f5] border border-[#ececee] mb-5">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name, role below */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#09090b]">
                    {personalInfo.name}
                  </h3>
                  <div className="inline-flex items-center gap-1 text-xs text-[#71717a]">
                    <MapPin className="w-3.5 h-3.5 text-[#71717a]" />
                    <span>Bangalore</span>
                  </div>
                </div>
                <p className="text-sm text-[#52525b] mt-0.5">
                  {personalInfo.roleTitle}
                </p>
              </div>

              {/* Stats strip with #f4f4f5 background */}
              <div className="mt-5 p-4 rounded-[20px] bg-[#f4f4f5] border border-[#ececee] grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#09090b] tracking-tight">
                    $850K+
                  </div>
                  <div className="text-xs text-[#52525b] mt-0.5">
                    Monthly Budgets
                  </div>
                </div>
                <div className="border-l border-[#ececee]">
                  <div className="text-2xl font-bold text-[#09090b] tracking-tight">
                    20–30%
                  </div>
                  <div className="text-xs text-[#52525b] mt-0.5">
                    Revenue Scale
                  </div>
                </div>
              </div>

              {/* Quick tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge-outline">Reliance Foundation Scholar</span>
                <span className="badge-outline">MSc Data Science (3.56 CGPA)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Domain Badges Strip (Bottom of Hero) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 w-full">
          <div className="p-5 rounded-[24px] bg-white border border-[#ececee] flex items-start gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-[#f4f4f5] flex items-center justify-center shrink-0 text-[#18181b]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#09090b]">Funnel & CRO Optimization</div>
              <div className="text-xs text-[#52525b] mt-0.5">Search-to-lead acceleration</div>
            </div>
          </div>

          <div className="p-5 rounded-[24px] bg-white border border-[#ececee] flex items-start gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-[#f4f4f5] flex items-center justify-center shrink-0 text-[#18181b]">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#09090b]">Data Science & ML</div>
              <div className="text-xs text-[#52525b] mt-0.5">Predictive & NLP models</div>
            </div>
          </div>

          <div className="p-5 rounded-[24px] bg-white border border-[#ececee] flex items-start gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-[#f4f4f5] flex items-center justify-center shrink-0 text-[#18181b]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#09090b]">Customized LP & Testing</div>
              <div className="text-xs text-[#52525b] mt-0.5">Cohort hooks & self-serve</div>
            </div>
          </div>

          <div className="p-5 rounded-[24px] bg-white border border-[#ececee] flex items-start gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-[#f4f4f5] flex items-center justify-center shrink-0 text-[#18181b]">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#09090b]">Executive Dashboards</div>
              <div className="text-xs text-[#52525b] mt-0.5">Tableau, Power BI, SQL</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
