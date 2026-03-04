import { prisma } from "@/lib/db";
import type { Lead } from "@/generated/prisma/client";

export interface LeadInput {
  propertyAddress: string;
  propertyType: string;
  propertyCondition: string;
  timeline: string;
  situations: string;
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  contactMethod?: string | null;
  notes?: string | null;
  source?: string;
  ip?: string | null;
}

export interface SaveLeadResult {
  success: boolean;
  lead?: Lead;
  error?: string;
  dbError?: unknown;
}

export async function saveLead(data: LeadInput): Promise<SaveLeadResult> {
  const leadData = {
    propertyAddress: data.propertyAddress,
    propertyType: data.propertyType,
    propertyCondition: data.propertyCondition,
    timeline: data.timeline,
    situations: data.situations,
    name: data.name ?? null,
    phone: data.phone ?? null,
    email: data.email ?? null,
    contactMethod: data.contactMethod ?? null,
    notes: data.notes ?? null,
    source: data.source ?? "website",
    ip: data.ip ?? null,
  };

  try {
    const lead = await prisma.lead.create({
      data: leadData,
    });
    return { success: true, lead };
  } catch (dbError) {
    console.error("[lead-storage] Database save failed:", dbError);
    return {
      success: false,
      error: dbError instanceof Error ? dbError.message : "Failed to save lead",
      dbError,
    };
  }
}

export async function sendWebhook(lead: Lead | (LeadInput & { id: string })): Promise<boolean> {
  const webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl || webhookUrl.trim() === "") {
    return false;
  }

  const payload = {
    id: lead.id,
    propertyAddress: "propertyAddress" in lead ? lead.propertyAddress : undefined,
    propertyType: "propertyType" in lead ? lead.propertyType : undefined,
    propertyCondition: "propertyCondition" in lead ? lead.propertyCondition : undefined,
    timeline: "timeline" in lead ? lead.timeline : undefined,
    situations: "situations" in lead ? lead.situations : undefined,
    name: "name" in lead ? lead.name : undefined,
    phone: "phone" in lead ? lead.phone : undefined,
    email: "email" in lead ? lead.email : undefined,
    contactMethod: "contactMethod" in lead ? lead.contactMethod : undefined,
    notes: "notes" in lead ? lead.notes : undefined,
    source: "source" in lead ? lead.source : undefined,
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("[lead-storage] Webhook failed:", response.status, await response.text());
      return false;
    }

    return true;
  } catch (err) {
    console.error("[lead-storage] Webhook request failed:", err);
    return false;
  }
}
