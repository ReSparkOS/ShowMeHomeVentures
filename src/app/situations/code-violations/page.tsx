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
            Code violations in Springfield, Greene County, or other Ozarks
            municipalities can make selling a house nearly impossible through
            traditional channels. Buyers and their lenders often walk away when
            they see open violations—zoning issues, building code problems, fire
            safety citations, or condemnation risk. Meanwhile, fines accumulate.
            Repair costs to bring the property into compliance can be steep. And
            if the city sets a deadline, the pressure is intense.
          </p>
          <p>
            We buy houses with code violations as-is. You don&apos;t need to fix
            anything before selling. We take on the responsibility of resolving
            violations after we own the property. Our Open-Book Certainty Offer™
            factors in the cost of bringing the home into compliance, so you see
            the numbers upfront—no hidden deductions at closing. We&apos;re
            familiar with local codes and enforcement in Springfield, Greene
            County, Christian County, and surrounding Ozarks communities.
          </p>
          <p>
            Whether it&apos;s accumulated violations on a vacant or inherited
            property, fines and liens from past citations, or a looming court date
            or city deadline—we can often close in two to four weeks. Time-sensitive
            situations need a buyer who can move. We put the closing date in our
            offer so you have a real timeline.
          </p>
          <p>
            Stop fighting city hall. Get a clear offer, close, and move on. No
            obligation, no pressure—just an honest evaluation of your
            situation.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How the Open-Book Certainty Offer Applies to Code Violations
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              For properties with code issues, transparency matters. We show you
              how we factor compliance costs into our offer. Our{" "}
              <Link href="/no-surprise-pledge" className="text-emerald-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means no last-minute deductions. What we agree to is what you get.
              We&apos;ll do our best to close before court dates or deadlines—the
              sooner you reach out, the more flexibility we have.
            </p>
            <p>
              Explore the full process in the{" "}
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
        situationFilter="Code Violations"
        featuredOnly={false}
      />

      <FaqAccordion faqs={situation.faqs} title="Code Violations FAQs" />

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
        heading="Ready to Sell a House with Code Violations?"
        subheading="No fixes required. Get an Open-Book Certainty Offer™ and close without resolving citations yourself."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
