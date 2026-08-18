# PROJECT ARCHITECTURE

## 1. Executive summary

This project is a Next.js + TypeScript tourism website for MEegin Tours & Travels. It is primarily structured as a static content-driven marketing site with reusable section components, a data layer for destinations and tour packages, and route-based content pages.

The core architecture is:

- App Router with route folders under src/app
- Destination data defined in src/data/destinations/* and aggregated in src/data/destinations.ts
- Shared UI components under src/components
- Front-end styling through Tailwind utility classes and custom CSS in src/app/globals.css
- No persistent database or backend API currently implemented
- No authentication system or environment configuration files were found

## 2. Complete project inventory

### Root-level files

- AGENTS.md
- CLAUDE.md
- .gitignore
- .next/ (generated build output)
- node_modules/ (installed dependencies)
- package-lock.json
- package.json
- next.config.ts
- next-env.d.ts
- tsconfig.json
- tsconfig.tsbuildinfo
- eslint.config.mjs
- postcss.config.mjs
- README.md
- public/
- scripts/
- src/

### Root-level folders

- .git/
- .next/
- node_modules/
- public/
- scripts/
- src/

### Source folders

- src/app
- src/components
- src/data
- src/lib
- src/types

### Configuration files

- package.json
- next.config.ts
- tsconfig.json
- eslint.config.mjs
- postcss.config.mjs
- next-env.d.ts

### Public assets

- public/file.svg
- public/globe.svg
- public/next.svg
- public/vercel.svg
- public/window.svg
- public/images/destinations/**

## 3. Technology stack

### Frontend

- Framework: Next.js 16.3.0
- React: 19.2.8
- TypeScript: ^5
- CSS: Tailwind CSS 4
- UI libraries: lucide-react, class-variance-authority, clsx, tailwind-merge, framer-motion
- Image handling: Next.js <Image> with remotePatterns allowed for https URLs in next.config.ts
- Styling method: Tailwind utilities plus standard CSS variables and component classes

### Backend

- Backend: Not currently implemented
- API routes: Not found in current project
- Server components: Used by Next.js App Router and page files
- Server actions: Not found
- External APIs: Not currently configured
- Authentication: Not implemented
- Authorization: Not implemented

### Database

- Database: Not currently implemented
- ORM: Not found
- Models: Not found
- Queries: Not found

### Infrastructure

- Hosting assumption: likely Vercel-compatible static deployment, due Next.js and metadata patterns
- Build system: Next.js build pipeline
- Deployment config: Not present beyond Next config
- Environment variables: None found
- External services: none directly configured

### Package management

- Package manager: npm
- Lockfile: package-lock.json

## 4. Package analysis

### package.json scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

### Production dependencies

- next: 16.3.0 — application framework
- react: 19.2.8 — UI library
- react-dom: 19.2.8 — render layer
- lucide-react: icon set
- framer-motion: animation library
- clsx: class composition helper
- tailwind-merge: Tailwind class merge utility
- class-variance-authority: button variant helper

### Development dependencies

- @tailwindcss/postcss — Tailwind PostCSS integration
- @types/node — Node typings
- @types/react — React typings
- @types/react-dom — React DOM typings
- eslint — linting
- eslint-config-next — Next.js lint rules
- tailwindcss — CSS framework
- typescript — TypeScript compiler

### Package observations

- The project is relatively lean and modern.
- There are no API, database, auth, or deployment packages.
- No duplicate dependency conflicts are obvious from package.json.
- Some packages are likely included for styling and variant management only, not business logic.
- The project does not show evidence of a backend stack or commerce stack.

## 5. Project route map

### App router routes discovered

| Route | File | Notes |
|---|---|---|
| / | src/app/page.tsx | Home landing page |
| /about | src/app/about/page.tsx | Basic company overview |
| /contact | src/app/contact/page.tsx | Basic contact landing page |
| /gallery | src/app/gallery/page.tsx | Placeholder gallery page |
| /faq | src/app/faq/page.tsx | Placeholder FAQ page |
| /blog | src/app/blog/page.tsx | Placeholder blog page |
| /tours | src/app/tours/page.tsx | Placeholder tours page |
| /destinations | src/app/destinations/page.tsx | Full destination listing |
| /login | src/app/login/page.tsx | Placeholder login |
| /register | src/app/register/page.tsx | Placeholder register |
| /account | src/app/account/page.tsx | Placeholder account page |
| /account/bookings | src/app/account/bookings/page.tsx | Placeholder bookings page |
| /account/profile | src/app/account/profile/page.tsx | Placeholder profile page |
| /checkout | src/app/checkout/page.tsx | Placeholder checkout |
| /booking/[tourId] | src/app/booking/[tourId]/page.tsx | Booking-by-tour route, static placeholder |
| /destinations/[slug] | src/app/destinations/[slug]/page.tsx | Dynamic destination detail route |
| /destinations/[slug]/places/[placeSlug] | src/app/destinations/[slug]/places/[placeSlug]/page.tsx | Dynamic place detail route |

### Destination-specific route files found

- src/app/destinations/annapurna/page.tsx
- src/app/destinations/baglung/page.tsx
- src/app/destinations/bandipur/page.tsx
- src/app/destinations/bhaktapur/page.tsx
- src/app/destinations/chitwan/page.tsx
- src/app/destinations/evrest/page.tsx
- src/app/destinations/kathmandu/page.tsx
- src/app/destinations/lumbini/page.tsx
- src/app/destinations/mustabg/page.tsx
- src/app/destinations/mustang/page.tsx
- src/app/destinations/palpa/page.tsx
- src/app/destinations/pokhara/page.tsx

### Route implementation notes

- Dynamic route generation is driven by data in src/data/destinations.ts.
- Many destination-specific pages are hand-written, while the app also has generic route files for [slug] and [placeSlug].
- There are apparent naming inconsistencies: evrest and mustabg are likely typo/legacy routes and are not in the central destination registry.

## 6. Destination system

### Core model

The central destination architecture is based on the Destination type in src/types/index.ts, with each destination containing:

- id
- slug
- name
- tagline
- shortDescription
- description
- heroImage
- introImage
- ctaImage
- location
- region
- knownFor
- idealFor
- recommendedDuration
- bestTime
- numberOfTours
- featured
- places
- tours
- highlights
- experiences
- travelTips
- faqs
- gallery
- seo

### Destination registry

The registry is defined in src/data/destinations.ts:

- imports all named destination objects from src/data/destinations/*
- exports a destinations array
- exports getDestinationBySlug(slug)
- exports getPlaceBySlug(destinationSlug, placeSlug)
- exports getFeaturedDestinations()
- exports getDestinationsByRegion(region)

### Destination data folders

Each destination has a file like:

- src/data/destinations/pokhara/pokhara.ts
- src/data/destinations/mustang/mustang.ts
- src/data/destinations/chitwan/chitwan.ts
- src/data/destinations/lumbini/lumbini.ts
- src/data/destinations/kathmandu/kathmandu.ts

### Flow: Home → Destinations → Destination → Places → Place Detail

- Home page uses data from src/lib/data.ts and src/data/destinations.ts
- Destination listing page uses destinations.map(...)
- Destination cards point to /destinations/${slug}
- Destination detail pages get full object via getDestinationBySlug(slug)
- Generic dynamic place page gets place via getPlaceBySlug(slug, placeSlug)
- Place cards point to /destinations/${destinationSlug}/places/${place.slug}

## 7. Current destinations implemented

The following destinations are clearly implemented in the central registry:

| Destination | Slug | Route | Places |
|---|---|---|---|
| Pokhara | pokhara | /destinations/pokhara | Many |
| Mustang | mustang | /destinations/mustang | Many |
| Chitwan | chitwan | /destinations/chitwan | Many |
| Lumbini | lumbini | /destinations/lumbini | Many |
| Palpa | palpa | /destinations/palpa | Many |
| Baglung | baglung | /destinations/baglung | Many |
| Kathmandu | kathmandu | /destinations/kathmandu | Many |
| Bandipur | bandipur | /destinations/bandipur | Many |
| Ghandruk | ghandruk | /destinations/ghandruk | Many |
| Annapurna | annapurna | /destinations/annapurna | Many |
| Everest | everest | /destinations/everest | Many |

### Not implemented / not in registry

- evrest
- mustabg
- bhaktapur (route exists but not in central registry)

## 8. Place system

### Where place data is stored

Place data is embedded into each destination module, for example:

- src/data/destinations/pokhara/pokhara.ts
- src/data/destinations/kathmandu/kathmandu.ts

Each destination exports a `places` array with item type Place.

### Place model

The Place type in src/types/index.ts includes:

- id
- slug
- name
- shortDescription
- description
- image
- location
- category
- duration
- bestTime
- featured
- tourAvailable
- tourSlug?
- highlights?
- gallery?
- travelTips?

### Dynamic route behavior

The dynamic place page is implemented in:

- src/app/destinations/[slug]/places/[placeSlug]/page.tsx

It uses:

- generateStaticParams() to pre-render all destination-place combinations
- getDestinationBySlug(slug)
- getPlaceBySlug(slug, placeSlug)
- notFound() when missing

### Place cards

- src/components/sections/place-card.tsx
- Uses Link to /destinations/${destinationSlug}/places/${place.slug}
- Displays image, category, short description, location, best time, and “View Details” link

### Example route flow

Example request:

- /destinations/pokhara/places/phewa-lake

Flow:

1. User hits /destinations/pokhara/places/phewa-lake
2. Next route matches src/app/destinations/[slug]/places/[placeSlug]/page.tsx
3. Params are read as slug='pokhara', placeSlug='phewa-lake'
4. getDestinationBySlug('pokhara') resolves object from data registry
5. getPlaceBySlug('pokhara', 'phewa-lake') resolves matching place
6. Page renders place data from object, including image, title, description, category, duration, and related links

## 9. Image and asset system

### Public directories

The public images system is split into root default app assets and a destination-heavy folder:

- public/images/destinations/**

The actual destination roots include:

- annapurna/
- baglung/
- bandipur/
- chitwan/
- everest/
- ghandruk/
- lumbini/
- mustang/
- palpa/
- pokhara/

### Naming conventions

- Mostly descriptive file names with hyphenated lowercase names
- Some legacy files contain spaces or uppercase characters
- Several image files appear to be placeholder/temporary assets

### Example image references

- /images/destinations/pokhara/lakeside.jpg
- /images/destinations/kathmandu/hero.jpg
- /images/destinations/annapurna/annapurna-viewpoints.jpg

### Missing asset risk

The project references image paths like:

- /images/hero/nepal-hero.jpg
- /images/og-image.jpg
- /images/destinations/kathmandu/hero.jpg

These are not found in the current workspace under public/images, so they are either missing or expected to be supplied later.

## 10. Component architecture

### Layout components

- src/components/layout/navbar.tsx
- src/components/layout/footer.tsx

### Section components

- src/components/sections/hero.tsx
- src/components/sections/destination-card.tsx
- src/components/sections/destination-page.tsx
- src/components/sections/place-card.tsx
- src/components/sections/tour-card.tsx
- src/components/sections/gallery.tsx
- src/components/sections/testimonial-card.tsx
- src/components/sections/why-us.tsx

### UI components

- src/components/ui/button.tsx
- src/components/ui/input.tsx
- src/components/ui/breadcrumb.tsx
- src/components/ui/loading-state.tsx

### Component notes

- Navbar is client-side with mobile toggling state
- Footer is a static layout component
- Hero is a client component due use of Input and Button components
- DestinationPage is a client component that composes multiple sections
- PlaceCard and DestinationCard are reusable and strongly data-driven

## 11. Page-by-page analysis

### src/app/page.tsx

- Home landing page
- Uses Hero, DestinationCard, TourCard, WhyUs, Gallery, TestimonialCard
- Data from src/data/destinations.ts and src/lib/data.ts
- CTA buttons: View all destinations, Browse all tours, Explore experiences, Plan My Trip
- SEO is inherited from root layout metadata

### src/app/destinations/page.tsx

- Listing page for all destinations
- Maps destinations array into DestinationCard
- Link back to home

### src/app/destinations/[slug]/page.tsx

- Dynamic root destination detail route
- Uses getDestinationBySlug
- Renders <DestinationPage destination={destination} />
- notFound() if missing

### src/app/destinations/[slug]/places/[placeSlug]/page.tsx

- Dynamic place detail page
- Uses Breadcrumb, Image, Link, getDestinationBySlug, getPlaceBySlug
- Displays full place description, details, nearby attractions, and tour links

### src/app/tours/page.tsx

- Placeholder page with heading only
- No data rendering currently implemented

### src/app/booking/[tourId]/page.tsx

- Placeholder booking page
- Resolves tours from src/lib/data.ts by slug
- notFound() when missing

### src/app/about/page.tsx

- Basic company overview page

### src/app/contact/page.tsx

- Basic contact landing page

### src/app/login/page.tsx

- Placeholder login page

### src/app/register/page.tsx

- Placeholder register page

### src/app/account/page.tsx

- Placeholder account dashboard

### src/app/account/bookings/page.tsx

- Placeholder bookings page

### src/app/account/profile/page.tsx

- Placeholder profile page

### src/app/checkout/page.tsx

- Placeholder checkout page

### src/app/blog/page.tsx

- Placeholder blog page

### src/app/gallery/page.tsx

- Placeholder gallery page

### src/app/faq/page.tsx

- Placeholder FAQ page

## 12. Data flow

The actual application data flow is:

1. src/data/destinations.ts imports destination objects
2. destinations array is exported and consumed by listing pages
3. Destination cards render links to /destinations/${slug}
4. Dynamic destination page reads slug and resolves destination object
5. DestinationPage composes sections from destination data
6. Place cards render links to /destinations/${destinationSlug}/places/${place.slug}
7. Dynamic place page resolves occurrence and renders the place detail layout
8. Related content is assembled in-page from the destination object

## 13. TypeScript types

From src/types/index.ts:

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

### Destination type

Destination includes nested arrays for places, tours, highlights, experiences, travelTips, faqs, gallery and seo metadata.

### Place type

Place includes location, duration, category, featured flag, image, and optional travel tips/gallery entries.

### Tour type

Tour contains price, destination metadata, slug, rating, highlights, featured, etc.

## 14. Styling system

### Global CSS

src/app/globals.css is the shared stylesheet. It is used alongside Tailwind classes.

### Brand color palette

The current brand style is built around these dominant colors:

- #004AB8 — deep blue for primary actions and headings
- #0091DA — bright highlight blue
- #172033 — dark text
- #F7FAFC — light background
- #EAF7FD — soft blue surface
- #ECF8EF — green accent

### Visual system

- Rounded cards and buttons using 4xl / 3xl radius values
- White cards with subtle borders and shadows
- Blue-accent CTA buttons
- Clean sans typography using Geist from next/font/google
- Responsive spacing built through utility classes

## 15. Responsive design

### Observed responsive pattern

- Mobile: single-column stacks, smaller text and tighter padding
- Tablet: two-column grids and medium spacing
- Desktop: multi-column layouts, 3-card and 5-card sections
- Large desktop: wider layouts with 2xl/3xl grid spans

### Responsive patterns used

- sm:, md:, lg:, xl:, 2xl: breakpoints from Tailwind CSS 4
- flex-col to row transitions on landing pages
- grid changes depending on card count
- mobile menu for NavBar
- responsive image sizing using sizes="..." in next/image

### Obvious issues

- Some pages are still placeholders and not fully designed.
- There are route-level inconsistencies between pages and central data.
- Some components may have broken image references.

## 16. SEO review

### Implemented

- Metadata in root layout
- Page-specific metadata for destination pages and generic dynamic routes
- Open Graph image metadata in src/app/layout.tsx
- Title and description metadata patterns present
- Keywords included at destination metadata level

### Missing or incomplete

- No sitemap.xml found
- No robots.txt found
- No canonical tags found
- No structured data / JSON-LD found
- No metadata generation for many placeholder pages
- No OG image actually present under public/images/og-image.jpg

## 17. Navigation system

### Navbar links

From src/lib/data.ts:

- Destinations
- Tours
- About
- Gallery
- Blog
- Contact

### Footer links

- Quick links from navLinks
- Popular destinations links for Pokhara, Mustang, Chitwan, Kathmandu
- Privacy Policy, Terms & Conditions, Refund Policy

### Potential navigation issues

- Privacy, terms, and refund routes do not appear to exist.
- Footer uses href="#" on social links
- `Booking` links are hardcoded to `/booking/pokhara-adventure` in navbar
- TourCard links go to /tours/${tour.slug}, but there is no actual dynamic tour detail route in the app

## 18. Booking system

### Current status

- Booking architecture: partially conceptualized but not implemented as a real system
- Route exists: /booking/[tourId]
- Data source: src/lib/data.ts and some src/data/tours.ts, but not fully aligned with destination system
- Form: not implemented
- Payment: not implemented
- Database: not implemented
- Validation: not implemented
- Confirmation: not implemented
- Backend: not implemented

### Conclusion

Booking is a placeholder/prototype page only; real booking is NOT implemented.

## 19. Authentication and security

### Current status

- Authentication: NOT IMPLEMENTED
- Login page: present as placeholder only
- Registration page: present as placeholder only
- Sessions: not implemented
- JWT: not implemented
- Cookies: not implemented
- Middleware: not implemented
- Authorization: not implemented
- API security: not implemented
- Input validation: not implemented
- CSRF: not implemented
- XSS protections: not explicit beyond standard React escaping and Next default behavior

### Security observations

- No .env secrets or config files found.
- There are public URLs with placeholders and no secret handling.
- No obvious use of inline scripts or direct use of dangerouslySetInnerHTML.

## 20. Environment variables

### Findings

- No .env files found in the workspace.
- No .env.local, .env.example, .env.production, etc.

### Conclusion

UNKNOWN / NOT FOUND IN CURRENT PROJECT

## 21. Configuration files

### next.config.ts

```ts
images: {
  remotePatterns: [{ protocol: 'https', hostname: '**', pathname: '/**' }]
}
```

This allows remote https image URLs in addition to local images.

### tsconfig.json

- strict mode enabled
- JSX react-jsx
- baseUrl .
- path alias @/* -> ./src/*
- includes .next types and TS sources

### eslint.config.mjs

- Uses eslint-config-next/core-web-vitals and eslint-config-next/typescript
- Ignores .next, out, build, next-env.d.ts

### postcss.config.mjs

- Enables @tailwindcss/postcss plugin

## 22. Build and development flow

### Existing commands

- npm install
- npm run dev
- npm run build
- npm start
- npm run lint

### Build flow

- Next.js compiles app, static routes, and dynamic route generation
- Static generation occurs based on generateStaticParams and registry data

### Production flow

- Not fully configured beyond basic next build/start
- No hosting or deployment config was found beyond standard Next.js output

## 23. Error handling

### Found patterns

- notFound() is used for missing destination and place pages
- Metadata fallbacks are used in dynamic metadata generation
- Placeholder pages do not include robust error handling or form validation

### Missing error states

- No error.tsx root page found in src/app
- No loading.tsx found for route-level loading states
- No not-found.tsx found at the root app level

## 24. Performance review

### Implemented good practices

- Next.js app router
- Next Image usage for local and remote images
- Static generation of dynamic routes by generateStaticParams
- Data loaded from local objects rather than database queries

### Potential issues

- Image references are inconsistent and may be missing
- Some unrelated or unused route files exist
- Large destination objects may increase bundle size if not managed carefully
- Some pages are still placeholders and not data-driven

## 25. Architecture diagram

```text
                         ┌──────────────────────┐
                         │       User           │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Next.js App Router │
                         │   src/app/*          │
                         └──────────┬───────────┘
                                    │
          ┌─────────────────────────┼──────────────────────────────┐
          ▼                         ▼                              ▼
 ┌────────────────────┐    ┌────────────────────────┐      ┌──────────────────────┐
 │ Landing/home pages  │    │ Destination pages      │      │ Dynamic place pages   │
 │ page.tsx           │    │ [slug]/page.tsx        │      │ [slug]/places/...    │
 └─────────┬──────────┘    └──────────┬─────────────┘      └──────────┬───────────┘
           │                           │                                 │
           ▼                           ▼                                 ▼
 ┌────────────────────┐    ┌────────────────────────┐      ┌──────────────────────┐
 │ src/lib/data.ts    │    │ src/data/destinations │      │ src/types/index.ts   │
 │ + src/data/tours.ts│    │ + destination modules │      │ Type definitions      │
 └─────────┬──────────┘    └──────────┬─────────────┘      └──────────────────────┘
           │                           │
           ▼                           ▼
 ┌────────────────────┐    ┌────────────────────────┐
 │ Reusable UI comps  │    │ Section comps          │
 │ ui/*               │    │ sections/*            │
 └─────────┬──────────┘    └──────────┬─────────────┘
           │                           │
           └──────────────┬────────────┘
                          ▼
                 ┌──────────────────────┐
                 │ public/images/       │
                 │ destination assets    │
                 └──────────────────────┘
```

## 26. Dependency graph

```text
Home page
  ↓
Hero + DestinationCard + TourCard + Gallery + WhyUs
  ↓
src/data/destinations.ts
  ↓
Destination modules and type definitions
  ↓
src/lib/data.ts / src/types/index.ts
  ↓
Reusable UI components
  ↓
public/images/destinations
```

## 27. File-by-file responsibility map

| File | Responsibility | Used By | Important notes |
|---|---|---|---|
| src/app/page.tsx | Root landing page | Browser | Uses landing data and UI sections |
| src/app/layout.tsx | HTML shell and global metadata | App | Includes Navbar and Footer |
| src/app/destinations/page.tsx | Destination list | Browser | Maps data into cards |
| src/app/destinations/[slug]/page.tsx | Dynamic destination detail | Browser | resolves slug |
| src/app/destinations/[slug]/places/[placeSlug]/page.tsx | Dynamic place detail | Browser | place lookup and route resolution |
| src/data/destinations.ts | central destination registry | all destination pages | main data access layer |
| src/data/destinations/*.ts | destination content | registry | detailed content and places |
| src/data/tours.ts | tour data | future pages | data exists but not fully integrated |
| src/lib/data.ts | global site config and helper data | home page and nav | includes navLinks and some fallback data |
| src/lib/utils.ts | utility helpers | app and components | cn, isValidImageSrc |
| src/types/index.ts | domain types | app/data/components | canonical schema |
| src/components/layout/navbar.tsx | nav | app layout | client component |
| src/components/layout/footer.tsx | footer | app layout | static links |
| src/components/sections/hero.tsx | homepage hero | app/page.tsx | contains booking-like search UI |
| src/components/sections/destination-card.tsx | destination cards | pages | reusable |
| src/components/sections/place-card.tsx | place cards | destination pages | reusable |
| src/components/sections/tour-card.tsx | tour cards | home page | not route-complete |
| src/components/sections/destination-page.tsx | full destination page template | dynamic destination page | long comprehensive section composer |
| src/components/sections/why-us.tsx | trust/benefits section | home and destination pages | reused |
| src/components/ui/button.tsx | CTAs | many components | variant system |
| src/components/ui/input.tsx | form inputs | hero | lightweight wrapper |
| src/components/ui/breadcrumb.tsx | breadcrumb nav | place page and destination page | reusable |
| src/components/ui/loading-state.tsx | load placeholder | not used heavily | simple placeholder |

## 28. Future development map

### Currently implemented

- Marketing landing page
- Destination list page
- Destination detail route pattern
- Place detail route pattern
- Content-rich destination data model
- Reusable section and UI components
- Next.js static generation capability
- Tailwind-based styling system

### Partially implemented

- Tours display and booking links
- Booking route infrastructure
- Account routes
- SEO metadata setup
- Some route placeholders and CTA behavior

### Not implemented

- Auth
- DB
- API layer
- Real forms and validations
- Payment flow
- CMS or admin panel
- Search backend
- Real user accounts
- Real transaction system

### Potential future features

- Real booking engine
- Login/user management
- Payment integration
- Destination CMS
- Blog CMS
- Contact form backend
- Multi-step travel planner
- Search and filtering
- Test coverage and QA automation

## 29. Business feature map

| Feature | Status |
|---|---|
| Destinations | Implemented |
| Places | Implemented |
| Tour packages | Partially implemented |
| Tour details | Partially implemented |
| Booking | Placeholder / Not implemented |
| Contact | Placeholder / Partially implemented |
| Testimonials | Implemented on homepage |
| About | Implemented |
| Why choose us | Implemented |
| Gallery | Placeholder page + gallery section |
| Travel information | Partially implemented |
| Customer inquiries | Not implemented |

## 30. Complete URL map

| URL | Page | Source file | Data source |
|---|---|---|---|
| / | home | src/app/page.tsx | src/data/destinations.ts + src/lib/data.ts |
| /about | about | src/app/about/page.tsx | static |
| /contact | contact | src/app/contact/page.tsx | static |
| /gallery | gallery | src/app/gallery/page.tsx | static |
| /faq | faq | src/app/faq/page.tsx | static |
| /blog | blog | src/app/blog/page.tsx | static |
| /tours | tours | src/app/tours/page.tsx | not implemented |
| /destinations | destinations listing | src/app/destinations/page.tsx | src/data/destinations.ts |
| /login | login | src/app/login/page.tsx | static |
| /register | register | src/app/register/page.tsx | static |
| /account | account | src/app/account/page.tsx | static |
| /account/bookings | bookings | src/app/account/bookings/page.tsx | static |
| /account/profile | profile | src/app/account/profile/page.tsx | static |
| /checkout | checkout | src/app/checkout/page.tsx | static |
| /booking/[tourId] | booking | src/app/booking/[tourId]/page.tsx | src/lib/data.ts |
| /destinations/[slug] | destination detail | src/app/destinations/[slug]/page.tsx | src/data/destinations.ts |
| /destinations/[slug]/places/[placeSlug] | place detail | src/app/destinations/[slug]/places/[placeSlug]/page.tsx | src/data/destinations.ts |

## 31. Image map

| Image path | Used by | Purpose | Exists? |
|---|---|---|---|
| /images/hero/nepal-hero.jpg | Hero component | homepage hero image | NOT FOUND |
| /images/og-image.jpg | layout metadata | Open Graph image | NOT FOUND |
| /images/destinations/pokhara.webp | pokhara destination | hero | FOUND |
| /images/destinations/pokhara/lakeside.jpg | pokhara destination | intro/gallery | FOUND |
| /images/destinations/kathmandu/hero.jpg | Kathmandu data | hero | NOT FOUND |
| /images/destinations/kathmandu/intro.jpg | Kathmandu data | intro | NOT FOUND |
| /images/destinations/kathmandu/cta.jpg | Kathmandu data | CTA | NOT FOUND |
| /images/destinations/... | many individual places | gallery and cards | partially found or missing |

## 32. Code quality review

### Observations

- The application is structured consistently around domain data and reuse.
- Destination modules are verbose but consistent.
- Some destination-specific page files are old or custom-coded, while the generic route files also exist.
- There are naming inconsistencies such as evrest and mustabg.
- Several placeholder pages are clearly unfinished.
- Some links are hardcoded to pages that do not exist.
- Some code blocks appear to be mixture of hand-coded and generated content.

### Notable issues

- Hardcoded values remain in some page files.
- Place pages and destination pages rely heavily on object data but some CTA hrefs are not backed by real routes.
- There is likely redundant or legacy content not centralized.

## 33. Security review

### Severity levels

- CRITICAL: None identified in current workspace
- HIGH: None identified in current workspace
- MEDIUM: Missing backend auth and validation for forms and bookings
- LOW: placeholder pages expose front-end-only flows without backend guardrails
- INFO: No secrets found, no .env files detected

### Security conclusions

The project is not yet a security-critical backend application. It does not contain exposed secret values or obvious dangerous code patterns, but it also lacks backend protections for forms, user accounts, and payments.

## 34. Final project summary

PROJECT NAME:
MEegin Tours & Travels

TECH STACK:
Next.js 16, React 19, TypeScript, Tailwind CSS, lucide-react

ARCHITECTURE:
App Router, component-based marketing site, static content model, dynamic destination/place routes

FRONTEND:
Next.js App Router, TypeScript, Tailwind CSS, reusable sections, client-side nav and some interactive UI

BACKEND:
NOT CURRENTLY IMPLEMENTED

DATABASE:
NOT CURRENTLY IMPLEMENTED

AUTH:
NOT IMPLEMENTED

ROUTES:
Static and dynamic routes exist for marketing and destination browsing

DESTINATIONS:
11 central destinations implemented in registry; several legacy/typo routes also exist

PLACES:
Implemented per destination as structured Place objects in destination data modules

BOOKING:
Placeholder route only; no business backend or payment flow

COMPONENTS:
Layout, section, and UI component set exists and is reused

DATA:
Destination and tour data are stored in local TypeScript modules rather than API/database

IMAGE SYSTEM:
Local images are organized under public/images/destinations, but some references still point to missing files

SEO:
Basic page metadata exists, but no sitemap/robots/JSON-LD structured data found

SECURITY:
No obvious secret exposure; backend security and auth are not implemented

RESPONSIVENESS:
Responsive layout patterns exist and are broadly applied

BUILD:
Next.js build and lint commands are in place and operational

DEPLOYMENT:
Compatible with standard Next.js deployment; no custom deployment config found

CURRENT STATUS:
The project is a functional static tourism brochure website with strong destination-content scaffolding and a clear path for expansion, but it is not yet a full production booking or user-management system.

## 35. Important note

This task was a read-only analysis of the current project. No files were edited, deleted, moved, or changed. The information above reflects the actual source and configuration currently present in the workspace.
