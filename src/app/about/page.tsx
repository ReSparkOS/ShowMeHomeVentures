import Link from "next/link";
import { Hero, CtaSection } from "@/components/sections";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { siteConfig } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  MapPin,
  Handshake,
  Heart,
  ArrowRight,
} from "lucide-react";

export const metadata = createMetadata({
  title: "About Show-Me Home Ventures | Springfield, MO",
  description:
    "Show-Me Home Ventures is a locally owned home-buying company in Springfield, MO, built on transparent offers, honest numbers, and fair deals across the Ozarks.",
  path: "/about",
  keywords: [
    "about us Springfield MO",
    "local home buyer Springfield Missouri",
    "cash home buyer company Ozarks",
    "transparent house buyer Springfield",
    "Show-Me Home Ventures team",
  ],
});

const values = [
  {
    title: "Transparency",
    description:
      "We show you the math: ARV, repairs, holding costs, and how we arrived at your offer. No black-box numbers.",
    icon: BookOpen,
  },
  {
    title: "Local expertise",
    description:
      "We live and work in Springfield and know the neighborhoods, comps, and market rhythms across the Ozarks.",
    icon: MapPin,
  },
  {
    title: "No pressure",
    description:
      "Requesting an offer costs nothing and commits you to nothing. If it is not the right fit, you can walk away anytime.",
    icon: Handshake,
  },
  {
    title: "Community first",
    description:
      "We reinvest in SW Missouri by improving properties responsibly and treating sellers like neighbors, not leads.",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `About ${siteConfig.name}`,
          description:
            "Locally owned Springfield, MO home buyers offering transparent Open-Book Certainty Offers and fair deals across SW Missouri.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      <Hero
        heading="Built in Springfield. Rooted in the Ozarks."
        subheading={`${siteConfig.name} is a locally owned home-buying team focused on transparency, fair deals, and straight answers, so you always know what you are signing up for.`}
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{ text: "How It Works", href: "/how-it-works" }}
      />

      <Section>
        <SectionHeading title="Our story" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-navy-600">
          <p>
            {siteConfig.name} was founded to bring honesty and transparency to
            home buying in Springfield and southwest Missouri. Too many sellers
            had run into opaque cash offers, last-minute re-trades, and lowball
            tactics with little explanation. We believed there had to be a
            better way.
          </p>
          <p>
            We started with a simple idea: treat people the way we would want
            our own families treated. That means explaining every line item,
            answering questions without jargon, and never using pressure or
            urgency as a weapon.
          </p>
          <p>
            Out of that frustration, we built the{" "}
            <Link
              href="/open-book-certainty-offer"
              className="font-semibold text-brand-700 hover:underline"
            >
              Open-Book Certainty Offer™
            </Link>
            : a process where you see the numbers, understand the tradeoffs, and
            choose your path with confidence. It is the standard we hold
            ourselves to on every property, from a quick as-is sale to a more
            complex situation.
          </p>
          <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <p className="text-lg text-navy-600">
              Curious how it feels on your timeline?
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center font-semibold text-brand-700 hover:underline"
            >
              See how our process works
            </Link>
            <LeadFormDialog triggerText="Get My Cash Offer" />
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          title="Meet the team"
          lead="Local people making local decisions. No distant call center deciding your future."
        />
        <div className="mt-12 max-w-md">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <div className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-semibold text-white">
                  JR
                </div>
                <div>
                  <CardTitle className="font-display text-xl text-navy-950">
                    Jordan Rhodes
                  </CardTitle>
                  <p className="mt-1 text-sm font-medium text-brand-700">
                    Founder
                  </p>
                  <p className="mt-0.5 text-sm text-navy-600">Springfield, MO</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="leading-relaxed text-navy-600">
              Jordan is a local real estate professional committed to fair,
              transparent deals. He focuses on clear communication, honest
              underwriting, and helping homeowners move forward with certainty,
              whether they sell to us or not.
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="What we stand for"
          lead="Principles that guide every conversation and every offer."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="bg-paper">
              <CardHeader>
                <Icon className="h-5 w-5 text-navy-400" aria-hidden />
                <CardTitle className="font-display pt-2 text-lg text-navy-950">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-relaxed text-navy-600">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="rounded-xl border border-navy-100 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
            Areas we serve
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-navy-600">
            We buy houses across the Springfield metro and nearby communities,
            including{" "}
            <span className="font-medium text-navy-900">
              Springfield, Nixa, Ozark, Republic, Battlefield, and Rogersville
            </span>
            . If you are nearby and not sure, reach out and we will tell you
            honestly if we are the right fit.
          </p>
          <Link
            href="/service-areas"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline"
          >
            View all service areas
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
