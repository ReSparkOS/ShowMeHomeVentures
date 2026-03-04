import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://showmehomeventures.com";
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export interface CreateMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  path,
  ogImage,
  keywords = [],
}: CreateMetadataOptions): Metadata {
  const canonicalUrl = `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
  const DEFAULT_OG_IMAGE = "/opengraph-image";
  const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE;
  const ogImageUrl = resolvedOgImage.startsWith("http")
    ? resolvedOgImage
    : `${SITE_URL}${resolvedOgImage}`;

  const fullTitle = `${title} | Show-Me Home Ventures`;
  const baseKeywords = [
    "sell house fast Springfield MO",
    "cash home buyers Springfield Missouri",
    "we buy houses Springfield MO",
    "sell house as is Missouri",
    "Open-Book Certainty Offer",
    "avoid foreclosure Springfield MO",
    "sell inherited house Missouri",
  ];

  return {
    title: fullTitle,
    description,
    applicationName: "Show-Me Home Ventures",
    keywords: [...baseKeywords, ...keywords],
    category: "Real Estate",
    creator: "Show-Me Home Ventures",
    publisher: "Show-Me Home Ventures",
    authors: [{ name: "Show-Me Home Ventures", url: SITE_URL }],
    metadataBase: new URL(SITE_URL),
    verification: GOOGLE_SITE_VERIFICATION
      ? { google: GOOGLE_SITE_VERIFICATION }
      : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      "geo.region": "US-MO",
      "geo.placename": "Springfield",
      "ICBM": "37.2090, -93.2923",
    },
    openGraph: {
      siteName: "Show-Me Home Ventures",
      locale: "en_US",
      type: "website",
      title: fullTitle,
      description,
      url: canonicalUrl,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
  };
}
