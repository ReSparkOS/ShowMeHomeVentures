import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaSection } from "@/components/sections";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/components/seo";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/mdx-components";
import { Badge } from "@/components/ui/badge";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<ReturnType<typeof createMetadata>> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return createMetadata({
      title: "Post Not Found",
      description: "The requested resource could not be found.",
      path: `/resources/${slug}`,
    });
  }
  const { frontmatter } = post;
  return createMetadata({
    title: frontmatter.metaTitle ?? frontmatter.title,
    description: frontmatter.metaDescription ?? frontmatter.description,
    path: `/resources/${slug}`,
    ogImage: frontmatter.image,
  });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const mdxComponents = getMDXComponents({});

  if (!post) {
    notFound();
  }

  const { content: mdxContent, frontmatter } = post;

  const { content: compiledContent } = await compileMDX({
    source: mdxContent,
    options: {
      parseFrontmatter: false,
    },
    components: mdxComponents,
  });

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: frontmatter.title, url: `/resources/${slug}` },
  ];

  const articleSchemaData = articleSchema({
    title: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: frontmatter.author,
    url: `/resources/${slug}`,
    image: frontmatter.image,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={articleSchemaData} />

      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-slate-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-emerald-700">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/resources" className="hover:text-emerald-700">
                  Resources
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-900 font-medium truncate max-w-[200px]">
                {frontmatter.title}
              </li>
            </ol>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {frontmatter.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <time dateTime={frontmatter.date}>
                {formatDate(frontmatter.date)}
              </time>
              <span aria-hidden>·</span>
              <span>{frontmatter.author}</span>
              {frontmatter.readTime && (
                <>
                  <span aria-hidden>·</span>
                  <span>{frontmatter.readTime} read</span>
                </>
              )}
            </div>
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-emerald-700 prose-a:no-underline hover:prose-a:underline">
            {compiledContent}
          </div>

          <div className="mt-12 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Ready for an offer you can understand?
            </h3>
            <p className="mt-2 text-slate-700">
              Get your Open-Book Certainty Offer™—transparent numbers, a real
              closing date, and no surprises.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-emerald-700 px-6 py-3 text-white font-medium hover:bg-emerald-800 transition-colors"
              >
                Get My Open-Book Offer
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
