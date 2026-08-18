# Development Rules & Workflow

## Core Principles
1. **Understand before changing:** Always inspect existing Next.js logic, `Link` destinations, and TS Definitions before refactoring a component.
2. **Never Make Blind Changes:** Read the file entirely, execute `grep` searches for module imports, and review data flows.
3. **Purity over Speed:** Maintain clean React functional components. Use proper hooks (`useState`, `useEffect`) and do not overuse `"use client"`.

## Workflow steps
1. Inspect the requirement.
2. Read the source code affecting that requirement.
3. Determine architectural consequences (does changing this Tour type break the homepage cards?).
4. Inform the user / explain the planned change.
5. Get confirmation if destructive/architectural changes are taking place (e.g., deleting legacy `pokhara/page.tsx`).
6. Implement code changes safely.
7. Lint and run build locally to verify TS integrity.
8. Verify UI across all responsive breakpoints from 320px to 1920px.

## Specific Restrictions
- **No API Spooﬁng:** Do not build fake REST/Mock APIs. Rely strictly on the `src/data` objects until the DB is built.
- **Image Rule:** Never inject a random web image. If a new image is needed, construct the logical path (`"/images/destinations/pokhara/custom.jpg"`) and explicitly ask the project owner to place it there physically.
- **Routing:** Follow the App Router structure perfectly. All folders map to routes. Components belong in `src/components`, not `src/app`.
- **CSS:** Tailwind CSS only. Avoid inline styles at all costs. Maintain the existing `#004AB8` / `#0091DA` brand palette context. Do not invent new brand colors arbitrarily.
