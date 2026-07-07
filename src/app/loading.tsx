export default function RootLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-navy-100 border-t-brand-600" />
        <p className="text-sm font-medium text-navy-600">Loading…</p>
      </div>
    </div>
  );
}
