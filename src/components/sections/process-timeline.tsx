import { Section, SectionHeading } from "@/components/ui/section";

const steps = [
  {
    number: 1,
    title: "Tell us about your property",
    description:
      "Fill out our quick form or give us a call. We'll ask a few questions to understand your situation.",
  },
  {
    number: 2,
    title: "Get your Open-Book offer",
    description:
      "We walk you through the numbers: after-repair value, renovation costs, and how we arrived at your offer. No hidden math.",
  },
  {
    number: 3,
    title: "Pick your closing date",
    description:
      "Choose the closing date that works for your schedule, often in as few as 14 days. We lock it in writing.",
  },
  {
    number: 4,
    title: "Close with certainty",
    description:
      "We handle the paperwork, pay standard closing costs, and wire your funds. No surprises, no last-minute renegotiation.",
  },
];

export function ProcessTimeline() {
  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow="The process"
        title="How it works"
        lead="Four simple steps to a transparent, stress-free sale."
      />
      <ol className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.number} className="relative">
            <div className="flex items-center gap-4">
              <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-lg font-semibold text-white">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <span className="hidden h-px flex-1 bg-navy-200 lg:block" aria-hidden />
              )}
            </div>
            <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-navy-950">
              {step.title}
            </h3>
            <p className="mt-2 leading-relaxed text-navy-600">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
