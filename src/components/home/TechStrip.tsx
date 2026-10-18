import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const CORE_STACK = [
  { name: 'Node.js', role: 'Runtime Core' },
  { name: 'Express.js', role: 'REST APIs' },
  { name: 'PostgreSQL', role: 'Relational DB' },
  { name: 'Supabase & Drizzle', role: 'Data Layer' },
  { name: 'React & TypeScript', role: 'Frontend UI' },
  { name: 'Stripe API', role: 'Billing & Payments' },
  { name: 'Electron', role: 'Desktop Kiosk' },
  { name: 'AWS (SES, S3, SNS)', role: 'Cloud Messaging' },
  { name: 'Google Distance Matrix', role: 'Geo Routing' },
];

export const TechStrip: React.FC = () => {
  return (
    <div className="border-y border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/30 backdrop-blur-sm py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="none" delayMs={50}>
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
              Core Engineering Stack & Integrations
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CORE_STACK.map(tech => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950/40 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700 dark:shadow-none transition-all text-center"
              >
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-200">
                  {tech.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 mt-0.5">
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
