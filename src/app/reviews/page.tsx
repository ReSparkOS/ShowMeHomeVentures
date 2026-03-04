import {
  Hero,
  CtaSection,
  TestimonialGrid,
} from "@/components/sections";
import { JsonLd, reviewSchema, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

export const metadata = createMetadata({
  title: "Reviews & Testimonials | Springfield MO Home Seller Experiences",
  description:
    "Real experiences from homeowners who sold with Show-Me Home Ventures. Read reviews from Springfield, MO and the Ozarks—inherited homes, foreclosure, divorce, and more.",
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
        data={reviewSchema(
          testimonials.map((t) => ({
            name: t.name,
            location: t.location,
            rating: t.rating,
            quote: t.quote,
          }))
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews" },
        ])}
      />
      <Hero
        heading="What Homeowners Say About Working With Us"
        subheading="Real experiences from people who chose the Open-Book Certainty Offer™. No hype—just honest feedback from Springfield and the Ozarks."
        primaryCta={{ text: "Get My Open-Book Offer", href: "/contact" }}
        secondaryCta={{ text: "See Case Studies", href: "/case-studies" }}
      />

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-lg text-slate-600">
            Selling a house in a difficult situation—inherited property, foreclosure,
            divorce, or a home that needs work—can feel overwhelming. The homeowners
            below have been there. They share how the Open-Book Certainty Offer™ gave
            them clarity, a real closing date, and peace of mind.
          </p>
        </div>
      </section>

      <TestimonialGrid featuredOnly={false} />

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Share Your Experience
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Have you sold with us? We&apos;d love to hear from you. Your feedback helps
            other homeowners in Springfield and the Ozarks make informed decisions.
            Leave a Google review and share what the process was like for you.
          </p>
          {siteConfig.social?.google && (
            <div className="mt-6">
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-emerald-700 px-6 py-3 text-white font-medium hover:bg-emerald-800 transition-colors"
              >
                Leave a Google Review
              </a>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
