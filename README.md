# Show-Me Home Ventures

Enterprise-level, SEO-optimized lead generation website for a fix-and-flip real estate company serving Springfield, MO and the Ozarks region. Built around the **Open-Book Certainty Offer™** — a branded system combining transparent pricing and guaranteed close dates.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Content:** MDX via next-mdx-remote (blog posts and resources)
- **Database:** Turso/libSQL via Prisma ORM
- **Validation:** Zod schemas
- **SEO:** Dynamic sitemap, robots.txt, JSON-LD structured data, OpenGraph, canonical URLs
- **Analytics:** GA4 or Plausible (configurable via env vars)
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd show-me-home-ventures

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TURSO_DATABASE_URL` | Turso/libSQL database URL | Yes |
| `TURSO_AUTH_TOKEN` | Turso auth token | Yes |
| `DATABASE_URL` | Optional fallback URL if `TURSO_DATABASE_URL` is not set | No |
| `NEXT_PUBLIC_SITE_URL` | Production URL for canonical links | Yes |
| `NEXT_PUBLIC_PHONE` | Display phone number | No |
| `NEXT_PUBLIC_EMAIL` | Display email address | No |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 measurement ID | No |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible Analytics domain | No |
| `WEBHOOK_URL` | Webhook URL for lead notifications (Zapier, Make, etc.) | No |
| `WEBHOOK_SECRET` | Webhook authentication secret | No |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── actions/            # Server actions (lead submission)
│   ├── api/                # API routes (REST endpoint for leads)
│   ├── areas/              # Service area pages (dynamic)
│   ├── case-studies/       # Case study pages (dynamic)
│   ├── contact/            # Contact page with lead form
│   ├── how-it-works/       # Process explanation page
│   ├── no-surprise-pledge/ # Pledge detail page
│   ├── open-book-certainty-offer/ # Differentiator page
│   ├── privacy/            # Privacy policy
│   ├── resources/          # Blog/resources (dynamic, MDX)
│   ├── reviews/            # Reviews page
│   ├── situations/         # Situation pages (8 static SEO pages)
│   ├── terms/              # Terms of service
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap generator
│   └── robots.ts           # Robots.txt generator
├── components/
│   ├── forms/              # Lead form components
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page section components
│   ├── seo/                # JSON-LD structured data
│   └── ui/                 # shadcn/ui base components
├── content/
│   └── resources/          # MDX blog posts
├── data/                   # Static data (situations, areas, case studies, etc.)
├── lib/                    # Utilities, schemas, database, MDX helpers
└── generated/              # Prisma generated client (gitignored)
```

## Site Map (All Routes)

### Core Pages
- `/` — Homepage
- `/how-it-works` — Process explanation
- `/open-book-certainty-offer` — The Open-Book Certainty Offer™ detail page
- `/no-surprise-pledge` — No Surprise Re-Trade Pledge
- `/contact` — Contact page with lead form
- `/reviews` — Testimonials and reviews
- `/case-studies` — Case study index
- `/case-studies/[slug]` — Individual case studies
- `/privacy` — Privacy policy
- `/terms` — Terms of service

### SEO Situation Pages
- `/situations` — Hub page
- `/situations/inherited-house`
- `/situations/house-needs-repairs`
- `/situations/tenants`
- `/situations/foreclosure-options`
- `/situations/divorce`
- `/situations/hoarder-house`
- `/situations/code-violations`
- `/situations/vacant-property`

### Area Pages
- `/areas` — Hub page
- `/areas/springfield-mo`
- `/areas/ozark-mo`
- `/areas/nixa-mo`
- `/areas/republic-mo`
- `/areas/battlefield-mo`

### Blog / Resources
- `/resources` — Blog index
- `/resources/[slug]` — Individual blog posts

## How to Add Content

### Add a New City/Area

1. Open `src/data/areas.ts`
2. Add a new object to the `areas` array following the existing pattern:

```typescript
{
  slug: "joplin-mo",
  city: "Joplin",
  state: "MO",
  county: "Jasper County",
  metaTitle: "We Buy Houses in Joplin, MO | Cash Offers",
  metaDescription: "...",
  heroHeading: "We Buy Houses in Joplin, MO",
  heroSubheading: "...",
  description: "...",
  neighborhoods: ["Downtown", "..."],
  zipCodes: ["64801", "..."],
}
```

3. The page at `/areas/joplin-mo` will be auto-generated on build.

### Add a New Situation Page

1. Open `src/data/situations.ts`
2. Add a new situation object to the `situations` array
3. Create a new directory: `src/app/situations/your-slug/page.tsx`
4. Follow the pattern of existing situation pages

### Add a New Case Study

1. Open `src/data/case-studies.ts`
2. Add a new case study object with all required fields
3. The page will auto-generate at `/case-studies/your-slug`

### Add a New Blog Post

1. Create a new `.mdx` file in `src/content/resources/`:

```mdx
---
title: "Your Blog Post Title"
description: "A brief description for SEO."
date: "2025-01-15"
author: "Show-Me Home Ventures"
tags: ["tag1", "tag2"]
metaTitle: "SEO Title | Show-Me Home Ventures"
metaDescription: "SEO description for search results."
readTime: "5 min"
---

## Your Content Here

Write your post using standard Markdown/MDX.

[Get your Open-Book Offer →](/contact)
```

2. The post will auto-appear at `/resources/your-slug` on build.

## Lead Form System

The two-step lead form includes:
- **Step 1:** Property address, type, condition, timeline, situation tags
- **Step 2:** Name, phone, email, preferred contact method, notes

### Anti-Spam Protection
- Honeypot field (hidden `website` field)
- IP-based rate limiting (5 submissions/hour/IP)
- Zod schema validation on both client and server

### Lead Storage
- **Primary:** Turso/libSQL database via Prisma
- **Failure behavior:** If DB is unavailable, lead payload is forwarded through webhook (when configured) and the API/action returns a clear error response

### Webhook Integration
Set `WEBHOOK_URL` in `.env` to automatically forward leads to:
- Zapier
- Make (Integromat)
- HubSpot
- Airtable
- Any webhook-compatible service

## Deployment to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

Prisma client auto-generates during install (`postinstall`). For production on Vercel, set `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` in project environment variables.

## SEO Features

- **Metadata:** Unique title/description per page via `createMetadata()` helper
- **Sitemap:** Auto-generated at `/sitemap.xml` including all static, dynamic, and content pages
- **Robots:** Generated at `/robots.txt`
- **JSON-LD:** Organization, LocalBusiness, Service, FAQPage, Article, BreadcrumbList schemas
- **OpenGraph & Twitter Cards:** Configured per page
- **Canonical URLs:** Set via `metadataBase` and `alternates.canonical`
- **Internal Linking:** Cross-linking between situation pages, area pages, and core offer pages

## License

Private — All rights reserved.
