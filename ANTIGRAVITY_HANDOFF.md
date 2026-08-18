# ANTIGRAVITY PROJECT HANDOFF

## 1. Current project architecture

This is a Next.js 16 App Router website for MEegin Tours & Travels, built with TypeScript and a component-driven UI. The project is not a full backend-driven application; it is primarily a static marketing and travel-information website with a curated data layer, a dynamic route pattern for destinations and places, and a few placeholder booking/account pages.

The architecture is as follows:

- App shell in src/app/layout.tsx
- Route pages in src/app/**
- Section components in src/components/sections
- Layout components in src/components/layout
- Reusable UI in src/components/ui
- Data registry in src/data/destinations.ts
- Destination-specific content modules in src/data/destinations/*
- Type definitions in src/types/index.ts
- Utility functions in src/lib/utils.ts
- Global branding and styling in src/app/globals.css

## 2. Current folder structure

See PROJECT_STRUCTURE.md for the full real tree.

The key directories are:

- src/app
- src/components
- src/data
- src/lib
- src/types
- public/images
- scripts

## 3. Required folders

If another AI or developer continues work in Google Antigravity, these folders are the required working structure:

- src/app
- src/components/layout
- src/components/sections
- src/components/ui
- src/data/destinations
- src/lib
- src/types
- public/images/destinations

## 4. Required files

The following files are the meaningful project anchors:

- package.json
- next.config.ts
- tsconfig.json
- eslint.config.mjs
- postcss.config.mjs
- src/app/layout.tsx
- src/app/page.tsx
- src/app/destinations/page.tsx
- src/app/destinations/[slug]/page.tsx
- src/app/destinations/[slug]/places/[placeSlug]/page.tsx
- src/data/destinations.ts
- src/data/tours.ts
- src/lib/data.ts
- src/lib/utils.ts
- src/types/index.ts

## 5. Routes

### Static routes implemented

- /
- /about
- /account
- /account/bookings
- /account/profile
- /blog
- /booking/[tourId]
- /checkout
- /contact
- /destinations
- /faq
- /gallery
- /login
- /register
- /tours

### Dynamic routes implemented

- /destinations/[slug]
- /destinations/[slug]/places/[placeSlug]

### Legacy or suspicious routes found in workspace

- /destinations/evrest
- /destinations/mustabg
- /destinations/bhaktapur

These are not part of the central destination registry and may be orphaned or typo routes.

## 6. Components

Important existing components:

- Navbar
- Footer
- Hero
- DestinationCard
- DestinationPage
- DestinationHero
- PlaceCard
- TourCard
- Gallery
- WhyUs
- TestimonialCard
- Breadcrumb
- Button
- Input
- LoadingState

These are all currently present and mostly composition-based.

## 7. Data models

The canonical types live in src/types/index.ts.

Key models:

- NavLink
- GalleryImage
- Experience
- Highlight
- TravelTip
- FaqItem
- SeoMetadata
- Place
- Destination
- Tour
- Testimonial

The data flow is built around Destination objects with nested Place arrays. Tours are separate and route-based by slug.

## 8. Image system

The app uses Next Image and local paths such as:

- /images/destinations/pokhara/lakeside.jpg
- /images/destinations/kathmandu/hero.jpg
- /images/destinations/annapurna/...

The project also references a few images not present under public/images, especially under /images/hero and some Kathamandu files referenced by data but not physically present in the workspace root. This is a key migration risk.

## 9. Environment variables

No .env files were found. Environment variable handling is not currently implemented in this project.

## 10. Build commands

From package.json, the commands are:

- npm run dev
- npm run build
- npm start
- npm run lint

There is no custom production deployment script or CI config in the project root.

## 11. Development commands

- Install dependencies: npm install
- Start local dev server: npm run dev
- Build production output: npm run build
- Run lint: npm run lint
- Start production server: npm start

## 12. Important dependencies

Production dependencies:

- next 16.3.0
- react 19.2.8
- react-dom 19.2.8
- lucide-react
- framer-motion
- clsx
- tailwind-merge
- class-variance-authority

Development dependencies:

- typescript
- tailwindcss
- @tailwindcss/postcss
- eslint
- eslint-config-next
- @types/node
- @types/react
- @types/react-dom

## 13. Existing conventions

- App Router folder-based routing
- TypeScript strict mode enabled
- Alias path of @/* to src/*
- Component naming with PascalCase
- Data objects exported as named constants
- Destination content stored as structured objects rather than CMS or database records
- Styling uses Tailwind utility classes with color tokens defined inline on components

## 14. Naming conventions

- Routes: kebab-case folder names
- Destinations: slug-based lowercase names in data
- Components: PascalCase filenames and exports
- Data modules: lowercase, domain-named, exported constants
- Images: mostly descriptive filenames, sometimes inconsistent or legacy

## 15. Things that must not be changed

These are the boundaries to preserve unless there is an explicit redesign request:

- Do not change the App Router structure without explicit planning.
- Do not remove the destination registry in src/data/destinations.ts.
- Do not change the Destination and Place type contracts in src/types/index.ts.
- Do not change the branding colors and layout system without a design review.
- Do not alter the live routing behavior around /destinations/[slug].
- Do not modify the central data model for destinations or places without updating all dependent pages.

## 16. Known issues

- No backend or database exists.
- No API routes exist.
- No auth system exists.
- No .env or secret-based config exists.
- Some destination pages appear to be orphaned or typo routes.
- The project contains legacy and duplicate route names like evrest and mustabg.
- Some referenced image files are missing in public/images.
- Some pages are mostly placeholders and not fully functional: login, register, checkout, FAQ, gallery, blog, account, tours.
- Some links point to routes that do not exist, such as /privacy, /terms, /refund, or /tours/[slug] patterns with no actual route implementation.

## 17. Missing features

- Real booking backend
- Payment processing
- Database and ORM
- Authentication
- User sessions
- CMS integration
- Real contact form submissions
- Search backend
- Search results page
- Blog content system
- Real gallery management
- Stored tour booking data

## 18. Recommended next development steps

1. Confirm the real destination list to keep and remove or fix broken legacy files.
2. Validate all image assets for each destination and page.
3. Decide whether to keep static content or add a CMS/backend in Antigravity.
4. Implement a real booking flow only after backend contract is defined.
5. Add missing SEO and page metadata for placeholder routes.
6. Validate route consistency between destination data and app folders.
7. Replace placeholder pages with production-ready content and forms as needed.
8. Keep the current App Router and data-driven destination pattern unless a stronger requirement demands a redesign.

## 19. Short handoff note

This project is a static tourism brochure website with a structured destination system and a mostly complete marketing UI. It is not yet a production commerce or user-management application. The best continuation path is to treat it as a content-driven front-end with carefully managed route/data consistency and asset validation.
