import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { areas, type Area } from "@/data/areas";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { Section, SectionHeading } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

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

/**
 * Builds visible FAQ answers that vary per city using the area data —
 * county, real local landmarks, and actual neighboring towns — so no two
 * city pages share find-and-replace answers.
 */
function getAreaFaqs(area: Area, nearbyCities: string[]) {
  const { city, county, neighborhoods } = area;
  const first = neighborhoods[0];
  const second = neighborhoods[1] ?? neighborhoods[0];
  const last = neighborhoods[neighborhoods.length - 1];
  const nearbyList = nearbyCities.slice(0, 3).join(", ");

  return [
    {
      question: `Do you really buy houses in ${city}?`,
      answer: `Yes. We actively buy across ${city} and ${county}, from ${first} to ${second}. We know the local market and the kinds of homes that come up here, and every seller gets the same Open-Book offer: transparent numbers, a real closing date, and no surprise fees.`,
    },
    {
      question: `What kinds of properties do you buy in ${city}?`,
      answer: `We buy single-family homes, duplexes, and small multi-family properties throughout ${city} and ${county}. We buy as-is: inherited houses, rentals with tenants, homes that need repairs, code violations, and vacant properties. If it sits in the ${last} area or anywhere nearby, we will take a look.`,
    },
    {
      question: `How fast can you close on a house in ${city}?`,
      answer: `Usually two to four weeks. Your closing date is part of the offer, so you know it before you sign. We coordinate with title companies that handle ${county} closings and can match your timeline.`,
    },
    {
      question: `Do I need to make repairs before selling in ${city}?`,
      answer: `No. We buy homes in any condition across ${city}, with no repairs, no staging, and no inspections on your end. We factor the cost of any work into the offer and show you that math before you decide.`,
    },
    {
      question: `Is there any obligation to accept your offer?`,
      answer: `None. We put an Open-Book offer in front of you so you can weigh your options with no pressure. If the number does not work for your ${city} property, you walk away with no strings attached.`,
    },
    {
      question: `What areas near ${city} do you serve?`,
      answer: `Beyond ${city} itself, we buy across ${county} and nearby towns like ${nearbyList}. If you are just outside our core footprint, reach out and we will tell you honestly whether we can help.`,
    },
  ];
}

const situationLinks = [
  { label: "Inherited property", href: "/situations/inherited-house" },
  { label: "Houses needing repairs", href: "/situations/house-needs-repairs" },
  { label: "Foreclosure", href: "/situations/foreclosure-options" },
  { label: "Divorce", href: "/situations/divorce" },
  { label: "Tenant-occupied rentals", href: "/situations/tenants" },
  { label: "Vacant properties", href: "/situations/vacant-property" },
  { label: "Hoarder houses", href: "/situations/hoarder-house" },
  { label: "Code violations", href: "/situations/code-violations" },
];

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const siblings = areas.filter((a) => a.slug !== area.slug);
  const areaFaqs = getAreaFaqs(
    area,
    siblings.map((a) => a.city)
  );
  const areaServed = `${area.city}, ${area.state}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `We Buy Houses in ${area.city}, ${area.state}`,
          description: area.description,
          areaServed,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: area.city, url: `/areas/${area.slug}` },
        ])}
      />

      <Hero
        heading={area.heroHeading}
        subheading={area.heroSubheading}
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{ text: "How It Works", href: "/how-it-works" }}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
          {area.description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <AnimateOnScroll animation="fade-up">
        <Section tone="paper">
          <SectionHeading
            eyebrow="On the ground"
            title={`Where we buy in ${area.city}`}
            lead={`We buy houses across ${area.city} and ${area.county}, including these local areas and landmarks.`}
          />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {area.neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700"
              >
                {neighborhood}
              </span>
            ))}
          </div>

          <div className="mt-12 border-t border-navy-100 pt-8">
            <h3 className="font-display text-xl font-semibold tracking-tight text-navy-950">
              Zip codes we cover
            </h3>
            <p className="mt-2 max-w-2xl text-navy-600">
              Our {area.city} service area includes these zip codes and the
              surrounding {area.county} area.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {area.zipCodes.map((zip) => (
                <span
                  key={zip}
                  className="rounded-lg bg-navy-50 px-4 py-2 font-mono text-navy-800"
                >
                  {zip}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <Section>
          <SectionHeading
            eyebrow="How the offer works"
            title={`The Open-Book Certainty Offer in ${area.city}`}
          />
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
            <p>
              The same transparent process we use everywhere applies in{" "}
              {area.city}. Our Open-Book offer shows you exactly how we arrive at
              our number: after-repair value, renovation costs, holding expenses,
              and a modest risk buffer. You see the math, you get a real closing
              date, and our{" "}
              <Link
                href="/no-surprise-pledge"
                className="font-medium text-brand-700 hover:underline"
              >
                No Surprise Pledge
              </Link>{" "}
              means what we agree to is what you get.
            </p>
            <p>
              Learn more about our approach in the{" "}
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
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <Section tone="paper">
          <SectionHeading
            eyebrow="Every situation"
            title={`Common selling situations in ${area.city}`}
            lead={`We buy houses in ${area.city} from homeowners working through all kinds of circumstances.`}
          />
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-base">
            {situationLinks.map((situation) => (
              <Link
                key={situation.href}
                href={situation.href}
                className="font-medium text-brand-700 hover:underline"
              >
                {situation.label}
              </Link>
            ))}
            <Link
              href="/situations"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline"
            >
              View all situations
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Section>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <FaqAccordion
          faqs={areaFaqs}
          title={`Common questions about selling in ${area.city}`}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <Section tone="paper">
          <SectionHeading
            eyebrow="Nearby communities"
            title="We also buy across the Springfield metro"
            lead="Selling somewhere close by? We cover these communities across the Ozarks too."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {siblings.map((sibling) => (
              <Link
                key={sibling.slug}
                href={`/areas/${sibling.slug}`}
                className="rounded-full border border-navy-200 bg-white px-5 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-brand-400 hover:text-brand-700"
              >
                {sibling.city}, {sibling.state}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="rounded-full bg-navy-950 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              All service areas
            </Link>
          </div>
        </Section>
      </AnimateOnScroll>

      <CtaSection
        heading={`Ready to sell your house in ${area.city}?`}
        subheading={`Get your Open-Book offer with transparent numbers, a real closing date, and no surprises. We buy houses throughout ${area.city} and ${area.county}.`}
        ctaText="Get My Cash Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
