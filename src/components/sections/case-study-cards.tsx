import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Real Stories, Real Results
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          See how the Open-Book Certainty Offer™ has helped homeowners in
          Springfield and the Ozarks.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((study) => (
            <Card
              key={study.slug}
              className="flex flex-col border-slate-200 overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{study.situation}</Badge>
                  <Badge variant="outline">{study.location}</Badge>
                </div>
                <CardTitle className="mt-3 text-lg">{study.title}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {study.timeline}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="line-clamp-3 text-slate-600">
                  {study.challenge}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto font-semibold">
                  <Link href={`/case-studies/${study.slug}`}>
                    Read Case Study →
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
