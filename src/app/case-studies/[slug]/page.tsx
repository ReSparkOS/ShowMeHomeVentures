import { notFound } from "next/navigation";
import { Hero, CtaSection } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { caseStudies } from "@/data/case-studies";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/utils";

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
        primaryCta={{ text: "Get My Open-Book Offer", href: "/contact" }}
        secondaryCta={{ text: "View All Case Studies", href: "/case-studies" }}
      />

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">{study.situation}</Badge>
            <Badge variant="outline">{study.propertyType}</Badge>
            <Badge variant="outline">{study.location}</Badge>
          </div>

          <div className="space-y-10">
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl">The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl">The Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{study.solution}</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl">The Outcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{study.outcome}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">
            The Numbers
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-slate-200 bg-white">
              <CardHeader className="pb-2">
                <CardDescription>After-Repair Value (ARV)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-900">{study.afterValue}</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 bg-white">
              <CardHeader className="pb-2">
                <CardDescription>Estimated Repairs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-red-600">
                  - {study.renovationCost}
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader className="pb-2">
                <CardDescription className="text-blue-700">Our Cash Offer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-blue-800">
                  {study.offerPrice}
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 bg-white">
              <CardHeader className="pb-2">
                <CardDescription>Days to Close</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-900">{study.timeline}</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Formula: 70% of ARV minus repair costs = our offer. As-is value estimate: {study.beforeValue}.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
            The Open-Book Process Applied
          </h2>
          <Card className="border-emerald-200 bg-emerald-50">
            <CardContent className="pt-6">
              <p className="text-slate-700 leading-relaxed">
                Every case study above reflects our Open-Book Certainty Offer™ in
                action: we showed the seller exactly how we calculated the offer — 70%
                of after-repair value minus estimated repair costs. We locked a real
                closing date in writing and honored the No Surprise Pledge. No
                re-trades, no hidden fees. Just transparency and a close date you
                could count on.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Ready for the same approach?{" "}
                <a
                  href="/contact"
                  className="font-medium text-emerald-700 hover:underline"
                >
                  Get your Open-Book Certainty Offer
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
