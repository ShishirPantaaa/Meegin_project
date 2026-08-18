# Application Routes

## Standard Routes
| Route | Description | Status |
|---|---|---|
| `/` | Landing page / Home | Active |
| `/about` | About the company | Active |
| `/blog` | Travel blogs / articles | Active placeholder |
| `/contact` | Contact page with inquiry form | Active (No backend) |
| `/faq` | Frequently Asked Questions | Active |
| `/gallery` | Project image gallery | Active |

## User & Authentication Routes
| Route | Description | Status |
|---|---|---|
| `/login` | User login form | UI only |
| `/register` | User registration form | UI only |
| `/account` | User dashboard overview | UI only |
| `/account/bookings` | Viewing past/current bookings | UI only |
| `/account/profile` | Editing user details | UI only |

## Feature Routes
| Route | Description | Status |
|---|---|---|
| `/tours` | Main tours listing page | Active |
| `/booking/[tourId]` | Booking initiation process | UI only |
| `/checkout` | Payment/confirmation stage | UI only |
| `/destinations` | All destinations overview | Active |
| `/destinations/[slug]` | Dynamic single destination page | Active (Data driven) |
| `/destinations/[slug]/places/[placeSlug]` | Specific place detail under a destination | Active |

## Legacy / Suspicious Routes (Action Required)
There are hardcoded folders inside `src/app/destinations/` that bypass the dynamic `[slug]` system. Many contain typos or redundant code.

- **`/destinations/pokhara`**: Fully coded ~580-line standalone page, bypassing dynamic data.
- **`/destinations/mustang`**, **`/destinations/chitwan`**, **`/destinations/lumbini`**, etc.
- **`/destinations/evrest`**: Contains a typo (evrest instead of everest).
- **`/destinations/mustabg`**: Contains a typo (mustabg instead of mustang).
- **`/destinations/bhaktapur`**: Exists here but might not be in the master data yet.

**Recommendation:** These hardcoded routes should eventually be deprecated, removed, and redirected to their respective `/destinations/[slug]` counterparts once the data files (`src/data/destinations/...`) fully match the content in these legacy components.
