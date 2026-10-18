import React, { useState, useMemo, useEffect } from 'react';
import { projectsData } from '../data/projects';
import type { ProjectCategory } from '../types';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { setPageMeta } from '../lib/seo';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'SaaS & E-commerce',
  'Business Systems',
  'POS & Payments',
  'Workforce & HR',
  'Consumer & Mobile',
  'Open Source'
];

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setPageMeta(
      'Projects & Case Studies',
      'Explore full-stack and backend software engineering projects by Abhi Trivedi, featuring APIs, database systems, and payment architectures.'
    );
    window.scrollTo(0, 0);
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    return CATEGORIES.map(cat => {
      if (cat === 'All') return { label: cat, count: projectsData.length };
      const count = projectsData.filter(p => p.category === cat).length;
      return { label: cat, count };
    });
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.technologies.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Engineered Solutions"
            title="Projects & Case Studies"
            subtitle="Explore detailed implementations across enterprise workflow automation, SaaS e-commerce, desktop-to-cloud synchronization, and open-source software."
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delayMs={50}>
          <ProjectFilters
            categories={categoryCounts}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </ScrollReveal>

        <ProjectGrid
          projects={filteredProjects}
          emptyMessage={`No projects found matching "${searchQuery}" in ${activeCategory}. Try adjusting your search term.`}
        />
      </div>
    </div>
  );
};
