import type { Metadata } from "next";
import Link from "next/link";
import { situations } from "@/data/situations";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { CaseStudyCards } from "@/components/sections/case-study-cards";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { JsonLd, faqSchema, serviceSchema, breadcrumbSchema } from "@/components/seo/json-ld";
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
      <JsonLd data={faqSchema(situation.faqs)} />
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
            Selling a hoarder house in Springfield or the Ozarks can feel
            overwhelming—and for family members handling an inherited or
            neglected property, the emotional weight is real. Cleanout costs add
            up fast. Judgment from strangers, contractors, or even well-meaning
            neighbors can make the process harder. And there&apos;s the uncertainty:
            who will even buy a house in this condition?
          </p>
          <p>
            We buy hoarder homes as-is. No cleanout required. No shame, no
            pressure. We handle the trash removal, remediation, and any necessary
            hazmat or biohazard cleanup ourselves. We factor those costs into our
            Open-Book Certainty Offer™ so you see the full picture—no surprises
            at closing. Whether the house has accumulated items for years, has
            structural damage from the weight of the hoard, or is an inherited
            property you&apos;re managing from afar, we&apos;ve helped many
            families move forward with dignity.
          </p>
          <p>
            You don&apos;t need to hire cleanout crews or spend weeks clearing
            the property. In many cases, you or a family member can remove
            keepsakes or specific items before closing—we&apos;ll work with you
            on timing. We buy for the structure and the lot; the condition of the
            interior is our responsibility. Our offer reflects the cost of
            bringing the property back to a salable state.
          </p>
          <p>
            We work with executors, heirs, and family members making decisions
            together. One clear offer can help everyone agree without arguing
            over repairs or cleanout logistics. We typically close in two to four
            weeks, with the closing date in our offer. You&apos;ll know exactly
            when the property is no longer your responsibility.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How the Open-Book Certainty Offer Applies to Hoarder Houses
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              For hoarder properties, you deserve to know exactly what we&apos;re
              offering and why. We break down cleanout costs, repair estimates,
              and our offer—all visible to you. Our{" "}
              <Link href="/no-surprise-pledge" className="text-emerald-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means no hidden deductions. What we agree to is what you get.
            </p>
            <p>
              We&apos;ve bought many hoarder homes in the Springfield area. No
              judgment, no pressure—just a clear path forward. Learn more in the{" "}
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

      <FaqAccordion faqs={situation.faqs} title="Hoarder House FAQs" />

      <section className="py-16 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            We Serve All of Southwest Missouri
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

      <CtaSection
        heading="Ready to Move Forward with a Hoarder House?"
        subheading="No cleanout. No judgment. Get an Open-Book Certainty Offer™—a clear number and a closing date."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
