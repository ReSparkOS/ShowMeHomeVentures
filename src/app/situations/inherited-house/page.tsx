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

const situation = situations.find((s) => s.slug === "inherited-house")!;

export function generateMetadata(): Metadata {
  return createMetadata({
    title: situation.metaTitle,
    description: situation.metaDescription,
    path: `/situations/${situation.slug}`,
  });
}

export default function InheritedHousePage() {
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
            Inheriting a house in Springfield or the Ozarks can be one of
            life&apos;s most emotionally complex moments. You&apos;re managing
            grief, coordinating with siblings or other heirs, and suddenly
            you&apos;re responsible for a property that may be hundreds of miles
            away. The last thing you need is pressure from a buyer or confusion
            about what your options actually are.
          </p>
          <p>
            Many inherited properties come with complications: probate
            isn&apos;t finished, the house has sat vacant for months or years,
            repairs have piled up, and there may be back taxes, liens, or HOA
            dues. Out-of-state heirs face the added challenge of not being able
            to visit, maintain, or show the property. Tax questions like
            stepped-up basis and capital gains add another layer. It&apos;s a lot
            to navigate when you&apos;re already carrying the weight of loss.
          </p>
          <p>
            We&apos;ve worked with many families in this exact situation. We
            don&apos;t push and we don&apos;t pressure. We provide one clear
            number, one real closing date, and a breakdown you can actually
            understand. Sole heir or one of several, probate or already cleared,
            across town or across the country, our Open-Book Certainty Offer&trade;
            gives you a path forward so you can focus on what matters.
          </p>
          <p>
            We{" "}
            <Link
              href="/we-buy-houses-springfield-mo"
              className="font-medium text-brand-700 hover:underline"
            >
              buy houses across Springfield
            </Link>{" "}
            in any condition, and we take inherited homes as-is. No cleanout
            required, no repairs needed, no agent fees. You see exactly how we
            arrived at our offer. If it doesn&apos;t work for you, you walk away
            with no obligation.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title="How the Open-Book Certainty Offer applies to your inherited house" />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            For inherited properties, clarity is everything. Heirs often
            disagree on whether to repair, list, or sell quickly. Our offer
            removes the guesswork: everyone sees the same numbers, the same
            closing date, and the same net proceeds. No hidden fees, no
            last-minute deductions. Our{" "}
            <Link
              href="/no-surprise-pledge"
              className="font-medium text-brand-700 hover:underline"
            >
              No Surprise Pledge
            </Link>{" "}
            means what we agree to is what you get.
          </p>
          <p>
            We factor in probate timelines, repair costs, and any liens or back
            taxes. You&apos;ll know exactly what you&apos;re walking away with
            before you sign anything. Learn more about our process in the{" "}
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
        situationFilter="Inherited House"
        featuredOnly={false}
      />

      <FaqAccordion faqs={situation.faqs} title="Inherited house FAQs" />

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
        heading="Ready to move forward with your inherited house?"
        subheading="No pressure, no agent fees. Get a clear number and a closing date you can count on."
      />
    </>
  );
}
