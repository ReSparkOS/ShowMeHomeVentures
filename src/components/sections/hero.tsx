"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroProps {
  heading: string;
  subheading: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  showForm?: boolean;
  formSlot?: React.ReactNode;
  /** When provided, renders this instead of the primary CTA link (e.g. LeadFormDialog) */
  primaryCtaSlot?: React.ReactNode;
}

export function Hero({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  showForm = false,
  formSlot,
  primaryCtaSlot,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full bg-gradient-to-b from-slate-100 via-white to-white py-20 lg:py-28",
        showForm && "lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row lg:gap-12 lg:items-center">
        <div className={cn("max-w-3xl", showForm && "lg:max-w-2xl")}>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            {subheading}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            {primaryCtaSlot ? (
              primaryCtaSlot
            ) : (
              <Button asChild size="lg">
                <Link href={primaryCta.href}>{primaryCta.text}</Link>
              </Button>
            )}
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            No obligation · Free, honest evaluation · Close on your timeline
          </p>
        </div>
        {showForm && formSlot && (
          <div className="mt-12 lg:mt-0 lg:flex-1 lg:max-w-md">{formSlot}</div>
        )}
      </div>
    </section>
  );
}
