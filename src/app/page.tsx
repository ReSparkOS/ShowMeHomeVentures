import Link from "next/link";
import {
  Hero,
  ProofBar,
  OfferBreakdown,
  PledgeBox,
  TestimonialGrid,
  FaqAccordion,
  CaseStudyCards,
  SituationsGrid,
  CtaSection,
} from "@/components/sections";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { LeadForm } from "@/components/forms/lead-form";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Calendar, Shield } from "lucide-react";

export const metadata = createMetadata({
  title: "Sell Your House Fast in Springfield MO | Open-Book Certainty Offer™",
  description:
    "Get a transparent, fair offer for your home in Springfield MO and the Ozarks. Our Open-Book Certainty Offer™ shows you the exact math—no hidden fees, no surprise re-trades. Close in as few as 14 days.",
  path: "/",
  keywords: [
    "Springfield MO home buyers",
    "sell house fast Ozarks",
    "cash offer for house Springfield",
    "local home buyer Springfield Missouri",
  ],
});

const homepageFaqs = [
  {
    question: "How does the Open-Book Certainty Offer work?",
    answer:
      "We walk you through every line item: after-repair value, renovation costs, carrying costs, and our risk buffer. You see the same numbers we use to build your offer. Then we lock a closing date in writing. Our No Surprise Pledge means the offer we agree on is the offer you get—no last-minute changes.",
  },
  {
    question: "How quickly can you close?",
    answer:
      "Often in as few as 14 days. You pick the closing date that works for your timeline—whether you need to move ASAP or want a few weeks to transition. We put it in writing and stick to it. No endless extensions or vague promises.",
  },
  {
    question: "Do I need to make any repairs first?",
    answer:
      "No. We buy houses in any condition—from move-in ready to uninhabitable. That's the benefit of working with us instead of listing: you skip the repairs, staging, and open houses. We factor the condition into our offer and handle renovations after we close.",
  },
  {
    question: "Are there any fees or commissions?",
    answer:
      "There are no fees to get an offer, no commissions, and no hidden charges. We cover standard closing costs. The number we present in our Open-Book breakdown is what you walk away with, minus only normal costs like prorated taxes or liens you choose to pay from proceeds.",
  },
  {
    question: "What if I change my mind?",
    answer:
      "There is no obligation until you sign a purchase agreement. Before that, you can walk away anytime—no penalty, no pressure. We want you to feel comfortable with the offer and the process before committing.",
  },
  {
    question: "How is this different from other house-buying companies?",
    answer:
      "Most investors give you a lowball number with no explanation. We show you the math—ARV, renovation costs, holding costs—in plain language. Plus we lock a real closing date and back it with our No Surprise Pledge. No re-trades, no invented fees at the last minute. What we agree to is what you get.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Springfield, MO and the greater Ozarks region—including Greene County, Christian County, Ozark, Nixa, Republic, Branson, and surrounding communities. If you're in the area, we'd love to talk.",
  },
  {
    question: "Is there really no obligation?",
    answer:
      "Yes. Requesting an offer is 100% free and carries no obligation. We'll evaluate your property, walk you through the numbers, and present an offer. You decide whether to accept. If it's not right for you, no hard feelings—and no cost.",
  },
];

const pillars = [
  {
    title: "Open-Book Numbers",
    description:
      "We show you exactly how we calculate your offer. After-repair value, renovation costs, carrying costs—every line item, explained in plain language.",
    icon: Eye,
  },
  {
    title: "A Real Close Date",
    description:
      "We don't string you along. Pick a closing date—often in as few as 14 days—and we put it in writing.",
    icon: Calendar,
  },
  {
    title: "The No Surprise Pledge",
    description:
      "Our offer won't change at the last minute. What we agree to is what you get. Period.",
    icon: Shield,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Sell Your House Fast in Springfield, MO",
          description:
            "Local Springfield home-buying service with transparent Open-Book Certainty Offers, no surprise re-trades, and flexible closing timelines.",
        })}
      />
      <JsonLd data={faqSchema(homepageFaqs)} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", url: "/" }])}
      />
      <Hero
        heading="An Offer You Can Understand. A Close Date You Can Trust."
        subheading="Show-Me Home Ventures delivers the Open-Book Certainty Offer™—transparent numbers + a real closing plan for homeowners in Springfield, MO and the Ozarks."
        primaryCta={{ text: "Get My Open-Book Offer", href: "/contact" }}
        secondaryCta={{
          text: "See How the Pledge Works",
          href: "/no-surprise-pledge",
        }}
        primaryCtaSlot={
          <LeadFormDialog
            triggerText="Get My Open-Book Offer"
            triggerSize="lg"
            triggerClassName="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/25"
          />
        }
      />
      <ProofBar />

      <section className="py-10 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base text-slate-700">
            Serving homeowners across Springfield and Southwest Missouri. Explore{" "}
            <Link href="/areas" className="font-semibold text-blue-700 hover:underline">
              areas we serve
            </Link>
            , browse common{" "}
            <Link href="/situations" className="font-semibold text-blue-700 hover:underline">
              selling situations
            </Link>
            , and review practical{" "}
            <Link href="/resources" className="font-semibold text-blue-700 hover:underline">
              homeowner resources
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
            <span className="font-medium text-slate-900">We buy houses in:</span>
            <Link href="/areas/springfield-mo" className="text-blue-700 hover:underline">Springfield</Link>
            <Link href="/areas/ozark-mo" className="text-blue-700 hover:underline">Ozark</Link>
            <Link href="/areas/nixa-mo" className="text-blue-700 hover:underline">Nixa</Link>
            <Link href="/areas/republic-mo" className="text-blue-700 hover:underline">Republic</Link>
            <Link href="/areas/battlefield-mo" className="text-blue-700 hover:underline">Battlefield</Link>
          </div>
        </div>
      </section>

      {/* Lead form section */}
      <AnimateOnScroll animation="fade-up">
        <section
          id="get-offer"
          className="py-20 lg:py-28 bg-slate-50 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Get Your Open-Book Offer in 3 Easy Steps
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Tell us about your property. We&apos;ll reach out within 2 hours
                during business hours with a transparent offer and a closing plan.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <LeadForm />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Open-Book Certainty Offer - 3 Pillars */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Open-Book Certainty Offer™
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Three pillars that make our offer different: transparency, certainty,
              and a real commitment.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <AnimateOnScroll key={pillar.title} animation="fade-up" delay={i * 150}>
                    <Card className="h-full border-slate-200 bg-white group">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="mt-4 text-xl">{pillar.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-slate-600">
                          {pillar.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
            <p className="mt-10 text-center">
              <Link
                href="/open-book-certainty-offer"
                className="font-semibold text-blue-700 hover:text-blue-800 hover:underline"
              >
                Learn more about the Open-Book Certainty Offer →
              </Link>
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <OfferBreakdown />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <PledgeBox />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <CaseStudyCards limit={3} featuredOnly />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <SituationsGrid />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <TestimonialGrid limit={3} featuredOnly />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <FaqAccordion faqs={homepageFaqs} title="Frequently Asked Questions" />
      </AnimateOnScroll>
      <CtaSection />
    </>
  );
}
