'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  Menu, 
  X, 
  FileText, 
  Check, 
  Copy,
  TrendingUp,
  FolderGit2,
  Sparkles,
  Award,
  GraduationCap,
  Send
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { name: 'Experience', href: '#experience', icon: TrendingUp },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Skills', href: '#skills', icon: Sparkles },
    { name: 'Awards', href: '#awards', icon: Award },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-[#ececee] transition-all">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-[12px] overflow-hidden border border-[#ececee] shrink-0 bg-[#f4f4f5]">
            <img
              src="/profile.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#09090b] text-base tracking-tight group-hover:text-[#ff5a00] transition-colors">
              {personalInfo.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs text-[#71717a] font-normal">
                Product & Performance Analyst
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-[#18181b] hover:text-[#09090b] hover:bg-[#f4f4f5] rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={copyEmail}
            title="Copy email to clipboard"
            className="btn-ghost"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#52525b]" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="btn-primary"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="btn-primary text-xs !py-2 !px-3 !rounded-[12px]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#18181b] hover:text-[#09090b] bg-white rounded-[14px] border border-[#ececee] hover:bg-[#f4f4f5]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#ececee] bg-white px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-[14px] text-xs font-medium text-[#18181b] bg-[#f4f4f5] hover:bg-[#ececee] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#71717a] shrink-0" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#ececee] flex flex-col gap-2">
            <button
              onClick={() => {
                copyEmail();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-[#18181b] bg-white border border-[#3f3f46] rounded-[10000px] flex items-center justify-center gap-2 hover:bg-[#f4f4f5]"
            >
              <Copy className="w-4 h-4 text-[#52525b]" />
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full btn-primary justify-center"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Structured Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
