import { useEffect } from 'react';
import { Terminal, Shield, Cpu, Code2, MapPin, Mail } from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { setPageMeta } from '../lib/seo';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    setPageMeta(
      'About Abhi Trivedi — Full-Stack Engineer',
      'Learn about Abhi Trivedi, his engineering journey, architectural principles, and experience building full-stack products and backend systems.'
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Professional Profile"
            title="About Abhi Trivedi"
            subtitle="Full-Stack Engineer with strong backend expertise, focused on building robust APIs, scalable databases, and practical business products."
          />
        </ScrollReveal>

        {/* Bio Cards */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="p-8 sm:p-10 rounded-3xl border border-zinc-200 bg-white/90 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 backdrop-blur-sm space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base sm:text-lg text-left transition-colors">
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500" />
                {profileData.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-purple-500" />
                Full-Stack & Backend Focus
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Principles / Approach */}
        <div className="mt-16 space-y-6 text-left">
          <ScrollReveal direction="up" delayMs={100}>
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">
              Engineering Principles
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal direction="up" delayMs={150}>
              <div className="spotlight-card p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30 transition-colors">
                <Shield className="w-6 h-6 text-indigo-500 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2">
                  Data Correctness & Idempotency
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Systems must handle duplicate requests, network retries, and dropped socket connections gracefully without double-billing or corrupting ledger state.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={200}>
              <div className="spotlight-card p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30 transition-colors">
                <Code2 className="w-6 h-6 text-cyan-500 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2">
                  Pragmatic Full-Stack Architecture
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Selecting proven technologies tailored to product goals. Using TypeScript and schema validation across boundaries to prevent runtime regressions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={250}>
              <div className="spotlight-card p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30 transition-colors">
                <Cpu className="w-6 h-6 text-purple-500 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2">
                  Offline Tolerance & Systems Sync
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Designing desktop and kiosk applications to remain operational even during internet dropouts, safely queueing events for automatic cloud reconciliation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={300}>
              <div className="spotlight-card p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30 transition-colors">
                <Terminal className="w-6 h-6 text-emerald-500 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2">
                  Continuous Learning & AI Integration
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Actively studying and implementing modern AI/LLM patterns, RAG architectures, and serverless infrastructure to enhance practical product features.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA banner */}
        <ScrollReveal direction="up" delayMs={350}>
          <div className="mt-16 p-8 rounded-2xl border border-zinc-200 bg-gradient-to-br from-indigo-50/50 via-white to-zinc-50 dark:border-zinc-800 dark:bg-gradient-to-br dark:from-indigo-950/40 dark:via-zinc-900/50 dark:to-zinc-900/80 text-center transition-colors">
            <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
              Want to collaborate or discuss an engineering opportunity?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-lg mx-auto">
              I am always happy to speak with engineering managers, founders, and potential collaborators.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={`mailto:${profileData.email}?subject=Let's%20Connect`}
                variant="primary"
                leftIcon={<Mail className="w-4 h-4" />}
              >
                Send an Email
              </Button>
              <Button
                href={profileData.githubUrl}
                isExternal
                variant="outline"
                leftIcon={<GithubIcon className="w-4 h-4" />}
              >
                GitHub Profile
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
