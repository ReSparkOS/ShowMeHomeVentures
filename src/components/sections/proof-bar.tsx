"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ProofStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const defaultStats: ProofStat[] = [
  {
    value: 50,
    suffix: "+",
    label: "Homes purchased",
  },
  {
    value: 14,
    suffix: "-day",
    label: "Average close",
  },
  {
    value: 0,
    prefix: "$",
    label: "Fees or commissions",
  },
  {
    value: 100,
    suffix: "%",
    label: "Of offers explained line by line",
  },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  active,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
}) {
  // Server-render (and no-JS) shows the real value; the count-up only runs
  // client-side once the bar scrolls into view.
  const [display, setDisplay] = useState(value);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!active || value === 0) return;
    setAnimating(true);
    const duration = 1200;
    const steps = 30;
    const increment = value / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setDisplay(Math.min(Math.round(increment * step), value));
      if (step >= steps) {
        clearInterval(timer);
        setAnimating(false);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span className={cn(animating && "tabular-nums")}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export interface ProofBarProps {
  stats?: ProofStat[];
  className?: string;
}

export function ProofBar({ stats = defaultStats, className }: ProofBarProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={cn("border-y border-navy-100 bg-paper py-10 sm:py-12", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <dd className="font-display text-4xl font-semibold tracking-tight text-navy-950 sm:text-[2.6rem]">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  active={inView}
                />
              </dd>
              <dt className="mt-2 text-sm font-medium text-navy-600">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
