import React, { useRef } from 'react';
import { Server, Database, RefreshCw, Zap, ShieldCheck, Cpu } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';

const STRENGTHS = [
  {
    icon: <Server className="w-5 h-5 text-indigo-500" />,
    title: 'Robust RESTful API Architecture',
    description: 'Designing typed, predictable REST endpoints with clear validation, defensive sanitization, structured error logging, and high concurrency resilience.'
  },
  {
    icon: <Database className="w-5 h-5 text-purple-500" />,
    title: 'Relational & Document Modeling',
    description: 'Constructing performant database schemas in PostgreSQL, Supabase, and MySQL. Experience enforcing ACID constraints and type-safe query layers with Drizzle & Sequelize.'
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-emerald-500" />,
    title: 'Offline Sync & Event Queuing',
    description: 'Engineering bidirectional synchronization engines between physical Electron kiosk terminals and cloud backends, utilizing monotonic IDs and conflict reconciliation.'
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    title: 'Third-Party Financial & Cloud Integrations',
    description: 'Deep integration experience bridging Stripe usage-based payment webhooks, QuickBooks double-entry accounting sync, and automated AWS SES/S3/SNS ingest pipelines.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
    title: 'Enterprise Multi-Role Security (RBAC)',
    description: 'Implementing multi-tenant authorization guards, secure password salting via bcrypt, JWT/session management, and least-privilege role boundaries.'
  },
  {
    icon: <Cpu className="w-5 h-5 text-rose-500" />,
    title: 'Emerging AI & Cloud Exploration',
    description: 'Actively exploring modern GenAI architectures, LLM orchestration frameworks, retrieval-augmented generation (RAG), and serverless automation patterns.'
  }
];

const StrengthCard: React.FC<{ strength: typeof STRENGTHS[0] }> = ({ strength }) => {
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
      className="spotlight-card h-full p-6 sm:p-7 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700 dark:shadow-none transition-all duration-300 text-left"
    >
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 dark:bg-zinc-800/80 dark:border-zinc-700/60 flex items-center justify-center mb-5">
          {strength.icon}
        </div>
        <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
          {strength.title}
        </h3>
        <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {strength.description}
        </p>
      </div>
    </div>
  );
};

export const StrengthsSection: React.FC = () => {
  return (
    <section id="strengths" className="py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/60 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Engineering Philosophy"
            title="Core Technical Strengths"
            subtitle="Prioritizing correctness, operational reliability, clean data boundaries, and long-term maintainability."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STRENGTHS.map((strength, idx) => (
            <ScrollReveal key={strength.title} delayMs={idx * 80}>
              <StrengthCard strength={strength} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
