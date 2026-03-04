---
name: technical-seo-performance-audit
description: Audit and fix technical SEO and web performance issues for a Next.js site including Core Web Vitals, image optimization, lazy loading, caching, sitemap generation, robots.txt, and canonical URLs. Use when running performance audits, fixing CWV scores, optimizing images, configuring sitemaps or robots.txt, setting canonical rules, or improving page load speed.
---

# Technical SEO / Performance Audit

## Context

Show Me Home Ventures runs on **Next.js** (App Router). Audits and fixes target Core Web Vitals, crawlability, and page speed to maximize local search rankings.

## Audit Checklist

Run through each section. Output a prioritized fix list at the end.

### 1. Core Web Vitals

| Metric | Target | What to check |
|--------|--------|---------------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero image size, server response time, font loading |
| INP (Interaction to Next Paint) | < 200ms | JS bundle size, event handler efficiency, hydration cost |
| CLS (Cumulative Layout Shift) | < 0.1 | Image dimensions, dynamic content, font swap |

**Common Next.js fixes:**

- **LCP**: Use `next/image` with `priority` on hero images. Serve WebP/AVIF. Set explicit `width`/`height`.
- **INP**: Minimize client components. Use `React.lazy` + `Suspense` for below-fold widgets. Avoid large hydration payloads.
- **CLS**: Always set `width`/`height` or `fill` on `<Image>`. Use `font-display: swap` with `next/font`. Reserve space for dynamic content.

### 2. Image Strategy

```
Rules:
- ALL images through next/image (automatic optimization)
- Hero images: priority={true}, sizes prop set correctly
- Format: let Next.js serve WebP/AVIF automatically
- Lazy loading: default for all images below the fold
- Max source dimensions: 1920px wide for full-bleed, 800px for content
- Alt text: descriptive, include location where natural
- Filename convention: descriptive-slug.jpg (not IMG_3847.jpg)
```

### 3. Font Loading

```typescript
// In app/layout.tsx — use next/font for zero-CLS fonts
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
```

- Use `next/font` — no external font stylesheet requests.
- Limit to 2 font families max.
- Preload the primary font weight.

### 4. JavaScript / Bundle

- Check bundle size with `next build` output and `@next/bundle-analyzer`.
- Target: < 100KB first-load JS for landing pages.
- Move analytics/chat scripts behind `next/script` with `strategy="lazyOnload"`.
- Avoid importing full libraries — use tree-shakeable imports.

### 5. Caching & Headers

```typescript
// next.config.ts — example cache headers
const nextConfig = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ]
  },
}
```

### 6. Sitemap

Use `next-sitemap` or Next.js built-in `app/sitemap.ts`:

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://showmehomeventures.com'
  
  const staticPages = [
    '', '/about', '/how-it-works', '/testimonials', '/contact',
    '/sell-my-house-fast', '/we-buy-houses-springfield-mo',
    '/cash-home-buyers', '/sell-house-as-is', '/sell-inherited-house',
  ]

  const locationSlugs = [
    'springfield-mo', 'ozark-mo', 'nixa-mo', 'republic-mo',
    // ... all towns
  ]

  return [
    ...staticPages.map(page => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1.0 : 0.8,
    })),
    ...locationSlugs.map(slug => ({
      url: `${baseUrl}/locations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
```

### 7. Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/thank-you/'],
    },
    sitemap: 'https://showmehomeventures.com/sitemap.xml',
  }
}
```

### 8. Canonical URLs

```typescript
// In page metadata
export const metadata = {
  alternates: {
    canonical: 'https://showmehomeventures.com/sell-my-house-fast',
  },
}
```

Rules:
- Every page must have a canonical URL.
- Canonical should be the absolute URL with no trailing slash (pick one convention).
- Location pages: canonical is the location page itself (not the parent service page).
- Paginated pages: canonical points to page 1.

### 9. Redirects & 404s

- Set up redirects for any changed URLs in `next.config.ts`.
- Custom 404 page with search + links to top service pages.
- Monitor 404s via Google Search Console.

### 10. Meta Robots & Indexing

- Default: `index, follow` on all public pages.
- `noindex` on: thank-you pages, admin pages, preview/draft pages.
- Use `next/metadata` to set per-page.

## Prioritized Fix List Template

Output fixes in this format:

```
## Fix List

### P0 — Critical (blocks ranking or causes errors)
1. [Issue]: [specific problem] → [fix] → [file(s) to change]

### P1 — High (measurable ranking / speed impact)
1. [Issue]: [specific problem] → [fix] → [file(s) to change]

### P2 — Medium (best practice, incremental gain)
1. [Issue]: [specific problem] → [fix] → [file(s) to change]

### P3 — Low (nice to have)
1. [Issue]: [specific problem] → [fix] → [file(s) to change]
```

## Output Checklist

When delivering a technical SEO audit, include:

- [ ] Core Web Vitals assessment (LCP, INP, CLS)
- [ ] Image audit: format, sizing, alt text, lazy loading
- [ ] Font loading review
- [ ] Bundle size check
- [ ] Caching / header configuration
- [ ] Sitemap (generated and correct)
- [ ] Robots.txt (correct allow/disallow)
- [ ] Canonical URLs on all pages
- [ ] Redirect map for any changed URLs
- [ ] Prioritized fix list (P0-P3)
