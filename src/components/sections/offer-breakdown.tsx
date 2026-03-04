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

export function OfferBreakdown() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Open-Book Offer Breakdown */}
        <Card className="overflow-hidden border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl">
              How We Build Your Offer — A Sample Breakdown
            </CardTitle>
            <CardDescription className="text-base">
              We use a straightforward formula: 70% of after-repair value minus
              repair costs. Every number is shown so you can verify the math yourself.
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
              Every offer we make follows this structure. No hidden deductions, no
              surprise fees at closing. Our No Surprise Pledge guarantees the offer
              price won&apos;t change.
            </p>
          </CardFooter>
        </Card>

        {/* Net Proceeds Comparison */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What You Actually Walk Away With
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            A higher list price doesn&apos;t always mean more money in your pocket.
            Here&apos;s how the real numbers compare on this same property.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Our Offer */}
            <Card className="border-blue-200 bg-white">
              <CardHeader className="border-b border-blue-100 bg-blue-50/50">
                <CardTitle className="text-lg text-blue-800">
                  Our Cash Offer
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Sell as-is, close fast, no hidden costs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {ourOfferItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-3"
                    >
                      <span className="text-sm text-slate-700">{item.label}</span>
                      <span className="text-sm font-medium text-slate-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-blue-100 bg-blue-50/50 px-6 py-4">
                <div className="flex w-full items-center justify-between">
                  <span className="font-semibold text-slate-900">You walk away with</span>
                  <span className="text-xl font-bold text-emerald-700">$100,000</span>
                </div>
              </CardFooter>
            </Card>

            {/* Traditional Listing */}
            <Card className="border-slate-200 bg-white">
              <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                <CardTitle className="text-lg text-slate-700">
                  Traditional Listing
                </CardTitle>
                <CardDescription className="text-slate-500">
                  List with an agent, wait for a buyer
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {traditionalItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-3"
                    >
                      <span className="text-sm text-slate-700">{item.label}</span>
                      <span className={cn(
                        "text-sm font-medium",
                        item.value.startsWith("-") ? "text-red-600" : "text-slate-900"
                      )}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-100 bg-slate-50/50 px-6 py-4">
                <div className="flex w-full items-center justify-between">
                  <span className="font-semibold text-slate-900">You walk away with</span>
                  <span className="text-xl font-bold text-slate-700">~$125,500</span>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Bottom line */}
          <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">The Bottom Line</h3>
            <p className="mt-3 text-slate-600">
              Yes, listing traditionally might net you roughly $25,000 more on this
              example property — <span className="font-medium text-slate-900">if</span> everything
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
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3 rounded-lg bg-blue-50 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <p className="text-sm text-blue-900">
                <span className="font-semibold">With our offer:</span> You know exactly
                what you&apos;re getting, exactly when you&apos;re getting it, and there are
                zero costs deducted from your proceeds. For many sellers, that certainty
                is worth more than the difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
