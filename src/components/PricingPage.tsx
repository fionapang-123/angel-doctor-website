import { CheckCircle2, HelpCircle } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Badge } from "@/components/ui/badge";
import { AnswerBlock } from "@/components/AnswerBlock";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
];

const packages = [
  {
    name: "Care Navigation",
    price: "Free + $39",
    desc: "Get matched and booked — start with a free pre-check, then we handle your appointment.",
    featured: true,
    features: [
      "Free dental pre-check — describe your need; photos/X-rays are optional",
      "Appointment help — hospital matching, booking confirmation, visit checklist ($39)",
      "English guidance throughout",
      "Clear service fee — no hidden costs",
    ],
    cta: "carePlan" as const,
  },
  {
    name: "In-Hospital Support",
    price: "From $149",
    desc: "A local care companion joins you at the hospital — registration, navigation, communication, follow-up.",
    featured: false,
    features: [
      "Everything in Care Navigation",
      "Local care companion at your hospital visit",
      "Registration & payment assistance",
      "Clinic navigation & department routing",
      "Communication support with hospital staff",
      "Visit follow-up & report collection",
    ],
    cta: "escort" as const,
  },
  {
    name: "Treatment Concierge",
    price: "From $499",
    desc: "For complex treatment — implants, veneers, crowns, root canal, or multi-visit plans.",
    featured: false,
    features: [
      "Everything in In-Hospital Support",
      "Multi-provider treatment comparison",
      "Timeline planning across visits",
      "Treatment option guidance",
      "Ongoing coordinator support",
      "Extended follow-up coordination",
    ],
    cta: "carePlan" as const,
  },
];

const faqs = [
  { q: "Are hospital treatment fees included?", a: "No. Hospital treatment fees are paid separately and directly by the patient to the hospital or clinic. Final medical costs are confirmed by the hospital after in-person examination. Angel Doctor provides guidance and coordination, not medical diagnosis or treatment." },
  { q: "What is a dental pre-check?", a: "You describe your dental concern and, if useful, share photos or X-rays as optional supporting materials. We help you understand possible treatment options, estimated cost ranges, and next steps — before you commit to anything. Free, no obligation." },
  { q: "Can I use the in-hospital support without booking through Angel Doctor?", a: "Yes. If you already have a hospital or clinic visit booked and just need a local care companion for registration, translation, and navigation, you can book the In-Hospital Support package." },
  { q: "What does the local care companion do?", a: "A trained medical escort helps with hospital registration, payment, clinic navigation, communication support, and visit follow-up. They do not provide medical diagnosis, treatment, or clinical decisions." },
  { q: "How much will my total treatment cost?", a: "Your total includes: (1) hospital/provider medical fees — paid directly to the hospital after examination, (2) Angel Doctor service fees — as shown above. We provide estimated cost ranges during the pre-check." },
  { q: "Do you support other treatments besides dental?", a: "Yes. Angel Doctor supports health checkups, TCM recovery, and second opinion coordination. The pricing structure is similar — contact us for guidance on your specific treatment need." },
];

export function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(235,245,255,0.7),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="mx-auto max-w-3xl pt-10 text-center">
            <Badge className="mx-auto w-fit" variant="secondary">Transparent Pricing</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Clear Service Fees, No Hidden Costs
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Three service packages — from free pre-check guidance to full treatment concierge support. Hospital medical fees are always paid directly by you to the provider.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              Public hospitals · English guidance · Clear service fee
            </p>
            <div className="mt-7">
              <CTAButton cta="carePlan" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <AnswerBlock title="How does Angel Doctor pricing work?">
        <p>
          Angel Doctor service fees cover coordination, guidance, and local support. Hospital or provider medical fees are separate and are paid directly by the patient to the hospital or clinic. Final medical costs depend on provider confirmation, examination, materials, treatment plan, and follow-up needs.
        </p>
      </AnswerBlock>

      {/* Package Cards */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border bg-surface p-6 shadow-soft sm:p-8 ${
                pkg.featured
                  ? "border-primary/20 ring-1 ring-primary/10 bg-blush/30"
                  : "border-line"
              }`}
            >
              <h2 className="text-xl font-semibold text-foreground">{pkg.name}</h2>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{pkg.desc}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-6 text-muted">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/70" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CTAButton cta={pkg.cta} className="w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-2xl border border-line bg-mist/60 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <HelpCircle className="mt-0.5 size-5 shrink-0 text-muted" />
            <div>
              <p className="text-sm font-semibold text-foreground">Important</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Hospital treatment fees are paid separately. Final medical costs are confirmed by the hospital after in-person examination. Angel Doctor provides guidance and coordination, not medical diagnosis or treatment. Estimated service costs depend on provider confirmation, treatment plan, materials, and follow-up needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-mist/50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Common Questions</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">FAQ</h2>
          </div>
          <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:px-6 sm:py-5">
                  <span>{faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm leading-7 text-muted sm:px-6 sm:pb-6">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/4" />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Start with a free pre-check
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Describe your treatment need. Optional photos, reports, or X-rays can help later, but they are not required to start.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      <StickyMobileCTA page={{ slug: "/pricing", cta: "carePlan" } as any} />
    </main>
  );
}
