# SEO Architecture

MEegin Tours is a tourism business relying heavily on organic search traffic (Google/Bing). 

## Current Implementation
- Next.js `generateMetadata()` is properly established in the `[slug]` routes to dynamically inject `<title>`, `<meta name="description">`, and OpenGraph tags per destination.
- Server-Side Rendering (SSR) / Static Site Generation (SSG) ensures content is fully readable by crawlers without waiting for JS execution.

## Keyword Targeting strategy
The system scopes data structures to ensure targeted phrases:
- Nepal Tours
- Nepal Travel Packages
- `[Destination Name]` Tours (e.g., "Pokhara Tours")
- `[Place Name]` Travel Guide (e.g., "Phewa Lake Travel Guide")

## Required Data per Destination/Place
In `src/types/index.ts`, the `Destination` object requires an `seo` block:
```typescript
seo?: {
  title: string;
  description: string;
  keywords?: string[];
}
```
If this is missing, the frontend falls back to standard string manipulation:
`Title: ${destination.name} Tours & Travel Packages | MEegin Tours & Travels`

## Future Requirements
- **Canonical URLs:** Inject standard canonicals to prevent duplicate indexing issues between `/destinations/pokhara` and `/destinations/pokhara/places`.
- **Sitemap.xml:** Ensure Next.js is configured to generate an automated sitemap referencing all dynamic `[slug]` paths.
- **Robots.txt:** Allow all valid routes, block `/account` and `/api`.
- **Schema.org JSON-LD:** Structured data indicating `TravelAgency`, `TouristDestination`, and `Product` (Tour Packages).
