import Link from "next/link";
import {
  Hero,
  FaqAccordion,
  CtaSection,
  ProofBar,
  TestimonialGrid,
  CaseStudyCards,
} from "@/components/sections";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { LeadForm } from "@/components/forms/lead-form";
import { Section, SectionHeading } from "@/components/ui/section";
import { Check, X } from "lucide-react";

export const metadata = createMetadata({
  title: "We Buy Houses in Springfield, MO",
  description:
    "We buy houses in Springfield, MO in any condition. Get a transparent cash offer with every number explained, skip repairs and fees, and close in about 14 days.",
  path: "/we-buy-houses-springfield-mo",
  keywords: [
    "we buy houses Springfield MO",
    "we buy houses Springfield Missouri",
    "sell my house Springfield MO",
    "buy my house Springfield",
    "house buyers Springfield MO",
    "sell house any condition Springfield",
    "local home buyer Springfield MO",
    "we buy ugly houses Springfield",
    "sell house fast Springfield MO",
    "home investors Springfield Missouri",
  ],
});

const faqs = [
  {
    question: "How does 'we buy houses' actually work in Springfield?",
    answer:
      "You contact us with basic info about your property. We evaluate it, then present an Open-Book offer that shows you the exact math — after-repair value, renovation costs, holding costs, and our margin. You see the same numbers we use. If you accept, we close at a local title company on your timeline — often in 14 to 21 days.",
  },
  {
    question: "What condition does my house need to be in?",
    answer:
      "Any condition. We buy houses with foundation issues, roof damage, mold, fire damage, code violations, hoarding situations, and everything in between. We also buy houses that are in great shape. There is no minimum condition required.",
  },
  {
    question: "How is Show-Me Home Ventures different from other 'we buy houses' companies?",
    answer:
      "Most 'we buy houses' companies give you a number with no explanation. We show you every line item in our offer — the ARV, renovation estimate, carrying costs, and our profit margin. Plus our No Surprise Pledge means the offer we put in writing is the offer you get. No bait-and-switch, no last-minute re-trades.",
  },
  {
    question: "Do you charge any fees or commissions?",
    answer:
      "Zero. No agent commissions, no listing fees, no closing costs on your side, and no hidden charges. The number in our Open-Book offer is what you receive at closing (minus any existing liens or prorated taxes you choose to pay from proceeds).",
  },
  {
    question: "What types of houses do you buy in Springfield?",
    answer:
      "Single-family homes, duplexes, small multi-family properties, townhomes, and some mobile homes on permanent foundations. Inherited houses, rentals with tenants, vacant properties, homes in probate, and houses with liens or back taxes — we handle it all.",
  },
  {
    question: "How fast can you close?",
    answer:
      "As fast as 14 days if you need to move quickly, or we can wait months if you need more time. You pick the date, we put it in writing, and we show up. It's a closing date we commit to in writing.",
  },
  {
    question: "What neighborhoods in Springfield do you buy in?",
    answer:
      "All of them. Rountree, Phelps Grove, Midtown, Grant Beach, Doling, Westside, Woodland Heights, Robberson, Weller, Bissett — and every neighborhood in between. We also serve Ozark, Nixa, Republic, Battlefield, and the broader Ozarks region.",
  },
  {
    question: "Is there any obligation if I request an offer?",
    answer:
      "None. Getting an offer is free and carries no obligation. We'll evaluate your property, walk you through the numbers, and present a written offer. If it doesn't work for you, you walk away. No pressure, no follow-up calls you didn't ask for.",
  },
];

const situations = [
  { label: "Inherited houses", href: "/situations/inherited-house" },
  { label: "Houses needing repairs", href: "/situations/house-needs-repairs" },
  { label: "Tenant-occupied rentals", href: "/situations/tenants" },
  { label: "Foreclosure situations", href: "/situations/foreclosure-options" },
  { label: "Divorce sales", href: "/situations/divorce" },
  { label: "Hoarder houses", href: "/situations/hoarder-house" },
  { label: "Code violations", href: "/situations/code-violations" },
  { label: "Vacant properties", href: "/situations/vacant-property" },
];

const comparisonRows = [
  { feature: "Timeline to close", us: "14–30 days", traditional: "60–120+ days" },
  { feature: "Repairs required", us: "None — sell as-is", traditional: "Usually required" },
  { feature: "Agent commissions", us: "$0", traditional: "5–6% of sale price" },
  { feature: "Showings & open houses", us: "None", traditional: "Weeks of showings" },
  { feature: "Closing cost responsibility", us: "We cover them", traditional: "Seller often pays" },
  { feature: "Offer certainty", us: "In writing — No Surprise Pledge", traditional: "Can fall through" },
  { feature: "Price transparency", us: "Full breakdown shown", traditional: "Agent opinion only" },
];

export default function WeBuyHousesPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "We Buy Houses in Springfield, MO",
          description:
            "Local Springfield home-buying service. We buy houses in any condition for cash with transparent Open-Book Certainty Offers and closing dates we put in writing.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "We Buy Houses in Springfield, MO", url: "/we-buy-houses-springfield-mo" },
        ])}
      />

      <Hero
        heading="We Buy Houses in Springfield, MO — Any Condition, Fair Price"
        subheading="Local Springfield team. Transparent cash offers. Close in as few as 14 days. No repairs, no agents, no fees."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{ text: "How It Works", href: "/how-it-works" }}
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
          Need to move quickly? See how to{" "}
          <Link
            href="/sell-your-house-fast"
            className="font-semibold text-brand-700 hover:underline"
          >
            sell your house fast
          </Link>
          , learn{" "}
          <Link
            href="/cash-home-buyers-springfield-mo"
            className="font-semibold text-brand-700 hover:underline"
          >
            how to compare cash home buyers
          </Link>
          , browse the{" "}
          <Link href="/situations" className="font-semibold text-brand-700 hover:underline">
            selling situations we handle
          </Link>
          , view our{" "}
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

      {/* What We Buy section */}
      <Section>
        <SectionHeading
          eyebrow="Any situation"
          title="We buy houses in every situation"
          lead="No matter what your house looks like or what you're going through, we can make a fair offer. Here are some of the situations we handle every month in Springfield and the Ozarks."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 text-sm font-medium text-navy-800 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
            >
              <Check className="h-5 w-5 shrink-0 text-navy-400 transition-colors group-hover:text-brand-700" aria-hidden />
              {item.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* Comparison table */}
      <Section tone="paper">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Selling to us vs. listing with an agent"
            lead="A side-by-side comparison so you can decide what's right for your situation."
          />
          <div className="mt-10 overflow-x-auto rounded-xl border border-navy-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-50">
                  <th className="px-4 py-3 text-left font-semibold text-navy-700">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-brand-700">Show-Me Home Ventures</th>
                  <th className="px-4 py-3 text-left font-semibold text-navy-600">Traditional Listing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-paper"}>
                    <td className="px-4 py-3 font-medium text-navy-800">{row.feature}</td>
                    <td className="px-4 py-3 text-navy-700">
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                        {row.us}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-navy-600">
                      <span className="flex items-center gap-2">
                        <X className="h-4 w-4 shrink-0 text-navy-400" aria-hidden />
                        {row.traditional}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Unique content: Why Springfield sellers choose us */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Why Springfield homeowners sell to us" />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-navy-600">
            <p>
              Springfield&apos;s housing market moves at its own pace. From historic
              neighborhoods like Rountree and Phelps Grove to established areas like
              Westside and Doling, the traditional listing process doesn&apos;t always
              fit. Homes that need work, inherited properties tied up in probate, or
              rentals with difficult tenants can sit on the market for months.
            </p>
            <p>
              We&apos;ve been buying houses in Springfield for years. We know the
              neighborhoods, the quirks of older homes near Missouri State, the
              renovation costs on the south side, and what it takes to close a deal
              in Greene County. When we make an offer, it&apos;s based on real local
              knowledge — not a formula from some corporate office out of state.
            </p>
            <p>
              Our{" "}
              <Link href="/open-book-certainty-offer" className="font-medium text-brand-700 hover:underline">
                Open-Book Certainty Offer™
              </Link>{" "}
              shows you the exact math behind your number. And our{" "}
              <Link href="/no-surprise-pledge" className="font-medium text-brand-700 hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means the offer we put in writing is the offer you get. That&apos;s why
              homeowners across Springfield trust us with their biggest asset.
            </p>
          </div>
        </div>
      </Section>

      <CaseStudyCards limit={3} featuredOnly />

      {/* Lead form */}
      <Section id="get-offer" tone="paper" className="scroll-mt-24">
        <SectionHeading
          align="center"
          title="Get your cash offer — it takes 2 minutes"
          lead="Tell us about your Springfield property. We'll reach out within 2 business hours with a transparent offer."
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <LeadForm />
        </div>
      </Section>

      <TestimonialGrid limit={3} featuredOnly />

      {/* Area cross-links */}
      <Section compact tone="paper" className="border-y border-navy-100">
        <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950">
          We also buy houses throughout the Ozarks
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
        title="Frequently asked questions about selling your house in Springfield"
      />

      <CtaSection
        heading="Ready to sell your Springfield house?"
        subheading="Get your Open-Book offer today — transparent numbers, a closing date we put in writing, and no surprises. We buy houses in any condition."
        ctaText="Get My Cash Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
