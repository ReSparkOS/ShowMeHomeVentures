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

const situation = situations.find((s) => s.slug === "foreclosure-options")!;

export function generateMetadata(): Metadata {
  return createMetadata({
    title: situation.metaTitle,
    description: situation.metaDescription,
    path: `/situations/${situation.slug}`,
  });
}

export default function ForeclosureOptionsPage() {
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
            Facing foreclosure in Springfield or the Ozarks is one of the most
            stressful experiences a homeowner can have. The timeline is urgent.
            Notices from your lender escalate. A foreclosure sale date looms. And
            the impact on your credit—a foreclosure can haunt you for years—makes
            the stakes even higher. You need options, and you need them fast.
          </p>
          <p>
            Selling your home before foreclosure is one of the best paths forward.
            A sale to a cash buyer pays off (or satisfies) the mortgage and stops
            the foreclosure process. Your credit report shows a paid mortgage, not
            a foreclosure—a crucial distinction for future home purchases and
            financial stability. The sooner you act, the more options you have.
            Once a sale date is set, the window narrows.
          </p>
          <p>
            We understand the urgency. We can often close in two to four weeks,
            and we put the closing date in our offer—no vague promises or
            last-minute delays that could push you past a sale date. We
            coordinate with lenders on pay-off amounts and closing logistics.
            If you owe more than the house is worth, we may be able to help
            through a short sale structure—we&apos;ll discuss your numbers
            honestly, with no pressure and no empty promises.
          </p>
          <p>
            You have the right to explore your options. Our Open-Book Certainty
            Offer™ gives you a real number and a real date so you can make an
            informed choice. No obligation. No judgment. Just clarity when you
            need it most.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How the Open-Book Certainty Offer Applies to Foreclosure
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              When time is critical, you need a buyer who delivers. Our closing
              date isn&apos;t a maybe—it&apos;s in our offer. Our{" "}
              <Link href="/no-surprise-pledge" className="text-emerald-700 font-medium hover:underline">
                No Surprise Pledge
              </Link>{" "}
              means we won&apos;t come back at the last minute with a lower price
              or new conditions. What we agree to is what you get. That matters
              when you&apos;re racing a foreclosure sale date.
            </p>
            <p>
              We show you the numbers so you understand exactly what you&apos;ll
              net. You can stay in the property until closing. Get the full
              picture in the{" "}
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
        situationFilter="Foreclosure"
        featuredOnly={false}
      />

      <FaqAccordion faqs={situation.faqs} title="Foreclosure FAQs" />

      <CtaSection
        heading="Facing Foreclosure? Explore Your Options Today"
        subheading="Get an Open-Book Certainty Offer™—a real number and a real closing date. No judgment, no obligation."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
