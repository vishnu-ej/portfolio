'use client';

import React, { useState } from 'react';
import { skillCategories } from '@/data/portfolioData';
import { 
  TrendingUp, 
  Database, 
  Cpu, 
  BarChart3, 
  Code2, 
  Users, 
  Sparkles 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Database,
  Cpu,
  BarChart3,
  Code2,
  Users,
};

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter((cat) => cat.name === activeCategory);

  return (
    <section id="skills" className="bg-[#f4f4f5] py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-label mb-2">CORE COMPETENCIES</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#09090b] tracking-tight">
              Technical & Domain Stack
            </h2>
            <p className="text-[#52525b] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              A comprehensive toolkit covering product analytics, data science, AI workflows, and executive business intelligence.
            </p>
          </div>

          {/* Category Tabs: pill filter style */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('All')}
              className={`rounded-[10000px] px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === 'All'
                  ? 'bg-[#09090b] text-white'
                  : 'bg-white border border-[#ececee] text-[#18181b] hover:bg-[#fafafa]'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`rounded-[10000px] px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.name
                    ? 'bg-[#09090b] text-white'
                    : 'bg-white border border-[#ececee] text-[#18181b] hover:bg-[#fafafa]'
                }`}
              >
                {cat.name.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Sparkles;

            return (
              <div
                key={category.name}
                className="bg-white rounded-[36px] border border-[#ececee] p-7 flex flex-col justify-between hover:border-[#d4d4d8] transition-colors"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] flex items-center justify-center text-[#18181b]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#09090b]">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#52525b] mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skill tags: mix of filled and outline */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group relative"
                      >
                        <span
                          className={`inline-block rounded-xl px-2.5 py-1 text-xs transition-colors ${
                            skill.highlight
                              ? 'bg-[#3f3f46] text-[#fafafa] font-medium'
                              : 'bg-white border border-[#ececee] text-[#18181b]'
                          }`}
                        >
                          {skill.name}
                        </span>
                        {skill.tools && (
                          <div className="text-[11px] text-[#71717a] font-mono mt-0.5 ml-1">
                            {skill.tools}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="pt-6 mt-6 border-t border-[#ececee] flex items-center justify-between text-xs text-[#71717a]">
                  <span>{category.skills.length} core capabilities</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#3f3f46]"></span>
                    <span>Highlighted mastery</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
