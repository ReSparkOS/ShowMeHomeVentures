import { LeadForm } from "@/components/forms/lead-form";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { Shield, Clock, Eye, Phone, CheckCircle2 } from "lucide-react";

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

const whyTrustUs = [
  {
    icon: Eye,
    title: "See Every Number",
    description: "We share the full math — ARV, repair costs, and how we built your offer.",
  },
  {
    icon: Shield,
    title: "No Surprise Pledge",
    description: "The offer we agree on is the offer you get. No last-minute changes.",
  },
  {
    icon: Clock,
    title: "Close in 14 Days",
    description: "Pick your closing date. We put it in writing and stick to it.",
  },
  {
    icon: Phone,
    title: "Local Team",
    description: "Real people in Springfield — not a call center or out-of-state buyer.",
  },
];

const nextSteps = [
  { step: 1, text: "We review your info and research the property" },
  { step: 2, text: "A team member calls within 2 hours (business hours)" },
  { step: 3, text: "We present a transparent, line-by-line offer" },
  { step: 4, text: "You choose your closing date — as fast as 14 days" },
];

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

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-12 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Your Open-Book Offer
          </h1>
          <p className="mt-3 text-lg text-slate-300">
            Tell us about your property and we&apos;ll reach out within 2
            hours during business hours with a transparent offer.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Trust icons */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {whyTrustUs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-center text-center rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Form */}
        <section id="lead-form" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <LeadForm />
        </section>

        {/* What happens next */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">What Happens Next</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {nextSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                  {item.step}
                </div>
                <p className="text-sm text-slate-700 pt-0.5">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-lg bg-emerald-50 border border-emerald-200 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
            <p className="text-sm text-emerald-900">
              <span className="font-semibold">100% free, zero obligation.</span>{" "}
              If our offer isn&apos;t right for you, no hard feelings — and no cost.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
