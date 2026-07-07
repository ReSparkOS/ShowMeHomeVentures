import Link from "next/link";
import {
  Hero,
  ProofBar,
  OfferBreakdown,
  TestimonialGrid,
  FaqAccordion,
  CtaSection,
} from "@/components/sections";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  Home,
  Wrench,
  Users,
  AlertTriangle,
  HeartCrack,
  Building2,
  ArrowRight,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Show-Me Home Ventures | Local Cash Home Buyer in Springfield, MO",
  description:
    "Show-Me Home Ventures buys houses across Springfield, MO and the Ozarks with the Open-Book Certainty Offer: transparent math, a written closing date, and no fees.",
  path: "/",
  keywords: [
    "cash offer for house Springfield",
    "local home buyer Springfield Missouri",
    "sell house as-is Springfield",
    "open book home offer",
  ],
});

const homepageFaqs = [
  {
    question: "Do I need to make any repairs before selling?",
    answer:
      "No. We buy houses in any condition—from move-in ready to uninhabitable. You skip the repairs, staging, and open houses. We factor the condition into our offer and handle everything after we close.",
  },
  {
    question: "Who pays closing costs?",
    answer:
      "We cover standard closing costs. The number we present in our Open-Book breakdown is what you walk away with, minus only normal items like prorated taxes or existing liens you choose to pay from proceeds.",
  },
  {
    question: "How quickly can you close?",
    answer:
      "Often in as few as 14 days. You pick the closing date that works for your timeline—whether you need to move fast or want a few weeks to transition. We put it in writing and stick to it.",
  },
  {
    question: "Is this a scam?",
    answer:
      "We're a legitimate, locally owned business based in Springfield, MO. We provide a physical office address, a real phone number, and we show you the exact math behind every offer. We encourage you to verify our business, read our reviews, and speak with past sellers.",
  },
  {
    question: "Am I leaving money on the table?",
    answer:
      "Listing traditionally might net slightly more—if everything goes perfectly. But that means 3–6 months of mortgage payments, showings, inspection repairs, and risk of deals falling through. Our offer provides certainty: a guaranteed price, a guaranteed date, and zero out-of-pocket costs. For many sellers, that peace of mind is worth more than the difference.",
  },
  {
    question: "How is this different from other house-buying companies?",
    answer:
      "Most investors give you a lowball number with no explanation. We show you the math—after-repair value, renovation costs, holding costs—in plain language. Plus we lock a real closing date and back it with our No Surprise Pledge. No re-trades, no invented fees at the last minute.",
  },
  {
    question: "Are there any fees or commissions?",
    answer:
      "There are no fees to get an offer, no commissions, and no hidden charges. We cover standard closing costs. What we offer is what you get.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Springfield, MO and the greater Southwest Missouri region—including Greene County, Christian County, Ozark, Nixa, Republic, Battlefield, Rogersville, and surrounding communities.",
  },
];

const howItWorksSteps = [
  {
    title: "Tell us about your property",
    description:
      "Fill out our quick form or give us a call. We'll ask a few questions about your home and your situation—no pressure, no obligation.",
  },
  {
    title: "See your offer, with the math",
    description:
      "We walk you through the Open-Book Certainty Offer: after-repair value, renovation costs, and how we arrived at your number. Every line item, explained.",
  },
  {
    title: "Pick your closing date",
    description:
      "Choose the date that works for your schedule—often in as few as 14 days. We lock it in writing, handle the paperwork, and wire your funds.",
  },
];

const situationsList = [
  { icon: Home, label: "Inherited house", href: "/situations/inherited-house" },
  { icon: Wrench, label: "House needs repairs", href: "/situations/house-needs-repairs" },
  { icon: Users, label: "Rental with tenants", href: "/situations/tenants" },
  { icon: AlertTriangle, label: "Facing foreclosure", href: "/situations/foreclosure-options" },
  { icon: HeartCrack, label: "Divorce", href: "/situations/divorce" },
  { icon: Building2, label: "Vacant property", href: "/situations/vacant-property" },
];

const areaLinks = [
  { label: "Springfield", href: "/areas/springfield-mo" },
  { label: "Ozark", href: "/areas/ozark-mo" },
  { label: "Nixa", href: "/areas/nixa-mo" },
  { label: "Republic", href: "/areas/republic-mo" },
  { label: "Battlefield", href: "/areas/battlefield-mo" },
  { label: "Rogersville", href: "/areas/rogersville-mo" },
];

const pillars = [
  {
    title: "Open-book numbers",
    description:
      "We show you exactly how we calculate your offer—after-repair value, renovation costs, carrying costs—every line item in plain language.",
  },
  {
    title: "A real close date",
    description:
      "We don't string you along. Pick a closing date—often in as few as 14 days—and we put it in writing.",
  },
  {
    title: "The No Surprise Pledge",
    description:
      "Our offer won't change at the last minute. What we agree to is what you get. Period.",
  },
];

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Open-Book Home Buying in Springfield, MO",
          description:
            "Local Springfield home-buying service with transparent Open-Book Certainty Offers, no surprise re-trades, and flexible closing timelines.",
        })}
      />
      <JsonLd data={faqSchema(homepageFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
      <JsonLd data={websiteSchema()} />

      {/* Hero */}
      <Hero
        heading="Sell your Springfield house for cash — and see every number."
        subheading="We're a local home-buying company, not a lead broker. Get a written cash offer with the math explained, and a closing date we put in writing."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
        addressCapture
      />

      <ProofBar />

      {/* Internal linking strip */}
      <Section compact tone="paper" className="border-b border-navy-100 !py-8">
        <p className="text-base leading-relaxed text-navy-700">
          Need to{" "}
          <Link href="/sell-your-house-fast" className="font-semibold text-brand-700 hover:underline">
            sell your house fast
          </Link>
          ? Comparing{" "}
          <Link href="/cash-home-buyers-springfield-mo" className="font-semibold text-brand-700 hover:underline">
            cash home buyers in Springfield
          </Link>
          ? Start with how our{" "}
          <Link href="/we-buy-houses-springfield-mo" className="font-semibold text-brand-700 hover:underline">
            we-buy-houses process
          </Link>{" "}
          works, browse{" "}
          <Link href="/situations" className="font-semibold text-brand-700 hover:underline">
            common selling situations
          </Link>
          , or read our{" "}
          <Link href="/faq" className="font-semibold text-brand-700 hover:underline">
            FAQ
          </Link>
          .
        </p>
      </Section>

      {/* How It Works */}
      <AnimateOnScroll animation="fade-up">
        <Section>
          <SectionHeading
            eyebrow="How it works"
            title="Three steps to a transparent cash offer"
            lead="No listings, no showings, no waiting on financing. Here's the entire process."
          />
          <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {howItWorksSteps.map((step, i) => (
              <li key={step.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-lg font-semibold text-white">
                    {i + 1}
                  </span>
                  {i < howItWorksSteps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-navy-200 sm:block" aria-hidden />
                  )}
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-navy-600">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline"
            >
              See the full process in detail
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </Section>
      </AnimateOnScroll>

      {/* Open-Book Certainty Offer */}
      <AnimateOnScroll animation="fade-up">
        <Section tone="paper">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The Open-Book Certainty Offer™"
                title="Most buyers give you a number. We show you the math."
                lead="Our offer comes with the full calculation—after-repair value, renovation budget, carrying costs—so you can judge it for yourself instead of taking our word for it."
              />
              <dl className="mt-10 space-y-8">
                {pillars.map((pillar, i) => (
                  <div key={pillar.title} className="flex gap-5">
                    <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 text-sm font-semibold text-brand-700">
                      {i + 1}
                    </span>
                    <div>
                      <dt className="font-display text-lg font-semibold tracking-tight text-navy-950">
                        {pillar.title}
                      </dt>
                      <dd className="mt-1.5 leading-relaxed text-navy-600">
                        {pillar.description}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
              <p className="mt-10">
                <Link
                  href="/open-book-certainty-offer"
                  className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline"
                >
                  Learn how the offer works
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </p>
            </div>
            <div className="lg:pt-4">
              <OfferBreakdown embedded />
            </div>
          </div>
        </Section>
      </AnimateOnScroll>

      {/* Situations */}
      <AnimateOnScroll animation="fade-up">
        <Section>
          <SectionHeading
            eyebrow="Every situation"
            title="Whatever the reason, we can help"
            lead="No judgment and no pressure—just a fair, explained offer from a local Springfield buyer."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {situationsList.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-navy-400 transition-colors group-hover:text-brand-700" aria-hidden />
                    <span className="font-medium text-navy-900 transition-colors group-hover:text-brand-800">
                      {item.label}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-navy-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600"
                    aria-hidden
                  />
                </Link>
              );
            })}
          </div>
          <p className="mt-8">
            <Link
              href="/situations"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline"
            >
              View all selling situations
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </Section>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <TestimonialGrid limit={3} featuredOnly />
      </AnimateOnScroll>

      {/* Service areas */}
      <AnimateOnScroll animation="fade-up">
        <Section tone="paper">
          <SectionHeading
            eyebrow="Where we buy"
            title="Serving Springfield and Southwest Missouri"
            lead="Greene County, Christian County, and the surrounding communities of the Ozarks."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {areaLinks.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-full border border-navy-200 bg-white px-5 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-brand-400 hover:text-brand-700"
              >
                {area.label}, MO
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

      <AnimateOnScroll animation="fade-up">
        <FaqAccordion faqs={homepageFaqs} title="Frequently Asked Questions" />
      </AnimateOnScroll>

      <CtaSection />
    </>
  );
}
