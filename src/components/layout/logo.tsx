import { cn } from "@/lib/utils";

export interface LogoMarkProps {
  className?: string;
}

/**
 * Brand mark: a line-drawn gable house on a navy tile with a gold door.
 * Inline SVG so it stays crisp at every size and needs no image request.
 */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-10 w-10", className)}
    >
      <rect width="40" height="40" rx="9" fill="#0e1c2b" />
      <path
        d="M8.5 21.5 20 11l11.5 10.5"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 20.5V29a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8.5"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="17.8" y="23.4" width="4.4" height="6.6" rx="0.9" fill="#d9b654" />
    </svg>
  );
}

export interface LogoProps {
  className?: string;
  /** Renders the wordmark for dark backgrounds (footer). */
  onDark?: boolean;
}

export function Logo({ className, onDark = false }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-semibold tracking-tight",
            onDark ? "text-white" : "text-navy-950"
          )}
        >
          Show-Me Home Ventures
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em]",
            onDark ? "text-navy-300" : "text-navy-500"
          )}
        >
          Springfield, Missouri
        </span>
      </span>
    </span>
  );
}
