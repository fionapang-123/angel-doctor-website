import Link from "next/link";
import { CardGrid } from "@/components/CardGrid";
import { CTASection } from "@/components/CTASection";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { FAQBlock } from "@/components/FAQBlock";
import { HeroSection } from "@/components/HeroSection";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { TrustBar } from "@/components/TrustBar";
import { createPageSchema } from "@/config/schema";
import type { PageContent } from "@/types/page";

export function PageTemplate({ page }: { page: PageContent }) {
  const isHome = page.slug === "/";

  return (
    <>
      <SchemaJsonLd data={createPageSchema(page)} />
      <main>
        <HeroSection page={page} />
        <TrustBar />

        {/* Sections */}
        {page.sections.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            {!isHome && (
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Care pathway</p>
                <h2 className="mt-3 max-w-2xl font-sora text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Clear information, calmer decisions, supported visits.
                </h2>
              </div>
            )}
            <CardGrid items={page.sections} />
          </section>
        )}

        {/* Related links */}
        {page.relatedLinks?.length ? (
          <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-line bg-surface p-5 shadow-soft sm:p-6">
              <h2 className="text-lg font-semibold text-foreground">Related Pages</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {page.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-line bg-mist px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:border-primary/25 hover:bg-blush hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <FAQBlock faqs={page.faqs ?? []} />
        <DisclaimerBlock type={page.disclaimer} />
        <CTASection page={page} />
        <StickyMobileCTA page={page} />
      </main>
    </>
  );
}
