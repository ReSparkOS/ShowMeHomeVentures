import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { Hero, CtaSection } from "@/components/sections";
import { Section, SectionHeading } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { areas } from "@/data/areas";

export const metadata = createMetadata({
  title: "We Buy Houses in Springfield & SW MO",
  description:
    "We buy houses across Springfield, MO and the Ozarks — Nixa, Ozark, Republic, Battlefield, and Rogersville. Transparent cash offers with real closing dates.",
  path: "/service-areas",
  keywords: [
    "service areas Springfield MO",
    "cash home buyer Southwest Missouri",
    "we buy houses Nixa Ozark Republic",
    "home buyer Battlefield Rogersville MO",
    "Greene County Christian County Webster County",
    "Springfield metro home buyers",
  ],
});

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Home Buying Service Areas — Springfield & Southwest Missouri",
          description:
            "We buy houses across the Springfield metro, Ozarks region, and surrounding communities including Rogersville, Nixa, Ozark, Republic, and Battlefield.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
        ])}
      />
      <Hero
        heading="Serving Springfield and Southwest Missouri"
        subheading="We buy houses across the Springfield metro and the Ozarks — from Greene and Christian County hubs to Webster County and nearby towns. Same transparent process wherever we can help."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{ text: "How It Works", href: "/how-it-works" }}
      />

      <AnimateOnScroll animation="fade-up">
        <Section tone="paper">
          <SectionHeading
            eyebrow="Where we buy"
            title="Cities and counties we serve"
            lead="Explore our core service areas below. Don't see your town? We may still be able to help across Greene, Christian, and Webster counties and the wider Ozarks."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group"
              >
                <Card className="h-full transition-all hover:border-brand-300 hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <MapPin
                        className="h-5 w-5 text-navy-400 transition-colors group-hover:text-brand-600"
                        aria-hidden
                      />
                      <CardTitle className="font-display text-lg transition-colors group-hover:text-brand-700">
                        {area.city}, {area.state}
                      </CardTitle>
                    </div>
                    <CardDescription>{area.county}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:underline">
                      Explore {area.city}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <Section>
          <SectionHeading
            eyebrow="On the map"
            title="Springfield area at a glance"
            lead="We're based in the Springfield metro and buy throughout the surrounding region."
          />
          <div className="mt-8 overflow-hidden rounded-xl border border-navy-100 bg-navy-50">
            <iframe
              title="Springfield MO and surrounding service area map"
              src="https://www.google.com/maps?q=Springfield,+MO&output=embed"
              className="aspect-video w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Section>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <Section tone="paper">
          <SectionHeading
            eyebrow="Beyond the map"
            title="Expanding our service area"
          />
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-navy-600">
            <p>
              We&apos;re rooted in Springfield and the Ozarks, and we buy in
              towns well beyond the list above.{" "}
              <span className="font-medium text-navy-900">
                Highlandville, Ash Grove, and Strafford
              </span>{" "}
              and other Southwest Missouri communities are on our radar. If
              you&apos;re nearby, reach out and we&apos;ll tell you honestly
              whether we can make an offer.
            </p>
            <p>
              Don&apos;t see your city or ZIP? That doesn&apos;t mean we
              can&apos;t help. Many sellers first find us through Springfield,
              Nixa, or Ozark and discover we also cover their neck of the woods.
              A quick message or call is the fastest way to confirm coverage.
            </p>
            <p>
              Our Open-Book Certainty Offer™ works the same wherever we buy:
              transparent numbers, a real closing date, and the No Surprise
              Pledge, backed by local knowledge of{" "}
              <span className="font-medium text-navy-900">Greene</span>,{" "}
              <span className="font-medium text-navy-900">Christian</span>, and{" "}
              <span className="font-medium text-navy-900">Webster</span>{" "}
              counties and the wider Ozarks market.
            </p>
          </div>
        </Section>
      </AnimateOnScroll>

      <CtaSection
        heading="Ready for an offer in your town?"
        subheading="Get your Open-Book offer with transparent numbers and a real closing date. We buy houses across Springfield and the wider Ozarks region."
        ctaText="Get My Cash Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
