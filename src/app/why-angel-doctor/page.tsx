import Link from "next/link";
import { ArrowRight, Building2, Globe, Shield, Users } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Badge } from "@/components/ui/badge";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Why Angel Doctor", href: "/why-angel-doctor" },
];

export default function WhyAngelDoctorPage() {
  return (
    <main>
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
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Four pillars */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Four Pillars</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">What Makes Angel Doctor Different</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { icon: Building2, title: "Real Healthcare Operations Since 1998", body: "Angel Doctor is backed by a healthcare group founded in 1998. We are not a startup aggregator or a foreign marketing agency. We operate from within China's healthcare system with long-term hospital and provider relationships." },
            { icon: Globe, title: "200+ Coordination Network", body: "Our coordination network spans public tertiary hospitals, specialty hospitals, dental providers, health checkup centers, TCM institutions, and international clinics across 11 major Chinese cities." },
            { icon: Users, title: "Trained Local Medical Escorts", body: "600+ trained escorts in major cities provide English-speaking support — hospital registration, navigation, translation, payment guidance, and follow-up coordination." },
            { icon: Shield, title: "Clear Medical Boundaries", body: "Angel Doctor provides care coordination, not medical diagnosis or treatment. We set clear expectations about what we do and what is the role of licensed healthcare providers." },
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
      </section>

      {/* Comparison */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">The Difference</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Angel Doctor vs. Alternatives</h2>
          <div className="mt-8 overflow-x-auto">
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
                {[
                  ["China healthcare operations experience", "✓", "✗", "Varies"],
                  ["Local English-speaking escorts", "✓", "✗", "Sometimes"],
                  ["Real hospital photos and data", "✓", "Not always", "Stock images"],
                  ["AI-assisted hospital matching", "✓", "✗", "✗"],
                  ["Transparent pricing guidance", "✓", "You guess", "Hard to verify"],
                  ["Medical boundary clarity", "✓", "✗", "Often missing"],
                  ["Coordinator responds in 1-2 days", "✓", "N/A", "Varies"],
                ].map((r, i) => (
                  <tr key={i} className="text-muted">
                    <td className="py-3 pr-4 font-medium text-foreground">{r[0]}</td>
                    <td className="py-3 pr-4 text-primary">{r[1]}</td>
                    <td className="py-3 pr-4">{r[2]}</td>
                    <td className="py-3">{r[3]}</td>
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
              Free care plan request. No commitment. A coordinator responds within 1-2 business days.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
            <p className="mt-5 text-xs text-muted">Free · 2 minutes · No commitment</p>
          </div>
        </div>
      </section>
    </main>
  );
}
