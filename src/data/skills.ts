import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'Core strength in server-side engineering, business logic orchestration, and performant REST APIs.',
    skills: [
      { name: 'Node.js', featured: true },
      { name: 'Express.js', featured: true },
      { name: 'RESTful API Design', featured: true },
      { name: 'Microservices & Modular Arch' },
      { name: 'JWT & Session Auth', featured: true },
      { name: 'WebSockets & Event Streams' },
      { name: 'Offline Data Synchronization' },
      { name: 'Error Handling & Logging' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Component-driven, responsive user interfaces prioritizing clean typography, speed, and usability.',
    skills: [
      { name: 'React.js', featured: true },
      { name: 'Next.js', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'JavaScript (ES6+)', featured: true },
      { name: 'Tailwind CSS', featured: true },
      { name: 'HTML5 & Semantic Web' },
      { name: 'Responsive Layouts' },
      { name: 'State Management' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & ORM',
    description: 'Relational data modeling, ACID transactions, type-safe queries, and schema migration management.',
    skills: [
      { name: 'PostgreSQL', featured: true },
      { name: 'MySQL', featured: true },
      { name: 'Supabase', featured: true },
      { name: 'Drizzle ORM', featured: true },
      { name: 'Sequelize ORM' },
      { name: 'MongoDB' },
      { name: 'Schema Design & Indexing' }
    ]
  },
  {
    id: 'integrations',
    name: 'Third-Party Integrations',
    description: 'Deep integration experience bridging financial, geographical, cloud messaging, and analytics services.',
    skills: [
      { name: 'Stripe API & Webhooks', featured: true },
      { name: 'QuickBooks Ledger & Invoices', featured: true },
      { name: 'Google Maps & Distance Matrix', featured: true },
      { name: 'AWS SES, S3, SNS', featured: true },
      { name: 'Amazon QuickSight' },
      { name: 'Google Calendar API' },
      { name: 'Electron IPC & Desktop Bridges' }
    ]
  },
  {
    id: 'devops-tools',
    name: 'DevOps & Tooling',
    description: 'Developer tooling, version control, and containerized development workflows.',
    skills: [
      { name: 'Git & GitHub Workflows', featured: true },
      { name: 'Docker Containers', featured: true },
      { name: 'Vite & Modern Bundlers' },
      { name: 'Postman & API Testing' },
      { name: 'Linux / Bash' },
      { name: 'npm / pnpm ecosystem' }
    ]
  },
  {
    id: 'emerging',
    name: 'Exploring & Emerging Tech',
    description: 'Active continuous learning in modern AI architectures and distributed cloud systems.',
    skills: [
      { name: 'AI & LLM Integration (Exploring)', featured: true },
      { name: 'RAG Architectures (Learning)' },
      { name: 'Serverless Cloud Services' },
      { name: 'Vector Embeddings' }
    ]
  }
];
