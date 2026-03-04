import Link from "next/link";
import {
  Hero,
  FaqAccordion,
  CtaSection,
  SituationsGrid,
  ProofBar,
} from "@/components/sections";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { LeadForm } from "@/components/forms/lead-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, FileText, Home, Shield } from "lucide-react";

export const metadata = createMetadata({
  title: "Sell Your House Fast in Springfield, MO | Cash Offer in 24 Hours",
  description:
    "Need to sell your house fast in Springfield, MO? Get a fair cash offer within 24 hours. No repairs, no commissions, no hassle. Close in as few as 14 days with our Open-Book Certainty Offer™.",
  path: "/sell-your-house-fast",
  keywords: [
    "sell my house fast Springfield MO",
    "sell house fast Springfield Missouri",
    "cash home buyers Springfield MO",
    "we buy houses Springfield MO",
    "sell house as is Springfield MO",
    "quick house sale Springfield Missouri",
    "sell house without agent Springfield",
    "cash offer for my house",
    "sell house fast near me",
    "sell inherited house Springfield MO",
    "avoid foreclosure Springfield MO",
  ],
});

const faqs = [
  {
    question: "How fast can I sell my house in Springfield, MO?",
    answer:
      "We can make a cash offer within 24 hours of your initial contact and close in as few as 14 days. You choose the closing date that works for your timeline—we put it in writing and stick to it.",
  },
  {
    question: "Do I need to make repairs before selling?",
    answer:
      "No. We buy houses in any condition—mold, foundation issues, fire damage, hoarding, bad tenants, you name it. We factor the cost of repairs into our offer so you never have to spend a dime fixing up the property.",
  },
  {
    question: "How is your offer different from other 'we buy houses' companies?",
    answer:
      "Most cash buyers give you a number with no explanation. We show you exactly how we calculated your offer with our Open-Book Certainty Offer™—the after-repair value, renovation costs, carrying costs, and our margin. Full transparency. Plus our No Surprise Pledge means the price won't change at closing.",
  },
  {
    question: "Are there any fees or commissions?",
    answer:
      "None. There are no agent commissions, no listing fees, no closing costs on your end, and no hidden charges. The number we present is what you walk away with (minus any existing liens or prorated taxes).",
  },
  {
    question: "What if my house is in terrible condition?",
    answer:
      "We buy houses in any condition. Seriously. Roof caving in, code violations, mold, hoarder situations—we've seen it all and we'll still make a fair offer. No judgment, just a number and a plan.",
  },
  {
    question: "Can I sell if I'm behind on payments or facing foreclosure?",
    answer:
      "Yes. We work with homeowners facing foreclosure regularly and can often close fast enough to prevent it. Time is critical in these situations, so reach out as soon as possible and we'll move quickly.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Springfield, MO and the greater Ozarks region—including Greene County, Christian County, Ozark, Nixa, Republic, Battlefield, and surrounding communities.",
  },
  {
    question: "Is there any obligation if I get an offer?",
    answer:
      "Zero obligation. We'll evaluate your property, walk you through the numbers, and present an offer. If it doesn't work for you, no hard feelings and no cost. You decide on your own timeline.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "1. Tell Us About Your Property",
    description:
      "Fill out our quick form or call us directly. We just need a few basics—address, condition, and your timeline.",
  },
  {
    icon: Home,
    title: "2. We Evaluate & Present Your Offer",
    description:
      "We'll review the property and present an Open-Book Certainty Offer™ with every line item explained. You see the same math we use.",
  },
  {
    icon: Clock,
    title: "3. Pick Your Closing Date",
    description:
      "Choose a closing date that works for you—as soon as 14 days or months out. We put it in writing with our No Surprise Pledge.",
  },
  {
    icon: DollarSign,
    title: "4. Close & Get Paid",
    description:
      "Sign at a local title company, get your cash, and move on. No repairs, no showings, no waiting.",
  },
];

const benefits = [
  "No agent commissions or fees",
  "Close in as few as 14 days",
  "Sell as-is — no repairs needed",
  "You choose the closing date",
  "Transparent pricing — see the math",
  "No surprise re-trades at closing",
  "Local Springfield team",
  "Free, no-obligation offer",
];

export default function SellYourHouseFastPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Sell Your House Fast in Springfield, MO",
          description:
            "Fast cash home buying service in Springfield, MO. Get a fair Open-Book Certainty Offer™ within 24 hours and close in as few as 14 days. No repairs, no commissions.",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Sell Your House Fast", url: "/sell-your-house-fast" },
        ])}
      />

      <Hero
        heading="Sell Your House Fast in Springfield, MO — Cash Offer in 24 Hours"
        subheading="No repairs. No commissions. No waiting. Get a transparent Open-Book Certainty Offer™ and close on your timeline."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{
          text: "See How It Works",
          href: "/how-it-works",
        }}
        primaryCtaSlot={
          <LeadFormDialog
            triggerText="Get My Cash Offer"
            triggerSize="lg"
            triggerClassName="bg-slate-900 hover:bg-slate-800"
          />
        }
      />

      <ProofBar />

      {/* How it works */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How to Sell Your House Fast in Springfield
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Four simple steps. No listing, no waiting, no uncertainty.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="border-slate-200 bg-white">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="font-semibold text-blue-700 hover:text-blue-800 hover:underline"
            >
              Learn more about our process →
            </Link>
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Homeowners in Springfield Choose Us
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We&apos;re not like other &quot;we buy houses&quot; companies. Here&apos;s what
            makes the Open-Book Certainty Offer™ different.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <span className="text-sm font-medium text-slate-800">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Inline lead form */}
      <section id="get-offer" className="py-20 lg:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get Your Cash Offer — It Takes 2 Minutes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your property. We&apos;ll reach out within 2 hours
              during business hours with a transparent offer.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Trust: No Surprise Pledge */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="mx-auto h-12 w-12 text-blue-700" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The No Surprise Pledge
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Our offer won&apos;t change at closing. What we agree to is what you get.
            No re-trades, no invented fees, no last-minute adjustments. We put it
            in writing because you deserve certainty.
          </p>
          <p className="mt-6">
            <Link
              href="/no-surprise-pledge"
              className="font-semibold text-blue-700 hover:text-blue-800 hover:underline"
            >
              Read the full No Surprise Pledge →
            </Link>
          </p>
        </div>
      </section>

      {/* Situations we handle */}
      <SituationsGrid />

      {/* Internal linking to area pages */}
      <section className="py-16 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            We Buy Houses Throughout Southwest Missouri
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/areas/springfield-mo" className="text-blue-700 hover:underline">Springfield, MO</Link>
            <Link href="/areas/ozark-mo" className="text-blue-700 hover:underline">Ozark, MO</Link>
            <Link href="/areas/nixa-mo" className="text-blue-700 hover:underline">Nixa, MO</Link>
            <Link href="/areas/republic-mo" className="text-blue-700 hover:underline">Republic, MO</Link>
            <Link href="/areas/battlefield-mo" className="text-blue-700 hover:underline">Battlefield, MO</Link>
            <Link href="/areas" className="font-medium text-blue-700 hover:underline">View all areas →</Link>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={faqs}
        title="Frequently Asked Questions About Selling Your House Fast"
      />

      <CtaSection
        heading="Ready to Sell Your House Fast?"
        subheading="Get your Open-Book Certainty Offer™ today—transparent numbers, a real closing date, and no surprises."
        ctaText="Get My Cash Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
