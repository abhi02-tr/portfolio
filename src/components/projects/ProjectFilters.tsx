import React from 'react';
import { Search, X } from 'lucide-react';
import type { ProjectCategory } from '../../types';
import { cn } from '../../lib/utils';

export interface ProjectFiltersProps {
  categories: { label: ProjectCategory; count: number }[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
        {categories.map(cat => {
          const isActive = activeCategory === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => onSelectCategory(cat.label)}
              type="button"
              className={cn(
                'flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border',
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm shadow-indigo-600/30'
                  : 'bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 border-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 dark:border-zinc-800'
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  'text-[10px] px-1.5 py-0.2 rounded-full font-mono',
                  isActive ? 'bg-indigo-700 text-indigo-100' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                )}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="relative min-w-[240px] md:w-72">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Filter by tech or keyword..."
          className="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm dark:bg-zinc-900/60 dark:border-zinc-800 dark:text-zinc-200 dark:placeholder-zinc-500 dark:shadow-none transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 cursor-pointer"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
