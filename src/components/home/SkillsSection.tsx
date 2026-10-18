import React, { useState, useRef } from 'react';
import { skillsData } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';
import { cn } from '../../lib/utils';
import { Sparkles, Terminal, Code2, Database, Network, Wrench } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  backend: <Terminal className="w-4 h-4 text-indigo-500" />,
  frontend: <Code2 className="w-4 h-4 text-cyan-500" />,
  databases: <Database className="w-4 h-4 text-purple-500" />,
  integrations: <Network className="w-4 h-4 text-emerald-500" />,
  'devops-tools': <Wrench className="w-4 h-4 text-amber-500" />,
  emerging: <Sparkles className="w-4 h-4 text-rose-500" />
};

const SkillCard: React.FC<{ cat: typeof skillsData[0] }> = ({ cat }) => {
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
      className="spotlight-card h-full p-6 sm:p-7 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/70 dark:hover:border-zinc-700 dark:shadow-none transition-all duration-300 flex flex-col justify-between text-left"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 dark:bg-zinc-800/80 dark:border-zinc-700/60 flex items-center justify-center">
            {CATEGORY_ICONS[cat.id] || <Terminal className="w-4 h-4 text-indigo-500" />}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
            {cat.name}
          </h3>
        </div>

        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
          {cat.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
        {cat.skills.map(skill => (
          <span
            key={skill.name}
            className={cn(
              'px-2.5 py-1 text-xs font-mono rounded-lg border transition-colors',
              skill.featured
                ? 'bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/30'
                : 'bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-300 dark:border-zinc-700/50'
            )}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categoriesToDisplay = activeTab === 'all'
    ? skillsData
    : skillsData.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/40 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Technical Capabilities"
            title="Categorized Skills & Tooling"
            subtitle="Organized by architectural domain without arbitrary percentage ratings, representing hands-on delivery and production experience."
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              type="button"
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border whitespace-nowrap',
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm shadow-indigo-600/30'
                  : 'bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 border-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 dark:border-zinc-800'
              )}
            >
              All Categories
            </button>
            {skillsData.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                type="button"
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border whitespace-nowrap',
                  activeTab === cat.id
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm shadow-indigo-600/30'
                    : 'bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 border-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 dark:border-zinc-800'
                )}
              >
                {CATEGORY_ICONS[cat.id]}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesToDisplay.map((cat, idx) => (
            <ScrollReveal key={cat.id} delayMs={idx * 60}>
              <SkillCard cat={cat} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
