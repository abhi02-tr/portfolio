import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'crest-skillserve',
    company: 'Crest / Crest Skillserve',
    role: 'Software Engineer',
    period: 'Dec 2023 — Present',
    location: 'Surat, Gujarat, India',
    employmentType: 'Full-time',
    description: 'Leading backend architecture and full-stack feature development across high-traffic SaaS systems, internal enterprise operations, and synchronization infrastructures.',
    highlights: [
      'Architected and implemented enterprise Claim Management portals supporting Adjusters, Contractors, and Clients with role-based security.',
      'Constructed two-way QuickBooks accounting synchronization for invoices and chart of accounts, alongside Amazon QuickSight executive reporting pipelines.',
      'Integrated Google Maps & Distance Matrix API for dynamic field inspector route clustering and travel time minimization.',
      'Developed inbound email processing workflows leveraging AWS SES, S3 document storage, and SNS asynchronous triggers.',
      'Engineered desktop-to-cloud bidirectional data synchronization for Electron retail kiosks with offline event buffering and usage-based Stripe payment integrations.',
      'Maintained and extended enterprise Time Management System (TMS) timesheets and HRMS employee probation & training modules.'
    ],
    technologies: [
      'Node.js',
      'React.js',
      'Supabase',
      'Drizzle ORM',
      'PostgreSQL',
      'MySQL',
      'Sequelize',
      'Stripe API',
      'QuickBooks API',
      'AWS (SES, S3, SNS)',
      'Google Maps API',
      'Electron'
    ]
  },
  {
    id: 'occubit-solutions',
    company: 'Occubit Solutions',
    role: 'Freelance Software Developer',
    period: 'May 2022 — Dec 2023',
    location: 'Surat, Gujarat, India',
    employmentType: 'Freelance',
    description: 'Delivered client-tailored full-stack web solutions, custom backend APIs, and responsive frontends for emerging businesses and independent founders.',
    highlights: [
      'Designed and deployed custom RESTful backend endpoints in Node.js and Express with comprehensive validation and error handling.',
      'Built dynamic, responsive web interfaces using modern JavaScript, React, and CSS frameworks.',
      'Modeled relational database schemas in MySQL and PostgreSQL, optimizing queries and indexing strategies for product catalogs and user accounts.',
      'Conducted end-to-end testing, bug diagnosis, and deployment support for production client deliveries.'
    ],
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'React.js',
      'MySQL',
      'PostgreSQL',
      'REST APIs',
      'HTML5/CSS3'
    ]
  }
];
