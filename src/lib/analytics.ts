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

/** Google Ads conversion event name for a phone/contact click. */
const ADS_CONTACT_EVENT =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_EVENT ||
  "ads_conversion_Contact_Us_1";

export function trackPhoneClick(location: string) {
  trackEvent("phone_click", { click_location: location });
  // Report a phone tap as a Google Ads "Contact" conversion.
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", ADS_CONTACT_EVENT);
  }
}

export function trackCtaClick(ctaLabel: string, location: string) {
  trackEvent("primary_cta_click", { cta_label: ctaLabel, click_location: location });
}
