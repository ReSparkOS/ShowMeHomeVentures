import { z } from "zod";

const propertyTypeEnum = z.enum([
  "single-family",
  "multi-family",
  "condo",
  "townhouse",
  "mobile-home",
  "land",
  "commercial",
  "other",
]);

/** Situation tags for multi-select (display labels -> form values) */
export const SITUATION_TAGS = [
  { value: "inherited", label: "Inherited" },
  { value: "needs-repairs", label: "Needs Repairs" },
  { value: "has-tenants", label: "Has Tenants" },
  { value: "foreclosure", label: "Foreclosure" },
  { value: "divorce", label: "Divorce" },
  { value: "vacant", label: "Vacant" },
  { value: "code-violations", label: "Code Violations" },
  { value: "other", label: "Other" },
] as const;

const propertyConditionEnum = z.enum([
  "excellent",
  "good",
  "fair",
  "poor",
  "uninhabitable",
]);

const timelineEnum = z.enum([
  "asap",
  "1-2-weeks",
  "1-month",
  "2-3-months",
  "flexible",
]);

const contactMethodEnum = z.enum(["phone", "text", "email"]);

const phoneRegex = /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;

export const leadStep1Schema = z.object({
  propertyAddress: z
    .string()
    .min(5, "Please enter a valid address (at least 5 characters)")
    .trim(),
  propertyType: propertyTypeEnum,
  propertyCondition: propertyConditionEnum,
  timeline: timelineEnum,
  situations: z.array(z.string()).optional(),
  honeypot: z.string().max(0, "Invalid submission"),
});

export const leadStep2Schema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .trim(),
  phone: z
    .string()
    .min(1, "Phone is required")
    .refine(
      (val) => phoneRegex.test(val.replace(/\D/g, "")),
      "Please enter a valid 10-digit phone number"
    )
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .trim(),
  contactMethod: contactMethodEnum,
  notes: z.string().optional(),
  honeypot: z.string().max(0, "Invalid submission"),
});

export const fullLeadSchema = leadStep1Schema.merge(
  leadStep2Schema.omit({ honeypot: true })
);

export type LeadStep1Input = z.infer<typeof leadStep1Schema>;
export type LeadStep2Input = z.infer<typeof leadStep2Schema>;
export type FullLeadInput = z.infer<typeof fullLeadSchema>;
