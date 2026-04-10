export default function ProtectedLoading() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      {/* Title skeleton */}
      <div className="h-8 w-48 bg-surface-alt rounded-[var(--radius-md)] animate-pulse mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card skeletons */}
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-surface rounded-[var(--radius-lg)] border border-border-light p-8"
          >
            <div className="h-5 w-32 bg-surface-alt rounded animate-pulse mb-4" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-surface-alt rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-surface-alt rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-surface-alt rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
