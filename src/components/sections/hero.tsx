"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";

export interface HeroProps {
  heading: string;
  subheading: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  showForm?: boolean;
  formSlot?: React.ReactNode;
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-24 lg:py-32",
        showForm && "lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
      )}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row lg:gap-12 lg:items-center">
        <div className={cn("max-w-3xl", showForm && "lg:max-w-2xl")}>
          {/* Trust badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200 backdrop-blur-sm transition-all duration-700",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
          >
            <Shield className="h-4 w-4" />
            Backed by Our No Surprise Pledge
          </div>

          <h1
            className={cn(
              "mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl transition-all duration-700 delay-100",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {heading}
          </h1>
          <p
            className={cn(
              "mt-6 text-lg text-slate-300 sm:text-xl transition-all duration-700 delay-200",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {subheading}
          </p>
          <div
            className={cn(
              "mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6 transition-all duration-700 delay-300",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {primaryCtaSlot ? (
              primaryCtaSlot
            ) : (
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/25">
                <Link href={primaryCta.href}>{primaryCta.text}</Link>
              </Button>
            )}
            <Button asChild variant="outline" size="lg" className="border-slate-500 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
            </Button>
          </div>
          <div
            className={cn(
              "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400 transition-all duration-700 delay-[400ms]",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {["No obligation", "Free, honest evaluation", "Close on your timeline"].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:inline text-slate-600">·</span>}
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
        {showForm && formSlot && (
          <div className="mt-12 lg:mt-0 lg:flex-1 lg:max-w-md">{formSlot}</div>
        )}
      </div>
    </section>
  );
}
