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
            Selling a rental property with tenants in Springfield or the Ozarks
            adds layers of complexity that traditional buyers often avoid. You
            have lease terms to consider, Missouri landlord-tenant law to navigate,
            and the awkward reality of coordinating showings with people who live
            in the property. If a tenant is behind on rent or has caused damage,
            the stress multiplies. Many investors and conventional buyers won&apos;t
            touch tenant-occupied properties—they want vacant possession or a
            clean eviction, and that can take months.
          </p>
          <p>
            We buy rental properties with tenants in place. No evictions required.
            No showings, no staging, no waiting for leases to expire. We assume
            the landlord role at closing and handle tenant communication
            ourselves. Whether you have a single-family rental in Westside, a
            duplex in Rountree, or a small multi-family property elsewhere in the
            Springfield metro, we evaluate the property and occupancy status
            together and provide a clear offer.
          </p>
          <p>
            Inherited rentals with existing tenants, properties where tenants are
            behind on rent, or situations where you&apos;re simply done being a
            landlord—we&apos;ve seen it all. Our Open-Book Certainty Offer™
            reflects the property condition and tenant situation. You see the
            numbers. You get a guaranteed closing date. And at closing, you&apos;re
            free of landlord duties. We can often close in as few as two weeks.
          </p>
          <p>
            Missouri has specific notice requirements when selling rented
            property. We work within the legal framework and your timeline. Our
            goal is a smooth closing that respects both you and the tenants—no
            drama, no surprises.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How the Open-Book Certainty Offer Applies to Tenant-Occupied Rentals
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              For rentals with tenants, clarity and speed matter. You need a buyer
              who won&apos;t back out because of the occupancy, and you need to
              know exactly when you&apos;ll be done. Our{" "}
              <Link href="/no-surprise-pledge" className="text-emerald-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means the offer we agree to is the offer you get. We factor tenant
              status, lease terms, and property condition into our breakdown—all
              visible to you.
            </p>
            <p>
              We close with tenants in place and assume the lease. You walk away
              with a check and no more landlord headaches. Learn more in the{" "}
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

      <CaseStudyCards
        limit={1}
        situationFilter="Rental with Tenants"
        featuredOnly={false}
      />

      <FaqAccordion faqs={situation.faqs} title="Rental with Tenants FAQs" />

      <CtaSection
        heading="Ready to Sell Your Rental—Tenants and All?"
        subheading="Get an Open-Book Certainty Offer™. No evictions, no showings—just a clear offer and a closing date."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
