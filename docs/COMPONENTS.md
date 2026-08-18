# Component Architecture

MEegin Tours & Travels uses a modular design system composed of highly reusable UI components.

## `src/components/ui/`
The foundational layer representing atomic design elements.
- **Button / Inputs**: Baseline interactive elements built with `class-variance-authority` (CVA) for scalable variant management.
- **Breadcrumb**: Lightweight component for intra-site navigation.

## `src/components/layout/`
Core shell elements that wrap around standard pages.
- **`navbar.tsx`**: Dynamic header supporting responsive mobile menus, brand logo, and primary routing.
- **`footer.tsx`**: Consistent site footer containing legal links, secondary navigation, and brand statements.

## `src/components/sections/`
Large feature-blocks meant to be dropped into pages. These rely heavily on typing from `src/types/index.ts`.
- **`hero.tsx`**: Main landing page hero banner.
- **`destination-hero.tsx` / `destination-page.tsx`**: Reusable dynamic layouts for the `[slug]` pages.
- **`destination-card.tsx`**: A condensed layout displaying destination previews (image, abstract, CTA).
- **`place-card.tsx`**: A sub-card specifically for points of interest within a destination (e.g., Phewa Lake in Pokhara).
- **`tour-card.tsx`**: Reusable entity displaying tour details, pricing, reviews, and duration.
- **`testimonial-card.tsx`**: For user social proof.
- **`gallery.tsx`**: Masonry or grid-style image presentation components.
- **`why-us.tsx`**: Marketing component explaining company advantages.

## Component Rules
1. **Never Duplicate Layouts**: Use `DestinationPage` and provide it data, rather than building a new `PokharaPage` from scratch.
2. **Strict Typing**: All sections expecting data must type their props directly against `Destination`, `Tour`, or `Place` interfaces.
3. **Purity**: Display components should not orchestrate fetching logic; they receive data from the page-level component.
