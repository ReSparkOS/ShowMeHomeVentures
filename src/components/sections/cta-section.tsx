import Link from "next/link";
import { Button } from "@/components/ui/button";

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
const defaultCtaHref = "/contact";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-6 text-lg text-slate-100 sm:text-xl">
              {subheading}
            </p>
          )}
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-200 sm:gap-x-6">
            {trustBullets.map((bullet, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 hidden text-blue-300 sm:inline" aria-hidden>
                    ·
                  </span>
                )}
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
