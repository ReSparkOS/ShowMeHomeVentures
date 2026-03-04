export default function ResourceLoading() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="h-6 w-24 animate-pulse rounded bg-slate-200" />
      <div className="mt-4 h-10 w-full animate-pulse rounded-lg bg-slate-200" />
      <div className="mt-3 h-5 w-72 animate-pulse rounded bg-slate-100" />
      <div className="mt-10 space-y-4">
        <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-slate-100" />
      </div>
      <div className="mt-8 space-y-4">
        <div className="h-8 w-64 animate-pulse rounded-lg bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-slate-100" />
      </div>
    </article>
  );
}
