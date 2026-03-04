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
            Inheriting a house in Springfield or the Ozarks can be one of life&apos;s
            most emotionally complex moments. You&apos;re managing grief, coordinating
            with siblings or other heirs, and suddenly you&apos;re responsible for a
            property that may be hundreds of miles away. The last thing you need
            is pressure from a buyer or confusion about what your options actually
            are.
          </p>
          <p>
            Many inherited properties come with complications: probate isn&apos;t
            finished, the house has sat vacant for months (or years), repairs have
            piled up, and there may be back taxes, liens, or HOA dues. Out-of-state
            heirs face the added challenge of not being able to visit, maintain, or
            show the property. Tax implications—stepped-up basis, capital gains—add
            another layer of questions. It&apos;s a lot to navigate when you&apos;re
            already carrying the weight of loss.
          </p>
          <p>
            We&apos;ve worked with many families in this exact situation. We don&apos;t
            push. We don&apos;t pressure. We provide one clear number, one real
            closing date, and a breakdown you can actually understand. Whether
            you&apos;re the sole heir or one of several, whether the house is in
            probate or already cleared, whether you&apos;re across town or across
            the country—our Open-Book Certainty Offer™ gives you a path forward so
            you can focus on what matters.
          </p>
          <p>
            We buy inherited homes as-is. No cleanout required, no repairs needed,
            no agent fees. You see exactly how we arrived at our offer. If it
            doesn&apos;t work for you, you walk away with no obligation. It&apos;s
            that simple.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How the Open-Book Certainty Offer Applies to Your Inherited House
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              For inherited properties, clarity is everything. Heirs often
              disagree on whether to repair, list, or sell quickly. Our offer
              removes the guesswork: everyone sees the same numbers, the same
              closing date, and the same net proceeds. No hidden fees, no
              last-minute deductions. Our{" "}
              <Link href="/no-surprise-pledge" className="text-emerald-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means what we agree to is what you get.
            </p>
            <p>
              We factor in probate timelines, repair costs, and any liens or back
              taxes. You&apos;ll know exactly what you&apos;re walking away with
              before you sign anything. Learn more about our process in the{" "}
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
        situationFilter="Inherited House"
        featuredOnly={false}
      />

      <FaqAccordion faqs={situation.faqs} title="Inherited House FAQs" />

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
        heading="Ready to Move Forward with Your Inherited House?"
        subheading="Get an Open-Book Certainty Offer™—no pressure, no agent fees. Just a clear number and a closing date you can count on."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
