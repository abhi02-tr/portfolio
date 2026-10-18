import React, { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { TechStrip } from '../components/home/TechStrip';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { ArchitectureInspector } from '../components/home/ArchitectureInspector';
import { StrengthsSection } from '../components/home/StrengthsSection';
import { ExperienceTimeline } from '../components/home/ExperienceTimeline';
import { SkillsSection } from '../components/home/SkillsSection';
import { AlgorithmSandbox } from '../components/home/AlgorithmSandbox';
import { GitHubSection } from '../components/home/GitHubSection';
import { ContactSection } from '../components/home/ContactSection';
import { setPageMeta } from '../lib/seo';

export const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    setPageMeta(
      'Abhi Trivedi — Full-Stack Engineer & Backend Specialist',
      'Portfolio of Abhi Trivedi, Full-Stack Software Engineer specializing in Node.js, REST APIs, database architecture, and practical product engineering.'
    );

    // Handle scroll to section if query param or hash exists
    const sectionQuery = searchParams.get('section');
    const hash = location.hash.replace('#', '');
    const targetSection = sectionQuery || hash;

    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams, location.hash]);

  return (
    <>
      <HeroSection />
      <TechStrip />
      <FeaturedProjects />
      <ArchitectureInspector />
      <StrengthsSection />
      <ExperienceTimeline />
      <SkillsSection />
      <AlgorithmSandbox />
      <GitHubSection />
      <ContactSection />
    </>
  );
};
