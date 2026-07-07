"use client";

import { useEffect } from "react";

// Google Ads conversion event name for a completed lead-form submission.
// Registered as a conversion action in the Google Ads account and linked to
// the site's Google tag (AW-18305817967), so firing it reports the conversion.
const LEAD_FORM_EVENT =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_EVENT ||
  "ads_conversion_Submit_lead_form_1";

/**
 * Fires the Google Ads lead conversion once on mount. Rendered on the
 * thank-you page, which is only reached after a successful form submission.
 * Uses the standard gtag queue-stub so the event is recorded even if the
 * gtag.js library hasn't finished loading yet — it processes the queue on load.
 */
export function AdsConversion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as typeof window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    if (typeof w.gtag !== "function") {
      w.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments);
      };
    }
    w.gtag("event", LEAD_FORM_EVENT);
  }, []);

  return null;
}
