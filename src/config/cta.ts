import type { CtaKey } from "@/types/page";

export const CTA: Record<CtaKey, { label: string; href: string }> = {
  carePlan: {
    label: "Get Your Care Plan",
    href: "/get-care-plan",
  },
  escort: {
    label: "Book Local Medical Escort",
    href: "/book-local-medical-escort",
  },
};
