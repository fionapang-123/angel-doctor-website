import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock, MapPin, Stethoscope, AlertTriangle, Building2, Activity, FileText, DollarSign, ChevronRight, Sparkles, Shield, Zap, TrendingDown } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { FAQBlock } from "@/components/FAQBlock";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { createPageSchema } from "@/config/schema";
import { hospitalAvailabilityDisclaimer } from "@/config/site";
import type { PageContent } from "@/types/page";

export interface TreatmentPageData {
  slug: string;
  title: string;
  subtitle: string;
  hero: string;
  badge?: string;
  heroImage?: {
    src: string;
    alt: string;
    caption: string;
  };
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

export function treatmentPageToContent(data: TreatmentPageData): PageContent {
  const slug = data.slug.startsWith("/") ? data.slug : `/${data.slug}`;

  return {
    slug,
    title: `${data.title} | Angel Doctor`,
    description: data.hero,
    h1: data.title,
    intro: data.hero,
    kind: "service",
    cta: "carePlan",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Treatments", href: "/treatments" },
      { label: data.title, href: slug },
    ],
    quickAnswer: data.hero,
    sections: data.whatWeCoordinate.map((item) => ({
      title: item.title,
      body: item.body,
    })),
    relatedLinks: data.recommendedCities.map((city) => ({
      label: city.name,
      href: `/destinations/${city.slug}`,
    })),
    faqs: data.faqs.map((faq) => ({
      question: faq.q,
      answer: faq.a,
    })),
    disclaimer: "medical",
  };
}

const DEEP_DIVE_GUIDES: Record<string, { label: string; href: string; desc: string }[]> = {
  "treatments/health-checkup-china": [
    { label: "Health Screening & Cancer Detection", href: "/guides/health-screening-cancer-detection-china", desc: "One-morning screening, genetic testing, same-day specialist access — with academic citations." },
  ],
  "treatments/tcm-recovery-china": [
    { label: "Acupuncture & TCM for Chronic Pain", href: "/guides/acupuncture-pain-management-china", desc: "Evidence-based: acupuncture, tuina, cupping — 8 cited studies." },
    { label: "TCM Sleep Therapy & Insomnia", href: "/guides/tcm-sleep-insomnia-treatment-china", desc: "How TCM treats insomnia at the root — 6 cited clinical studies." },
  ],
  "treatments/dental-care-china": [
    { label: "Dental Implants Cost Guide", href: "/guides/dental-implants-china-cost", desc: "Cost factors, implant brands, timelines." },
    { label: "China vs Turkey Dental Tourism", href: "/guides/china-vs-turkey-dental-tourism", desc: "Honest comparison: costs, quality, support, logistics." },
  ],
  "treatments/medical-second-opinion-china": [
    { label: "Second Opinion & Specialist Access", href: "/guides/medical-second-opinion-specialist-china", desc: "7–53% diagnostic change rate, high-volume specialists — 5 cited studies." },
  ],
};

const PRICING_COMPARISONS: Record<string, { item: string; us: string; china: string }[]> = {
  "treatments/health-checkup-china": [
    { item: "Executive Checkup", us: "$3,000–$6,000", china: "$500–$1,000" },
    { item: "Full-Body MRI", us: "$2,500+", china: "$300–$500" },
    { item: "PET-CT Scan", us: "$5,000+", china: "$800–$2,000" },
    { item: "Specialist Consult", us: "$300–$600", china: "$30–$100" },
  ],
  "treatments/dental-care-china": [
    { item: "Dental Checkup", us: "Varies widely", china: "Provider estimate" },
    { item: "Cleaning", us: "Varies widely", china: "Provider estimate" },
    { item: "Simple Filling", us: "Varies widely", china: "Provider estimate" },
    { item: "Crown / Implant Consult", us: "Varies widely", china: "Provider estimate" },
  ],
  "treatments/medical-second-opinion-china": [
    { item: "Specialist Consult", us: "$300–$600", china: "$30–$100" },
    { item: "Senior Professor", us: "$600–$1,000+", china: "$100–$300" },
    { item: "MRI Review", us: "$200–$400", china: "$50–$100" },
    { item: "Full Record Review", us: "$500–$1,500", china: "$100–$300" },
  ],
};

function getHighlights(data: TreatmentPageData): { icon: React.ReactNode; label: string; value: string }[] {
  const highlights: Record<string, { icon: React.ReactNode; label: string; value: string }[]> = {
    "treatments/health-checkup-china": [
      { icon: <Zap className="size-5" />, label: "Time: one morning", value: "4–6 hours" },
      { icon: <TrendingDown className="size-5" />, label: "Save vs US cost", value: "70–85%" },
      { icon: <Clock className="size-5" />, label: "Results same day", value: "Most tests" },
      { icon: <Shield className="size-5" />, label: "Abnormal? See specialist", value: "Same day" },
    ],
    "treatments/dental-care-china": [
      { icon: <Clock className="size-5" />, label: "Basic dental visit", value: "Half day+" },
      { icon: <DollarSign className="size-5" />, label: "Costs confirmed by", value: "Provider" },
      { icon: <MapPin className="size-5" />, label: "Based on your case", value: "City matched" },
      { icon: <Shield className="size-5" />, label: "Local support", value: "Escort-ready" },
    ],
    "treatments/medical-second-opinion-china": [
      { icon: <Activity className="size-5" />, label: "Diagnosis may change", value: "7–53%" },
      { icon: <TrendingDown className="size-5" />, label: "Save vs US consult", value: "70–85%" },
      { icon: <Clock className="size-5" />, label: "Time to opinion", value: "1–2 weeks" },
      { icon: <Zap className="size-5" />, label: "No referral needed", value: "Direct access" },
    ],
    "treatments/tcm-recovery-china": [
      { icon: <Activity className="size-5" />, label: "Recovery focus", value: "Pain + sleep" },
      { icon: <Clock className="size-5" />, label: "Short-stay fit", value: "1-3 visits" },
      { icon: <Shield className="size-5" />, label: "Provider scope", value: "Licensed care" },
      { icon: <MapPin className="size-5" />, label: "Local support", value: "Escort-ready" },
    ],
  };
  return highlights[data.slug] || [];
}

export function TreatmentPage({ data }: { data: TreatmentPageData }) {
  const page = treatmentPageToContent(data);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: data.title, href: page.slug },
  ];
  const highlights = getHighlights(data);
  const deepGuides = DEEP_DIVE_GUIDES[data.slug] || [];
  const priceRows = PRICING_COMPARISONS[data.slug] || [];

  return (
    <main>
      <SchemaJsonLd data={createPageSchema(page)} />
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-mist via-mist/70 to-white">
        {/* Geometric decorations */}
        <div className="absolute right-0 top-0 size-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/[0.04]" />
        <div className="absolute left-1/3 top-1/2 size-80 -translate-y-1/2 rounded-full bg-primary/[0.03]" />
        <div className="absolute -left-20 bottom-0 size-64 rounded-full bg-primary/[0.05]" />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #d81b92 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-14">
          <Breadcrumbs items={crumbs} />
          <div className="grid gap-10 pt-14 lg:grid-cols-[minmax(0,0.96fr)_minmax(340px,0.74fr)] lg:items-center lg:pt-18">
            <div className="max-w-3xl">
              {data.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                  <Sparkles className="size-3" /> {data.badge}
                </span>
              )}
              <h1 className="mt-5 text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.04]">
                {data.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{data.hero}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTAButton cta="carePlan" />
              </div>
            </div>
            {data.heroImage && (
              <figure className="relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-elevated">
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={data.heroImage.src}
                    alt={data.heroImage.alt}
                    width={1200}
                    height={900}
                    priority
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,rgba(16,24,40,0.58)_0%,rgba(16,24,40,0)_100%)]" />
                </div>
                <figcaption className="border-t border-line bg-white px-5 py-4 text-sm leading-6 text-muted">
                  {data.heroImage.caption}
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ HIGHLIGHTS — dramatic colored strip ═══════════ */}
      {highlights.length > 0 && (
        <section className="relative -mt-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 reveal-on-scroll">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((h, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary transition-all group-hover:scale-110 group-hover:bg-primary/12">
                    {h.icon}
                  </span>
                  <p className="mt-3 font-sora text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{h.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{h.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══════════ WHAT WE COORDINATE ═══════════ */}
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-8 sm:px-6 lg:px-8 lg:pt-24 reveal-on-scroll">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Care Coordination</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{data.subtitle}</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {data.whatWeCoordinate.map((item, i) => (
            <div key={i} className="group flex gap-5 rounded-2xl border border-line bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/15 hover:shadow-card">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blush text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ WHO IT IS FOR — pill cloud ═══════════ */}
      <section className="relative overflow-hidden border-y border-line bg-gradient-to-r from-mist/60 via-blush/30 to-mist/60 reveal-on-scroll">
        <div className="absolute right-0 top-0 size-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/[0.04]" />
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="text-center relative">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who It&apos;s For</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Is This Right for You?</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.whoIsItFor.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 rounded-full border border-primary/10 bg-white/80 px-4 py-2.5 text-sm leading-6 text-muted shadow-soft backdrop-blur-sm transition-all hover:border-primary/25 hover:bg-white hover:text-foreground hover:shadow-card">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{i + 1}</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMMON NEEDS — alternating highlighted cards ═══════════ */}
      {data.commonNeeds && data.commonNeeds.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22 reveal-on-scroll">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Patient Needs</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Patients Choose China</h2>
          </div>
          <div className="mt-12 space-y-5 max-w-3xl mx-auto">
            {data.commonNeeds.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex items-start gap-5 rounded-2xl border p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card ${
                  isEven
                    ? 'border-primary/20 bg-gradient-to-r from-blush/50 to-white'
                    : 'border-line bg-white'
                }`}>
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                    isEven ? 'bg-primary text-white shadow-button' : 'bg-mist text-primary'
                  }`}>
                    {i + 1}
                  </span>
                  <p className="text-sm leading-6 text-muted pt-1.5">{item}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ═══════════ WHAT'S INCLUDED ═══════════ */}
      {data.whatIsIncluded && data.whatIsIncluded.length > 0 && (
        <section className="border-y border-line bg-white reveal-on-scroll">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What&apos;s Included</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Scope of Service</h2>
              <p className="mt-4 max-w-xl mx-auto text-base leading-7 text-muted">Treatment depends on your diagnosis and provider recommendation.</p>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {data.whatIsIncluded.map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 rounded-xl border border-line bg-surface px-5 py-4 shadow-soft transition-all hover:border-primary/15 hover:shadow-card">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/60" />
                  <span className="text-sm leading-6 text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ HOSPITAL ACCESS — dramatic card ═══════════ */}
      {data.hospitalAccessNote && (
        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22 reveal-on-scroll">
          <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-blush/50 via-blush/20 to-white p-8 shadow-soft sm:p-12">
            <div className="absolute -right-12 -top-12 size-48 rounded-full bg-primary/[0.06]" />
            <div className="absolute right-20 bottom-0 size-32 rounded-full bg-primary/[0.04]" />
            <div className="absolute left-0 top-1/2 size-24 -translate-y-1/2 rounded-full bg-primary/[0.03]" />
            <div className="relative">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                <Building2 className="size-6 text-primary" />
              </span>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Hospital & Provider Access</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{data.hospitalAccessNote}</p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-muted/60">{hospitalAvailabilityDisclaimer}</p>
              <Link href="/hospital-access" className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-primary-light to-primary px-5 py-2.5 text-sm font-semibold text-white shadow-button transition-all hover:scale-[1.02]">
                Explore hospital access <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ CITIES — color-accented cards ═══════════ */}
      <section className="border-y border-line bg-mist/40 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Destinations</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Top Cities for {data.title}</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.recommendedCities.map((c, i) => {
              const colors = ['from-primary/20 to-primary/5', 'from-primary/15 to-transparent', 'from-primary/10 to-transparent', 'from-mist to-transparent'];
              return (
                <Link key={c.slug} href={`/destinations/${c.slug}`} className="group relative overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card">
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${colors[i % 4]}`} />
                  <div className="flex items-center gap-2 pt-1">
                    <MapPin className="size-4 text-primary" />
                    <h3 className="font-sora text-base font-semibold text-foreground group-hover:text-primary transition-colors">{c.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{c.why}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    Explore <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS — timeline with connected dots ═══════════ */}
      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22 reveal-on-scroll">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Your Journey</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How It Works</h2>
        </div>
        <div className="mt-14 relative">
          {/* Connecting line */}
          <div className="absolute top-7 left-0 hidden h-px w-full bg-line sm:block" />
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-0">
            {data.process.map((step, i) => (
              <div key={i} className="relative flex flex-1 flex-col items-center text-center">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-line bg-white text-lg font-bold text-teal shadow-soft">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 max-w-[240px] text-sm leading-6 text-muted mx-auto">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton cta="carePlan" />
        </div>
      </section>

      {/* ═══════════ PRICING TABLE — dramatic comparison ═══════════ */}
      {priceRows.length > 0 && (
        <section className="relative overflow-hidden border-y border-primary/10 bg-gradient-to-b from-blush/30 to-white reveal-on-scroll">
          <div className="absolute right-0 top-0 size-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04]" />
          <div className="absolute left-1/4 bottom-0 size-64 rounded-full bg-primary/[0.03]" />
          <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cost Comparison</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">China vs US Pricing</h2>
              <p className="mt-4 max-w-xl mx-auto text-base leading-7 text-muted">Guidance ranges. Final costs confirmed by provider after examination.</p>
            </div>
            <div className="mt-10 max-w-xl mx-auto">
              {/* Header */}
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-0 rounded-t-2xl border border-line bg-white">
                <div className="px-6 py-4 text-sm font-semibold text-foreground">Service</div>
                <div className="px-4 py-4 text-center text-sm font-semibold text-muted">US</div>
                <div className="rounded-tr-2xl bg-primary/8 px-6 py-4 text-center text-sm font-bold text-primary">China</div>
              </div>
              {/* Rows */}
              {priceRows.map((row, i) => (
                <div key={i} className={`grid grid-cols-[1fr_auto_auto] items-center border-x border-line bg-white ${i < priceRows.length - 1 ? 'border-b' : 'border-b rounded-b-2xl'}`}>
                  <div className="px-6 py-3.5 text-sm font-medium text-foreground">{row.item}</div>
                  <div className="px-4 py-3.5 text-center text-sm text-muted">{row.us}</div>
                  <div className={`bg-primary/[0.03] px-6 py-3.5 text-center text-sm font-bold text-primary ${i === priceRows.length - 1 ? 'rounded-br-2xl' : ''}`}>{row.china}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm leading-6 text-muted max-w-2xl mx-auto">{data.pricingNote}</p>
            <div className="mt-6 text-center">
              <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                View full pricing details <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ DEEP DIVE GUIDES ═══════════ */}
      {deepGuides.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22 reveal-on-scroll">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Deep Dive</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Evidence & Guides</h2>
            <p className="mt-4 max-w-xl mx-auto text-base leading-7 text-muted">Detailed articles with academic citations and real patient perspectives.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-5xl mx-auto">
            {deepGuides.map((g, i) => (
              <Link key={i} href={g.href} className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blush text-primary transition-colors group-hover:bg-primary/10">
                  <FileText className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-sora text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{g.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{g.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Read guide <ChevronRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ═══════════ TIMELINE ═══════════ */}
      {data.timeline && (
        <section className="border-y border-line bg-mist/40 reveal-on-scroll">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Timeline</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What to Expect</h2>
            </div>
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blush">
                  <Clock className="size-5 text-primary" />
                </span>
                <p className="text-base leading-7 text-muted pt-1">{data.timeline}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ RISKS — subtle warning ═══════════ */}
      {data.risksAndLimits && data.risksAndLimits.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 reveal-on-scroll">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Important Notes</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Risks & Limitations</h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-6 text-muted">Licensed providers are responsible for clinical risks. Discuss these with your provider.</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3 max-w-5xl">
            {data.risksAndLimits.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-teal-soft/45 p-4 transition-colors hover:bg-teal-soft">
                <AlertTriangle className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm leading-6 text-muted">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══════════ FAQ ═══════════ */}
      <FAQBlock faqs={data.faqs as any} />

      {/* ═══════════ FINAL CTA — pink gradient explosion ═══════════ */}
      <section className="mx-auto max-w-3xl px-4 pb-22 pt-18 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light via-primary to-primary-dark px-8 py-16 text-center shadow-elevated sm:px-16 sm:py-20">
          {/* Decorative rings */}
          <div className="absolute -right-16 -top-16 size-64 rounded-full border border-white/[0.08]" />
          <div className="absolute -right-8 -top-8 size-48 rounded-full border border-white/[0.06]" />
          <div className="absolute -left-12 -bottom-12 size-56 rounded-full bg-white/[0.05]" />
          <div className="absolute left-1/4 top-1/4 size-3 rounded-full bg-white/20" />
          <div className="absolute right-1/3 bottom-1/3 size-2 rounded-full bg-white/15" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-7 text-white/80">
              Tell us what you need — we&apos;ll help you understand suitable care options, timelines, and local support in China.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary shadow-lg transition-all hover:bg-white/95 hover:scale-[1.03] active:scale-[0.98]">
                Get Your Care Plan <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-5 text-sm text-white/50">No obligation. About 2 minutes.</p>
          </div>
        </div>
      </section>

      <StickyMobileCTA page={{ slug: `/${data.slug}`, cta: "carePlan" } as any} />
    </main>
  );
}
