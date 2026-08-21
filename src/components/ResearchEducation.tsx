'use client';

import React from 'react';
import { educationHistory, researchPublication, certifications } from '@/data/portfolioData';
import { 
  GraduationCap, 
  FileText, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export default function ResearchEducation() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Research Publication Spotlight */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Peer-Reviewed Research</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Conference Publication & Precision Medicine
          </h2>

          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/20 shadow-xl shadow-purple-950/20">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-950 text-purple-300 border border-purple-500/30">
                  ICAIH 2025 International Conference
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 leading-snug">
                  {researchPublication.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  <span>{researchPublication.conference}</span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {researchPublication.location}
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 self-start">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>{researchPublication.period}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {researchPublication.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {researchPublication.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900/90 text-xs font-mono text-purple-300 border border-purple-500/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Education & Degrees</h3>
            </div>

            <div className="space-y-4">
              {educationHistory.map((edu) => (
                <div
                  key={edu.id}
                  className="glass-panel rounded-xl p-5 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                      <div className="text-xs text-cyan-300 font-medium">{edu.institution}</div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                        {edu.score}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-1">{edu.period}</span>
                    </div>
                  </div>

                  {edu.details && (
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  )}

                  {edu.coursework && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-slate-800/60">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-300 border border-slate-800"
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Credentials</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-panel rounded-xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{cert.name}</h4>
                      <div className="text-xs text-emerald-400 font-medium mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 shrink-0 font-mono">
                      {cert.date}
                    </span>
                  </div>

                  <div className="space-y-1 mt-3">
                    <div className="text-[11px] font-semibold text-slate-400">Curriculum Mastery:</div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills Quick Card */}
            <div className="glass-panel rounded-xl p-5 border border-slate-800 bg-slate-900/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Executive & Interpersonal Strengths
              </h4>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span><strong>Leadership & Collaboration:</strong> Product / Marketing / Engineering alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span><strong>Analytical Thinking:</strong> Rapid hypothesis testing & metric instrumentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span><strong>Communication:</strong> Executive data storytelling & stakeholder buy-in</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
