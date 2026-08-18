# MEegin Tours & Travels - Development Master Plan

This document outlines the systematic, step-by-step roadmap for upgrading MEegin Tours & Travels from a static frontend into a full production-ready booking platform.

---

## PHASE 1 — Fix existing frontend issues

- **Objective:** Clean up architectural debt. Unify the routing structure so all destination pages use the dynamic `[slug]` system and eliminate redundant hardcoded component files.
- **Features:** 
  - Centralize localized data currently trapped inside legacy page components.
  - Delete typo-ridden and duplicate static destination folders (e.g., `evrest`, `mustabg`, `pokhara`).
  - Standardize broken image references / placeholders.
- **Files likely affected:** `src/app/destinations/**`, `src/data/destinations/**`, `src/app/page.tsx`
- **Dependencies:** None
- **Database changes:** None
- **Security considerations:** Ensure no destructive link regressions.
- **Testing requirements:** Verify all existing links resolve properly; visual regression checks across mobile and desktop breakpoints.
- **Acceptance criteria:** The `src/app/destinations/` directory ONLY contains the `[slug]` and `page.tsx` route logic (no hardcoded cities). The site looks visually identical but runs strictly on the centralized `src/data/` architecture.

---

## PHASE 2 — Complete destination/place system

- **Objective:** Expand the centralized data framework to fully map all supported locations and sub-locations reliably.
- **Features:** 
  - Complete data structures for all Nepal regions.
  - Connect all nested `Place` objects securely to their parent `Destination`.
  - Finalize the layout contract for `[placeSlug]/page.tsx`.
- **Files likely affected:** `src/data/destinations.ts`, `src/types/index.ts`, `src/app/destinations/[slug]/places/[placeSlug]/page.tsx`
- **Dependencies:** Local manual image placements (owner input).
- **Database changes:** None (still using `.ts` structures).
- **Security considerations:** Type safety to prevent layout crashes for missing object keys.
- **Testing requirements:** Missing data checks, 404 route handling for invalid slugs.
- **Acceptance criteria:** Every destination and place listed in the company portfolio has a fully functional, structured, responsive web page. 

---

## PHASE 3 — Complete tours and packages

- **Objective:** Establish the product side of the application—Tours and Tour Packages.
- **Features:**
  - Standardized itinerary listings (Day 1, Day 2...).
  - Cross-referencing logic (e.g., Tour "Annapurna Base Camp" is linked inside `Destination` "Annapurna").
  - Tour search/filtering UI.
- **Files likely affected:** `src/data/tours.ts`, `src/types/index.ts`, `src/app/tours/**`, `src/components/sections/tour-card.tsx`
- **Dependencies:** None.
- **Database changes:** None.
- **Security considerations:** None.
- **Testing requirements:** Responsive pricing tables, valid cross-linking between destinations and tours.
- **Acceptance criteria:** Users can browse all tours, filter them effectively, view daily itineraries, and view exact pricing grids.

---

## PHASE 4 — Authentication

- **Objective:** Enable secure user registration and login flows.
- **Features:**
  - Login, Registration, Password Reset UI activation.
  - Profile Dashboard rendering securely.
  - Session management.
- **Files likely affected:** `src/app/login/page.tsx`, `src/app/register/page.tsx`, `src/app/account/**`
- **Dependencies:** NextAuth.js (Auth.js), bcrypt/argon2.
- **Database changes:** Creation of base `users` table via ORM.
- **Security considerations:** Password hashing, HTTPOnly secure cookies, CSRF protection, brute-force limits on login.
- **Testing requirements:** Successful registration, login, logout, and protected route redirection.
- **Acceptance criteria:** Users can securely log in, stay logged in on refresh, and access their private `/account` dashboard. Unauthorized users are blocked from `/account`.

---

## PHASE 5 — Backend API

- **Objective:** Expose the server logic layer for forms, filtering, and eventual booking.
- **Features:**
  - Server Actions / API Handlers for Contact Form, Testimonial submissions.
  - Integration of backend validation libraries.
- **Files likely affected:** `src/app/api/**` or `src/actions/**`, form components.
- **Dependencies:** Zod (for payload validation), Nodemailer or Resend (for emails).
- **Database changes:** None explicitly, prep for Phase 6.
- **Security considerations:** Rate limiting form endpoint spam, sanitizing inputs, verifying origins.
- **Testing requirements:** Submission triggers correct server response, rejects malformed payloads, sends email cleanly.
- **Acceptance criteria:** The Contact form successfully sends an email to the site administrator without causing a full page reload or exposing private SMTP keys.

---

## PHASE 6 — Database

- **Objective:** Transition the application from static local TS data to an active persistent relational database.
- **Features:**
  - Define PostgreSQL schemas mimicking the existing TS `.data/` models.
  - Seed the database with the established `src/data/` objects.
  - Update frontend queries to fetch from DB instead of local files.
- **Files likely affected:** Server components fetching data, creation of `prisma/schema.prisma` or `schema.ts`.
- **Dependencies:** PostgreSQL provider (e.g., Supabase, Neon), Prisma ORM or Drizzle.
- **Database changes:** Massive schema construction: `destinations`, `places`, `tours`, `reviews`, `contact_inquiries`.
- **Security considerations:** Secure connection strings via `.env.local`, Database role restriction.
- **Testing requirements:** Data parity checks (does the site look identical querying the DB vs querying the old local TS files).
- **Acceptance criteria:** `src/data/*.ts` is safely deleted. The frontend loads all content dynamically from the PostgreSQL database with zero visual regression.

---

## PHASE 7 — Booking system

- **Objective:** Allow users to build an order/cart and initiate a booking request.
- **Features:**
  - Booking wizard with date selection, traveler count, and extras.
  - Cart state persistence.
  - Order generation connected to the registered User ID.
- **Files likely affected:** `src/app/booking/**`, `src/app/checkout/**`, `src/components/ui/`
- **Dependencies:** State management (Zustand or React Context) for booking flow, Date picker libraries.
- **Database changes:** `bookings`, `booking_items` tables created.
- **Security considerations:** Server-side price recalibration. Never trust frontend cost submissions. Wait-list logic.
- **Testing requirements:** Ensure user cannot double-book, validation blocks past dates, prices calculate correctly.
- **Acceptance criteria:** A logged-in user can select a tour, pick a valid date, enter 2 adults, see a verified price, and click "Proceed to Payment" generating an order in the database.

---

## PHASE 8 — Payment

- **Objective:** Process actual transaction funds securely.
- **Features:**
  - Gateway integration (Stripe, eSewa).
  - Payment intent creation algorithms.
  - Webhook catching for successful/failed transactions.
- **Files likely affected:** `src/app/api/webhooks/**`, checkout UI components.
- **Dependencies:** Stripe Node SDK, suitable local gateway SDKs.
- **Database changes:** `payments` table attached to `bookings`. Update `booking.status` enum.
- **Security considerations:** PCI Compliance via iframe/element offloading. Secure webhook signature verification to prevent spoofed payments.
- **Testing requirements:** Sandbox transaction successes and intentional failures. Race condition handling.
- **Acceptance criteria:** A user can successfully pay for a tour using test cards, receive a confirmation screen, and the database marks their booking as `PAID`.

---

## PHASE 9 — Admin dashboard

- **Objective:** Provide a private operational control center for MEegin staff.
- **Features:**
  - Data table interfaces for all Core Entities (Tours, Users, Bookings).
  - Ability to edit pricing and text content.
  - View revenue metrics.
- **Files likely affected:** `src/app/(admin)/**` (New walled garden layout).
- **Dependencies:** Data table libraries (TanStack Table), Charting libraries.
- **Database changes:** Support for `last_updated_by` audits.
- **Security considerations:** Strict RBAC checks. Middlewares rejecting non-ADMIN roles from `/admin` paths.
- **Testing requirements:** Verify a normal user receives a 403/404 when navigating to `/admin`.
- **Acceptance criteria:** An admin can log in, navigate to dashboard, change the price of the "Annapurna" tour, and the frontend instantly reflects that new price.

---

## PHASE 10 — Security hardening

- **Objective:** Audit and reinforce the infrastructure against severe attacks.
- **Features:**
  - Implement strict Content Security Policies (CSP).
  - Rate Limiting APIs.
  - Advanced sanitization.
- **Files likely affected:** `next.config.ts`, `middleware.ts`.
- **Dependencies:** None.
- **Database changes:** None.
- **Security considerations:** Comprehensive OWASP Top 10 mitigation.
- **Testing requirements:** Penetration testing scripts, simulated XSS submissions.
- **Acceptance criteria:** The site passes automated security scanners without severe warnings and headers correctly restrict framing/cross-origin abuses.

---

## PHASE 11 — SEO

- **Objective:** Prime the site for optimal tourism-based organic search rankings.
- **Features:**
  - Dynamic `sitemap.xml` and `robots.txt` generation.
  - Refined canonical tracking to prevent duplicate indexing.
  - Schema.org JSON-LD microdata injection for Tours and Regional metadata.
- **Files likely affected:** `src/app/sitemap.ts`, `src/app/robots.ts`, layout metadata blocks.
- **Dependencies:** None.
- **Database changes:** None.
- **Security considerations:** Avoid exposing private `/account` or API routes to web crawlers.
- **Testing requirements:** Google Search Console validation. Lighthouse SEO audits.
- **Acceptance criteria:** The application achieves 100/100 on Lighthouse SEO tests and produces accurate, dynamic Schema.org markup viewable in Google's rich snippets testing tool.

---

## PHASE 12 — Performance

- **Objective:** Ensure rapid loading times globally, specifically for heavier destination image galleries.
- **Features:**
  - Implement Next.js PPR (Partial Prerendering) if viable.
  - Adjust image priority loading strategies.
  - Component lazy loading.
- **Files likely affected:** Global UI components, `next.config.ts`.
- **Dependencies:** Bundle analyzer plugins.
- **Database changes:** Database index optimizations (indexes on commonly queried slugs).
- **Security considerations:** None.
- **Testing requirements:** Core Web Vitals checks.
- **Acceptance criteria:** The application maintains above a 90/100 Mobile Performance score and loads LCP (Largest Contentful Paint) in under 2 seconds.

---

## PHASE 13 — Testing

- **Objective:** Ensure long-term stability and regression prevention.
- **Features:**
  - End-to-end user flows targeting the Booking Wizard.
  - Unit tests for price-calculation utility functions.
- **Files likely affected:** `tests/**` directory initialization.
- **Dependencies:** Playwright or Cypress (E2E), Vitest/Jest (Unit).
- **Database changes:** Configuration of a parallel `test` database environment.
- **Security considerations:** Ensuring test credentials never leak to production.
- **Testing requirements:** Complete CI/CD pipeline automation triggers.
- **Acceptance criteria:** Developers can run a single command `npm run test` which verifies the entire login, booking, and checkout logic automatically inside a headless browser within minutes.

---

## PHASE 14 — Production deployment

- **Objective:** Move the finalized codebase onto public, secure, scalable architecture.
- **Features:**
  - Establish Vercel / AWS hosting infrastructure.
  - Assign domain configurations and SSL.
  - Setup environment variable secrets (`.env.production`).
- **Files likely affected:** CI/CD Configurations, `.env` deployment definitions.
- **Dependencies:** Hosting platform APIs.
- **Database changes:** Execution of production database creation and initial schema seeding.
- **Security considerations:** Restricting database IP access to the hosting platform only.
- **Testing requirements:** Final smoke testing in the production environment.
- **Acceptance criteria:** MEegin Tours & Travels is live, secure, publicly addressable, processing real users, and logging real interactions.
