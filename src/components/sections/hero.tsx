import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/utils";
import { PhoneTracker } from "@/components/seo/click-trackers";
import { ShieldCheck, Phone } from "lucide-react";

export interface HeroProps {
  heading: string;
  subheading: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  showForm?: boolean;
  formSlot?: React.ReactNode;
  primaryCtaSlot?: React.ReactNode;
  /** Renders the address-capture offer card beside the copy. */
  addressCapture?: boolean;
  /** Overrides the badge line above the heading. */
  badge?: string;
}

const heroChecks = ["No fees or commissions", "No repairs needed", "Close on your timeline"];

function AddressCaptureCard() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white p-6 shadow-2xl shadow-navy-950/40 sm:p-7">
      <p className="font-display text-xl font-semibold tracking-tight text-navy-950">
        See what your house is worth
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
        Free, no-obligation cash offer with every number explained.
      </p>
      <form action="/get-offer" method="get" className="mt-5">
        <label
          htmlFor="hero-address"
          className="block text-xs font-semibold uppercase tracking-wide text-navy-700"
        >
          Property address
        </label>
        <input
          id="hero-address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="123 Main St, Springfield, MO"
          className="mt-1.5 h-12 w-full rounded-lg border border-navy-200 bg-white px-4 text-base text-navy-900 placeholder:text-navy-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
        />
        <Button type="submit" variant="accent" size="lg" className="mt-3 w-full">
          Get My Cash Offer
        </Button>
      </form>
      <ul className="mt-5 space-y-2 border-t border-navy-100 pt-4">
        {[
          "Response within 2 business hours",
          "See the full math behind your offer",
          "Pick a closing date we put in writing",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-sm text-navy-500">
        Prefer to talk?{" "}
        <PhoneTracker
          phone={siteConfig.phone}
          location="hero_address_card"
          className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden />
          {siteConfig.phone}
        </PhoneTracker>
      </p>
    </div>
  );
}

export function Hero({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  showForm = false,
  formSlot,
  primaryCtaSlot,
  addressCapture = false,
  badge = "Backed by our No Surprise Pledge",
}: HeroProps) {
  const hasAside = addressCapture || (showForm && formSlot);

  return (
    <section className="relative w-full overflow-hidden bg-navy-950">
      {/* Soft depth: single restrained glow, no gradient soup */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[640px] rounded-full bg-navy-700/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
      />

      <div
        className={cn(
          "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          hasAside ? "py-16 lg:py-24" : "py-16 lg:py-20"
        )}
      >
        <div
          className={cn(
            hasAside &&
              "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16"
          )}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-navy-100">
              <ShieldCheck className="h-4 w-4 text-gold-400" aria-hidden />
              {badge}
            </div>

            <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              {heading}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200 sm:text-xl">
              {subheading}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              {primaryCtaSlot ? (
                primaryCtaSlot
              ) : (
                <Button asChild variant="accent" size="lg">
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:border-white/40 hover:bg-white/10"
              >
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy-300">
              {heroChecks.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-brand-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {hasAside && (
            <div className="w-full lg:justify-self-end">
              {showForm && formSlot ? formSlot : <AddressCaptureCard />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
