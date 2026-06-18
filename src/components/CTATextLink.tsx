"use client";

import { useCtaModal } from "@/components/CtaModal";
import type { CtaKey } from "@/types/page";
import type { ReactNode } from "react";

type CTATextLinkProps = {
  cta: CtaKey;
  children: ReactNode;
  className?: string;
};

export function CTATextLink({ cta, children, className = "" }: CTATextLinkProps) {
  const { open } = useCtaModal();

  return (
    <button
      type="button"
      onClick={() => open(cta)}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-1 text-sm font-semibold leading-none underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-4 ${className}`}
    >
      {children}
    </button>
  );
}
