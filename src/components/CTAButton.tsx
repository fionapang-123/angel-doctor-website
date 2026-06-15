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
    "bg-primary text-white shadow-button hover:bg-primary-strong focus-visible:ring-primary/30",
  secondary:
    "border border-primary/25 bg-primary-soft text-primary hover:border-primary/40 hover:bg-primary-soft/80 focus-visible:ring-primary/25",
  ghost:
    "text-primary hover:bg-primary-soft hover:text-primary-strong focus-visible:ring-primary/20",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 active:scale-[0.98]";

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
