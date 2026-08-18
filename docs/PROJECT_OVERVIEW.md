# Project Overview: MEegin Tours & Travels

## Introduction
MEegin Tours & Travels is a professional tourism website focused on offering premium travel packages and destination information for Nepal. It is currently built as a standalone frontend application powered by Next.js 16.3.0 and React 19.2.8.

## Current state
The project is fundamentally a content-driven, statically generated frontend application. The platform relies heavily on local, hardcoded TypeScript data (`src/data/**`) to populate destinations, tours, and place details rather than fetching from a database or CMS. 

### What is currently working:
- **Next.js App Router Setup:** The project successfully utilizes the `src/app/` router model.
- **Responsive Layouts & Components:** The UI is sleek, modern, and utilizes Tailwind CSS, Framer Motion, and Lucide React.
- **Data-Driven Dynamic Routes:** The `[slug]` pages correctly load destination and place data from the TypeScript dataset.
- **Image Management Framework:** Local placeholders and references are set up in `public/images/destinations/`.
- **Primary Pages:** Home, About, Contact, FAQ, Destinations, Tours, and placeholder Account routes are structurally present.

### What is incomplete or missing:
- **Backend Infrastructure:** No actual backend, API, or real server actions exist yet.
- **Database:** All data is currently hardcoded in `.ts` files rather than a database.
- **Authentication/Authorization:** Login, register, and account pages exist but are purely visual placeholders.
- **Booking & Payments:** No functional shopping cart, real booking validation, or payment gateways.
- **Content Management System (CMS):** Missing an admin dashboard to manage tours and destinations dynamically.

### What is broken or confusing (Legacy Issues):
- **Duplicated Destination Routes:** There exists a fully functional dynamic route system (`src/app/destinations/[slug]/page.tsx`), but the codebase also contains hardcoded individual page directories for every destination (e.g., `src/app/destinations/pokhara/page.tsx`, `src/app/destinations/evrest/page.tsx`), which completely bypass the dynamic routing architecture and contain massive amounts of duplicated code.
- **Typographical Route Names:** There are folders with obvious typos such as `evrest`, `mustabg`, `bhaktapur` (could be valid but not in standard list), `kumbini`.
- **Broken Image Links:** There are a variety of missing images because the repository relies on manually placed files in `public/images/`, but the code references specific filenames that may not exist yet.

## Development Phase Recommendations
The first recommended development phase should be code stabilization and deduplication. The legacy hardcoded routes must be carefully evaluated and migrated fully into the `src/data/destinations.ts` data structure to rely exclusively on `[slug]/page.tsx`. Only after the frontend is clean and purely data-driven should backend integration (database, auth, CMS) begin.
