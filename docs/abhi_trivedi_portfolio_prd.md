# Product Requirements Document (PRD)

# Abhi Trivedi --- Modern Developer Portfolio

**Document type:** Development-ready PRD for Google Antigravity\
**Product:** Personal portfolio website\
**Owner:** Abhi Trivedi\
**Primary audience:** Recruiters, engineering managers, founders,
potential freelance clients, and developer collaborators\
**Product scope:** Frontend-only, static-first, responsive web
application\
**Status:** Ready for planning and implementation after the GitHub
profile URL is supplied/verified

------------------------------------------------------------------------

## 1. Executive Summary

Build a distinctive, polished, modern portfolio for **Abhi Trivedi**,
positioned as a **Full-Stack Engineer with strong backend expertise and
an interest in AI-powered products**. The site must do more than display
a resume: it should make technical work understandable, show credible
project depth, and make it easy for recruiters and potential clients to
start a conversation.

The experience should feel premium and engineering-led: strong
typography, deliberate whitespace, a restrained color system, crisp
project cards, subtle motion, and a few useful interactive details.
Avoid a generic template, excessive glassmorphism, distracting 3D
scenes, or animations that delay access to the actual content.

The portfolio must be frontend-only. All portfolio content should be
maintained locally in typed data files. It may read public GitHub data
in the browser when configured, but must degrade gracefully to curated
local content if the GitHub API is unavailable or rate-limited. No
custom backend, database, authentication, or server-side API is
required.

## 2. Product Goals

1.  Present Abhi's professional identity clearly within the first
    screen.
2.  Showcase real-world full-stack/backend projects with concise case
    studies.
3.  Demonstrate breadth across APIs, databases, SaaS products, payment
    integrations, reporting, mapping, and synchronization workflows.
4.  Make skills, work history, GitHub, resume, and contact links easy to
    discover.
5.  Offer a visually memorable experience without compromising
    usability, speed, accessibility, or mobile behavior.
6.  Make future content changes easy through local structured data
    rather than editing multiple UI components.
7.  Be suitable for job applications and freelance/client outreach.

### Success criteria

-   Visitors can understand role, strongest technologies, and featured
    work in 10 seconds.
-   A visitor can reach a featured project, GitHub profile, resume
    action, or contact method within two clicks.
-   Every major section works on mobile, tablet, and desktop.
-   The site remains useful with JavaScript API requests blocked or
    GitHub unavailable.
-   No fabricated metrics, client claims, project outcomes, or public
    repositories.
-   Good Lighthouse results are a target, not a claim: aim for 90+ in
    Performance, Accessibility, Best Practices, and SEO on production
    builds where practical.

## 3. Audience and Primary User Journeys

### Recruiter / hiring manager

1.  Opens the homepage.
2.  Understands Abhi's engineering focus and core stack.
3.  Reviews selected projects and case studies.
4.  Checks experience and skills.
5.  Opens resume, GitHub, or contact link.

### Potential client

1.  Sees product-oriented work and integrations.
2.  Opens a case study relevant to their needs.
3.  Understands the problem domain, responsibilities, technology, and
    implementation challenges.
4.  Uses the contact CTA to discuss a project.

### Developer / collaborator

1.  Reviews technologies and GitHub repositories.
2.  Opens relevant public repositories.
3.  Understands how the portfolio and projects are organized.
4.  Connects through public social links.

## 4. Personal and Professional Content

Use only details below unless verified from a supplied resume, profile,
or public repository. Do not invent exact employment end dates, years of
experience, education, certifications, impact metrics, or client
permissions.

### Identity

-   **Name:** Abhi Trivedi
-   **Professional positioning:** Full-Stack Engineer / Software
    Engineer, backend-focused
-   **Location context:** Surat, Gujarat, India (include publicly only
    if the owner approves)
-   **Primary strengths:** Node.js backend development, REST APIs,
    database design/integration, full-stack product delivery,
    third-party integrations, and operational workflows.
-   **Frontend experience:** React.js, Next.js, JavaScript/TypeScript,
    Tailwind CSS and component-based UI development.
-   **Emerging interests:** AI-powered applications, RAG/GenAI
    development, and cloud/backend specialization.

### Suggested hero copy

**Headline:** Building reliable products from backend logic to polished
user experiences.

**Supporting copy:** I'm Abhi Trivedi, a full-stack software engineer
focused on Node.js, APIs, databases, and practical product engineering.
I build and integrate web applications across SaaS, operations,
payments, reporting, and business workflows.

**Primary CTA:** Explore My Work\
**Secondary CTA:** Contact Me\
**Optional tertiary link:** View Resume

These are editable suggestions. The final copy should remain accurate
and should not claim seniority or years of experience that have not been
confirmed.

### Professional experience content

**Crest / Crest Skillserve --- Software Engineer**\
- Joined: 18 December 2023. - Work described by the owner includes
backend development, database work, UI implementation,
requirements-based feature development, bug fixing, and ongoing
support. - TMS: employee timesheet workflows, reports, role-related
changes, and support/bug fixes. - HRMS: probation and training
modules. - POS/Kiosk platform: web-side synchronization with an Electron
kiosk app, persistence of synchronized data, usage-based Stripe
payments, dashboard work, and offline sync handling. - Claim Management:
adjuster, contractor, and client portals; role-based user management;
QuickBooks invoice/chart-of-account synchronization; QuickSight
reporting; Google Maps/Distance Matrix route optimization; inbound email
workflows using AWS SES, S3, and SNS; Supabase/Drizzle data access;
photo walkthrough report generation.

**Occubit Solutions --- Freelance Developer**\
- Start: May 2022. - Employment type: Freelance. - Position as earlier
freelance experience. Do not invent an end date or unverified project
details. - Add only responsibilities and deliverables supported by the
owner's resume or confirmed repositories.

**Important:** Do not automatically present "5+ years" as verified
experience. Confirm the correct public-facing experience duration and
employment dates before putting them in the hero or resume section.

## 5. Project Inventory and Case Study Briefs

The project content below comes from details previously supplied by the
owner. Antigravity must audit the supplied GitHub profile/repositories
before adding repository-specific claims, README content, screenshots,
package details, or links. Never imply that a repository is public if it
is not verified.

### Project 1 --- BizzPocket

**Category:** SaaS / E-commerce platform\
**Website:** https://bizzpocket.com/\
**Known stack:** Node.js, React.js, PostgreSQL\
**Role described:** Backend and full-stack development\
**Known areas:** Merchant/storefront management, product and inventory
management, admin panel/dashboard, API development, bug fixing, and
online-store creation.

**Case study structure** - Overview: a platform intended to help
merchants create and manage online stores. - Contribution: backend and
full-stack development; APIs, store/merchant workflows, product and
inventory functionality, dashboard work, and maintenance where
verified. - Engineering themes: multi-tenant/store-oriented product
modeling, CRUD workflows, API reliability, inventory consistency, and
admin UX---include only the themes supported by repository evidence. -
Links: live site, verified public repository if one exists, and relevant
screenshots if approved.

**Content guardrail:** Do not claim user counts, revenue, performance
improvements, customer outcomes, or ownership of the entire product
unless evidence and owner approval support it.

### Project 2 --- Claim Management Platform

**Category:** Business workflow / claims operations\
**Known technologies and integrations:** Node.js, Supabase, Drizzle,
QuickBooks, Amazon QuickSight, Google Maps/Distance Matrix, AWS SES, S3,
SNS. Confirm the exact stack from repositories or owner-provided
materials.

**Known functional areas** - Adjuster, contractor, and client portals. -
Role-based user management. - QuickBooks invoice and chart-of-account
synchronization. - QuickSight reports. - Route optimization using Google
Maps/Distance Matrix. - Inbound email processing using SES, S3, and
SNS. - Photo walkthrough report generation.

**Case study narrative** Explain the workflow complexity and
integrations. Use a system diagram only if it can be grounded in the
actual implementation. Clearly distinguish the owner's contribution from
the overall product. Do not expose private client data, secrets, real
claim information, or internal URLs.

### Project 3 --- Kiosk Management / POS Platform

**Category:** POS / payments / desktop-web integration\
**Known technologies:** Node.js, web frontend, Electron kiosk
application, Stripe. Confirm exact framework and package versions from
repository evidence.

**Known functional areas** - Synchronization between an Electron-based
kiosk application and web backend. - Storage and management of
synchronized data. - Usage-based Stripe payment flows. - Interactive
dashboard. - Offline kiosk data synchronization and handling.

**Case study narrative** Focus on the connection between a kiosk/desktop
client and a web platform, reliable synchronization, offline
considerations, and usage-based billing. Do not publish payment secrets,
private endpoints, or real customer data.

### Project 4 --- Time Management System (TMS)

**Category:** Internal business application / workforce operations\
**Known technologies:** Node.js, Sequelize, SQL/MySQL (confirm
repository evidence), Google Calendar services where relevant.

**Known contributions** - Employee timesheet and timelog workflows. -
Reports for timelogs and performance reviews. - Role-related changes. -
Bug fixing and long-term support. - Calendar event synchronization in
the relevant assistance module, if confirmed.

### Project 5 --- Human Resource Management System (HRMS)

**Category:** HR operations\
**Known technologies:** Node.js, Sequelize, SQL/MySQL (verify against
repository)\
**Known contribution:** Probation and training modules.

The TMS and HRMS can be separate cards or a combined "Workforce
Management Systems" case study if there is not enough public evidence
for separate detailed pages.

### Project 6 --- BookGobble

**Category:** Reading / book summaries / mobile product\
**Known technologies:** Next.js, Node.js, Stripe, JWT, Firebase,
MongoDB, bcryptjs, Docker (verify against repository and package
files).\
**Known contribution:** Backend Node.js work during
internship/final-year project context.

**Known product description:** Reader-centric platform with guest and
logged-in experiences, paid access to book key takeaways and audio, a
mobile application, favorites, and customizable reading modes.

**Guardrails:** Verify whether this product is still live and which
links are public. Do not present this as current employment.

### Project 7 --- Paradigm CRM

This project was previously mentioned as part of the owner's portfolio
materials, but detailed technical facts are not available in the current
brief. Add a placeholder entry only if a repository, README,
screenshots, or owner-supplied description confirms the project. Do not
invent features, stack, or results.

## 6. GitHub Audit --- Required Before Finalizing Project Data

**The owner's personal GitHub username/profile URL has not yet been
confirmed.** A known organization repository is
`https://github.com/BizzPocket/bizzpocket.git`, but this must not be
assumed to be the owner's personal profile or proof of access/ownership.

### Required input

Set `GITHUB_USERNAME` and `GITHUB_PROFILE_URL` only after the owner
supplies or confirms the correct profile. If unavailable, ask the owner
for the GitHub profile URL before claiming that a full account audit is
complete.

### Audit checklist

For each relevant public repository: 1. Verify repository name, owner,
URL, description, visibility, and primary language. 2. Read the README
and inspect project structure. 3. Inspect `package.json`, lockfiles, and
config files to confirm frameworks and libraries. 4. Identify what the
project actually does from code and documentation. 5. Find available
screenshots, demo links, deployment URLs, and license details. 6.
Inspect commit activity only as context; do not infer employment dates
or sole authorship from commit history alone. 7. Note whether the owner
appears as a contributor only when public evidence supports it. 8. Match
repositories to the known project inventory. 9. Flag repositories that
appear private, empty, archived, forks, experiments, or unrelated. 10.
Record evidence and confidence for each portfolio claim.

### GitHub data integration

-   Use GitHub's public API from the browser only where suitable.
-   No token or secret may be embedded in frontend code.
-   Treat unauthenticated API rate limits and network failure as normal
    states.
-   Cache results in memory for the current session where useful;
    localStorage may be used only for non-sensitive public data and
    should have a clear expiry strategy.
-   Prefer curated local project data for the main portfolio, with
    GitHub data as supplementary proof of work.
-   Do not fetch all repositories and display them without curation.
-   Show a graceful fallback if API requests fail.
-   Never imply that private repositories are accessible.
-   The app must remain fully navigable without GitHub API access.

### Suggested local content model

``` ts
export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  role: string;
  technologies: string[];
  features: string[];
  engineeringHighlights: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  image?: string;
  featured: boolean;
  visibility: "public" | "private" | "not-confirmed";
  evidenceStatus: "verified" | "owner-provided" | "needs-review";
};
```

## 7. Information Architecture

### Required pages / routes

1.  `/` --- Home / one-page portfolio landing experience.
2.  `/projects` --- All curated projects with category filters.
3.  `/projects/:slug` --- Detailed project case study.
4.  `/about` --- Professional story, skills, experience, and working
    approach.
5.  `404` --- Friendly not-found page with navigation home.

A single-page experience with anchored sections is acceptable for the
homepage, but case studies should have shareable URLs. Use the routing
strategy supported by the selected frontend stack.

### Homepage section order

1.  Header and navigation.
2.  Hero.
3.  Compact proof/technology strip.
4.  Featured projects.
5.  Engineering strengths.
6.  Experience timeline.
7.  About / approach.
8.  GitHub activity or repository highlights (only when configured and
    verified).
9.  Contact CTA.
10. Footer.

## 8. Visual Design Direction

### Overall style

-   Premium developer-tool aesthetic with a clean editorial layout.
-   Dark theme as the default, with a fully designed light theme toggle.
-   Near-black/charcoal background, off-white text, muted secondary
    text, and one restrained electric blue/violet accent.
-   Use gradients sparingly for hero accents and focus states.
-   Thin borders, subtle surface elevation, tasteful radius, generous
    whitespace.
-   Use a clean sans-serif such as Geist, Inter, or Manrope; reserve a
    monospace font for code-style labels and metadata.
-   The design should feel custom rather than like a default dashboard
    template.

### Hero

-   Left-aligned, high-contrast headline.
-   Short two-to-three-line summary.
-   Primary "Explore projects" CTA and secondary "Contact me" CTA.
-   Small status line such as "Full-Stack Engineer · Backend-focused ·
    Gujarat, India" only if owner approves the location/status.
-   Right side may use a custom code-window illustration or abstract
    system diagram. Keep it lightweight and decorative.
-   Avoid fake terminal output that suggests real system activity or
    fake availability indicators.

### Project cards

-   Strong title, category, concise outcome/problem summary, technology
    chips, and clear actions.
-   Use project-specific abstract artwork or approved screenshots.
-   Hover: subtle lift/border accent, not exaggerated tilt.
-   Show case-study link and GitHub/live links only when valid.
-   Featured projects should be manually curated and ordered by
    relevance.

### Interaction and motion

-   Smooth anchor scrolling.
-   Scroll-triggered reveal animations with reduced-motion support.
-   Subtle button and card hover states.
-   Animated skill filters and project category filters.
-   Theme switcher with persisted preference where practical.
-   Mobile navigation drawer.
-   Optional small custom cursor effect only on pointer devices and only
    if it does not interfere with accessibility.
-   No mandatory full-screen intro, no scroll hijacking, no heavy 3D
    scene, and no sound.

## 9. Functional Requirements

### Navigation

-   Sticky or intelligently compacting header.
-   Active section indication on the homepage where useful.
-   Keyboard accessible menu.
-   Mobile menu closes after navigation and on Escape.
-   All navigation remains usable without animation.

### Projects

-   Curated project cards sourced from local typed data.
-   Filter by category: SaaS, Business Systems, Payments/POS,
    Integrations, and Learning/Other, using only categories that fit
    verified projects.
-   Search/filter empty state.
-   Case study route for each verified featured project.
-   Link validation: do not render unavailable actions as clickable
    controls.
-   Add a "Details need confirmation" internal development note rather
    than publishing unsupported project claims.

### Case study template

Each case study should support: 1. Project title, category, short
summary, and approved visual. 2. Overview and problem context. 3. Role
and responsibilities. 4. Key features. 5. Architecture / workflow
explanation, when evidence exists. 6. Technical decisions and
trade-offs, when evidence exists. 7. Technologies. 8. Outcomes, limited
to verified facts. 9. Public links. 10. Next/previous project
navigation. 11. Contact CTA.

### Skills

Organize skills into categories rather than one giant tag cloud: -
Backend: Node.js, Express.js, REST APIs. - Frontend: React.js, Next.js,
JavaScript/TypeScript, HTML/CSS, Tailwind CSS. - Data: MySQL,
PostgreSQL, MongoDB, Sequelize, Supabase, Drizzle. - Integrations:
Stripe, QuickBooks, Google Maps/Distance Matrix, Google Calendar, AWS
SES/S3/SNS, QuickSight. - Tooling/Infrastructure: Git, Docker, Firebase;
list Kubernetes only if the owner wants it represented as a working
skill and can discuss it confidently. - AI/Cloud: label as "Exploring"
or "Currently learning" where appropriate, rather than implying
production expertise without evidence.

Skills must be editable data and not presented as proficiency
percentages unless the owner supplies meaningful, defensible levels.

### Experience

-   Timeline layout with company, role, date range, employment type
    where relevant, and selected responsibilities.
-   Use only confirmed dates. For Crest, start date is 18 Dec 2023. For
    Occubit Solutions, start date is May 2022 and type is freelance. Do
    not invent end dates.
-   Provide an editable field for the final date range once confirmed.

### GitHub section

-   Link to the verified personal profile.
-   Optional public repository list with curated highlights.
-   Show repository description, language, and stars only when returned
    from GitHub and clearly current.
-   Never show fake contribution counts or mock live activity.
-   Provide skeleton/loading, empty, rate-limited, and error states.
-   Local featured projects must remain visible even when GitHub fails.

### Resume

-   Provide "View Resume" and "Download Resume" only when an approved
    resume PDF is supplied and placed in the project.
-   If no file exists, hide the download CTA or use a clearly labeled
    placeholder only in development.
-   Do not generate fake resume data in the UI.

### Contact

-   Frontend-only contact options:
    -   `mailto:` link with a prefilled subject.
    -   LinkedIn link when confirmed.
    -   GitHub link when confirmed.
    -   Optional copy-email button if an email address is provided.
-   A contact form may validate fields client-side, but it cannot
    actually deliver messages without a service/backend. Prefer direct
    email/social links for the MVP.
-   Do not display a fake "Message sent" success state.

### Footer

-   Name, concise role label, navigation links, GitHub/LinkedIn/email
    links when confirmed, and current year generated in the frontend.
-   No invented social profiles.

## 10. Recommended Frontend Stack

Use the simplest stack that fits the repository and Antigravity
environment. Preferred greenfield setup:

-   React + TypeScript.
-   Vite for a lightweight frontend-only SPA, unless the owner
    explicitly prefers Next.js.
-   Tailwind CSS for styling.
-   React Router for case-study routes.
-   Framer Motion for restrained animations, with reduced-motion
    handling.
-   Lucide React for icons.
-   Local typed TypeScript files for experience, skills, and project
    content.
-   Vitest + React Testing Library for essential component tests.

Do not add Redux, a database, server functions, or a CMS unless a real
requirement emerges. Avoid unnecessary dependencies.

### Architecture principles

-   Components should be small, reusable, and typed.
-   Keep content data separate from presentation.
-   Create shared tokens for colors, spacing, type scale, radii,
    shadows, and motion.
-   Use semantic HTML and native links/buttons.
-   All external links should have appropriate safe target behavior.
-   Use local assets for critical hero/project visuals to avoid runtime
    dependency on third-party image URLs.
-   Keep GitHub fetch logic isolated in a service module and make it
    optional.
-   Never put credentials or tokens in client code.

## 11. Suggested Project Structure

``` text
src/
  app/
    App.tsx
    routes.tsx
  components/
    layout/
      SiteHeader.tsx
      MobileNavigation.tsx
      SiteFooter.tsx
      PageContainer.tsx
    home/
      HeroSection.tsx
      TechStrip.tsx
      FeaturedProjects.tsx
      StrengthsSection.tsx
      ExperienceTimeline.tsx
      AboutSection.tsx
      ContactSection.tsx
    projects/
      ProjectCard.tsx
      ProjectGrid.tsx
      ProjectFilters.tsx
      ProjectCaseStudy.tsx
      CaseStudySection.tsx
    ui/
      Button.tsx
      Badge.tsx
      ThemeToggle.tsx
      SectionHeading.tsx
      Reveal.tsx
      ExternalLink.tsx
  data/
    profile.ts
    projects.ts
    experience.ts
    skills.ts
    navigation.ts
  lib/
    github.ts
    seo.ts
    utils.ts
  hooks/
    useTheme.ts
    useReducedMotion.ts
  styles/
    globals.css
    tokens.css
  assets/
    projects/
    icons/
  tests/
```

Adjust structure to the actual repository instead of blindly overwriting
an existing application.

## 12. Responsive Requirements

### Mobile: 320--767px

-   No horizontal overflow.
-   Single-column project cards.
-   Accessible menu and large tap targets.
-   Hero copy appears before decorative artwork.
-   Case study content uses readable line lengths and stackable
    sections.
-   Filters can wrap or scroll without hiding their state.

### Tablet: 768--1023px

-   Two-column grids where content supports them.
-   Balanced spacing and typography.
-   Navigation remains clear without crowding.

### Desktop: 1024px+

-   Comfortable content max-width.
-   Multi-column project grid.
-   Strong visual hierarchy and generous spacing.
-   Hover interactions only enhance, never hide essential information.

## 13. Accessibility and Performance

-   Aim for WCAG 2.2 AA-aligned practices.
-   Keyboard navigation for all controls.
-   Visible focus indicators.
-   Sufficient contrast in both themes.
-   Correct heading hierarchy and landmarks.
-   Alt text for meaningful images; empty alt for decorative images.
-   Honor `prefers-reduced-motion`.
-   Do not convey status through color alone.
-   Avoid animation that causes flashing or motion sickness.
-   Lazy-load below-the-fold imagery.
-   Use optimized local images and SVGs.
-   Avoid layout shifts by reserving image dimensions.
-   Ensure project pages are useful if GitHub requests fail.
-   Check production build and console for errors.
-   Use Lighthouse or equivalent audits before release.

## 14. SEO and Sharing

-   Unique page title and meta description for home, projects, and case
    studies.
-   Open Graph and social sharing metadata.
-   Canonical URL configurable at build time.
-   Semantic project titles and descriptive link text.
-   Favicon and web app theme color.
-   Sitemap and robots configuration appropriate to the chosen hosting
    setup.
-   Person/website structured data only when accurate.
-   Do not add fake testimonials, reviews, awards, or structured
    ratings.

## 15. Privacy and Security

-   Publish only approved contact details.
-   Do not expose proprietary code, credentials, internal endpoints,
    client records, or confidential screenshots.
-   Audit images and repository content before publication.
-   No secrets in `.env` values exposed to the client bundle.
-   Public GitHub API calls must not contain private tokens.
-   Do not add analytics or third-party trackers by default.
-   If analytics are later added, make the privacy implications clear
    and configure them appropriately.

## 16. Content and Evidence Rules

For every project claim, classify it as: - **Verified:** Supported by
public repository/docs or approved evidence. - **Owner-provided:**
Supplied by Abhi but not independently verified. - **Needs review:**
Missing detail or unclear ownership.

Only publish claims that are verified or explicitly approved by the
owner. Never invent: - Business impact metrics or performance
percentages. - Number of users, customers, stores, or transactions. -
Exact employment end dates or years of experience. - Client names or
testimonials. - Repository URLs, live demos, LinkedIn URLs, email
addresses, or profile handles. - Screenshots that imply access to real
production systems.

## 17. MVP Scope

### Must have

-   Responsive homepage.
-   About/profile section.
-   Featured project cards.
-   Project listing with category filters.
-   Shareable project case-study routes.
-   Experience timeline.
-   Skills grouped by category.
-   Theme toggle.
-   Contact links.
-   Resume CTA conditional on a real file.
-   Local structured content.
-   Accessible mobile navigation.
-   Empty/error states for optional GitHub data.
-   README with setup and content-editing instructions.

### Should have

-   Optional public GitHub repository highlights.
-   Scroll-triggered reveal animations.
-   Search across project cards.
-   Custom project thumbnails.
-   Open Graph metadata and favicon.
-   Small "currently exploring" section for AI/cloud learning.

### Could have later

-   Blog / technical notes.
-   Interactive architecture diagrams.
-   Case-study image gallery.
-   Optional GitHub contribution visualization using real API data.
-   A terminal-inspired easter egg, only if it does not obscure
    navigation or content.

### Explicitly out of scope

-   Custom backend or database.
-   Login/authentication.
-   Admin panel or CMS.
-   Working server-backed contact form.
-   AI chatbot requiring an API key.
-   Paid third-party APIs.
-   Fake metrics, fake GitHub activity, fake testimonials.
-   Heavy full-screen 3D world or scroll hijacking.

## 18. Prioritized Implementation Tickets

### P0 --- Discovery and setup

**Ticket 1: Inspect existing workspace** - Check current files, package
manager, framework, and existing design assets. - Preserve useful code;
do not overwrite without understanding the project. - Output a short
implementation plan before major changes.

**Ticket 2: GitHub profile and repository audit** - Ask for the correct
personal GitHub profile URL if it is not present in project
configuration. - Audit public repositories and README/package
metadata. - Produce a repository-to-project mapping with
confidence/evidence. - Mark unknowns instead of guessing.

**Ticket 3: Content model** - Create typed data for profile, projects,
experience, skills, and social links. - Include evidence status and
optional links. - Ensure no invented dates or links.

### P1 --- Design system and layout

**Ticket 4: Design tokens** - Implement color themes, typography,
spacing, radii, focus styles, and motion rules.

**Ticket 5: Global layout** - Build header, mobile navigation, page
container, footer, and routing.

**Ticket 6: Hero and homepage sections** - Implement hero, technology
strip, featured projects, strengths, experience, about, and contact.

### P1 --- Projects and content

**Ticket 7: Project grid and filters** - Build responsive cards,
filters, empty state, and accessible interactions.

**Ticket 8: Case-study template** - Implement reusable case-study routes
and sections. - Populate only approved project content. - Add
previous/next navigation.

**Ticket 9: Skills and experience** - Render grouped skills and timeline
from data files.

### P2 --- Enhancements

**Ticket 10: Theme toggle** - Support dark/light/system preference where
practical. - Persist the chosen theme safely.

**Ticket 11: Optional GitHub data** - Implement public API fetching,
loading state, error state, rate-limit fallback, and curated local
fallback. - Never require GitHub data for core page rendering.

**Ticket 12: Motion polish** - Add subtle transitions and scroll
reveals. - Respect reduced-motion preferences.

### P1 --- Quality and release

**Ticket 13: Responsive and accessibility audit** - Test mobile, tablet,
desktop, keyboard, focus, contrast, and reduced motion.

**Ticket 14: SEO and metadata** - Add titles, descriptions, social
metadata, favicon, and deployment-appropriate sitemap/robots files.

**Ticket 15: Build, test, and documentation** - Run lint, tests, and
production build. - Fix errors and warnings that affect quality. -
Document local development, deployment, and how to add/edit projects.

## 19. Acceptance Criteria

The implementation is accepted when:

1.  The application installs and runs using documented commands.
2.  Homepage, projects page, each case study, about page, and 404
    behavior work.
3.  The UI is responsive from 320px through large desktop widths without
    horizontal overflow.
4.  All core content is sourced from local typed data.
5.  All links are real, correctly labeled, and verified or omitted.
6.  GitHub API failures do not break navigation or project content.
7.  No GitHub secrets or private data are present in frontend code.
8.  No unsupported metrics, dates, credentials, testimonials, or client
    claims are displayed.
9.  Theme toggle works and has accessible labels.
10. Reduced-motion preference is respected.
11. Keyboard users can navigate the entire site.
12. Buttons, filters, navigation, and CTAs perform the action their
    labels promise.
13. Resume download is shown only if an actual resume file is included.
14. No contact form falsely reports that a message was delivered.
15. Production build passes.
16. The README explains setup, configuration, content updates, and
    deployment.
17. The final implementation report lists completed tickets, known
    limitations, and any content needing owner approval.

## 20. Antigravity Execution Instructions

Use this PRD as the source of truth. Work in the following order:

1.  **Plan first.** Inspect the workspace and turn this PRD into a
    phased implementation plan with dependencies and acceptance checks.
    Do not start by generating all files in one unreviewed pass.
2.  **Resolve GitHub identity.** If the personal GitHub profile URL is
    not configured or explicitly supplied, ask the owner for it. Do not
    treat the BizzPocket organization repository as the personal
    profile.
3.  **Research repositories.** Verify public repositories and project
    details. Produce a short evidence table with verified facts,
    owner-provided facts, and open questions.
4.  **Confirm uncertain content.** Do not invent experience duration,
    dates, social URLs, email, metrics, or project results. Use clearly
    isolated placeholders in local data and omit them from the rendered
    site until confirmed.
5.  **Implement the MVP.** Build the responsive design system, homepage,
    projects, case studies, experience, skills, and contact links.
6.  **Polish.** Add subtle motion, theme switching, SEO, and optional
    GitHub data only after core content works.
7.  **Validate.** Run tests, lint, and production build. Check
    accessibility, responsiveness, API failure states, and broken links.
8.  **Report.** Summarize the files changed, design choices, commands
    run, checks passed/failed, and remaining owner decisions.

### Agent behavior constraints

-   Use the available project skills for brainstorming, planning,
    implementation, and review when installed.
-   Do not skip planning and immediately scaffold the entire project.
-   Do not replace the current framework without inspecting the
    workspace first.
-   Prefer high-quality, simple solutions over unnecessary abstraction.
-   Keep all core content available offline from local data.
-   Never claim that tests, builds, links, or repository audits passed
    unless they were actually run.
-   Ask only essential questions; batch remaining content approvals into
    a concise checklist.

## 21. References and Design Research

The following public examples/articles informed the product direction.
Use them for patterns, not to copy their visual identity or code:

-   [Best Developer Portfolio Websites for Inspiration ---
    WebPortfolios](https://www.webportfolios.dev/blog/best-developer-portfolio-websites):
    clarity, simple navigation, and theme control.
-   [24 Interactive Portfolio Website Examples --- A1
    Gallery](https://www.a1.gallery/websites/interactive-portfolio):
    interactive details can make a portfolio memorable, but should serve
    the content.
-   [Best Developer Portfolio Examples ---
    PortfolioOS](https://www.portfolios.chat/blog/best-developer-portfolio-examples-2025):
    balance between minimalist presentation, project-focused layout, and
    meaningful interaction.
-   [Modern Developer Portfolio --- Dave
    Donnelly](https://www.davedonnelly.dev/projects/portfolio-2025):
    performance, accessibility, and engineering quality as part of the
    portfolio story.
-   [Folio 2026 --- Akash
    Parmar](https://akash-codes.in/case-studies/folio-2026): case-study
    routes, structured project content, and optional GitHub integration.

### Synthesis

Use the clarity of minimalist portfolios, the polish of restrained
interactive portfolios, and the depth of case-study-driven engineering
portfolios. Do not copy a specific site's exact layout. The portfolio
itself should prove engineering quality through responsiveness,
accessible interactions, speed, maintainable content, and accurate
project storytelling.

------------------------------------------------------------------------

## 22. Owner Decisions to Confirm

These are the only high-value details that should block final content
verification:

-   Personal GitHub profile URL/username.
-   LinkedIn URL and public contact email, if they should appear.
-   Approved resume PDF, if a download button is wanted.
-   Whether Surat, Gujarat should appear publicly.
-   Correct public-facing experience duration and any missing employment
    end dates.
-   Which project screenshots or client/product visuals are approved for
    public display.
-   Whether the portfolio should use a custom domain (domain setup is
    not part of the frontend build).

## 23. Update Based on Owner's GitHub Profile and Access Constraints

- Use `https://github.com/abhi02-tr` as the profile link in the header/footer and contact section.
- The owner confirms some major professional projects live in company GitHub accounts that are no longer accessible to them. Do not omit these projects just because no public source repository is available; use the owner-provided project descriptions already in this PRD and label them `owner-provided` until evidence is approved.
- Never fabricate GitHub links or display a “View Source” button for a project without a verified public repository.
- Featured professional work should prioritize BizzPocket, Claim Management, Kiosk/POS, and the most substantial verified TMS/HRMS work. The visible public repositories can be grouped separately as open-source/learning work.
- Before publishing, ask the owner to approve public display of the profile README email and LinkedIn URL. Do not assume that a detail appearing in GitHub README necessarily means the owner wants it repeated elsewhere.
- Public profile and repository pages reviewed: https://github.com/abhi02-tr, https://github.com/abhi02-tr/angular-js-tutorial, https://github.com/abhi02-tr/bubble_sort_visulizer, https://github.com/abhi02-tr/Notes-app, and https://github.com/abhi02-tr/login-system.

**End of PRD**
