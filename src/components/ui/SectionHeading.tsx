import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  action,
  className
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl',
        className
      )}
    >
      <div className={cn('flex flex-wrap items-center gap-4 justify-between', align === 'center' && 'justify-center')}>
        <div>
          {tag && (
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400 text-xs font-mono tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              {tag}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {title}
          </h2>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
