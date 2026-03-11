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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const baseStyles = "transition-all duration-700 ease-out";

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
