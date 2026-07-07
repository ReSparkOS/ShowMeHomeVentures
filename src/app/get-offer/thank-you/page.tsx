import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig, formatPhone } from "@/lib/utils";
import { CheckCircle2, Phone } from "lucide-react";

// Conversion-only confirmation page: reached only after a successful lead
// submission. Kept out of the index so it stays a clean conversion signal.
export const metadata: Metadata = {
  title: "Thank You | Show-Me Home Ventures",
  description:
    "Thanks — we received your details and will reach out shortly with your cash offer.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  "We review your details and research the property.",
  "A local team member calls you within 2 hours during business hours.",
  "We walk you through a transparent, line-by-line offer.",
  "You pick a closing date — often in as few as 14 days.",
];

export default function ThankYouPage() {
  const phoneDigits = siteConfig.phone.replace(/\D/g, "");

  return (
    <>
      {/* Confirmation band */}
      <div className="relative overflow-hidden bg-navy-950 py-16 text-center sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[360px] w-[520px] rounded-full bg-navy-700/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
        />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-600/15 ring-1 ring-brand-400/30">
            <CheckCircle2 className="h-9 w-9 text-brand-400" aria-hidden />
          </span>
          <h1 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Thank you — we&apos;ve got your details
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-navy-200">
            Your request is in. A member of our local Springfield team will reach
            out shortly with the next steps toward your cash offer.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-navy-100 bg-paper p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950">
            What happens next
          </h2>
          <ol className="mt-6 space-y-4">
            {nextSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 text-navy-700">{text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Call now */}
        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-navy-600">
            Don&apos;t want to wait? Call us now and we&apos;ll get started.
          </p>
          <Button asChild variant="accent" size="lg">
            <a href={`tel:${phoneDigits}`}>
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {formatPhone(siteConfig.phone)}
            </a>
          </Button>
          <Link
            href="/"
            className="text-sm font-semibold text-brand-700 hover:underline"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
