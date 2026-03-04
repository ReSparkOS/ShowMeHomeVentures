"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export interface StickyMobileCtaProps {
  ctaText?: string;
  ctaHref?: string;
  scrollToId?: string;
}

export function StickyMobileCta({
  ctaText = "Get My Open-Book Offer",
  ctaHref = "/get-offer",
  scrollToId,
}: StickyMobileCtaProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (scrollToId) {
      e.preventDefault();
      const el = document.getElementById(scrollToId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    trackEvent("primary_cta_click", { location: "sticky_mobile" });
  };

  const handlePhoneClick = () => {
    trackEvent("phone_click", { location: "sticky_mobile" });
  };

  const phoneDigits = siteConfig.phone.replace(/\D/g, "");

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 px-4 py-3 shadow-lg lg:hidden"
      role="complementary"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-sm items-center gap-3">
        <Button
          asChild
          size="lg"
          className="flex-1 bg-blue-700 hover:bg-blue-800 text-white shadow-lg"
        >
          {scrollToId ? (
            <a href={`#${scrollToId}`} onClick={handleClick}>
              {ctaText}
            </a>
          ) : (
            <Link href={ctaHref} onClick={handleClick}>
              {ctaText}
            </Link>
          )}
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="shrink-0 border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white"
        >
          <a
            href={`tel:${phoneDigits}`}
            onClick={handlePhoneClick}
            aria-label={`Call us at ${siteConfig.phone}`}
          >
            <Phone className="h-5 w-5" />
          </a>
        </Button>
      </div>
      <p className="mt-1.5 text-center text-xs text-slate-400">
        No obligation · Free · Call or request online
      </p>
    </div>
  );
}
