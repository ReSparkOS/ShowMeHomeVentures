import { notFound } from "next/navigation";
import { Hero, CtaSection } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { caseStudies } from "@/data/case-studies";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<ReturnType<typeof createMetadata>> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) {
    return createMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      path: `/case-studies/${slug}`,
    });
  }
  return createMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
    { name: study.title, url: `/case-studies/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <Hero
        heading={study.title}
        subheading={`${study.situation} • ${study.location}`}
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{ text: "View All Case Studies", href: "/case-studies" }}
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-wrap gap-2">
            <Badge variant="secondary">{study.situation}</Badge>
            <Badge variant="outline">{study.propertyType}</Badge>
            <Badge variant="outline">{study.location}</Badge>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl">The challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-navy-600">{study.challenge}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl">The solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-navy-600">{study.solution}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl">The outcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-navy-600">{study.outcome}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-4xl">
          <SectionHeading as="h2" title="The numbers" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>After-Repair Value (ARV)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-navy-950">{study.afterValue}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Estimated Repairs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-navy-700">
                  - {study.renovationCost}
                </p>
              </CardContent>
            </Card>
            <Card className="border-brand-200 bg-brand-50">
              <CardHeader className="pb-2">
                <CardDescription className="text-brand-700">
                  Our Cash Offer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-brand-800">{study.offerPrice}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Days to Close</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-navy-950">{study.timeline}</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-sm text-navy-600">
            Formula: 70% of ARV minus repair costs = our offer. As-is value estimate:{" "}
            {study.beforeValue}.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <SectionHeading as="h2" title="The Open-Book process applied" />
          <Card className="mt-8 border-brand-200 bg-brand-50">
            <CardContent className="pt-6">
              <p className="leading-relaxed text-navy-700">
                This case study reflects our Open-Book Certainty Offer™ in action: we
                showed the seller exactly how we calculated the offer, 70% of
                after-repair value minus estimated repair costs. We locked the closing
                date in writing and stood behind our No Surprise Pledge. No re-trades,
                no hidden fees.
              </p>
              <p className="mt-4 leading-relaxed text-navy-700">
                Ready for the same approach?{" "}
                <a
                  href="/contact"
                  className="font-medium text-brand-700 hover:underline"
                >
                  Get your Open-Book offer
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
