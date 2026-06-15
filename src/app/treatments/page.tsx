import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Badge } from "@/components/ui/badge";
import { FAQBlock } from "@/components/FAQBlock";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
];

const treatments = [
  {
    title: "Dental Care",
    slug: "/treatments/dental-care-china",
    desc: "Implants, crowns, veneers, checkups — coordinated with English support. Convenient cross-border access from Hong Kong and Macau via Shenzhen and Zhuhai.",
    badge: "Top Service",
    cities: "Shenzhen · Guangzhou · Shanghai · Zhuhai · Beijing · Chengdu",
  },
  {
    title: "Health Checkup",
    slug: "/treatments/health-checkup-china",
    desc: "Executive screening packages — imaging, blood panels, specialist review in hours, not weeks. International-standard centers in Shanghai and Beijing.",
    badge: "Popular",
    cities: "Shanghai · Beijing · Guangzhou · Shenzhen",
  },
  {
    title: "Medical Second Opinion",
    slug: "/treatments/medical-second-opinion-china",
    desc: "Submit your records. A Chinese specialist reviews your case. Receive a translated opinion and treatment options — remote or in-person.",
    badge: "Specialist Access",
    cities: "Beijing · Shanghai · Guangzhou · Chengdu",
  },
  {
    title: "TCM Recovery",
    slug: "/treatments/tcm-recovery-china",
    desc: "Acupuncture, tuina, cupping, herbal medicine — coordinated with English-speaking support at leading TCM hospitals in Guangzhou, Shanghai, and Beijing.",
    badge: "Wellness",
    cities: "Guangzhou · Shanghai · Beijing · Chengdu",
  },
];

const faqs = [
  { q: "Which treatment should I choose?", a: "Tell us your concern and a coordinator will help you understand which treatment path fits. You can also select 'Not sure — help me decide' on the contact form." },
  { q: "Can I book multiple treatments during one trip?", a: "Yes. Many patients combine a health checkup with dental care or TCM recovery. Angel Doctor can help coordinate multiple services during a single trip." },
  { q: "How do I get started?", a: "Submit a care plan request. Tell us what you need, your preferred city, and your timeline. A coordinator responds within 1-2 business days with options." },
];

export default function TreatmentsPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl pt-10">
            <Badge className="w-fit" variant="secondary">4 Care Categories</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Treatments in China
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Angel Doctor helps international patients coordinate dental care, health checkups, medical second opinions, and TCM recovery across major Chinese cities. Every treatment path includes English-speaking support and local medical escort coordination.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {treatments.map((t) => (
            <Link key={t.slug} href={t.slug} className="group flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/20 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-blush">
                  <Stethoscope className="size-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-sora text-xl font-semibold text-foreground group-hover:text-primary">{t.title}</h2>
                    {t.badge && <Badge variant="secondary" className="text-[10px]">{t.badge}</Badge>}
                  </div>
                  <p className="mt-0.5 text-xs text-muted">{t.cities}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted">{t.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Explore {t.title} <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FAQBlock faqs={faqs as any} />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <AmbientBlobs />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Not sure which treatment fits you?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Tell us your health concern and a coordinator will help you explore suitable options. Free, no commitment.
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
