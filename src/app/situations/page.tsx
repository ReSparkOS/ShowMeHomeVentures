import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SituationsGrid } from "@/components/sections/situations-grid";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

export const metadata = createMetadata({
  title: "Sell Your House in Any Situation | Springfield MO",
  description:
    "Inherited houses, foreclosures, divorces, tenant-occupied rentals, hoarder homes, code violations, and more. Whatever your situation in Springfield or the Ozarks, the Open-Book Certainty Offer™ gives you a clear path forward.",
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
        primaryCta={{ text: "Get My Open-Book Offer", href: "/get-offer" }}
        secondaryCta={{
          text: "How It Works",
          href: "/how-it-works",
        }}
        primaryCtaSlot={
          <LeadFormDialog triggerText="Get My Open-Book Offer" triggerSize="lg" />
        }
      />

      <SituationsGrid
        heading="Your Situation, Our Solution"
        description="We buy houses in a range of situations—no judgment, no pressure. Click any situation below to learn how we can help."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Every Situation Gets the Same Transparent Process
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              Whether you&apos;re dealing with an inherited house, a foreclosure timeline,
              a divorce, tenants, code violations, or a property that simply needs
              too many repairs—the Open-Book Certainty Offer™ works the same way.
              We show you the numbers. We lock in a closing date. And we stick to
              our No Surprise Pledge.
            </p>
            <p>
              No situation is too messy for us. We&apos;ve worked with families in
              grief, landlords who are done, homeowners facing foreclosure, and
              people who just need to move on. Our process is designed to reduce
              stress, not add to it. You get one clear offer, one real deadline,
              and no hidden fees or last-minute changes.
            </p>
            <p>
              Learn more about our approach in{" "}
              <Link href="/open-book-certainty-offer" className="text-blue-700 font-medium hover:underline">
                the Open-Book Certainty Offer
              </Link>
              , our{" "}
              <Link href="/no-surprise-pledge" className="text-blue-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>
              , and{" "}
              <Link href="/how-it-works" className="text-blue-700 font-medium hover:underline">
                how it works
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready for an Offer You Can Actually Understand?"
        subheading="Get your Open-Book Certainty Offer™—transparent numbers, a real closing date, and no surprises."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
