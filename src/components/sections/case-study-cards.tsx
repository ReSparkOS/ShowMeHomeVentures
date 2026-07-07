import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface CaseStudyCardsProps {
  limit?: number;
  showAll?: boolean;
  featuredOnly?: boolean;
  /** Filter by case study situation (e.g. "Inherited House", "Foreclosure"). Falls back to any if no match. */
  situationFilter?: string;
}

export function CaseStudyCards({
  limit = 3,
  showAll = false,
  featuredOnly = true,
  situationFilter,
}: CaseStudyCardsProps) {
  let items = featuredOnly
    ? caseStudies.filter((c) => c.featured)
    : caseStudies;
  if (situationFilter) {
    const filtered = items.filter(
      (c) => c.situation.toLowerCase() === situationFilter.toLowerCase()
    );
    if (filtered.length > 0) items = filtered;
  }
  if (!showAll && limit) {
    items = items.slice(0, limit);
  }

  return (
    <Section>
      <SectionHeading
        eyebrow="Case studies"
        title="How sellers used our offer"
        lead="See how our Open-Book offer has helped homeowners across Springfield and the Ozarks."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group"
          >
            <Card className="flex h-full flex-col border-navy-100">
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{study.situation}</Badge>
                  <Badge variant="outline">{study.location}</Badge>
                </div>
                <CardTitle className="mt-3 text-lg transition-colors group-hover:text-brand-700">
                  {study.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit">
                  {study.timeline}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="line-clamp-3 text-navy-600">
                  {study.challenge}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <span className="flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:underline">
                  Read case study
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
