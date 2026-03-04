import {
  Hero,
  OfferBreakdown,
  PledgeBox,
  ProcessTimeline,
  TestimonialGrid,
  FaqAccordion,
  CtaSection,
} from "@/components/sections";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Calendar, Shield } from "lucide-react";

export const metadata = createMetadata({
  title: "Open-Book Certainty Offer™ | Sell House Fast Springfield MO Fair Offer",
  description:
    "A fair offer you can understand + a close date you can trust. We show you the exact math—ARV, renovation costs, risk buffer—and lock your closing date in writing. No surprises.",
  path: "/open-book-certainty-offer",
  keywords: [
    "transparent cash offer Springfield MO",
    "open-book home offer Missouri",
    "no surprise home buyer Springfield",
  ],
});

const pillarDetails = [
  {
    title: "Open-Book Numbers",
    icon: Eye,
    description:
      "Most investors give you a number and expect you to trust it. We show you the math.",
    bullets: [
      "After-repair value (ARV): What your home could sell for after renovations, based on comparable sales in your area.",
      "Renovation costs: Materials, labor, permits, contingency—we share contractor bids where possible.",
      "Holding & transaction costs: Insurance, taxes, utilities, selling costs we incur.",
      "Risk buffer: A modest margin for unknowns. We explain why it's there and keep it reasonable.",
    ],
    result:
      "Your offer = ARV minus these costs. Every line item is visible and explained in plain language.",
  },
  {
    title: "A Real Close Date",
    icon: Calendar,
    description:
      "We don't string you along with 'we'll see' or 'maybe next month.'",
    bullets: [
      "You pick the closing date that works for your schedule.",
      "Often in as few as 14 days—or longer if you need time to transition.",
      "We put it in writing. No vague promises.",
      "Our team coordinates title, paperwork, and funding so we hit the date.",
    ],
    result:
      "Certainty. You know exactly when you'll close and can plan accordingly.",
  },
  {
    title: "The No Surprise Pledge",
    icon: Shield,
    description:
      "Our offer won't change at the last minute. What we agree to is what you get.",
    bullets: [
      "No re-trades. We don't come back at closing with a lower price.",
      "No invented fees. What we present is what you receive.",
      "Clear exceptions: structural hazards, title issues, material misrepresentation. We explain these upfront.",
      "Even in rare exception cases, we discuss openly and you can walk away with no penalty.",
    ],
    result:
      "Peace of mind. The offer we agree on is the offer you get. Period.",
  },
];

const openBookFaqs = [
  {
    question: "What exactly is the Open-Book Certainty Offer?",
    answer:
      "It's our commitment to transparency: we show you exactly how we calculate your offer (after-repair value, renovation costs, holding costs, risk buffer), lock a real closing date in writing, and back the offer with our No Surprise Pledge. No hidden math, no last-minute changes.",
  },
  {
    question: "Why do you show me your numbers? Doesn't that put you at a disadvantage?",
    answer:
      "We'd rather earn your trust than hide behind vague offers. When homeowners understand the math, they're more likely to move forward confidently. We're not trying to lowball anyone—we want fair deals that work for both sides. Transparency builds trust.",
  },
  {
    question: "Is the offer always lower than what I'd get on the open market?",
    answer:
      "Typically yes, because we're buying as-is, handling repairs and resale, and taking on risk. But you avoid listing fees, repairs, staging, showings, and the uncertainty of the traditional sale process. Our Open-Book breakdown lets you see the trade-offs and decide what makes sense for your situation.",
  },
  {
    question: "What if I don't understand the numbers?",
    answer:
      "We explain every line item in plain language. If something is unclear, ask. We'll walk you through it until it makes sense. There are no trick terms or fine print in our breakdown.",
  },
  {
    question: "How is the after-repair value (ARV) determined?",
    answer:
      "We use recent comparable sales in your area—similar homes that have sold after renovations. We look at location, size, condition, and market trends. We share our reasoning so you can see how we arrived at the number.",
  },
  {
    question: "What's the risk buffer and why is it there?",
    answer:
      "It's a margin for unknowns: hidden issues found during renovation, market shifts, or unexpected costs. We keep it modest and explain why it exists. It's not a way to lowball—it's standard practice for investors, and we're upfront about it.",
  },
  {
    question: "Can I negotiate the offer?",
    answer:
      "You can always ask. We'll listen and see if we can adjust. Our goal is a fair deal that works for both parties. If we can't move on price, we'll explain why—and you always have the option to walk away with no obligation.",
  },
  {
    question: "Does the No Surprise Pledge apply to every transaction?",
    answer:
      "Yes. We back every offer with the pledge. The only exceptions are truly rare: previously unknown structural or environmental hazards, undisclosed title issues or liens, or material misrepresentation of condition. We explain these upfront and handle any such situations with full transparency.",
  },
];

export default function OpenBookCertaintyOfferPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Open-Book Certainty Offer",
          description:
            "A transparent home-buying process: we show you exactly how we calculate your offer, lock a real closing date in writing, and back it with the No Surprise Pledge.",
        })}
      />
      <JsonLd data={faqSchema(openBookFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Open-Book Certainty Offer", url: "/open-book-certainty-offer" },
        ])}
      />
      <Hero
        heading="The Open-Book Certainty Offer™"
        subheading="A fair offer you can understand + a close date you can trust."
        primaryCta={{ text: "Get My Open-Book Offer", href: "/contact" }}
        secondaryCta={{
          text: "Read the No Surprise Pledge",
          href: "/no-surprise-pledge",
        }}
      />

      {/* Deep dive: 3 Pillars */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Three Pillars in Detail
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            More than a catchy name—each pillar is a concrete commitment.
          </p>
          <div className="mt-12 space-y-12">
            {pillarDetails.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.title}
                  className="border-slate-200 bg-white overflow-hidden"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                        <CardDescription className="mt-2 text-base text-slate-600">
                          {pillar.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc space-y-2 pl-6 text-slate-600">
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <p className="rounded-lg bg-emerald-50 p-4 text-slate-800 font-medium">
                      {pillar.result}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="offer-breakdown" className="scroll-mt-24">
        <OfferBreakdown />
      </section>

      {/* Why Open-Book? */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Open-Book?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Most house buyers operate in the dark. They throw out a number, hope you
            accept, and sometimes come back at closing with a lower offer or new
            conditions. That erodes trust and wastes everyone&apos;s time.
          </p>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            We believe you deserve better. When you see the math—how we value your
            home, what it costs to renovate, and why we make the offer we do—you can
            make an informed decision. When we lock a closing date, you can plan your
            life. When we back it with a pledge, you can rest easy.
          </p>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            That&apos;s the Open-Book Certainty Offer. It&apos;s not a marketing gimmick.
            It&apos;s how we do business.
          </p>
        </div>
      </section>

      <PledgeBox />
      <ProcessTimeline />
      <TestimonialGrid limit={3} featuredOnly />
      <FaqAccordion faqs={openBookFaqs} title="Open-Book Offer FAQs" />
      <CtaSection />
    </>
  );
}
