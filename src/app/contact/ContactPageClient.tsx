"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { ContactForm } from "@/components/forms";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Badge } from "@/components/ui/badge";
import { createPageSchema } from "@/config/schema";
import { createWhatsAppUrl, siteConfig } from "@/config/site";
import { getPage } from "@/data/pages";
import { trackConversionEvent } from "@/lib/conversion";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const faqs = [
  { q: "What happens after I submit this form?", a: "An Angel Doctor coordinator will review your needs — treatment type, city preference, timeline, and any special requirements — and reply by email within 1-2 business days with initial guidance and next steps." },
  { q: "Is this a paid consultation?", a: "No. Submitting this form and receiving initial guidance is free. You only proceed if you choose to move forward with a care plan or local escort service." },
  { q: "Do I need to prepare medical records before submitting?", a: "For general inquiries — no. If you're seeking a second opinion or have a complex condition, the coordinator may ask you for records after initial contact." },
  { q: "Can I contact Angel Doctor on WhatsApp?", a: "Yes. You can reach Angel Doctor via WhatsApp for quick questions. Submit this form first so the coordinator has context when they reply." },
];

const page = {
  ...getPage("/contact"),
  faqs: faqs.map((faq) => ({ question: faq.q, answer: faq.a })),
};

export function ContactPageClient() {
  return (
    <main>
      <SchemaJsonLd data={createPageSchema(page)} />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="grid gap-8 pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.72fr)] lg:items-start">
            <div className="max-w-3xl">
              <Badge className="w-fit" variant="secondary">Free · No Commitment</Badge>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Get Your Care Plan
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted">
                Tell us what medical or care need you have and your preferred city in China. Angel Doctor will review your situation and help you understand suitable hospital access and coordination options.
              </p>
              <a
                href="#care-plan-form"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold leading-none text-white shadow-soft transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-foreground/15 sm:w-auto"
              >
                Get Your Care Plan
                <ArrowDown className="size-4" />
              </a>
              <div className="mt-7 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-3">
                {["No medical records required to start", "Coordinator review in 1-2 business days", "WhatsApp follow-up available"].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-xl border border-line bg-white/75 p-3 shadow-soft">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div id="care-plan-form" className="scroll-mt-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

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
          <h2 className="mt-3 text-2xl font-semibold text-foreground">Prefer to contact us directly?</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            You can also reach Angel Doctor by email or WhatsApp for quick questions. For care plan requests, we recommend the form above so a coordinator has your full context before replying.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${siteConfig.contactEmail}`} className="inline-flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 shadow-soft transition hover:border-primary/20">
              <Mail className="size-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-xs text-muted">{siteConfig.contactEmail}</p>
              </div>
            </a>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversionEvent("whatsapp_clicked", { source: "contact", location: "contact_options" })}
              className="inline-flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 shadow-soft transition hover:border-primary/20"
            >
              <MessageCircle className="size-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">WhatsApp</p>
                <p className="text-xs text-muted">{siteConfig.whatsappNumber}</p>
              </div>
            </a>
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
      <StickyMobileCTA page={page} />
    </main>
  );
}
