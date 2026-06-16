import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Shield, Stethoscope, AlertTriangle, Building2, Activity } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Badge } from "@/components/ui/badge";
import { FAQBlock } from "@/components/FAQBlock";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { siteConfig, hospitalAvailabilityDisclaimer } from "@/config/site";

export interface TreatmentPageData {
  slug: string;
  title: string;
  subtitle: string;
  hero: string;
  badge?: string;
  whatWeCoordinate: { title: string; body: string }[];
  whoIsItFor: string[];
  commonNeeds?: string[];
  whatIsIncluded?: string[];
  hospitalAccessNote?: string;
  recommendedCities: { name: string; slug: string; why: string }[];
  process: { title: string; body: string }[];
  timeline?: string;
  risksAndLimits?: string[];
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
            <h1 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{data.hero}</p>
            <div className="mt-7">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* What We Coordinate */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 reveal-on-scroll">
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
      <section className="border-y border-line bg-mist/50 reveal-on-scroll">
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

      {/* Common Needs */}
      {data.commonNeeds && data.commonNeeds.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 reveal-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Patient Needs</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Common Reasons Patients Seek {data.title}</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.commonNeeds.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 shadow-soft">
                <Activity className="mt-0.5 size-4 shrink-0 text-primary/60" />
                <span className="text-sm leading-6 text-muted">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What's Included */}
      {data.whatIsIncluded && data.whatIsIncluded.length > 0 && (
        <section className="border-y border-line bg-mist/50 reveal-on-scroll">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What's Included</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">What {data.title} May Include</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
              Treatment scope depends on your diagnosis, provider recommendation, and clinical plan. Below are common components patients should understand before committing to a care plan.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.whatIsIncluded.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 shadow-soft">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/60" />
                  <span className="text-sm leading-6 text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hospital / Provider Access */}
      {data.hospitalAccessNote && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 reveal-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Provider Access</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Hospital & Provider Access for {data.title}</h2>
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-line bg-surface p-6 shadow-soft">
            <Building2 className="mt-0.5 size-6 shrink-0 text-primary/70" />
            <div>
              <p className="text-base leading-7 text-muted">{data.hospitalAccessNote}</p>
              <p className="mt-3 text-sm leading-6 text-muted/70">{hospitalAvailabilityDisclaimer}</p>
              <Link href="/hospital-access" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                Learn more about hospital access <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recommended Cities */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 reveal-on-scroll">
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
      <section className="border-y border-line bg-mist/50 reveal-on-scroll">
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

      {/* Estimated Timeline */}
      {data.timeline && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 reveal-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Timeline</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Estimated Timeline for {data.title}</h2>
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-line bg-surface p-6 shadow-soft">
            <Clock className="mt-0.5 size-6 shrink-0 text-primary/70" />
            <p className="text-base leading-7 text-muted">{data.timeline}</p>
          </div>
        </section>
      )}

      {/* Risks and Limitations */}
      {data.risksAndLimits && data.risksAndLimits.length > 0 && (
        <section className="border-y border-line bg-mist/50 reveal-on-scroll">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Risks & Limits</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Risks and Limitations to Consider</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
              Angel Doctor coordinates care and provides support, but licensed healthcare providers are responsible for diagnosing risks, explaining complications, and obtaining informed consent. Patients should ask their provider directly about procedure-specific risks.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.risksAndLimits.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 shadow-soft">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500/70" />
                  <span className="text-sm leading-6 text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 reveal-on-scroll">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Pricing</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Cost Guidance</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{data.pricingNote}</p>
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

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-4 pb-14 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <AmbientBlobs />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Ready to explore {data.title.toLowerCase()} in China?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
              Tell us what you need and your preferred city. Angel Doctor will help you understand suitable care options, timelines, and local support.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      <StickyMobileCTA page={{ slug: `/${data.slug}`, cta: "carePlan" } as any} />
    </main>
  );
}
