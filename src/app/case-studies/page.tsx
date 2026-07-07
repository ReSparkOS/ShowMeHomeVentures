import { Hero, CtaSection, CaseStudyCards } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Case Studies: Springfield Home Sales",
  description:
    "Transparent case studies from Springfield, MO showing our Open-Book process: inherited homes, foreclosure, tenants, and code violations, with the numbers.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ])}
      />
      <Hero
        heading="Real Results for Real Homeowners"
        subheading="Transparent case studies showing our Open-Book process, with the numbers behind each deal: before value, renovation costs, and offer price. See how we helped families across Springfield and the Ozarks."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{ text: "How It Works", href: "/how-it-works" }}
      />

      <CaseStudyCards showAll featuredOnly={false} />

      <CtaSection />
    </>
  );
}
