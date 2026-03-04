import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/resources");

export interface MDXFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  image?: string;
  readTime?: string;
}

export interface MDXPost {
  slug: string;
  frontmatter: MDXFrontmatter;
  content: string;
}

/**
 * Reads all .mdx files from src/content/resources/, parses frontmatter with gray-matter,
 * and returns them sorted by date (newest first).
 */
export function getAllPosts(): MDXPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts: MDXPost[] = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const filePath = path.join(CONTENT_DIR, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as MDXFrontmatter,
      content,
    };
  });

  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA; // Newest first
  });
}

/**
 * Reads a single MDX file by slug and returns frontmatter + raw content.
 */
export function getPostBySlug(slug: string): MDXPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as MDXFrontmatter,
    content,
  };
}
