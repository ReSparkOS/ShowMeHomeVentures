export default function GetOfferLoading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto h-8 w-64 animate-pulse rounded-lg bg-slate-200" />
        <div className="mx-auto mt-4 h-5 w-96 animate-pulse rounded bg-slate-100" />
      </div>
      <div className="mt-12 space-y-6">
        <div className="h-14 animate-pulse rounded-lg bg-slate-100" />
        <div className="h-14 animate-pulse rounded-lg bg-slate-100" />
        <div className="h-14 animate-pulse rounded-lg bg-slate-100" />
        <div className="h-12 w-48 animate-pulse rounded-lg bg-slate-200" />
      </div>
    </div>
  );
}
