# Security Architecture

The application is currently entirely client/server-static frontend. Because there is no backend, actual attack vectors are limited. 

## Current Rules applied:
1. **No Sensitive Keys:** Do not commit `NEXT_PUBLIC_` or private keys if any API is used. Wait for `.env` integration.
2. **Read-Only:** All data is currently read-only.
3. **No Auth Illusion:** Login/Register forms are visually present but must not implement fake client-side local-storage based authentication.

## Future Backend Security Implementation
When a Node.js/Next.js API layer is eventually attached:

### Authentication & Authorization
- **JWT / Session:** Server-managed secure `httpOnly` sessions for users.
- **Role Based Access Control (RBAC):** Distinct privileges for `User` vs `Admin`. Admins will have access to the CMS panel.

### Data Protection
- **Never Trust the Client:** Cart pricing, booking amounts, and available tour dates MUST be validated against the server database, not accepted blindly from the Frontend payload.
- **SQL / NoSQL Injection Prevention:** Use an ORM (Prisma or Drizzle) or parameterized queries to ensure all inputs are sanitized.
- **XSS Prevention:** Ensure any user-generated content (Reviews, Testimonials) is sanitized before rendering, although React's default escaping mitigates most issues.

### Infrastructure
- **Rate Limiting:** Protect form endpoints (Contact, Booking, Login) from bot spam.
- **CSRF Tokens:** Required for state-changing mutations if using traditional cookie tracking.
- **Environment Management:** Database URIs, Payment API keys, and Email SMTP creds remain strictly on the server (`.env.local`).
