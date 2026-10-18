import type { PortfolioProject } from '../types';

export const projectsData: PortfolioProject[] = [
  {
    slug: 'bizzpocket',
    title: 'BizzPocket',
    category: 'SaaS & E-commerce',
    shortDescription: 'Modern multi-tenant SaaS e-commerce platform empowering merchants to create, launch, and manage digital storefronts and inventory.',
    overview: 'BizzPocket is an e-commerce platform designed to streamline digital commerce for independent merchants and businesses. It provides an intuitive storefront builder, end-to-end product cataloging, automated inventory synchronization, and comprehensive merchant administrative dashboards.',
    role: 'Backend and Full-Stack Development',
    timeline: 'Production SaaS',
    technologies: ['Node.js', 'React.js', 'PostgreSQL', 'Express.js', 'REST APIs', 'JWT Authentication', 'Tailwind CSS'],
    features: [
      'Multi-tenant merchant storefront creation and custom domain handling',
      'Catalog management with SKU-level inventory tracking and bulk pricing updates',
      'Role-based merchant admin dashboard with order lifecycle management',
      'Secure checkout flows and transactional data integrity via PostgreSQL',
      'Robust REST API endpoints supporting fast data queries and mobile responsiveness'
    ],
    engineeringHighlights: [
      'Engineered structured relational schemas in PostgreSQL supporting multi-merchant isolation.',
      'Developed optimized API response structures with indexing to maintain fast page load times under high catalog volume.',
      'Designed admin panel workflows for merchant operations, reducing manual onboarding friction.'
    ],
    architecture: {
      flowDescription: 'React-driven storefronts and admin dashboards consume secure RESTful endpoints powered by Node.js/Express, communicating with a clustered PostgreSQL instance for transactional consistency.',
      keyModules: [
        { name: 'Merchant API Gateway', description: 'Handles authentication, rate limiting, and request routing per merchant tenant.' },
        { name: 'Catalog Engine', description: 'Manages categories, variants, inventory counters, and price calculations.' },
        { name: 'Order Processing', description: 'Enforces atomic transactions during order placement and invoice generation.' }
      ]
    },
    links: {
      live: 'https://bizzpocket.com/',
      caseStudy: '/projects/bizzpocket',
    },
    featured: true,
    visibility: 'public',
    evidenceStatus: 'verified',
    accentColor: '#3b82f6',
  },
  {
    slug: 'claim-management-platform',
    title: 'Enterprise Claim Management Ecosystem',
    category: 'Business Systems',
    shortDescription: 'Multi-portal insurance claims operations platform orchestrating adjusters, contractors, accounting sync, and automated site walkthrough reports.',
    overview: 'A complex enterprise workflow platform designed to coordinate high-volume property claim processing across insurance adjusters, contractors, and policyholders. The system unifies document gathering, route optimization for field adjusters, QuickBooks ledger reconciliation, and automated multimedia report generation.',
    role: 'Backend Engineer & Integration Specialist',
    timeline: 'Enterprise Production',
    technologies: ['Node.js', 'Supabase', 'Drizzle ORM', 'PostgreSQL', 'QuickBooks API', 'Amazon QuickSight', 'Google Maps Distance Matrix', 'AWS SES/S3/SNS'],
    features: [
      'Tri-party dedicated portals for Adjusters, Contractors, and Claimants with fine-grained RBAC',
      'Automated bi-directional QuickBooks invoice and Chart-of-Accounts synchronization',
      'Intelligent field route optimization using Google Maps & Distance Matrix API',
      'Inbound email intake processing using AWS SES, SNS triggers, and S3 attachment parsing',
      'Automated photo walkthrough PDF report generation with timestamped location metadata',
      'Embedded Amazon QuickSight visual analytics for executive claim settlement KPIs'
    ],
    engineeringHighlights: [
      'Constructed a reliable webhook reconciliation engine to sync invoices and account ledger items with QuickBooks without race conditions.',
      'Integrated Google Distance Matrix algorithms to sequence inspection site visits, reducing field transit hours.',
      'Implemented serverless email intake pipeline parsing policy claims from raw MIME payloads into structured database records.',
      'Implemented data access layers using Supabase and Drizzle ORM for type-safe query execution and real-time updates.'
    ],
    architecture: {
      flowDescription: 'Inbound claim notices arrive via web portals or AWS SES email pipelines, triggering SNS queues that populate Supabase/PostgreSQL. Adjusters receive optimized transit itineraries, while financial milestones trigger QuickBooks accounting synchronizations.',
      keyModules: [
        { name: 'QuickBooks Sync Worker', description: 'Two-way ledger and invoice reconciliation with idempotent retry buffers.' },
        { name: 'SES Inbound Parser', description: 'Deconstructs raw email headers and extracts policy documents into AWS S3.' },
        { name: 'Route Sequencer', description: 'Clusters inspection coordinates and queries Google Distance Matrix for minimal travel time.' },
        { name: 'PDF Inspection Engine', description: 'Compiles high-resolution photographic evidence into standardized insurance adjuster reports.' }
      ]
    },
    links: {
      caseStudy: '/projects/claim-management-platform',
    },
    featured: true,
    visibility: 'private',
    evidenceStatus: 'owner-provided',
    accentColor: '#8b5cf6',
  },
  {
    slug: 'kiosk-pos-platform',
    title: 'POS & Electron Kiosk Synchronization System',
    category: 'POS & Payments',
    shortDescription: 'Hybrid point-of-sale platform featuring real-time offline-tolerant synchronization between desktop Electron kiosks and cloud backend with Stripe usage billing.',
    overview: 'A mission-critical point-of-sale infrastructure built to operate continuously in retail environments. The system bridges physical Electron-based kiosk terminals with a centralized web management console, enabling offline transaction buffering, usage-metered Stripe payments, and live remote kiosk telemetry.',
    role: 'Full-Stack & Systems Synchronization Engineer',
    timeline: 'Commercial Solution',
    technologies: ['Node.js', 'React.js', 'Electron', 'Stripe Billing API', 'WebSockets', 'SQLite / Local Storage', 'REST APIs'],
    features: [
      'Bidirectional synchronization protocol linking local Electron terminals with the cloud core',
      'Resilient offline transaction queue that auto-reconciles whenever network connectivity is restored',
      'Usage-based and metered billing integration through Stripe API webhooks and customer portals',
      'Live remote management dashboard displaying terminal health, active carts, and transaction rates',
      'Secure touch-friendly kiosk UI engineered for rapid cashier and customer self-service checkout'
    ],
    engineeringHighlights: [
      'Designed an offline-first state machine on the Electron client to queue transactions locally with monotonic sequence IDs preventing duplicate charges.',
      'Implemented idempotent Stripe subscription and usage-record event listeners to guarantee precise customer invoicing.',
      'Established heartbeat and real-time socket channels to allow remote store owners to observe terminal statuses across locations.'
    ],
    architecture: {
      flowDescription: 'Electron desktop clients write transactions to local encrypted storage and stream updates to the Node.js API over WebSockets/REST. The cloud server aggregates telemetry, triggers Stripe billing increments, and dispatches catalog updates back to terminals.',
      keyModules: [
        { name: 'Sync State Reconciler', description: 'Resolves version conflicts between kiosk local state and central database during network reconnection.' },
        { name: 'Stripe Usage Metering', description: 'Tracks transaction counts and usage units, reporting consumption records securely to Stripe.' },
        { name: 'Terminal Telemetry Daemon', description: 'Monitors kiosk hardware status, peripheral connectivity, and heartbeat pings.' }
      ]
    },
    links: {
      caseStudy: '/projects/kiosk-pos-platform',
    },
    featured: true,
    visibility: 'private',
    evidenceStatus: 'owner-provided',
    accentColor: '#10b981',
  },
  {
    slug: 'time-management-system',
    title: 'Enterprise Time Management & Timelog System (TMS)',
    category: 'Workforce & HR',
    shortDescription: 'Internal corporate workforce productivity platform managing timesheets, multi-level manager approvals, and automated Google Calendar event integration.',
    overview: 'An operational workforce management solution designed to handle corporate time-tracking, attendance verification, billable hours auditing, and managerial sign-offs across multi-department teams.',
    role: 'Backend Software Engineer',
    timeline: 'Internal Corporate Platform',
    technologies: ['Node.js', 'Express.js', 'Sequelize ORM', 'MySQL', 'Google Calendar API', 'JWT', 'RBAC'],
    features: [
      'Comprehensive employee timelog entry, weekly timesheet submission, and overtime calculations',
      'Hierarchical managerial approval workflows with audit logs and modification history',
      'Automated sync with Google Calendar API to convert scheduled client meetings into verifiable work logs',
      'Custom reporting engine generating departmental productivity reports and payroll exports',
      'Role-based access control protecting confidential contractor billing and staff compensation figures'
    ],
    engineeringHighlights: [
      'Optimized SQL queries and Sequelize model relationships over high-frequency timelog tables.',
      'Created webhook synchronization with Google Calendar services for schedule reconciliation.',
      'Maintained long-term feature enhancements, bug fixes, and continuous stability upgrades for internal enterprise users.'
    ],
    architecture: {
      flowDescription: 'Employees submit timelogs validated against organizational policy constraints. Background workers sync meeting durations from Google Calendar, and managers review aggregate timesheets via approval queues.',
      keyModules: [
        { name: 'Timelog Calculation Core', description: 'Enforces overtime thresholds, weekend multipliers, and holiday policies.' },
        { name: 'Calendar Sync Service', description: 'Pulls authenticated Google Calendar event metrics for automated meeting logging.' },
        { name: 'Approval State Engine', description: 'Tracks status transitions (Draft -> Submitted -> Approved -> Locked) with strict auditability.' }
      ]
    },
    links: {
      caseStudy: '/projects/time-management-system',
    },
    featured: false,
    visibility: 'private',
    evidenceStatus: 'owner-provided',
    accentColor: '#f59e0b',
  },
  {
    slug: 'human-resource-management-system',
    title: 'HRMS — Probation & Training Modules',
    category: 'Workforce & HR',
    shortDescription: 'Corporate HR management system delivering structured new-hire probation milestones, skills assessment checklists, and training workflows.',
    overview: 'A vital component of the corporate human resource suite, focusing on the critical lifecycle transitions of newly hired engineers and staff: probation tracking, evaluation intervals, skill benchmarks, and training program curricula.',
    role: 'Backend & Full-Stack Developer',
    timeline: 'Corporate Production Module',
    technologies: ['Node.js', 'Express.js', 'Sequelize ORM', 'MySQL', 'RESTful APIs'],
    features: [
      'Automated probation milestone tracking with scheduled reminder alerts for managers and HR leads',
      'Customizable training module pathways with prerequisite gates and assessment checklists',
      'Performance evaluation scorecards with aggregated feedback reviews',
      'Employee self-service dashboard to track pending certifications and onboarding requirements'
    ],
    engineeringHighlights: [
      'Engineered structured database models to represent flexible training curriculums and multi-step reviews.',
      'Implemented automated schedule triggers to notify managers when candidate review deadlines approach.',
      'Designed clean REST APIs consumed by frontend administration panels.'
    ],
    architecture: {
      flowDescription: 'Upon employee onboarding, HR administrators assign tailored training tracks. Automated cron tasks evaluate completion gates and notify supervisors when probation review intervals mature.',
      keyModules: [
        { name: 'Milestone Scheduler', description: 'Calculates 30/60/90-day evaluation targets and triggers notification hooks.' },
        { name: 'Curriculum Evaluator', description: 'Tracks course progress, quiz completions, and mentor sign-offs.' }
      ]
    },
    links: {
      caseStudy: '/projects/human-resource-management-system',
    },
    featured: false,
    visibility: 'private',
    evidenceStatus: 'owner-provided',
    accentColor: '#ec4899',
  },
  {
    slug: 'bookgobble',
    title: 'BookGobble — Audio & Book Summaries',
    category: 'Consumer & Mobile',
    shortDescription: 'Reader-centric platform offering concise book key takeaways, audio summaries, customizable reading modes, and subscription tiers.',
    overview: 'A consumer-oriented content platform built to help lifelong learners digest key non-fiction insights efficiently. The platform incorporates audio narration, distraction-free reading typography, bookmarking, and premium subscriber gates.',
    role: 'Backend Node.js Developer (Final-Year / Internship Project)',
    timeline: 'Product Prototype',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Firebase Auth', 'Stripe', 'Docker', 'JWT', 'bcryptjs'],
    features: [
      'Guest exploration preview and member-authenticated personalized library',
      'Key chapter takeaways and embedded audio narration streaming',
      'Stripe subscription checkout for premium book library access',
      'Customizable reader themes (font scaling, sepia/dark reading palettes)',
      'Containerized development environment using Docker'
    ],
    engineeringHighlights: [
      'Designed Node.js audio streaming endpoints with range requests for smooth playback.',
      'Implemented JWT session validation and Firebase Authentication integration.',
      'Structured MongoDB document schemas for flexible book chapters, key ideas, and user bookmarks.'
    ],
    architecture: {
      flowDescription: 'Next.js client interface connects to Node.js backend container for audio media chunk streaming, book summary retrieval, and Stripe subscription verification.',
      keyModules: [
        { name: 'Audio Streaming Service', description: 'Supports HTTP range requests for instantaneous audio scrubbing.' },
        { name: 'Subscription Gate', description: 'Protects full-length audio tracks and executive summaries behind verified Stripe tiers.' }
      ]
    },
    links: {
      caseStudy: '/projects/bookgobble',
    },
    featured: false,
    visibility: 'private',
    evidenceStatus: 'owner-provided',
    accentColor: '#06b6d4',
  },
  {
    slug: 'bubble-sort-visualizer',
    title: 'Algorithm Sorting Visualizer',
    category: 'Open Source',
    shortDescription: 'Interactive educational web tool demonstrating sorting algorithm mechanics with real-time speed adjustment and visual array transitions.',
    overview: 'An open-source computer science visualization project crafted to demonstrate comparison-based sorting mechanics through intuitive visual animation, step-by-step array state updates, and customizable execution speeds.',
    role: 'Creator & Open Source Author',
    timeline: 'Open Source Repository',
    technologies: ['JavaScript', 'HTML5 Canvas / CSS3', 'DOM Animation', 'Data Structures & Algorithms'],
    features: [
      'Step-by-step comparison highlighting with customizable bar graphs',
      'Dynamic speed throttling and array size adjustment sliders',
      'Real-time comparison counter and swap metric telemetry',
      'Responsive canvas layout adapting to mobile and desktop screens'
    ],
    engineeringHighlights: [
      'Implemented non-blocking asynchronous generator steps to animate array comparisons cleanly without freezing the browser event loop.',
      'Created an educational, accessible UI for students exploring sorting algorithms.'
    ],
    links: {
      github: 'https://github.com/abhi02-tr/bubble_sort_visulizer',
      caseStudy: '/projects/bubble-sort-visualizer',
    },
    featured: true,
    visibility: 'public',
    evidenceStatus: 'verified',
    accentColor: '#14b8a6',
  },
  {
    slug: 'notes-app',
    title: 'Notes & Productivity Workspace',
    category: 'Open Source',
    shortDescription: 'Clean, distraction-free markdown and rich-text note taking application with categorized notebooks and instant search.',
    overview: 'A focused personal productivity application designed for fast thought capture, note categorization, and responsive client-side persistence.',
    role: 'Creator & Developer',
    timeline: 'Open Source Repository',
    technologies: ['JavaScript', 'CSS3', 'Local Storage / IndexedDB', 'Responsive Design'],
    features: [
      'Instant fuzzy search filtering across note titles and content',
      'Tagging and category folder grouping',
      'Clean typography optimized for extended writing sessions',
      'Offline-first data persistence'
    ],
    engineeringHighlights: [
      'Designed responsive UI layout with zero external CSS framework overhead.',
      'Implemented robust client-side storage handling with instant input debouncing.'
    ],
    links: {
      github: 'https://github.com/abhi02-tr/Notes-app',
      caseStudy: '/projects/notes-app',
    },
    featured: false,
    visibility: 'public',
    evidenceStatus: 'verified',
    accentColor: '#6366f1',
  },
  {
    slug: 'login-system',
    title: 'Secure Authentication & Session Starter',
    category: 'Open Source',
    shortDescription: 'Production-ready Node.js & Express authentication boilerplate featuring salted password hashing, session tokens, and input sanitization.',
    overview: 'A robust developer starter template showcasing defensive backend authentication practices: bcrypt password salting, session management, CSRF prevention, and modular route guards.',
    role: 'Creator & Developer',
    timeline: 'Open Source Repository',
    technologies: ['Node.js', 'Express.js', 'bcryptjs', 'Sessions / Cookies', 'REST API'],
    features: [
      'Salted and hashed credential storage using industry-standard bcrypt',
      'Protected route middleware validating session authenticity',
      'Structured error handling and defensive input sanitization',
      'Clean modular architecture ready for database plugin extension'
    ],
    engineeringHighlights: [
      'Encapsulated authentication logic in reusable middleware functions for plug-and-play express apps.',
      'Handled security edge cases including timing attacks and malformed authorization headers.'
    ],
    links: {
      github: 'https://github.com/abhi02-tr/login-system',
      caseStudy: '/projects/login-system',
    },
    featured: false,
    visibility: 'public',
    evidenceStatus: 'verified',
    accentColor: '#f43f5e',
  }
];
