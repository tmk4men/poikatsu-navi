interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`bg-surface rounded-[var(--radius-lg)] border border-border-light shadow-[var(--shadow-sm)] p-6 md:p-8 ${
        hover
          ? "transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
