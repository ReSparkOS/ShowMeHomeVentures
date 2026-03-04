import { siteConfig } from "@/lib/utils";

export interface JsonLdProps {
  data: object;
}

/**
 * Renders a JSON-LD script tag for structured data.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export interface OrganizationSchemaOptions {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

export function organizationSchema(options?: OrganizationSchemaOptions) {
  const {
    name = siteConfig.name,
    description = siteConfig.description,
    url = siteConfig.url,
    telephone = siteConfig.phone,
    email = siteConfig.email,
    address = siteConfig.address,
  } = options ?? {};

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "RealEstateAgent"],
    "@id": `${url}/#organization`,
    name,
    description,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.2090,
        longitude: -93.2923,
      },
      geoRadius: "50000",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone,
        email,
        areaServed: "US-MO",
        availableLanguage: ["English"],
      },
    ],
    image: `${url}/opengraph-image`,
    logo: `${url}/icon.svg`,
    sameAs: [siteConfig.social.facebook, siteConfig.social.google].filter(Boolean),
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.2090,
      longitude: -93.2923,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Buying Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cash Home Purchase",
            description: "We buy houses as-is for cash with the Open-Book Certainty Offer™.",
          },
        },
      ],
    },
  };
}

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  areaServed?: string;
}

export function serviceSchema({
  name,
  description,
  areaServed = "Springfield, MO and the Ozarks region",
}: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    areaServed,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export interface ArticleSchemaOptions {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
  image?: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export function reviewSchema(reviews: ReviewItem[]) {
  const totalRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: totalRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
      },
      reviewBody: r.quote,
    })),
  };
}

export function articleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url,
  image,
}: ArticleSchemaOptions) {
  const fullUrl = url.startsWith("http") ? url : `${siteConfig.url}${url}`;
  const imageUrl = image?.startsWith("http")
    ? image
    : image
      ? `${siteConfig.url}${image}`
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    url: fullUrl,
    ...(imageUrl && { image: imageUrl }),
  };
}
