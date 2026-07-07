import Link from "next/link";
import {
  Home,
  Wrench,
  Users,
  AlertTriangle,
  HeartCrack,
  Package,
  FileWarning,
  Building2,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { situations } from "@/data/situations";
import { Section, SectionHeading } from "@/components/ui/section";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Wrench,
  Users,
  AlertTriangle,
  HeartCrack,
  Package,
  FileWarning,
  Building2,
};

export interface SituationsGridProps {
  heading?: string;
  description?: string;
}

export function SituationsGrid({
  heading = "Common selling situations",
  description = "We buy houses in a range of situations, with no judgment and no pressure.",
}: SituationsGridProps = {}) {
  return (
    <Section tone="paper">
      <SectionHeading eyebrow="Every situation" title={heading} lead={description} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {situations.map((situation) => {
          const Icon = iconMap[situation.icon] ?? Home;
          return (
            <Link
              key={situation.slug}
              href={`/situations/${situation.slug}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
            >
              <span className="flex items-center gap-3">
                <Icon
                  className="h-5 w-5 shrink-0 text-navy-400 transition-colors group-hover:text-brand-700"
                  aria-hidden
                />
                <span className="font-medium text-navy-900 transition-colors group-hover:text-brand-800">
                  {situation.shortTitle}
                </span>
              </span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-navy-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600"
                aria-hidden
              />
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
