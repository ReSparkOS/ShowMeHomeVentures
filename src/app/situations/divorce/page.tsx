import type { Metadata } from "next";
import Link from "next/link";
import { situations } from "@/data/situations";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { CaseStudyCards } from "@/components/sections/case-study-cards";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { JsonLd, faqSchema, serviceSchema } from "@/components/seo/json-ld";
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
      <JsonLd data={faqSchema(situation.faqs)} />
      <JsonLd
        data={serviceSchema({
          name: situation.title,
          description: situation.description,
          areaServed: "Springfield, MO and the Ozarks region",
        })}
      />

      <Hero
        heading={situation.heroHeading}
        subheading={situation.heroSubheading}
        primaryCta={{ text: "Get My Open-Book Offer", href: "/get-offer" }}
        secondaryCta={{
          text: "How It Works",
          href: "/how-it-works",
        }}
        primaryCtaSlot={
          <LeadFormDialog triggerText="Get My Open-Book Offer" triggerSize="lg" />
        }
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-slate-600">
          <p>
            Selling a home during divorce in Springfield or the Ozarks adds
            another layer of stress to an already difficult time. The house is
            often the largest marital asset, and how you divide it—or the proceeds
            from selling it—matters. You need a buyer who can close on schedule, a
            process that doesn&apos;t drag on for months, and a sale that doesn&apos;t
            become another thing to argue about.
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
            We buy houses during divorce as-is. Deferred maintenance, conflict-related
            neglect, or a house that hasn&apos;t been updated in years—we factor it
            all in. You don&apos;t need to agree on (or pay for) repairs before
            selling. We can typically close in two to four weeks, with a closing
            date in our offer. Proceeds are disbursed at closing according to your
            divorce agreement or court order—we provide a clear sale amount; you
            and your attorneys determine the split.
          </p>
          <p>
            No open houses, no strangers walking through, no staging. Privacy and
            simplicity when you need it most. Get an offer so you know your
            option—use it in settlement discussions or decide later. We&apos;re here
            when you&apos;re ready.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How the Open-Book Certainty Offer Applies to Divorce
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              For divorcing couples, one clear offer can reduce conflict. Both
              spouses see the same numbers—no hidden deductions, no last-minute
              changes. Our{" "}
              <Link href="/no-surprise-pledge" className="text-emerald-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means the offer we agree to is the offer you get. Speed and
              certainty can help you finalize assets and move on faster.
            </p>
            <p>
              We work with attorneys when needed and can structure the sale to
              align with your settlement. Explore the process in the{" "}
              <Link href="/open-book-certainty-offer" className="text-emerald-700 font-medium hover:underline">
                Open-Book Certainty Offer
              </Link>{" "}
              and{" "}
              <Link href="/how-it-works" className="text-emerald-700 font-medium hover:underline">
                how it works
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CaseStudyCards limit={1} featuredOnly={true} />

      <FaqAccordion faqs={situation.faqs} title="Divorce & House Sale FAQs" />

      <CtaSection
        heading="Ready to Simplify the House Sale During Your Divorce?"
        subheading="Get an Open-Book Certainty Offer™—one clear number, one closing date. One less thing to argue about."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
