import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const lineItems = [
  {
    label: "After-Repair Value (ARV)",
    value: "$185,000 – $195,000",
    highlight: false,
    explanation:
      "What your home could sell for after renovations, based on recent comparable sales in your area.",
  },
  {
    label: "Estimated Renovation Costs",
    value: "-$32,000 – -$40,000",
    highlight: false,
    explanation:
      "Materials, labor, permits, and contingency. We share the contractor bids.",
  },
  {
    label: "Holding & Transaction Costs",
    value: "-$12,000 – -$15,000",
    highlight: false,
    explanation:
      "Insurance, taxes, utilities, and selling costs we'll incur while renovating and reselling.",
  },
  {
    label: "Risk Buffer",
    value: "-$8,000 – -$10,000",
    highlight: false,
    explanation:
      "A margin for unknowns—foundation issues, market shifts. We keep this modest and explain why it's there.",
  },
  {
    label: "Our Offer Range",
    value: "$120,000 – $143,000",
    highlight: true,
    explanation: null,
  },
];

export function OfferBreakdown() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl">
              How We Build Your Offer — A Sample Breakdown
            </CardTitle>
            <CardDescription className="text-base">
              See exactly how we calculate your offer. No hidden deductions.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {lineItems.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "px-6 py-5 sm:px-8",
                    index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  )}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{item.label}</p>
                      {item.explanation && (
                        <p className="mt-1 text-sm text-slate-600">
                          {item.explanation}
                        </p>
                      )}
                    </div>
                    <p
                      className={cn(
                        "shrink-0 text-right font-semibold",
                        item.highlight
                          ? "text-lg text-emerald-700"
                          : "text-slate-900"
                      )}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-slate-100 bg-slate-50/50 px-6 py-5 sm:px-8">
            <p className="text-sm text-slate-600">
              Every offer we make follows this structure. We show you each line
              item so you can see exactly how we got to your number.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
