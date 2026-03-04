import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

const defaultMetadata = createMetadata({
  title: "Show-Me Home Ventures",
  description:
    "An Offer You Can Understand. A Close Date You Can Trust. Get your Open-Book Certainty Offer™ from our local Springfield team.",
  path: "/",
});

export const metadata: Metadata = defaultMetadata;

function AnalyticsScript() {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  if (gaId) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      </>
    );
  }

  if (plausibleDomain) {
    return (
      <Script
        src="https://plausible.io/js/script.js"
        data-domain={plausibleDomain}
        strategy="afterInteractive"
      />
    );
  }

  return null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased bg-white text-slate-900">
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
