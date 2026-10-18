import React from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ScrollProgressBar } from './ScrollProgressBar';

export interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-[#090a0f] dark:text-zinc-100 selection:bg-indigo-500/20 dark:selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-300 transition-colors duration-250">
      <ScrollProgressBar />
      <SiteHeader />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};
