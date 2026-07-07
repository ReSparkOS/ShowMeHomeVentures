import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

const lineItems = [
  {
    label: "After-Repair Value (ARV)",
    value: "$200,000",
    highlight: false,
    explanation:
      "What your home could sell for after renovations, based on recent comparable sales in your area.",
  },
  {
    label: "70% of ARV",
    value: "$140,000",
    highlight: false,
    explanation:
      "Industry-standard investor formula. This is our starting point before subtracting repair costs.",
  },
  {
    label: "Estimated Repair Costs",
    value: "- $40,000",
    highlight: false,
    explanation:
      "Materials, labor, permits, and contingency for the work needed. We share the contractor bids so you can verify.",
  },
  {
    label: "Our Cash Offer",
    value: "$100,000",
    highlight: true,
    explanation: null,
  },
];

const ourOfferItems = [
  { label: "Sale price", value: "$100,000" },
  { label: "Agent commissions", value: "$0" },
  { label: "Closing costs", value: "$0 (we cover them)" },
  { label: "Repair costs", value: "$0 (sell as-is)" },
  { label: "Seller concessions", value: "$0" },
  { label: "Inspection repairs", value: "$0" },
  { label: "Time to close", value: "14–21 days" },
  { label: "Showings required", value: "None" },
];

const traditionalItems = [
  { label: "List price (as-is condition)", value: "$150,000" },
  { label: "Agent commissions (6%)", value: "- $9,000" },
  { label: "Closing costs (~2%)", value: "- $3,000" },
  { label: "Seller concessions (typical)", value: "- $3,000" },
  { label: "Inspection repair credits", value: "- $5,000" },
  { label: "Holding costs (3–6 months)", value: "- $4,500" },
  { label: "Time to close", value: "90–180 days" },
  { label: "Showings required", value: "Weeks of showings" },
];

function SampleBreakdownCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="font-display text-2xl tracking-tight">
          How we build your offer — a sample breakdown
        </CardTitle>
        <CardDescription className="text-base">
          A straightforward formula: 70% of after-repair value minus repair
          costs. Every number is shown so you can verify the math yourself.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-navy-100">
          {lineItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "px-6 py-5 sm:px-7",
                item.highlight ? "bg-brand-50" : index % 2 === 1 && "bg-paper"
              )}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <p className="font-medium text-navy-950">{item.label}</p>
                  {item.explanation && (
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">
                      {item.explanation}
                    </p>
                  )}
                </div>
                <p
                  className={cn(
                    "shrink-0 text-right font-semibold tabular-nums",
                    item.highlight
                      ? "font-display text-xl text-brand-700"
                      : "text-navy-950"
                  )}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-navy-100 bg-paper px-6 py-5 sm:px-7">
        <p className="text-sm leading-relaxed text-navy-600">
          Every offer we make follows this structure. No hidden deductions, no
          surprise fees at closing. Our No Surprise Pledge guarantees the offer
          price won&apos;t change.
        </p>
      </CardFooter>
    </Card>
  );
}

export interface OfferBreakdownProps {
  /** Render only the sample-math card, for embedding inside another section. */
  embedded?: boolean;
}

export function OfferBreakdown({ embedded = false }: OfferBreakdownProps) {
  if (embedded) {
    return <SampleBreakdownCard />;
  }

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SampleBreakdownCard />

        {/* Net Proceeds Comparison */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-950 sm:text-3xl">
            What you actually walk away with
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-600">
            A higher list price doesn&apos;t always mean more money in your
            pocket. Here&apos;s how the real numbers compare on this same
            property.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Our Offer */}
            <Card className="relative border-2 border-brand-600 shadow-lg shadow-brand-100">
              <div className="absolute -top-3.5 left-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                  Our cash offer
                </span>
              </div>
              <CardHeader className="border-b border-brand-100 bg-brand-50/60 pt-8">
                <CardTitle className="font-display text-lg text-brand-900">
                  Sell to Show-Me Home Ventures
                </CardTitle>
                <CardDescription className="text-brand-800">
                  Sell as-is, close fast, no hidden costs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-navy-100">
                  {ourOfferItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-3"
                    >
                      <span className="text-sm text-navy-700">{item.label}</span>
                      <span className="text-sm font-semibold text-navy-950">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-brand-100 bg-brand-50/60 px-6 py-5">
                <div className="flex w-full items-center justify-between">
                  <span className="font-semibold text-navy-950">
                    You walk away with
                  </span>
                  <span className="font-display text-2xl font-bold text-brand-700">
                    $100,000
                  </span>
                </div>
              </CardFooter>
            </Card>

            {/* Traditional Listing */}
            <Card>
              <CardHeader className="border-b border-navy-100 bg-paper">
                <CardTitle className="font-display text-lg text-navy-800">
                  Traditional listing
                </CardTitle>
                <CardDescription>
                  List with an agent, wait for a buyer
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-navy-100">
                  {traditionalItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-3"
                    >
                      <span className="text-sm text-navy-700">{item.label}</span>
                      <span
                        className={cn(
                          "text-sm font-medium",
                          item.value.startsWith("-")
                            ? "text-red-700"
                            : "text-navy-950"
                        )}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-navy-100 bg-paper px-6 py-5">
                <div className="flex w-full items-center justify-between">
                  <span className="font-semibold text-navy-950">
                    You walk away with
                  </span>
                  <span className="font-display text-2xl font-bold text-navy-700">
                    ~$125,500
                  </span>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Bottom line */}
          <div className="mt-10 rounded-xl border border-navy-100 bg-white p-6 sm:p-7">
            <h3 className="font-display text-lg font-semibold tracking-tight text-navy-950">
              The bottom line
            </h3>
            <p className="mt-3 leading-relaxed text-navy-600">
              Yes, listing traditionally might net you roughly $25,000 more on
              this example property —{" "}
              <span className="font-medium text-navy-950">if</span> everything
              goes perfectly. But consider what you give up:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "3–6 months of your time (mortgage payments, insurance, taxes, utilities)",
                "Weeks of showings, open houses, and strangers walking through your home",
                "Risk of the deal falling through due to financing, inspection, or appraisal",
                "Repair costs or credits demanded after the buyer's inspection",
                "Uncertainty — no guaranteed close date, no guaranteed price",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-navy-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-300" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3 rounded-lg bg-brand-50 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden />
              <p className="text-sm leading-relaxed text-brand-900">
                <span className="font-semibold">With our offer:</span> You know
                exactly what you&apos;re getting, exactly when you&apos;re
                getting it, and there are zero costs deducted from your
                proceeds. For many sellers, that certainty is worth more than
                the difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
