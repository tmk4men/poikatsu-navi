interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "premium" | "new" | "hot";
  className?: string;
}

const variants = {
  default:
    "bg-surface-alt text-muted border border-border-light",
  premium:
    "bg-accent-lighter text-accent border border-accent-light",
  new:
    "bg-emerald-50 text-emerald-700 border border-emerald-200",
  hot:
    "bg-red-50 text-red-700 border border-red-200",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
