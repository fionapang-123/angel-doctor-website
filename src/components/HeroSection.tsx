import { ArrowRight, BadgeCheck, ClipboardList, Languages, MapPinned, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import type { PageContent } from "@/types/page";

const supportCues = [
  { label: "Care matching", icon: ClipboardList },
  { label: "Local escorts", icon: MapPinned },
  { label: "English support", icon: Languages },
  { label: "Clear boundaries", icon: ShieldCheck },
];

export function HeroSection({ page }: { page: PageContent }) {
  const isHome = page.slug === "/";

  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Subtle warm glow at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(235,245,255,0.8),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20">
        <Breadcrumbs items={page.breadcrumbs} />

        <div className="grid gap-10 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:pt-12">
          {/* Left: headline + CTAs */}
          <div className="flex flex-col gap-6">
            {isHome && (
              <Badge className="w-fit" variant="secondary">
                {siteConfig.slogan}
              </Badge>
            )}

            <div className="flex flex-col gap-5">
              <h1 className="max-w-3xl font-sora text-hero-mobile font-semibold tracking-tight text-foreground sm:text-hero">
                {page.h1}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {page.intro}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton cta={page.cta} />
              {page.secondaryCta && (
                <CTAButton cta={page.secondaryCta} variant="secondary" />
              )}
            </div>

            {isHome && (
              <p className="text-xs text-muted/70">Free · 2 minutes · No commitment</p>
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {supportCues.map((cue) => {
                const Icon = cue.icon;
                return (
                  <div key={cue.label} className="flex items-center gap-2 text-sm font-medium text-muted">
                    <Icon aria-hidden="true" className="size-4 text-primary/60" />
                    {cue.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Quick Answer card — more premium */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/8 bg-surface p-6 shadow-soft sm:p-8">
            {/* Decorative accent */}
            <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-blush" />
            <div className="pointer-events-none absolute right-16 top-12 size-2 rounded-full bg-primary/15" />

            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <BadgeCheck aria-hidden="true" className="size-3.5" />
                Quick Answer
              </div>
              <p className="mt-5 text-[15px] leading-7 text-foreground">
                {page.quickAnswer || page.description}
              </p>
              <div className="mt-6 rounded-xl border border-line bg-mist/80 p-4">
                <p className="text-xs font-semibold text-foreground">Why patients choose us</p>
                <p className="mt-1.5 text-sm leading-6 text-muted">{siteConfig.trustLine}</p>
              </div>
              <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-strong">
                Understand your next step
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
