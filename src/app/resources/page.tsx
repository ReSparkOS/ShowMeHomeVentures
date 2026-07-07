import { Hero, CtaSection } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Springfield MO Home-Selling Guides",
  description:
    "Guides for Springfield, MO and Ozarks homeowners: selling an inherited house, avoiding foreclosure, handling a divorce sale, or selling as-is.",
  path: "/resources",
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ResourcesPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
        ])}
      />
      <Hero
        heading="Resources for Homeowners"
        subheading="Guides, tips, and real answers for selling your home in Springfield, MO and the Ozarks. Inherited property, foreclosure, divorce, and as-is sales. We cover the situations that matter."
        primaryCta={{ text: "Get My Cash Offer", href: "/get-offer" }}
        secondaryCta={{ text: "See Case Studies", href: "/case-studies" }}
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Guides"
          title="Answers for your situation"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/resources/${post.slug}`} className="group">
              <Card className="flex h-full flex-col transition-colors hover:border-navy-300">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {post.frontmatter.tags?.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="line-clamp-2 text-lg transition-colors group-hover:text-brand-700">
                    {post.frontmatter.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <time dateTime={post.frontmatter.date}>
                      {formatDate(post.frontmatter.date)}
                    </time>
                    {post.frontmatter.readTime && (
                      <>
                        <span aria-hidden>·</span>
                        <span>{post.frontmatter.readTime} read</span>
                      </>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="line-clamp-3 text-sm text-navy-600">
                    {post.frontmatter.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
