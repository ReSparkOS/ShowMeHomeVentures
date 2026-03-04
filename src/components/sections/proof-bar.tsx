import { MapPin, Clock, Eye, DollarSign, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProofStat {
  icon: LucideIcon;
  number: string;
  label: string;
}

const defaultStats: ProofStat[] = [
  {
    icon: MapPin,
    number: "Local",
    label: "Local Springfield Team",
  },
  {
    icon: Clock,
    number: "14-Day",
    label: "14-Day Average Close",
  },
  {
    icon: Eye,
    number: "100%",
    label: "100% Transparent Pricing",
  },
  {
    icon: DollarSign,
    number: "$2M+",
    label: "$2M+ in Offers Made",
  },
];

export interface ProofBarProps {
  stats?: ProofStat[];
  className?: string;
}

export function ProofBar({ stats = defaultStats, className }: ProofBarProps) {
  return (
    <section
      className={cn(
        "border-y border-slate-200 bg-slate-50 py-6 sm:py-8",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-xl">
                  {stat.number}
                </p>
                <p className="mt-0.5 text-sm text-slate-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
