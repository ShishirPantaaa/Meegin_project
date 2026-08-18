# Data Architecture

Because MEegin Tours & Travels lacks a backend database, it uses a localized JSON/TypeScript Object architecture representing a pseudo-relational database.

## System Design
All data is stored in `src/data/` relying on centralized index files to export lists for Next.js to parse.

### Entities
Defined in `src/types/index.ts`:

1. **`Destination`**
   - **Primary Key:** `id` / `slug`
   - **Attributes:** name, tagline, description, location, heroImage, bestTime.
   - **Relationships:** Contains `places` (1 to Many), `tours` (1 to Many), `faqs`, `travelTips`.

2. **`Place`**
   - **Primary Key:** `id` / `slug`
   - **Attributes:** name, shortDescription, image, category, duration.
   - **Context:** A localized point of interest inside a `Destination` (e.g., Sarangkot inside Pokhara).

3. **`Tour`**
   - **Primary Key:** `id` / `slug`
   - **Attributes:** title, price, duration, rating, reviewCount.
   - **Relationships:** Maps to a specific `Destination`.

## File Structure (`src/data/destinations/`)
Each individual destination has a dedicated folder to keep the data modular.
```
src/data/destinations/
 ├── pokhara/pokhara.ts
 ├── mustang/mustang.ts
 ├── chitwan/chitwan.ts
 ...
```

## Compilation (`src/data/destinations.ts`)
The core orchestrator file imports all regional data files and exports arrays:
- `export const destinations: Destination[] = [...]`
- Provides utility queries: `getDestinationBySlug()`, `getPlaceBySlug()`, `getFeaturedDestinations()`.

## Known Issues with Data
- **Sync Mismatch:** The hardcoded components (like `destinations/pokhara/page.tsx`) maintain their own isolated data arrays (e.g., `popularAttractions`, `featuredPokharaTours`). This splits the source of truth between `src/data/` and `src/app/`. 
- **Recommendation:** Merge all component-level localized data into the main `src/data/destinations/` files.
