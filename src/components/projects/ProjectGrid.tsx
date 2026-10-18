import type { PortfolioProject } from '../../types';
import { ProjectCard } from './ProjectCard';
import { FolderSearch } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export interface ProjectGridProps {
  projects: PortfolioProject[];
  emptyMessage?: string;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  emptyMessage = 'No projects matched your criteria.'
}) => {
  if (projects.length === 0) {
    return (
      <div className="py-16 text-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/20">
        <FolderSearch className="w-10 h-10 text-zinc-400 dark:text-zinc-600 mx-auto mb-3" />
        <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-300">
          No projects found
        </h4>
        <p className="mt-1 text-xs text-zinc-500 max-w-sm mx-auto">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ScrollReveal key={project.slug} delayMs={index * 60}>
          <ProjectCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
};
