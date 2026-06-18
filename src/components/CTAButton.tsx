"use client";

import { ArrowRight } from "lucide-react";
import { useCtaModal } from "@/components/CtaModal";
import { CTA } from "@/config/cta";
import type { CtaKey } from "@/types/page";

type CTAButtonProps = {
  cta: CtaKey;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantStyles: Record<string, string> = {
  primary:
    "bg-foreground text-white shadow-soft hover:bg-foreground/90 focus-visible:ring-foreground/12 active:bg-foreground/95",
  secondary:
    "border border-primary/25 bg-white text-primary shadow-soft hover:border-primary/40 hover:bg-primary-soft focus-visible:ring-primary/25",
  ghost:
    "text-primary hover:bg-primary-soft hover:text-primary-strong focus-visible:ring-primary/20",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 active:scale-[0.98]";

export function CTAButton({ cta, variant = "primary", className = "" }: CTAButtonProps) {
  const { open } = useCtaModal();
  const item = CTA[cta];
  const v = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      onClick={() => open(cta)}
      className={`${base} ${v} ${className}`}
      type="button"
    >
      {item.label}
      {variant === "primary" && <ArrowRight className="size-4" />}
    </button>
  );
}
