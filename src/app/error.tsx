"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { formatPhone, siteConfig } from "@/lib/utils";
import { trackPhoneClick } from "@/lib/analytics";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  const phoneDigits = siteConfig.phone.replace(/\D/g, "");

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
        Something went wrong
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
        We hit an unexpected error
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-navy-600">
        Please try again. If the problem persists, contact us at{" "}
        <a
          href={`tel:${phoneDigits}`}
          className="font-semibold text-brand-700 hover:underline"
          onClick={() => trackPhoneClick("error_page")}
        >
          {formatPhone(siteConfig.phone)}
        </a>
        .
      </p>
      <div className="mt-8 flex gap-3">
        <Button size="lg" onClick={reset}>
          Try again
        </Button>
        <Button size="lg" variant="outline" asChild>
          {/* Full reload is intentional: recover from a crashed React tree. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/">Go home</a>
        </Button>
      </div>
    </section>
  );
}
