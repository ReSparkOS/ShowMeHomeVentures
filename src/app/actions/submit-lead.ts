"use server";

import { headers } from "next/headers";
import { fullLeadSchema } from "@/lib/schemas";
import { rateLimit } from "@/lib/rate-limit";
import { saveLead, sendWebhook } from "@/lib/lead-storage";
import type { Lead } from "@/generated/prisma/client";

export interface SubmitLeadResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  if (realIp) {
    return realIp;
  }
  return "unknown";
}

export async function submitLead(formData: FormData): Promise<SubmitLeadResult> {
  try {
    // Honeypot check (field name "website" in form)
    const honeypot = (formData.get("website") as string) ?? "";
    if (honeypot && honeypot.trim().length > 0) {
      return {
        success: false,
        message: "Invalid submission.",
      };
    }

    // Rate limit
    const ip = await getClientIp();
    const rateLimitResult = rateLimit(ip);
    if (!rateLimitResult.success) {
      return {
        success: false,
        message:
          "Too many submissions. Please try again in about an hour.",
      };
    }

    // Parse form data - map "website" to honeypot for schema validation
    const situations = formData.getAll("situations") as string[];
    const raw = {
      propertyAddress: formData.get("propertyAddress") as string,
      propertyType: formData.get("propertyType") as string,
      propertyCondition: formData.get("propertyCondition") as string,
      timeline: formData.get("timeline") as string,
      situations: situations?.length ? situations : undefined,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      contactMethod: formData.get("contactMethod") as string,
      notes: (formData.get("notes") as string) || undefined,
      honeypot: honeypot,
    };

    const parsed = fullLeadSchema.safeParse(raw);
    if (!parsed.success) {
      const errors: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path.join(".");
        if (!errors[path]) errors[path] = [];
        errors[path].push(issue.message);
      }
      return {
        success: false,
        message: "Please correct the errors below.",
        errors,
      };
    }

    const data = parsed.data;
    const situationsStr = Array.isArray(data.situations)
      ? data.situations.join(",")
      : "";

    const saveResult = await saveLead({
      propertyAddress: data.propertyAddress,
      propertyType: data.propertyType,
      propertyCondition: data.propertyCondition,
      timeline: data.timeline,
      situations: situationsStr,
      name: data.name,
      phone: data.phone,
      email: data.email,
      contactMethod: data.contactMethod,
      notes: data.notes,
      source: "website",
      ip,
    });

    if (!saveResult.success || !saveResult.lead) {
      const webhookSent = await sendWebhook({
        id: `webhook-only-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        propertyAddress: data.propertyAddress,
        propertyType: data.propertyType,
        propertyCondition: data.propertyCondition,
        timeline: data.timeline,
        situations: situationsStr,
        name: data.name,
        phone: data.phone,
        email: data.email,
        contactMethod: data.contactMethod,
        notes: data.notes ?? null,
        source: "website",
        ip,
      });

      return {
        success: false,
        message: webhookSent
          ? "We hit a database issue and could not fully save your submission. Your details were forwarded to our team via backup notification."
          : saveResult.error ??
            "We couldn't save your information due to a database issue. Please try again shortly.",
      };
    }

    // Send webhook if configured (fire-and-forget)
    if (process.env.WEBHOOK_URL) {
      sendWebhook(saveResult.lead as Lead).catch(() => {
        // Logged in sendWebhook
      });
    }

    return {
      success: true,
      message:
        "We received your information. A member of our local Springfield team will reach out within 2 hours during business hours.",
    };
  } catch (err) {
    console.error("[submit-lead] Unexpected error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
