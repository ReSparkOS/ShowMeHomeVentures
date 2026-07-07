export default function GetOfferLoading() {
  return (
    <>
      <div className="bg-navy-950 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto h-9 w-72 max-w-full animate-pulse rounded-lg bg-white/10" />
          <div className="mx-auto mt-4 h-5 w-96 max-w-full animate-pulse rounded bg-white/10" />
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-xl border border-navy-100 bg-navy-50"
            />
          ))}
        </div>
        <div className="space-y-6 rounded-xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="h-14 animate-pulse rounded-lg bg-navy-50" />
          <div className="h-14 animate-pulse rounded-lg bg-navy-50" />
          <div className="h-14 animate-pulse rounded-lg bg-navy-50" />
          <div className="h-12 w-48 animate-pulse rounded-lg bg-navy-100" />
        </div>
      </div>
    </>
  );
}
