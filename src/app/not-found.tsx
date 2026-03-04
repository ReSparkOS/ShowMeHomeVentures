import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-lg text-slate-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back on
        track.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/get-offer">Get Your Offer</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>

      <div className="mt-12 max-w-md text-left">
        <p className="text-sm font-medium text-slate-900">Looking for one of these?</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>
            <Link href="/how-it-works" className="text-blue-700 hover:underline">
              How It Works
            </Link>{" "}
            — See our 4-step process
          </li>
          <li>
            <Link href="/open-book-certainty-offer" className="text-blue-700 hover:underline">
              Open-Book Certainty Offer™
            </Link>{" "}
            — Our transparent pricing model
          </li>
          <li>
            <Link href="/situations" className="text-blue-700 hover:underline">
              Selling Situations
            </Link>{" "}
            — Inherited, foreclosure, divorce &amp; more
          </li>
          <li>
            <Link href="/areas" className="text-blue-700 hover:underline">
              Areas We Serve
            </Link>{" "}
            — Springfield, Ozark, Nixa, Republic &amp; more
          </li>
          <li>
            <Link href="/resources" className="text-blue-700 hover:underline">
              Resources &amp; Guides
            </Link>{" "}
            — Helpful articles for homeowners
          </li>
        </ul>
      </div>
    </section>
  );
}
