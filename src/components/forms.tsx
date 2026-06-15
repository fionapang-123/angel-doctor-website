"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import { CTA } from "@/config/cta";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, Input, Select, Textarea } from "@/components/ui/form";

/* ───── Contact Form (Get Your Care Plan) ───── */

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="border-primary/10">
        <CardContent className="flex flex-col items-center gap-5 p-8 text-center sm:p-12">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary-soft">
            <CheckCircle className="size-7 text-primary" />
          </div>
          <h3 className="font-sora text-xl font-semibold text-foreground">
            Thank you. Your request has been received.
          </h3>
          <p className="max-w-md text-sm leading-6 text-muted">
            A coordinator will review your request and help you understand suitable options, timing, and whether local support or additional documents are needed.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/10">
      <CardHeader>
        <Badge className="w-fit" variant="secondary">Lightweight care request</Badge>
        <CardTitle>Tell us what you need</CardTitle>
        <p className="text-sm text-muted">No medical records required. 2 minutes.</p>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="contact">Email / WhatsApp</FieldLabel>
              <Input id="contact" name="contact" type="text" autoComplete="email" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="treatment">Interested in</FieldLabel>
              <Select id="treatment" name="treatment" defaultValue="" required>
                <option value="" disabled>Select an option</option>
                <option>Dental care</option>
                <option>Health Checkup</option>
                <option>TCM Recovery</option>
                <option>Second Opinion</option>
                <option>Medical Escort</option>
                <option>Other</option>
              </Select>
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="timeline">When will you be in China?</FieldLabel>
                <Input id="timeline" name="timeline" type="date" required className="[&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer" />
              </Field>
              <Field>
                <FieldLabel htmlFor="city">Which city?</FieldLabel>
                <Select id="city" name="city" defaultValue="" required>
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
                  <option>Xi'an</option>
                  <option>Zhuhai</option>
                  <option>Not sure yet</option>
                  <option>Other</option>
                </Select>
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="localSupport">Do you need local support?</FieldLabel>
              <Select id="localSupport" name="localSupport" defaultValue="" required>
                <option value="" disabled>Select</option>
                <option>Yes, I need a medical escort</option>
                <option>Maybe — I'd like to learn more</option>
                <option>Not at this time</option>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Tell us what you need</FieldLabel>
              <Textarea id="message" name="message" rows={4}
                placeholder="e.g. I'm looking for dental implants in Shenzhen, planning to visit in August. I need English support and a local medical escort."
              />
              <FieldDescription>
                Photos, reports, or medical records are not required for a general inquiry and can be shared later.
              </FieldDescription>
            </Field>
          </FieldGroup>
          <label className="flex gap-3 rounded-xl border border-line bg-mist/50 p-4 text-sm leading-6 text-muted cursor-pointer">
            <input type="checkbox" name="consent" required className="mt-0.5 size-4 rounded border-line accent-primary shrink-0" />
            <span>
              I understand that Angel Doctor provides care coordination and medical travel support, not medical diagnosis or treatment. I agree to be contacted about my inquiry.
            </span>
          </label>
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold leading-none text-white shadow-button transition duration-200 hover:bg-primary-strong focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
          >
            {CTA.carePlan.label}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}

/* ───── Escort Form (Book Local Medical Escort) ───── */

export function EscortForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="border-primary/10">
        <CardContent className="flex flex-col items-center gap-5 p-8 text-center sm:p-12">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary-soft">
            <CheckCircle className="size-7 text-primary" />
          </div>
          <h3 className="font-sora text-xl font-semibold text-foreground">
            Thank you. Your escort request has been received.
          </h3>
          <p className="max-w-md text-sm leading-6 text-muted">
            A coordinator will review your city, visit date, language needs, and support tasks, then follow up with next steps.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/10">
      <CardHeader>
        <Badge className="w-fit" variant="secondary">Local visit support</Badge>
        <CardTitle>Plan your hospital or clinic support</CardTitle>
        <p className="text-sm text-muted">Submit even if you are still planning.</p>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <FieldGroup>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="escortContact">Email / WhatsApp</FieldLabel>
                <Input id="escortContact" name="contact" autoComplete="email" required />
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
                  <option>Xi'an</option>
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
                <Input id="visitDate" name="visitDate" type="date" />
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
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold leading-none text-white shadow-button transition duration-200 hover:bg-primary-strong focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
          >
            {CTA.escort.label}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
