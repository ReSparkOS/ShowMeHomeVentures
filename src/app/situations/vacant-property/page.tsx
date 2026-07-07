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
            A vacant house in Springfield or the Ozarks can drain your wallet and
            your peace of mind. You&apos;re paying insurance, utilities (if
            applicable), property taxes, and possibly lawn care or winterization,
            all for a property you don&apos;t want or can&apos;t use. Vacant homes
            attract vandalism, squatters, and deterioration. Pipes freeze. Pests
            move in. The longer it sits, the worse it gets, and the more it costs
            you.
          </p>
          <p>
            Traditional buyers often avoid vacant properties. They worry about
            deferred maintenance, unknown issues, and the risk of buying a house
            that&apos;s been empty for months or years. Lenders share those
            concerns. We buy vacant properties routinely. We factor in the
            condition, the holding costs we&apos;ll incur, and the work required
            to make the property market-ready. Our Open-Book Certainty Offer&trade;
            shows you the numbers so you understand exactly what we&apos;re
            offering, and when we&apos;ll close.
          </p>
          <p>
            The house may have been vacant for a few months or many years, and it
            may have suffered vandalism or simply need a deep clean. We buy as-is.
            You don&apos;t need to maintain it until closing beyond basic
            responsibility, and if you want to{" "}
            <Link
              href="/sell-your-house-fast"
              className="font-medium text-brand-700 hover:underline"
            >
              sell the house fast
            </Link>
            , we can often close in two to four weeks. The closing date is in our
            offer, so you know exactly when the burden ends.
          </p>
          <p>
            We buy vacant properties across the Springfield metro and Ozarks
            region, including Ozark, Nixa, Republic, Battlefield, and surrounding
            areas. Same process, same transparency. Stop paying to hold a property
            you don&apos;t want. Get a clear offer and a closing date.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title="How the Open-Book Certainty Offer applies to vacant properties" />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            For vacant homes, we show you our estimated repair or holding costs
            and our offer, all in one breakdown. Our{" "}
            <Link
              href="/no-surprise-pledge"
              className="font-medium text-brand-700 hover:underline"
            >
              No Surprise Pledge
            </Link>{" "}
            means no hidden fees at closing. What we agree to is what you get. The
            longer a property sits vacant, the more it costs you, and we can help
            you offload it quickly.
          </p>
          <p>
            Learn more about our process in the{" "}
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

      <FaqAccordion faqs={situation.faqs} title="Vacant property FAQs" />

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
        heading="Ready to stop paying for a vacant house?"
        subheading="A clear number and a closing date. We buy vacant properties as-is."
      />
    </>
  );
}
