import { Hero, CtaSection } from "@/components/sections";
import { JsonLd } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";
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
  title: "The No Surprise Re-Trade Pledge | Show-Me Home Ventures",
  description:
    "Our pledge: the offer we agree on is the offer you get. No last-minute re-trades, no invented fees. Clear exceptions and full transparency.",
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
        primaryCta={{ text: "Get My Open-Book Offer", href: "/contact" }}
        secondaryCta={{
          text: "See the Full Offer",
          href: "/open-book-certainty-offer",
        }}
      />

      {/* Full pledge text in prominent card */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-emerald-200 bg-white shadow-lg overflow-hidden">
            <CardHeader className="bg-emerald-50/50 border-b border-emerald-100">
              <CardTitle className="text-2xl sm:text-3xl text-slate-900">
                The Pledge
              </CardTitle>
              <CardDescription className="text-base text-slate-600 mt-2">
                Our commitment to you, in writing
              </CardDescription>
            </CardHeader>
            <CardContent className="py-8 px-6 sm:px-8">
              <p className="text-xl leading-relaxed text-slate-800 font-medium">
                {pledgeText}
              </p>
              <p className="mt-6 text-sm text-slate-600">
                Even in the rare cases where we need to adjust (see exceptions
                below), we explain what changed and give you the option to walk
                away with no penalty.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed exceptions */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Clear, Honest Exceptions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We don&apos;t use exceptions as a loophole. These are rare situations
            where new information—that couldn&apos;t reasonably have been known
            upfront—changes the basis of our offer. In every case, we discuss
            openly and you retain the right to walk away.
          </p>
          <div className="mt-12 space-y-6">
            {exceptions.map((ex) => (
              <Card key={ex.title} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg">{ex.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600">{ex.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means for You */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What This Means for You
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The No Surprise Pledge isn&apos;t just words—it&apos;s a commitment
            that shapes how we do business.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-slate-700"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Happens If Something Changes */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Happens If Something Changes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            In the rare event that one of our exceptions applies—a hidden
            foundation issue, an undisclosed lien, or a material misrepresentation—here&apos;s
            what happens:
          </p>
          <ol className="mt-8 space-y-4 list-decimal list-inside text-slate-700">
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
          <p className="mt-8 text-slate-600">
            Our goal is always a fair outcome. We don&apos;t use exceptions as a
            bargaining tool—we use them only when new, material facts truly
            change the deal. And even then, you&apos;re in control.
          </p>
        </div>
      </section>

      {/* Testimonial about pledge */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Homeowners Say About the Pledge
          </h2>
          <Card className="mt-12 border-slate-200 bg-white">
            <CardContent className="pt-8 pb-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: pledgeTestimonial.rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  )
                )}
              </div>
              <blockquote className="text-lg text-slate-700 leading-relaxed">
                &ldquo;{pledgeTestimonial.quote}&rdquo;
              </blockquote>
              <footer className="mt-6">
                <p className="font-medium text-slate-900">
                  {pledgeTestimonial.name}
                </p>
                <p className="text-sm text-slate-500">
                  {pledgeTestimonial.location} · {pledgeTestimonial.situation}
                </p>
              </footer>
            </CardContent>
          </Card>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
