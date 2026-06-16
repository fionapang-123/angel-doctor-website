import Link from "next/link";
import { ArrowRight, BadgeCheck, HeartHandshake, Languages, ShieldCheck, ClipboardList, MapPinned, CalendarClock, Building2, Stethoscope, Sparkles, Users, FileText, LineChart } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { FAQBlock } from "@/components/FAQBlock";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { CTASection } from "@/components/CTASection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { Badge } from "@/components/ui/badge";
import { createPageSchema } from "@/config/schema";
import type { FaqItem, LinkItem, PageContent } from "@/types/page";

const crumbs: LinkItem[] = [{ label: "Home", href: "/" }];

const treatments = [
  {
    title: "Dental Care",
    body: "Short-stay dental evaluation, implants, crowns, veneers, checkups, and treatment planning with provider matching and local support.",
    href: "/treatments/dental-care-china",
    icon: Stethoscope,
  },
  {
    title: "Health Checkup",
    body: "Preventive screening, imaging, blood tests, executive checkups, and report explanation support across Chinese cities.",
    href: "/treatments/health-checkup-china",
    icon: LineChart,
  },
  {
    title: "Second Opinion",
    body: "Medical record preparation, department matching, specialist review coordination, and follow-up communication support.",
    href: "/treatments/medical-second-opinion-china",
    icon: FileText,
  },
  {
    title: "TCM Recovery",
    body: "Acupuncture, pain relief, sleep support, fatigue recovery, stress recovery, and wellness-oriented TCM programs.",
    href: "/treatments/tcm-recovery-china",
    icon: Sparkles,
  },
];

const escortPillars = [
  { label: "Training system", desc: "Escorts follow a structured process covering hospital workflow, patient communication, privacy rules, and escalation procedures." },
  { label: "Service standards", desc: "Defined support tasks, clear service boundaries, and documented expectations for every visit." },
  { label: "Backend coordination", desc: "Angel Doctor coordinates patient needs, city selection, appointment preparation, escort assignment, and follow-up." },
  { label: "Privacy agreements", desc: "Patient information and medical inquiry details are handled under clear data protection rules." },
  { label: "Complaint handling", desc: "Patients can raise issues, request follow-up, or report service problems through the system." },
  { label: "Emergency escalation", desc: "Urgent issues during service can be escalated internally. For medical emergencies, contact local emergency services immediately." },
];

const steps = [
  { step: "1", title: "Share Your Care Request", body: "Tell us your treatment interest, preferred city, timeline, contact details, and whether you need local support." },
  { step: "2", title: "Review Care Options", body: "Angel Doctor helps compare suitable provider types, expected timelines, support needs, and pricing factors." },
  { step: "3", title: "Visit With Local Support", body: "A trained medical escort may help with registration, navigation, communication, payment guidance, and report collection." },
  { step: "4", title: "Continue Follow-Up", body: "After your visit, Angel Doctor supports follow-up communication, report coordination, and next-step planning where available." },
];

const destinations = [
  {
    city: "Shenzhen",
    badge: "Dental · Checkups · TCM",
    body: "Convenient for dental care, health checkups, TCM recovery, and cross-border access from Hong Kong. English-speaking medical escort support available.",
    href: "/destinations/shenzhen-medical-travel",
  },
  {
    city: "Guangzhou",
    badge: "TCM · Rehab · Specialist",
    body: "A southern China medical hub for TCM recovery, rehabilitation, health checkups, and specialist hospital coordination.",
    href: "/destinations/guangzhou-medical-travel",
  },
  {
    city: "Shanghai",
    badge: "Executive Checkup · Second Opinion · Private",
    body: "Suitable for executive health checkups, international clinics, specialist second opinions, and private healthcare access.",
    href: "/destinations/shanghai-medical-travel",
  },
];

const whyAngel = [
  { title: "Healthcare Group Experience", body: "Angel Doctor is backed by a healthcare group founded in 1998, bringing decades of operational experience to international patient coordination.", icon: Building2 },
  { title: "200+ Hospitals and Providers", body: "A broad coordination network spanning public tertiary hospitals, specialty hospitals, dental providers, checkup centers, TCM providers, and international clinics.", icon: HeartHandshake },
  { title: "600+ Trained Medical Escorts", body: "Not freelancers. A standardized, trained, and managed offline service network with defined task scope, coordinator oversight, and service records.", icon: Users },
  { title: "AI-Assisted Matching", body: "Technology-supported hospital and provider matching helps narrow suitable options based on patient needs, city, timeline, and language requirements.", icon: Sparkles },
  { title: "Clear Medical Boundaries", body: "Angel Doctor coordinates care and support. Licensed healthcare providers make medical diagnosis, treatment, and clinical decisions.", icon: ShieldCheck },
  { title: "English-Speaking Support", body: "Coordination, translation support, and communication assistance available in English and Chinese throughout the care journey.", icon: Languages },
];

const pricingComponents = [
  { label: "Hospital / Provider Medical Fees", desc: "Paid directly by the patient to the hospital, clinic, or healthcare provider at the time of service." },
  { label: "Angel Doctor Coordination Fees", desc: "Care planning, hospital matching, appointment preparation, and communication support throughout your journey." },
  { label: "Medical Escort Fees", desc: "In-hospital or in-clinic local support during your visit — registration, navigation, translation, and payment guidance." },
  { label: "Travel & Accommodation", desc: "Flights, hotels, local transportation, and personal travel costs are separate from medical and coordination costs." },
];

const guideCards = [
  {
    title: "Dental Implants in China: Cost Factors",
    body: "Understand implant costs, materials, treatment timelines, staging, and provider questions before committing to a care plan.",
    href: "/guides/dental-implants-china-cost",
  },
  {
    title: "Can Foreigners See Doctors in China?",
    body: "Learn how international patients can access hospitals, clinics, appointments, translation support, and medical escorts in China.",
    href: "/guides/can-foreigners-see-doctors-in-china",
  },
];

const homeFaqs: FaqItem[] = [
  {
    question: "Does Angel Doctor provide medical diagnosis or treatment?",
    answer: "No. Angel Doctor provides healthcare coordination, hospital matching, translation support, appointment assistance, and local medical escort services. Diagnosis and treatment decisions are made by licensed healthcare providers.",
  },
  {
    question: "Are appointments or treatment outcomes guaranteed?",
    answer: "No. Appointment availability depends on provider confirmation, department capacity, doctor schedule, patient condition, medical record review, city preference, and timeline.",
  },
  {
    question: "How much does medical travel to China cost?",
    answer: "Total cost depends on provider confirmation, diagnosis, treatment plan, materials, doctor availability, city, timeline, translation needs, escort support, and follow-up needs. Angel Doctor provides pricing guidance during coordination — we do not publish fake fixed prices.",
  },
  {
    question: "Can Angel Doctor help me choose a suitable city for my treatment?",
    answer: "Yes. Angel Doctor helps patients compare city options based on treatment type, provider availability, timeline, language support needs, and local escort availability.",
  },
  {
    question: "What should I prepare before contacting Angel Doctor?",
    answer: "You only need your treatment interest, preferred city or region, travel timeline, and contact details. Medical records, images, or reports can be shared later for complex cases — they are not required for an initial inquiry.",
  },
];

const homePage: PageContent = {
  slug: "/",
  title: "Angel Doctor | Medical Travel to China for International Patients",
  description: "Access healthcare options in China with Angel Doctor hospital matching, transparent coordination, and trained local medical escort support.",
  h1: "Fast Care. Fair Price. Clear Guidance.",
  intro: "Angel Doctor helps international patients understand healthcare options in China through AI-assisted matching, transparent coordination, and trained local medical escorts.",
  kind: "webpage",
  cta: "carePlan",
  secondaryCta: "escort",
  breadcrumbs: crumbs,
  quickAnswer: "Angel Doctor is a China medical travel coordination platform for international patients. We help patients compare suitable care options, prepare for visits, arrange local support, and communicate with hospitals and healthcare providers.",
  sections: [],
  relatedLinks: [],
  faqs: homeFaqs,
  disclaimer: "medical",
};

export function HomePage() {
  return (
    <>
      <SchemaJsonLd data={createPageSchema(homePage)} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(235,245,255,0.9),transparent)]" />
        <div className="pointer-events-none absolute -left-32 top-20 size-64 rounded-full bg-blush/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-40 size-80 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  International Healthcare Coordination
                </p>
                <h1 className="max-w-3xl font-sora text-hero-mobile font-semibold leading-[1.1] tracking-tight text-foreground sm:text-hero sm:leading-[1.08]">
                  Fast Care. Fair Price.<br />
                  Clear Guidance.
                </h1>
                <p className="max-w-xl text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                  Angel Doctor coordinates your full care journey in China — from provider matching and appointment preparation, to in-hospital support with a trained local medical escort, through to follow-up after you return home.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CTAButton cta="carePlan" />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8">
              <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-blush/80" />
              <div className="relative">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                    <ClipboardList aria-hidden="true" className="size-4 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Your Care Plan</p>
                </div>
                <p className="mt-4 text-[13px] leading-6 text-muted">
                  A structured coordination process to help you access healthcare in China with confidence.
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    { step: "1", label: "Needs & Matching", desc: "Hospital and provider options based on your treatment type, city, and timeline." },
                    { step: "2", label: "Visit Preparation", desc: "Appointment coordination, pricing guidance, and what to expect on the day." },
                    { step: "3", label: "Local Medical Escort", desc: "A trained escort supports in-hospital navigation, translation, and payments." },
                    { step: "4", label: "Follow-Up", desc: "Post-visit communication and next-step planning." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{s.step}</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{s.label}</p>
                        <p className="mt-0.5 text-xs leading-5 text-muted">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. China Healthcare, Guided End to End */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Guided Care</p>
          <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            China Healthcare, Guided End to End
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-muted">
            Angel Doctor doesn't just match you with a hospital and disappear. We coordinate your entire care journey — from understanding your options and preparing for your visit, to in-hospital support with a trained medical escort, through to follow-up communication after you return home.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-blush ring-1 ring-primary/5">
              <ClipboardList className="size-6 text-primary" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">Before Your Visit</h3>
            <p className="mt-3 text-sm leading-6 text-muted">You tell us your treatment goals and preferred city. We match you with suitable providers, coordinate appointments, and give you clear pricing guidance — all before you travel.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-blush ring-1 ring-primary/5">
              <MapPinned className="size-6 text-primary" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">During Your Visit</h3>
            <p className="mt-3 text-sm leading-6 text-muted">You'll have a trained medical escort at your side — handling registration, navigation, communication, and payments so you can focus on your care.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-blush ring-1 ring-primary/5">
              <CalendarClock className="size-6 text-primary" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">After Your Visit</h3>
            <p className="mt-3 text-sm leading-6 text-muted">Follow-up communication, report coordination, next-step planning, and continued support where available.</p>
          </div>
        </div>
      </section>

      {/* 4. Popular Treatments */}
      <section className="border-y border-line bg-mist/40 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What we can coordinate for you</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Popular Treatments</h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Angel Doctor currently supports coordination for dental care, health checkups, medical second opinions, and TCM recovery in China.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t) => {
              const Icon = t.icon;
              return (
                <Link key={t.href} href={t.href} className="group block">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-card">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blush ring-1 ring-primary/5">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{t.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted">{t.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-strong transition-colors">
                      Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/treatments" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-strong">
              View all treatments <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Standardized Medical Escort Network */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">600+ Trained Escorts</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Standardized Medical Escort Network
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Angel Doctor's 600+ medical escorts are not casual freelancers or temporary helpers. They are part of a trained, managed, and standardized offline service network designed to support international patients inside Chinese hospitals and clinics.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Every escort operates within a defined non-clinical service scope: registration assistance, department navigation, communication support, payment guidance, examination routing, pharmacy guidance, report collection, and follow-up coordination. Medical diagnosis and treatment decisions remain with licensed healthcare providers.
            </p>
            <div className="mt-7">
              <CTAButton cta="escort" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {escortPillars.map((p) => (
              <div key={p.label} className="rounded-xl border border-line bg-surface p-5 shadow-soft transition-all duration-200 hover:border-primary/10">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <BadgeCheck className="size-4 text-primary shrink-0" />
                  {p.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section className="border-y border-line bg-mist/40 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Process</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">How It Works</h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              A structured coordination process — before, during, and after your hospital or clinic visit in China.
            </p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-button">{s.step}</div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton cta="carePlan" />
            <p className="mt-4">
              <Link href="/how-it-works" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-strong">
                See the full process <ArrowRight className="size-3.5" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 7. Featured Destinations */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cities</p>
          <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Featured Medical Destinations</h2>
          <p className="mt-5 text-[15px] leading-7 text-muted">
            Coming from Hong Kong? Shenzhen is 40 minutes away. Need a health checkup before your next trip? We'll help you find the right city for your treatment.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link key={d.city} href={d.href} className="group block">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-card">
                <Badge variant="secondary" className="w-fit">{d.badge}</Badge>
                <h3 className="mt-4 font-sora text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{d.city}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{d.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-strong transition-colors">
                  View {d.city} medical travel <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/destinations" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-strong">
            Compare all destinations <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* 8. Why Angel Doctor */}
      <section className="border-y border-line bg-mist/40 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why Angel Doctor</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Why International Patients Choose Angel Doctor</h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Not just hospital access. A combination of AI-assisted matching, transparent planning, standardized local escorts, and clear medical boundaries.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyAngel.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-line bg-surface p-6 shadow-soft transition-all duration-200 hover:border-primary/10">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blush ring-1 ring-primary/5">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/why-angel-doctor" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-strong">
              Learn more about Angel Doctor <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Pricing Transparency */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cost Guidance</p>
          <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Pricing Transparency</h2>
          <p className="mt-5 text-[15px] leading-7 text-muted">
            Angel Doctor explains cost components clearly. We don't publish fake fixed prices, and we don't claim to be the cheapest option. We help you understand what goes into the total cost.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pricingComponents.map((pc) => (
            <div key={pc.label} className="rounded-2xl border border-line bg-surface p-6 shadow-soft transition-all duration-200 hover:border-primary/10">
              <h3 className="text-lg font-semibold text-foreground">{pc.label}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{pc.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm leading-6 text-muted">
          Estimated costs depend on provider confirmation, diagnosis, treatment plan, materials, doctor availability, medical record review, city preference, timeline, and follow-up needs.
        </p>
        <div className="mt-6 text-center">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-strong">
            Get an estimated cost range <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* 10. Featured Guides */}
      <section className="border-y border-line bg-mist/40 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Guides</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Featured Guides</h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Educational content to help you understand healthcare options in China before reaching out. Guides are designed to answer common questions and support informed decisions.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {guideCards.map((g) => (
              <Link key={g.href} href={g.href} className="group block">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-card">
                  <h3 className="font-sora text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{g.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{g.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-strong transition-colors">
                    Read guide <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/guides" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-strong">
              Browse all guides <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <FAQBlock faqs={homeFaqs} />

      {/* Final CTA */}
      <CTASection page={homePage} />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA page={homePage} />
    </>
  );
}
