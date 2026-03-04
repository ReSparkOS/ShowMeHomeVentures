import { Hero, CtaSection } from "@/components/sections";
import { createMetadata } from "@/lib/metadata";
import { LeadForm } from "@/components/forms/lead-form";
import { siteConfig } from "@/lib/utils";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Contact Us | Get Your Open-Book Offer",
  description:
    "Get in touch with Show-Me Home Ventures. Request your free, no-obligation Open-Book Certainty Offer. We respond within 2 hours during business hours.",
  path: "/contact",
  keywords: [
    "contact Springfield home buyer",
    "get cash offer Springfield MO",
    "sell my house Springfield MO",
  ],
});

const trustBoosters = [
  "Free, no-obligation evaluation",
  "Local Springfield team—not a call center",
  "Response within 2 hours during business hours",
  "We show you the math before you commit",
];

export default function ContactPage() {
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Contact Show-Me Home Ventures",
          description:
            "Talk with our local Springfield team for a transparent home offer and custom closing timeline.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <Hero
        heading="Let's Talk About Your Property"
        subheading="Tell us about your situation. We'll respond within 2 hours during business hours with a transparent offer and next steps."
        primaryCta={{ text: "Get My Open-Book Offer", href: "#lead-form" }}
        secondaryCta={{
          text: "Read the No Surprise Pledge",
          href: "/no-surprise-pledge",
        }}
      />

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Lead Form */}
            <div id="lead-form" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Get Your Open-Book Offer
              </h2>
              <p className="mt-2 text-slate-600">
                Fill out the form and we&apos;ll get back to you within 2 hours
                during business hours.
              </p>
              <div className="mt-8">
                <LeadForm />
              </div>
            </div>

            {/* Right: Contact Info + Map */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Contact Information
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-blue-700 mt-0.5" />
                    <a
                      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                      className="text-slate-700 hover:text-blue-700"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-blue-700 mt-0.5" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-slate-700 hover:text-blue-700"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-blue-700 mt-0.5" />
                    <address className="not-italic text-slate-700">
                      {fullAddress}
                    </address>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-blue-700 mt-0.5" />
                    <div className="text-slate-700">
                      <p>{siteConfig.businessHours?.weekday || "Mon–Fri 8am–6pm"}</p>
                      <p>{siteConfig.businessHours?.saturday || "Sat 9am–2pm"}</p>
                      <p>{siteConfig.businessHours?.sunday || "Sun Closed"}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                <iframe
                  title="Show-Me Home Ventures Office Location"
                  src="https://www.google.com/maps?q=1619+E+Independence+St,+Springfield,+MO+65804&output=embed"
                  className="aspect-video w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Trust boosters */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Why reach out?
                </h3>
                <ul className="mt-4 space-y-3">
                  {trustBoosters.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        ctaHref="#lead-form"
        ctaText="Get Your Open-Book Offer"
      />
    </>
  );
}
