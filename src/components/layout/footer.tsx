import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { footerNavigation } from "@/data/navigation";
import { PhoneTracker, EmailTracker } from "@/components/seo/click-trackers";
import { MapPin, Phone, Mail } from "lucide-react";

const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Footer CTA strip */}
      <div className="border-b border-slate-800 bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-semibold text-white">
                Ready to see what your home is worth?
              </p>
              <p className="text-sm text-slate-400">
                Get a transparent, no-obligation offer today.
              </p>
            </div>
            <Link
              href="/get-offer"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Get My Free Offer
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-lg font-bold text-white transition-colors hover:text-emerald-400"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-slate-400">{siteConfig.tagline}</p>
            <address className="mt-5 not-italic space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                <p className="text-sm">{fullAddress}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-slate-500" />
                <PhoneTracker
                  phone={siteConfig.phone}
                  location="footer"
                  className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {siteConfig.phone}
                </PhoneTracker>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-slate-500" />
                <EmailTracker
                  email={siteConfig.email}
                  location="footer"
                  className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {siteConfig.email}
                </EmailTracker>
              </div>
            </address>
          </div>

          {/* Footer navigation columns */}
          {footerNavigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Show-Me Home Ventures. All rights
            reserved.
          </p>
          <p className="mt-1 text-center text-xs text-slate-500">
            Open-Book Certainty Offer™ is a trademark of Show-Me Home Ventures.
          </p>
          <p className="mt-4 text-center text-xs text-slate-500 max-w-3xl mx-auto">
            We are pledged to the letter and spirit of U.S. policy for the
            achievement of equal housing opportunity throughout the Nation. We
            encourage and support an affirmative advertising and marketing
            program in which there are no barriers to obtaining housing
            because of race, color, religion, sex, handicap, familial status, or
            national origin.
          </p>
        </div>
      </div>
    </footer>
  );
}
