'use client';

import React from 'react';
import { heroStats } from '@/data/portfolioData';

export default function StatsRibbon() {
  // Primary 3 highlight stat blocks as specified in the Awesomic design system
  const displayStats = heroStats.slice(0, 3);

  return (
    <section className="bg-white border-y border-[#ececee] py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#ececee]">
          {displayStats.map((stat, idx) => (
            <div
              key={stat.id || idx}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                idx === 0 ? 'md:pr-8 pb-6 md:pb-0' : idx === 1 ? 'md:px-8 py-6 md:py-0' : 'md:pl-8 pt-6 md:pt-0'
              }`}
            >
              <div className="text-5xl font-bold text-[#09090b] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#18181b] mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-[#52525b] mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
