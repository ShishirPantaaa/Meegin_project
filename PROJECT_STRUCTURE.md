# PROJECT STRUCTURE

This document reflects the actual workspace state as inspected.

```text
meegin-tours-and-travels/
├── AGENTS.md
├── CLAUDE.md
├── .git/
├── .gitignore
├── .next/
├── node_modules/
├── package-lock.json
├── package.json
├── next.config.ts
├── next-env.d.ts
├── tsconfig.json
├── tsconfig.tsbuildinfo
├── eslint.config.mjs
├── postcss.config.mjs
├── README.md
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── images/
│       └── destinations/
│           ├── annapurna/
│           ├── annapurna-viewpoints.jpg
│           ├── baglung.jpg
│           ├── bandipur/
│           ├── bandipur.jpg
│           ├── Bhaktapur.jpg
│           ├── chitwan/
│           ├── everest/
│           ├── ghandruk/
│           ├── ghandruk.jpg
│           ├── ilam-tea-garden.jpg
│           ├── janakpur.jpg
│           ├── kathmandu.jpg
│           ├── lumbini/
│           ├── lumbini.jpg
│           ├── mustang/
│           ├── nagarkot.jpg
│           ├── namche-bazaar.jpg
│           ├── palpa/
│           ├── pokhara/
│           ├── pokhara.webp
│           └── ...
├── scripts/
│   ├── clean_destination_modules.py
│   ├── split_destinations.py
│   └── tailwind_fix.py
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── account/
│   │   │   ├── page.tsx
│   │   │   ├── bookings/
│   │   │   │   └── page.tsx
│   │   │   └── profile/
│   │   │       └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── booking/
│   │   │   └── [tourId]/
│   │   │       └── page.tsx
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── destinations/
│   │   │   ├── page.tsx
│   │   │   ├── [slug]/
│   │   │   │   ├── page.tsx
│   │   │   │   └── places/
│   │   │   │       └── [placeSlug]/
│   │   │   │           └── page.tsx
│   │   │   ├── annapurna/
│   │   │   │   └── page.tsx
│   │   │   ├── baglung/
│   │   │   │   └── page.tsx
│   │   │   ├── bandipur/
│   │   │   │   └── page.tsx
│   │   │   ├── bhaktapur/
│   │   │   │   └── page.tsx
│   │   │   ├── chitwan/
│   │   │   │   └── page.tsx
│   │   │   ├── evrest/
│   │   │   │   └── page.tsx
│   │   │   ├── kathmandu/
│   │   │   │   └── page.tsx
│   │   │   ├── kumbini/
│   │   │   ├── lumbini/
│   │   │   │   └── page.tsx
│   │   │   ├── mustabg/
│   │   │   │   └── page.tsx
│   │   │   ├── mustang/
│   │   │   │   └── page.tsx
│   │   │   ├── palpa/
│   │   │   │   └── page.tsx
│   │   │   ├── pokhara/
│   │   │   │   └── page.tsx
│   │   │   └── ...
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── tours/
│   │   │   └── page.tsx
│   │   └── favicone.png
│   ├── components/
│   │   ├── cards/
│   │   ├── layout/
│   │   │   ├── footer.tsx
│   │   │   └── navbar.tsx
│   │   ├── sections/
│   │   │   ├── destination-card.tsx
│   │   │   ├── destination-hero.tsx
│   │   │   ├── destination-page.tsx
│   │   │   ├── gallery.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── place-card.tsx
│   │   │   ├── testimonial-card.tsx
│   │   │   ├── tour-card.tsx
│   │   │   └── why-us.tsx
│   │   └── ui/
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── loading-state.tsx
│   ├── data/
│   │   ├── destinations.ts
│   │   ├── tours.ts
│   │   └── destinations/
│   │       ├── annapurna/
│   │       │   └── annapurna.ts
│   │       ├── baglung/
│   │       │   └── baglung.ts
│   │       ├── bandipur/
│   │       │   └── bandipur.ts
│   │       ├── chitwan/
│   │       │   └── chitwan.ts
│   │       ├── everest/
│   │       │   └── everest.ts
│   │       ├── ghandruk/
│   │       │   └── ghandruk.ts
│   │       ├── kathmandu/
│   │       │   └── kathmandu.ts
│   │       ├── lumbini/
│   │       │   └── lumbini.ts
│   │       ├── mustang/
│   │       │   └── mustang.ts
│   │       ├── palpa/
│   │       │   └── palpa.ts
│   │       └── pokhara/
│   │           └── pokhara.ts
│   ├── lib/
│   │   ├── data.ts
│   │   └── utils.ts
│   └── types/
│       └── index.ts
└── ...
```

Notes:

- The project is organized as a Next.js App Router application with mostly static destination data and component-driven UI.
- There is no /src/app/api directory in the workspace.
- The application contains multiple destination-specific route folders, some of which appear to be typo/legacy routes such as evrest and mustabg that are not included in the central destination registry.
- There are no .env files found in the workspace.
- The images used in the app are mostly stored under public/images/destinations and some standalone images also exist at the root of the public/images/destinations directory.
