import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const baseStyles =
  "btn-bounce inline-flex items-center justify-center font-medium tracking-wide transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary:
    "bg-primary text-white rounded-full shadow-[var(--shadow-sm)] hover:bg-primary-dark hover:shadow-[var(--shadow-md)]",
  outline:
    "border border-border text-foreground rounded-full hover:border-primary hover:text-primary hover:bg-primary-lighter/40",
  ghost:
    "text-muted rounded-[var(--radius-md)] hover:text-foreground hover:bg-surface-alt",
};

const sizes = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3.5 text-sm gap-2",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
