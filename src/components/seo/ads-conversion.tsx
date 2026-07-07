"use client";

import { useEffect } from "react";

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18305817967";
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

/**
 * Fires the Google Ads lead conversion once on mount. Rendered on the
 * thank-you page, which is only reached after a successful form submission —
 * so firing here (via client-side navigation) is the reliable signal, rather
 * than relying on a URL-based rule that a single-page transition wouldn't trip.
 *
 * Requires the conversion label from the Google Ads conversion action's event
 * snippet (the part after "AW-XXXX/"). No-ops until that is provided, so the
 * base tag can ship independently.
 */
export function AdsConversion() {
  useEffect(() => {
    if (!CONVERSION_LABEL) return;
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", "conversion", {
      send_to: `${ADS_ID}/${CONVERSION_LABEL}`,
    });
  }, []);

  return null;
}
