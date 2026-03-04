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
  LucideIcon,
} from "lucide-react";
import { situations } from "@/data/situations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  heading = "Your Situation, Our Solution",
  description = "We buy houses in a range of situations—no judgment, no pressure.",
}: SituationsGridProps = {}) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          {description}
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((situation) => {
            const IconComponent = iconMap[situation.icon] ?? Home;
            return (
              <Link
                key={situation.slug}
                href={`/situations/${situation.slug}`}
                className="group"
              >
                <Card className="h-full border-slate-200 bg-white transition-shadow hover:shadow-md group-hover:border-emerald-200">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-3 text-lg group-hover:text-emerald-700 transition-colors">
                      {situation.shortTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-slate-600 line-clamp-2">
                      {situation.description}
                    </CardDescription>
                    <span className="mt-2 inline-block text-sm font-medium text-emerald-700 group-hover:underline">
                      Learn more →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
