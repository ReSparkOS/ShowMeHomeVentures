/**
 * Lightweight GA4 event helper.
 * Falls back to a no-op when GA4 is not loaded (dev / no env var).
 */

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

/** Pre-defined conversion events */
export function trackFormSubmit(formName: string, extra?: EventParams) {
  trackEvent("form_submit", { form_name: formName, ...extra });
}

// Google Ads conversion label for a phone/contact click — the "Contact (tag)"
// conversion action created manually on the site's Google tag
// (AW-18305817967). Must be the full send_to value.
const ADS_CONTACT_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_SEND_TO ||
  "AW-18305817967/MysqCP-kg84cEO-68phE";

export function trackPhoneClick(location: string) {
  trackEvent("phone_click", { click_location: location });
  // Report a phone tap as a Google Ads "Contact" conversion.
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", { send_to: ADS_CONTACT_SEND_TO });
  }
}

export function trackCtaClick(ctaLabel: string, location: string) {
  trackEvent("primary_cta_click", { cta_label: ctaLabel, click_location: location });
}
