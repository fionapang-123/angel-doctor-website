# Angel Doctor Footer Navigation Rules for GEO/SEO and Codex Development

## Purpose

This document defines the full Footer Navigation structure for the Angel Doctor website. It is intended for Codex development use.

The footer should not be treated as a simple legal link area. For Angel Doctor, the footer supports four goals:

1. Improve user trust before conversion.
2. Support GEO/SEO by creating clear entity, service, trust, hospital access, and legal pages.
3. Keep the main navigation focused on conversion while preserving important credibility information in the footer.
4. Prevent Codex from mixing hospital network content, company history, safety rules, legal disclaimers, and contact information into the wrong pages.

## Recommended Footer Navigation

```text
About Angel Doctor
Hospital Access
Trust & Safety
Medical Disclaimer
Privacy Policy
Terms
Contact
```

## Footer Placement Rule

The footer should appear sitewide on every page.

Applicable pages include:

```text
/
/treatments
/treatments/*
/destinations
/destinations/*
/hospital-access
/why-angel-doctor
/how-it-works
/pricing
/guides
/guides/*
/about
/contact
/legal/*
```

## Footer Design Goal

The footer should be simple, trustworthy, and structured. It should not look like a dense legal block.

Recommended footer layout:

```text
Brand Column
- Angel Doctor logo
- Short brand description
- Trust line
- CTA link

Care Navigation Column
- Treatments
- Destinations
- How It Works
- Pricing
- Guides

Trust Column
- About Angel Doctor
- Hospital Access
- Trust & Safety
- Contact

Legal Column
- Medical Disclaimer
- Privacy Policy
- Terms
```

## Footer Brand Column Copy

Use this footer brand text:

```text
Angel Doctor helps international patients access trusted healthcare in China through AI hospital matching, transparent coordination, and trained local medical escorts.
```

Trust line:

```text
Healthcare group since 1998 · 200+ hospitals and healthcare providers · 600+ trained medical escorts
```

Primary footer CTA:

```text
Get Your Care Plan
```

Footer CTA URL:

```text
/contact
```

## Footer Page Rules

---

# 1. About Angel Doctor

## URL

```text
/about
```

## Page Purpose

The About page should explain who Angel Doctor is, what it does, and why the company can be trusted. It should not become a hospital list page or a legal disclaimer page.

## GEO/SEO Purpose

This page helps search engines and AI systems understand Angel Doctor as an entity:

- Brand name
- Business category
- Service area
- Parent healthcare group background
- International patient focus
- Core service model

## Recommended Page Title

```text
About Angel Doctor
```

## Recommended H1

```text
About Angel Doctor
```

## Recommended Meta Title

```text
About Angel Doctor | Medical Travel Coordination in China
```

## Recommended Meta Description

```text
Learn about Angel Doctor, a China healthcare coordination platform helping international patients access hospital matching, transparent care planning, and trained local medical escorts.
```

## Page Sections

```text
1. Hero: About Angel Doctor
2. What Angel Doctor Does
3. Backed by a Healthcare Group Founded in 1998
4. Our Care Coordination Model
5. Who We Help
6. Our Network and Local Support
7. What We Do Not Do
8. CTA: Get Your Care Plan
```

## Key Copy

```text
Angel Doctor helps international patients access trusted healthcare in China with AI-assisted hospital matching, transparent coordination, and trained local medical escorts.
```

```text
Angel Doctor is backed by a healthcare group founded in 1998, with long-term experience in healthcare service operations, medical coordination, and patient support across China.
```

## Content Boundaries

Do include:

```text
- Company purpose
- Parent group background
- Healthcare group since 1998
- International patient services
- AI-assisted care matching
- Medical escort network
- 200+ hospital/provider network summary
```

Do not include:

```text
- Full hospital list
- Detailed legal disclaimers
- Patient data policy details
- Long pricing tables
- Treatment-specific medical claims
```

## CTA

```text
Get Your Care Plan
```

CTA URL:

```text
/contact
```

## Schema

Add JSON-LD:

```text
Organization
WebPage
BreadcrumbList
```

Organization schema should clarify that the founding year refers to the healthcare group if Angel Doctor itself was not founded in 1998.

---

# 2. Hospital Access

## URL

```text
/hospital-access
```

## Page Purpose

This is a standalone footer page explaining Angel Doctor's hospital and healthcare provider coordination network in China.

It is not a simple hospital directory. It should explain how Angel Doctor helps international patients access suitable hospitals and providers.

## GEO/SEO Purpose

This page targets queries such as:

```text
Can foreigners access hospitals in China?
Hospital access in China for international patients
How to get hospital appointments in China
China hospital coordination service
Medical travel hospital access China
```

## Recommended Page Title

```text
Hospital Access in China
```

## Recommended H1

```text
Hospital Access in China for International Patients
```

## Recommended Meta Title

```text
Hospital Access in China for International Patients | Angel Doctor
```

## Recommended Meta Description

```text
Angel Doctor helps international patients access hospitals and healthcare providers in China through hospital matching, appointment coordination, translation support, and trained local medical escorts.
```

## Page Sections

```text
1. Hero: Hospital Access in China for International Patients
2. Trust Bar
3. How Hospital Access Works
4. Types of Hospitals and Providers
5. Major Medical Destinations
6. Public Hospital and Provider Cards
7. How Angel Doctor Supports Your Visit
8. Availability and Medical Boundaries
9. FAQ
10. CTA: Get Your Care Plan
```

## Trust Bar

```text
Healthcare group since 1998 · 200+ hospitals and healthcare providers · 600+ trained medical escorts · English-speaking support
```

## Hospital Card Design

Hospital names may be public if confirmed and approved.

Each hospital card should use this structure:

```text
Hospital / Provider Name
City
Provider Type
Best-fit Care Areas
International Patient Support
How Angel Doctor Helps
Availability Note
```

## Hospital Card Field Rules

### Hospital / Provider Name

Use the official English name if available. If no official English name exists, use a clear transliterated name and avoid invented branding.

### City

Use a standard city name:

```text
Beijing
Shanghai
Guangzhou
Shenzhen
Hangzhou
Chengdu
```

### Provider Type

Choose one or more:

```text
Public tertiary hospital
Specialty hospital
Dental hospital
Dental clinic
Executive health checkup center
TCM provider
Rehabilitation provider
International clinic
Private hospital
```

### Best-fit Care Areas

Use patient-facing care categories, not only hospital departments.

Recommended examples:

```text
Dental care
Health checkup
Medical second opinion
Oncology
Cardiology
Orthopedics
Neurology
TCM recovery
Rehabilitation
Aesthetic care
Fertility care
Women's health
```

### International Patient Support

Use service capabilities:

```text
Appointment coordination
Medical record preparation
Translation support
Local medical escort
Registration assistance
Payment guidance
Report collection
Follow-up communication
```

### How Angel Doctor Helps

Use a short, repeated pattern:

```text
Angel Doctor helps coordinate care options, prepare visit materials, support appointment scheduling, guide hospital navigation, and assist with follow-up communication.
```

### Availability Note

Every hospital card must include:

```text
Appointment options depend on department capacity, doctor schedule, medical record review, patient condition, and provider confirmation.
```

## Hospital Card Example

```text
[Hospital Name]
City: Shanghai
Provider type: Public tertiary hospital
Best-fit care areas: Oncology, cardiology, health checkup, specialist consultation
International patient support: Appointment coordination, translation support, local medical escort, report assistance
How Angel Doctor helps: Angel Doctor helps coordinate care options, prepare medical records, support appointment scheduling, guide hospital navigation, and assist with follow-up communication.
Availability: Appointment options depend on department capacity, doctor schedule, medical record review, patient condition, and provider confirmation.
```

## Content Boundaries

Do include:

```text
- Public hospital and provider names if approved
- City
- Provider type
- Care areas
- Patient support capabilities
- Appointment availability note
- Medical boundary statement
```

Do not include:

```text
- Guaranteed doctor access
- Guaranteed treatment outcomes
- Unsupported rankings such as “best hospital in China” unless sourced and qualified
- Hospital logos unless usage rights are confirmed
- Claims that Angel Doctor owns or operates partner hospitals unless legally true
```

## Required Disclaimer Section

Add this section near the bottom of the page:

```text
Hospital access and appointment availability depend on the patient’s condition, department capacity, doctor schedule, medical record review, city preference, timeline, and provider confirmation.

Angel Doctor provides care coordination, translation support, appointment assistance, and local medical escort services. Medical diagnosis and treatment decisions are made by licensed healthcare providers.
```

## FAQ Questions

Include these FAQ items:

```text
Can foreigners access public hospitals in China?
How does Angel Doctor choose a hospital for international patients?
Can I choose a specific hospital or doctor in China?
Does Angel Doctor work with public or private hospitals?
Can Angel Doctor help with hospital appointments in China?
Can I get an English-speaking medical escort at the hospital?
Do Chinese hospitals accept international insurance?
What medical records should I prepare before hospital matching?
Can Angel Doctor help after I return home?
```

## Schema

Add JSON-LD:

```text
WebPage
Service
FAQPage
BreadcrumbList
ItemList for hospital/provider cards
Organization
```

---

# 3. Trust & Safety

## URL

```text
/trust-and-safety
```

## Page Purpose

This page explains how Angel Doctor protects patients, sets clear service boundaries, manages care coordination, supports privacy, and reduces medical travel confusion.

It should not become a generic About page or a legal-only page.

## GEO/SEO Purpose

This page targets trust-related and safety-related queries:

```text
Is medical travel to China safe?
How to choose a safe hospital in China
Medical travel safety China
Medical escort safety China
International patient support China
```

## Recommended Page Title

```text
Trust & Safety
```

## Recommended H1

```text
Trust & Safety for Medical Travel to China
```

## Recommended Meta Title

```text
Trust & Safety for Medical Travel to China | Angel Doctor
```

## Recommended Meta Description

```text
Learn how Angel Doctor supports international patients with clear care coordination, trained medical escorts, transparent communication, privacy protection, and medical service boundaries.
```

## Page Sections

```text
1. Hero: Trust & Safety for Medical Travel to China
2. Clear Role of Angel Doctor
3. Patient Information and Medical Records
4. Hospital and Provider Coordination
5. Trained Local Medical Escorts
6. Translation and Communication Support
7. Transparent Pricing Guidance
8. Privacy and Data Protection Overview
9. Medical Boundaries
10. Emergency and Follow-up Support
11. CTA: Get Your Care Plan
```

## Key Copy

```text
Angel Doctor helps international patients navigate healthcare in China with clear coordination, trained local support, and transparent communication before, during, and after the hospital visit.
```

```text
Angel Doctor is not a hospital and does not replace licensed medical providers. Diagnosis, treatment decisions, prescriptions, and medical procedures are provided by licensed hospitals, clinics, and healthcare professionals.
```

## Content Boundaries

Do include:

```text
- Patient safety principles
- Medical escort support
- Translation support
- Hospital coordination process
- Medical records handling overview
- Pricing transparency approach
- Service boundaries
```

Do not include:

```text
- Full privacy legal language
- Full medical disclaimer legal text
- Hospital list
- Detailed clinical advice
- Guaranteed outcomes
```

## CTA

```text
Plan Your Care Safely
```

CTA URL:

```text
/contact
```

## Schema

Add JSON-LD:

```text
WebPage
Organization
BreadcrumbList
FAQPage if FAQ section is included
```

---

# 4. Medical Disclaimer

## URL

```text
/legal/medical-disclaimer
```

## Page Purpose

This page defines Angel Doctor's medical role and legal boundaries.

It should clearly state that Angel Doctor provides coordination, information, translation support, appointment assistance, and medical escort services, but does not provide medical diagnosis or treatment.

## GEO/SEO Purpose

This page supports trust and compliance. It also helps AI systems understand Angel Doctor's role correctly.

## Recommended Page Title

```text
Medical Disclaimer
```

## Recommended H1

```text
Medical Disclaimer
```

## Recommended Meta Title

```text
Medical Disclaimer | Angel Doctor
```

## Recommended Meta Description

```text
Read Angel Doctor's medical disclaimer. Angel Doctor provides care coordination, hospital matching, translation support, and medical escort services, but does not provide medical diagnosis or treatment.
```

## Required Core Language

Use this core disclaimer language:

```text
Angel Doctor is a healthcare coordination and medical travel support platform. Angel Doctor is not a hospital, clinic, medical practice, or emergency medical service provider.

Information provided on this website is for general informational and care coordination purposes only. It is not medical advice, diagnosis, treatment, or a substitute for consultation with a licensed healthcare professional.

Medical diagnosis, treatment decisions, prescriptions, procedures, and clinical recommendations are made by licensed healthcare providers, hospitals, clinics, or medical institutions.

Angel Doctor may assist with hospital matching, appointment coordination, medical record preparation, translation support, local medical escort services, and follow-up communication. Angel Doctor does not guarantee appointment availability, doctor access, treatment outcomes, recovery results, or medical cost estimates.

Patients should consult licensed healthcare professionals before making medical decisions. In a medical emergency, contact local emergency services immediately.
```

## Page Sections

```text
1. Role of Angel Doctor
2. No Medical Advice
3. Licensed Healthcare Providers
4. No Guarantee of Outcomes
5. Emergency Care
6. Medical Records and Patient Responsibility
7. Third-party Hospitals and Providers
8. Contact
```

## Content Boundaries

Do include:

```text
- Clear platform role
- No diagnosis/treatment statement
- No guaranteed outcomes
- Emergency instruction
- Third-party provider responsibility
```

Do not include:

```text
- Marketing claims
- Hospital network promotion
- CTA-heavy sales sections
- Treatment-specific recommendations
```

## Schema

Add JSON-LD:

```text
WebPage
BreadcrumbList
```

Do not use MedicalWebPage if the page could imply medical advice.

---

# 5. Privacy Policy

## URL

```text
/legal/privacy-policy
```

## Page Purpose

This page explains how Angel Doctor collects, uses, stores, and protects user information, including medical inquiry information.

## GEO/SEO Purpose

This page supports trust and compliance. It helps users and AI systems understand that Angel Doctor handles sensitive medical inquiry information responsibly.

## Recommended Page Title

```text
Privacy Policy
```

## Recommended H1

```text
Privacy Policy
```

## Recommended Meta Title

```text
Privacy Policy | Angel Doctor
```

## Recommended Meta Description

```text
Read Angel Doctor's Privacy Policy to understand how we collect, use, and protect personal information and medical travel inquiry details.
```

## Page Sections

```text
1. Introduction
2. Information We Collect
3. Medical Inquiry Information
4. How We Use Information
5. How We Share Information
6. Hospitals, Providers, and Care Coordination Partners
7. Data Storage and Protection
8. International Users
9. Cookies and Analytics
10. User Choices and Rights
11. Contact
12. Updates to This Policy
```

## Required Note

Include a clear note that users should not submit emergency medical information through the website.

```text
This website is not intended for emergency medical communication. If you are experiencing a medical emergency, contact local emergency services immediately.
```

## Content Boundaries

Do include:

```text
- Form data handling
- Medical record upload handling if applicable
- Communication via email/WhatsApp
- Sharing with hospitals/providers for coordination
- Analytics/cookies
- User rights/contact
```

Do not include:

```text
- Medical advice
- Treatment promises
- Hospital ranking claims
- Overly specific legal statements not reviewed by counsel
```

## Schema

Add JSON-LD:

```text
WebPage
BreadcrumbList
```

---

# 6. Terms

## URL

```text
/legal/terms
```

## Page Purpose

This page defines website and service use terms for Angel Doctor.

## GEO/SEO Purpose

This page supports trust and entity clarity. It also separates legal terms from marketing and care coordination pages.

## Recommended Page Title

```text
Terms of Use
```

## Recommended H1

```text
Terms of Use
```

## Recommended Meta Title

```text
Terms of Use | Angel Doctor
```

## Recommended Meta Description

```text
Read Angel Doctor's Terms of Use for website access, care coordination inquiries, service boundaries, third-party providers, and user responsibilities.
```

## Page Sections

```text
1. Acceptance of Terms
2. About Angel Doctor Services
3. No Medical Advice
4. User Responsibilities
5. Care Coordination and Third-party Providers
6. Pricing and Estimates
7. Appointment Availability
8. Website Content
9. Intellectual Property
10. Limitation of Liability
11. Changes to Terms
12. Contact
```

## Required Service Boundary Language

```text
Angel Doctor provides healthcare coordination, hospital matching, translation support, appointment assistance, and local medical escort services. Angel Doctor does not provide medical diagnosis, medical treatment, prescriptions, emergency medical care, or guaranteed access to any specific doctor, hospital, or treatment outcome.
```

## Content Boundaries

Do include:

```text
- Website usage terms
- Service role
- Third-party providers
- Appointment availability
- Pricing estimate limitations
- User responsibilities
```

Do not include:

```text
- Detailed Privacy Policy text
- Full Medical Disclaimer text beyond short reference
- Marketing-heavy sections
```

## Schema

Add JSON-LD:

```text
WebPage
BreadcrumbList
```

---

# 7. Contact

## URL

```text
/contact
```

## Page Purpose

The Contact page is the primary conversion page for users who want a care plan, WhatsApp/email support, or medical travel coordination.

## GEO/SEO Purpose

This page helps AI systems and search engines identify Angel Doctor as an active service provider with clear inquiry pathways.

## Recommended Page Title

```text
Contact Angel Doctor
```

## Recommended H1

```text
Get Your Care Plan
```

## Recommended Meta Title

```text
Contact Angel Doctor | Get Your Care Plan in China
```

## Recommended Meta Description

```text
Contact Angel Doctor to get a care plan for medical travel to China, including hospital matching, pricing guidance, appointment coordination, and local medical escort support.
```

## Page Sections

```text
1. Hero: Get Your Care Plan
2. Contact Form
3. What Happens Next
4. What to Prepare
5. WhatsApp / Email Contact Options
6. Medical Disclaimer Reminder
7. FAQ
```

## Contact Form Fields

Use this form for the main site:

```text
Name
Email
WhatsApp / Phone
Country / Region
Treatment interested in
Preferred city in China
When do you plan to travel?
Do you need local support?
Tell us what you need
Consent checkbox
```

## Treatment Interested In Options

```text
Dental Care
Health Checkup
Second Opinion
TCM Recovery
Rehabilitation
Aesthetic Care
Medical Escort
Other
```

## Consent Checkbox Copy

```text
I understand that Angel Doctor provides care coordination and medical travel support, not medical diagnosis or treatment. I agree to be contacted about my inquiry.
```

## Submit Button

```text
Get My Care Plan
```

## What Happens Next Copy

```text
After you submit your request, Angel Doctor will review your needs, clarify your timeline and city preferences, and help prepare a care coordination plan. For complex medical conditions, we may ask for medical records before recommending suitable hospital options.
```

## Content Boundaries

Do include:

```text
- Clear conversion form
- WhatsApp/email options
- Next-step explanation
- Consent checkbox
- Medical boundary reminder
```

Do not include:

```text
- Long hospital lists
- Detailed legal terms
- Unsupported treatment claims
```

## Schema

Add JSON-LD:

```text
ContactPage
Organization
BreadcrumbList
FAQPage if FAQ section is included
```

---

# Footer Link URL Map

Use this exact map:

```text
About Angel Doctor -> /about
Hospital Access -> /hospital-access
Trust & Safety -> /trust-and-safety
Medical Disclaimer -> /legal/medical-disclaimer
Privacy Policy -> /legal/privacy-policy
Terms -> /legal/terms
Contact -> /contact
```

# Footer Copy Rules

## Do

```text
- Keep footer link labels short and stable.
- Use consistent URLs across the site.
- Add the footer to every page.
- Keep legal pages separate from marketing pages.
- Keep hospital information in Hospital Access, Destination pages, and Treatment pages.
- Use clear medical boundary language on Trust & Safety, Medical Disclaimer, Terms, and Contact pages.
```

## Do Not

```text
- Add too many footer links.
- Put full hospital lists directly in the footer.
- Use hospital logos without permission.
- Claim guaranteed appointments or outcomes.
- Mix Privacy Policy, Terms, and Medical Disclaimer into one page.
- Hide Contact only in the footer; it should also be available as a CTA across pages.
```

# GEO/SEO Implementation Rules

## Required Technical SEO for All Footer Pages

Each footer page must include:

```text
Unique H1
Unique meta title
Unique meta description
Canonical URL
Breadcrumbs
JSON-LD schema
Internal links to relevant pages
CTA back to Contact where appropriate
Last updated date for legal and trust pages
```

## Internal Linking Rules

### About Angel Doctor should link to:

```text
/hospital-access
/trust-and-safety
/contact
```

### Hospital Access should link to:

```text
/destinations
/treatments
/contact
/trust-and-safety
/legal/medical-disclaimer
```

### Trust & Safety should link to:

```text
/legal/medical-disclaimer
/legal/privacy-policy
/legal/terms
/contact
```

### Medical Disclaimer should link to:

```text
/trust-and-safety
/contact
/legal/terms
```

### Privacy Policy should link to:

```text
/contact
/legal/terms
```

### Terms should link to:

```text
/legal/privacy-policy
/legal/medical-disclaimer
/contact
```

### Contact should link to:

```text
/how-it-works
/pricing
/trust-and-safety
/legal/medical-disclaimer
```

# Schema Summary

| Footer Page | Required Schema |
|---|---|
| /about | Organization, WebPage, BreadcrumbList |
| /hospital-access | WebPage, Service, ItemList, FAQPage, BreadcrumbList, Organization |
| /trust-and-safety | WebPage, BreadcrumbList, Organization, FAQPage if applicable |
| /legal/medical-disclaimer | WebPage, BreadcrumbList |
| /legal/privacy-policy | WebPage, BreadcrumbList |
| /legal/terms | WebPage, BreadcrumbList |
| /contact | ContactPage, Organization, BreadcrumbList, FAQPage if applicable |

# Development Acceptance Criteria

Codex should verify the following:

```text
1. Footer appears on every public page.
2. Footer contains exactly these links:
   - About Angel Doctor
   - Hospital Access
   - Trust & Safety
   - Medical Disclaimer
   - Privacy Policy
   - Terms
   - Contact
3. Footer links use the correct URL map.
4. Each footer page has a unique H1, meta title, and meta description.
5. Each footer page has breadcrumbs.
6. Each footer page includes the correct JSON-LD schema.
7. Hospital Access includes hospital/provider card support.
8. Hospital cards include an appointment availability note.
9. Legal pages do not contain marketing-heavy copy.
10. Contact page includes the Get Your Care Plan form.
11. Medical boundary language appears on Medical Disclaimer, Terms, Trust & Safety, and Contact pages.
12. No footer page claims guaranteed appointments, doctor access, treatment outcomes, or fixed medical costs.
13. Footer brand column includes the approved Angel Doctor description and trust line.
```

# Recommended File / Component Naming

If using a component-based site structure, use names similar to:

```text
components/Footer.tsx
pages/about.tsx
pages/hospital-access.tsx
pages/trust-and-safety.tsx
pages/legal/medical-disclaimer.tsx
pages/legal/privacy-policy.tsx
pages/legal/terms.tsx
pages/contact.tsx
```

If using a static site generator, use names similar to:

```text
src/pages/about.md
src/pages/hospital-access.md
src/pages/trust-and-safety.md
src/pages/legal/medical-disclaimer.md
src/pages/legal/privacy-policy.md
src/pages/legal/terms.md
src/pages/contact.md
```

# Final Rule

The footer should support trust and GEO, not distract from the main conversion path.

Main navigation drives users to treatments, destinations, pricing, process, guides, and contact.

Footer navigation gives users and AI systems the deeper proof they need:

```text
Who Angel Doctor is
Which hospital access role it provides
How safety and trust are handled
What medical and legal boundaries apply
How users can contact Angel Doctor
```
