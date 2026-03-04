---
name: on-page-seo-schema-builder
description: Write SEO titles, H1 tags, FAQ blocks, and JSON-LD structured data for local real estate pages. Use when building or auditing on-page SEO elements, generating schema markup (LocalBusiness, RealEstateAgent, FAQPage, Review, Service), creating FAQ sections, or optimizing page-level SEO for Springfield MO service and location pages.
---

# On-Page SEO + Schema Builder

## Context

Show Me Home Ventures — cash home buyer in Springfield, MO. Every page must have optimized on-page elements and correct structured data to maximize rich-result eligibility.

## On-Page SEO Elements

For every page, generate:

### 1. SEO Title (50-60 chars)

```
[Primary keyword] | Show Me Home Ventures — Springfield, MO
```

### 2. Meta Description (140-155 chars)

One compelling sentence + CTA. Include city name and primary keyword.

### 3. H1 (one per page, keyword-rich)

Must differ slightly from the title tag. Include location modifier.

### 4. Subheadings (H2-H3)

- H2s should target supporting keywords from the cluster.
- H3s break up long sections and can target FAQ-style queries.
- Use natural phrasing — no keyword stuffing.

### 5. FAQ Block

Add 4-6 FAQs per service and location page:

```html
<section class="faq">
  <h2>Frequently Asked Questions</h2>
  <details>
    <summary>How fast can you close on my house in [Town]?</summary>
    <p>We can close in as few as 7 days...</p>
  </details>
  <!-- repeat -->
</section>
```

FAQ content must answer real searcher questions. Source ideas from:
- "People also ask" patterns for the page's primary keyword
- Common seller objections (fees, timeline, condition, trust)

## JSON-LD Schema Templates

### LocalBusiness + RealEstateAgent

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RealEstateAgent"],
  "name": "Show Me Home Ventures",
  "description": "We buy houses for cash in Springfield, MO and surrounding areas. Any condition, no fees, fast closing.",
  "url": "https://showmehomeventures.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[street]",
    "addressLocality": "Springfield",
    "addressRegion": "MO",
    "postalCode": "[zip]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[lat]",
    "longitude": "[lng]"
  },
  "areaServed": [
    { "@type": "City", "name": "Springfield", "sameAs": "https://en.wikipedia.org/wiki/Springfield,_Missouri" },
    { "@type": "City", "name": "Ozark" },
    { "@type": "City", "name": "Nixa" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [],
  "image": "[logo-url]",
  "priceRange": "$$"
}
```

**Placement**: Homepage and `/about/` page in a `<script type="application/ld+json">` block.

### FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[answer text]"
      }
    }
  ]
}
```

**Placement**: Every page that has an FAQ section. Must exactly match the visible FAQ content.

### Service

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Cash Home Buying",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Show Me Home Ventures"
  },
  "areaServed": {
    "@type": "City",
    "name": "Springfield"
  },
  "description": "[service-specific description]"
}
```

**Placement**: Each service page.

### Review / AggregateRating

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Show Me Home Ventures",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[value]",
    "reviewCount": "[count]",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "[name]" },
      "reviewRating": { "@type": "Rating", "ratingValue": "[n]" },
      "reviewBody": "[text]"
    }
  ]
}
```

**Placement**: Testimonials page and homepage (if reviews are displayed).

## Page Checklist

When completing on-page SEO for any page, verify:

- [ ] Title tag: 50-60 chars, primary KW + location + brand
- [ ] Meta description: 140-155 chars, CTA included
- [ ] H1: one per page, keyword + location, differs from title
- [ ] H2/H3 hierarchy: logical, uses supporting keywords
- [ ] FAQ section: 4-6 Qs with `<details>/<summary>` markup
- [ ] LocalBusiness schema on homepage + about
- [ ] FAQPage schema matches visible FAQ content exactly
- [ ] Service schema on each service page
- [ ] Review/AggregateRating schema where reviews are shown
- [ ] All schema validates at https://validator.schema.org
- [ ] Open Graph tags: og:title, og:description, og:image, og:url
- [ ] Canonical URL is set and correct
- [ ] Images have descriptive alt text with location where natural
