'use client';

import React, { useState } from 'react';
import { projects } from '@/data/portfolioData';
import { 
  FolderGit2, 
  Sparkles, 
  Calendar, 
  Activity, 
  BrainCircuit, 
  Eye, 
  Zap, 
  FileText,
  Sliders,
  CheckCircle2,
  Cpu
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  BrainCircuit,
  Eye,
  Zap,
  FileText,
};

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Full-Stack',
    'Machine Learning',
    'IoT & Hardware',
    'Growth & Analytics',
    'Research',
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineering & Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Technical Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              From enterprise full-stack RAG systems and machine learning diagnostics to IoT assistive hardware and conversion engines.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const Icon = (project.iconName && iconMap[project.iconName]) || Sparkles;

            return (
              <div
                key={project.id}
                className="group relative glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/20 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon, Category & Period */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mb-4 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Highlight Metric Banner if present */}
                  {project.metricsHighlight && (
                    <div className="mb-4 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/20 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-xs font-semibold text-cyan-300">
                        {project.metricsHighlight}
                      </span>
                    </div>
                  )}

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6">
                    {project.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Stack & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  {project.id === 'diabetes-prediction' && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400/90 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Streamlit & Scikit-learn Interactive Application</span>
                    </div>
                  )}

                  {project.id === 'lp-personalization-platform' && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-indigo-400/90 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Self-Serve Cohort Landing Page Engine</span>
                    </div>
                  )}

                  {project.id === 'myhealth-app' && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400/90 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Groq LLM & RAG Full-Stack Architecture</span>
                    </div>
                  )}

                  {project.id === 'third-eye-blind' && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>IoT Hardware & Haptic Assistive Prototype</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
