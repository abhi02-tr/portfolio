import React from 'react';
import { ArrowRight, Mail, Terminal, MapPin } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { CodeWindow } from '../ui/CodeWindow';
import { ScrollReveal } from '../ui/ScrollReveal';

export const HeroSection: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#projects');
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <section id="overview" className="relative pt-8 pb-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-70 dark:opacity-100" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal direction="up" delayMs={50}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400 text-xs font-mono tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Full-Stack Engineer · Backend-Focused</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={150}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.12]">
                Building reliable products from{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
                  backend logic
                </span>{' '}
                to polished user experiences.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={250}>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                I'm <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">{profileData.name}</strong>, a full-stack software engineer focused on Node.js, REST APIs, databases, and practical product engineering. I build and integrate web applications across SaaS, operations, payments, reporting, and business workflows.
              </p>
            </ScrollReveal>

            {/* Location & Context */}
            <ScrollReveal direction="up" delayMs={300}>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  {profileData.location}
                </span>
                <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600">·</span>
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-purple-500" />
                  Surat, India
                </span>
                <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600">·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Available for conversations</span>
              </div>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delayMs={350}>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Button
                  onClick={scrollToProjects}
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore My Work
                </Button>

                <Button
                  onClick={scrollToContact}
                  variant="secondary"
                  size="lg"
                  leftIcon={<Mail className="w-4 h-4" />}
                >
                  Contact Me
                </Button>

                <Button
                  href={profileData.githubUrl}
                  isExternal
                  variant="outline"
                  size="lg"
                  leftIcon={<GithubIcon className="w-4 h-4" />}
                >
                  GitHub
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Code Window Architecture Display */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal direction="left" delayMs={200}>
              <CodeWindow />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
