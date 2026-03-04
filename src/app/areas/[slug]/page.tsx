import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas } from "@/data/areas";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import {
  JsonLd,
  organizationSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  return Promise.resolve(params).then(({ slug }) => {
    const area = areas.find((a) => a.slug === slug);
    if (!area) return {};
    return createMetadata({
      title: area.metaTitle,
      description: area.metaDescription,
      path: `/areas/${area.slug}`,
    });
  });
}

function getAreaFaqs(city: string, county: string) {
  return [
    {
      question: `Do you really buy houses in ${city}?`,
      answer: `Yes. We actively buy houses throughout ${city} and ${county}. We're familiar with the neighborhoods, the market, and the types of properties that come up for sale. Whether you're near the center of town or on the edges, we provide the same Open-Book Certainty Offer™: transparent numbers, a real closing date, and no surprise fees.`,
    },
    {
      question: `What kinds of properties do you buy in ${city}?`,
      answer: `We buy single-family homes, duplexes, and small multi-family properties in ${city} and the surrounding area. We buy as-is—inherited houses, rentals with tenants, foreclosure situations, homes that need repairs, code violations, vacant properties, and more. If you're ready to sell, we're ready to make an offer.`,
    },
    {
      question: `How fast can you close on a house in ${city}?`,
      answer: `We can typically close in two to four weeks. The closing date is part of our Open-Book Certainty Offer™—you'll know exactly when we'll close before you sign anything. We work with local title companies and can coordinate with your timeline.`,
    },
    {
      question: `Do I need to make repairs before selling?`,
      answer: `No. We buy homes in any condition throughout ${city}. No repairs, no staging, no inspections required on your end. We evaluate the property, factor in the cost of any needed work, and provide a clear offer. You see the numbers before you decide.`,
    },
    {
      question: `Is there any obligation to accept your offer?`,
      answer: `None. We'll provide an Open-Book Certainty Offer™ so you can see your options. You're never obligated to accept. We believe you deserve clarity—no pressure, no strings attached. If our offer doesn't work for you, you walk away.`,
    },
    {
      question: `What areas near ${city} do you serve?`,
      answer: `We buy houses throughout the Springfield metro and Ozarks region, including ${city}, neighboring communities, and the surrounding ${county} area. If you're in a nearby town, reach out—we may be able to help or refer you to someone who can.`,
    },
  ];
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const areaFaqs = getAreaFaqs(area.city, area.county);
  const areaServed = `${area.city}, ${area.state}`;

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={serviceSchema({
          name: `We Buy Houses in ${area.city}, ${area.state}`,
          description: area.description,
          areaServed,
        })}
      />
      <JsonLd data={faqSchema(areaFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Areas We Serve", url: "/areas" },
          { name: area.city, url: `/areas/${area.slug}` },
        ])}
      />

      <Hero
        heading={area.heroHeading}
        subheading={area.heroSubheading}
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-slate-600 max-w-none">
            {area.description.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Neighborhoods We Serve in {area.city}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We buy houses throughout {area.city} and {area.county}, including
            these neighborhoods and surrounding areas.
          </p>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {area.neighborhoods.map((neighborhood) => (
              <li
                key={neighborhood}
                className="flex items-center gap-2 text-slate-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                {neighborhood}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Zip Codes
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We buy houses in {area.city} and the surrounding {area.county}{" "}
            area. Our service area includes these zip codes:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {area.zipCodes.map((zip) => (
              <span
                key={zip}
                className="rounded-lg bg-slate-100 px-4 py-2 font-mono text-slate-800"
              >
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Open-Book Certainty Offer in {area.city}
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              The same transparent process we use everywhere applies in {area.city}.
              Our Open-Book Certainty Offer™ shows you exactly how we arrive at
              our number—after-repair value, renovation costs, holding expenses,
              and a modest risk buffer. You see the math. You get a guaranteed
              closing date. And our{" "}
              <Link
                href="/no-surprise-pledge"
                className="text-blue-700 font-medium hover:underline"
              >
                No Surprise Pledge
              </Link>{" "}
              means what we agree to is what you get.
            </p>
            <p>
              Learn more about our approach in the{" "}
              <Link
                href="/open-book-certainty-offer"
                className="text-blue-700 font-medium hover:underline"
              >
                Open-Book Certainty Offer
              </Link>{" "}
              and{" "}
              <Link
                href="/how-it-works"
                className="text-blue-700 font-medium hover:underline"
              >
                how it works
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            Common Selling Situations in {area.city}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            No matter your situation, we can help. We buy houses in {area.city} from homeowners dealing with:
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/situations/inherited-house" className="text-blue-700 hover:underline">Inherited property</Link>
            <Link href="/situations/house-needs-repairs" className="text-blue-700 hover:underline">Houses needing repairs</Link>
            <Link href="/situations/foreclosure-options" className="text-blue-700 hover:underline">Foreclosure</Link>
            <Link href="/situations/divorce" className="text-blue-700 hover:underline">Divorce</Link>
            <Link href="/situations/tenants" className="text-blue-700 hover:underline">Tenant-occupied rentals</Link>
            <Link href="/situations/vacant-property" className="text-blue-700 hover:underline">Vacant properties</Link>
            <Link href="/situations/hoarder-house" className="text-blue-700 hover:underline">Hoarder houses</Link>
            <Link href="/situations/code-violations" className="text-blue-700 hover:underline">Code violations</Link>
            <Link href="/situations" className="font-medium text-blue-700 hover:underline">View all situations →</Link>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={areaFaqs}
        title={`Frequently Asked Questions About Selling in ${area.city}`}
      />

      <CtaSection
        heading={`Ready to Sell Your House in ${area.city}?`}
        subheading={`Get your Open-Book Certainty Offer™—transparent numbers, a real closing date, and no surprises. We buy houses throughout ${area.city} and ${area.county}.`}
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
