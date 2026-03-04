import Link from "next/link";
import {
  Hero,
  FaqAccordion,
  CtaSection,
  ProofBar,
  TestimonialGrid,
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
import { Shield, Eye, Calendar, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata = createMetadata({
  title: "Cash Home Buyers in Springfield, MO | Transparent Offers, Fast Close",
  description:
    "Looking for cash home buyers in Springfield, MO? Show-Me Home Ventures makes transparent cash offers with our Open-Book Certainty Offer™. See the math, pick your close date, no fees.",
  path: "/cash-home-buyers-springfield-mo",
  keywords: [
    "cash home buyers Springfield MO",
    "cash home buyers Springfield Missouri",
    "cash buyers for houses Springfield",
    "sell house for cash Springfield MO",
    "cash offer on house Springfield",
    "real estate investor Springfield MO",
    "home investor Springfield Missouri",
    "sell to investor Springfield MO",
    "cash house buyer near me",
    "local cash buyer Springfield",
  ],
});

const faqs = [
  {
    question: "What is a cash home buyer?",
    answer:
      "A cash home buyer is an individual or company that purchases properties directly with cash — no bank financing, no mortgage approval process. This means faster closings (often 14–30 days), no risk of the deal falling through due to financing, and the ability to buy houses as-is without requiring repairs.",
  },
  {
    question: "How do I know if a cash buyer is legitimate?",
    answer:
      "Look for transparency. A legitimate cash buyer will show you how they calculated your offer, provide references, close at a reputable title company, and never pressure you into a fast decision. Red flags include vague offers with no breakdown, pressure to sign immediately, and requests for upfront fees. Our Open-Book Certainty Offer™ shows you every line item so you can verify the math yourself.",
  },
  {
    question: "How is a cash offer different from a traditional sale?",
    answer:
      "With a cash offer, there's no mortgage lender involved — which eliminates appraisal contingencies, financing fall-through risk, and weeks of underwriting delays. You also skip repairs, staging, showings, and open houses. The trade-off is typically a lower price than peak retail market value, but when you factor in agent commissions (5–6%), repair costs, holding costs, and time, a cash offer often nets you a comparable amount — faster.",
  },
  {
    question: "Will you give me a lowball offer?",
    answer:
      "We don't lowball. We show you the math. Our Open-Book Certainty Offer™ breaks down the after-repair value, estimated renovation costs, carrying costs, and our margin. You see the same numbers we use internally. If the offer doesn't work for you, there's no obligation — and you'll at least walk away knowing exactly what your options are.",
  },
  {
    question: "How quickly can you close on my house?",
    answer:
      "As fast as 14 days, or we can wait months if your timeline requires it. We put the closing date in writing as part of our offer, and our No Surprise Pledge guarantees it won't change. You choose the date that works for your situation.",
  },
  {
    question: "What types of properties do cash buyers purchase?",
    answer:
      "We buy single-family homes, duplexes, and small multi-family properties in Springfield, MO and the Ozarks. Any condition — inherited homes, foreclosures, rentals with tenants, houses with code violations, fire or water damage, foundation issues, and homes that simply need too many repairs to list traditionally.",
  },
  {
    question: "Are there any fees when selling to a cash buyer?",
    answer:
      "Not with us. We charge no commissions, no listing fees, and we cover standard closing costs. The offer amount is what you walk away with, minus only existing liens or prorated taxes. Other cash buyers may charge fees — always ask before you commit.",
  },
  {
    question: "How do I get a cash offer from Show-Me Home Ventures?",
    answer:
      "Fill out our quick form or call us at (417) 258-5577. We'll ask a few questions about your property, evaluate it, and present an Open-Book Certainty Offer™ — usually within 24 hours. No obligation, no cost, no pressure.",
  },
];

const redFlags = [
  "Offer with no explanation of how they got the number",
  "Pressure to sign immediately or 'the offer expires today'",
  "Requests for upfront fees or 'earnest money' from the seller",
  "No physical office or local presence",
  "Offer price changes at closing (re-trading)",
  "Won't provide references or close at a real title company",
];

const greenFlags = [
  "Shows you the full math behind the offer (like our Open-Book approach)",
  "Closes at a licensed, insured title company",
  "Puts the closing date in writing with no changes",
  "Local team with real knowledge of Springfield neighborhoods",
  "No upfront fees, commissions, or hidden charges",
  "Happy to give references from past sellers",
];

export default function CashHomeBuyersPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Cash Home Buyers in Springfield, MO",
          description:
            "Transparent cash home buying service in Springfield, MO. Fair Open-Book Certainty Offers with guaranteed closing dates and no fees.",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Cash Home Buyers in Springfield, MO", url: "/cash-home-buyers-springfield-mo" },
        ])}
      />

      <Hero
        heading="Cash Home Buyers in Springfield, MO — Transparent Offers You Can Trust"
        subheading="Not all cash buyers are the same. We show you the math, lock your closing date in writing, and guarantee no surprises."
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

      {/* What makes a good cash buyer */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How to Choose a Cash Home Buyer in Springfield
          </h2>
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p>
              If you search &quot;cash home buyers Springfield MO,&quot; you&apos;ll find
              dozens of companies — national franchises, out-of-state investors, and
              local operators. They all say the same thing: &quot;fast cash, any
              condition.&quot; But the experience you get varies enormously.
            </p>
            <p>
              Some cash buyers use a bait-and-switch model: they quote a high number
              to get you under contract, then reduce it at closing by &quot;discovering&quot;
              issues they already knew about. Others charge hidden fees that eat into
              your proceeds. And many simply won&apos;t explain how they arrived at
              their offer — you&apos;re supposed to take their word for it.
            </p>
            <p>
              We built Show-Me Home Ventures specifically to be the opposite of that.
              Our{" "}
              <Link href="/open-book-certainty-offer" className="text-blue-700 font-medium hover:underline">
                Open-Book Certainty Offer™
              </Link>{" "}
              shows you every line item: the after-repair value, the renovation estimate,
              the carrying costs, and our margin. And our{" "}
              <Link href="/no-surprise-pledge" className="text-blue-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              guarantees the offer won&apos;t change at closing.
            </p>
          </div>
        </div>
      </section>

      {/* Red flags vs Green flags */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Red Flags vs. Green Flags When Choosing a Cash Buyer
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Red Flags — Walk Away
              </h3>
              <ul className="mt-4 space-y-3">
                {redFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Green Flags — Good Sign
              </h3>
              <ul className="mt-4 space-y-3">
                {greenFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Sets Our Cash Offers Apart
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Open-Book Numbers",
                desc: "We show you the full breakdown — ARV, renovation costs, holding costs, and margin. No mystery, no guessing.",
              },
              {
                icon: Calendar,
                title: "Guaranteed Close Date",
                desc: "Pick your date. We put it in writing. As fast as 14 days or months out — your call.",
              },
              {
                icon: Shield,
                title: "No Surprise Pledge",
                desc: "The offer we agree on is the offer you get. No re-trades, no last-minute deductions. Period.",
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inline lead form */}
      <section id="get-offer" className="py-20 lg:py-28 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get Your Transparent Cash Offer
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your property. We&apos;ll respond within 2 hours
              during business hours with an Open-Book Certainty Offer™.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      <TestimonialGrid limit={3} featuredOnly />

      {/* Situations cross-links */}
      <section className="py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            We Buy Houses in Every Situation
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/situations/inherited-house" className="text-blue-700 hover:underline">Inherited houses</Link>
            <Link href="/situations/house-needs-repairs" className="text-blue-700 hover:underline">Houses needing repairs</Link>
            <Link href="/situations/foreclosure-options" className="text-blue-700 hover:underline">Foreclosure help</Link>
            <Link href="/situations/divorce" className="text-blue-700 hover:underline">Divorce sales</Link>
            <Link href="/situations/tenants" className="text-blue-700 hover:underline">Tenant-occupied rentals</Link>
            <Link href="/situations" className="font-medium text-blue-700 hover:underline">View all situations →</Link>
          </div>
        </div>
      </section>

      {/* Area cross-links */}
      <section className="py-16 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            Serving Springfield and the Ozarks
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
        title="Cash Home Buyers FAQ"
      />

      <CtaSection
        heading="Get a Cash Offer You Can Actually Understand"
        subheading="Our Open-Book Certainty Offer™ shows you the math. Our No Surprise Pledge guarantees the price. No fees, no commissions, no games."
        ctaText="Get My Cash Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
