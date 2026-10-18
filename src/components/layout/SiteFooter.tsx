import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { navItems, type NavItem } from '../../data/navigation';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    if (item.isAnchor) {
      const sectionId = item.path.replace('/#', '').replace('#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${sectionId}`);
        }
      } else {
        navigate(`/?section=${sectionId}`);
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/80 text-zinc-600 dark:text-zinc-400 py-12 md:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-zinc-200 dark:border-zinc-800/60">
          {/* Identity col */}
          <div className="md:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm">
                AT
              </div>
              <span className="font-bold text-zinc-950 dark:text-white text-base tracking-tight">
                {profileData.name}
              </span>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              Full-Stack Software Engineer with specialized depth in Node.js, REST APIs, database architecture, third-party operational synchronizations, and practical product engineering.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Quick links col */}
          <div className="space-y-3 text-left">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-300 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect col */}
          <div className="space-y-3 text-left">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-300 font-semibold">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-500" />
                  <span>GitHub (@{profileData.githubUsername})</span>
                </a>
              </li>
              {profileData.linkedinUrl && (
                <li>
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-zinc-500" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-zinc-500" />
                  <span className="truncate">{profileData.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-indigo-500" />
            <span>© {currentYear} {profileData.name}. Engineered with React, TypeScript & Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
