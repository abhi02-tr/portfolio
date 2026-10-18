import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { PortfolioProject } from '../../types';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/utils';

export interface ProjectCardProps {
  project: PortfolioProject;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featuredLayout = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'spotlight-card group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 p-6 sm:p-7',
        'bg-white hover:bg-zinc-50/80 border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md',
        'dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 dark:border-zinc-800/80 dark:hover:border-zinc-700 dark:hover:shadow-xl dark:hover:shadow-indigo-500/5',
        featuredLayout && 'lg:p-8'
      )}
    >
      {/* Top Meta row */}
      <div className="relative z-10 text-left">
        <div className="flex items-center justify-between gap-3 mb-4">
          <Badge variant="primary" size="sm">
            {project.category}
          </Badge>

          {/* Evidence status pill */}
          {project.evidenceStatus === 'verified' ? (
            <span
              className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20"
              title="Verified with public deployment or repository"
            >
              <CheckCircle2 className="w-3 h-3" />
              Verified
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20"
              title="Project details provided by owner from professional experience"
            >
              <ShieldAlert className="w-3 h-3" />
              Owner-provided
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
          <Link to={`/projects/${project.slug}`} className="focus:outline-none">
            {project.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Role & Timeline info */}
        <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 font-mono">
          <span>Role: <strong className="text-zinc-800 dark:text-zinc-300 font-medium">{project.role}</strong></span>
          {project.timeline && <span>· {project.timeline}</span>}
        </div>

        {/* Tech tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, featuredLayout ? 7 : 5).map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-300 dark:border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (featuredLayout ? 7 : 5) && (
            <span className="px-1.5 py-0.5 text-xs font-mono text-zinc-500">
              +{project.technologies.length - (featuredLayout ? 7 : 5)}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="relative z-10 mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors group-hover:translate-x-0.5 duration-200"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors"
              title="View Source on GitHub"
              aria-label={`View ${project.title} GitHub repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors"
              title="Open Live Website"
              aria-label={`Open ${project.title} live website`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
