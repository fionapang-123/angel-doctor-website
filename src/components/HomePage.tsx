import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, CheckCircle2, Stethoscope, Sparkles, Users, FileText, LineChart, HeartHandshake, Languages, ShieldCheck } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FAQBlock } from "@/components/FAQBlock";
import { CTASection } from "@/components/CTASection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { EscortScenesCarousel } from "@/components/EscortScenesCarousel";
import { createPageSchema } from "@/config/schema";
import type { FaqItem, LinkItem, PageContent } from "@/types/page";

const crumbs: LinkItem[] = [{ label: "Home", href: "/" }];

const treatments = [
  {
    title: "Dental Care",
    body: "Short-stay dental evaluation, implants, crowns, veneers, checkups, and treatment planning with provider matching and local support.",
    href: "/treatments/dental-care-china",
    icon: Stethoscope,
    image: "/images/treatments/dental-care-china-consultation.webp",
    imageAlt: "Dental care consultation and local medical escort support for international patients in China",
  },
  {
    title: "Health Checkup",
    body: "Preventive screening, imaging, blood tests, executive checkups, and report explanation support across Chinese cities.",
    href: "/treatments/health-checkup-china",
    icon: LineChart,
    image: "/images/treatments/health-checkup-china-imaging-support.webp",
    imageAlt: "Health checkup imaging support and care coordination for international patients in China",
  },
  {
    title: "Second Opinion",
    body: "Medical record preparation, department matching, specialist review coordination, and follow-up communication support.",
    href: "/treatments/medical-second-opinion-china",
    icon: FileText,
    image: "/images/escort-scenes/international-patient-lounge-support.png",
    imageAlt: "Medical second opinion coordination and patient support in China",
  },
  {
    title: "TCM Recovery",
    body: "Acupuncture, pain relief, sleep support, fatigue recovery, stress recovery, and wellness-oriented TCM programs.",
    href: "/treatments/tcm-recovery-china",
    icon: Sparkles,
    image: "/images/treatments/tcm-recovery-china-cupping-support.webp",
    imageAlt: "TCM recovery and pain relief support for international patients in China",
  },
];

const escortScenes = [
  {
    title: "Real local escort team",
    body: "Angel Doctor employees support international patients with hospital visit logistics, communication, and local coordination in China.",
    image: "/images/escort-scenes/angel-doctor-real-medical-escort-team-china.jpg",
    alt: "Angel Doctor real local medical escort team supporting international patients in China",
  },
  {
    title: "Reception and visit support",
    body: "Meet trained care coordinators who help with arrival, clinic flow, translation support, and practical visit tasks.",
    image: "/images/escort-scenes/angel-doctor-real-local-escort-reception-china.jpg",
    alt: "Angel Doctor local medical escort employees at a reception desk in China",
  },
  {
    title: "Arrival coordination",
    body: "Meet your escort, confirm the visit plan, and understand where to go first.",
    image: "/images/escort-scenes/medical-travel-arrival-coordination-china.png",
    alt: "Angel Doctor medical travel arrival coordination in China",
  },
  {
    title: "Hospital navigation",
    body: "Move through registration, departments, payment desks, and examination areas with local support.",
    image: "/images/escort-scenes/china-medical-escort-hospital-navigation.png",
    alt: "Medical escort guiding an international patient through a hospital in China",
  },
  {
    title: "Doctor communication",
    body: "Support communication during provider visits while clinical decisions remain with licensed clinicians.",
    image: "/images/escort-scenes/hospital-consultation-communication-support.png",
    alt: "Medical escort supporting doctor communication with international patients",
  },
  {
    title: "Checkup guidance",
    body: "Navigate screening steps, examination routing, report collection, and follow-up coordination.",
    image: "/images/escort-scenes/international-patient-checkup-guidance-china.png",
    alt: "Medical escort helping an international patient with a health checkup in China",
  },
  {
    title: "Visit support",
    body: "Coordinate waiting, clinic flow, basic logistics, and patient questions during the visit.",
    image: "/images/escort-scenes/international-patient-lounge-support.png",
    alt: "International patient receiving lounge support from a medical escort",
  },
  {
    title: "Practical care tasks",
    body: "Help with non-clinical visit tasks such as routing, payment guidance, and report pickup.",
    image: "/images/escort-scenes/patient-meal-guidance-support-china.png",
    alt: "Angel Doctor escort supporting practical patient care tasks in China",
  },
];

const steps = [
  { step: "1", title: "Tell us the need", body: "City, timing, care interest, and support needs." },
  { step: "2", title: "Compare options", body: "Understand provider type, pathway, and preparation." },
  { step: "3", title: "Prepare the visit", body: "Coordinate schedule, documents, and local support." },
  { step: "4", title: "Go with support", body: "Escort assistance during the hospital or clinic visit." },
];

const destinations = [
  {
    city: "Shenzhen",
    body: "Dental care, health checkups, TCM recovery, and cross-border access from Hong Kong.",
    href: "/destinations/shenzhen-medical-travel",
  },
  {
    city: "Guangzhou",
    body: "A southern China hub for TCM recovery, rehabilitation, health checkups, and specialist coordination.",
    href: "/destinations/guangzhou-medical-travel",
  },
  {
    city: "Shanghai",
    body: "Executive health checkups, international clinics, second opinions, and private healthcare access.",
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

const servicePackages = [
  {
    name: "Care Navigation",
    price: "Free + $39",
    desc: "Start with lightweight guidance, then add appointment preparation when you are ready.",
    features: [
      "Free dental pre-check",
      "Hospital or provider matching guidance",
      "Appointment help and visit checklist",
      "English coordination before the visit",
    ],
    cta: "carePlan" as const,
  },
  {
    name: "In-Hospital Support",
    price: "From $149",
    desc: "A trained local medical escort joins you during a hospital or clinic visit in China.",
    features: [
      "Local medical escort support",
      "Registration and payment assistance",
      "Clinic navigation and department routing",
      "Communication support and report collection",
    ],
    cta: "escort" as const,
  },
  {
    name: "Treatment Concierge",
    price: "From $499",
    desc: "For complex treatment planning, multiple provider options, or multi-visit coordination.",
    features: [
      "Multi-provider comparison",
      "Timeline and visit planning",
      "Treatment option coordination",
      "Extended follow-up support",
    ],
    cta: "carePlan" as const,
  },
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
  h1: "Efficient care. Fair price. Clear guidance.",
  intro: "Angel Doctor helps international patients plan hospital visits, compare care options, and arrange trained local medical escorts in China.",
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
      <section className="relative isolate min-h-[680px] overflow-hidden border-b border-white/10 bg-[#101828] sm:min-h-[700px] lg:min-h-[720px]">
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/angel-doctor-hero-hospital-access-poster.jpg"
          className="absolute inset-0 -z-30 hidden h-full w-full object-cover md:block"
        >
          <source src="/videos/angel-doctor-hero-hospital-access.mp4" type="video/mp4" />
        </video>
        <Image
          src="/videos/angel-doctor-hero-hospital-access-poster.jpg"
          alt=""
          width={1280}
          height={720}
          aria-hidden="true"
          className="hero-video-poster absolute inset-0 -z-30 hidden h-full w-full object-cover"
        />
        <Image
          src="/videos/angel-doctor-hero-mobile-escort.jpg"
          alt="Angel Doctor local medical escort guiding an international patient in a Chinese hospital lobby"
          width={1536}
          height={865}
          priority
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[58%_center] md:hidden"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(8,13,24,0.94)_0%,rgba(8,13,24,0.82)_38%,rgba(8,13,24,0.42)_68%,rgba(8,13,24,0.74)_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-20 h-44 bg-[linear-gradient(180deg,rgba(8,13,24,0.72)_0%,rgba(8,13,24,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-20 h-2/3 bg-[linear-gradient(0deg,rgba(8,13,24,0.98)_0%,rgba(8,13,24,0.72)_42%,rgba(8,13,24,0)_100%)]" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col px-4 pb-7 pt-8 sm:min-h-[700px] sm:px-6 lg:min-h-[720px] lg:px-8 lg:pt-10">
          <div className="pointer-events-none absolute left-4 right-4 top-32 z-10 hidden sm:left-6 sm:right-6 sm:top-40 md:block lg:left-8 lg:right-8 lg:top-52">
            <h1 className="max-w-[690px] font-sora text-[3rem] font-extrabold leading-[1.06] tracking-normal text-white sm:text-[4rem] lg:text-[4.75rem] xl:text-[5.25rem]">
              <span className="block">Efficient care.</span>
              <span className="block text-white/82">Fair price.</span>
              <span className="block">Clear guidance.</span>
            </h1>
          </div>

          <div className="relative z-10 mt-auto pb-2 md:hidden">
            <h1 className="font-sora text-[2.85rem] font-extrabold leading-[1.04] tracking-normal text-white">
              <span className="block">Efficient Care.</span>
                <span className="block text-white/80">Fair Price.</span>
                <span className="block">Clear Guidance.</span>
              </h1>
              <p className="mt-5 max-w-[21rem] text-base leading-7 text-white/80">
                Access China healthcare with hospital coordination and local medical escort support.
              </p>
              <div className="mt-6">
                <CTAButton cta="carePlan" className="w-full !bg-white !text-foreground shadow-[0_18px_42px_rgba(0,0,0,0.22)] hover:!bg-white/90 [&_svg]:!text-foreground" />
              </div>
              <div className="mb-10 mt-4 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-[12px] font-semibold leading-5 text-white/80 shadow-soft backdrop-blur-md">
                Healthcare group background · 200+ providers · 600+ trained escorts
              </div>
          </div>

          <div className="relative z-10 mt-auto hidden gap-3 pt-[23rem] sm:grid-cols-2 sm:pt-[28rem] md:grid lg:grid-cols-4 lg:pt-[24rem]">
            {[
              ["1998", "Healthcare group background"],
              ["200+", "Hospitals and healthcare providers"],
              ["600+", "Trained local medical escorts"],
              ["EN / CN", "English and Chinese support"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-xl border border-white/20 bg-white/10 p-5 shadow-soft backdrop-blur-md">
                <p className="font-sora text-3xl font-semibold leading-none text-white">{value}</p>
                <p className="mt-2 text-sm leading-5 text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Service */}
      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-xl border border-line bg-white shadow-soft">
            <Image
              src="/images/escort-scenes/hospital-consultation-communication-support.png"
              alt="Angel Doctor coordinating communication between international patients and a healthcare provider in China"
              width={1535}
              height={1024}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Core Service</p>
            <h2 className="mt-4 max-w-2xl font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              China Healthcare, Guided End to End
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted">
              Compare options, prepare visits, coordinate appointments, and arrange local support in China.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Hospital and provider matching",
                "Visit preparation and coordination",
                "Local medical escort support",
                "Follow-up communication support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 rounded-lg border border-line bg-surface px-4 py-3 text-sm font-medium text-foreground shadow-soft">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton cta="carePlan" />
              <CTAButton cta="escort" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Medical Escort Scenes */}
      <section className="border-y border-line bg-mist/70 py-18 reveal-on-scroll sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">600+ Trained Escorts</p>
              <h2 className="mt-4 max-w-3xl font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Local medical escorts, managed as a service.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Non-clinical hospital support with clear medical boundaries.
            </p>
          </div>

          <EscortScenesCarousel scenes={escortScenes} />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              cta="escort"
              className="!bg-primary !text-white shadow-button hover:!bg-primary-strong [&_svg]:!text-white"
            />
            <CTAButton cta="carePlan" variant="secondary" />
          </div>
        </div>
      </section>

      {/* 4. Service Pricing */}
      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Service Fees</p>
          <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Clear Service Fees Before You Commit
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-muted">
            Angel Doctor service fees are separate from hospital and provider medical fees.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {servicePackages.map((pkg) => (
            <article
              key={pkg.name}
              className="flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card sm:p-7"
            >
              <h3 className="font-sora text-2xl font-semibold text-foreground">{pkg.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{pkg.desc}</p>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Starting at</p>
                <p className="mt-2 font-sora text-4xl font-semibold leading-none text-foreground">{pkg.price}</p>
              </div>
              <ul className="mt-7 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-muted">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton cta={pkg.cta} className="w-full" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-line bg-white p-5 text-center shadow-soft">
          <p className="text-sm leading-6 text-muted">
            Medical fees are paid directly to providers. Angel Doctor does not publish fake fixed treatment prices or guarantee outcomes.
          </p>
          <Link href="/pricing" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-strong">
            View full pricing guidance <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* 5. Popular Treatments */}
      <section className="border-y border-line bg-mist/70 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">What we can coordinate for you</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Popular Treatments</h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Start with the care need that matches your trip.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t) => {
              const Icon = t.icon;
              return (
                <Link key={t.href} href={t.href} className="group block">
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card">
                    <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                      <Image
                        src={t.image}
                        alt={t.imageAlt}
                        width={768}
                        height={576}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(0deg,rgba(16,24,40,0.48)_0%,rgba(16,24,40,0)_100%)]" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary-soft ring-1 ring-primary/10">
                        <Icon className="size-4.5 text-primary" />
                      </div>
                      <h3 className="mt-4 font-sora text-xl font-semibold leading-tight text-foreground">{t.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{t.body}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary-strong">
                        Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
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

      {/* 5. How It Works */}
      <section className="border-y border-line bg-mist/70 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Process</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">How It Works</h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Before, during, and after your visit in China.
            </p>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-xl border border-line bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="border-b border-line p-6 last:border-b-0 sm:[&:nth-child(2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <div className="text-sm font-bold text-primary">0{s.step}</div>
                <h3 className="mt-8 text-lg font-semibold text-foreground">{s.title}</h3>
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

      {/* 6. Featured Destinations */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Cities</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Featured Medical Destinations</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Compare cities by care type, timing, and local support.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link key={d.city} href={d.href} className="group block">
              <div className="flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card">
                <h3 className="font-sora text-2xl font-semibold text-foreground">{d.city}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-muted">{d.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary-strong">
                  View city guide <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
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

      {/* 7. Why Angel Doctor */}
      <section className="border-y border-line bg-mist/70 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Why Angel Doctor</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Why International Patients Choose Angel Doctor</h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Matching, planning, local escorts, and clear medical boundaries.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyAngel.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 rounded-xl border border-line bg-white p-6 shadow-soft transition-all duration-200 hover:border-primary/20">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary-soft ring-1 ring-primary/10">
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
            <p className="mt-3">
              <Link href="/why-angel-doctor#brand-film" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary">
                Watch the Jumper brand film <ArrowRight className="size-3.5" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 9. Featured Guides */}
      <section className="border-y border-line bg-mist/70 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Guides</p>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Featured Guides</h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Practical guides for planning healthcare in China.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {guideCards.map((g) => (
              <Link key={g.href} href={g.href} className="group block">
                <div className="flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card">
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
