"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { leadStep1Schema, leadStep2Schema, SITUATION_TAGS } from "@/lib/schemas";
import { submitLead } from "@/app/actions/submit-lead";
import { cn } from "@/lib/utils";
import { trackFormSubmit } from "@/lib/analytics";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Step = 1 | 2;

interface Step1Data {
  propertyAddress: string;
  propertyType: string;
  propertyCondition: string;
  timeline: string;
  situations: string[];
}

interface Step2Data {
  name: string;
  phone: string;
  email: string;
  contactMethod: string;
  notes: string;
}

const PROPERTY_TYPES = [
  { value: "single-family", label: "Single Family" },
  { value: "multi-family", label: "Multi-Family" },
  { value: "condo", label: "Condo/Townhouse" },
  { value: "mobile-home", label: "Mobile Home" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial" },
  { value: "other", label: "Other" },
] as const;

const PROPERTY_CONDITIONS = [
  { value: "excellent", label: "Excellent" },
  { value: "good", label: "Good" },
  { value: "fair", label: "Fair" },
  { value: "poor", label: "Poor" },
  { value: "uninhabitable", label: "Uninhabitable" },
] as const;

const TIMELINES = [
  { value: "asap", label: "ASAP" },
  { value: "1-2-weeks", label: "1-2 Weeks" },
  { value: "1-month", label: "Within a Month" },
  { value: "2-3-months", label: "2-3 Months" },
  { value: "flexible", label: "Flexible/No Rush" },
] as const;

const CONTACT_METHODS = [
  { value: "phone", label: "Phone Call" },
  { value: "text", label: "Text Message" },
  { value: "email", label: "Email" },
] as const;

const TRUST_BOOSTERS = [
  "Local team, not a call center",
  "No obligation",
  "We show you the math",
  "We lock a real close date",
];

function SubmitButton({
  children,
  pending,
}: {
  children: React.ReactNode;
  pending: boolean;
}) {
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-emerald-700 hover:bg-emerald-800"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
          Sending...
        </>
      ) : (
        children
      )}
    </Button>
  );
}

export interface LeadFormProps {
  className?: string;
}

export function LeadForm({ className }: LeadFormProps) {
  const [step, setStep] = useState<Step>(1);
  const [step1Data, setStep1Data] = useState<Step1Data>({
    propertyAddress: "",
    propertyType: "",
    propertyCondition: "",
    timeline: "",
    situations: [],
  });
  const [step1Selects, setStep1Selects] = useState({
    propertyType: "",
    propertyCondition: "",
    timeline: "",
  });
  const [step2Data, setStep2Data] = useState<Step2Data>({
    name: "",
    phone: "",
    email: "",
    contactMethod: "phone",
    notes: "",
  });
  const [contactMethod, setContactMethod] = useState("phone");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleStep1Continue = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const situations = formData.getAll("situations") as string[];
    const raw = {
      propertyAddress: (formData.get("propertyAddress") as string) ?? "",
      propertyType: (step1Selects.propertyType || (formData.get("propertyType") as string)) ?? "",
      propertyCondition: (step1Selects.propertyCondition || (formData.get("propertyCondition") as string)) ?? "",
      timeline: (step1Selects.timeline || (formData.get("timeline") as string)) ?? "",
      situations,
      honeypot: (formData.get("website") as string) ?? "",
    };
    const result = leadStep1Schema.safeParse(raw);
    if (!result.success) {
      const errs: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const path = issue.path.join(".");
        if (!errs[path]) errs[path] = [];
        errs[path].push(issue.message);
      }
      setErrors(errs);
      return;
    }
    const data = {
      propertyAddress: result.data.propertyAddress,
      propertyType: result.data.propertyType,
      propertyCondition: result.data.propertyCondition,
      timeline: result.data.timeline,
      situations: result.data.situations ?? [],
    };
    setStep1Data(data);
    setStep1Selects({
      propertyType: data.propertyType,
      propertyCondition: data.propertyCondition,
      timeline: data.timeline,
    });
    setErrors({});
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const raw = {
      name: (formData.get("name") as string) ?? "",
      phone: (formData.get("phone") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      contactMethod: (contactMethod || (formData.get("contactMethod") as string)) ?? "phone",
      notes: (formData.get("notes") as string) || undefined,
      honeypot: (formData.get("website") as string) ?? "",
    };
    const result = leadStep2Schema.safeParse(raw);
    if (!result.success) {
      const errs: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const path = issue.path.join(".");
        if (!errs[path]) errs[path] = [];
        errs[path].push(issue.message);
      }
      setErrors(errs);
      return;
    }
    const data = {
      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,
      contactMethod: result.data.contactMethod,
      notes: result.data.notes ?? "",
    };
    setStep2Data(data);
    setContactMethod(data.contactMethod);
    setErrors({});

    startTransition(async () => {
      const submitData = new FormData();
      submitData.set("propertyAddress", step1Data.propertyAddress);
      submitData.set("propertyType", step1Data.propertyType);
      submitData.set("propertyCondition", step1Data.propertyCondition);
      submitData.set("timeline", step1Data.timeline);
      step1Data.situations.forEach((s) => submitData.append("situations", s));
      submitData.set("name", result.data!.name);
      submitData.set("phone", result.data!.phone);
      submitData.set("email", result.data!.email);
      submitData.set("contactMethod", contactMethod || result.data!.contactMethod);
      if (result.data!.notes) submitData.set("notes", result.data!.notes);
      submitData.set("website", (formData.get("website") as string) ?? "");

      const res = await submitLead(submitData);
      setSubmitResult({ success: res.success, message: res.message });
      if (res.success) {
        trackFormSubmit("lead_form", { source: "inline" });
      }
      if (res.errors) setErrors(res.errors);
    });
  };

  if (submitResult?.success) {
    return (
      <div
        className={cn(
          "rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center",
          className
        )}
      >
        <CheckCircle2
          className="mx-auto h-12 w-12 text-emerald-600"
          aria-hidden
        />
        <h3 className="mt-3 text-lg font-semibold text-slate-900">
          Thank you!
        </h3>
        <p className="mt-2 text-slate-600">{submitResult.message}</p>
      </div>
    );
  }

  if (submitResult && !submitResult.success) {
    return (
      <div
        className={cn(
          "rounded-lg border border-red-200 bg-red-50 p-6 text-center",
          className
        )}
      >
        <AlertCircle
          className="mx-auto h-12 w-12 text-red-600"
          aria-hidden
        />
        <h3 className="mt-3 text-lg font-semibold text-slate-900">
          Something went wrong
        </h3>
        <p className="mt-2 text-slate-600">{submitResult.message}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-4"
          onClick={() => {
            setSubmitResult(null);
            setErrors({});
          }}
        >
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-6 md:flex-row", className)}>
      <div className="flex-1">
        {step === 1 ? (
          <form onSubmit={handleStep1Continue} className="space-y-4">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute h-0 w-0 overflow-hidden opacity-0"
              aria-hidden
            />
            <div>
              <Label htmlFor="propertyAddress">Property Address *</Label>
              <Input
                id="propertyAddress"
                name="propertyAddress"
                required
                placeholder="123 Main St, Springfield, MO"
                className="mt-1"
                defaultValue={step1Data.propertyAddress}
              />
              {errors.propertyAddress && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.propertyAddress[0]}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="propertyType">Property Type *</Label>
              <Select
                value={step1Selects.propertyType || step1Data.propertyType || ""}
                onValueChange={(v) =>
                  setStep1Selects((s) => ({ ...s, propertyType: v }))
                }
                required
              >
                <SelectTrigger id="propertyType" className="mt-1">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_TYPES.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="hidden"
                name="propertyType"
                value={step1Selects.propertyType || step1Data.propertyType}
              />
              {errors.propertyType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.propertyType[0]}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="propertyCondition">Property Condition *</Label>
              <Select
                value={step1Selects.propertyCondition || step1Data.propertyCondition || ""}
                onValueChange={(v) =>
                  setStep1Selects((s) => ({ ...s, propertyCondition: v }))
                }
                required
              >
                <SelectTrigger id="propertyCondition" className="mt-1">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_CONDITIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="hidden"
                name="propertyCondition"
                value={step1Selects.propertyCondition || step1Data.propertyCondition}
              />
              {errors.propertyCondition && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.propertyCondition[0]}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="timeline">Timeline *</Label>
              <Select
                value={step1Selects.timeline || step1Data.timeline || ""}
                onValueChange={(v) =>
                  setStep1Selects((s) => ({ ...s, timeline: v }))
                }
                required
              >
                <SelectTrigger id="timeline" className="mt-1">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {TIMELINES.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="hidden"
                name="timeline"
                value={step1Selects.timeline || step1Data.timeline}
              />
              {errors.timeline && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.timeline[0]}
                </p>
              )}
            </div>
            <div>
              <Label className="mb-2 block">Situation (select all that apply)</Label>
              <div className="flex flex-wrap gap-3">
                {SITUATION_TAGS.map((tag) => (
                  <label
                    key={tag.value}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      name="situations"
                      value={tag.value}
                      defaultChecked={step1Data.situations.includes(tag.value)}
                      className="h-4 w-4 rounded border-slate-300 text-emerald-700 focus:ring-emerald-700"
                    />
                    <span className="text-sm text-slate-700">{tag.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full">
              Continue →
            </Button>
          </form>
        ) : (
          <form onSubmit={handleStep2Submit} className="space-y-4">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute h-0 w-0 overflow-hidden opacity-0"
              aria-hidden
            />
            <input type="hidden" name="propertyAddress" value={step1Data.propertyAddress} />
            <input type="hidden" name="propertyType" value={step1Data.propertyType} />
            <input type="hidden" name="propertyCondition" value={step1Data.propertyCondition} />
            <input type="hidden" name="timeline" value={step1Data.timeline} />
            {step1Data.situations.map((s) => (
              <input key={s} type="hidden" name="situations" value={s} />
            ))}
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="mt-1"
                defaultValue={step2Data.name}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name[0]}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(417) 555-0123"
                className="mt-1"
                defaultValue={step2Data.phone}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone[0]}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1"
                defaultValue={step2Data.email}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email[0]}</p>
              )}
            </div>
            <div>
              <Label htmlFor="contactMethod">Preferred Contact Method *</Label>
              <Select
                value={contactMethod || step2Data.contactMethod || "phone"}
                onValueChange={setContactMethod}
                required
              >
                <SelectTrigger id="contactMethod" className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CONTACT_METHODS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="hidden"
                name="contactMethod"
                value={contactMethod || step2Data.contactMethod || "phone"}
              />
            </div>
            <div>
              <Label htmlFor="notes">Notes / Anything else?</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Tell us more about your situation..."
                className="mt-1 min-h-[100px]"
                defaultValue={step2Data.notes}
              />
            </div>
            <p className="text-xs text-slate-500">
              We respect your privacy. No spam, no sharing your info.
            </p>
            <div className="flex flex-col gap-3">
              <SubmitButton pending={isPending}>Get My Open-Book Offer</SubmitButton>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm text-emerald-700 hover:underline"
              >
                ← Back
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="flex shrink-0 flex-col gap-3 md:w-48">
        <p className="text-sm font-medium text-slate-700">Why work with us:</p>
        <ul className="space-y-2 text-sm text-slate-600">
          {TRUST_BOOSTERS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
