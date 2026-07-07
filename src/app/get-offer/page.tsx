import { LeadForm } from "@/components/forms/lead-form";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo";
import { Shield, Clock, Eye, Phone, CheckCircle2 } from "lucide-react";

export const metadata = createMetadata({
  title: "Get a Cash Offer | Springfield, MO",
  description:
    "Request a free, no-obligation cash offer for your Springfield, MO house. Our local team responds within 2 hours during business hours with clear numbers.",
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
    title: "See every number",
    description: "We share the full math: ARV, repair costs, and how we built your offer.",
  },
  {
    icon: Shield,
    title: "No Surprise Pledge",
    description: "The offer we agree on is the offer you get. No last-minute changes.",
  },
  {
    icon: Clock,
    title: "Close in 14 days",
    description: "Pick your closing date. We put it in writing and stick to it.",
  },
  {
    icon: Phone,
    title: "Local team",
    description: "Real people in Springfield, not a call center or out-of-state buyer.",
  },
];

const nextSteps = [
  { step: 1, text: "We review your info and research the property" },
  { step: 2, text: "A team member calls within 2 hours (business hours)" },
  { step: 3, text: "We present a transparent, line-by-line offer" },
  { step: 4, text: "You choose your closing date, as fast as 14 days" },
];

export default async function GetOfferPage({
  searchParams,
}: {
  searchParams: Promise<{ address?: string }>;
}) {
  const { address } = await searchParams;
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

      {/* Intro band */}
      <div className="relative overflow-hidden bg-navy-950 py-14 text-center sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[360px] w-[520px] rounded-full bg-navy-700/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Get a Cash Offer for Your Springfield, MO House
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-navy-200">
            Tell us about your property and our local team will reach out
            within 2 hours during business hours with your Open-Book Certainty
            Offer&trade;. Free, no obligation.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Trust items */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyTrustUs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-navy-100 bg-white p-5">
                <div className="flex items-center gap-2.5">
                  <Icon className="h-5 w-5 shrink-0 text-navy-400" aria-hidden />
                  <p className="text-sm font-semibold text-navy-950">{item.title}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Form */}
        <section id="lead-form" className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
          <LeadForm initialAddress={address} />
        </section>

        {/* What happens next */}
        <div className="mt-12 rounded-xl border border-navy-100 bg-paper p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950">
            What happens next
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {nextSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-semibold text-white">
                  {item.step}
                </div>
                <p className="pt-1 text-sm text-navy-700">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden />
            <p className="text-sm text-brand-900">
              <span className="font-semibold">100% free, zero obligation.</span>{" "}
              If our offer isn&apos;t right for you, walk away at no cost.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
