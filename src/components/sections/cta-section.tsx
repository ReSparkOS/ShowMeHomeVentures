import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig, formatPhone } from "@/lib/utils";
import { PhoneTracker } from "@/components/seo/click-trackers";
import { ArrowRight, Phone } from "lucide-react";

export interface CtaSectionProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
}

const defaultHeading = "Ready for an offer you can actually understand?";
const defaultSubheading =
  "Transparent numbers, a real closing date, and no surprises. See what your house is worth today.";
const defaultCtaText = "Get My Cash Offer";
const defaultCtaHref = "/get-offer";

const trustBullets = [
  "No obligation",
  "Local team, not a call center",
  "We show you the math",
];

export function CtaSection({
  heading = defaultHeading,
  subheading = defaultSubheading,
  ctaText = defaultCtaText,
  ctaHref = defaultCtaHref,
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-navy-700/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-5 text-lg leading-relaxed text-navy-200 sm:text-xl">
              {subheading}
            </p>
          )}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="accent" size="lg" className="group">
              <Link href={ctaHref}>
                {ctaText}
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Button>
            <PhoneTracker
              phone={siteConfig.phone}
              location="cta_section"
              className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-brand-300"
            >
              <Phone className="h-4 w-4 text-brand-400" aria-hidden />
              {formatPhone(siteConfig.phone)}
            </PhoneTracker>
          </div>
          <ul className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-navy-300">
            {trustBullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-brand-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
