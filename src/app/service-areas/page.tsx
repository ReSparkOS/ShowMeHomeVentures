import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { Hero, CtaSection } from "@/components/sections";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { areas } from "@/data/areas";

export const metadata = createMetadata({
  title:
    "Service Areas | Springfield, Nixa, Ozark, Republic, Battlefield, Rogersville MO",
  description:
    "Show-Me Home Ventures buys houses in Springfield, MO and across Southwest Missouri—Nixa, Ozark, Republic, Battlefield, Rogersville, and nearby communities. Transparent cash offers and real closing dates.",
  path: "/service-areas",
  keywords: [
    "service areas Springfield MO",
    "cash home buyer Southwest Missouri",
    "we buy houses Nixa Ozark Republic",
    "home buyer Battlefield Rogersville MO",
    "Greene County Christian County Webster County",
    "Springfield metro home buyers",
  ],
});

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Home Buying Service Areas — Springfield & Southwest Missouri",
          description:
            "We buy houses across the Springfield metro, Ozarks region, and surrounding communities including Rogersville, Nixa, Ozark, Republic, and Battlefield.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
        ])}
      />
      <Hero
        heading="Serving Springfield and Southwest Missouri"
        subheading="We buy houses across the Springfield metro and the Ozarks—from Greene and Christian County hubs to Webster County and nearby towns. Same transparent process wherever we can help."
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
            Where We Buy Houses
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Explore our core service areas below. Don&apos;t see your town? We
            still may be able to help—especially in Rogersville, Highlandville,
            Ash Grove, Strafford, and across SW Missouri.
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-3 text-lg transition-colors group-hover:text-emerald-700">
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
            <Link href="/contact" className="group">
              <Card className="h-full border-slate-200 bg-white transition-shadow hover:shadow-md group-hover:border-emerald-200">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-3 text-lg transition-colors group-hover:text-emerald-700">
                    Rogersville, MO
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Webster County
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <span className="inline-block text-sm font-medium text-emerald-700 group-hover:underline">
                    Contact us about Rogersville →
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Springfield Area at a Glance
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We&apos;re based in the Springfield metro and buy throughout the
            surrounding region.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <iframe
              title="Springfield MO and surrounding service area map"
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
              We&apos;re rooted in Springfield and the Ozarks, and we buy in
              towns well beyond the list above.{" "}
              <span className="font-medium text-slate-900">
                Rogersville, Highlandville, Ash Grove, Strafford
              </span>
              , and other Southwest Missouri communities are on our radar—if
              you&apos;re nearby, reach out and we&apos;ll tell you honestly
              whether we can make an offer.
            </p>
            <p>
              Don&apos;t see your city or ZIP? That doesn&apos;t mean we
              can&apos;t help. Many sellers first find us through Springfield,
              Nixa, or Ozark and discover we also cover their neck of the woods.
              A quick message or call is the fastest way to confirm coverage.
            </p>
            <p>
              Our Open-Book Certainty Offer™ works the same wherever we buy:
              transparent numbers, a real closing date, and the No Surprise
              Pledge—backed by local knowledge of{" "}
              <span className="text-blue-700">Greene</span>,{" "}
              <span className="text-blue-700">Christian</span>, and{" "}
              <span className="text-blue-700">Webster</span> counties and the
              wider <span className="text-emerald-700">Ozarks</span> market.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready for an Offer in Your Town?"
        subheading="Get your Open-Book Certainty Offer™—whether you&apos;re in Springfield, Nixa, Ozark, Republic, Battlefield, Rogersville, or another SW Missouri community we serve."
        ctaText="Get My Open-Book Offer"
        ctaHref="/get-offer"
      />
    </>
  );
}
