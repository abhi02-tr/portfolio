import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { navItems, type NavItem } from '../../data/navigation';
import { profileData } from '../../data/profile';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { MobileNavigation } from './MobileNavigation';
import { cn } from '../../lib/utils';

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy for homepage
      if (location.pathname === '/') {
        const sections = ['overview', 'projects', 'strengths', 'experience', 'skills', 'contact'];
        const scrollPosition = window.scrollY + 140;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    if (item.isAnchor) {
      const sectionId = item.path.replace('/#', '').replace('#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${sectionId}`);
          setActiveSection(sectionId);
        }
      } else {
        navigate(`/?section=${sectionId}`);
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 py-3 shadow-sm dark:shadow-black/20'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                AT
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-sm tracking-tight text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {profileData.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  Full-Stack / Backend
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-zinc-100/90 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-md px-3 py-1.5 rounded-full">
              {navItems.map(item => {
                const isHome = location.pathname === '/';
                const sectionName = item.path.replace('/#', '');
                const isActive = (item.isAnchor && isHome && activeSection === sectionName) ||
                                 (!item.isAnchor && location.pathname === item.path);

                return (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className={cn(
                      'px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer',
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50'
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-colors"
                aria-label="GitHub Profile"
                title="View GitHub (abhi02-tr)"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {profileData.linkedinUrl && (
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}

              <ThemeToggle />

              <div className="hidden sm:block">
                <Button
                  size="sm"
                  variant="primary"
                  href={`mailto:${profileData.email}?subject=Software%20Engineer%20Opportunity`}
                  leftIcon={<Mail className="w-3.5 h-3.5" />}
                >
                  Contact
                </Button>
              </div>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
