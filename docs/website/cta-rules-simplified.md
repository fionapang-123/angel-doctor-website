# CTA Rules for Angel Doctor Website

## Purpose

This document defines the simplified CTA system for Angel Doctor website development.

The goal is to keep the website easy to maintain, easy for consumers to understand, and safe for future development with Codex.

Use only two primary CTA paths in the MVP:

1. Global main CTA: **Get Your Care Plan**
2. Escort-specific CTA: **Book Local Medical Escort**

Do not add additional CTA types unless a future task explicitly updates this document.

---

## Core Rule

Angel Doctor should not use heavy medical-record-upload CTAs as the default website conversion path.

Most early users may be short-stay overseas visitors, visa-free travelers, dental consumers, health checkup users, TCM users, or people exploring options. They may not have medical records ready.

Therefore:

- Use **Get Your Care Plan** as the global primary CTA.
- Use **Book Local Medical Escort** only for escort-specific pages or escort-specific sections.
- Do not use **Upload Medical Records** as a global CTA.
- Do not use **Buy Now** for medical coordination services.
- Uploads, photos, reports, or medical records should be optional unless the page is specifically for complex treatment review.

---

# 1. Global Main CTA

## CTA Label

**Get Your Care Plan**

## Purpose

This is the main conversion CTA across the website.

Use it for users who want help understanding care options in China, including dental, health checkups, TCM, second opinion, medical escort, or other healthcare needs.

This CTA should feel lightweight and consumer-friendly. It should not feel like a heavy hospital intake form.

## Use On

Use **Get Your Care Plan** on:

- Homepage hero
- Homepage final CTA
- Treatment pages
- Dental page
- Health checkup page
- TCM page
- Second opinion page
- Pricing page
- Patient guide pages
- About page
- General service sections

## Recommended URL

```txt
/get-care-plan
```

## Form Fields

The **Get Your Care Plan** form should include the following fields:

```txt
Email / WhatsApp
Interested in:
- Dental care
- Health Checkup
- TCM Recovery
- Second Opinion
- Medical Escort
- Other

When will you be in China?
Which city?
Do you need local support?
Tell us what you need
```

## Form Behavior

- Keep the form lightweight.
- Do not require medical records.
- Do not require passport information.
- Do not require detailed diagnosis for general inquiries.
- Photos, reports, or medical records can be added later as optional fields, but they should not block submission.
- The form should be usable by a short-stay traveler who only wants basic guidance.

## Confirmation Message

After submission, show a simple confirmation message:

```txt
Thank you. Your request has been received.

A coordinator will review your request and help you understand suitable options, timing, and whether local support or additional documents are needed.
```

## Button Examples

Allowed:

```txt
Get Your Care Plan
Start Your Care Plan
Get Care Guidance
```

Preferred:

```txt
Get Your Care Plan
```

Avoid:

```txt
Buy Now
Upload Medical Records
Submit Full Medical Case
Book Treatment Now
Guaranteed Appointment
```

---

# 2. Escort CTA

## CTA Label

**Book Local Medical Escort**

## Purpose

This CTA is for users who already know they need local in-clinic or in-hospital support in China.

It is especially useful for:

- Users who already booked a clinic or hospital visit
- Overseas visitors who need help navigating Chinese hospitals
- Dental users who need local support during a visit
- Health checkup users
- TCM or rehabilitation visitors
- Overseas Chinese families who want professional support instead of relying on relatives

## Use On

Use **Book Local Medical Escort** on:

- Medical Escort page
- Escort-specific sections on homepage
- Dental page local support section
- Pricing page escort package section
- Guide articles about medical escort service
- Any page section focused specifically on local hospital or clinic support

## Recommended URL

```txt
/book-local-medical-escort
```

Alternative acceptable URL:

```txt
/medical-escort-china#book
```

Use one consistent route across the website.

## Form Fields

The **Book Local Medical Escort** form should include the following fields:

```txt
Email / WhatsApp
City
Hospital or clinic name, if known
Visit date
Half-day / full-day / multi-day support
Language support needed
What do you need help with?
Task options:
- Registration
- Payment
- Communication support
- Clinic / hospital navigation
- Examination routing
- Pharmacy
- Follow-up
- Other
```

## Form Behavior

- Hospital or clinic name should be optional.
- Visit date should be collected if known.
- Users should be able to submit even if they are still planning.
- Allow users to select multiple task options.
- Do not ask users to upload medical records in the escort form by default.
- Keep this form focused on visit logistics and support needs.

## Confirmation Message

After submission, show:

```txt
Thank you. Your escort request has been received.

A coordinator will review your city, visit date, language needs, and support tasks, then follow up with next steps.
```

## Button Examples

Allowed:

```txt
Book Local Medical Escort
Book Medical Escort
Get Local Visit Support
```

Preferred:

```txt
Book Local Medical Escort
```

Avoid:

```txt
Hire a Companion
Find a Freelancer
Buy Escort Service
Instant Hospital Access
Skip the Queue
```

---

# 3. CTA Placement Rules

## Homepage

Use:

```txt
Primary CTA: Get Your Care Plan
Secondary CTA: View Treatment Options
```

If an escort-specific block appears on the homepage, use:

```txt
Book Local Medical Escort
```

Do not show too many CTA types in the hero.

## Treatment Pages

Default CTA:

```txt
Get Your Care Plan
```

If the treatment page includes a local support section, add:

```txt
Book Local Medical Escort
```

## Dental Page

Default CTA:

```txt
Get Your Care Plan
```

Escort section CTA:

```txt
Book Local Medical Escort
```

Do not require X-rays or medical records for all dental users. If uploads are added, label them optional.

## Medical Escort Page

Primary CTA:

```txt
Book Local Medical Escort
```

Secondary CTA:

```txt
Get Your Care Plan
```

## Patient Guides

Default CTA:

```txt
Get Your Care Plan
```

If the guide is specifically about medical escort service, use:

```txt
Book Local Medical Escort
```

## Pricing Page

Use both CTAs in separate pricing blocks:

- General planning / coordination: **Get Your Care Plan**
- Escort service: **Book Local Medical Escort**

---

# 4. CTA Copy Rules

## Keep CTAs Consumer-Friendly

The website should feel easy to start. Do not make users feel they must prepare a full medical case before contacting Angel Doctor.

Preferred wording:

```txt
Get Your Care Plan
Book Local Medical Escort
Tell us what you need
Photos or reports are optional
```

Avoid heavy wording:

```txt
Submit Medical Records
Upload Full Case
Start Hospital Intake
Apply for Treatment
```

## Avoid Medical Outcome Promises

Do not use CTA copy that implies guaranteed access, guaranteed outcomes, or special privilege.

Avoid:

```txt
Get Guaranteed Treatment
Skip the Queue
Access Top Doctors Instantly
Book Priority Hospital Access
```

Use instead:

```txt
Get Your Care Plan
Book Local Medical Escort
Speak With a Coordinator
```

---

# 5. Technical Implementation Rules for Codex

## Centralize CTA Configuration

Do not hardcode CTA labels and URLs repeatedly across many pages.

Create or use a central CTA configuration object if the project structure allows it.

Example:

```js
export const CTA = {
  carePlan: {
    label: "Get Your Care Plan",
    href: "/get-care-plan",
  },
  escort: {
    label: "Book Local Medical Escort",
    href: "/book-local-medical-escort",
  },
};
```

Then reuse these values across components.

## Avoid Unnecessary Complexity

For MVP:

- Do not add user accounts.
- Do not add payment flow.
- Do not add complex medical record upload logic.
- Do not add multi-step intake unless explicitly requested.
- Do not add CRM integrations unless explicitly requested.
- Do not add more CTA types unless this document is updated.

## Form Submission

If backend integration is not ready, implement forms with a safe placeholder or static-site-friendly approach.

Examples:

- Netlify form handling
- Formspree
- Email link fallback
- Temporary static form with clear TODO comment

Do not break the static site build.

## Accessibility

Buttons and forms must be accessible:

- Use clear button text.
- Use proper labels for form fields.
- Ensure buttons have readable contrast.
- Ensure forms can be used on mobile.

---

# 6. Final MVP CTA System

The MVP website should only use two primary CTA paths:

## Global CTA

```txt
Get Your Care Plan
```

For general healthcare planning, treatment options, dental, health checkups, TCM, second opinion, medical escort interest, and other needs.

## Escort CTA

```txt
Book Local Medical Escort
```

For users who need in-clinic or in-hospital local support in China.

This simplified CTA system should make the website easier for consumers to understand and easier for developers to maintain.
