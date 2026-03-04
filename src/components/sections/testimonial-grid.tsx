import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface TestimonialGridProps {
  limit?: number;
  featuredOnly?: boolean;
}

export function TestimonialGrid({
  limit,
  featuredOnly = true,
}: TestimonialGridProps) {
  let items = featuredOnly
    ? testimonials.filter((t) => t.featured)
    : testimonials;
  if (limit) {
    items = items.slice(0, limit);
  }

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          What Homeowners Say
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Real stories from real people in Springfield and the Ozarks.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex flex-col border-slate-200 bg-white"
            >
              <CardHeader className="pb-2">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <Badge variant="secondary" className="mt-2 w-fit">
                  {testimonial.situation}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <blockquote className="text-slate-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer className="mt-4">
                  <p className="font-medium text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
