import { CTAButton } from "@/components/CTAButton";
import type { PageContent } from "@/types/page";

export function CTASection({ page }: { page: PageContent }) {
  if (page.slug.startsWith("/legal/")) return null;

  const isHome = page.slug === "/";

  return (
    <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-primary/8 bg-blush px-6 py-14 text-center sm:px-14 sm:py-16">
        {/* Subtle decorative accents */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/[0.03]" />
        <div className="pointer-events-none absolute -bottom-14 -left-14 size-48 rounded-full bg-primary/[0.02]" />
        <div className="pointer-events-none absolute right-1/3 top-8 size-1.5 rounded-full bg-primary/10" />
        <div className="pointer-events-none absolute left-1/4 bottom-12 size-2 rounded-full bg-primary/8" />

        <div className="relative">
          <h2 className="font-sora text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {isHome ? "Start your care journey today" : "Ready to understand your options?"}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-muted">
            Share your care need, preferred city, and timeline. Angel Doctor can help you understand suitable
            coordination and local support options — no medical records required for your first inquiry.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAButton cta={page.cta} />
          </div>
          <p className="mt-5 text-xs text-muted/60">Free · 2 minutes · No commitment</p>
        </div>
      </div>
    </section>
  );
}
