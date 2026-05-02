# Craft Hub Website Overview

## 1) Quick Answer: Single Page ya Multiple?

Ye project **hybrid** structure follow karta hai:

- **Home page** (`/`) ek **single long-scroll landing page** hai (sections ke saath).
- Saath hi project me **multiple routes/pages** bhi hain:
  - Dynamic service detail pages: `/services/[slug]`
  - Admin panel page: `/admin`
  - API routes: `/api/contact` and `/api/contact/[id]`

Isliye strictly single-page nahi hai, aur pure traditional multi-page bhi nahi. Best term: **Hybrid (single-scroll landing + multi-route app)**.

## 2) Main Route Map

### Public UI Routes

- `/` -> Homepage (Hero, About, Services, Portfolio, Testimonials, Contact form, Footer)
- `/services/:slug` -> Individual service detail page (SEO, Digital Marketing, etc.)

### Admin Route

- `/admin` -> Contact submissions dekhne, mark-read/unread karne, aur delete karne ke liye

### API Routes

- `POST /api/contact` -> Contact form submit karta hai, DB me save + email notification trigger
- `GET /api/contact` -> Admin token ke saath all submissions fetch
- `PATCH /api/contact/:id` -> Submission ko read/unread update
- `DELETE /api/contact/:id` -> Submission delete

## 3) User Flow (Visitor)

1. User `/` par land karta hai.
2. Navbar se section-to-section scroll navigation hoti hai (`#about`, `#services`, `#contact`, etc.).
3. Services section se user service card par click karta hai -> `/services/:slug` open hota hai.
4. Contact section me form fill karke submit karta hai.
5. Form `POST /api/contact` call karta hai.
6. Submission SQLite DB me store hoti hai.
7. Agar SMTP configured hai to notification email send hoti hai.

## 4) Admin Flow

1. Admin `/admin` open karta hai.
2. Admin token enter karta hai.
3. Frontend `GET /api/contact` with `Authorization: Bearer <token>` call karta hai.
4. Token valid ho to submissions list show hoti hai.
5. Admin:
   - Read/unread toggle karta hai -> `PATCH /api/contact/:id`
   - Delete karta hai -> `DELETE /api/contact/:id`

## 5) Data & Backend Flow

- Database: **SQLite** (`prisma/dev.db`) via `better-sqlite3`
- Table: `ContactSubmission`
- Contact form data fields:
  - `name`, `email`, `phone`, `service`, `message`, `read`, `createdAt`
- Server-side validation:
  - Required: `name`, `email`, `message`
  - Basic email format check

## 6) Rendering and Routing Notes

- Service pages me `generateStaticParams()` use ho raha hai, to predefined slugs ke liye static path generation possible hai.
- Dynamic route folder: `app/services/[slug]/`
- Home page section-based UX deta hai (SPA feel), but app routing Next.js App Router based multi-route hai.

## 7) Summary

Project ka UX home par single-page jaisa hai, lekin architecture level par ye **multi-route Next.js application** hai jisme public pages, dynamic pages, admin panel, aur API backend sab include hain.
