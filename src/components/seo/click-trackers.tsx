"use client";

import { trackPhoneClick } from "@/lib/analytics";

export function PhoneTracker({
  phone,
  location,
  className,
  children,
}: {
  phone: string;
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`tel:${phone.replace(/\D/g, "")}`}
      className={className}
      onClick={() => trackPhoneClick(location)}
    >
      {children}
    </a>
  );
}

export function EmailTracker({
  email,
  location,
  className,
  children,
}: {
  email: string;
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={() => {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "email_click", { click_location: location });
        }
      }}
    >
      {children}
    </a>
  );
}
