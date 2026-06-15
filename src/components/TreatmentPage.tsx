import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Shield, Stethoscope } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Badge } from "@/components/ui/badge";
import { FAQBlock } from "@/components/FAQBlock";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export interface TreatmentPageData {
  slug: string;
  title: string;
  subtitle: string;
  hero: string;
  badge?: string;
  whatWeCoordinate: { title: string; body: string }[];
  whoIsItFor: string[];
  recommendedCities: { name: string; slug: string; why: string }[];
  process: { title: string; body: string }[];
  pricingNote: string;
  faqs: { q: string; a: string }[];
}

export function TreatmentPage({ data }: { data: TreatmentPageData }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: data.title, href: `/${data.slug}` },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl pt-10">
            {data.badge && <Badge className="w-fit" variant="secondary">{data.badge}</Badge>}
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">{data.hero}</p>
            <div className="mt-7">
              <CTAButton cta="carePlan" />
            </div>
            <p className="mt-4 text-xs text-muted">Free · 2 minutes · No commitment</p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* What We Coordinate */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Care Coordination</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{data.subtitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.whatWeCoordinate.map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary/70" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who It's For</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Is {data.title} Right for You?</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.whoIsItFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 shadow-soft">
                <Stethoscope className="mt-0.5 size-4 shrink-0 text-primary/60" />
                <span className="text-sm leading-6 text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Cities */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Destinations</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Recommended Cities for {data.title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.recommendedCities.map((c) => (
            <Link key={c.slug} href={`/destinations/${c.slug}`} className="group flex flex-col rounded-2xl border border-line bg-surface p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/20">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                <h3 className="font-sora text-base font-semibold text-foreground group-hover:text-primary">{c.name}</h3>
              </div>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{c.why}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Explore {c.name} <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Your Journey</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">How {data.title} Works</h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
            {data.process.map((step, i) => (
              <div key={i} className="flex-1 rounded-2xl border border-line bg-surface p-5 shadow-soft">
                <span className="text-xs font-bold tracking-widest text-primary/50">0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <CTAButton cta="carePlan" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Pricing</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Cost Guidance</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{data.pricingNote}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            View full pricing <ArrowRight className="size-3.5" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            Get your personalized estimate <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQBlock faqs={data.faqs as any} />

      <DisclaimerBlock type="medical" />

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <AmbientBlobs />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Ready to explore {data.title.toLowerCase()} in China?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Tell us what you need and your preferred city. Angel Doctor will help you understand suitable care options, timelines, and local support.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
            <p className="mt-5 text-xs text-muted">Free · 2 minutes · No commitment</p>
          </div>
        </div>
      </section>

      <StickyMobileCTA page={{ slug: `/${data.slug}`, cta: "carePlan" } as any} />
    </main>
  );
}
