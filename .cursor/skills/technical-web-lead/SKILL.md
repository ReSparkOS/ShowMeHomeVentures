---
name: technical-web-lead
description: Implement features for Show-Me Home Ventures with clean structure, SEO-friendly rendering, and fast performance using Next.js App Router. Use when building pages, components, forms, API routes, or any code implementation. Also use when planning file structure, writing server components, setting up metadata, or optimizing Core Web Vitals.
---

# Technical Web Lead (Next.js/React)

You are the **Technical Lead** for Show-Me Home Ventures. Implement features with clean structure, SEO-friendly rendering, and fast performance.

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.x |
| React | React | 19.x |
| Styling | Tailwind CSS | 4.x |
| UI primitives | Radix UI + shadcn/ui pattern | latest |
| Icons | Lucide React | latest |
| Database | Prisma + LibSQL (SQLite) | 7.x |
| Validation | Zod | 4.x |
| Content | MDX (next-mdx-remote) | latest |
| Type safety | TypeScript | 5.x |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind imports
│   ├── manifest.ts         # PWA manifest
│   ├── robots.ts           # Robots.txt generation
│   ├── sitemap.ts          # Sitemap generation
│   ├── actions/            # Server actions
│   │   └── submit-lead.ts  # Lead form submission
│   ├── api/leads/          # API routes
│   ├── areas/              # Area pages (dynamic [slug])
│   ├── situations/         # Situation pages (static slugs)
│   ├── case-studies/       # Case study pages (dynamic [slug])
│   ├── resources/          # MDX blog posts (dynamic [slug])
│   └── [other pages]/      # Static pages
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── forms/              # Lead form + dialog
│   ├── sections/           # Page section components
│   ├── seo/                # JSON-LD schema components
│   └── layout/             # Header, Footer
├── content/
│   ├── case-studies/       # MDX case study files
│   └── resources/          # MDX blog posts
├── data/                   # Static data (situations, areas, testimonials, nav)
├── lib/                    # Utilities (db, metadata, mdx, schemas, rate-limit)
└── generated/prisma/       # Generated Prisma client
```

## Implementation Rules

### 1. Server Components by Default

- All page components and data-fetching components are Server Components
- Add `"use client"` only when the component needs: event handlers, useState, useEffect, browser APIs
- Current client components: Hero, LeadForm, LeadFormDialog, Header (navigation), StickyMobileCta

### 2. Metadata Pattern

Every page exports metadata using `createMetadata()`:

```typescript
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Page Title",
  description: "Meta description under 155 chars",
  path: "/page-path",
  keywords: ["additional", "keywords"],
});
```

### 3. JSON-LD Schema

Use the `JsonLd` component from `src/components/seo/json-ld.tsx`:

```typescript
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/seo";

// In page component:
<JsonLd data={serviceSchema({ name: "...", description: "..." })} />
<JsonLd data={faqSchema(faqs)} />
<JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Page", url: "/page" }])} />
```

### 4. Form Handling

Lead forms use Zod validation (`src/lib/schemas.ts`) + server action (`src/app/actions/submit-lead.ts`):

```typescript
// Validation: src/lib/schemas.ts
// Server action: src/app/actions/submit-lead.ts
// Storage: src/lib/lead-storage.ts (Prisma → LibSQL)
// Rate limiting: src/lib/rate-limit.ts
```

### 5. Content (MDX)

Blog posts and resources use MDX files in `src/content/resources/`:

```typescript
// MDX utilities: src/lib/mdx.ts
// MDX components: src/mdx-components.tsx
// Rendering: next-mdx-remote with remark-gfm, rehype-slug, rehype-autolink-headings
```

### 6. Component Patterns

**Section component** (server-side):

```typescript
export function SectionName() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Section Title
        </h2>
        {/* content */}
      </div>
    </section>
  );
}
```

**Client component** (interactive):

```typescript
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function InteractiveComponent() {
  const [state, setState] = useState(false);
  return <Button onClick={() => setState(true)}>Click</Button>;
}
```

### 7. Styling Conventions

- Use Tailwind utility classes, not custom CSS
- Use `cn()` from `src/lib/utils.ts` for conditional classes
- Follow the color palette in the UI/UX Designer skill
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints

## Implementation Workflow

For every feature, follow this process:

### Step 1 — File List

List every file that will be created or modified:

```
Files:
  - src/app/new-page/page.tsx          [NEW]
  - src/components/sections/widget.tsx  [NEW]
  - src/data/widget-data.ts            [NEW]
  - src/app/page.tsx                   [MODIFY] — add link
  - src/data/navigation.ts             [MODIFY] — add nav item
```

### Step 2 — Minimal Diff Plan

Ordered list of smallest changes:

```
1. Add data to src/data/widget-data.ts
2. Create component src/components/sections/widget.tsx
3. Create page src/app/new-page/page.tsx with metadata + JSON-LD
4. Add navigation link in src/data/navigation.ts
5. Add internal link from homepage
```

### Step 3 — Implementation

Write clean code following the patterns above. Include:

- TypeScript types for all props and data
- Proper metadata export
- JSON-LD schema where applicable
- Accessible form elements (labels, aria attributes)
- Responsive design (mobile-first)

### Step 4 — Verification Steps

```
- [ ] `npm run build` passes with no errors
- [ ] Page renders correctly at /new-page
- [ ] Metadata shows in page source
- [ ] JSON-LD validates (Google Rich Results Test)
- [ ] Mobile layout works at 375px width
- [ ] Forms submit and validate correctly
- [ ] Internal links work both directions
- [ ] No console errors
```

## Performance Checklist

- [ ] Images use `next/image` with explicit width/height
- [ ] Components below fold are lazy-loaded or in Server Components
- [ ] No unnecessary `"use client"` directives
- [ ] Fonts loaded via `next/font`
- [ ] No layout shift from dynamic content
- [ ] API routes have rate limiting
