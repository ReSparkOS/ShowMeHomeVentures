import Link from "next/link";
import {
  Hero,
  FaqAccordion,
  CtaSection,
  ProofBar,
  TestimonialGrid,
} from "@/components/sections";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { LeadForm } from "@/components/forms/lead-form";
import { Section, SectionHeading } from "@/components/ui/section";
import { formatPhone, siteConfig } from "@/lib/utils";
import { Shield, Eye, Calendar, AlertTriangle, Check, X } from "lucide-react";

export const metadata = createMetadata({
  title: "Cash Home Buyers in Springfield, MO",
  description:
    "Comparing cash home buyers in Springfield, MO? See how to spot a fair, transparent offer, verify the math, pick your closing date, and pay no fees.",
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
      "Look for transparency. A legitimate cash buyer will show you how they calculated your offer, provide references, close at a reputable title company, and never pressure you into a fast decision. Red flags include vague offers with no breakdown, pressure to sign immediately, and requests for upfront fees. Our Open-Book offer shows you every line item so you can verify the math yourself.",
  },
  {
    question: "How is a cash offer different from a traditional sale?",
    answer:
      "With a cash offer, there's no mortgage lender involved — which eliminates appraisal contingencies, financing fall-through risk, and weeks of underwriting delays. You also skip repairs, staging, showings, and open houses. The trade-off is typically a lower price than peak retail market value, but when you factor in agent commissions (5–6%), repair costs, holding costs, and time, a cash offer often nets you a comparable amount — faster.",
  },
  {
    question: "Will you give me a lowball offer?",
    answer:
      "We don't lowball. We show you the math. Our Open-Book offer breaks down the after-repair value, estimated renovation costs, carrying costs, and our margin. You see the same numbers we use internally. If the offer doesn't work for you, there's no obligation — and you'll at least walk away knowing exactly what your options are.",
  },
  {
    question: "How quickly can you close on my house?",
    answer:
      "As fast as 14 days, or we can wait months if your timeline requires it. We put the closing date in writing as part of our offer, and it's a date we commit to. You choose the date that works for your situation.",
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
    answer: `Fill out our quick form or call us at ${formatPhone(siteConfig.phone)}. We'll ask a few questions about your property, evaluate it, and present an Open-Book offer — usually within 24 hours. No obligation, no cost, no pressure.`,
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
  "Puts the closing date in writing and holds to it",
  "Local team with real knowledge of Springfield neighborhoods",
  "No upfront fees, commissions, or hidden charges",
  "Happy to give references from past sellers",
];

const pillars = [
  {
    icon: Eye,
    title: "Open-book numbers",
    desc: "We show you the full breakdown — ARV, renovation costs, holding costs, and margin. No mystery, no guessing.",
  },
  {
    icon: Calendar,
    title: "A close date in writing",
    desc: "Pick your date. We put it in writing. As fast as 14 days or months out — your call.",
  },
  {
    icon: Shield,
    title: "The No Surprise Pledge",
    desc: "The offer we agree on is the offer you get. No re-trades, no last-minute deductions.",
  },
];

export default function CashHomeBuyersPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Cash Home Buyers in Springfield, MO",
          description:
            "Transparent cash home buying service in Springfield, MO. Fair Open-Book Certainty Offers with closing dates we put in writing and no fees.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Cash Home Buyers in Springfield, MO", url: "/cash-home-buyers-springfield-mo" },
        ])}
      />

      <Hero
        heading="Cash Home Buyers in Springfield, MO — Transparent Offers You Can Trust"
        subheading="Not all cash buyers are the same. We show you the math, put your closing date in writing, and stand behind our offer."
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
          Ready to move forward? See how to{" "}
          <Link
            href="/sell-your-house-fast"
            className="font-semibold text-brand-700 hover:underline"
          >
            sell your house fast
          </Link>
          , learn how{" "}
          <Link
            href="/we-buy-houses-springfield-mo"
            className="font-semibold text-brand-700 hover:underline"
          >
            we buy houses in any condition
          </Link>
          , browse{" "}
          <Link href="/situations" className="font-semibold text-brand-700 hover:underline">
            selling situations
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

      {/* What makes a good cash buyer */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="How to choose a cash home buyer in Springfield" />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-navy-600">
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
              <Link href="/open-book-certainty-offer" className="font-medium text-brand-700 hover:underline">
                Open-Book Certainty Offer™
              </Link>{" "}
              shows you every line item: the after-repair value, the renovation estimate,
              the carrying costs, and our margin. And our{" "}
              <Link href="/no-surprise-pledge" className="font-medium text-brand-700 hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means the offer we put in writing is the offer you get.
            </p>
          </div>
        </div>
      </Section>

      {/* Red flags vs Green flags */}
      <Section tone="paper">
        <SectionHeading
          title="Red flags vs. green flags when choosing a cash buyer"
          lead="Know what to look for before you sign anything. These signals separate a fair, transparent buyer from a risky one."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-navy-100 bg-white p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-navy-950">
              <AlertTriangle className="h-5 w-5 text-navy-400" aria-hidden />
              Red flags — walk away
            </h3>
            <ul className="mt-4 space-y-3">
              {redFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-3 text-sm text-navy-700">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-navy-400" aria-hidden />
                  {flag}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-200 bg-brand-50/40 p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-brand-800">
              <Check className="h-5 w-5 text-brand-600" aria-hidden />
              Green flags — good sign
            </h3>
            <ul className="mt-4 space-y-3">
              {greenFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-3 text-sm text-navy-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Three pillars */}
      <Section>
        <SectionHeading title="What sets our cash offers apart" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="rounded-xl border border-navy-100 bg-white p-6">
                <Icon className="h-5 w-5 text-navy-400" aria-hidden />
                <h3 className="font-display mt-4 text-lg font-semibold tracking-tight text-navy-950">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Inline lead form */}
      <Section id="get-offer" tone="paper" className="scroll-mt-24">
        <SectionHeading
          align="center"
          title="Get your transparent cash offer"
          lead="Tell us about your property. We'll respond within 2 business hours with an Open-Book offer."
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <LeadForm />
        </div>
      </Section>

      <TestimonialGrid limit={3} featuredOnly />

      {/* Situations cross-links */}
      <Section compact className="border-y border-navy-100">
        <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950">
          We buy houses in every situation
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/situations/inherited-house" className="text-brand-700 hover:underline">Inherited houses</Link>
          <Link href="/situations/house-needs-repairs" className="text-brand-700 hover:underline">Houses needing repairs</Link>
          <Link href="/situations/foreclosure-options" className="text-brand-700 hover:underline">Foreclosure help</Link>
          <Link href="/situations/divorce" className="text-brand-700 hover:underline">Divorce sales</Link>
          <Link href="/situations/tenants" className="text-brand-700 hover:underline">Tenant-occupied rentals</Link>
          <Link href="/situations" className="font-medium text-brand-700 hover:underline">View all situations →</Link>
        </div>
      </Section>

      {/* Area cross-links */}
      <Section compact tone="paper" className="border-b border-navy-100">
        <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950">
          Serving Springfield and the Ozarks
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

      <FaqAccordion faqs={faqs} title="Cash home buyers FAQ" />

      <CtaSection
        heading="Get a cash offer you can actually understand"
        subheading="Our Open-Book offer shows you the math, and we put the price in writing. No fees, no commissions, no games."
        ctaText="Get My Cash Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
