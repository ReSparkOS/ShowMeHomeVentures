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

const situation = situations.find((s) => s.slug === "tenants")!;

export function generateMetadata(): Metadata {
  return createMetadata({
    title: situation.metaTitle,
    description: situation.metaDescription,
    path: `/situations/${situation.slug}`,
  });
}

export default function TenantsPage() {
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
            Selling a rental property with tenants in Springfield or the Ozarks
            adds layers of complexity that traditional buyers often avoid. You
            have lease terms to consider, Missouri landlord-tenant law to
            navigate, and the awkward reality of coordinating showings with
            people who live in the property. If a tenant is behind on rent or has
            caused damage, the stress multiplies. Many investors and conventional
            buyers won&apos;t touch tenant-occupied properties. They want vacant
            possession or a clean eviction, and that can take months.
          </p>
          <p>
            We buy rental properties with tenants in place. No evictions
            required. No showings, no staging, no waiting for leases to expire.
            We assume the landlord role at closing and handle tenant
            communication ourselves. From a single-family rental in Westside to a
            duplex in Rountree to a small multi-family property in the Springfield
            metro, we evaluate the property and occupancy together and give you a
            clear offer.
          </p>
          <p>
            Inherited rentals with existing tenants, properties where tenants are
            behind on rent, situations where you&apos;re simply done being a
            landlord: we&apos;ve seen it all. Our Open-Book Certainty Offer&trade;
            reflects the property condition and tenant situation. You see the
            numbers. You get a guaranteed closing date. And at closing,
            you&apos;re free of landlord duties. If you need to{" "}
            <Link
              href="/sell-your-house-fast"
              className="font-medium text-brand-700 hover:underline"
            >
              sell your house fast
            </Link>
            , we can often close in as few as two weeks.
          </p>
          <p>
            Missouri has specific notice requirements when selling rented
            property. We work within the legal framework and your timeline. Our
            goal is a smooth closing that respects both you and the tenants, with
            no drama and no surprises.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title="How the Open-Book Certainty Offer applies to tenant-occupied rentals" />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            For rentals with tenants, clarity and speed matter. You need a buyer
            who won&apos;t back out because of the occupancy, and you need to know
            exactly when you&apos;ll be done. Our{" "}
            <Link
              href="/no-surprise-pledge"
              className="font-medium text-brand-700 hover:underline"
            >
              No Surprise Pledge
            </Link>{" "}
            means the offer we agree to is the offer you get. We factor tenant
            status, lease terms, and property condition into our breakdown, all
            visible to you.
          </p>
          <p>
            We close with tenants in place and assume the lease. You walk away
            with a check and no more landlord headaches. Learn more in the{" "}
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
        situationFilter="Rental with Tenants"
        featuredOnly={false}
      />

      <FaqAccordion faqs={situation.faqs} title="Rental with tenants FAQs" />

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
        heading="Ready to sell your rental, tenants and all?"
        subheading="No evictions, no showings. Just a clear offer and a closing date."
      />
    </>
  );
}
