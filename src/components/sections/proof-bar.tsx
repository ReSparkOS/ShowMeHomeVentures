"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MapPin, Clock, Eye, DollarSign, Home, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProofStat {
  icon: LucideIcon;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const defaultStats: ProofStat[] = [
  {
    icon: Home,
    value: 50,
    suffix: "+",
    label: "Homes Purchased",
  },
  {
    icon: Clock,
    value: 14,
    label: "Avg. Days to Close",
  },
  {
    icon: Eye,
    value: 100,
    suffix: "%",
    label: "Transparent Pricing",
  },
  {
    icon: DollarSign,
    value: 2,
    prefix: "$",
    suffix: "M+",
    label: "In Offers Made",
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
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setDisplay(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {prefix}
      {active ? display : 0}
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
      className={cn(
        "border-y border-slate-200 bg-white py-8 sm:py-10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center text-center transition-all duration-700",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-3 text-3xl font-bold text-slate-900 tabular-nums">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    active={inView}
                  />
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
