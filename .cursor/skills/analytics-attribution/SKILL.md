---
name: analytics-attribution
description: Define funnel KPIs and implement GA4/GTM events for Show-Me Home Ventures. Use when setting up analytics tracking, form submission events, phone call tracking, CTA click events, conversion funnels, or reporting dashboards. Also use when evaluating which pages or channels drive leads.
---

# Analytics & Attribution Agent

You are **Analytics** for Show-Me Home Ventures (Springfield, MO cash home buyer).

## Conversion Funnel

```
Visit → Page View → CTA Click → Form Start → Form Submit → Lead → Qualified → Offer → Close
  ↳ Phone Call ────────────────────────────────────────────↗
```

### Funnel KPIs

| Stage | Metric | Target | Measurement |
|-------|--------|--------|-------------|
| Awareness | Organic sessions | Growing MoM | GA4 sessions, source=organic |
| Engagement | Pages/session | > 2.0 | GA4 engagement |
| Interest | CTA click rate | > 5% of sessions | Custom event: `cta_click` |
| Intent | Form start rate | > 30% of CTA clicks | Custom event: `form_start` |
| Conversion | Form submit rate | > 50% of form starts | Custom event: `form_submit` |
| Phone | Call click rate | Track all | Custom event: `phone_click` |

## GA4 Event Schema

### Standard Events

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `page_view` | Every page load | `page_location`, `page_title` (automatic) |
| `cta_click` | Any CTA button/link click | `cta_text`, `cta_location`, `cta_destination` |
| `form_start` | First interaction with lead form | `form_id`, `form_location` |
| `form_submit` | Successful lead form submission | `form_id`, `form_location`, `lead_source` |
| `form_error` | Form validation failure | `form_id`, `error_type` |
| `phone_click` | Click on phone number link | `phone_location` |
| `dialog_open` | Lead form dialog opened | `trigger_location` |
| `dialog_close` | Lead form dialog closed without submit | `trigger_location`, `time_open_seconds` |

### Event Parameter Definitions

| Parameter | Type | Values |
|-----------|------|--------|
| `cta_text` | string | Button/link text, e.g. "Get My Open-Book Offer" |
| `cta_location` | string | Section identifier: `hero`, `bottom_cta`, `sticky_mobile`, `situation_page` |
| `cta_destination` | string | Target URL or action: `/contact`, `dialog`, `tel:` |
| `form_id` | string | `lead_form_inline`, `lead_form_dialog`, `contact_form` |
| `form_location` | string | Page path: `/`, `/situations/inherited-house`, etc. |
| `lead_source` | string | `organic`, `direct`, `referral`, `paid` (from UTM or referrer) |
| `error_type` | string | `validation`, `server`, `rate_limit` |

## GTM Implementation

### Container Setup

```
GTM Container: GTM-XXXXXXX
GA4 Measurement ID: G-XXXXXXXX
```

### Tags

| Tag Name | Type | Trigger | Notes |
|----------|------|---------|-------|
| GA4 Config | GA4 Configuration | All Pages | Base configuration |
| GA4 — CTA Click | GA4 Event | CTA Click trigger | `cta_click` event |
| GA4 — Form Start | GA4 Event | Form Start trigger | `form_start` event |
| GA4 — Form Submit | GA4 Event | Form Submit trigger | `form_submit` event + conversion |
| GA4 — Phone Click | GA4 Event | Phone Click trigger | `phone_click` event |
| GA4 — Dialog Open | GA4 Event | Dialog Open trigger | `dialog_open` event |

### Triggers

| Trigger Name | Type | Condition |
|-------------|------|-----------|
| CTA Click | Custom Event | `event = cta_click` |
| Form Start | Custom Event | `event = form_start` |
| Form Submit | Custom Event | `event = form_submit` |
| Phone Click | Click — Just Links | `href contains "tel:"` |
| Dialog Open | Custom Event | `event = dialog_open` |

### Data Layer Push (Code-Side)

Implement in the Next.js components:

```typescript
// Utility function — src/lib/analytics.ts
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, params: Record<string, string> = {}) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({ event, ...params });
  }
}
```

Usage in components:

```typescript
// CTA click
trackEvent("cta_click", {
  cta_text: "Get My Open-Book Offer",
  cta_location: "hero",
  cta_destination: "dialog",
});

// Form start (on first input focus)
trackEvent("form_start", {
  form_id: "lead_form_inline",
  form_location: window.location.pathname,
});

// Form submit (on successful submission)
trackEvent("form_submit", {
  form_id: "lead_form_inline",
  form_location: window.location.pathname,
  lead_source: getLeadSource(),
});
```

## UTM Parameter Strategy

### Standard UTMs

| Campaign Type | Source | Medium | Campaign |
|--------------|--------|--------|----------|
| GBP posts | google | organic_social | gbp_post_[topic] |
| Facebook | facebook | paid_social | fb_[audience]_[creative] |
| Direct mail | direct_mail | offline | dm_[area]_[date] |
| Referral partner | [partner] | referral | ref_[partner_name] |

### UTM Capture

Store UTM params on first visit (localStorage) and attach to lead form submissions:

```typescript
// On page load — capture UTMs
const params = new URLSearchParams(window.location.search);
const utms = ["utm_source", "utm_medium", "utm_campaign"];
utms.forEach((key) => {
  const val = params.get(key);
  if (val) localStorage.setItem(key, val);
});
```

## Reporting Dashboard Spec

### Weekly Dashboard (Google Looker Studio or Sheets)

| Section | Metrics | Source |
|---------|---------|--------|
| Traffic | Sessions, new users, top pages | GA4 |
| Sources | Sessions by source/medium | GA4 |
| Conversions | Form submits, phone clicks, conversion rate | GA4 custom events |
| Content | Top blog posts by sessions, avg. time on page | GA4 |
| Funnel | Visit → CTA Click → Form Start → Submit (with drop-off %) | GA4 funnel exploration |
| Leads | Total leads, source breakdown, situation type | Prisma DB / Sheets |

### Monthly Review Metrics

| KPI | How to Measure |
|-----|---------------|
| Cost per lead | Ad spend / form_submit count |
| Top converting pages | form_submit count by page_location |
| Organic keyword rankings | Google Search Console |
| GBP performance | GBP Insights: views, clicks, calls, directions |
| Content ROI | Sessions per blog post, form_submits attributed to resources |

## Conversion Marking

Mark these as GA4 conversions:

1. `form_submit` — primary conversion
2. `phone_click` — secondary conversion

## Implementation Checklist

- [ ] Create `src/lib/analytics.ts` with `trackEvent()` utility
- [ ] Add GTM script to `src/app/layout.tsx` (via `next/script`)
- [ ] Add `cta_click` tracking to Hero, CtaSection, StickyMobileCta
- [ ] Add `form_start` tracking to LeadForm (first field focus)
- [ ] Add `form_submit` tracking to submit-lead server action success callback
- [ ] Add `phone_click` tracking to any `tel:` links
- [ ] Add `dialog_open`/`dialog_close` tracking to LeadFormDialog
- [ ] Capture UTM params in localStorage on page load
- [ ] Attach UTM params to lead form submission data
- [ ] Configure GA4 conversions for form_submit and phone_click
- [ ] Build Looker Studio dashboard with funnel visualization
