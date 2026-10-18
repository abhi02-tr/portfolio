import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import { copyToClipboard } from '../../lib/utils';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(profileData.email);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up">
          <SectionHeading
            align="center"
            tag="Let's Connect"
            title="Start a Conversation"
            subtitle="Whether you have an engineering role, a SaaS product in development, an operational workflow integration, or simply want to connect."
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delayMs={100}>
          <div className="p-8 sm:p-12 rounded-3xl border border-zinc-200 bg-white/90 shadow-xl dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-2xl backdrop-blur-md transition-colors">
            {/* Email Display Card */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950/80 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-zinc-500">
                    Primary Direct Email
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-white font-mono">
                    {profileData.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer shadow-sm dark:shadow-none"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <Button
                  href={`mailto:${profileData.email}?subject=Full-Stack%20Engineering%20Discussion`}
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Compose
                </Button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap items-center justify-center gap-4">
              <Button
                href={profileData.githubUrl}
                isExternal
                variant="outline"
                size="md"
                leftIcon={<GithubIcon className="w-4 h-4" />}
              >
                GitHub Profile
              </Button>

              {profileData.linkedinUrl && (
                <Button
                  href={profileData.linkedinUrl}
                  isExternal
                  variant="outline"
                  size="md"
                  leftIcon={<LinkedinIcon className="w-4 h-4 text-blue-500" />}
                >
                  LinkedIn
                </Button>
              )}
            </div>

            <p className="mt-6 text-xs font-mono text-zinc-500">
              Based in Surat, Gujarat, India · Open to remote opportunities & contract engagements
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
