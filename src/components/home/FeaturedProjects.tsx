import { ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export const FeaturedProjects: React.FC = () => {
  const featured = projectsData.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Selected Engineering Work"
            title="Featured Projects & Systems"
            subtitle="Real-world full-stack and backend systems across multi-tenant SaaS, insurance operations, desktop-cloud sync, and developer tools."
            action={
              <Button
                to="/projects"
                variant="outline"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                View All {projectsData.length} Projects
              </Button>
            }
          />
        </ScrollReveal>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project, idx) => (
            <ScrollReveal key={project.slug} delayMs={idx * 100}>
              <ProjectCard project={project} featuredLayout />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal direction="up" delayMs={200}>
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-gradient-to-r from-zinc-50 via-indigo-50/50 to-zinc-50 dark:border-zinc-800 dark:bg-gradient-to-r dark:from-zinc-900/60 dark:via-indigo-950/20 dark:to-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                Explore the complete technical case studies
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
                Dive deeper into architectural decisions, API schema designs, database modeling, and offline synchronization trade-offs.
              </p>
            </div>
            <Button
              to="/projects"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Browse All Projects
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
