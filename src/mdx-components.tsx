import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

function createMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight text-slate-900 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 text-2xl font-semibold tracking-tight text-slate-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 text-xl font-semibold tracking-tight text-slate-900">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-slate-600 leading-relaxed">{children}</p>
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
            className="text-emerald-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={url} className="text-emerald-700 hover:underline" {...props}>
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-600">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-slate-600">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-emerald-200 pl-4 italic text-slate-600">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-slate-300 bg-slate-100 px-4 py-2 text-left font-semibold text-slate-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-slate-300 px-4 py-2 text-slate-600">
        {children}
      </td>
    ),
    img: ({ src, alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? ""}
        className="my-4 rounded-lg shadow-md"
        {...props}
      />
    ),
    CTABlock: () => (
      <div className="my-12 rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-slate-900">
          Ready to get your offer?
        </h3>
        <p className="mt-2 text-slate-600">
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
