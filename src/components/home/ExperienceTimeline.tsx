import React, { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';

const TimelineCard: React.FC<{ exp: typeof experienceData[0] }> = ({ exp }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700 dark:shadow-none transition-all duration-300 text-left"
    >
      <div className="relative z-10">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800/60">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white">
                {exp.role}
              </h3>
              <Badge variant={exp.employmentType === 'Full-time' ? 'primary' : 'warning'} size="sm">
                {exp.employmentType}
              </Badge>
            </div>
            <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
              {exp.company}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-700/50">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Summary */}
        <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {exp.description}
        </p>

        {/* Bullet Highlights */}
        <div className="mt-5 space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
            Key Contributions & Engineering Deliverables
          </h4>
          <ul className="space-y-2">
            {exp.highlights.map((highlight, hIdx) => (
              <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/60">
          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map(tech => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-mono rounded bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-300 dark:border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Career Journey"
            title="Work Experience & Engineering Roles"
            subtitle="Professional track record designing backend services, full-stack modules, and multi-system integrations."
          />
        </ScrollReveal>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 ml-2 sm:ml-4 space-y-12 transition-colors">
          {experienceData.map((exp, idx) => (
            <ScrollReveal key={exp.id} delayMs={idx * 150} direction="up">
              <div className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 shadow-sm dark:bg-zinc-950 dark:border-indigo-500 dark:text-indigo-400 dark:shadow-md dark:shadow-indigo-500/20 flex items-center justify-center">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                <TimelineCard exp={exp} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
