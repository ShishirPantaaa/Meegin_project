# Project Architecture

## High-Level Flow
The application currently operates entirely as a Next.js Server-Side/Static frontend referencing local datasets.

User
 ↓
Next.js App Router (`src/app/`)
 ↓
Page Components (Route Handlers)
 ↓
Reusable UI Components (`src/components/`)
 ↓
Data Layer (`src/data/*.ts`)
 ↓
Local Assets (`public/images/`)

## Technologies Used
- **Framework:** Next.js 16.3.0
- **UI Library:** React 19.2.8
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`, `class-variance-authority`
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Directory Structure
- **`src/app/`**: Contains the App Router definitions. Folders match URL paths. Subfolders include auth routes (`/login`, `/register`), informative pages (`/about`, `/contact`), and feature pages (`/destinations`, `/tours`, `/checkout`).
- **`src/components/`**: Modular, reusable React components.
  - `layout/`: Navbar, Footer, Breadcrumbs.
  - `sections/`: Feature-specific sections like Hero, DestinationCards, and PlaceCards.
  - `ui/`: Fundamental UI elements like basic buttons.
- **`src/data/`**: The core "database" of the frontend. Contains deeply nested TypeScript structures (`destinations.ts`, `tours.ts`).
- **`src/lib/`**: Utility functions (`utils.ts`) and secondary data items (`data.ts`).
- **`src/types/`**: Global TypeScript interfaces (`index.ts`) defining the shape of `Destination`, `Place`, `Tour`, etc.
- **`public/images/`**: The strictly enforced local image directory where all destination/tour assets must be placed.

## Component Rendering Pattern
- **Server Components:** Default rendering mode. All pages (e.g., `DestinationPageRoute`) load data synchronously or through static generation.
- **Client Components:** Components handling state, interactions, and Framer Motion animations are marked with `"use client"`.
- **Dynamic Routes:** `src/app/destinations/[slug]/page.tsx` relies on `generateStaticParams()` to pre-render known destinations fetched from `src/data/destinations.ts`, providing fast load times and strong SEO.
