import { Hero, CtaSection, CaseStudyCards } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Case Studies | Real Results for Real Homeowners",
  description:
    "Transparent case studies from Springfield, MO showing our Open-Book process. Inherited homes, foreclosure, tenants, code violations—see the numbers and outcomes.",
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
        subheading="Transparent case studies showing our Open-Book process. See the numbers—before value, renovation costs, offer price—and how we helped families across Springfield and the Ozarks."
        primaryCta={{ text: "Get My Open-Book Offer", href: "/contact" }}
        secondaryCta={{ text: "How It Works", href: "/how-it-works" }}
      />

      <CaseStudyCards showAll featuredOnly={false} />

      <CtaSection />
    </>
  );
}
