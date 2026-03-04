import Link from "next/link";
import { areas } from "@/data/areas";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const metadata = createMetadata({
  title: "Areas We Serve | Springfield MO, Ozark, Nixa, Republic, Battlefield",
  description:
    "Show-Me Home Ventures buys houses throughout Southwest Missouri—Springfield, Ozark, Nixa, Republic, Battlefield, Greene County, Christian County, and the Ozarks region. Get your Open-Book Certainty Offer™.",
  path: "/areas",
  keywords: [
    "we buy houses Springfield MO",
    "cash home buyer Ozark MO",
    "sell house Nixa Missouri",
    "home buyer Republic MO",
  ],
});

export default function AreasHubPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Home Buying Service Areas in Southwest Missouri",
          description:
            "Transparent home-buying service across Springfield, Ozark, Nixa, Republic, Battlefield, and surrounding Ozarks communities.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Areas We Serve", url: "/areas" },
        ])}
      />
      <Hero
        heading="Areas We Serve in Southwest Missouri"
        subheading="We buy houses throughout the Springfield metro and the Ozarks—Greene County, Christian County, and beyond. Transparent offers, real closing dates."
        primaryCta={{ text: "Get My Open-Book Offer", href: "/get-offer" }}
        secondaryCta={{
          text: "How It Works",
          href: "/how-it-works",
        }}
        primaryCtaSlot={
          <LeadFormDialog triggerText="Get My Open-Book Offer" triggerSize="lg" />
        }
      />

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Communities We Serve
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We buy houses throughout the Springfield metro and surrounding Ozarks
            communities. Click your area to learn more.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group"
              >
                <Card className="h-full border-slate-200 bg-white transition-shadow hover:shadow-md group-hover:border-emerald-200">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-3 text-lg group-hover:text-emerald-700 transition-colors">
                      {area.city}, {area.state}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {area.county}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="inline-block text-sm font-medium text-emerald-700 group-hover:underline">
                      Learn more about {area.city} →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Service Area at a Glance
          </h2>
          <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <iframe
              title="Areas We Serve in Southwest Missouri"
              src="https://www.google.com/maps?q=Springfield,+MO&output=embed"
              className="aspect-video w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Expanding Our Service Area
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg text-slate-600">
            <p>
              We&apos;re rooted in Springfield and the Ozarks, and we&apos;re
              constantly expanding the areas we serve. If your community isn&apos;t
              listed here—whether you&apos;re in Rogersville, Highlandville,
              Ash Grove, or another Southwest Missouri town—reach out. We may
              already be active in your area, or we may be able to help.
            </p>
            <p>
              Our Open-Book Certainty Offer™ works the same wherever we buy:
              transparent numbers, a real closing date, and the No Surprise
              Pledge. No matter where you are in the region, you get the same
              process and the same commitment to clarity.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready for an Offer in Your Area?"
        subheading="Get your Open-Book Certainty Offer™—transparent numbers, a real closing date, and no surprises. We serve Springfield, Ozark, Nixa, Republic, Battlefield, and beyond."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
