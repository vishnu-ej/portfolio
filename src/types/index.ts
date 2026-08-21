export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-Time' | 'Internship' | 'Trainee';
  current?: boolean;
  promotionBadge?: string;
  awardBadge?: string;
  description: string[];
  skills: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: 'AI & Full-Stack' | 'Machine Learning' | 'IoT & Hardware' | 'Growth & Analytics' | 'Research';
  description: string;
  bullets: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  metricsHighlight?: string;
  iconName?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  amount?: string;
  type: 'Scholarship' | 'Corporate Award' | 'Academic Honor';
  description: string;
  highlight?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  details?: string;
  coursework?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skillsCovered: string[];
  badgeColor: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    tools?: string;
    highlight?: boolean;
  }[];
}

export interface ResearchPublication {
  title: string;
  conference: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}
