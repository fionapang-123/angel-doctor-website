import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-button hover:bg-primary-strong focus-visible:ring-primary/30",
  secondary:
    "border border-primary/25 bg-primary-soft text-primary hover:border-primary/40 hover:bg-primary-soft/75 focus-visible:ring-primary/25",
  ghost: "text-primary hover:bg-primary-soft hover:text-primary-strong focus-visible:ring-primary/20",
  outline:
    "border border-border bg-surface text-foreground hover:border-primary/35 hover:text-primary focus-visible:ring-primary/20",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold leading-none transition duration-200 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
};

export function ButtonLink({ className, variant = "primary", href, children, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
