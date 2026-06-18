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
    <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(180deg,rgba(238,246,255,0.82)_0%,rgba(255,240,250,0.42)_44%,rgba(248,251,255,0.98)_78%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />

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
              <h1
                className={`max-w-3xl font-sora font-semibold tracking-tight text-foreground ${
                  isHome
                    ? "text-hero-mobile sm:text-hero"
                    : "text-4xl sm:text-5xl lg:text-6xl"
                }`}
              >
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
          <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-white p-6 shadow-elevated sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-line" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <BadgeCheck aria-hidden="true" className="size-3.5" />
                Quick Answer
              </div>
              <p className="mt-5 text-[15px] leading-7 text-foreground">
                {page.quickAnswer || page.description}
              </p>
              <div className="mt-6 rounded-lg border border-line bg-mist/80 p-4">
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
