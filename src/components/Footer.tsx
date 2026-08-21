'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-black text-xs">
                V
              </span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-slate-400 mt-1 max-w-sm">
              Product & Performance Analyst | MSc Data Science | AI & Growth Specialist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-purple-400 border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-center sm:text-left text-[11px]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Bangalore, India</span>
            <span>•</span>
            <span>Built with Next.js, React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
