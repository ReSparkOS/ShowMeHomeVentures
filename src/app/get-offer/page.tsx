import { LeadForm } from "@/components/forms/lead-form";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";

export const metadata = createMetadata({
  title: "Get Your Offer",
  description:
    "Get your Open-Book Certainty Offer™ — transparent numbers and a real close date. Our local Springfield team will reach out within 2 hours during business hours.",
  path: "/get-offer",
  keywords: [
    "get cash offer Springfield MO",
    "request home offer Ozarks",
    "sell house as is Springfield",
  ],
});

export default function GetOfferPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Get a Cash Offer for Your House in Springfield, MO",
          description:
            "Request a transparent, no-obligation Open-Book Certainty Offer and choose a closing date that fits your timeline.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Get Your Offer", url: "/get-offer" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Get Your Open-Book Offer
          </h1>
          <p className="mt-2 text-slate-600">
            Tell us about your property and we&apos;ll get back to you within 2
            hours during business hours.
          </p>
        </div>
        <section id="lead-form">
          <LeadForm />
        </section>
      </div>
    </>
  );
}
