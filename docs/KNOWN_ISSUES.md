# Known Issues

This document tracks existing architectural flaws and codebase states that require resolution.

## 1. Split Architecture Context (Critical code duplication)
**Issue:** The project data model is split. `src/data/destinations.ts` holds the structured canonical source of truth. However, `src/app/destinations/` contains hardcoded legacy pages (e.g., `pokhara/page.tsx`) that contain huge React components redefining data arrays like `popularAttractions` and `featuredPokharaTours` directly inside the file.
**Solution Required:** Deprecate the hardcoded folders in `app/destinations/` and migrate all their unique internal data into `src/data/destinations/...`. Route entirely via `app/destinations/[slug]`.

## 2. Directory Typos
**Issue:** Several hardcoded destination folders have distinct typos:
- `/destinations/evrest` (Should be `everest`)
- `/destinations/mustabg` (Should be `mustang`)
- `/destinations/kumbini` (Observed in navigation testing, should be `lumbini`)
**Solution Required:** Audit all internal `Link` tags. Delete typo folders. Ensure the correct slug is mapped.

## 3. Image Sourcing
**Issue:** `public/images/` must manually track the exact string paths written by frontend developers. If a string is misspelled (`pokharaaa.jpg`), the image will silently fail or show the placeholder.
**Solution Required:** Constant verification of referenced images vs actual file system.

## 4. UI-Only Functionality
**Issue:** Forms across the site (`/contact`, `/login`, `/register`) are completely UI-only. They will do a full page reload or submit nowhere.
**Solution Required:** Map placeholder `onSubmit` functions to `e.preventDefault(); console.log('Pending Backend');` until real server actions exist, avoiding bad user experience.

## 5. Duplicate Data references
**Issue:** Some Places may show up under multiple files if not centralized. `tours.ts` maintains its own array, while destinations also maintain `tours: Tour[]`. 
**Solution Required:** Use foreign key style references (slugs) internally in the TS data to avoid massive object duplication (e.g., pulling from a centralized `allTours` array using `.filter(tour => tour.destinationSlug === slug)`).
