import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Stethoscope } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FAQBlock } from "@/components/FAQBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { HospitalCard } from "@/components/HospitalCard";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { Badge } from "@/components/ui/badge";
import { createPageSchema } from "@/config/schema";
import type { Hospital } from "@/data/hospitals";
import type { LinkItem, PageContent } from "@/types/page";

/* ─── Types ─── */

export type CityPageData = {
  slug: string;
  city: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  positioning: string;
  trustLine: string;
  bestFitTreatments: { title: string; body: string; href: string }[];
  hospitals: Hospital[];
  providerTypes: string[];
  faqs: { question: string; answer: string }[];
};

export function cityPageToContent(data: CityPageData): PageContent {
  const slug = data.slug.startsWith("/") ? data.slug : `/destinations/${data.slug}`;

  return {
    slug,
    title: data.h1.includes("|") ? data.h1 : `${data.h1} | Angel Doctor`,
    description: data.intro,
    h1: data.h1,
    intro: data.intro,
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Destinations", href: "/destinations" },
      { label: data.city, href: slug },
    ],
    quickAnswer: data.quickAnswer,
    sections: data.bestFitTreatments.map((item) => ({
      title: item.title,
      body: item.body,
      href: item.href,
    })),
    relatedLinks: [
      ...data.bestFitTreatments.map((item) => ({
        label: item.title,
        href: item.href,
      })),
      { label: "Book Local Medical Escort", href: "/book-local-medical-escort" },
      { label: "Hospital Access", href: "/hospital-access" },
    ],
    faqs: data.faqs,
    disclaimer: "hospital",
  };
}

/* ─── Component ─── */

export function DestinationCityPage({ data, includeSchema = true }: { data: CityPageData; includeSchema?: boolean }) {
  const page = cityPageToContent(data);
  const crumbs: LinkItem[] = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: data.city, href: page.slug },
  ];

  return (
    <main>
      {includeSchema && <SchemaJsonLd data={createPageSchema(page)} />}
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="pt-8">
            <Badge className="w-fit" variant="secondary">{data.city} · Medical Travel</Badge>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {data.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{data.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      {/* Why This City */}
      <section className="border-y border-line bg-mist/50 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why {data.city}?</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {data.positioning}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            {data.quickAnswer}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            {data.trustLine}
          </p>
        </div>
      </section>

      {/* Best-Fit Treatments */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 reveal-on-scroll">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Best-Fit Treatments</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Treatments Available in {data.city}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.bestFitTreatments.map((t) => (
            <Link key={t.href} href={t.href} className="group block">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/20">
                <div className="flex size-10 items-center justify-center rounded-xl bg-blush">
                  <Stethoscope className="size-4 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-primary">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{t.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hospital & Provider Access */}
      <section className="border-y border-line bg-mist/50 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Hospital Access</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Hospitals & Providers in {data.city}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Angel Doctor can help international patients coordinate care with selected hospitals and healthcare providers in {data.city}. Depending on your medical need, timeline, and budget, we help identify suitable care options and coordinate your hospital visit.
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Provider types include: {data.providerTypes.join(", ")}.
          </p>

          {/* Hospital Cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.hospitals.map((h: Hospital, i: number) => (
              <HospitalCard key={h.name} hospital={h} index={i} />
            ))}
          </div>

          {/* Compliance note */}
          <p className="mt-6 text-sm leading-6 text-muted">
            Hospital access and appointment availability depend on the patient&apos;s condition, department capacity, doctor schedule, medical record review, city preference, timeline, and provider confirmation.
          </p>
        </div>
      </section>

      {/* Local Medical Escort Support */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 reveal-on-scroll">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Local Support</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Medical Escort Support in {data.city}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
          Navigating a Chinese hospital alone — especially if you don&apos;t speak the language — can be overwhelming. Angel Doctor&apos;s trained local medical escorts in {data.city} provide in-person support throughout your visit: registration, translation, payment guidance, and follow-up communication.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Registration & Navigation", body: "Escorts help with hospital check-in, department navigation, and examination routing." },
            { title: "Communication Support", body: "English-speaking escorts facilitate communication with hospital staff, doctors, and pharmacy." },
            { title: "Follow-Up Coordination", body: "Report collection, medication guidance, and follow-up communication after your visit." },
          ].map((s) => (
            <div key={s.title} className="flex gap-3 rounded-2xl border border-line bg-surface p-5 shadow-soft">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <CTAButton cta="escort" />
        </div>
      </section>

      {/* Pricing Guidance */}
      <section className="border-y border-line bg-mist/50 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Pricing Guidance</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Medical Costs in {data.city}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Your total cost depends on the treatment type, hospital or provider, doctor availability, diagnostic requirements, treatment complexity, and length of stay. Angel Doctor provides transparent pricing guidance before you confirm your care plan.
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Estimated costs depend on provider confirmation, diagnosis, treatment plan, materials, doctor availability, medical record review, city preference, timeline, and follow-up needs.
          </p>
          <div className="mt-6">
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              View pricing guidance <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQBlock faqs={data.faqs} />

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-4 pb-14 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/4" />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Ready to explore care options in {data.city}?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
              Tell us what treatment you need and when you plan to visit. Angel Doctor will help you compare suitable hospitals, timelines, and local support options.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      <StickyMobileCTA page={{ slug: data.slug, cta: "carePlan" } as any} />
    </main>
  );
}
