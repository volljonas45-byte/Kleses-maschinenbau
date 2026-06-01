import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-wide text-sm px-7 py-3.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/20",
  outline:
    "border border-white/30 text-white hover:bg-white hover:text-ink",
  ghost:
    "border border-line text-ink hover:border-accent hover:text-accent",
  light: "bg-white text-ink hover:bg-paper-dark",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
