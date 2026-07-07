import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCta } from "@/components/sections/sticky-mobile-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const defaultMetadata = createMetadata({
  title: "Show-Me Home Ventures | Local Cash Home Buyer in Springfield, MO",
  description:
    "An offer you can understand and a close date you can trust. Show-Me Home Ventures buys houses across Springfield, MO with transparent, open-book offers.",
  path: "/",
});

export const metadata: Metadata = defaultMetadata;

// Public Google Ads tag for showmehv.com (a page-level tag, not a secret).
const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18305817967";

function AnalyticsScript() {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  // A single gtag.js load configures Google Ads (always) plus GA4 when set.
  const gtagIds = [GOOGLE_ADS_ID, gaId].filter(Boolean) as string[];

  return (
    <>
      {gtagIds.length > 0 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagIds[0]}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${gtagIds.map((id) => `gtag('config', '${id}');`).join("\n              ")}
            `}
          </Script>
        </>
      )}
      {plausibleDomain && (
        <Script
          src="https://plausible.io/js/script.js"
          data-domain={plausibleDomain}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased bg-background text-navy-900">
        <AnalyticsScript />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg focus:ring-2 focus:ring-blue-700"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <StickyMobileCta ctaHref="/get-offer" />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
