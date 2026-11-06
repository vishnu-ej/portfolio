'use client';

import React, { useState } from 'react';
import { experiences } from '@/data/portfolioData';
import { 
  Building, 
  MapPin, 
  Check, 
  Sparkles, 
  Award, 
  Clock 
} from 'lucide-react';

export default function ExperienceTimeline() {
  const [filter, setFilter] = useState<'all' | 'fulltime' | 'internship'>('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'fulltime') return exp.type === 'Full-Time';
    if (filter === 'internship') return exp.type === 'Internship' || exp.type === 'Trainee';
    return true;
  });

  const tenureMap: Record<string, string> = {
    'gl-asst-manager': 'Apr. 2026 – Present (Current)',
    'gl-sr-executive': '1 Year (Apr. 2025 – Mar. 2026)',
    'deepspatial-ai': '7 Months (Jan. 2025 – Jul. 2025)',
    'intel-corp': '3 Months (May 2024 – Jul. 2024)',
    'psyliq': '2 Months (Jan. 2024 – Feb. 2024)',
  };

  return (
    <section id="experience" className="bg-[#f4f4f5] py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="section-label mb-2">CAREER JOURNEY</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#09090b] tracking-tight">
              Work Experience & Leadership
            </h2>
            <p className="text-[#52525b] text-sm sm:text-base mt-2 max-w-2xl">
              Demonstrated track record of accelerating growth, managing large-scale performance budgets, and driving conversion optimization.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-[10000px] px-4 py-2 text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-[#09090b] text-white'
                  : 'bg-white border border-[#ececee] text-[#18181b] hover:bg-[#fafafa]'
              }`}
            >
              All Roles ({experiences.length})
            </button>
            <button
              onClick={() => setFilter('fulltime')}
              className={`rounded-[10000px] px-4 py-2 text-sm font-medium transition-colors ${
                filter === 'fulltime'
                  ? 'bg-[#09090b] text-white'
                  : 'bg-white border border-[#ececee] text-[#18181b] hover:bg-[#fafafa]'
              }`}
            >
              Management & Growth (2)
            </button>
            <button
              onClick={() => setFilter('internship')}
              className={`rounded-[10000px] px-4 py-2 text-sm font-medium transition-colors ${
                filter === 'internship'
                  ? 'bg-[#09090b] text-white'
                  : 'bg-white border border-[#ececee] text-[#18181b] hover:bg-[#fafafa]'
              }`}
            >
              Data Science & Analytics (3)
            </button>
          </div>
        </div>

        {/* Experience Summary Cards: 3-column grid of white cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-[36px] border border-[#ececee] p-7 flex flex-col justify-between">
            <div>
              <div className="section-label mb-1">TOTAL EXPERIENCE</div>
              <div className="text-3xl font-bold text-[#09090b] mt-1">~2.5+ Years</div>
              <p className="text-sm text-[#52525b] mt-2 leading-relaxed">
                Cumulative across Performance Marketing, Growth & Data Science roles.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[36px] border border-[#ececee] p-7 flex flex-col justify-between">
            <div>
              <div className="section-label mb-1">GROWTH & MANAGEMENT</div>
              <div className="text-3xl font-bold text-[#09090b] mt-1">1.5+ Years</div>
              <p className="text-sm text-[#52525b] mt-2 leading-relaxed">
                Asst. Manager & Sr. Executive at Great Learning ($850K+ monthly budgets).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[36px] border border-[#ececee] p-7 flex flex-col justify-between">
            <div>
              <div className="section-label mb-1">DATA SCIENCE TRAINEESHIPS</div>
              <div className="text-3xl font-bold text-[#09090b] mt-1">1+ Year</div>
              <p className="text-sm text-[#52525b] mt-2 leading-relaxed">
                Deepspatial AI (Geospatial), Intel (NLP/Sentiment), PSYLIQ (BI Dashboards).
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-[36px] border border-[#ececee] p-7 transition-colors hover:border-[#d4d4d8]"
            >
              {/* Header: Role, Badges, Dates */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-5 pb-5 border-b border-[#ececee]">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl font-bold text-[#09090b]">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="bg-[#ff5a00] text-white text-xs rounded-xl px-2 py-0.5 font-medium">
                        Current Role
                      </span>
                    )}
                    <span className="badge-outline">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#52525b]">
                    <span className="flex items-center gap-1.5 font-medium text-[#18181b]">
                      <Building className="w-4 h-4 text-[#71717a]" />
                      {exp.company}
                    </span>
                    <span className="text-[#a1a1aa]">•</span>
                    <span className="flex items-center gap-1.5 text-[#52525b]">
                      <MapPin className="w-3.5 h-3.5 text-[#71717a]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col lg:items-end gap-2">
                  {/* Tenure Duration Chip */}
                  <div className="bg-[#f4f4f5] border border-[#ececee] text-[#52525b] text-xs rounded-xl px-3 py-1 inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#71717a]" />
                    <span>{tenureMap[exp.id] || exp.period}</span>
                  </div>

                  {/* Special Badges (Promotion / Rookie Rockstar) */}
                  {exp.promotionBadge && (
                    <div className="badge-filled inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{exp.promotionBadge}</span>
                    </div>
                  )}

                  {exp.awardBadge && (
                    <div className="badge-ember inline-flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>{exp.awardBadge}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Metrics Strip (if present) */}
              {exp.metrics && exp.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-5 p-4 rounded-[20px] bg-[#f4f4f5] border border-[#ececee]">
                  {exp.metrics.map((m, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-[#52525b]">{m.label}: </span>
                      <span className="font-bold text-[#09090b]">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Description Bullets */}
              <div className="space-y-2.5 mb-6">
                {exp.description.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#52525b] leading-[1.45]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18181b] mt-2 shrink-0"></span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-[#ececee]">
                <span className="text-xs font-medium text-[#71717a] mr-1">Skills:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="border border-[#ececee] text-[#18181b] text-xs rounded-xl px-2.5 py-0.5 bg-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
