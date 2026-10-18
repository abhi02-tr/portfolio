export type ProjectCategory = 
  | 'All' 
  | 'SaaS & E-commerce' 
  | 'Business Systems' 
  | 'POS & Payments' 
  | 'Workforce & HR' 
  | 'Consumer & Mobile' 
  | 'Open Source';

export type EvidenceStatus = 'verified' | 'owner-provided' | 'needs-review';

export interface ProjectLink {
  live?: string;
  github?: string;
  caseStudy?: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  overview: string;
  role: string;
  technologies: string[];
  features: string[];
  engineeringHighlights: string[];
  architecture?: {
    flowDescription: string;
    keyModules: { name: string; description: string }[];
  };
  links: ProjectLink;
  featured: boolean;
  visibility: 'public' | 'private' | 'not-confirmed';
  evidenceStatus: EvidenceStatus;
  accentColor: string;
  timeline?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  employmentType: 'Full-time' | 'Freelance' | 'Contract';
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  iconName?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  headline: string;
  bio: string[];
  location: string;
  email: string;
  githubUrl: string;
  githubUsername: string;
  linkedinUrl?: string;
  resumeAvailable: boolean;
  resumeUrl?: string;
}
