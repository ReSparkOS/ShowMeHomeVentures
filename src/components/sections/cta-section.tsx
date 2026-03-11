import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface CtaSectionProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
}

const defaultHeading = "Ready for an Offer You Can Actually Understand?";
const defaultSubheading =
  "Get your Open-Book Certainty Offer™—transparent numbers, a real closing date, and no surprises.";
const defaultCtaText = "Get My Open-Book Offer";
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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-20 lg:py-28">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-6 text-lg text-slate-300 sm:text-xl">
              {subheading}
            </p>
          )}
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-900/30 text-base px-8 py-6 h-auto group"
            >
              <Link href={ctaHref}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            {trustBullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
