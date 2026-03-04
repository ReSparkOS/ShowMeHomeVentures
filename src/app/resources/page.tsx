import { Hero, CtaSection } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Resources & Guides for Selling Your Home | Springfield MO",
  description:
    "Helpful guides for homeowners in Springfield, MO and the Ozarks: inherited property, foreclosure, divorce, selling as-is, and avoiding scams. Real advice from Show-Me Home Ventures.",
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
        subheading="Guides, tips, and real answers for selling your home in Springfield, MO and the Ozarks. Inherited property, foreclosure, divorce, as-is sales—we cover the situations that matter."
        primaryCta={{ text: "Get My Open-Book Offer", href: "/contact" }}
        secondaryCta={{ text: "See Case Studies", href: "/case-studies" }}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/resources/${post.slug}`}>
                <Card className="h-full flex flex-col border-slate-200 hover:border-emerald-300 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.frontmatter.tags?.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg line-clamp-2 hover:text-emerald-700 transition-colors">
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
                    <p className="text-slate-600 text-sm line-clamp-3">
                      {post.frontmatter.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
