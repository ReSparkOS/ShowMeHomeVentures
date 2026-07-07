"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Animation variant */
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in";
  /** Only animate once */
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  animation = "fade-up",
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  // "idle" renders children fully visible (server HTML, no-JS, reduced motion,
  // and anything already in the viewport at hydration). Only elements still
  // below the fold get hidden and animated in — so SEO crawlers and the LCP
  // never see opacity-0 content.
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) return;

    // Defer to the next frame so we're not setting state synchronously in the
    // effect body. Below-fold elements aren't on screen, so the one-frame flash
    // of visible content before it hides is imperceptible.
    const raf = requestAnimationFrame(() => setState("hidden"));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          if (once) observer.unobserve(el);
        } else if (!once) {
          setState("hidden");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [once]);

  const baseStyles = "transition-all duration-700 ease-out";
  const isVisible = state !== "hidden";

  const animationStyles = {
    "fade-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "fade-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",
    "fade-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8",
    "scale-in": isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={cn(baseStyles, animationStyles[animation], className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
