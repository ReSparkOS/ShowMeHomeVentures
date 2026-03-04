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

const situation = situations.find((s) => s.slug === "vacant-property")!;

export function generateMetadata(): Metadata {
  return createMetadata({
    title: situation.metaTitle,
    description: situation.metaDescription,
    path: `/situations/${situation.slug}`,
  });
}

export default function VacantPropertyPage() {
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
            A vacant house in Springfield or the Ozarks can drain your wallet and
            your peace of mind. You&apos;re paying insurance, utilities (if
            applicable), property taxes, and possibly lawn care or winterization—all
            for a property you don&apos;t want or can&apos;t use. Vacant homes
            attract vandalism, squatters, and deterioration. Pipes freeze. Pests
            move in. The longer it sits, the worse it gets—and the more it costs
            you.
          </p>
          <p>
            Traditional buyers often avoid vacant properties. They worry about
            deferred maintenance, unknown issues, and the risk of buying a house
            that&apos;s been empty for months or years. Lenders share those
            concerns. We buy vacant properties routinely. We factor in the
            condition, the holding costs we&apos;ll incur, and the work required
            to make the property market-ready. Our Open-Book Certainty Offer™
            shows you the numbers so you understand exactly what we&apos;re
            offering—and when we&apos;ll close.
          </p>
          <p>
            Whether the house has been vacant for a few months or many years,
            whether it&apos;s suffered vandalism or simply needs a deep clean—we
            buy as-is. You don&apos;t need to maintain it until closing beyond
            basic responsibility; we can often close in two to four weeks. The
            closing date is in our offer, so you know exactly when the burden
            ends.
          </p>
          <p>
            We buy vacant properties across the Springfield metro and Ozarks
            region—including Ozark, Nixa, Republic, Battlefield, and surrounding
            areas. Same process, same transparency. Stop paying to hold a
            property you don&apos;t want. Get a clear offer and a closing date.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How the Open-Book Certainty Offer Applies to Vacant Properties
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              For vacant homes, we show you our estimated repair or holding costs
              and our offer—all in one breakdown. Our{" "}
              <Link href="/no-surprise-pledge" className="text-emerald-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means no hidden fees at closing. What we agree to is what you get.
              The longer a property sits vacant, the more it costs you—we can
              help you offload it quickly.
            </p>
            <p>
              Learn more about our process in the{" "}
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

      <FaqAccordion faqs={situation.faqs} title="Vacant Property FAQs" />

      <CtaSection
        heading="Ready to Stop Paying for a Vacant House?"
        subheading="Get an Open-Book Certainty Offer™—a clear number and a closing date. We buy vacant properties as-is."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
