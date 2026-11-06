'use client';

import React from 'react';
import { awardsAndScholarships } from '@/data/portfolioData';
import { 
  Award, 
  Trophy, 
  Building2, 
  PartyPopper,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AwardsScholarships() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff5a00', '#09090b', '#3f3f46', '#71717a', '#d4d4d8'],
    });
  };

  return (
    <section id="awards" className="bg-white py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-label mb-2">HONORS & MERIT GRANTS</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#09090b] tracking-tight">
              Awards & Merit Scholarships
            </h2>
            <p className="text-[#52525b] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Competitive national scholarships, corporate performance recognitions, and state merit honors totaling over ₹19 Lakhs in grants.
            </p>
          </div>

          {/* Celebratory Button: Dark Primary Style */}
          <button
            onClick={triggerConfetti}
            className="btn-primary self-start md:self-auto"
          >
            <PartyPopper className="w-4 h-4" />
            <span>Celebrate Achievements 🎉</span>
          </button>
        </div>

        {/* Scholarships & Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsAndScholarships.map((award) => (
            <div
              key={award.id}
              onClick={triggerConfetti}
              className="bg-white rounded-[36px] border border-[#ececee] p-7 flex flex-col justify-between hover:border-[#d4d4d8] transition-colors cursor-pointer group"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] flex items-center justify-center text-[#18181b]">
                    {award.type === 'Corporate Award' ? (
                      <Trophy className="w-5 h-5 text-[#ff5a00]" />
                    ) : (
                      <Award className="w-5 h-5 text-[#18181b]" />
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="border border-[#ececee] text-xs text-[#71717a] rounded-xl px-2.5 py-0.5 bg-[#fafafa]">
                      {award.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#71717a]">
                      <Calendar className="w-3.5 h-3.5 text-[#a1a1aa]" />
                      <span>{award.date}</span>
                    </div>
                  </div>
                </div>

                {/* Award Title */}
                <h3 className="text-lg font-semibold text-[#09090b] mb-1.5 leading-snug group-hover:text-[#ff5a00] transition-colors">
                  {award.title}
                </h3>

                {/* Organization */}
                <div className="flex items-center gap-1.5 text-sm text-[#52525b] mb-3">
                  <Building2 className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                  <span>{award.organization}</span>
                </div>

                {/* Scholarship Amount: Ember Badge */}
                {award.amount && (
                  <div className="mb-3">
                    <span className="bg-[#ff5a00] text-white text-xs rounded-xl px-2 py-0.5 font-medium inline-flex items-center gap-1.5">
                      <span>Grant: {award.amount}</span>
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-[#52525b] leading-[1.45] mb-4">
                  {award.description}
                </p>
              </div>

              {/* Bottom Verification Note */}
              <div className="pt-4 border-t border-[#ececee] flex items-center justify-between text-xs text-[#71717a]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Credential</span>
                </span>
                <span className="group-hover:text-[#09090b] transition-colors">Tap to celebrate</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
