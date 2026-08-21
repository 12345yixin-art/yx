import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "inverted"
  | "ghost"
  | "ghostInverted"
  | "darkSecondary"
  | "light";

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "ark-button-primary",
  secondary: "ark-button-secondary",
  inverted: "ark-button-inverted",
  ghost: "ark-button-ghost",
  ghostInverted: "ark-button-ghost-inverted",
  darkSecondary: "ark-button-dark-secondary",
  light: "ark-button-inverted",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      data-button-variant={variant === "light" ? "inverted" : variant}
      aria-disabled={props["aria-disabled"]}
      className={`ark-button inline-flex min-h-11 items-center justify-center rounded-[var(--ark-radius)] border px-5 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
