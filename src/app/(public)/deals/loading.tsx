export default function DealsLoading() {
  return (
    <section className="py-16 md:py-24 px-5">
      <div className="mx-auto max-w-4xl">
        {/* Header skeleton */}
        <div className="mb-12">
          <div className="h-3 w-16 bg-surface-alt rounded animate-pulse mb-3" />
          <div className="h-9 w-48 bg-surface-alt rounded-[var(--radius-md)] animate-pulse mb-3" />
          <div className="h-4 w-64 bg-surface-alt rounded animate-pulse" />
        </div>

        {/* Deal card skeletons */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bg-surface rounded-[var(--radius-lg)] border border-border-light p-6 flex items-center gap-4"
            >
              <div className="flex-1 space-y-2">
                <div className="flex gap-2">
                  <div className="h-5 w-16 bg-surface-alt rounded-full animate-pulse" />
                  <div className="h-5 w-20 bg-surface-alt rounded-full animate-pulse" />
                </div>
                <div className="h-5 w-3/4 bg-surface-alt rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-surface-alt rounded animate-pulse" />
              </div>
              <div className="text-right shrink-0 space-y-1">
                <div className="h-8 w-20 bg-surface-alt rounded animate-pulse" />
                <div className="h-3 w-12 bg-surface-alt rounded animate-pulse ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
