import Link from "next/link";
import {
  Hero,
  FaqAccordion,
  CtaSection,
  ProofBar,
  TestimonialGrid,
  CaseStudyCards,
} from "@/components/sections";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { LeadForm } from "@/components/forms/lead-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "We Buy Houses in Springfield, MO | Cash Offer, Any Condition",
  description:
    "We buy houses in Springfield, MO — any condition, any situation. Get a fair cash offer with our Open-Book Certainty Offer™. No repairs, no agents, no fees. Close in as few as 14 days.",
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
      "You contact us with basic info about your property. We evaluate it, then present an Open-Book Certainty Offer™ that shows you the exact math — after-repair value, renovation costs, holding costs, and our margin. You see the same numbers we use. If you accept, we close at a local title company on your timeline — often in 14 to 21 days.",
  },
  {
    question: "What condition does my house need to be in?",
    answer:
      "Any condition. We buy houses with foundation issues, roof damage, mold, fire damage, code violations, hoarding situations, and everything in between. We also buy houses that are in great shape. There is no minimum condition required.",
  },
  {
    question: "How is Show-Me Home Ventures different from other 'we buy houses' companies?",
    answer:
      "Most 'we buy houses' companies give you a number with no explanation. We show you every line item in our offer — the ARV, renovation estimate, carrying costs, and our profit margin. Plus our No Surprise Pledge guarantees the offer won't change at closing. No bait-and-switch, no last-minute re-trades.",
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
      "As fast as 14 days if you need to move quickly, or we can wait months if you need more time. You pick the date, we put it in writing, and we show up. Our No Surprise Pledge means that date won't slip.",
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

const comparisonRows = [
  { feature: "Timeline to close", us: "14–30 days", traditional: "60–120+ days" },
  { feature: "Repairs required", us: "None — sell as-is", traditional: "Usually required" },
  { feature: "Agent commissions", us: "$0", traditional: "5–6% of sale price" },
  { feature: "Showings & open houses", us: "None", traditional: "Weeks of showings" },
  { feature: "Closing cost responsibility", us: "We cover them", traditional: "Seller often pays" },
  { feature: "Offer certainty", us: "Locked — No Surprise Pledge", traditional: "Can fall through" },
  { feature: "Price transparency", us: "Full breakdown shown", traditional: "Agent opinion only" },
];

export default function WeBuyHousesPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "We Buy Houses in Springfield, MO",
          description:
            "Local Springfield home-buying service. We buy houses in any condition for cash with transparent Open-Book Certainty Offers and guaranteed closing dates.",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
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
            triggerClassName="bg-slate-900 hover:bg-slate-800"
          />
        }
      />

      <ProofBar />

      {/* What We Buy section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We Buy Houses in Every Situation
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            No matter what your house looks like or what you&apos;re going through,
            we can make a fair offer. Here are some of the situations we handle
            every month in Springfield and the Ozarks.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Inherited houses", href: "/situations/inherited-house" },
              { label: "Houses needing repairs", href: "/situations/house-needs-repairs" },
              { label: "Tenant-occupied rentals", href: "/situations/tenants" },
              { label: "Foreclosure situations", href: "/situations/foreclosure-options" },
              { label: "Divorce sales", href: "/situations/divorce" },
              { label: "Hoarder houses", href: "/situations/hoarder-house" },
              { label: "Code violations", href: "/situations/code-violations" },
              { label: "Vacant properties", href: "/situations/vacant-property" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg bg-slate-50 p-4 text-sm font-medium text-slate-800 transition-colors hover:bg-blue-50 hover:text-blue-800"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Selling to Us vs. Listing with an Agent
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            A side-by-side comparison so you can decide what&apos;s right for your situation.
          </p>
          <div className="mt-10 overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-700">Show-Me Home Ventures</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-500">Traditional Listing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-800">{row.feature}</td>
                    <td className="px-4 py-3 text-slate-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                        {row.us}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500">
                      <span className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 shrink-0 text-slate-400" />
                        {row.traditional}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Unique content: Why Springfield sellers choose us */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Springfield Homeowners Sell to Us
          </h2>
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p>
              Springfield&apos;s housing market moves at its own pace. Whether you&apos;re
              in a historic neighborhood like Rountree or Phelps Grove, an established
              area like Westside or Doling, or anywhere in Greene County — the
              traditional listing process doesn&apos;t always fit. Homes that need work,
              inherited properties tied up in probate, or rentals with difficult
              tenants can sit on the market for months.
            </p>
            <p>
              We&apos;ve been buying houses in Springfield for years. We know the
              neighborhoods, the quirks of older homes near Missouri State, the
              renovation costs on the south side, and what it takes to close a deal
              in Greene County. When we make an offer, it&apos;s based on real
              local knowledge — not a formula from some corporate office out of state.
            </p>
            <p>
              Our{" "}
              <Link href="/open-book-certainty-offer" className="text-blue-700 font-medium hover:underline">
                Open-Book Certainty Offer™
              </Link>{" "}
              shows you the exact math behind your number. And our{" "}
              <Link href="/no-surprise-pledge" className="text-blue-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means the offer won&apos;t change at closing. That&apos;s why
              homeowners across Springfield trust us with their biggest asset.
            </p>
          </div>
        </div>
      </section>

      <CaseStudyCards limit={3} featuredOnly />

      {/* Lead form */}
      <section id="get-offer" className="py-20 lg:py-28 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get Your Cash Offer — It Takes 2 Minutes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your Springfield property. We&apos;ll reach out within
              2 hours during business hours with a transparent offer.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      <TestimonialGrid limit={3} featuredOnly />

      {/* Area cross-links */}
      <section className="py-16 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            We Also Buy Houses Throughout the Ozarks
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/areas/springfield-mo" className="text-blue-700 hover:underline">Springfield, MO</Link>
            <Link href="/areas/ozark-mo" className="text-blue-700 hover:underline">Ozark, MO</Link>
            <Link href="/areas/nixa-mo" className="text-blue-700 hover:underline">Nixa, MO</Link>
            <Link href="/areas/republic-mo" className="text-blue-700 hover:underline">Republic, MO</Link>
            <Link href="/areas/battlefield-mo" className="text-blue-700 hover:underline">Battlefield, MO</Link>
            <Link href="/areas" className="font-medium text-blue-700 hover:underline">View all areas →</Link>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={faqs}
        title="Frequently Asked Questions About Selling Your House in Springfield"
      />

      <CtaSection
        heading="Ready to Sell Your Springfield House?"
        subheading="Get your Open-Book Certainty Offer™ today — transparent numbers, a real closing date, and no surprises. We buy houses in any condition."
        ctaText="Get My Cash Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
