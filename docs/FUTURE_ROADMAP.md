# Future Roadmap

This roadmap details the eventual transition of MEegin Tours from a static data-driven app into a full-scale production booking system.

## Recommended Backend Architecture
- **Framework:** Next.js API Routes / Server Actions.
- **Database:** PostgreSQL (Relational structure is best for Booking/Tour relationships).
- **ORM:** Prisma or Drizzle ORM for type-safe database queries.
- **Authentication:** NextAuth.js (Auth.js) combined with JWT/Database sessions.
- **Payments:** Stripe integration for international users. Provide local payment options (eSewa / Khalti) if targeting internal tourism.
- **Object Storage:** AWS S3 or Cloudinary to replace the manual `public/images/` folder constraint in production to allow Admin image uploads.

## Recommended Database Schema Design

```sql
-- Users
users (id, name, email, password_hash, role [USER, ADMIN], created_at)

-- Content
destinations (id, slug, name, description, region, image_url, seo_title)
places (id, destination_id, slug, name, description, image_url)
tours (id, destination_id, slug, title, price, duration, image_url)
tour_itinerary (id, tour_id, day_number, title, description)

-- Transactions
bookings (id, user_id, tour_id, status [PENDING, CONFIRMED, CANCELLED], total_price, travel_date, created_at)
payments (id, booking_id, amount, status, gateway_reference, metadata)

-- Social
reviews (id, user_id, tour_id, rating, comment, status [PENDING_MODERATION, APPROVED])
contact_inquiries (id, name, email, message, read_status, created_at)
```

## Admin System (CMS) Goals
An admin panel is necessary to avoid requiring a code deployment for every text change.
The admin should be able to:
1. **CRUD Destinations & Tours:** Edit prices, names, and images.
2. **Review Bookings:** Approve, cancel, or re-schedule customer trips.
3. **Manage Users:** Address support requests.
4. **Moderate Content:** Approve user reviews.

## Implementation phases
- **Phase 1: Database implementation.** Move `src/data/*.ts` into PostgreSQL to act as a headless CMS.
- **Phase 2: Authentication.** Enable user login flows and session management.
- **Phase 3: Administrative Dashboard.** Build the `app/(admin)/` walled-garden.
- **Phase 4: Checkout Engine.** Integrate Stripe, implement the shopping cart logic, and finalize bookings.
