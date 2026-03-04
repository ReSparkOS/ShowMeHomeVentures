import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://showmehomeventures.com";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Show-Me Home Ventures",
    short_name: "Show-Me Homes",
    description:
      "Transparent, local home-buying solutions for Springfield, MO and the Ozarks.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1d4ed8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
