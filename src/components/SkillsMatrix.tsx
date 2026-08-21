'use client';

import React, { useState } from 'react';
import { skillCategories } from '@/data/portfolioData';
import { 
  Sparkles, 
  TrendingUp, 
  Database, 
  Cpu, 
  BarChart3, 
  Code2, 
  Users, 
  Search,
  Check
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
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCategory = skillCategories[selectedCategory];

  // Global search filtering across all categories
  const isSearching = searchQuery.trim().length > 0;
  const filteredSkillsBySearch = isSearching
    ? skillCategories.flatMap((cat) =>
        cat.skills
          .filter(
            (s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (s.tools && s.tools.toLowerCase().includes(searchQuery.toLowerCase()))
          )
          .map((s) => ({ ...s, categoryName: cat.name }))
      )
    : [];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical & Domain Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              A comprehensive toolkit covering product analytics, data science, AI workflows, and executive business intelligence.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search skills (e.g., SQL, RAG, Power BI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
            />
            {isSearching && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* If Searching, show search results */}
        {isSearching ? (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 mb-4">
              Found {filteredSkillsBySearch.length} matches for &ldquo;{searchQuery}&rdquo;:
            </div>

            {filteredSkillsBySearch.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-sm">
                No matching skills found. Try searching for &ldquo;Python&rdquo;, &ldquo;SQL&rdquo;, &ldquo;A/B Testing&rdquo;, &ldquo;Zapier&rdquo;, or &ldquo;Tableau&rdquo;.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredSkillsBySearch.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-white">{skill.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/20">
                          {skill.level}
                        </span>
                      </div>
                      <div className="text-[11px] text-cyan-400/80 mb-1">{skill.categoryName}</div>
                      {skill.tools && (
                        <div className="text-[11px] text-slate-400 font-mono">{skill.tools}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Normal Category View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Category Selector Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {skillCategories.map((cat, idx) => {
                const Icon = iconMap[cat.icon] || Sparkles;
                const isSelected = selectedCategory === idx;

                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(idx)}
                    className={`flex items-start gap-3.5 p-4 rounded-xl text-left transition-all duration-200 ${
                      isSelected
                        ? 'bg-slate-800/90 border-l-4 border-cyan-400 shadow-md text-white'
                        : 'bg-slate-900/50 hover:bg-slate-900 border border-slate-800/70 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{cat.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {cat.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Category Skills Display */}
            <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-xl shadow-black/20 flex flex-col justify-between">
              <div>
                {/* Category Header */}
                <div className="pb-4 mb-6 border-b border-slate-800/80">
                  <h3 className="text-xl font-bold text-white mb-1">{currentCategory.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-400">{currentCategory.description}</p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentCategory.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3.5 rounded-xl border transition-all duration-200 ${
                        skill.highlight
                          ? 'bg-slate-900/90 border-cyan-500/40 shadow-sm shadow-cyan-950/20'
                          : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-xs sm:text-sm font-semibold text-slate-100 flex items-center gap-1.5">
                          {skill.highlight && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                            skill.level === 'Expert'
                              ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                              : skill.level === 'Advanced'
                              ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-500/30'
                              : 'bg-indigo-950/80 text-indigo-400 border border-indigo-500/30'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {skill.tools && (
                        <div className="text-[11px] text-slate-400 font-mono mt-1">
                          ↳ {skill.tools}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Context */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Expert Proficiency</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 ml-2"></span>
                  <span>Advanced</span>
                  <span className="w-2 h-2 rounded-full bg-indigo-400 ml-2"></span>
                  <span>Proficient</span>
                </span>
                <span className="text-cyan-400/80 font-medium">
                  Continuous experimentation & production deployment
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
