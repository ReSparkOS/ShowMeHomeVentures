import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaSection } from "@/components/sections/cta-section";
import { SituationsGrid } from "@/components/sections/situations-grid";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

export const metadata = createMetadata({
  title: "Sell Your House in Any Situation | Springfield MO",
  description:
    "Inherited, foreclosure, divorce, tenant, hoarder, vacant, or code-violation homes in Springfield, MO? Get a clear cash offer with every number explained.",
  path: "/situations",
  keywords: [
    "sell inherited house Springfield MO",
    "foreclosure help Springfield Missouri",
    "sell rental with tenants Springfield",
    "sell hoarder house Springfield MO",
  ],
});

export default function SituationsHubPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Sell a House in Any Situation in Springfield, MO",
          description:
            "Local support for inherited homes, foreclosure timelines, divorce sales, code violations, tenant-occupied rentals, and as-is properties.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Situations", url: "/situations" },
        ])}
      />
      <Hero
        heading="Selling a House in a Tough Situation?"
        subheading="Whatever you're facing, the Open-Book Certainty Offer™ gives you a clear path forward."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{
          text: "See How It Works",
          href: "/how-it-works",
        }}
        primaryCtaSlot={
          <LeadFormDialog triggerText="Get My Cash Offer" triggerSize="lg" />
        }
      />

      <SituationsGrid
        heading="We buy houses in every situation"
        description="No judgment, no pressure. Pick the situation that fits and see how we can help."
      />

      <Section>
        <SectionHeading title="Every situation gets the same transparent process" />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            No matter which situation brought you here, our Open-Book offer works
            the same way. We show you the numbers, we lock in a closing date, and
            we stand behind our No Surprise Pledge.
          </p>
          <p>
            No situation is too messy for us. As local{" "}
            <Link
              href="/we-buy-houses-springfield-mo"
              className="font-medium text-brand-700 hover:underline"
            >
              house buyers in Springfield
            </Link>
            , we&apos;ve worked with families in grief, landlords who are done,
            homeowners facing foreclosure, and people who just need to move on.
            Our process is built to reduce stress, not add to it: one clear offer,
            one real deadline, and no hidden fees or last-minute changes.
          </p>
          <p>
            Learn more about our approach in{" "}
            <Link
              href="/open-book-certainty-offer"
              className="font-medium text-brand-700 hover:underline"
            >
              the Open-Book Certainty Offer
            </Link>
            , our{" "}
            <Link
              href="/no-surprise-pledge"
              className="font-medium text-brand-700 hover:underline"
            >
              No Surprise Pledge
            </Link>
            , and{" "}
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

      <CtaSection />
    </>
  );
}
