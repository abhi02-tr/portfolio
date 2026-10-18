import React, { useEffect, useState, useRef } from 'react';
import { Star, ExternalLink, Code } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { fetchGitHubRepos } from '../../lib/github';
import type { GitHubRepo } from '../../types';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import { formatDate } from '../../lib/utils';

const RepoCard: React.FC<{ repo: GitHubRepo }> = ({ repo }) => {
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
      className="spotlight-card h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700 dark:shadow-none transition-all duration-300 text-left"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-indigo-500" />
            <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none"
              >
                {repo.name}
              </a>
            </h3>
          </div>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors p-1"
            aria-label={`Open repository ${repo.name} on GitHub`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          {repo.description || 'Public GitHub repository for developer utilities and algorithms.'}
        </p>

        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {repo.topics.slice(0, 4).map(topic => (
              <span
                key={topic}
                className="px-2 py-0.5 text-[11px] font-mono rounded bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20"
              >
                #{topic}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-4">
          {repo.language && (
            <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5" />
            {repo.stargazers_count}
          </span>
        </div>

        <span>Updated {formatDate(repo.updated_at)}</span>
      </div>
    </div>
  );
};

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const result = await fetchGitHubRepos(profileData.githubUsername);
        if (mounted) {
          setRepos(result.repos);
          setIsFallback(result.isFallback);
          setLoading(false);
        }
      } catch {
        if (mounted) {
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Public Code & Open Source"
            title="GitHub Repositories & Activity"
            subtitle={`Curated open-source repositories and algorithmic projects publicly available on GitHub under @${profileData.githubUsername}.`}
            action={
              <Button
                href={profileData.githubUrl}
                isExternal
                variant="outline"
                size="sm"
                leftIcon={<GithubIcon className="w-4 h-4" />}
                rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                View Profile
              </Button>
            }
          />
        </ScrollReveal>

        {isFallback && !loading && (
          <div className="mb-6 px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-xs font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 flex items-center justify-between">
            <span>Displaying curated verified repositories (offline/rate-limit resilient mode).</span>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              Open on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-zinc-200 bg-zinc-100/60 animate-pulse space-y-4 dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3" />
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6" />
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2" />
              </div>
            ))
          ) : (
            repos.map((repo, idx) => (
              <ScrollReveal key={repo.id} delayMs={idx * 80}>
                <RepoCard repo={repo} />
              </ScrollReveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
