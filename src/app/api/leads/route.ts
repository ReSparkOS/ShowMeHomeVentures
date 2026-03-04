import { NextRequest, NextResponse } from "next/server";
import { fullLeadSchema } from "@/lib/schemas";
import { saveLead, sendWebhook } from "@/lib/lead-storage";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const { success, remaining } = rateLimit(ip);
    if (!success) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submissions. Please try again later.",
        },
        {
          status: 429,
          headers: { "X-RateLimit-Remaining": String(remaining) },
        }
      );
    }

    const body = await request.json();

    if (body.website && body.website.length > 0) {
      return NextResponse.json(
        { success: false, message: "Submission rejected." },
        { status: 400 }
      );
    }

    const parsed = fullLeadSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path.join(".");
        if (!fieldErrors[path]) fieldErrors[path] = [];
        fieldErrors[path].push(issue.message);
      }
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check your input.",
          errors: fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = parsed.data;
    const situationsStr = Array.isArray(data.situations)
      ? data.situations.join(",")
      : data.situations ?? "";

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

      return NextResponse.json(
        {
          success: false,
          message: webhookSent
            ? "Database unavailable. Lead was forwarded via backup webhook notification."
            : "Database unavailable. Lead could not be persisted. Please retry.",
        },
        { status: 503 }
      );
    }

    await sendWebhook(saveResult.lead).catch((err) => {
      console.error("Webhook delivery failed:", err);
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! A member of our local Springfield team will reach out within 2 hours during business hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong on our end. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}
