import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ShieldAlert,
  Check,
  Workflow
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { projectsData } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { setPageMeta } from '../lib/seo';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectsData[currentIndex];

  useEffect(() => {
    if (project) {
      setPageMeta(
        `${project.title} — Case Study`,
        project.shortDescription
      );
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-zinc-950 dark:text-white mb-4">Project Not Found</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          The requested project case study does not exist or has been moved.
        </p>
        <Button to="/projects" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
          Back to All Projects
        </Button>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className="py-10 sm:py-16 md:py-20 text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <ScrollReveal direction="up" delayMs={50}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </ScrollReveal>

        {/* Hero Header */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-10 transition-colors">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="primary" size="md">
                {project.category}
              </Badge>

              {project.evidenceStatus === 'verified' ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Evidence
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Owner-provided Details
                </span>
              )}

              {project.timeline && (
                <span className="text-xs font-mono text-zinc-500">
                  {project.timeline}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>

            {/* Role & Links Action Bar */}
            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-zinc-500 font-mono">
                <span>Role:</span>
                <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{project.role}</span>
              </div>

              <div className="flex items-center gap-3">
                {project.links.live && (
                  <Button
                    href={project.links.live}
                    isExternal
                    variant="primary"
                    size="sm"
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Open Live Site
                  </Button>
                )}

                {project.links.github && (
                  <Button
                    href={project.links.github}
                    isExternal
                    variant="secondary"
                    size="sm"
                    leftIcon={<GithubIcon className="w-4 h-4" />}
                  >
                    View Source
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Technologies Chip Strip */}
        <ScrollReveal direction="up" delayMs={150}>
          <div className="my-10 p-5 rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/30 transition-colors">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 font-semibold">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-white text-zinc-800 border border-zinc-200 shadow-sm dark:bg-zinc-800/80 dark:text-zinc-200 dark:border-zinc-700/60 dark:shadow-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Overview */}
        <ScrollReveal direction="up" delayMs={200}>
          <section className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Project Context & Scope
            </h2>
            <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4 text-base">
              <p>{project.overview}</p>
            </div>
          </section>
        </ScrollReveal>

        {/* Architecture & Workflow Diagram */}
        {project.architecture && (
          <ScrollReveal direction="up" delayMs={250}>
            <section className="mb-12 p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Workflow className="w-5 h-5 text-indigo-500" />
                <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
                  System Architecture & Data Flow
                </h2>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                {project.architecture.flowDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.architecture.keyModules.map((mod, i) => (
                  <div
                    key={mod.name}
                    className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400 text-xs font-mono flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
                        {mod.name}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Key Features */}
        <ScrollReveal direction="up" delayMs={300}>
          <section className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Key Features & Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800/60 dark:bg-zinc-900/30 shadow-sm dark:shadow-none"
                >
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Engineering Highlights & Trade-offs */}
        <ScrollReveal direction="up" delayMs={350}>
          <section className="mb-16 space-y-4">
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Engineering Decisions & Highlights
            </h2>
            <div className="space-y-3">
              {project.engineeringHighlights.map((highlight, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50"
                >
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Previous / Next Case Study Navigation */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 transition-colors">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:bg-zinc-900/70 dark:hover:border-zinc-700 transition-all text-left"
            >
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous Project
              </div>
              <div className="text-base font-bold text-zinc-950 dark:text-white truncate">
                {prevProject.title}
              </div>
            </Link>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:bg-zinc-900/70 dark:hover:border-zinc-700 transition-all text-right"
            >
              <div className="flex items-center justify-end gap-1.5 text-xs font-mono text-zinc-500 mb-1">
                Next Project
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-base font-bold text-zinc-950 dark:text-white truncate">
                {nextProject.title}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
