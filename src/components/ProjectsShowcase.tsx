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
    <section id="projects" className="bg-white py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-label mb-2">ENGINEERING & INNOVATION</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#09090b] tracking-tight">
              Featured Technical Projects
            </h2>
            <p className="text-[#52525b] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              From enterprise full-stack RAG systems and machine learning diagnostics to IoT assistive hardware and conversion engines.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-[10000px] px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#09090b] text-white'
                    : 'bg-[#f4f4f5] border border-[#ececee] text-[#18181b] hover:bg-[#ececee]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = (project.iconName && iconMap[project.iconName]) || Sparkles;

            return (
              <div
                key={project.id}
                className="bg-white rounded-[36px] border border-[#ececee] p-7 flex flex-col justify-between hover:border-[#d4d4d8] transition-colors"
              >
                <div>
                  {/* Top Bar: Icon, Category & Period */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-[16px] bg-[#f4f4f5] border border-[#ececee] flex items-center justify-center text-[#18181b]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="border border-[#ececee] text-xs text-[#71717a] rounded-xl px-2.5 py-0.5 bg-[#fafafa]">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-[#71717a]">
                        <Calendar className="w-3.5 h-3.5 text-[#a1a1aa]" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#09090b] mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-sm font-normal text-[#52525b] mb-4 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Metric Highlight: Ember orange badge */}
                  {project.metricsHighlight && (
                    <div className="mb-4 inline-flex items-center gap-1.5 bg-[#ff5a00] text-white text-xs rounded-xl px-2.5 py-1 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{project.metricsHighlight}</span>
                    </div>
                  )}

                  {/* Bullets */}
                  <div className="space-y-2.5 mb-6">
                    {project.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-sm text-[#52525b] leading-[1.45]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#18181b] mt-2 shrink-0"></span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Stack & Type Tag */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#ececee] mb-4">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-[#f4f4f5] text-xs text-[#52525b] rounded-xl px-2.5 py-0.5 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Type Tag: filled dark */}
                  <div>
                    {project.id === 'diabetes-prediction' && (
                      <div className="bg-[#3f3f46] text-[#fafafa] text-xs rounded-xl px-2.5 py-1 font-medium inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Streamlit & Scikit-learn Interactive App</span>
                      </div>
                    )}

                    {project.id === 'lp-personalization-platform' && (
                      <div className="bg-[#3f3f46] text-[#fafafa] text-xs rounded-xl px-2.5 py-1 font-medium inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Self-Serve Cohort Landing Page Engine</span>
                      </div>
                    )}

                    {project.id === 'myhealth-app' && (
                      <div className="bg-[#3f3f46] text-[#fafafa] text-xs rounded-xl px-2.5 py-1 font-medium inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Groq LLM & RAG Full-Stack Architecture</span>
                      </div>
                    )}

                    {project.id === 'third-eye-blind' && (
                      <div className="bg-[#3f3f46] text-[#fafafa] text-xs rounded-xl px-2.5 py-1 font-medium inline-flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>IoT Hardware & Haptic Assistive Prototype</span>
                      </div>
                    )}

                    {!['diabetes-prediction', 'lp-personalization-platform', 'myhealth-app', 'third-eye-blind'].includes(project.id) && (
                      <div className="bg-[#3f3f46] text-[#fafafa] text-xs rounded-xl px-2.5 py-1 font-medium inline-flex items-center gap-1.5">
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>{project.category} Project</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
