'use client';

import React, { useState } from 'react';
import { 
  personalInfo, 
  experiences, 
  projects, 
  awardsAndScholarships, 
  educationHistory, 
  researchPublication, 
  certifications 
} from '@/data/portfolioData';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  FileText 
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
VISHNU E J
${personalInfo.phone} | ${personalInfo.email} | ${personalInfo.linkedin} | ${personalInfo.github}

PROFESSIONAL SUMMARY
${personalInfo.bio}

EXPERIENCE
${experiences
  .map(
    (e) => `
${e.role} | ${e.company} (${e.location})
${e.period}
${e.description.map((d) => `• ${d}`).join('\n')}
`
  )
  .join('\n')}

FEATURED PROJECTS
${projects
  .map(
    (p) => `
${p.title} | ${p.techStack.join(', ')} | ${p.period}
${p.bullets.map((b) => `• ${b}`).join('\n')}
`
  )
  .join('\n')}

AWARDS & SCHOLARSHIPS
${awardsAndScholarships
  .map(
    (a) => `• ${a.title} (${a.organization}, ${a.date})${a.amount ? ` - ${a.amount}` : ''}: ${a.description}`
  )
  .join('\n')}

EDUCATION
${educationHistory
  .map(
    (ed) => `
${ed.degree} | ${ed.institution} (${ed.location})
${ed.period} | ${ed.score}
`
  )
  .join('\n')}

RESEARCH & CONFERENCE
${researchPublication.title} - ${researchPublication.conference} (${researchPublication.location}, ${researchPublication.period})

CERTIFICATIONS
${certifications.map((c) => `• ${c.name} - ${c.issuer} (${c.date})`).join('\n')}
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/30 backdrop-blur-sm overflow-y-auto">
      {/* Modal container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#ececee] rounded-[36px] shadow-xl flex flex-col overflow-hidden text-[#09090b]">
        
        {/* Top Modal Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ececee] bg-white shrink-0 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#09090b]" />
            <span className="font-bold text-[#09090b] text-sm sm:text-base">
              Vishnu E J — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#f4f4f5] hover:bg-[#ececee] text-[#18181b] border border-[#ececee] rounded-[14px] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#52525b]" />}
              <span>{copied ? 'Copied Text!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-primary text-xs !py-1.5 !px-3.5 !rounded-[14px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-[12px] text-[#71717a] hover:text-[#09090b] hover:bg-[#f4f4f5] transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 bg-white text-[#09090b] font-sans printable-content">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-6 border-b border-[#ececee]">
            <div className="w-16 h-16 rounded-[20px] overflow-hidden border border-[#ececee] shrink-0 bg-[#f4f4f5]">
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#09090b] tracking-tight">
                {personalInfo.name}
              </h1>
              <div className="text-xs sm:text-sm text-[#52525b] font-semibold mt-0.5">
                {personalInfo.roleTitle}
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-[#71717a] mt-2">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#52525b]" />
                  {personalInfo.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#52525b]" />
                  {personalInfo.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#52525b]" />
                  {personalInfo.linkedin.replace('https://', '')}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <GitHubIcon className="w-3.5 h-3.5 text-[#52525b]" />
                  {personalInfo.github.replace('https://', '')}
                </span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#71717a] pb-1 border-b border-[#ececee] mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#71717a] pb-1 border-b border-[#ececee] mb-3">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#09090b]">
                      {exp.role} <span className="text-[#52525b] font-normal">| {exp.company}</span>
                    </span>
                    <span className="text-xs text-[#71717a] font-mono">
                      {exp.period} ({exp.location})
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[#52525b]">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#71717a] pb-1 border-b border-[#ececee] mb-3">
              Featured Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#09090b]">
                      {proj.title}{' '}
                      <span className="text-[#71717a] font-mono text-xs">
                        [{proj.techStack.slice(0, 4).join(', ')}]
                      </span>
                    </span>
                    <span className="text-xs text-[#71717a] font-mono">{proj.period}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[#52525b]">
                    {proj.bullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Scholarships */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#71717a] pb-1 border-b border-[#ececee] mb-2">
              Awards & Scholarships
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-[#52525b]">
              {awardsAndScholarships.map((a) => (
                <li key={a.id}>
                  <strong className="text-[#09090b]">{a.title}</strong>{' '}
                  {a.amount && <span className="text-[#ff5a00] font-semibold">({a.amount})</span>} —{' '}
                  <span className="text-[#71717a]">{a.organization} ({a.date}):</span> {a.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#71717a] pb-1 border-b border-[#ececee] mb-2">
              Education
            </h2>
            <div className="space-y-2">
              {educationHistory.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-[#09090b]">{edu.degree}</span> —{' '}
                    <span className="text-[#52525b]">{edu.institution}</span>
                  </div>
                  <div className="text-[#71717a] font-mono">
                    {edu.period} | <strong className="text-[#09090b]">{edu.score}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#71717a] pb-1 border-b border-[#ececee] mb-2">
              Research & Conference
            </h2>
            <div className="text-xs text-[#52525b] leading-relaxed">
              <strong className="text-[#09090b]">{researchPublication.title}</strong> —{' '}
              <span>{researchPublication.conference} ({researchPublication.location}, {researchPublication.period})</span>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#71717a] pb-1 border-b border-[#ececee] mb-2">
              Certifications
            </h2>
            <div className="flex flex-wrap gap-2 text-xs text-[#52525b]">
              {certifications.map((c) => (
                <span key={c.id} className="px-2.5 py-1 rounded-xl bg-[#f4f4f5] border border-[#ececee]">
                  <strong className="text-[#09090b]">{c.name}</strong> — {c.issuer} ({c.date})
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
