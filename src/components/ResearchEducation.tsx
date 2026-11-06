'use client';

import React from 'react';
import { educationHistory, researchPublication, certifications } from '@/data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

export default function ResearchEducation() {
  return (
    <section id="education" className="bg-[#f4f4f5] py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Research Publication Spotlight */}
        <div className="mb-16">
          <div className="section-label mb-2">PEER-REVIEWED RESEARCH</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#09090b] tracking-tight mb-8">
            Conference Publication & Precision Medicine
          </h2>

          <div className="bg-white rounded-[36px] border border-[#ececee] p-7 transition-colors hover:border-[#d4d4d8]">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4 pb-4 border-b border-[#ececee]">
              <div>
                <span className="bg-[#ff5a00] text-white text-xs rounded-xl px-2.5 py-1 font-medium inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>ICAIH 2025</span>
                </span>
                <h3 className="text-xl font-bold text-[#09090b] mt-3 leading-snug">
                  {researchPublication.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#52525b] mt-1.5">
                  <span className="font-medium text-[#18181b]">{researchPublication.conference}</span>
                  <span className="text-[#a1a1aa]">•</span>
                  <span className="flex items-center gap-1 text-[#52525b]">
                    <MapPin className="w-3.5 h-3.5 text-[#71717a]" />
                    {researchPublication.location}
                  </span>
                </div>
              </div>

              <div className="bg-[#f4f4f5] border border-[#ececee] text-[#52525b] text-xs rounded-xl px-3 py-1 inline-flex items-center gap-1.5 self-start">
                <Calendar className="w-3.5 h-3.5 text-[#71717a]" />
                <span>{researchPublication.period}</span>
              </div>
            </div>

            <p className="text-sm text-[#52525b] leading-[1.45] mb-5">
              {researchPublication.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {researchPublication.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="border border-[#ececee] text-[#18181b] text-xs rounded-xl px-2.5 py-0.5 bg-[#f4f4f5] font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="section-label mb-2">ACADEMIC FOUNDATION</div>
              <h3 className="text-2xl font-bold text-[#09090b]">Education & Degrees</h3>
            </div>

            <div className="space-y-4">
              {educationHistory.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white rounded-[36px] border border-[#ececee] p-7 transition-colors hover:border-[#d4d4d8]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-semibold text-[#09090b]">{edu.degree}</h4>
                      <div className="text-sm text-[#52525b] font-medium mt-0.5">{edu.institution}</div>
                      <div className="text-xs text-[#71717a] flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#71717a]" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end">
                      <span className="badge-filled inline-block font-mono">
                        {edu.score}
                      </span>
                      <span className="text-xs text-[#71717a] mt-1">{edu.period}</span>
                    </div>
                  </div>

                  {edu.details && (
                    <p className="text-sm text-[#52525b] mt-3 leading-[1.45]">
                      {edu.details}
                    </p>
                  )}

                  {edu.coursework && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#ececee]">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="bg-[#f4f4f5] text-xs text-[#52525b] rounded-xl px-2.5 py-0.5 font-mono"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="section-label mb-2">VERIFIED CREDENTIALS</div>
              <h3 className="text-2xl font-bold text-[#09090b]">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-[36px] border border-[#ececee] p-7 transition-colors hover:border-[#d4d4d8]"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-[#09090b]">{cert.name}</h4>
                      <div className="text-xs text-[#52525b] font-medium mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>
                    <span className="text-xs text-[#71717a] shrink-0 font-mono">
                      {cert.date}
                    </span>
                  </div>

                  <div className="space-y-1 mt-3">
                    <div className="text-xs font-medium text-[#71717a]">Curriculum Mastery:</div>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="border border-[#ececee] text-[#18181b] text-xs rounded-xl px-2 py-0.5 bg-[#f4f4f5]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Executive Strengths Card */}
              <div className="bg-white rounded-[36px] border border-[#ececee] p-7">
                <div className="section-label mb-3">EXECUTIVE STRENGTHS</div>
                <div className="space-y-2 text-sm text-[#52525b] leading-[1.45]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Leadership & Alignment:</strong> Product, Growth, and Engineering synergy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Analytical Rigor:</strong> Rapid hypothesis testing and cohort analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Storytelling:</strong> Executive data visualization and board presentations</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
