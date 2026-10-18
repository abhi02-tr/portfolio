import type { GitHubRepo } from '../types';

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'bubble_sort_visulizer',
    full_name: 'abhi02-tr/bubble_sort_visulizer',
    html_url: 'https://github.com/abhi02-tr/bubble_sort_visulizer',
    description: 'Visualizer for bubble sort algorithm with custom speed and dynamic step-by-step array animations.',
    language: 'JavaScript',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2024-03-15T00:00:00Z',
    topics: ['algorithms', 'visualization', 'javascript', 'sorting']
  },
  {
    id: 2,
    name: 'Notes-app',
    full_name: 'abhi02-tr/Notes-app',
    html_url: 'https://github.com/abhi02-tr/Notes-app',
    description: 'A responsive note-taking application designed for fast capturing and localized storage.',
    language: 'JavaScript',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2024-02-10T00:00:00Z',
    topics: ['productivity', 'notes', 'javascript']
  },
  {
    id: 3,
    name: 'login-system',
    full_name: 'abhi02-tr/login-system',
    html_url: 'https://github.com/abhi02-tr/login-system',
    description: 'Authentication and session management starter built using Node.js, Express, and bcrypt password salting.',
    language: 'JavaScript',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2024-01-20T00:00:00Z',
    topics: ['nodejs', 'express', 'authentication', 'security']
  },
  {
    id: 4,
    name: 'angular-js-tutorial',
    full_name: 'abhi02-tr/angular-js-tutorial',
    html_url: 'https://github.com/abhi02-tr/angular-js-tutorial',
    description: 'Component architecture and data-binding exploratory exercises and tutorials.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2023-11-05T00:00:00Z',
    topics: ['angular', 'learning', 'frontend']
  }
];

let cachedRepos: GitHubRepo[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

export async function fetchGitHubRepos(username = 'abhi02-tr'): Promise<{ repos: GitHubRepo[]; isFallback: boolean; error?: string }> {
  const now = Date.now();
  if (cachedRepos && now - lastFetchTime < CACHE_TTL_MS) {
    return { repos: cachedRepos, isFallback: false };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`, {
      signal: controller.signal,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`GitHub API response status: ${response.status}. Using verified curated repositories.`);
      return { repos: FALLBACK_REPOS, isFallback: true, error: `GitHub API status ${response.status}` };
    }

    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      const filtered = data
        .filter((r: any) => !r.fork)
        .map((r: any) => ({
          id: r.id,
          name: r.name,
          full_name: r.full_name,
          html_url: r.html_url,
          description: r.description,
          language: r.language,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
          updated_at: r.updated_at,
          topics: r.topics || []
        }));

      cachedRepos = filtered.length > 0 ? filtered : FALLBACK_REPOS;
      lastFetchTime = now;
      return { repos: cachedRepos, isFallback: false };
    }

    return { repos: FALLBACK_REPOS, isFallback: true };
  } catch (err: any) {
    console.info('Using curated offline GitHub repository data:', err.message || err);
    return { repos: FALLBACK_REPOS, isFallback: true, error: err.message };
  }
}
