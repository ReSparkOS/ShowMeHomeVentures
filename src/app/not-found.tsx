import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatPhone, siteConfig } from "@/lib/utils";

export default function NotFound() {
  const phoneDigits = siteConfig.phone.replace(/\D/g, "");

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-navy-600">
        We couldn&apos;t find the page you&apos;re looking for. Let&apos;s get
        you back on track.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" variant="accent">
          <Link href="/get-offer">Get My Cash Offer</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      <div className="mt-12 max-w-md text-left">
        <p className="text-sm font-semibold text-navy-950">
          Looking for one of these?
        </p>
        <ul className="mt-3 space-y-2 text-sm text-navy-600">
          <li>
            <Link href="/situations" className="text-brand-700 hover:underline">
              Selling situations
            </Link>{" "}
            — Inherited, foreclosure, divorce and more
          </li>
          <li>
            <Link
              href="/service-areas"
              className="text-brand-700 hover:underline"
            >
              Service areas
            </Link>{" "}
            — Springfield, Ozark, Nixa, Republic and more
          </li>
        </ul>
        <p className="mt-6 text-sm text-navy-600">
          Or call us at{" "}
          <a
            href={`tel:${phoneDigits}`}
            className="font-semibold text-brand-700 hover:underline"
          >
            {formatPhone(siteConfig.phone)}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
