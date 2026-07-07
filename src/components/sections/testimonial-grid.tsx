import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Section, SectionHeading } from "@/components/ui/section";

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
    <Section tone="paper">
      <SectionHeading
        eyebrow="Seller experiences"
        title="What homeowners say"
        lead="From inherited houses to fast relocations — how the process felt from the seller's side."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="flex flex-col rounded-xl border border-navy-100 bg-white p-6 sm:p-7"
          >
            <div
              className="flex gap-0.5"
              role="img"
              aria-label={`Rated ${testimonial.rating} out of 5 stars`}
            >
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-gold-500 text-gold-500"
                  aria-hidden
                />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 leading-relaxed text-navy-800">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-navy-100 pt-4">
              <p className="font-semibold text-navy-950">{testimonial.name}</p>
              <p className="mt-0.5 text-sm text-navy-500">
                {testimonial.location} · {testimonial.situation}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
