---
name: conversion-funnel-lead-form
description: Build high-converting landing pages, lead capture forms, and follow-up flows for a local home-buying business. Use when designing landing pages, building lead forms, reducing form friction, creating thank-you pages, writing form microcopy, planning follow-up sequences, or optimizing conversion funnels.
---

# Conversion Funnel / Lead Form Skill

## Context

Show Me Home Ventures buys houses for cash in Springfield, MO. Every landing page exists to capture one lead. The seller audience is often stressed (foreclosure, inherited house, bad tenants) — forms must feel fast, safe, and judgment-free.

## Landing Page Structure

Every landing page follows this single-CTA architecture:

```
1. Hero
   - Headline: benefit-driven, addresses the seller's pain
   - Subheadline: "No repairs. No fees. Close in as few as 7 days."
   - Primary CTA button (above the fold)

2. Trust bar
   - Star rating + review count
   - "BBB Accredited" / "Locally Owned" / "100+ Houses Bought"

3. How It Works (3 steps)
   - Step 1: Tell us about your house
   - Step 2: Get a cash offer in 24 hours
   - Step 3: Close on your timeline

4. Social proof
   - 1-2 short testimonials with name + city

5. FAQ section (4-6 Qs)

6. Final CTA block
   - Repeat the form or a large CTA button
   - Urgency/reassurance line: "No obligation — get your offer today."
```

Rules:
- ONE primary CTA per page. Do not split attention.
- No navigation menu on dedicated landing pages (minimal header).
- Mobile-first: CTA must be thumb-reachable.

## Lead Form Design

### Recommended Fields (minimum friction)

**Step 1 (visible on load):**

| Field | Type | Required | Microcopy |
|-------|------|----------|-----------|
| Property address | text + autocomplete | yes | "Where is the property?" |
| Name | text | yes | "What's your name?" |
| Phone | tel | yes | "Best number to reach you" |
| Email | email | no | "For your offer details" |

**Step 2 (show after step 1, optional expansion):**

| Field | Type | Required | Microcopy |
|-------|------|----------|-----------|
| Property condition | select | no | "How would you describe the property?" — options: Good / Fair / Needs Work / Major Repairs |
| Timeline | select | no | "When do you need to sell?" — options: ASAP / 1-3 months / 3-6 months / Just exploring |
| Situation | select | no | "What's your situation?" — options: Inherited / Foreclosure / Divorce / Downsizing / Landlord / Other |

### Friction Reduction Rules

- Never ask for more than 4 fields on initial view.
- Use a multi-step form (wizard) to reveal optional fields after the lead commits.
- Every field has conversational microcopy (not just a label).
- Phone field uses `type="tel"` with input masking.
- Address field should use autocomplete (Google Places or similar).
- Submit button text: "Get My Cash Offer" (never generic "Submit").
- Below the button: "No obligation. No fees. We'll call within 24 hours."
- Add a privacy reassurance line: "We respect your privacy. Your info is never shared."

### Validation & Error UX

- Inline validation — show errors next to the field, not in a top banner.
- Friendly error copy: "We need your phone number so we can send your offer."
- Do not clear the form on error.

## Thank-You Page

After form submission, redirect to `/thank-you/` with:

```
1. Confirmation headline
   "We Got Your Info — Here's What Happens Next"

2. "What happens next" section (3 steps)
   - Step 1: "We'll review your property details"
   - Step 2: "You'll receive a call from [name] within 24 hours"
   - Step 3: "If you like the offer, pick your closing date — we handle the rest"

3. Contact fallback
   - "Can't wait? Call us now: [phone]"
   - "Or text us at [phone]"

4. Trust reinforcement
   - Short testimonial or "Rated 5 stars by [n] homeowners"

5. Secondary content (optional)
   - Link to "How It Works" page
   - Link to blog post matching their situation
```

Rules:
- No form on the thank-you page (they already submitted).
- Track the thank-you page view as a conversion event.
- If using URL params (e.g., `?source=google`), preserve them for attribution.

## Follow-Up Flow

After a lead submits, the business should execute:

| Timing | Channel | Message |
|--------|---------|---------|
| Immediate | Email (auto) | "Thanks [name] — we received your request for [address]. Expect a call within 24 hours." |
| < 5 min | Phone (manual) | Call the lead. Speed-to-lead is critical. |
| 1 hour (if no answer) | SMS (auto) | "Hi [name], this is [rep] from Show Me Home Ventures. I'd love to discuss your property at [address]. When's a good time?" |
| 24 hours | Email (auto) | "Still thinking about selling [address]? Here's what sellers like you are saying..." + testimonial |
| 3 days | SMS / email | Gentle follow-up with a blog link relevant to their situation tag |

## Output Checklist

When building a conversion funnel, deliver:

- [ ] Landing page wireframe / component structure
- [ ] Form fields with types, required flags, and microcopy
- [ ] Submit button copy + reassurance line
- [ ] Thank-you page layout and "what happens next" copy
- [ ] Follow-up sequence (timing + channel + message sketch)
- [ ] Conversion event to track (page view, form submit, phone click)
- [ ] Mobile responsiveness notes
