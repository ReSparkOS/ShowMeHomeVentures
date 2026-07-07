import Link from "next/link";
import {
  Hero,
  FaqAccordion,
  CtaSection,
  SituationsGrid,
  ProofBar,
} from "@/components/sections";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { LeadForm } from "@/components/forms/lead-form";
import { Section, SectionHeading } from "@/components/ui/section";
import { Check } from "lucide-react";

export const metadata = createMetadata({
  title: "Sell House Fast in Springfield, MO",
  description:
    "Need to sell your house fast in Springfield, MO? Get a fair cash offer within 24 hours and close in as few as 14 days. No repairs, no fees, no waiting.",
  path: "/sell-your-house-fast",
  keywords: [
    "sell my house fast Springfield MO",
    "sell house fast Springfield Missouri",
    "cash home buyers Springfield MO",
    "we buy houses Springfield MO",
    "sell house as is Springfield MO",
    "quick house sale Springfield Missouri",
    "sell house without agent Springfield",
    "cash offer for my house",
    "sell house fast near me",
    "sell inherited house Springfield MO",
    "avoid foreclosure Springfield MO",
  ],
});

const faqs = [
  {
    question: "How fast can I sell my house in Springfield, MO?",
    answer:
      "We can make a cash offer within 24 hours of your initial contact and close in as few as 14 days. You choose the closing date that works for your timeline, and we put it in writing.",
  },
  {
    question: "Do I need to make repairs before selling?",
    answer:
      "No. We buy houses in any condition—mold, foundation issues, fire damage, hoarding, bad tenants, you name it. We factor the cost of repairs into our offer so you never have to spend a dime fixing up the property.",
  },
  {
    question: "How is your offer different from other 'we buy houses' companies?",
    answer:
      "Most cash buyers give you a number with no explanation. We show you exactly how we calculated your offer—the after-repair value, renovation costs, carrying costs, and our margin. Full transparency. Plus our No Surprise Pledge means the price we put in writing is the price you get at closing.",
  },
  {
    question: "Are there any fees or commissions?",
    answer:
      "None. There are no agent commissions, no listing fees, no closing costs on your end, and no hidden charges. The number we present is what you walk away with (minus any existing liens or prorated taxes).",
  },
  {
    question: "What if my house is in terrible condition?",
    answer:
      "We buy houses in any condition. Seriously. Roof caving in, code violations, mold, hoarder situations—we've seen it all and we'll still make a fair offer. No judgment, just a number and a plan.",
  },
  {
    question: "Can I sell if I'm behind on payments or facing foreclosure?",
    answer:
      "Yes. We work with homeowners facing foreclosure regularly and can often close fast enough to prevent it. Time is critical in these situations, so reach out as soon as possible and we'll move quickly.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Springfield, MO and the greater Ozarks region—including Greene County, Christian County, Ozark, Nixa, Republic, Battlefield, and surrounding communities.",
  },
  {
    question: "Is there any obligation if I get an offer?",
    answer:
      "Zero obligation. We'll evaluate your property, walk you through the numbers, and present an offer. If it doesn't work for you, no hard feelings and no cost. You decide on your own timeline.",
  },
];

const steps = [
  {
    title: "Tell us about your property",
    description:
      "Fill out our quick form or call us directly. We just need a few basics—address, condition, and your timeline.",
  },
  {
    title: "We evaluate and send your offer",
    description:
      "We review the property and present an Open-Book offer with every line item explained. You see the same math we use.",
  },
  {
    title: "Pick your closing date",
    description:
      "Choose a closing date that works for you—as soon as 14 days or months out. We put it in writing, backed by our No Surprise Pledge.",
  },
  {
    title: "Close and get paid",
    description:
      "Sign at a local title company, get your cash, and move on. No repairs, no showings, no waiting.",
  },
];

const benefits = [
  "No agent commissions or fees",
  "Close in as few as 14 days",
  "Sell as-is — no repairs needed",
  "You choose the closing date",
  "Transparent pricing — see the math",
  "No surprise re-trades at closing",
  "Local Springfield team",
  "Free, no-obligation offer",
];

export default function SellYourHouseFastPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Sell Your House Fast in Springfield, MO",
          description:
            "Fast cash home buying service in Springfield, MO. Get a fair Open-Book Certainty Offer within 24 hours and close in as few as 14 days. No repairs, no commissions.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Sell Your House Fast", url: "/sell-your-house-fast" },
        ])}
      />

      <Hero
        heading="Sell Your House Fast in Springfield, MO — Cash Offer in 24 Hours"
        subheading="No repairs. No commissions. No waiting. Get a transparent Open-Book Certainty Offer™ and close on your timeline."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{
          text: "See How It Works",
          href: "/how-it-works",
        }}
        primaryCtaSlot={
          <LeadFormDialog
            triggerText="Get My Cash Offer"
            triggerSize="lg"
            triggerClassName="bg-brand-600 hover:bg-brand-700"
          />
        }
      />

      <ProofBar />

      {/* Related pages */}
      <Section compact tone="paper" className="border-b border-navy-100 !py-8">
        <p className="text-base leading-relaxed text-navy-700">
          Selling for a different reason? See how{" "}
          <Link
            href="/we-buy-houses-springfield-mo"
            className="font-semibold text-brand-700 hover:underline"
          >
            we buy houses in any condition
          </Link>
          , learn{" "}
          <Link
            href="/cash-home-buyers-springfield-mo"
            className="font-semibold text-brand-700 hover:underline"
          >
            how to compare cash home buyers
          </Link>{" "}
          in Springfield, browse{" "}
          <Link href="/situations" className="font-semibold text-brand-700 hover:underline">
            common selling situations
          </Link>
          , check our{" "}
          <Link href="/service-areas" className="font-semibold text-brand-700 hover:underline">
            service areas
          </Link>
          , or{" "}
          <Link href="/get-offer" className="font-semibold text-brand-700 hover:underline">
            get your cash offer
          </Link>
          .
        </p>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeading
          eyebrow="The fast track"
          title="How to sell your house fast in Springfield"
          lead="Four simple steps. No listing, no waiting, no uncertainty."
        />
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-lg font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="font-display mt-5 text-lg font-semibold tracking-tight text-navy-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline"
          >
            Learn more about our process →
          </Link>
        </p>
      </Section>

      {/* Benefits grid */}
      <Section tone="paper">
        <SectionHeading
          title="Why homeowners in Springfield choose us"
          lead="We're not like other cash-buying companies. Here's what makes the Open-Book offer different."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
              <span className="text-sm font-medium text-navy-800">{benefit}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Inline lead form */}
      <Section id="get-offer" className="scroll-mt-24">
        <SectionHeading
          align="center"
          title="Get your cash offer — it takes 2 minutes"
          lead="Tell us about your property. We'll reach out within 2 business hours with a transparent offer."
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <LeadForm />
        </div>
      </Section>

      {/* Trust: No Surprise Pledge */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading align="center" title="The No Surprise Pledge" />
          <p className="mt-6 text-lg leading-relaxed text-navy-600">
            The number we agree on is the number you get. No re-trades, no invented
            fees, and no last-minute deductions—we put it in writing because you
            deserve certainty.
          </p>
          <p className="mt-6">
            <Link
              href="/no-surprise-pledge"
              className="font-semibold text-brand-700 hover:underline"
            >
              Read the full No Surprise Pledge →
            </Link>
          </p>
        </div>
      </Section>

      {/* Situations we handle */}
      <SituationsGrid />

      {/* Internal linking to area pages */}
      <Section compact tone="paper" className="border-y border-navy-100">
        <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950">
          We buy houses throughout Southwest Missouri
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/areas/springfield-mo" className="text-brand-700 hover:underline">Springfield, MO</Link>
          <Link href="/areas/ozark-mo" className="text-brand-700 hover:underline">Ozark, MO</Link>
          <Link href="/areas/nixa-mo" className="text-brand-700 hover:underline">Nixa, MO</Link>
          <Link href="/areas/republic-mo" className="text-brand-700 hover:underline">Republic, MO</Link>
          <Link href="/areas/battlefield-mo" className="text-brand-700 hover:underline">Battlefield, MO</Link>
          <Link href="/service-areas" className="font-medium text-brand-700 hover:underline">View all service areas →</Link>
        </div>
      </Section>

      <FaqAccordion
        faqs={faqs}
        title="Frequently asked questions about selling your house fast"
      />

      <CtaSection
        heading="Ready to sell your house fast?"
        subheading="Get your Open-Book offer today—transparent numbers, a closing date we put in writing, and no surprises."
        ctaText="Get My Cash Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
