import Link from "next/link";
import { siteConfig, formatPhone } from "@/lib/utils";
import { footerNavigation } from "@/data/navigation";
import { PhoneTracker, EmailTracker } from "@/components/seo/click-trackers";
import { Logo } from "@/components/layout/logo";
import { MapPin, Phone, Mail } from "lucide-react";

const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

function EqualHousingMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2 1.5 10h2v12h17V10h2L12 2zm0 2.6L18.5 10v10h-13V10L12 4.6z" />
      <path d="M8 12h8v1.6H8zM8 15h8v1.6H8z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      {/* Footer CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl font-semibold tracking-tight text-white">
                Ready to see what your home is worth?
              </p>
              <p className="mt-1 text-sm text-navy-300">
                Get a transparent, no-obligation cash offer today.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-300"
              >
                <Phone className="h-4 w-4 text-brand-400" aria-hidden />
                {formatPhone(siteConfig.phone)}
              </a>
              <Link
                href="/get-offer"
                className="inline-flex h-11 items-center rounded-lg bg-brand-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
              >
                Get My Cash Offer
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))] lg:gap-8">
          {/* Company info */}
          <div>
            <Link href="/" aria-label="Show-Me Home Ventures home" className="inline-block">
              <Logo onDark />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
              A local Springfield home-buying company. Transparent offers,
              real closing dates, and every number explained.
            </p>
            <address className="mt-6 space-y-3 not-italic">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-400" aria-hidden />
                <p className="text-sm text-navy-200">{fullAddress}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-navy-400" aria-hidden />
                <PhoneTracker
                  phone={siteConfig.phone}
                  location="footer"
                  className="text-sm font-medium text-white transition-colors hover:text-brand-300"
                >
                  {formatPhone(siteConfig.phone)}
                </PhoneTracker>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-navy-400" aria-hidden />
                <EmailTracker
                  email={siteConfig.email}
                  location="footer"
                  className="text-sm font-medium text-white transition-colors hover:text-brand-300"
                >
                  {siteConfig.email}
                </EmailTracker>
              </div>
            </address>
          </div>

          {/* Footer navigation columns */}
          {footerNavigation.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-200 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-navy-300">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-5 text-sm text-navy-300">
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-6 flex items-start gap-3">
            <span className="mt-0.5 shrink-0 text-navy-300" title="Equal Housing Opportunity">
              <EqualHousingMark />
            </span>
            <p className="max-w-3xl text-xs leading-relaxed text-navy-300">
              We are pledged to the letter and spirit of U.S. policy for the
              achievement of equal housing opportunity throughout the Nation.
              We encourage and support an affirmative advertising and marketing
              program in which there are no barriers to obtaining housing
              because of race, color, religion, sex, handicap, familial status,
              or national origin. Open-Book Certainty Offer™ is a trademark of{" "}
              {siteConfig.name}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
