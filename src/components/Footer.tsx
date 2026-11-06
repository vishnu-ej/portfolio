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
    <footer className="bg-[#09090b] text-white py-12 relative border-t border-[#27272a]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#27272a]">
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-8 h-8 rounded-[10px] bg-[#18181b] border border-[#27272a] flex items-center justify-center font-bold text-xs text-white">
                V
              </span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs text-[#a1a1aa] mt-1.5 max-w-sm">
              Product & Performance Analyst | MSc Data Science | Growth & Experimentation
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-[12px] bg-[#18181b] hover:bg-[#27272a] text-[#d4d4d8] hover:text-[#ff5a00] border border-[#27272a] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-[12px] bg-[#18181b] hover:bg-[#27272a] text-[#d4d4d8] hover:text-[#ff5a00] border border-[#27272a] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-[12px] bg-[#18181b] hover:bg-[#27272a] text-[#d4d4d8] hover:text-[#ff5a00] border border-[#27272a] transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-[12px] bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] text-xs text-[#d4d4d8] hover:text-[#ff5a00] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717a] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Bangalore, India</span>
            <span>•</span>
            <span>Awesomic Light Editorial Design System</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
