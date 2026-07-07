import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

function createMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-3xl font-display font-semibold tracking-tight text-navy-950 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 text-2xl font-display font-semibold tracking-tight text-navy-950">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 text-xl font-display font-semibold tracking-tight text-navy-950">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-navy-700 leading-relaxed">{children}</p>
    ),
    a: ({ href, children, ...props }) => {
      const url = href ?? "#";
      const isExternal =
        typeof url === "string" &&
        (url.startsWith("http") || url.startsWith("mailto:"));
      if (isExternal) {
        return (
          <a
            href={url}
            className="text-brand-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={url} className="text-brand-700 hover:underline" {...props}>
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-navy-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-navy-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-brand-200 pl-4 italic text-navy-700">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-navy-50 px-1.5 py-0.5 text-sm font-mono text-navy-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-xl bg-navy-950 p-4 text-sm text-navy-100">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-navy-200 bg-navy-50 px-4 py-2 text-left font-semibold text-navy-950">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-navy-200 px-4 py-2 text-navy-700">
        {children}
      </td>
    ),
    img: ({ src, alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...props}
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        decoding="async"
        className="my-4 rounded-xl shadow-md"
        style={{
          maxWidth: "100%",
          height: "auto",
          aspectRatio: "auto",
          contain: "content",
        }}
      />
    ),
    CTABlock: () => (
      <div className="my-12 rounded-xl border border-brand-200 bg-brand-50 p-6 text-center">
        <h3 className="text-lg font-display font-semibold tracking-tight text-navy-950">
          Ready to get your offer?
        </h3>
        <p className="mt-2 text-navy-700">
          Get your Open-Book Certainty Offer™ from our local Springfield team.
        </p>
        <div className="mt-4">
          <LeadFormDialog />
        </div>
      </div>
    ),
    ...components,
  };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return createMDXComponents(components);
}

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return createMDXComponents(components);
}
