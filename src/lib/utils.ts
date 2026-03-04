import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export const siteConfig = {
  name: "Show-Me Home Ventures",
  tagline: "An Offer You Can Understand. A Close Date You Can Trust.",
  description:
    "Show-Me Home Ventures delivers the Open-Book Certainty Offer™—transparent numbers and a real closing plan for homeowners in Springfield, MO and the Ozarks region.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://showmehomeventures.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "417-258-5577",
  email: process.env.NEXT_PUBLIC_EMAIL || "jordanrhodes@kw.com",
  address: {
    street: "1619 E Independence St",
    city: "Springfield",
    state: "MO",
    zip: "65804",
  },
  businessHours: {
    weekday: "Mon–Fri 8am–6pm",
    saturday: "Sat 9am–2pm",
    sunday: "Sun Closed",
  },
  social: {
    facebook: "https://facebook.com/showmehomeventures",
    google: "https://g.page/showmehomeventures",
  },
};
