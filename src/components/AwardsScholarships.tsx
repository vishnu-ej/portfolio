'use client';

import React from 'react';
import { awardsAndScholarships } from '@/data/portfolioData';
import { 
  Award, 
  Sparkles, 
  Calendar, 
  Building2, 
  Trophy, 
  BadgePercent, 
  CheckCircle2, 
  PartyPopper 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AwardsScholarships() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#6366f1', '#f59e0b', '#10b981', '#ec4899'],
    });
  };

  return (
    <section id="awards" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors & Merit Grants</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Awards & Merit Scholarships
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Competitive national scholarships, corporate performance recognitions, and state merit honors totaling over ₹9 Lakhs in grants.
            </p>
          </div>

          {/* Celebratory Interactive Button */}
          <button
            onClick={triggerConfetti}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95 self-start md:self-auto"
          >
            <PartyPopper className="w-4 h-4 text-amber-400" />
            <span>Celebrate Achievements 🎉</span>
          </button>
        </div>

        {/* Scholarships & Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsAndScholarships.map((award) => {
            const isHighPriority = award.highlight;

            return (
              <div
                key={award.id}
                onClick={triggerConfetti}
                className={`cursor-pointer group relative glass-panel rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg ${
                  isHighPriority
                    ? 'border-amber-500/40 bg-gradient-to-b from-slate-900/90 to-amber-950/10 hover:border-amber-400/60 shadow-amber-950/10'
                    : 'border-slate-800/80 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isHighPriority
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 group-hover:scale-110 transition-transform'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {award.type === 'Corporate Award' ? (
                        <Trophy className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5" />
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                          award.type === 'Corporate Award'
                            ? 'bg-purple-950 text-purple-300 border border-purple-500/30'
                            : 'bg-amber-950 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {award.type}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{award.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 leading-snug">
                    {award.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{award.organization}</span>
                  </div>

                  {/* Financial Amount Pill (if scholarship) */}
                  {award.amount && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
                      <BadgePercent className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{award.amount}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {award.description}
                  </p>
                </div>

                {/* Bottom Verification Note */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-amber-400/80 transition-colors">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified Academic / Corporate Credential</span>
                  </span>
                  <span>Tap to celebrate</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
