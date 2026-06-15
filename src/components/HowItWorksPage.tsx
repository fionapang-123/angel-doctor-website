import Link from "next/link";
import {
  ArrowRight, BadgeCheck, CalendarClock, CheckCircle2, ChevronDown,
  ClipboardList, Clock, HeartHandshake, Languages, MapPinned,
  MessageCircle, ShieldCheck, Sparkles, Stethoscope, Users,
} from "lucide-react";
import { CTA } from "@/config/cta";
import { siteConfig, medicalDisclaimer } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import type { LinkItem } from "@/types/page";

const crumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
];

/* ───── 0. Schema (injected via dangerouslySetInnerHTML like SchemaJsonLd) ───── */
const howToSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      slogan: siteConfig.slogan,
      description: siteConfig.description,
      areaServed: ["China", "United States", "United Kingdom", "Canada", "Australia", "Southeast Asia", "Middle East"],
      knowsAbout: [
        "medical travel to China", "hospital matching in China", "medical escort services",
        "dental care in China", "health checkups in China", "medical second opinions in China",
        "traditional Chinese medicine recovery",
      ],
      contactPoint: [{
        "@type": "ContactPoint", contactType: "customer support",
        email: siteConfig.contactEmail, availableLanguage: ["English", "Chinese"], areaServed: "International",
      }],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      description: "Medical travel coordination, hospital matching, and local medical escort support for international patients seeking healthcare in China.",
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: siteConfig.locale,
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/how-it-works#webpage`,
      url: `${siteConfig.url}/how-it-works`,
      name: "How Medical Travel to China Works | Angel Doctor",
      description: "A three-stage process: tell us your needs, we plan your care, you arrive with local support. Angel Doctor coordinates every step for international patients seeking healthcare in China.",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "How It Works", item: `${siteConfig.url}/how-it-works` },
      ],
    },
    {
      "@type": "HowTo",
      "@id": `${siteConfig.url}/how-it-works#howto`,
      name: "How to access healthcare in China with Angel Doctor",
      description: "A three-stage process for international patients: share your care needs, receive a coordinated care plan, and arrive in China with trained local medical escort support.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Tell us about your healthcare needs",
          text: "Fill out a lightweight inquiry form (2 minutes) with your treatment interest, preferred city in China, travel timeline, language needs, and whether you need local hospital support. No medical records required for initial inquiry.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "We plan your care in 1–3 days",
          text: "Angel Doctor uses AI-assisted matching to identify suitable hospitals, departments, or clinics. A coordinator prepares a Care Plan with provider options, estimated timelines, pricing guidance, and what to prepare before your visit.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "You arrive — we support you in person",
          text: "A trained local medical escort meets you at the hospital or clinic to help with registration, department navigation, communication, payment guidance, examination routing, pharmacy, report collection, and follow-up coordination.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/how-it-works#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does the whole process take from inquiry to hospital visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After you submit your inquiry (2 minutes), a coordinator typically responds within 1–3 business days. The timeline from inquiry to your actual hospital visit depends on your travel dates, provider availability, and any medical record review needed. Some patients complete a visit within 1–2 weeks of their inquiry, while others plan months ahead.",
          },
        },
        {
          "@type": "Question", name: "Do I need to prepare medical records before contacting Angel Doctor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You can submit an inquiry with just your treatment interest, preferred city, and contact details. For complex conditions or second opinions, a coordinator may ask for relevant medical records later — but they are never required for your first inquiry.",
          },
        },
        {
          "@type": "Question", name: "Who will accompany me at the hospital in China?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A trained local medical escort from Angel Doctor's network of 600+ standardized escorts. Escorts are trained in hospital workflow, patient communication, privacy rules, and service standards. They support registration, navigation, translation, payment guidance, and follow-up coordination — but do not provide medical diagnosis or clinical decisions.",
          },
        },
        {
          "@type": "Question", name: "Can Angel Doctor guarantee me an appointment with a specific doctor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Appointment availability depends on the provider's department capacity, doctor schedule, your medical condition, and record review when required. Angel Doctor coordinates appointment planning and preparation — we do not guarantee access to any specific doctor, hospital, or treatment outcome.",
          },
        },
        {
          "@type": "Question", name: "How much will it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Total cost has several components: hospital/provider medical fees (paid directly by you to the provider), Angel Doctor coordination fees, medical escort fees, and your travel/accommodation costs. Angel Doctor provides pricing guidance during care coordination. We do not publish fake fixed prices or claim to be the guaranteed cheapest option.",
          },
        },
        {
          "@type": "Question", name: "What if I don't speak Chinese?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Angel Doctor provides English-speaking coordination and translation support. Your medical escort can help with in-hospital communication between you and hospital staff, doctors, and pharmacy. For additional language needs, please mention this when you submit your inquiry.",
          },
        },
        {
          "@type": "Question", name: "Is this service only for complex medical conditions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Angel Doctor supports a wide range of needs — from dental checkups and executive health screenings to TCM recovery, specialist consultations, and second opinions. Whether you need a one-day dental visit or multi-stage specialist coordination, the process starts the same way: tell us what you need.",
          },
        },
      ],
    },
  ],
};

/* ───── Shared section header ───── */
function SectionLabel({ children }: { children: string }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{children}</p>;
}

/* ───── 2. Who This Is For ───── */
const fitScenarios = [
  { icon: Stethoscope, title: "Dental treatment is too expensive at home", desc: "You need implants, crowns, or veneers and want to explore cost-effective options in China." },
  { icon: LineChart, title: "You want a comprehensive health checkup", desc: "Executive screening, imaging, blood work, and specialist review — coordinated in one trip." },
  { icon: FileText, title: "You need a medical second opinion", desc: "You have a diagnosis and want another specialist's perspective from a Chinese hospital." },
  { icon: Sparkles, title: "You're interested in TCM recovery", desc: "Acupuncture, pain relief, sleep support, fatigue recovery, or wellness programs in China." },
  { icon: Languages, title: "You don't speak Chinese or know the system", desc: "You want to access Chinese healthcare but language barriers and unfamiliar hospital processes feel overwhelming." },
  { icon: MessageCircle, title: "You already have a plan but need local support", desc: "You've booked a hospital visit and just need someone reliable by your side — registration, navigation, translation." },
];

/* ───── 4. Escort system ───── */
const escortTasks = [
  "Hospital or clinic arrival support",
  "Registration and check-in assistance",
  "Department and floor navigation",
  "Communication and translation support",
  "Payment and billing guidance",
  "Examination and test routing",
  "Pharmacy and prescription guidance",
  "Report and result collection",
  "Follow-up appointment coordination",
  "Patient handoff to Angel Doctor coordinators",
];

function LineChart(props: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
}

function FileText(props: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>;
}

function LineChartIcon({ className }: { className?: string }) { return <LineChart className={className} />; }
function FileTextIcon({ className }: { className?: string }) { return <FileText className={className} />; }

/* ══════════════════════════════════════════════════════════════ */

export function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c") }}
      />

      {/* ═══ 1. Hero ═══ */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,248,251,0.82),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <div className="mx-auto max-w-3xl pt-10 text-center">
            <Badge className="mx-auto w-fit" variant="secondary">{siteConfig.slogan}</Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              How Medical Travel to China Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
              A simple three-stage process designed for international patients — from sharing your needs to arriving in China with a trained medical escort by your side.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CTAButton cta="carePlan" className="sm:w-fit" />
              <a href="#stage-1" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted transition hover:border-primary/35 hover:text-primary">
                See how we help <ChevronDown className="size-4" />
              </a>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
              <Clock className="size-3.5" />
              First step takes 2 minutes · No medical records required
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 2. Who This Is For ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Is this for you?</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            This process is designed for you if...
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fitScenarios.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-card">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Not sure if this fits your situation? <Link href="/contact" className="font-semibold text-primary hover:underline">Tell us what you need</Link> — a coordinator will help clarify.
        </p>
      </section>

      {/* ═══ 3. Three Stages ═══ */}
      <section className="border-y border-border bg-mist/50" id="stage-1">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Your Journey</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Three stages. Less complexity than you expect.
            </h2>
          </div>

          {/* Stage 1 */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="order-2 lg:order-1 rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white">1</div>
                <h3 className="text-xl font-semibold text-foreground">You tell us what you need</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-muted">
                Fill out a lightweight form — treatment interest, preferred city, travel timeline, and contact details. No medical records, no passport uploads, no commitment.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-muted">
                {[
                  "Pick your treatment: dental, checkup, second opinion, TCM, or other",
                  "Choose a target city: Shenzhen, Guangzhou, Shanghai",
                  "Tell us when you plan to be in China",
                  "Let us know if you need a medical escort",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                <Clock className="size-4" /> About 2 minutes
              </p>
              <div className="mt-5">
                <CTAButton cta="carePlan" />
              </div>
            </div>
            <div className="order-1 flex justify-center lg:order-2 lg:flex-col lg:items-center lg:gap-6">
              <div className="hidden size-3 rounded-full bg-primary/30 lg:block" />
              <div className="hidden h-16 w-px bg-border lg:block" />
              <div className="text-sm font-semibold text-muted lg:-rotate-90 lg:whitespace-nowrap">↓</div>
              <div className="hidden h-16 w-px bg-border lg:block" />
              <div className="hidden size-3 rounded-full bg-primary/30 lg:block" />
            </div>
            <div className="order-3 hidden text-center text-sm text-muted lg:flex lg:items-center lg:justify-center">
              <div className="rounded-2xl border border-dashed border-border p-6">
                <p className="font-semibold text-foreground">After you send</p>
                <p className="mt-2">Coordinator reviews your request</p>
                <ArrowRight className="mx-auto mt-3 size-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="order-2 rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white">2</div>
                <h3 className="text-xl font-semibold text-foreground">We plan your care in 1–3 days</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-muted">
                Angel Doctor uses AI-assisted matching to identify suitable hospitals, departments, or clinics for your needs. A coordinator prepares your Care Plan — provider options, estimated timelines, pricing guidance, and what to bring.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-muted">
                {[
                  "AI-assisted hospital and provider matching",
                  "Care Plan with provider options, timelines, and cost guidance",
                  "Appointment coordination with your chosen provider",
                  "Clear instructions on what to prepare before your visit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                <CalendarClock className="size-4" /> Typically 1–3 business days
              </p>
              <p className="mt-3 text-sm text-muted">
                Want to understand pricing before you commit?{" "}
                <Link href="/pricing" className="font-semibold text-primary hover:underline">View pricing guidance →</Link>
              </p>
            </div>
            <div className="order-1 hidden lg:flex lg:flex-col lg:items-center lg:gap-6">
              <div className="size-3 rounded-full bg-primary/30" />
              <div className="h-16 w-px bg-border" />
              <div className="text-sm font-semibold text-muted -rotate-90 whitespace-nowrap">↓</div>
              <div className="h-16 w-px bg-border" />
              <div className="size-3 rounded-full bg-primary/30" />
            </div>
            <div className="order-3 hidden text-center text-sm text-muted lg:flex lg:items-center lg:justify-center">
              <div className="rounded-2xl border border-dashed border-border p-6">
                <p className="font-semibold text-foreground">Next milestone</p>
                <p className="mt-2">Your hospital visit date is confirmed</p>
                <ArrowRight className="mx-auto mt-3 size-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white">3</div>
              <h3 className="text-xl font-semibold text-foreground">You arrive — we support you in person</h3>
            </div>
            <p className="mt-4 text-base leading-7 text-muted">
              On the day of your visit, a trained local medical escort meets you at the hospital or clinic. They handle navigation, communication, and logistics while you focus on your care — because accessing healthcare abroad should feel supported, not stressful.
            </p>

            {/* ═══ 4. Medical Escort System ═══ (embedded in stage 3) */}
            <div className="mt-8 rounded-xl border border-primary/15 bg-primary-soft/50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
                  <Users className="size-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Your Medical Escort Is Not a Freelancer</h4>
                  <p className="text-sm text-muted">600+ escorts. One standardized service system.</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: ClipboardList, title: "Training system", body: "Every escort completes structured training covering hospital workflow, patient communication, privacy rules, and service procedures before supporting patients." },
                  { icon: ShieldCheck, title: "Service standards", body: "Clear scope of non-clinical support tasks, documented expectations, and coordinator oversight for every visit." },
                  { icon: HeartHandshake, title: "Privacy agreements", body: "Patient information and visit details are handled under defined data protection rules and confidentiality agreements." },
                  { icon: BadgeCheck, title: "Complaint handling", body: "Patients can raise concerns, request follow-up, or report service issues through Angel Doctor's complaint system." },
                  { icon: Sparkles, title: "Emergency escalation", body: "Urgent issues during service can be escalated internally. For medical emergencies, contact local emergency services immediately." },
                  { icon: CalendarClock, title: "Service records", body: "Every escort visit is documented with task tracking and coordinator follow-up where available." },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex gap-3 rounded-xl border border-border bg-white p-4">
                      <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <div>
                        <h5 className="text-sm font-semibold text-foreground">{p.title}</h5>
                        <p className="mt-1 text-sm leading-6 text-muted">{p.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6">
                <h5 className="text-sm font-semibold text-foreground">What your escort can support during your visit</h5>
                <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {escortTasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" /> {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-lg border border-border bg-white p-4">
                <p className="text-sm leading-6 text-muted">
                  <strong className="text-foreground">Important boundary:</strong> Medical escorts provide non-clinical support. They do not provide medical diagnosis, treatment decisions, prescriptions, or clinical recommendations. All clinical decisions are made by licensed healthcare providers.
                </p>
              </div>

              <div className="mt-5">
                <CTAButton cta="escort" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. Timeline Reference ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Timeline</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            How long does this take?
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { label: "From inquiry to Care Plan", time: "1–3 business days", desc: "A coordinator reviews your request, identifies suitable provider options, and prepares your Care Plan with timelines and pricing guidance." },
            { label: "From Care Plan to hospital visit", time: "Depends on you", desc: "Once you confirm a provider and date, Angel Doctor coordinates the appointment. Simple visits can happen within days; complex cases may take longer based on provider availability." },
            { label: "On the day of your visit", time: "Half-day to full-day", desc: "Your medical escort stays with you for the duration you need — half-day for a dental checkup, full-day for a comprehensive health screening, or multi-day for staged treatment." },
          ].map((t) => (
            <div key={t.label} className="rounded-2xl border border-border bg-white p-6 shadow-card text-center">
              <p className="text-3xl font-bold text-primary">{t.time}</p>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{t.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Timelines depend on provider availability, department capacity, doctor schedules, and any medical record review needed. A coordinator gives you a realistic estimate after reviewing your request.
        </p>
      </section>

      {/* ═══ 6. FAQ ═══ */}
      <section className="border-y border-border bg-mist/50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">FAQ</h2>
          </div>
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-white">
            {[
              { q: "How long does the whole process take from inquiry to hospital visit?", a: "After you submit your inquiry (2 minutes), a coordinator typically responds within 1–3 business days. The timeline from inquiry to your actual hospital visit depends on your travel dates, provider availability, and any medical record review needed. Some patients complete a visit within 1–2 weeks of their inquiry, while others plan months ahead." },
              { q: "Do I need to prepare medical records before contacting Angel Doctor?", a: "No. You can submit an inquiry with just your treatment interest, preferred city, and contact details. For complex conditions or second opinions, a coordinator may ask for relevant medical records later — but they are never required for your first inquiry." },
              { q: "Who will accompany me at the hospital in China?", a: "A trained local medical escort from Angel Doctor's network of 600+ standardized escorts. Escorts are trained in hospital workflow, patient communication, privacy rules, and service standards. They support registration, navigation, translation, payment guidance, and follow-up coordination — but do not provide medical diagnosis or clinical decisions." },
              { q: "Can Angel Doctor guarantee me an appointment with a specific doctor?", a: "No. Appointment availability depends on the provider's department capacity, doctor schedule, your medical condition, and record review when required. Angel Doctor coordinates appointment planning and preparation — we do not guarantee access to any specific doctor, hospital, or treatment outcome." },
              { q: "How much will it cost?", a: "Total cost has several components: hospital/provider medical fees (paid directly by you to the provider), Angel Doctor coordination fees, medical escort fees, and your travel/accommodation costs. Angel Doctor provides pricing guidance during care coordination. We do not publish fake fixed prices or claim to be the guaranteed cheapest option." },
              { q: "What if I don't speak Chinese?", a: "Angel Doctor provides English-speaking coordination and translation support. Your medical escort can help with in-hospital communication between you and hospital staff, doctors, and pharmacy. For additional language needs, please mention this when you submit your inquiry." },
              { q: "Is this service only for complex medical conditions?", a: "No. Angel Doctor supports a wide range of needs — from dental checkups and executive health screenings to TCM recovery, specialist consultations, and second opinions. Whether you need a one-day dental visit or multi-stage specialist coordination, the process starts the same way: tell us what you need." },
            ].map((faq) => (
              <details key={faq.q} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold text-foreground">
                  {faq.q}
                  <ChevronDown className="size-4 shrink-0 text-muted transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. Trust Bar ═══ */}
      <TrustBar />

      {/* ═══ 8. Final Dual CTA ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Ready to understand your options?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            Two ways to start. Both are free. Neither requires medical records.
          </p>
          <div className="mt-8 flex flex-col items-center gap-8">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8 w-full">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
                <ClipboardList className="size-4" /> For general care planning
              </div>
              <h3 className="mt-3 text-xl font-semibold text-foreground">Get Your Care Plan</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                You want help understanding care options in China — which city, which provider type, what to expect, how much it might cost.
              </p>
              <div className="mt-5">
                <CTAButton cta="carePlan" className="w-full sm:w-auto" />
              </div>
            </div>
            <div className="text-sm text-muted">or</div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8 w-full">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
                <MapPinned className="size-4" /> For local hospital support
              </div>
              <h3 className="mt-3 text-xl font-semibold text-foreground">Book Local Medical Escort</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                You already know you need in-hospital or in-clinic support — registration, navigation, communication, payment guidance — and want a trained escort by your side.
              </p>
              <div className="mt-5">
                <CTAButton cta="escort" className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. Medical Disclaimer ═══ */}
      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-mist p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-foreground">Medical Disclaimer</h2>
          <p className="mt-3 text-sm leading-6 text-muted">{medicalDisclaimer}</p>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="sticky bottom-0 z-30 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
        <CTAButton cta="carePlan" className="w-full" />
      </div>
    </>
  );
}

// Re-export the icon components used in the module scope
export { LineChartIcon, FileTextIcon };
