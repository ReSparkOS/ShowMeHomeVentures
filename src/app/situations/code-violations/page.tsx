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

const situation = situations.find((s) => s.slug === "code-violations")!;

export function generateMetadata(): Metadata {
  return createMetadata({
    title: situation.metaTitle,
    description: situation.metaDescription,
    path: `/situations/${situation.slug}`,
  });
}

export default function CodeViolationsPage() {
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
            Code violations in Springfield, Greene County, or other Ozarks
            municipalities can make selling a house nearly impossible through
            traditional channels. Buyers and their lenders often walk away when
            they see open violations: zoning issues, building code problems, fire
            safety citations, or condemnation risk. Meanwhile, fines accumulate.
            Repair costs to bring the property into compliance can be steep. And
            if the city sets a deadline, the pressure is intense.
          </p>
          <p>
            We{" "}
            <Link
              href="/we-buy-houses-springfield-mo"
              className="font-medium text-brand-700 hover:underline"
            >
              buy houses in Springfield as-is
            </Link>
            , code violations and all. You don&apos;t need to fix anything before
            selling. We take on the responsibility of resolving violations after
            we own the property. Our Open-Book Certainty Offer&trade; factors in
            the cost of bringing the home into compliance, so you see the numbers
            upfront, with no hidden deductions at closing. We&apos;re familiar
            with local codes and enforcement in Springfield, Greene County,
            Christian County, and surrounding Ozarks communities.
          </p>
          <p>
            Accumulated violations on a vacant or inherited property, fines and
            liens from past citations, a looming court date or city deadline: we
            can often close in two to four weeks. Time-sensitive situations need a
            buyer who can move. We put the closing date in our offer so you have a
            real timeline.
          </p>
          <p>
            Stop fighting city hall. Get a clear offer, close, and move on. No
            obligation, no pressure, just an honest evaluation of your situation.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title="How the Open-Book Certainty Offer applies to code violations" />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            For properties with code issues, transparency matters. We show you how
            we factor compliance costs into our offer. Our{" "}
            <Link
              href="/no-surprise-pledge"
              className="font-medium text-brand-700 hover:underline"
            >
              No Surprise Pledge
            </Link>{" "}
            means no last-minute deductions. What we agree to is what you get.
            We&apos;ll do our best to close before court dates or deadlines; the
            sooner you reach out, the more flexibility we have.
          </p>
          <p>
            Explore the full process in the{" "}
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

      <CaseStudyCards
        limit={1}
        situationFilter="Code Violations"
        featuredOnly={false}
      />

      <FaqAccordion faqs={situation.faqs} title="Code violation FAQs" />

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
        heading="Ready to sell a house with code violations?"
        subheading="No fixes required. Close without resolving the citations yourself."
      />
    </>
  );
}
