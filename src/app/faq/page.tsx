import Link from "next/link";
import {
  Hero,
  FaqAccordion,
  CtaSection,
  type FaqItem,
} from "@/components/sections";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Frequently Asked Questions | Selling Your House in Springfield, MO",
  description:
    "FAQ answers about selling to Show-Me Home Ventures: how the process works, costs, closing timeline, offer transparency, and why we’re a legitimate local cash buyer in Springfield, MO.",
  path: "/faq",
  keywords: [
    "FAQ sell house Springfield MO",
    "cash offer questions Springfield",
    "we buy houses FAQ Missouri",
    "sell house fast questions",
    "Show-Me Home Ventures FAQ",
  ],
});

const aboutProcessFaqs: FaqItem[] = [
  {
    question: "How does the process work?",
    answer:
      "It’s three simple steps: tell us about your property (address, condition, and timeline), receive a clear cash offer with our Open-Book breakdown, then pick a closing date that fits you. We handle title and coordination from there.",
  },
  {
    question: "How quickly can you close?",
    answer:
      "We can often close in as few as 14 days when the title is clear. If you need more time to move or coordinate probate, you choose the date—we’ll work with your timeline.",
  },
  {
    question: "Do I need to make any repairs?",
    answer:
      "No. We buy houses as-is. You don’t need to paint, fix the roof, or clear out junk before we make an offer—condition is factored into our numbers upfront.",
  },
  {
    question: "What paperwork is involved?",
    answer:
      "You’ll sign a standard purchase agreement when you accept our offer. We coordinate title work and closing with a licensed title company or closing attorney. You’re not on your own—we walk you through each document.",
  },
];

const aboutOfferFaqsForSchema: FaqItem[] = [
  {
    question: "How do you determine your offer price?",
    answer:
      "We use a transparent formula: roughly 70% of the after repair value (ARV), minus estimated repair costs. Every line item is shown in our Open-Book Certainty Offer breakdown so you can see how we arrived at the number—not a black-box number.",
  },
  {
    question: "Are there any fees or commissions?",
    answer:
      "There are no agent commissions and no fees we charge you. We cover standard closing costs as described in your agreement. What we agree you’ll receive is what the closing statement reflects—no surprise deductions from us.",
  },
  {
    question: "What is the Open-Book Certainty Offer?",
    answer:
      "It’s our transparent offer format: we show after repair value (ARV), repair estimates, and our offer in one clear breakdown. You see the math behind the number instead of a single unexplained figure.",
  },
  {
    question: "Will your offer change at closing?",
    answer:
      "No. Our No Surprise Pledge means the cash amount we agree to in writing is what you should expect at closing—we don’t re-trade or tack on surprise fees. If something unusual shows up on title, we’ll discuss it openly before closing, not as a last-minute ambush.",
  },
];

const trustFaqs: FaqItem[] = [
  {
    question: "Is this a scam?",
    answer:
      "No. Show-Me Home Ventures is a legitimate local home-buying business based in Springfield, MO. We use licensed title and closing partners, we’ll show you the math behind any offer, and we’re happy to answer questions by phone or in person. If anything feels off with any buyer—us or anyone else—always verify escrow and never wire money upfront.",
  },
  {
    question: "Am I leaving money on the table?",
    answer:
      "Sometimes a traditional listing might net more—but it can take months, requires showings and repairs, and carries the risk of a deal falling through. Our offer trades some upside for speed, certainty, and zero repair work. We’ll give you an honest comparison so you can pick what fits your situation.",
  },
  {
    question: "Are you a real local company?",
    answer:
      "Yes. We’re based in Springfield and focus on southwest Missouri. You’re working with a local team—not a distant call center—so you get clear communication and someone who knows the market.",
  },
  {
    question: "What if I change my mind?",
    answer:
      "There’s no obligation until you sign a contract. You can walk away anytime before that. We want you to feel confident in your decision, not pressured.",
  },
];

const specificSituationsFaqs: FaqItem[] = [
  {
    question: "Can you buy my house if it's in probate?",
    answer:
      "Often, yes. We regularly work with executors and administrators. Probate has extra steps—we’ll coordinate with you and any attorney involved so closing matches what the court requires.",
  },
  {
    question: "Do I need to evict tenants first?",
    answer:
      "No. We can buy with tenants in place. We’ll factor the lease and rent situation into our offer and discuss what happens at closing so you know what to expect.",
  },
  {
    question: "What if I'm behind on payments?",
    answer:
      "We may be able to help you avoid foreclosure by closing quickly before the timeline runs out—depending on your lender, equity, and situation. Reach out sooner rather than later so we can review options with you.",
  },
  {
    question: "Do you buy houses in any condition?",
    answer:
      "Yes—fire damage, foundation concerns, hoarder situations, vacant homes, major updates needed, and more. We buy as-is and bake condition into our offer so you’re not stuck fixing everything first.",
  },
];

const allFaqForSchema: FaqItem[] = [
  ...aboutProcessFaqs,
  ...aboutOfferFaqsForSchema,
  ...trustFaqs,
  ...specificSituationsFaqs,
];

const linkClass = "font-medium text-blue-700 hover:underline";

function AboutOurOfferFaqSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          About Our Offer
        </h2>
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="offer-0">
              <AccordionTrigger className="text-left font-medium">
                How do you determine your offer price?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>
                  We use a transparent formula: roughly{" "}
                  <strong className="text-slate-900">70% of the after repair value (ARV)</strong>, minus
                  estimated repair costs. Every line item is shown in our{" "}
                  <Link href="/open-book-certainty-offer" className={linkClass}>
                    Open-Book Certainty Offer
                  </Link>{" "}
                  breakdown so you can see how we arrived at the number—not a black-box number.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="offer-1">
              <AccordionTrigger className="text-left font-medium">
                Are there any fees or commissions?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>
                  There are no agent commissions and no fees we charge you. We cover standard closing
                  costs as described in your agreement. What we agree you’ll receive is what the closing
                  statement reflects—no surprise deductions from us.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="offer-2">
              <AccordionTrigger className="text-left font-medium">
                What is the Open-Book Certainty Offer?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>
                  It’s our transparent offer format: we show after repair value (ARV), repair estimates,
                  and our offer in one clear breakdown.{" "}
                  <Link href="/open-book-certainty-offer" className={linkClass}>
                    Learn more about our Open-Book Certainty Offer
                  </Link>{" "}
                  and how we show you the math behind the number.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="offer-3">
              <AccordionTrigger className="text-left font-medium">
                Will your offer change at closing?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <p>
                  No. Our{" "}
                  <Link href="/no-surprise-pledge" className={linkClass}>
                    No Surprise Pledge
                  </Link>{" "}
                  means the cash amount we agree to in writing is what you should expect at closing—we
                  don’t re-trade or tack on surprise fees. If something unusual shows up on title, we’ll
                  discuss it openly before closing, not as a last-minute ambush.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqForSchema)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ])}
      />
      <Hero
        heading="Frequently Asked Questions"
        subheading="Common questions about selling your house to Show-Me Home Ventures"
        primaryCta={{ text: "Contact Us", href: "/contact" }}
        secondaryCta={{ text: "How It Works", href: "/how-it-works" }}
      />

      <FaqAccordion faqs={aboutProcessFaqs} title="About the Process" />
      <AboutOurOfferFaqSection />
      <FaqAccordion faqs={trustFaqs} title="Trust & Legitimacy" />
      <FaqAccordion faqs={specificSituationsFaqs} title="Specific Situations" />

      <CtaSection
        heading="Still have questions?"
        subheading="Tell us about your property and timeline—we’ll explain the process, walk through the numbers, and help you decide if a cash sale is the right fit. No pressure, no obligation until you’re ready."
        ctaText="Get started"
        ctaHref="/get-offer"
      />
    </>
  );
}
