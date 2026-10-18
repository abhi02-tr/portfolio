import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { navItems, type NavItem } from '../../data/navigation';
import { profileData } from '../../data/profile';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    onClose();
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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl text-zinc-900 dark:text-white p-6 transition-all duration-300"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-mono shadow-md shadow-indigo-600/30">
            AT
          </div>
          <span className="text-zinc-950 dark:text-white">Abhi Trivedi</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onClose}
            type="button"
            aria-label="Close menu"
            className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Nav List */}
      <nav className="flex flex-col gap-2 my-auto py-6">
        {navItems.map(item => (
          <a
            key={item.label}
            href={item.path}
            onClick={(e) => handleNavClick(e, item)}
            className="px-4 py-3 text-xl font-medium rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-900/60 transition-colors cursor-pointer"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Bottom Footer Actions */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          {profileData.linkedinUrl && (
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}
          <a
            href={`mailto:${profileData.email}`}
            className="p-3 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            aria-label="Email Abhi"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <Button
          variant="primary"
          href={`mailto:${profileData.email}?subject=Project%20or%20Role%20Inquiry`}
          className="w-full"
          leftIcon={<Mail className="w-4 h-4" />}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};
