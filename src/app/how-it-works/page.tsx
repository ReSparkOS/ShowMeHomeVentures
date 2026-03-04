import {
  Hero,
  ProcessTimeline,
  OfferBreakdown,
  TestimonialGrid,
  FaqAccordion,
  CtaSection,
} from "@/components/sections";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata({
  title: "How It Works | Open-Book Certainty Offer Process",
  description:
    "Four simple steps to sell your house with Show-Me Home Ventures. Get a transparent offer, pick your close date, and close with certainty. No surprises, no re-trades.",
  path: "/how-it-works",
  keywords: [
    "how to sell house fast Springfield MO",
    "cash home sale process Missouri",
    "transparent house offer process",
  ],
});

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
    smhv: "Local team, fast response, clear process from start to finish",
  },
];

const howItWorksFaqs = [
  {
    question: "How long does the whole process take from first contact to closing?",
    answer:
      "From your first inquiry, we typically present an offer within 24–48 hours during business hours. Once you accept, closing can happen in as few as 14 days—or you can choose a date further out if that works better for your situation. The entire process is designed to move at your pace.",
  },
  {
    question: "Do I need to get an appraisal or inspection before you make an offer?",
    answer:
      "No. We evaluate your property based on the information you provide and, when helpful, a walkthrough. We don't require you to pay for an appraisal or inspection upfront. If we need more information, we'll ask. Our offer reflects our assessment of condition and value.",
  },
  {
    question: "What paperwork is involved?",
    answer:
      "We use standard real estate contracts and handle most of the paperwork. You'll sign a purchase agreement when you accept our offer, and we coordinate title work, closing, and funding. We pay standard closing costs. Our team guides you through each step.",
  },
  {
    question: "Can I still be in the house when we close?",
    answer:
      "Yes. We can work with your timeline. If you need a few weeks to move out after closing, we can often arrange a rent-back or delayed occupancy. Tell us what you need and we'll see what we can do.",
  },
  {
    question: "What if I have liens or back taxes on the property?",
    answer:
      "We'll factor those into the transaction. Liens and back taxes are typically paid from the sale proceeds at closing. We'll walk you through the numbers so you understand exactly what you'll receive. If the situation is complex, we'll discuss options openly.",
  },
  {
    question: "Is there a fee to get an offer?",
    answer:
      "No. Requesting an offer is free and carries no obligation. We don't charge consultation fees, evaluation fees, or commissions. You only move forward if the offer and process work for you.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Open-Book Certainty Offer Process",
          description:
            "A four-step process to sell your house with full transparency: receive an open-book offer, pick your closing date, and close with no surprises.",
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
        heading="How the Open-Book Certainty Offer™ Works"
        subheading="Four simple steps to a transparent, stress-free sale. From first contact to closing, we show you the numbers and lock your date."
        primaryCta={{ text: "Get My Open-Book Offer", href: "/contact" }}
        secondaryCta={{
          text: "See the Offer Breakdown",
          href: "/open-book-certainty-offer#offer-breakdown",
        }}
      />

      <ProcessTimeline />

      {/* Why We're Different */}
      <section className="py-20 lg:py-28 bg-slate-50">
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
                    className="border-b border-slate-200 hover:bg-white/50"
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

      <TestimonialGrid limit={2} featuredOnly />
      <FaqAccordion faqs={howItWorksFaqs} title="Process FAQs" />
      <CtaSection />
    </>
  );
}
