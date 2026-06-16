"use client";

import { FileText } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

/**
 * Lead magnet banner shown at the bottom of guide (article) pages.
 * Offers a clear next step: "Get a personalized care plan" —
 * positioned as the natural action after reading educational content.
 */
export function LeadMagnet() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-blush via-blush/60 to-surface p-8 shadow-card sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/15">
            <FileText className="size-6 text-primary" />
          </div>
          <h2 className="mt-6 font-sora text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Ready to take the next step?
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            Reading is a great start. Getting a personalized care plan is the next step. Tell us what treatment you need and where you may travel — a coordinator will reply with tailored options within 1–2 business days.
          </p>
          <div className="mt-8">
            <CTAButton cta="carePlan" />
          </div>
        </div>
      </div>
    </section>
  );
}
