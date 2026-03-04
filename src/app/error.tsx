"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
        Something went wrong
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        We hit an unexpected error
      </h1>
      <p className="mt-4 max-w-md text-lg text-slate-600">
        Please try again. If the problem persists, contact us at{" "}
        <a
          href="tel:4172585577"
          className="font-medium text-blue-700 hover:underline"
        >
          (417) 258-5577
        </a>
        .
      </p>
      <div className="mt-8 flex gap-3">
        <Button size="lg" onClick={reset}>
          Try Again
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="/">Go Home</a>
        </Button>
      </div>
    </section>
  );
}
