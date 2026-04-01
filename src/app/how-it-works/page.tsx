import Link from "next/link";
import {
  Hero,
  OfferBreakdown,
  TestimonialGrid,
  FaqAccordion,
  CtaSection,
} from "@/components/sections";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";
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
  ClipboardList,
  DollarSign,
  CalendarCheck,
  Eye,
  Shield,
  Phone,
} from "lucide-react";

export const metadata = createMetadata({
  title: "How It Works | 3-Step Process to Sell Your House Fast",
  description:
    "Three simple steps to sell your house in Springfield, MO. Tell us about your property, get a transparent Open-Book Certainty Offer™, and pick your closing date. No repairs, no fees.",
  path: "/how-it-works",
  keywords: [
    "how to sell house fast Springfield MO",
    "cash home sale process Missouri",
    "transparent house offer process",
    "sell house 3 steps",
  ],
});

const steps = [
  {
    number: 1,
    icon: ClipboardList,
    title: "Tell Us About Your Property",
    description:
      "Fill out our quick form or give us a call. We'll ask a few questions about your home, its condition, and your situation. There's no obligation and no pressure—we just want to understand how we can help.",
    details: [
      "Takes 2–3 minutes to complete the form",
      "We respond within 2 hours during business hours",
      "We may schedule a brief walkthrough",
      "Your information stays private—we never share it",
    ],
  },
  {
    number: 2,
    icon: DollarSign,
    title: "Get Your Open-Book Offer",
    description:
      "We present our Open-Book Certainty Offer™—a transparent breakdown showing after-repair value, renovation costs, and exactly how we arrived at your number. You see the same math we use. No hidden deductions.",
    details: [
      "After-repair value based on recent comparable sales",
      "Itemized repair and renovation estimates",
      "Our offer formula explained in plain language",
      "No commissions, no hidden fees",
    ],
  },
  {
    number: 3,
    icon: CalendarCheck,
    title: "Pick Your Closing Date",
    description:
      "Choose the closing date that works for your schedule—often in as few as 14 days. We lock it in writing, handle the paperwork, cover standard closing costs, and wire your funds. Done.",
    details: [
      "Close in as few as 14 days—or take more time if you need it",
      "We handle title work, paperwork, and coordination",
      "We cover standard closing costs",
      "No Surprise Pledge: the offer we agree on is the offer you get",
    ],
  },
];

const comparisonData = [
  {
    topic: "Pricing transparency",
    traditional: "Vague numbers, lowball offers with no explanation",
    smhv: "Open-book breakdown: ARV, renovation costs, and our offer—every line item explained",
  },
  {
    topic: "Closing timeline",
    traditional: "Weeks or months of uncertainty, frequent extensions",
    smhv: "Pick your date—often 14 days—locked in writing",
  },
  {
    topic: "Last-minute changes",
    traditional: "Re-trades, invented fees, or price drops at closing",
    smhv: "No Surprise Pledge: the offer we agree on is the offer you get",
  },
  {
    topic: "Repairs & condition",
    traditional: "Pressure to repair before listing, or low offers with no reasoning",
    smhv: "We buy as-is. Condition is factored into our transparent offer",
  },
  {
    topic: "Communication",
    traditional: "Call centers, slow responses, unclear next steps",
    smhv: "Local Springfield team, fast response, clear process from start to finish",
  },
];

const howItWorksFaqs = [
  {
    question: "How long does the whole process take from first contact to closing?",
    answer:
      "From your first inquiry, we typically present an offer within 24–48 hours during business hours. Once you accept, closing can happen in as few as 14 days—or you can choose a date further out. The entire process moves at your pace.",
  },
  {
    question: "Do I need to get an appraisal or inspection before you make an offer?",
    answer:
      "No. We evaluate your property based on the information you provide and, when helpful, a walkthrough. You don't need to pay for an appraisal or inspection upfront.",
  },
  {
    question: "What paperwork is involved?",
    answer:
      "We use standard real estate contracts and handle most of the paperwork. You'll sign a purchase agreement when you accept our offer, and we coordinate title work, closing, and funding. We pay standard closing costs.",
  },
  {
    question: "Can I still be in the house when we close?",
    answer:
      "Yes. We can work with your timeline. If you need a few weeks to move out after closing, we can often arrange a rent-back or delayed occupancy.",
  },
  {
    question: "What if I have liens or back taxes on the property?",
    answer:
      "We'll factor those into the transaction. Liens and back taxes are typically paid from the sale proceeds at closing. We walk you through the numbers so you understand exactly what you'll receive.",
  },
  {
    question: "Is there a fee to get an offer?",
    answer:
      "No. Requesting an offer is free and carries no obligation. We don't charge consultation fees, evaluation fees, or commissions. You only move forward if the offer works for you.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Open-Book Certainty Offer™ Process",
          description:
            "A three-step process to sell your house in Springfield, MO with full transparency: tell us about your property, get your open-book offer, pick your closing date.",
        })}
      />
      <JsonLd data={faqSchema(howItWorksFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "How It Works", url: "/how-it-works" },
        ])}
      />
      <Hero
        heading="Three Steps to Sell Your Springfield Home"
        subheading="From first contact to closing—transparent numbers, a real date, and no surprises. Here's exactly how the process works."
        primaryCta={{ text: "Get My Open-Book Offer", href: "/contact" }}
        secondaryCta={{
          text: "See the Offer Breakdown",
          href: "#offer-breakdown",
        }}
        primaryCtaSlot={
          <LeadFormDialog
            triggerText="Get My Open-Book Offer"
            triggerSize="lg"
            triggerClassName="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/25"
          />
        }
      />

      {/* 3-Step Process */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Three simple steps to a transparent, stress-free sale of your Springfield home.
          </p>

          <div className="mt-16 space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.number} animation="fade-up" delay={i * 100}>
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-emerald-700 bg-white text-lg font-bold text-emerald-700">
                          {step.number}
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <h3 className="mt-6 text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-lg text-slate-600">
                        {step.description}
                      </p>
                    </div>
                    <Card className="border-slate-200 bg-slate-50">
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-3">
                              <svg className="mt-1 h-4 w-4 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-slate-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open-Book Certainty Offer Explanation */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What Is the Open-Book Certainty Offer™?
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Most cash buyers hand you a number and say &ldquo;take it or leave it.&rdquo; We do the opposite.
              The Open-Book Certainty Offer™ is our commitment to showing you exactly how we calculate your offer,
              locking a real closing date, and guaranteeing the price won&apos;t change.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Open-Book Numbers",
                text: "We show you the after-repair value, renovation costs, and carrying costs. Every line item is explained in plain language so you can verify the math yourself.",
              },
              {
                icon: CalendarCheck,
                title: "A Real Close Date",
                text: "Pick a closing date—often in as few as 14 days—and we put it in writing. No vague timelines or endless extensions.",
              },
              {
                icon: Shield,
                title: "The No Surprise Pledge",
                text: "The offer we agree on is the offer you get. No re-trades, no invented fees at the last minute. Period.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-slate-200 bg-white">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-600">
                      {item.text}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="mt-10">
            <Link
              href="/open-book-certainty-offer"
              className="font-semibold text-blue-700 hover:text-blue-800 hover:underline"
            >
              Learn more about the Open-Book Certainty Offer™ →
            </Link>
          </p>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why We&apos;re Different
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Traditional house buyers vs. Show-Me Home Ventures
          </p>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="py-4 pr-4 text-left font-semibold text-slate-900">
                    Topic
                  </th>
                  <th className="py-4 px-4 text-left font-semibold text-slate-700">
                    Traditional Buyers
                  </th>
                  <th className="py-4 pl-4 text-left font-semibold text-emerald-700">
                    Show-Me Home Ventures
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr
                    key={row.topic}
                    className="border-b border-slate-200 hover:bg-slate-50/50"
                  >
                    <td className="py-4 pr-4 font-medium text-slate-900">
                      {row.topic}
                    </td>
                    <td className="py-4 px-4 text-slate-600">{row.traditional}</td>
                    <td className="py-4 pl-4 text-slate-700">
                      {row.smhv}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="offer-breakdown" className="scroll-mt-24">
        <OfferBreakdown />
      </section>

      {/* Phone CTA */}
      <section className="py-12 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold text-white">
            Questions about the process? Call us.
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="mt-2 inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-emerald-100 transition-colors"
          >
            <Phone className="h-6 w-6" />
            {siteConfig.phone}
          </a>
        </div>
      </section>

      <TestimonialGrid limit={2} featuredOnly />
      <FaqAccordion faqs={howItWorksFaqs} title="Process FAQs" />
      <CtaSection
        heading="Ready to See Your Numbers?"
        subheading="Get your Open-Book Certainty Offer™ in three simple steps. No obligation, no pressure—just transparent numbers from a local Springfield buyer."
      />
    </>
  );
}
