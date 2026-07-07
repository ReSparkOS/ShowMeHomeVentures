import type { MetadataRoute } from "next";
import { situations } from "@/data/situations";
import { areas } from "@/data/areas";
import { caseStudies } from "@/data/case-studies";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://showmehv.com";

const resourceSlugs = [
  "foreclosure-options-missouri",
  "how-to-sell-inherited-house-missouri",
  "selling-house-during-divorce-missouri",
  "avoid-house-buying-scams",
  "what-is-fair-cash-offer",
  "sell-house-as-is-springfield-mo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/how-it-works`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/open-book-certainty-offer`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/no-surprise-pledge`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/faq`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/service-areas`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/reviews`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/case-studies`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/situations`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/resources`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/sell-your-house-fast`,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/we-buy-houses-springfield-mo`,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/cash-home-buyers-springfield-mo`,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/get-offer`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const situationPages: MetadataRoute.Sitemap = situations.map((s) => ({
    url: `${SITE_URL}/situations/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${SITE_URL}/areas/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const resourcePages: MetadataRoute.Sitemap = resourceSlugs.map((slug) => ({
    url: `${SITE_URL}/resources/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...situationPages,
    ...areaPages,
    ...caseStudyPages,
    ...resourcePages,
  ];
}
