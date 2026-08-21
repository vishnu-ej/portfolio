'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  Menu, 
  X, 
  FileText, 
  Send, 
  Sparkles, 
  TrendingUp, 
  FolderGit2, 
  Award, 
  GraduationCap, 
  Sliders,
  Check,
  Copy
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { name: 'Experience', href: '#experience', icon: TrendingUp },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Skills', href: '#skills', icon: Sparkles },
    { name: 'Scholarships & Awards', href: '#awards', icon: Award },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass-panel border-b border-slate-800/80 bg-slate-950/80 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <img
              src="/profile.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-base tracking-tight group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] text-slate-400 font-medium">
                Product & Performance Analyst
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={copyEmail}
            title="Copy email to clipboard"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-lg shadow-md shadow-cyan-900/20 hover:shadow-cyan-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-md"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-800 bg-slate-950/95 px-5 py-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 border border-transparent hover:border-slate-800 transition-all"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                copyEmail();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4 text-cyan-400" />
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg flex items-center justify-center gap-2"
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
