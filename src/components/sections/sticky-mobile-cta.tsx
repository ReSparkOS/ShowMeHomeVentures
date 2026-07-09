"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { trackEvent, trackPhoneClick } from "@/lib/analytics";

export interface StickyMobileCtaProps {
  ctaText?: string;
  ctaHref?: string;
  scrollToId?: string;
}

export function StickyMobileCta({
  ctaText = "Get My Cash Offer",
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
    trackPhoneClick("sticky_mobile");
  };

  const phoneDigits = siteConfig.phone.replace(/\D/g, "");

  return (
    <>
      {/* In-flow spacer so the fixed bar never covers the end of the page */}
      <div className="h-[72px] lg:hidden" aria-hidden />
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-navy-950/95 px-4 py-3 backdrop-blur lg:hidden"
        role="complementary"
        aria-label="Quick actions"
      >
        <div className="mx-auto flex max-w-sm items-center gap-3">
          <Button asChild variant="accent" size="lg" className="flex-1">
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
            className="shrink-0 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
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
      </div>
    </>
  );
}
