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

const situation = situations.find((s) => s.slug === "house-needs-repairs")!;

export function generateMetadata(): Metadata {
  return createMetadata({
    title: situation.metaTitle,
    description: situation.metaDescription,
    path: `/situations/${situation.slug}`,
  });
}

export default function HouseNeedsRepairsPage() {
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
            A house that needs repairs can feel like a trap. Roof leaks, foundation
            cracks, outdated HVAC, water damage, mold—the list grows and so does
            the cost. In Springfield and the Ozarks, many homes have decades of
            deferred maintenance. Traditional buyers and their lenders often walk
            away when inspections reveal issues. Listing means either shelling out
            for repairs you can&apos;t afford or watching your home sit on the
            market while you pay insurance, taxes, and utilities.
          </p>
          <p>
            Contractor hassles are real. Getting bids, coordinating schedules,
            managing permits—it&apos;s a part-time job. And even after you spend
            thousands, there&apos;s no guarantee a buyer will pay full value. The
            as-is market is different. Investors like us factor repair costs
            upfront and buy the property in its current condition. No repair loans,
            no staging, no months of uncertainty. You get a clear offer and a
            closing date.
          </p>
          <p>
            Our Open-Book Certainty Offer™ shows you exactly how we arrive at our
            number: after-repair value, estimated renovation costs, holding
            expenses, and a modest risk buffer. You see the math. No hidden
            deductions or surprise fees at closing. We buy homes with roof damage,
            foundation issues, faulty systems, fire damage, and mid-renovation
            projects that ran out of steam. If a conventional buyer would shy
            away, we&apos;re used to it.
          </p>
          <p>
            You don&apos;t need to spend a dime getting the house ready. No
            inspections, no contractor bids, no staging. Just share the details
            with us, and we&apos;ll provide a written offer—typically within 24 to
            48 hours. If it works for you, we close. If not, you walk away with no
            obligation.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How the Open-Book Certainty Offer Applies to Your Repair-Needed House
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              For houses that need work, transparency matters more than ever. You
              deserve to see where our offer comes from—not a vague number, but a
              breakdown of repair costs, holding costs, and our margin. Our{" "}
              <Link href="/no-surprise-pledge" className="text-emerald-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means we won&apos;t come back at closing with a lower price or
              invented fees. What we agree to is what you get.
            </p>
            <p>
              We routinely buy homes with structural concerns, failed inspections,
              and mid-renovation projects. Our offer reflects the real cost of
              making the property market-ready. Explore the full process in the{" "}
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

      <FaqAccordion faqs={situation.faqs} title="House Needs Repairs FAQs" />

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
        heading="Ready to Sell Your House As-Is?"
        subheading="Skip the repairs. Get an Open-Book Certainty Offer™ with transparent numbers and a closing date—no surprises."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
