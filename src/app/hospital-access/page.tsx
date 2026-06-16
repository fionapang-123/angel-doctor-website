import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, CheckCircle2, MapPin, Search, ClipboardList, CalendarClock } from "lucide-react";
import { createPageSchema } from "@/config/schema";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { getPage } from "@/data/pages";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { HospitalCard } from "@/components/HospitalCard";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { hospitals } from "@/data/hospitals";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Hospital Access", href: "/hospital-access" },
];

const providerTypes = [
  { type: "Public Tertiary Hospitals", care: "Complex specialist care, cancer second opinions, cardiology, neurology, orthopedics, advanced diagnostics", when: "When your case requires specialist departments, advanced imaging, multidisciplinary review, or hospital-based treatment.", related: [{ l: "Second Opinion", h: "/treatments/medical-second-opinion-china" }, { l: "Health Checkup", h: "/treatments/health-checkup-china" }] },
  { type: "Specialty Hospitals", care: "Oncology, cardiology, orthopedics, neurology, pediatrics, ophthalmology, stomatology", when: "When you need focused specialist care at a dedicated specialty institution.", related: [{ l: "Second Opinion", h: "/treatments/medical-second-opinion-china" }] },
  { type: "Dental Providers", care: "Dental implants, crowns, veneers, checkups, treatment planning", when: "For short-stay dental evaluation, implants, or cosmetic dental treatment.", related: [{ l: "Dental Care", h: "/treatments/dental-care-china" }] },
  { type: "Executive Health Checkup Centers", care: "Preventive screening, imaging, blood tests, specialist review", when: "When you want comprehensive health screening during a short stay in China.", related: [{ l: "Health Checkup", h: "/treatments/health-checkup-china" }] },
  { type: "TCM & Recovery Providers", care: "Acupuncture, pain relief, sleep support, stress recovery, TCM wellness", when: "For non-invasive recovery, pain management, and wellness-focused programs.", related: [{ l: "TCM Recovery", h: "/treatments/tcm-recovery-china" }] },
  { type: "International Clinics", care: "English-speaking GP, specialist referral, health checkup, vaccinations", when: "When you prefer English-first communication and international-standard clinic experience.", related: [{ l: "Health Checkup", h: "/treatments/health-checkup-china" }] },
];

const accessFaqs = [
  { q: "Can foreigners access hospitals in China?", a: "Yes. Foreigners can access many hospitals and healthcare providers in China. However, appointment processes, language support, payment methods, department availability, and documentation requirements vary by hospital. Angel Doctor helps international patients understand suitable options and coordinate the hospital visit process." },
  { q: "How does Angel Doctor choose a hospital for international patients?", a: "Angel Doctor recommends care options based on your medical need, preferred city, timeline, estimated budget, language support needs, and follow-up requirements. We consider provider type, department availability, and international patient support capability — not rankings or promotional arrangements." },
  { q: "Can I choose a specific hospital or doctor in China?", a: "You can express a preference. Angel Doctor will check availability and whether the provider is suitable for your medical need. Final access depends on department capacity, doctor schedule, medical record review, and provider confirmation." },
  { q: "Does Angel Doctor work with public or private hospitals?", a: "Angel Doctor's coordination network includes public tertiary hospitals, specialty hospitals, private clinics, dental providers, health checkup centers, TCM institutions, and rehabilitation providers across major Chinese cities." },
  { q: "Can I get an English-speaking medical escort at the hospital?", a: "Yes. Angel Doctor's trained local medical escorts provide English-speaking support for hospital registration, navigation, communication, payment guidance, and follow-up coordination." },
  { q: "Do Chinese hospitals accept international insurance?", a: "Insurance acceptance varies by hospital and policy. Most public hospitals require upfront payment. Angel Doctor can help you understand payment expectations before your visit, but does not process insurance claims." },
  { q: "What medical records should I prepare before hospital matching?", a: "For general inquiries, no records are needed. For complex conditions or second opinions, you may be asked for previous diagnosis reports, imaging, test results, medication lists, and treatment history. A coordinator will guide you on what's needed." },
  { q: "Can Angel Doctor help after I return home?", a: "Yes. Angel Doctor can help with follow-up communication, report translation, medication guidance, and coordination of continued care where available." },
  { q: "Does Angel Doctor provide medical diagnosis or treatment?", a: "No. Angel Doctor provides care coordination, hospital matching, translation support, appointment assistance, and local medical escort services. Medical diagnosis, treatment decisions, prescriptions, procedures, and clinical recommendations are made by licensed healthcare providers." },
];

export default function HospitalAccessPage() {
  const page = getPage("/hospital-access");
  const schema = createPageSchema(page);
  return (
    <main>
      <SchemaJsonLd data={schema} />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl pt-10">
            <Badge className="w-fit" variant="secondary">Hospital Access</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hospital Access in China for International Patients
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Angel Doctor helps international patients access suitable hospitals, clinics, and healthcare providers in China through care matching, appointment coordination, translation support, and trained local medical escorts.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton cta="carePlan" />
              <Link href="/destinations" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:border-primary/25 hover:text-primary">
                View Destinations <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* What Hospital Access Means */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Understanding Hospital Access</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">What Hospital Access Means</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Hospital access is not just a list of hospital names. For international patients, it means knowing which hospital, department, doctor type, city, timeline, and support pathway may fit their medical need.
        </p>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
          Angel Doctor helps patients understand available care options, prepare the right information, coordinate appointments, arrange local support, and navigate the hospital visit in China.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Search, title: "Care Matching", body: "We help identify suitable hospitals, departments, and care options based on your medical need, location preference, timeline, and budget." },
            { icon: CalendarClock, title: "Appointment Coordination", body: "We support scheduling, information preparation, hospital communication, and visit planning before you arrive." },
            { icon: ClipboardList, title: "Local Hospital Support", body: "Trained medical escorts can help with registration, navigation, translation support, payment guidance, report collection, and follow-up coordination." },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
                <div className="flex size-10 items-center justify-center rounded-xl bg-blush">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{c.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Provider Types */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Provider Types</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Types of Hospitals & Providers in Our Network</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {providerTypes.map((pt) => (
              <div key={pt.type} className="rounded-2xl border border-line bg-surface p-5 shadow-soft sm:p-6">
                <div className="flex items-center gap-3">
                  <Building2 className="size-5 text-primary" />
                  <h3 className="text-base font-semibold text-foreground">{pt.type}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted"><strong>Best for:</strong> {pt.care}</p>
                <p className="mt-2 text-sm leading-6 text-muted"><strong>When to choose:</strong> {pt.when}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {pt.related.map((r) => (
                    <Link key={r.h} href={r.h} className="text-xs font-medium text-primary hover:underline">{r.l}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Medical Destinations */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cities</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Major Medical Destinations in China</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { c: "Shenzhen", s: "/destinations/shenzhen-medical-travel", p: "Dental care, health checkups, cross-border support near Hong Kong." },
            { c: "Guangzhou", s: "/destinations/guangzhou-medical-travel", p: "TCM recovery, specialist care, southern China medical hub." },
            { c: "Shanghai", s: "/destinations/shanghai-medical-travel", p: "Executive checkups, international clinics, specialist consultations." },
            { c: "Beijing", s: "/destinations/beijing-medical-travel", p: "Top national hospitals, complex second opinions, specialist depth." },
            { c: "Chengdu", s: "/destinations/chengdu-medical-travel", p: "West China Hospital — comprehensive diagnostics and care." },
            { c: "Chongqing", s: "/destinations/chongqing-medical-travel", p: "Leading children's hospital and comprehensive medical center." },
            { c: "Hangzhou", s: "/destinations/hangzhou-medical-travel", p: "Zhejiang University hospitals — specialist and women's health." },
            { c: "Nanjing", s: "/destinations/nanjing-medical-travel", p: "Jiangsu Province Hospital and Drum Tower Hospital." },
            { c: "Wuhan", s: "/destinations/wuhan-medical-travel", p: "Tongji and Xiehe — two of China's largest hospital systems." },
            { c: "Xi'an", s: "/destinations/xian-medical-travel", p: "Xi'an Jiaotong University Hospital — northwest China care." },
            { c: "Zhuhai", s: "/destinations/zhuhai-medical-travel", p: "Convenient cross-border access near Macau and Hong Kong." },
          ].map((d) => (
            <Link key={d.c} href={d.s} className="group block">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/20">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">{d.c}</h3>
                </div>
                <p className="mt-2 flex-1 text-xs leading-5 text-muted">{d.p}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hospital Cards */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Partner Hospitals</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Hospital & Provider Examples</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Below are selected hospitals and healthcare providers in Angel Doctor's coordination network. Each card shows the provider type, care areas, how Angel Doctor can help, and what affects appointment availability.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hospitals.slice(0, 24).map((h, i) => (
              <HospitalCard key={h.name} hospital={h} index={i} />
            ))}
          </div>
          {hospitals.length > 24 && (
            <p className="mt-4 text-center text-sm text-muted">
              Showing 24 of {hospitals.length} partner hospitals and providers.
            </p>
          )}
        </div>
      </section>

      {/* How Angel Doctor Supports */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Your Visit</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">How Angel Doctor Supports Your Hospital Visit</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            "Hospital and provider matching based on your medical needs",
            "Appointment coordination and visit preparation",
            "Medical record translation and preparation support",
            "English-speaking local medical escort during your visit",
            "Hospital navigation, registration, and payment guidance",
            "Follow-up communication and report coordination",
          ].map((s) => (
            <div key={s} className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-4 shadow-soft">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/70" />
              <span className="text-sm leading-6 text-muted">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notes */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground">Important Notes on Hospital Access</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-muted">
            <p>Hospital access and appointment availability depend on the patient's condition, department capacity, doctor schedule, medical record review, city preference, timeline, and provider confirmation.</p>
            <p>Angel Doctor provides care coordination, translation support, appointment assistance, and local medical escort services. Medical diagnosis, treatment plans, medical risks, prescriptions, procedures, and clinical decisions are made by licensed healthcare providers.</p>
            <p>Angel Doctor does not guarantee treatment outcomes, specific doctor availability, or hospital acceptance for every case. For complex medical conditions, patients may be asked to provide medical records for review before care options can be recommended.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Common Questions</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Hospital Access FAQ</h2>
        </div>
        <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
          {accessFaqs.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-primary sm:px-6 sm:py-5">
                <span>{faq.q}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-5 pb-5 text-sm leading-7 text-muted sm:px-6 sm:pb-6">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/4" />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Ready to access care in China?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Tell us what care you need, your preferred city, and your timeline. Angel Doctor will help you understand suitable hospital access options in China.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      <StickyMobileCTA page={{ slug: "/hospital-access", cta: "carePlan" } as any} />
    </main>
  );
}
