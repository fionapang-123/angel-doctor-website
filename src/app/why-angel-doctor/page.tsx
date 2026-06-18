import Image from "next/image";
import { Building2, Globe, Shield, Users } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Badge } from "@/components/ui/badge";
import { getPage } from "@/data/pages";
import { createMetadata } from "@/config/metadata";
import { createPageSchema } from "@/config/schema";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { AnswerBlock } from "@/components/AnswerBlock";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Why Angel Doctor", href: "/why-angel-doctor" },
];

const comparisonRows = [
  { label: "China healthcare operations experience", angelDoctor: "Yes", self: "No", agent: "Varies" },
  { label: "Local English-speaking escorts", angelDoctor: "Yes", self: "No", agent: "Sometimes" },
  { label: "Real hospital photos and data", angelDoctor: "Yes", self: "Not always", agent: "Stock images" },
  { label: "AI-assisted hospital matching", angelDoctor: "Yes", self: "No", agent: "No" },
  { label: "Transparent pricing guidance", angelDoctor: "Yes", self: "You guess", agent: "Hard to verify" },
  { label: "Medical boundary clarity", angelDoctor: "Yes", self: "No", agent: "Often missing" },
  { label: "Coordinator responds in 1-2 days", angelDoctor: "Yes", self: "N/A", agent: "Varies" },
];

const page = getPage("/why-angel-doctor");

export const metadata = createMetadata(page);

export default function WhyAngelDoctorPage() {
  const schema = createPageSchema(page);
  return (
    <main>
      <SchemaJsonLd data={schema} />
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl pt-10">
            <Badge className="w-fit" variant="secondary">Our Difference</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Why Angel Doctor
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Choosing medical travel support is a trust decision. Angel Doctor is built on decades of healthcare operations in China — not a marketing layer over a directory.
            </p>
            <div className="mt-7">
              <CTAButton cta="carePlan" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      <AnswerBlock title="Why do patients choose Angel Doctor for medical travel in China?">
        <p>
          Patients choose Angel Doctor because it combines China healthcare operations experience, hospital and provider coordination, trained local medical escorts, transparent service boundaries, and English-speaking support. Angel Doctor coordinates the journey; licensed healthcare providers make diagnosis and treatment decisions.
        </p>
      </AnswerBlock>

      {/* Jumper Brand Film */}
      <section id="brand-film" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Jumper Brand Film</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              The Jumper healthcare group behind Angel Doctor
            </h2>
            <div className="mt-4 space-y-3 text-base leading-7 text-muted">
              <p>
                This Jumper brand film provides background on the healthcare service operations, care environment, and patient support culture behind Angel Doctor.
              </p>
              <p>
                Angel Doctor is a Jumper healthcare sub-brand focused on international patient coordination and medical travel support in China.
              </p>
              <p>
                Angel Doctor helps with hospital and provider matching, appointment preparation, translation support, local medical escort support, arrival coordination when arranged, and follow-up communication.
              </p>
              <p className="text-sm leading-6">
                Jumper and Angel Doctor do not provide diagnosis, treatment decisions, prescriptions, procedures, guaranteed appointments, or guaranteed outcomes. Clinical decisions are made by licensed healthcare providers.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-soft">
            <div className="aspect-video w-full bg-foreground">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/Fg5OjppbMhU"
                title="Jumper brand film: healthcare group background behind Angel Doctor"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="border-t border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Four Pillars</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">What Makes Angel Doctor Different</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { icon: Building2, title: "Real Healthcare Operations Since 1998", body: "Angel Doctor is backed by a healthcare group founded in 1998. We are not a startup aggregator or a foreign marketing agency. We operate from within China's healthcare system with long-term hospital and provider relationships." },
            { icon: Globe, title: "200+ Coordination Network", body: "Our coordination network spans public tertiary hospitals, specialty hospitals, dental providers, health checkup centers, TCM institutions, and international clinics across 11 major Chinese cities." },
            { icon: Users, title: "Trained Local Medical Escorts", body: "600+ trained escorts in major cities provide English-speaking support — hospital registration, navigation, translation, payment guidance, and follow-up coordination." },
            { icon: Shield, title: "Angel Doctor Brand Since 2015", body: "The Angel Doctor brand was founded in 2015 and serves nearly 20,000 patients each year through healthcare coordination, local medical escort support, and structured offline patient services." },
          ].map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="flex gap-4 rounded-2xl border border-line bg-surface p-6 shadow-soft">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blush">
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sora text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{p.body}</p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* Jumper compliance background */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Trust Background</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Jumper Healthcare Group Background
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Angel Doctor is a Jumper healthcare sub-brand. Jumper&apos;s international compliance and quality-system experience is shown as group background, not as medical-service certification for Angel Doctor.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-4 shadow-soft sm:p-6">
              <div className="overflow-hidden rounded-xl border border-line bg-white p-3">
                <Image
                  src="/images/trust/jumper-healthcare-compliance-logos.png"
                  alt="Jumper healthcare group compliance logos including INMETRO, FDA, IC, ISO9000, CMDCAS, CE, FCC, and ISO13485"
                  width={1165}
                  height={164}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 640px, calc(100vw - 56px)"
                />
              </div>
              <p className="mt-4 text-xs leading-5 text-muted">
                Certifications and registrations may apply to Jumper, specific products, or quality systems. Angel Doctor is a healthcare coordination and medical travel support service, not a medical provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">The Difference</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Angel Doctor vs. Alternatives</h2>
          <div className="mt-8 grid gap-3 md:hidden">
            {comparisonRows.map((row) => (
              <div key={row.label} className="rounded-2xl border border-line bg-surface p-5 shadow-soft">
                <p className="text-sm font-semibold leading-6 text-foreground">{row.label}</p>
                <div className="mt-4 grid gap-2 text-sm">
                  <div className="flex items-center justify-between gap-3 rounded-xl bg-blush px-3 py-2">
                    <span className="font-medium text-foreground">Angel Doctor</span>
                    <span className="font-semibold text-primary">{row.angelDoctor}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-xl bg-mist px-3 py-2 text-muted">
                    <span>Searching yourself</span>
                    <span>{row.self}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-xl bg-mist px-3 py-2 text-muted">
                    <span>Generic agent</span>
                    <span>{row.agent}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="pb-3 pr-4 font-semibold text-foreground"></th>
                  <th className="pb-3 pr-4 font-semibold text-primary">Angel Doctor</th>
                  <th className="pb-3 pr-4 font-medium text-muted">Googling hospitals yourself</th>
                  <th className="pb-3 font-medium text-muted">Generic medical tourism agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="text-muted">
                    <td className="py-3 pr-4 font-medium text-foreground">{row.label}</td>
                    <td className="py-3 pr-4 text-primary">✓</td>
                    <td className="py-3 pr-4">{row.self === "No" ? "✗" : row.self}</td>
                    <td className="py-3">{row.agent === "No" ? "✗" : row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <AmbientBlobs />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Experience the Angel Doctor difference</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              A coordinator reviews your needs and responds within 1–2 business days with clear guidance on options, timelines, and next steps.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>
      <StickyMobileCTA page={{ slug: "/why-angel-doctor", cta: "carePlan" }} />
    </main>
  );
}
