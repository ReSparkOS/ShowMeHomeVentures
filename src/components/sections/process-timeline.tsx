import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "Tell Us About Your Property",
    description:
      "Fill out our quick form or give us a call. We'll ask a few questions to understand your situation.",
  },
  {
    number: 2,
    title: "Get Your Open-Book Offer",
    description:
      "We walk you through the numbers: after-repair value, renovation costs, and how we arrived at your offer. No hidden math.",
  },
  {
    number: 3,
    title: "Pick Your Close Date",
    description:
      "Choose the closing date that works for your schedule—often in as few as 14 days. We lock it in writing.",
  },
  {
    number: 4,
    title: "Close with Certainty",
    description:
      "We handle the paperwork, pay standard closing costs, and wire your funds. No surprises, no last-minute renegotiation.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Four simple steps to a transparent, stress-free sale.
        </p>

        {/* Mobile: vertical timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-emerald-700 bg-white text-base font-bold text-emerald-700">
                    {step.number}
                  </div>
                  <Card className="flex-1 border-slate-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-base text-slate-600">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[19px] h-px bg-slate-200" />
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-emerald-700 bg-white text-base font-bold text-emerald-700">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="absolute left-1/2 top-[19px] h-px w-full bg-slate-200"
                      style={{ transform: "translateX(25%)" }}
                      aria-hidden
                    />
                  )}
                  <Card className="mt-6 w-full border-slate-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm text-slate-600">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
