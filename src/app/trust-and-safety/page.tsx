import Link from "next/link";
import { ArrowRight, Shield, FileText } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Badge } from "@/components/ui/badge";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Trust & Safety", href: "/trust-and-safety" },
];

const sections = [
  {
    title: "Clear Role of Angel Doctor",
    body: "Angel Doctor helps international patients navigate healthcare in China with clear coordination, trained local support, and transparent communication before, during, and after the hospital visit. We are a care coordination and medical travel support platform — not a hospital, not a clinic, and not a medical practice.",
  },
  {
    title: "Hospital & Provider Coordination",
    body: "Angel Doctor identifies suitable hospitals and providers based on your medical needs, not commercial arrangements. Our recommendations are based on care fit, department availability, city preference, language support needs, and provider capability — not promotional partnerships.",
  },
  {
    title: "Trained Local Medical Escorts",
    body: "Our escorts are trained in hospital navigation, registration processes, communication support, and patient guidance. They provide on-the-ground support during your hospital visit — but they do not make medical decisions. Medical diagnosis, treatment decisions, prescriptions, and procedures are made by licensed healthcare providers.",
  },
  {
    title: "Translation & Communication Support",
    body: "English-speaking coordination and translation support is available throughout your care journey — from initial inquiry and record preparation through hospital visits and follow-up communication.",
  },
  {
    title: "Transparent Pricing Guidance",
    body: "Angel Doctor provides pricing guidance before you commit to a care plan. We do not publish fake fixed prices. Estimated costs are based on provider confirmation, treatment type, materials, doctor availability, and diagnostic requirements. Final costs are confirmed by the provider.",
  },
  {
    title: "Privacy & Data Protection",
    body: "Medical inquiry information is handled with care. Records shared for care coordination are used only for appointment planning, hospital matching, and provider communication. For full details, see our Privacy Policy.",
  },
  {
    title: "Service Boundaries",
    body: "Angel Doctor provides care coordination, translation support, appointment assistance, and local medical escort services. Angel Doctor does not provide medical diagnosis, treatment, prescriptions, or emergency medical care. Angel Doctor does not guarantee specific doctor availability or treatment outcomes.",
  },
];

export default function TrustAndSafetyPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl pt-10">
            <Badge className="w-fit" variant="secondary">Patient Protection</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Trust & Safety for Medical Travel to China
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Learn how Angel Doctor supports international patients with clear care coordination, trained medical escorts, transparent communication, privacy protection, and medical service boundaries.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {sections.map((s, i) => (
        <section key={i} className={i % 2 === 1 ? "border-y border-line bg-mist/50" : ""}>
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blush">
                <Shield className="size-4 text-primary" />
              </div>
              <div>
                <h2 className="font-sora text-xl font-semibold text-foreground">{s.title}</h2>
                <p className="mt-3 text-base leading-7 text-muted">{s.body}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/legal/medical-disclaimer" className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 shadow-soft transition hover:border-primary/20">
            <FileText className="size-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Medical Disclaimer</p>
              <p className="text-xs text-muted">Legal boundaries & role definition</p>
            </div>
          </Link>
          <Link href="/legal/privacy-policy" className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 shadow-soft transition hover:border-primary/20">
            <Shield className="size-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Privacy Policy</p>
              <p className="text-xs text-muted">How we handle your information</p>
            </div>
          </Link>
          <Link href="/legal/terms" className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 shadow-soft transition hover:border-primary/20">
            <FileText className="size-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Terms of Use</p>
              <p className="text-xs text-muted">Website & service terms</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <AmbientBlobs />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Plan your care safely</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Submit a care plan request. A coordinator responds within 1-2 business days with clear options and no commitment.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
