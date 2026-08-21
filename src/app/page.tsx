'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsRibbon from '@/components/StatsRibbon';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import SkillsMatrix from '@/components/SkillsMatrix';
import AwardsScholarships from '@/components/AwardsScholarships';
import ResearchEducation from '@/components/ResearchEducation';
import ContactSection from '@/components/ContactSection';
import ResumeModal from '@/components/ResumeModal';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Quantifiable Impact Stats Ribbon */}
      <StatsRibbon />

      {/* Career Experience & Promotions */}
      <ExperienceTimeline />

      {/* Featured Projects Showcase */}
      <ProjectsShowcase />

      {/* Technical Skills & Analytics Matrix */}
      <SkillsMatrix />

      {/* Awards & Merit Scholarships */}
      <AwardsScholarships />

      {/* Research Publication & Education */}
      <ResearchEducation />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Full Structured Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
}
