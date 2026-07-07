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
            Facing foreclosure in Springfield or the Ozarks is one of the most
            stressful experiences a homeowner can have. The timeline is urgent.
            Notices from your lender escalate. A foreclosure sale date looms. And
            a foreclosure can haunt your credit for years, which makes the stakes
            even higher. You need options, and you need them fast.
          </p>
          <p>
            <Link
              href="/sell-your-house-fast"
              className="font-medium text-brand-700 hover:underline"
            >
              Selling your home fast
            </Link>{" "}
            before foreclosure is one of the best paths forward. A sale to a cash
            buyer pays off (or satisfies) the mortgage and stops the foreclosure
            process. Your credit report shows a paid mortgage, not a foreclosure,
            a crucial distinction for future home purchases and financial
            stability. The sooner you act, the more options you have. Once a sale
            date is set, the window narrows.
          </p>
          <p>
            We understand the urgency. We can often close in two to four weeks,
            and we put the closing date in our offer, with no vague promises or
            last-minute delays that could push you past a sale date. We
            coordinate with lenders on pay-off amounts and closing logistics. If
            you owe more than the house is worth, we may be able to help through a
            short sale structure, and we&apos;ll discuss your numbers honestly,
            with no pressure and no empty promises.
          </p>
          <p>
            You have the right to explore your options. Our Open-Book Certainty
            Offer&trade; gives you a real number and a real date so you can make
            an informed choice. No obligation. No judgment. Just clarity when you
            need it most.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title="How the Open-Book Certainty Offer applies to foreclosure" />
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            When time is critical, you need a buyer who delivers. Our closing
            date isn&apos;t a maybe; it&apos;s in our offer. Our{" "}
            <Link
              href="/no-surprise-pledge"
              className="font-medium text-brand-700 hover:underline"
            >
              No Surprise Pledge
            </Link>{" "}
            means we won&apos;t come back at the last minute with a lower price or
            new conditions. What we agree to is what you get. That matters when
            you&apos;re racing a foreclosure sale date.
          </p>
          <p>
            We show you the numbers so you understand exactly what you&apos;ll
            net. You can stay in the property until closing. Get the full picture
            in the{" "}
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

      <CaseStudyCards
        limit={1}
        situationFilter="Foreclosure"
        featuredOnly={false}
      />

      <FaqAccordion faqs={situation.faqs} title="Foreclosure FAQs" />

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
        heading="Facing foreclosure? Explore your options today"
        subheading="Get a real number and a real closing date. No judgment, no obligation."
      />
    </>
  );
}
