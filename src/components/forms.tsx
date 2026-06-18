"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle, Loader2, Mail, MessageCircle } from "lucide-react";
import { CTA } from "@/config/cta";
import { createWhatsAppUrl, siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, Input, Select, Textarea } from "@/components/ui/form";
import { trackConversionEvent } from "@/lib/conversion";

/* ───── Contact Form (Get Your Care Plan) ───── */

type LeadFormProps = {
  titleId?: string;
  stickySubmit?: boolean;
};

function fallbackMessage(source: "contact" | "escort", values: Record<string, string>) {
  const label = source === "escort" ? "medical escort request" : "care plan request";
  const details = Object.entries(values)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");

  return `Hi Angel Doctor, I tried to submit a ${label} on the website but it may not have gone through. Please help me follow up. ${details}`;
}

function FallbackContact({ message, source }: { message: string; source: "contact" | "escort" }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">
      <div className="flex items-start gap-2.5">
        <AlertCircle className="mt-0.5 size-4 shrink-0" />
        <div>
          <p className="font-semibold">Submission did not complete.</p>
          <p className="mt-1">Your details are still on this form. You can try again, or contact Angel Doctor directly.</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <a
          href={createWhatsAppUrl(message)}
          onClick={() => trackConversionEvent("whatsapp_clicked", { source, location: "form_fallback" })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
        >
          <MessageCircle className="size-4" />
          Continue on WhatsApp
        </a>
        <a
          href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Angel Doctor lead follow-up")}&body=${encodeURIComponent(message)}`}
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-800"
        >
          <Mail className="size-4" />
          Email us
        </a>
      </div>
    </div>
  );
}

export function ContactForm({ titleId, stickySubmit = false }: LeadFormProps = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fallback, setFallback] = useState("");
  const [started, setStarted] = useState(false);

  function handleStart() {
    if (started) return;
    setStarted(true);
    trackConversionEvent("form_started", { source: "contact" });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setFallback("");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      contact: (form.elements.namedItem("contact") as HTMLInputElement)?.value || "",
      treatment: (form.elements.namedItem("treatment") as HTMLSelectElement)?.value || "",
      timeline: (form.elements.namedItem("timeline") as HTMLInputElement)?.value || "",
      city: (form.elements.namedItem("city") as HTMLSelectElement)?.value || "",
      localSupport: (form.elements.namedItem("localSupport") as HTMLSelectElement)?.value || "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
      consent: (form.elements.namedItem("consent") as HTMLInputElement)?.checked || false,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Submission failed");
      }

      trackConversionEvent("form_submitted", { source: "contact", treatment: data.treatment, city: data.city || null });
      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
      setFallback(fallbackMessage("contact", {
        Contact: data.contact,
        Treatment: data.treatment,
        City: data.city,
        Timeline: data.timeline,
        "Local support": data.localSupport,
        Need: data.message,
      }));
      trackConversionEvent("form_failed", { source: "contact", reason: message });
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <Card className="border-primary/10">
        <CardContent className="flex flex-col items-center gap-5 p-8 text-center sm:p-12">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary-soft">
            <CheckCircle className="size-7 text-primary" />
          </div>
          <h3 id={titleId} className="font-sora text-xl font-semibold text-foreground">
            Thank you. Your request has been received.
          </h3>
          <p className="max-w-md text-sm leading-6 text-muted">
            A coordinator will review your request and help you understand suitable options, timing, and whether local support or additional documents are needed.
          </p>
          <a
            href={createWhatsAppUrl("Hi Angel Doctor, I just submitted a care plan request. Please help me with next steps.")}
            onClick={() => trackConversionEvent("whatsapp_clicked", { source: "contact", location: "success" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold leading-none text-white shadow-button transition duration-200 hover:bg-primary-strong focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
          >
            <MessageCircle className="size-4" />
            Continue on WhatsApp
          </a>
          <p className="max-w-sm text-xs leading-5 text-muted">
            Your request is already submitted. WhatsApp is optional for faster follow-up.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/10">
      <CardHeader>
        <CardTitle id={titleId}>Tell us what you need</CardTitle>
        <p className="text-sm text-muted">Medical records optional — share only what you&apos;re comfortable with. About 2 minutes.</p>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6" onFocusCapture={handleStart} onSubmit={handleSubmit} data-lead-form="contact">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="contact">Email / WhatsApp</FieldLabel>
              <Input id="contact" name="contact" type="text" autoComplete="email" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="treatment">Interested in</FieldLabel>
              <Select id="treatment" name="treatment" defaultValue="" required>
                <option value="" disabled>Select an option</option>
                <option>Dental Care</option>
                <option>Health Checkup</option>
                <option>TCM Recovery</option>
                <option>Second Opinion</option>
                <option>Medical Escort</option>
                <option value="Other">Other specialty — tell us below</option>
              </Select>
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="timeline">When will you be in China?</FieldLabel>
                <Input id="timeline" name="timeline" type="date" className="cursor-pointer transition-colors duration-200 [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:scale-110 [&:valid]:border-primary/40 [&:valid]:bg-blush/40" />
              </Field>
              <Field>
                <FieldLabel htmlFor="city">Which city? <span className="font-normal text-muted">(optional)</span></FieldLabel>
                <Select id="city" name="city" defaultValue="">
                  <option value="">Not sure yet</option>
                  <option>Shenzhen</option>
                  <option>Guangzhou</option>
                  <option>Shanghai</option>
                  <option>Beijing</option>
                  <option>Chengdu</option>
                  <option>Chongqing</option>
                  <option>Hangzhou</option>
                  <option>Nanjing</option>
                  <option>Wuhan</option>
                  <option>Xi&apos;an</option>
                  <option>Zhuhai</option>
                  <option>Other</option>
                </Select>
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="localSupport">Do you need local support? <span className="font-normal text-muted">(optional)</span></FieldLabel>
              <Select id="localSupport" name="localSupport" defaultValue="">
                <option value="">Not sure yet</option>
                <option>Yes, I need a medical escort</option>
                <option>Maybe — I&apos;d like to learn more</option>
                <option>Not at this time</option>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="message">
                Tell us what you need <span className="font-normal text-muted">(optional)</span>
              </FieldLabel>
              <Textarea id="message" name="message" rows={4}
                placeholder="e.g. I'm looking for dental implants in Shenzhen, planning to visit in August. I need English support and a local medical escort."
              />
              <FieldDescription>
                Medical records, reports, or photos are welcome but not required — you can share them later.
              </FieldDescription>
            </Field>
          </FieldGroup>
          <label className="flex gap-3 rounded-xl border border-line bg-mist/50 p-4 text-sm leading-6 text-muted cursor-pointer">
            <input type="checkbox" name="consent" required className="mt-0.5 size-4 rounded border-line accent-primary shrink-0" />
            <span>
              I understand that Angel Doctor provides care coordination and medical travel support, not medical diagnosis or treatment. I agree to be contacted about my inquiry.
            </span>
          </label>
          {fallback && <FallbackContact message={fallback} source="contact" />}
          <button
            type="submit"
            disabled={submitting}
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold leading-none text-white shadow-button transition duration-200 hover:bg-primary-strong focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:opacity-60 ${
              stickySubmit ? "mt-1" : ""
            }`}
          >
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Submitting...
              </>
            ) : (
              CTA.carePlan.label
            )}
          </button>
          {error && !fallback && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </CardContent>
    </Card>
  );
}

/* ───── Escort Form (Book Local Medical Escort) ───── */

export function EscortForm({ titleId, stickySubmit = false }: LeadFormProps = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fallback, setFallback] = useState("");
  const [started, setStarted] = useState(false);

  function handleStart() {
    if (started) return;
    setStarted(true);
    trackConversionEvent("form_started", { source: "escort" });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setFallback("");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      contact: (form.elements.namedItem("contact") as HTMLInputElement)?.value || "",
      city: (form.elements.namedItem("city") as HTMLSelectElement)?.value || "",
      provider: (form.elements.namedItem("provider") as HTMLInputElement)?.value || "",
      visitDate: (form.elements.namedItem("visitDate") as HTMLInputElement)?.value || "",
      duration: (form.elements.namedItem("duration") as HTMLSelectElement)?.value || "",
      language: (form.elements.namedItem("language") as HTMLSelectElement)?.value || "",
      tasks: (form.elements.namedItem("tasks") as HTMLTextAreaElement)?.value || "",
    };

    try {
      const res = await fetch("/api/escort", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Submission failed");
      }

      trackConversionEvent("form_submitted", { source: "escort", city: data.city || null });
      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
      setFallback(fallbackMessage("escort", {
        Contact: data.contact,
        City: data.city,
        Provider: data.provider,
        "Visit date": data.visitDate,
        Duration: data.duration,
        Language: data.language,
        Tasks: data.tasks,
      }));
      trackConversionEvent("form_failed", { source: "escort", reason: message });
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <Card className="border-primary/10">
        <CardContent className="flex flex-col items-center gap-5 p-8 text-center sm:p-12">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary-soft">
            <CheckCircle className="size-7 text-primary" />
          </div>
          <h3 id={titleId} className="font-sora text-xl font-semibold text-foreground">
            Thank you. Your escort request has been received.
          </h3>
          <p className="max-w-md text-sm leading-6 text-muted">
            A coordinator will review your city, visit date, language needs, and support tasks, then follow up with next steps.
          </p>
          <a
            href={createWhatsAppUrl("Hi Angel Doctor, I just submitted a medical escort request. Please help me with next steps.")}
            onClick={() => trackConversionEvent("whatsapp_clicked", { source: "escort", location: "success" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold leading-none text-white shadow-button transition duration-200 hover:bg-primary-strong focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
          >
            <MessageCircle className="size-4" />
            Continue on WhatsApp
          </a>
          <p className="max-w-sm text-xs leading-5 text-muted">
            Your request is already submitted. WhatsApp is optional for faster follow-up.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/10">
      <CardHeader>
        <Badge className="w-fit" variant="secondary">Local visit support</Badge>
        <CardTitle id={titleId}>Plan your hospital or clinic support</CardTitle>
        <p className="text-sm text-muted">Submit even if you are still planning.</p>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6" onFocusCapture={handleStart} onSubmit={handleSubmit} data-lead-form="escort">
          <FieldGroup>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="escortContact">Email / WhatsApp</FieldLabel>
                <Input id="escortContact" name="contact" type="text" autoComplete="email" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="escortCity">City</FieldLabel>
                <Select id="escortCity" name="city" defaultValue="" required>
                  <option value="" disabled>Select a city</option>
                  <option>Shenzhen</option>
                  <option>Guangzhou</option>
                  <option>Shanghai</option>
                  <option>Beijing</option>
                  <option>Chengdu</option>
                  <option>Chongqing</option>
                  <option>Hangzhou</option>
                  <option>Nanjing</option>
                  <option>Wuhan</option>
                  <option>Xi&apos;an</option>
                  <option>Zhuhai</option>
                  <option>Other</option>
                </Select>
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="provider">Hospital or clinic name, if known</FieldLabel>
              <Input id="provider" name="provider" />
              <FieldDescription>You can submit even if you are still planning.</FieldDescription>
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="visitDate">Visit date</FieldLabel>
                <Input id="visitDate" name="visitDate" type="date" className="[&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer" />
              </Field>
              <Field>
                <FieldLabel htmlFor="duration">Support duration</FieldLabel>
                <Select id="duration" name="duration" defaultValue="" required>
                  <option value="" disabled>Select duration</option>
                  <option>Half-day support</option>
                  <option>Full-day support</option>
                  <option>Multi-day support</option>
                </Select>
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="language">Language support needed</FieldLabel>
              <Select id="language" name="language" defaultValue="" required>
                <option value="" disabled>Select language</option>
                <option>English</option>
                <option>English + Chinese</option>
                <option>Other (please specify below)</option>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="tasks">What do you need help with?</FieldLabel>
              <Textarea id="tasks" name="tasks" rows={3} placeholder="Registration, payment guidance, communication support, clinic/hospital navigation, examination routing, pharmacy, follow-up — tell us what you need." />
              <FieldDescription>
                Common tasks: Registration · Payment · Communication support · Clinic / hospital navigation · Examination routing · Pharmacy · Follow-up · Other
              </FieldDescription>
            </Field>
          </FieldGroup>
          {fallback && <FallbackContact message={fallback} source="escort" />}
          <button
            type="submit"
            disabled={submitting}
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold leading-none text-white shadow-button transition duration-200 hover:bg-primary-strong focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:opacity-60 ${
              stickySubmit ? "mt-1" : ""
            }`}
          >
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Submitting...
              </>
            ) : (
              CTA.escort.label
            )}
          </button>
          {error && !fallback && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </CardContent>
    </Card>
  );
}
