import { Hero, CtaSection } from "@/components/sections";
import { JsonLd } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export const metadata = createMetadata({
  title: "The No Surprise Pledge, No Re-Trades",
  description:
    "Our pledge: the offer we agree on is the offer you get. No last-minute re-trades, no invented fees. Clear exceptions, explained upfront, with full transparency.",
  path: "/no-surprise-pledge",
});

const pledgeText = `When we make you an offer, that's the number. We don't come back at closing with a lower price, invented fees, or new conditions. The offer we agree on is the offer you get. Period.`;

const exceptions = [
  {
    title: "Previously unknown structural or environmental hazards",
    content:
      "If a professional inspection reveals a serious hidden issue—such as a cracked foundation, mold behind walls, or contaminated soil—that couldn't reasonably have been identified during our initial walkthrough, we'll discuss the findings with you transparently and adjust only if necessary. We don't invent issues; we address real ones with full disclosure.",
  },
  {
    title: "Undisclosed title issues or liens",
    content:
      "If a title search reveals liens, unpaid taxes, or legal claims on the property that weren't disclosed upfront, we may need to work together on a resolution. We'll explain exactly what we found and explore solutions—whether that means paying them from proceeds, you resolving them before closing, or adjusting the terms. No surprises, just clear options.",
  },
  {
    title: "Material misrepresentation of property condition",
    content:
      "If the property's condition was significantly different from what was described—for example, major systems like HVAC or plumbing that were said to be functional but aren't—we'll address it openly. We're not looking for excuses to re-trade; we're protecting against situations where the facts we relied on were incorrect.",
  },
];

const benefits = [
  "You know exactly what you're getting—no last-minute price cuts or 'we need to adjust'",
  "No invented fees or surprise deductions at closing",
  "Clear exceptions, explained upfront—so you're not caught off guard",
  "Even in rare exception cases, we discuss openly and you can walk away with no penalty",
  "Peace of mind from start to finish",
];

const pledgeTestimonial = testimonials.find(
  (t) =>
    t.quote.toLowerCase().includes("no surprise") ||
    t.quote.toLowerCase().includes("pledge")
) || testimonials[0];

export default function NoSurprisePledgePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "No Surprise Re-Trade Pledge",
    description:
      "A commitment that the offer we agree on is the offer you get—no last-minute re-trades, no invented fees. Clear exceptions and full transparency.",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero
        heading="The No Surprise Re-Trade Pledge"
        subheading="The offer we agree on is the offer you get. No last-minute re-trades, no invented fees, no new conditions."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{
          text: "See the Full Offer",
          href: "/open-book-certainty-offer",
        }}
      />

      {/* Full pledge text in prominent card */}
      <Section tone="paper">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-navy-100 bg-navy-50">
              <CardTitle className="font-display text-2xl text-navy-950 sm:text-3xl">
                The pledge
              </CardTitle>
              <CardDescription className="mt-2 text-base">
                Our commitment to you, in writing
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-8 sm:px-8">
              <p className="text-xl font-medium leading-relaxed text-navy-800">
                {pledgeText}
              </p>
              <p className="mt-6 text-sm text-navy-600">
                Even in the rare cases where we need to adjust (see exceptions
                below), we explain what changed and give you the option to walk
                away with no penalty.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Detailed exceptions */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Clear, honest exceptions"
            lead="We don't use exceptions as a loophole. These are rare situations where new information, that couldn't reasonably have been known upfront, changes the basis of our offer. In every case, we discuss openly and you retain the right to walk away."
          />
          <div className="mt-12 space-y-6">
            {exceptions.map((ex) => (
              <Card key={ex.title}>
                <CardHeader>
                  <CardTitle className="font-display text-lg">{ex.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-navy-600">{ex.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* What This Means for You */}
      <Section tone="paper">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="What this means for you"
            lead="The No Surprise Pledge isn't just words. It's a commitment that shapes how we do business."
          />
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-navy-700">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* What Happens If Something Changes */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="What happens if something changes"
            lead="In the rare event that one of our exceptions applies, a hidden foundation issue, an undisclosed lien, or a material misrepresentation, here's what happens:"
          />
          <ol className="mt-8 list-decimal list-inside space-y-4 text-navy-700">
            <li>
              <strong>We tell you immediately.</strong> No delay, no hiding. We
              explain what we found and how it affects the offer.
            </li>
            <li>
              <strong>We discuss options.</strong> Can we adjust the price? Can
              you resolve the issue before closing? Can we find another path
              forward?
            </li>
            <li>
              <strong>You decide.</strong> If the new terms don&apos;t work for
              you, you can walk away with no penalty. We never pressure you to
              accept a changed offer.
            </li>
          </ol>
          <p className="mt-8 text-navy-600">
            Our goal is always a fair outcome. We don&apos;t use exceptions as a
            bargaining tool. We use them only when new, material facts truly
            change the deal. And even then, you&apos;re in control.
          </p>
        </div>
      </Section>

      {/* Testimonial about pledge */}
      <Section tone="paper">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="What homeowners say about the pledge" />
          <Card className="mt-12">
            <CardContent className="py-8">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: pledgeTestimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-navy-700">
                &ldquo;{pledgeTestimonial.quote}&rdquo;
              </blockquote>
              <footer className="mt-6">
                <p className="font-medium text-navy-950">
                  {pledgeTestimonial.name}
                </p>
                <p className="text-sm text-navy-600">
                  {pledgeTestimonial.location} · {pledgeTestimonial.situation}
                </p>
              </footer>
            </CardContent>
          </Card>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
