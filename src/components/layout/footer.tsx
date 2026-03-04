import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { footerNavigation } from "@/data/navigation";
import { PhoneTracker, EmailTracker } from "@/components/seo/click-trackers";

const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-bold text-white transition-colors hover:text-blue-300"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-slate-400">{siteConfig.tagline}</p>
            <address className="mt-4 not-italic">
              <p className="text-sm">{fullAddress}</p>
              <PhoneTracker
                phone={siteConfig.phone}
                location="footer"
                className="mt-1 block text-sm text-blue-300 hover:text-blue-200"
              >
                {siteConfig.phone}
              </PhoneTracker>
              <EmailTracker
                email={siteConfig.email}
                location="footer"
                className="block text-sm text-blue-300 hover:text-blue-200"
              >
                {siteConfig.email}
              </EmailTracker>
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
                      className="text-sm text-slate-400 transition-colors hover:text-blue-300"
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
          <p className="mt-4 text-center text-xs text-slate-500">
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
