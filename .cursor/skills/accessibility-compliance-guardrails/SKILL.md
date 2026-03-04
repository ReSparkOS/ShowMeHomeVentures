---
name: accessibility-compliance-guardrails
description: Enforce WCAG accessibility standards and basic legal compliance for a business website including contrast checks, focus states, form labels, ARIA attributes, privacy policy requirements, and cookie consent. Use when auditing accessibility, fixing WCAG issues, adding ARIA labels, checking color contrast, building privacy or terms pages, implementing cookie banners, or reviewing compliance requirements.
---

# Accessibility + Compliance Guardrails

## Context

Show Me Home Ventures must meet WCAG 2.1 AA as a baseline and include required legal/compliance pages. This skill provides checklists and code-level guidance for a Next.js site.

## WCAG 2.1 AA Checklist

### Perceivable

#### Color Contrast
- **Normal text** (< 18px or < 14px bold): contrast ratio >= 4.5:1
- **Large text** (>= 18px or >= 14px bold): contrast ratio >= 3:1
- **UI components / graphical objects**: contrast ratio >= 3:1 against adjacent colors
- **Don't rely on color alone** to convey information (add icons, text, or patterns)

Check with: browser DevTools (Accessibility tab), or [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

#### Images
- Every `<img>` / `next/image` has a meaningful `alt` attribute
- Decorative images: `alt=""` (empty, not omitted)
- Complex images (charts, infographics): provide a text alternative nearby

#### Video / Audio (if used)
- Provide captions for video
- Provide transcripts for audio-only content

### Operable

#### Keyboard Navigation
- All interactive elements reachable via Tab key
- Logical tab order (follows visual layout)
- No keyboard traps — users can always Tab away
- Skip-to-content link as the first focusable element:

```tsx
// In app/layout.tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2">
  Skip to main content
</a>
// ...
<main id="main-content">
```

#### Focus States
- Every focusable element has a **visible focus indicator**
- Never use `outline: none` without a replacement
- Recommended Tailwind approach:

```css
/* In globals.css */
*:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

#### Motion
- Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Understandable

#### Forms
Every form field must have:

```tsx
<div>
  <label htmlFor="phone" className="block text-sm font-medium">
    Phone number
  </label>
  <input
    id="phone"
    name="phone"
    type="tel"
    aria-describedby="phone-help"
    aria-required="true"
    aria-invalid={errors.phone ? "true" : "false"}
  />
  <p id="phone-help" className="text-sm text-gray-500">
    Best number to reach you
  </p>
  {errors.phone && (
    <p role="alert" className="text-sm text-red-600">
      {errors.phone}
    </p>
  )}
</div>
```

Rules:
- Every input has a visible `<label>` with matching `htmlFor`/`id`
- Help text connected via `aria-describedby`
- Required fields marked with `aria-required="true"`
- Errors announced with `role="alert"` or `aria-live="polite"`
- Error messages reference the specific field and how to fix it

#### Language
- Set `lang="en"` on the `<html>` element
- If content includes Spanish sections, wrap in `<span lang="es">`

#### Error Prevention
- Confirm before submitting (or make it easy to undo)
- Don't auto-submit forms
- Show a clear success state after form submission

### Robust

#### Semantic HTML
- Use correct heading hierarchy: one `<h1>` per page, then `<h2>`, `<h3>` in order
- Use `<nav>`, `<main>`, `<aside>`, `<footer>` landmarks
- Use `<button>` for actions, `<a>` for navigation (not `<div onclick>`)
- Lists use `<ul>`/`<ol>` + `<li>`

#### ARIA (use sparingly — prefer native HTML)

| Pattern | ARIA attributes |
|---------|----------------|
| Mobile menu toggle | `aria-expanded`, `aria-controls`, `aria-label` |
| FAQ accordion | `aria-expanded` on trigger, `aria-hidden` on panel |
| Modal / dialog | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Loading state | `aria-busy="true"`, `aria-live="polite"` |
| Icon-only button | `aria-label="[action description]"` |

## Required Site Pages

### 1. Privacy Policy (`/privacy-policy/`)

Must cover:
- What data is collected (form submissions, cookies, analytics)
- How data is used (contact the seller, internal use only)
- Third-party services (GA4, GTM, any CRM, call tracking)
- Cookie usage and types
- User rights (access, deletion — reference applicable state laws)
- Contact information for privacy questions
- Last updated date

### 2. Terms of Service (`/terms/`)

Must cover:
- Site usage terms
- Disclaimer: "Not a licensed real estate agent/broker" (if applicable)
- No guarantee of offer amounts
- Limitation of liability
- Governing law (Missouri)

### 3. Accessibility Statement (`/accessibility/`)

```markdown
## Accessibility Statement

Show Me Home Ventures is committed to making our website accessible to 
all visitors. We aim to meet WCAG 2.1 Level AA standards.

If you experience any difficulty accessing our site, please contact us:
- Phone: [phone]
- Email: [email]

We welcome your feedback and will work to address any accessibility 
barriers promptly.

Last updated: [date]
```

### 4. Equal Housing / Fair Housing Notice

If applicable, include the Equal Housing logo and statement:

```
We are pledged to the letter and spirit of U.S. policy for the 
achievement of equal housing opportunity throughout the Nation.
```

## Cookie Consent

For a basic U.S.-focused site:

```tsx
// components/CookieBanner.tsx
// Show a non-blocking banner at bottom of page
// - "We use cookies to improve your experience and analyze site traffic."
// - Link to /privacy-policy/
// - "Accept" button (sets cookie to suppress banner)
// - "Manage preferences" link (optional — for GDPR if expanding)
```

Rules:
- Don't block page content with the banner
- Don't load GA4/GTM before consent if targeting EU visitors
- Store consent preference in a cookie (e.g., `cookie_consent=accepted`)
- Banner should not cause CLS (reserve space or use fixed positioning)

## Audit Output Template

```
## Accessibility Audit — [page name]

### Issues Found

| # | Severity | WCAG Criterion | Issue | Fix |
|---|----------|---------------|-------|-----|
| 1 | Critical | 1.4.3 Contrast | Button text #999 on #fff = 2.8:1 | Change to #595959 (7:1) |
| 2 | Serious | 1.3.1 Info & Relationships | Form inputs missing labels | Add <label> with htmlFor |
| 3 | Moderate | 2.4.7 Focus Visible | No focus style on nav links | Add focus-visible outline |
| 4 | Minor | 1.1.1 Non-text Content | Hero image alt is "image1" | Change to descriptive alt |

### Required Pages Status

- [ ] /privacy-policy/ — exists and current
- [ ] /terms/ — exists and current
- [ ] /accessibility/ — exists
- [ ] Cookie banner — implemented
- [ ] Equal Housing notice — present (if applicable)
```

## Output Checklist

When delivering an accessibility/compliance review:

- [ ] WCAG checklist results (pass/fail per criterion)
- [ ] Contrast issues with specific color values + fixes
- [ ] Focus state audit
- [ ] Form accessibility audit (labels, ARIA, errors)
- [ ] Semantic HTML / heading hierarchy check
- [ ] Required pages list with status
- [ ] Cookie consent implementation status
- [ ] Prioritized fix list
