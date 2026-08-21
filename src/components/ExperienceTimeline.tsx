'use client';

import React, { useState } from 'react';
import { experiences } from '@/data/portfolioData';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  Building, 
  Layers, 
  Clock,
  Brain
} from 'lucide-react';

export default function ExperienceTimeline() {
  const [filter, setFilter] = useState<'all' | 'fulltime' | 'internship'>('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'fulltime') return exp.type === 'Full-Time';
    if (filter === 'internship') return exp.type === 'Internship' || exp.type === 'Trainee';
    return true;
  });

  // Role durations mapped for individual timeline chips
  const tenureMap: Record<string, string> = {
    'gl-asst-manager': 'Apr. 2026 – Present (Current)',
    'gl-sr-executive': '1 Year (Apr. 2025 – Mar. 2026)',
    'deepspatial-ai': '7 Months (Jan. 2025 – Jul. 2025)',
    'intel-corp': '3 Months (May 2024 – Jul. 2024)',
    'psyliq': '2 Months (Jan. 2024 – Feb. 2024)',
  };

  return (
    <section id="experience" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience & Leadership
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Demonstrated track record of accelerating growth, managing large-scale performance budgets, and driving conversion optimization.
            </p>
          </div>

          {/* Clean Category Filter Buttons (Reverted to clean format) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto shadow-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Roles ({experiences.length})
            </button>
            <button
              onClick={() => setFilter('fulltime')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'fulltime'
                  ? 'bg-cyan-500 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Management & Growth (2)
            </button>
            <button
              onClick={() => setFilter('internship')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'internship'
                  ? 'bg-cyan-500 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Data Science & Analytics (3)
            </button>
          </div>
        </div>

        {/* Dedicated Separate Work Experience Summary Cards Block (Below Buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          
          {/* Card 1: Total Experience */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/90 to-emerald-950/20 flex items-start gap-3.5 shadow-lg shadow-emerald-950/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                Total Industry Experience
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-0.5 font-mono">
                ~2.5+ Years
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-snug">
                Cumulative across Performance Marketing, Growth & Data Science roles
              </div>
            </div>
          </div>

          {/* Card 2: Growth & Performance Full-Time */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 to-cyan-950/20 flex items-start gap-3.5 shadow-lg shadow-cyan-950/10">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                Full-Time Growth & Management
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-0.5 font-mono">
                1.5+ Years
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-snug">
                Asst. Manager & Sr. Executive at Great Learning ($850K+ ad budgets)
              </div>
            </div>
          </div>

          {/* Card 3: Data Science & Analytics Internships */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-slate-900/90 to-indigo-950/20 flex items-start gap-3.5 shadow-lg shadow-indigo-950/10">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
                Data Science & Analytics Traineeships
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-0.5 font-mono">
                1+ Year
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-snug">
                Deepspatial AI (Geospatial), Intel (NLP/Sentiment), PSYLIQ (BI Dashboards)
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline dot / icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-110 group-hover:border-cyan-300 transition-all">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

              {/* Main Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl shadow-black/20">
                
                {/* Header Row: Role, Badges, Dates */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          Current Role
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
                      <span className="flex items-center gap-1.5 text-cyan-300">
                        <Building className="w-4 h-4 text-cyan-400" />
                        {exp.company}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap lg:flex-col lg:items-end gap-2">
                    {/* Tenure Duration Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-300">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{tenureMap[exp.id] || exp.period}</span>
                    </div>

                    {/* Special Badges (Promotion / Rookie Rockstar) */}
                    {exp.promotionBadge && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/70 border border-indigo-500/40 text-indigo-300 text-xs font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.promotionBadge}</span>
                      </div>
                    )}

                    {exp.awardBadge && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span>{exp.awardBadge}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Key Metrics Strip (if present) */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mb-5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    {exp.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                        <div className="text-xs">
                          <span className="text-slate-400">{m.label}: </span>
                          <span className="font-semibold text-slate-200">{m.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Description Bullets */}
                <div className="space-y-2.5 mb-6">
                  {exp.description.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech & Strategy Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/60">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 mr-1">
                    <Layers className="w-3 h-3 text-cyan-400" />
                    <span>Skills Applied:</span>
                  </div>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-xs font-medium text-slate-300 border border-slate-800/90 group-hover:border-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
