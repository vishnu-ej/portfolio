'use client';

import React from 'react';
import { heroStats } from '@/data/portfolioData';
import { Sparkles } from 'lucide-react';

export default function StatsRibbon() {
  return (
    <section className="relative py-8 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-4 pb-2 border-b border-slate-800/40">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Quantifiable Impact & Verified Highlights
            </span>
          </div>
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            Performance Marketing • Data Science • Merit Honors
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {heroStats.map((stat) => (
            <div
              key={stat.id}
              className="relative p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-950/20 group"
            >
              {/* Subtle top indicator */}
              <div
                className={`h-1 w-8 rounded-full bg-gradient-to-r ${stat.color} mb-3 group-hover:w-full transition-all duration-300`}
              ></div>

              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>

              <div className="text-xs font-semibold text-slate-200 mt-1 leading-tight">
                {stat.label}
              </div>

              <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
