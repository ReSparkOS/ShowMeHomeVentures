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

const situation = situations.find((s) => s.slug === "hoarder-house")!;

export function generateMetadata(): Metadata {
  return createMetadata({
    title: situation.metaTitle,
    description: situation.metaDescription,
    path: `/situations/${situation.slug}`,
  });
}

export default function HoarderHousePage() {
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
            Selling a hoarder house in Springfield or the Ozarks can feel
            overwhelming, and for family members handling an inherited or
            neglected property, the emotional weight is real. Cleanout costs add
            up fast. Judgment from strangers, contractors, or even well-meaning
            neighbors can make the process harder. And there&apos;s the
            uncertainty: who will even buy a house in this condition?
          </p>
          <p>
            We{" "}
            <Link
              href="/we-buy-houses-springfield-mo"
              className="font-medium text-brand-700 hover:underline"
            >
              buy houses in Springfield
            </Link>{" "}
            in any condition, and we take hoarder homes as-is. No cleanout
            required. No shame, no pressure. We handle the trash removal,
            remediation, and any necessary hazmat or biohazard cleanup ourselves.
            We factor those costs into our Open-Book Certainty Offer&trade; so you
            see the full picture, with no surprises at closing. The house may have
            accumulated items for years, taken on structural damage from the
            weight of the hoard, or sit as an inherited property you&apos;re
            managing from afar. We&apos;ve helped many families move forward with
            dignity.
          </p>
          <p>
            You don&apos;t need to hire cleanout crews or spend weeks clearing the
            property. In many cases, you or a family member can remove keepsakes
            or specific items before closing, and we&apos;ll work with you on
            timing. We buy for the structure and the lot; the condition of the
            interior is our responsibility. Our offer reflects the cost of
            bringing the property back to a salable state.
          </p>
          <p>
            We work with executors, heirs, and family members making decisions
            together. One clear offer can help everyone agree without arguing over
            repairs or cleanout logistics. We typically close in two to four
            weeks, with the closing date in our offer. You&apos;ll know exactly
            when the property is no longer your responsibility.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title="How the Open-Book Certainty Offer applies to hoarder houses" />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            For hoarder properties, you deserve to know exactly what we&apos;re
            offering and why. We break down cleanout costs, repair estimates, and
            our offer, all visible to you. Our{" "}
            <Link
              href="/no-surprise-pledge"
              className="font-medium text-brand-700 hover:underline"
            >
              No Surprise Pledge
            </Link>{" "}
            means no hidden deductions. What we agree to is what you get.
          </p>
          <p>
            We&apos;ve bought many hoarder homes in the Springfield area. No
            judgment, no pressure, just a clear path forward. Learn more in the{" "}
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

      <FaqAccordion faqs={situation.faqs} title="Hoarder house FAQs" />

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
        heading="Ready to move forward with a hoarder house?"
        subheading="No cleanout. No judgment. Just a clear number and a closing date."
      />
    </>
  );
}
