import type { Metadata } from "next";
import Link from "next/link";
import { situations } from "@/data/situations";
import { Hero } from "@/components/sections/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaSection } from "@/components/sections/cta-section";
import { CaseStudyCards } from "@/components/sections/case-study-cards";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

const situation = situations.find((s) => s.slug === "divorce")!;

export function generateMetadata(): Metadata {
  return createMetadata({
    title: situation.metaTitle,
    description: situation.metaDescription,
    path: `/situations/${situation.slug}`,
  });
}

export default function DivorcePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: situation.title,
          description: situation.description,
          areaServed: "Springfield, MO and the Ozarks region",
        })}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Selling Situations", url: "/situations" },
          { name: situation.shortTitle, url: `/situations/${situation.slug}` },
        ])}
      />

      <Hero
        heading={situation.heroHeading}
        subheading={situation.heroSubheading}
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{
          text: "See How It Works",
          href: "/how-it-works",
        }}
        primaryCtaSlot={
          <LeadFormDialog triggerText="Get My Cash Offer" triggerSize="lg" />
        }
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            Selling a home during divorce in Springfield or the Ozarks adds
            another layer of stress to an already difficult time. The house is
            often the largest marital asset, and how you divide it, or the
            proceeds from selling it, matters. You need a buyer who can close on
            schedule, a process that doesn&apos;t drag on for months, and a sale
            that doesn&apos;t become another thing to argue about.
          </p>
          <p>
            Equitable division is the goal, but getting there can be messy.
            Traditional listings mean showings, staging, negotiation, and the
            uncertainty of whether a buyer will actually close. If one spouse
            wants to sell quickly and the other wants to hold out for more money,
            the back-and-forth can stall everything. A single, transparent offer
            can simplify the decision: both parties see the same number, the same
            closing date, and the same net proceeds. No negotiation games. No
            waiting.
          </p>
          <p>
            We buy houses during divorce as-is. Deferred maintenance,
            conflict-related neglect, or a house that hasn&apos;t been updated in
            years: we factor it all in. You don&apos;t need to agree on (or pay
            for) repairs before selling. When you need to{" "}
            <Link
              href="/sell-your-house-fast"
              className="font-medium text-brand-700 hover:underline"
            >
              sell the house fast
            </Link>
            , we can typically close in two to four weeks, with a closing date in
            our offer. Proceeds are disbursed at closing according to your divorce
            agreement or court order. We provide a clear sale amount, and you and
            your attorneys determine the split.
          </p>
          <p>
            No open houses, no strangers walking through, no staging. Privacy and
            simplicity when you need it most. Get an offer so you know your
            option. Use it in settlement discussions or decide later. We&apos;re
            here when you&apos;re ready.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title="How the Open-Book Certainty Offer applies to divorce" />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            For divorcing couples, one clear offer can reduce conflict. Both
            spouses see the same numbers, with no hidden deductions and no
            last-minute changes. Our{" "}
            <Link
              href="/no-surprise-pledge"
              className="font-medium text-brand-700 hover:underline"
            >
              No Surprise Pledge
            </Link>{" "}
            means the offer we agree to is the offer you get. Speed and certainty
            can help you finalize assets and move on faster.
          </p>
          <p>
            We work with attorneys when needed and can structure the sale to align
            with your settlement. Explore the process in the{" "}
            <Link
              href="/open-book-certainty-offer"
              className="font-medium text-brand-700 hover:underline"
            >
              Open-Book Certainty Offer
            </Link>{" "}
            and{" "}
            <Link
              href="/how-it-works"
              className="font-medium text-brand-700 hover:underline"
            >
              how it works
            </Link>
            .
          </p>
        </div>
      </Section>

      <CaseStudyCards limit={1} featuredOnly={true} />

      <FaqAccordion faqs={situation.faqs} title="Divorce and house sale FAQs" />

      <Section tone="paper" compact className="border-y border-navy-100">
        <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950">
          We serve all of southwest Missouri
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/areas/springfield-mo" className="text-brand-700 hover:underline">Springfield, MO</Link>
          <Link href="/areas/ozark-mo" className="text-brand-700 hover:underline">Ozark, MO</Link>
          <Link href="/areas/nixa-mo" className="text-brand-700 hover:underline">Nixa, MO</Link>
          <Link href="/areas/republic-mo" className="text-brand-700 hover:underline">Republic, MO</Link>
          <Link href="/areas/battlefield-mo" className="text-brand-700 hover:underline">Battlefield, MO</Link>
          <Link href="/areas" className="font-medium text-brand-700 hover:underline">View all areas &rarr;</Link>
        </div>
      </Section>

      <CtaSection
        heading="Ready to simplify the house sale during your divorce?"
        subheading="One clear number, one closing date. One less thing to argue about."
      />
    </>
  );
}
