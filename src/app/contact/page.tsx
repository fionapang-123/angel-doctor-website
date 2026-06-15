"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Badge } from "@/components/ui/badge";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const treatmentOptions = [
  "Dental Care",
  "Health Checkup",
  "Second Opinion",
  "TCM Recovery",
  "Rehabilitation",
  "Aesthetic Care",
  "Medical Escort",
  "Not sure — help me decide",
  "Other",
];

const cityOptions = [
  "Shenzhen", "Guangzhou", "Shanghai", "Beijing",
  "Chengdu", "Chongqing", "Hangzhou", "Nanjing",
  "Wuhan", "Xi'an", "Zhuhai", "Not sure yet",
];

const faqs = [
  { q: "What happens after I submit this form?", a: "An Angel Doctor coordinator will review your needs — treatment type, city preference, timeline, and any special requirements — and reply by email within 1-2 business days with initial guidance and next steps." },
  { q: "Is this a paid consultation?", a: "No. Submitting this form and receiving initial guidance is free. You only proceed if you choose to move forward with a care plan or local escort service." },
  { q: "Do I need to prepare medical records before submitting?", a: "For general inquiries — no. If you're seeking a second opinion or have a complex condition, the coordinator may ask you for records after initial contact." },
  { q: "Can I contact Angel Doctor on WhatsApp?", a: "Yes. You can reach Angel Doctor via WhatsApp for quick questions. Submit this form first so the coordinator has context when they reply." },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl pt-10">
            <Badge className="w-fit" variant="secondary">Free · No Commitment</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Get Your Care Plan
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Tell us what medical or care need you have and your preferred city in China. Angel Doctor will review your situation and help you understand suitable hospital access and coordination options.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Contact Form */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Your Care Plan Request</h2>
          <p className="mt-2 text-sm leading-6 text-muted">Fill this out and an Angel Doctor coordinator will respond within 1-2 business days.</p>

          <form className="mt-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email <span className="text-primary">*</span></label>
              <input type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/10" />
            </div>

            {/* WhatsApp / Phone */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">WhatsApp / Phone</label>
              <input type="tel" placeholder="+1 234 567 8900" className="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/10" />
            </div>

            {/* Country */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Country / Region</label>
              <input type="text" placeholder="e.g. United States, Australia, United Kingdom" className="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/10" />
            </div>

            {/* Treatment */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Treatment you're interested in <span className="text-primary">*</span></label>
              <select required className="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10">
                <option value="">Select...</option>
                {treatmentOptions.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Preferred city */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Preferred city in China</label>
              <select className="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10">
                <option value="">Select...</option>
                {cityOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Travel date */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">When do you plan to travel?</label>
              <input type="date" className="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10" />
            </div>

            {/* Local support */}
            <div className="flex items-center gap-3">
              <input type="checkbox" id="localSupport" className="size-4 rounded border-line" />
              <label htmlFor="localSupport" className="text-sm text-muted">I need local medical escort support during my hospital visit</label>
            </div>

            {/* Tell us what you need */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Tell us what you need <span className="text-primary">*</span></label>
              <textarea required rows={4} placeholder="e.g. I'm looking for dental implants in Shenzhen, planning to visit in August. I need English support and a local medical escort." className="w-full resize-y rounded-xl border border-line bg-mist/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/10" />
            </div>

            {/* Consent */}
            <label className="flex items-start gap-3 text-xs leading-5 text-muted">
              <input type="checkbox" required className="mt-0.5 size-4 shrink-0 rounded border-line" />
              <span>I understand that Angel Doctor provides care coordination and medical travel support, not medical diagnosis or treatment. I agree to be contacted about my inquiry.</span>
            </label>

            {/* Submit */}
            <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-button transition hover:bg-primary-strong active:scale-[0.98]">
              Get My Care Plan
            </button>

            <p className="text-center text-xs text-muted">Free · No commitment · 1-2 business day response</p>
          </form>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Process</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">What Happens Next</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            After you submit your request, Angel Doctor will review your needs, clarify your timeline and city preferences, and help prepare a care coordination plan. For complex medical conditions, we may ask for medical records before recommending suitable hospital options.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
            {[
              { step: "01", title: "Coordinator reviews your submission", body: "We review your treatment needs, preferred city, timeline, and any special requirements." },
              { step: "02", title: "Initial guidance by email", body: "Within 1-2 business days, you'll receive initial care options, hospital suggestions, and next steps." },
              { step: "03", title: "Care plan and confirmation", body: "Once you're ready, we help coordinate appointments, local escorts, and pre-visit preparation." },
            ].map((s) => (
              <div key={s.step} className="flex-1 rounded-2xl border border-line bg-surface p-5 shadow-soft">
                <span className="text-xs font-bold tracking-widest text-primary/50">{s.step}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Prepare */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Preparation</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">What to Prepare</h2>
        <div className="mt-6 grid gap-3">
          {[
            "Your medical concern or treatment type (dental, checkup, second opinion, TCM, etc.)",
            "Preferred city in China (or if you're flexible)",
            "When you plan to travel (approximate month or date)",
            "Whether you need a local medical escort for the hospital visit",
            "Any previous diagnosis reports, imaging, or test results (if seeking a second opinion)",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 shadow-soft">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/70" />
              <span className="text-sm leading-6 text-muted">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp / Email */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact Options</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">Prefer WhatsApp or Email?</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            You can also reach Angel Doctor directly for quick questions. For care requests, we recommend the form above so the coordinator has your context before replying.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-5">
            <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 shadow-soft">
              <MessageCircle className="size-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-foreground">WhatsApp</p>
                <p className="text-xs text-muted">Quick questions & updates</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 shadow-soft">
              <Mail className="size-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-xs text-muted">Care plans & detailed coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">Medical Disclaimer</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Angel Doctor provides care coordination, hospital matching, translation support, appointment assistance, and local medical escort services. Angel Doctor does not provide medical diagnosis or treatment.
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Medical diagnosis, treatment decisions, prescriptions, and procedures are made by licensed healthcare providers. This website is not intended for emergency medical communication. In a medical emergency, contact local emergency services immediately.
          </p>
          <Link href="/legal/medical-disclaimer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            Read full medical disclaimer <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">FAQs</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Common Questions About Contacting Us</h2>
          </div>
          <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-primary sm:px-6 sm:py-5">
                  <span>{faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-5 pb-5 text-sm leading-7 text-muted sm:px-6 sm:pb-6">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
