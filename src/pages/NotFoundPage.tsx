import { useEffect } from 'react';
import { Home, Compass } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { setPageMeta } from '../lib/seo';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    setPageMeta('Page Not Found');
  }, []);

  return (
    <div className="py-24 sm:py-32 text-center max-w-xl mx-auto px-4">
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400 flex items-center justify-center mx-auto mb-6">
        <Compass className="w-8 h-8" />
      </div>
      <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold">
        Error 404
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white mt-2 mb-4">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
        The page you are looking for does not exist, has been removed, or the link is incorrect.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Button to="/" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
          Back to Home
        </Button>
        <Button to="/projects" variant="outline">
          Explore Projects
        </Button>
      </div>
    </div>
  );
};
