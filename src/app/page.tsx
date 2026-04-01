import Link from "next/link";
import {
  Hero,
  ProofBar,
  ProcessTimeline,
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
import { siteConfig } from "@/lib/utils";
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
import {
  Eye,
  Calendar,
  Shield,
  MapPin,
  Phone,
  ClipboardList,
  DollarSign,
  CalendarCheck,
  Home,
  Wrench,
  Users,
  AlertTriangle,
  HeartCrack,
  Scale,
  Building2,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Sell Your House Fast in Springfield, MO | Cash Offer, No Repairs",
  description:
    "Get a fair, transparent cash offer from a local Springfield, MO homebuyer. No repairs, no agent commissions, no pressure. Close in as few as 14 days with our Open-Book Certainty Offer™.",
  path: "/",
  keywords: [
    "sell house fast Springfield MO",
    "cash offer for house Springfield",
    "we buy houses Springfield MO",
    "local home buyer Springfield Missouri",
    "sell house as-is Springfield",
    "cash home buyers near me",
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

const trustBarItems = [
  { icon: MapPin, label: "Local" },
  { icon: Eye, label: "Transparent" },
  { icon: Calendar, label: "Flexible Closing" },
  { icon: Home, label: "We Buy As-Is" },
];

const howItWorksSteps = [
  {
    number: 1,
    icon: ClipboardList,
    title: "Tell Us About Your Property",
    description:
      "Fill out our quick form or give us a call. We'll ask a few questions about your home and your situation—no pressure, no obligation.",
  },
  {
    number: 2,
    icon: DollarSign,
    title: "Get Your Offer",
    description:
      "We'll walk you through our Open-Book Certainty Offer™—after-repair value, renovation costs, and how we arrived at your number. Every line item, explained.",
  },
  {
    number: 3,
    icon: CalendarCheck,
    title: "Pick Your Closing Date",
    description:
      "Choose the date that works for your schedule—often in as few as 14 days. We lock it in writing, handle the paperwork, and wire your funds.",
  },
];

const situationsList = [
  { icon: Home, label: "Inherited Houses", href: "/situations/inherited-house" },
  { icon: Wrench, label: "Repairs Needed", href: "/situations/house-needs-repairs" },
  { icon: Users, label: "Landlords & Tenants", href: "/situations/tenants" },
  { icon: Scale, label: "Probate", href: "/situations/inherited-house" },
  { icon: HeartCrack, label: "Divorce", href: "/situations/divorce" },
  { icon: AlertTriangle, label: "Foreclosure", href: "/situations/foreclosure-options" },
  { icon: Building2, label: "Vacant Homes", href: "/situations/vacant-property" },
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
          name: "Sell Your House Fast in Springfield, MO",
          description:
            "Local Springfield home-buying service with transparent Open-Book Certainty Offers, no surprise re-trades, and flexible closing timelines.",
        })}
      />
      <JsonLd data={faqSchema(homepageFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
      <JsonLd data={websiteSchema()} />

      {/* Hero */}
      <Hero
        heading="Sell Your House Fast in Springfield, MO"
        subheading="Get a fair, transparent cash offer from a local homebuyer. No repairs, no agent commissions, no pressure."
        primaryCta={{ text: "Get My Cash Offer", href: "/contact" }}
        secondaryCta={{
          text: "See How It Works",
          href: "/how-it-works",
        }}
        primaryCtaSlot={
          <LeadFormDialog
            triggerText="Get My Cash Offer"
            triggerSize="lg"
            triggerClassName="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/25"
          />
        }
      />

      {/* Trust Bar */}
      <section className="border-y border-slate-200 bg-white py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
            {trustBarItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <Icon className="h-4 w-4 text-emerald-600" />
                  {item.label}
                </div>
              );
            })}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <ProofBar />

      {/* Internal linking bar */}
      <section className="py-8 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base text-slate-700">
            Serving homeowners across Springfield and Southwest Missouri. Explore{" "}
            <Link href="/service-areas" className="font-semibold text-blue-700 hover:underline">
              areas we serve
            </Link>
            , browse common{" "}
            <Link href="/situations" className="font-semibold text-blue-700 hover:underline">
              selling situations
            </Link>
            , or read our{" "}
            <Link href="/faq" className="font-semibold text-blue-700 hover:underline">
              frequently asked questions
            </Link>
            .
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
            <span className="font-medium text-slate-900">We buy houses in:</span>
            <Link href="/areas/springfield-mo" className="text-blue-700 hover:underline">Springfield</Link>
            <Link href="/areas/ozark-mo" className="text-blue-700 hover:underline">Ozark</Link>
            <Link href="/areas/nixa-mo" className="text-blue-700 hover:underline">Nixa</Link>
            <Link href="/areas/republic-mo" className="text-blue-700 hover:underline">Republic</Link>
            <Link href="/areas/battlefield-mo" className="text-blue-700 hover:underline">Battlefield</Link>
            <span className="text-blue-700">Rogersville</span>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Three simple steps to a fair, transparent cash offer on your Springfield home.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {howItWorksSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <AnimateOnScroll key={step.number} animation="fade-up" delay={i * 150}>
                    <Card className="h-full border-slate-200 bg-white">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-emerald-700 bg-white text-base font-bold text-emerald-700">
                            {step.number}
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                        <CardTitle className="mt-4 text-lg">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-slate-600">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
            <p className="mt-8 text-center">
              <Link
                href="/how-it-works"
                className="font-semibold text-blue-700 hover:text-blue-800 hover:underline"
              >
                See the full process in detail →
              </Link>
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Situations We Help With */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We Buy Houses in Every Situation
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Whatever you&apos;re going through, we can help. No judgment, no pressure—just a fair offer
              from a local Springfield buyer.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {situationsList.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link key={item.label} href={item.href} className="group">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-4 transition-all hover:shadow-md hover:border-emerald-200 group-hover:bg-emerald-50/50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <p className="mt-8 text-center">
              <Link
                href="/situations"
                className="font-semibold text-blue-700 hover:text-blue-800 hover:underline"
              >
                View all selling situations →
              </Link>
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Lead form section */}
      <AnimateOnScroll animation="fade-up">
        <section
          id="get-offer"
          className="py-20 lg:py-28 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Get Your Fair Cash Offer Today
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Tell us about your property. We&apos;ll respond within 2 hours
                during business hours with a transparent offer and a closing plan.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Or call us directly at{" "}
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="font-semibold text-blue-700 hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <LeadForm />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Open-Book Certainty Offer — 3 Pillars */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Open-Book Certainty Offer™
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Most cash buyers give you a number with no explanation. We do the opposite.
              Our Open-Book Certainty Offer™ shows you exactly how we calculate your offer—after-repair value,
              renovation costs, carrying costs—so you can see the math and decide for yourself.
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

      {/* Trust Section */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Springfield Trusts Show-Me Home Ventures
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              We&apos;re a local business serving our neighbors in Southwest Missouri. Here&apos;s what the numbers look like.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <p className="text-4xl font-bold text-emerald-700">50+</p>
                <p className="mt-2 text-sm font-medium text-slate-600">Deals Closed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-emerald-700">5+</p>
                <p className="mt-2 text-sm font-medium text-slate-600">Years in Business</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-emerald-700">4.9★</p>
                <p className="mt-2 text-sm font-medium text-slate-600">Average Review Rating</p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <TestimonialGrid limit={3} featuredOnly />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <SituationsGrid
          heading="Common Selling Situations in Springfield"
          description="We buy houses in a range of situations across Springfield and Southwest Missouri—no judgment, no pressure."
        />
      </AnimateOnScroll>

      {/* Phone CTA */}
      <section className="py-12 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold text-white">
            Ready to talk? Call us today.
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="mt-2 inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-emerald-100 transition-colors"
          >
            <Phone className="h-6 w-6" />
            {siteConfig.phone}
          </a>
          <p className="mt-2 text-sm text-emerald-100">
            {siteConfig.businessHours.weekday} · {siteConfig.businessHours.saturday}
          </p>
        </div>
      </section>

      <AnimateOnScroll animation="fade-up">
        <FaqAccordion faqs={homepageFaqs} title="Frequently Asked Questions" />
      </AnimateOnScroll>

      <CtaSection />
    </>
  );
}
