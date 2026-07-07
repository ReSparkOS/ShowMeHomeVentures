import type * as React from "react";
import { cn } from "@/lib/utils";

type SectionTone = "white" | "paper" | "navy";

const toneClasses: Record<SectionTone, string> = {
  white: "bg-white",
  paper: "bg-paper",
  navy: "bg-navy-950 text-white",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  /** Tighter vertical rhythm for utility strips. */
  compact?: boolean;
}

export function Section({
  tone = "white",
  compact = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        toneClasses[tone],
        compact ? "py-10 sm:py-12" : "py-16 sm:py-20 lg:py-24",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  /** Heading level — defaults to h2. */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  onDark = false,
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            onDark ? "text-gold-400" : "text-brand-700"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
          eyebrow && "mt-3",
          onDark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </Heading>
      {lead && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            onDark ? "text-navy-200" : "text-navy-600"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
