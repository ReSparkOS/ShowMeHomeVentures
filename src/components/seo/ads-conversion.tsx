"use client";

import { useEffect } from "react";

// Google Ads conversion label for a completed lead-form submission — the
// "Submit lead form (tag)" conversion action created manually on the site's
// Google tag (AW-18305817967). Must be the full send_to value.
const LEAD_FORM_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO ||
  "AW-18305817967/K6LxCJGWg84cEO-68phE";

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
    w.gtag("event", "conversion", { send_to: LEAD_FORM_SEND_TO });
  }, []);

  return null;
}
