import {
  Hero,
  CtaSection,
  TestimonialGrid,
} from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Springfield MO Home Seller Reviews",
  description:
    "Homeowner experiences with Show-Me Home Ventures across Springfield, MO and the Ozarks: inherited homes, foreclosure, divorce, and homes that need work.",
  path: "/reviews",
  keywords: [
    "Show-Me Home Ventures reviews",
    "Springfield MO home buyer reviews",
    "sell house fast reviews Ozarks",
  ],
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews" },
        ])}
      />
      <Hero
        heading="What Homeowners Say About Working With Us"
        subheading="Real experiences from people who chose the Open-Book Certainty Offer™. No hype, just honest feedback from Springfield and the Ozarks."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{ text: "See Case Studies", href: "/case-studies" }}
      />

      <Section compact>
        <p className="max-w-3xl text-lg leading-relaxed text-navy-600">
          Selling a house in a difficult situation, whether an inherited property,
          foreclosure, divorce, or a home that needs work, can feel overwhelming. The
          homeowners below have been there. They share how the Open-Book offer gave
          them clarity, a real closing date, and peace of mind.
        </p>
      </Section>

      <TestimonialGrid featuredOnly={false} />

      <Section tone="paper">
        <SectionHeading
          title="Share your experience"
          lead="Have you sold with us? We'd love to hear from you. Your feedback helps other homeowners in Springfield and the Ozarks make informed decisions. Leave a Google review and share what the process was like for you."
        />
      </Section>

      <CtaSection />
    </>
  );
}
