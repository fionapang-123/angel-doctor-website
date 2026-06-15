# Angel Doctor GEO/SEO Schema Rules

> Purpose: Provide Codex with a clear implementation specification for structured data (JSON-LD Schema.org) across the Angel Doctor website.
>
> Primary goal: Improve SEO discoverability, AI/GEO understanding, citation readiness, and page-level entity clarity.
>
> Brand context: Angel Doctor helps international patients access trusted healthcare in China through AI-assisted hospital matching, transparent coordination, and trained local medical escorts.

---

## 1. Core Principles

### 1.1 Use JSON-LD only

All schema should be implemented as JSON-LD inside the page `<head>` or equivalent SEO component.

Do not use Microdata or RDFa.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Angel Doctor"
}
</script>
```

---

### 1.2 One primary schema per page, plus supporting schema

Each page should have:

1. **Primary page schema** based on page intent.
2. **Organization schema** or reference to Organization ID.
3. **BreadcrumbList schema**.
4. **FAQPage schema** if the page contains visible FAQs.
5. **Service schema** for treatment/service pages.

Avoid adding too many unrelated schema types to a page.

---

### 1.3 Schema must match visible content

Do not add claims in schema that are not visible on the page.

For example, if the page schema says:

```json
"areaServed": "Shanghai"
```

The visible page content should also clearly mention Shanghai.

---

### 1.4 Avoid medical overclaiming

Angel Doctor is a healthcare coordination and medical travel support platform, not a hospital and not the treating physician.

Schema should avoid implying that Angel Doctor directly provides diagnosis, surgery, treatment, or guaranteed outcomes.

Use language such as:

- healthcare coordination
- hospital matching
- appointment coordination
- medical escort support
- translation support
- patient navigation
- second opinion coordination
- care pathway planning

Avoid language such as:

- guaranteed cure
- best doctors
- certified treatment outcome
- direct diagnosis by Angel Doctor
- FDA/CE certified medical service

---

### 1.5 Use stable `@id` values

Every major entity should have a stable `@id` URL.

Recommended base IDs:

```text
https://www.angeldoctor.com/#organization
https://www.angeldoctor.com/#website
https://www.angeldoctor.com/#brand
https://www.angeldoctor.com/treatments/dental-care-china#service
https://www.angeldoctor.com/destinations/shenzhen-medical-travel#destination
```

If the final domain is not confirmed, Codex should centralize `SITE_URL` in config and generate schema URLs from it.

---

## 2. Global Schema Architecture

### 2.1 Required global config

Create one schema config file.

Suggested file:

```text
/src/config/schema.ts
```

or for static site generator:

```text
/data/schema.js
```

Recommended constants:

```ts
export const SITE_URL = "https://www.angeldoctor.com";
export const BRAND_NAME = "Angel Doctor";
export const LEGAL_OR_GROUP_NAME = "Angel Doctor Healthcare Group"; // update if needed
export const BRAND_SLOGAN = "China Healthcare, Guided End to End.";
export const HERO_VALUE_PROP = "Fast Care. Fair Price. Clear Guidance.";
export const FOUNDING_YEAR = "1998"; // only use for parent healthcare group if accurate
export const SUPPORT_EMAIL = "contact@angeldoctor.com"; // replace with real email
export const WHATSAPP_URL = "https://wa.me/"; // replace with real WhatsApp link
```

---

### 2.2 Global Organization schema

Use on all major pages or reference via `@id`.

Important wording:

If Angel Doctor itself was not founded in 1998, do **not** write:

```json
"foundingDate": "1998"
```

for Angel Doctor directly unless legally accurate.

Better visible copy:

```text
Angel Doctor is backed by a healthcare group founded in 1998.
```

Schema can include `parentOrganization` if appropriate.

#### Recommended Organization schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.angeldoctor.com/#organization",
  "name": "Angel Doctor",
  "url": "https://www.angeldoctor.com/",
  "slogan": "China Healthcare, Guided End to End.",
  "description": "Angel Doctor helps international patients access trusted healthcare in China through hospital matching, transparent coordination, and trained local medical escorts.",
  "areaServed": [
    "China",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Southeast Asia",
    "Middle East"
  ],
  "knowsAbout": [
    "medical travel to China",
    "hospital matching in China",
    "medical escort services",
    "dental care in China",
    "health checkups in China",
    "medical second opinions in China",
    "traditional Chinese medicine recovery"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English", "Chinese"],
      "areaServed": "International"
    }
  ]
}
```

If parent company details are legally safe to disclose:

```json
"parentOrganization": {
  "@type": "Organization",
  "name": "Parent Healthcare Group Name",
  "foundingDate": "1998"
}
```

Do not add parent company name unless confirmed.

---

### 2.3 Website schema

Use on Home and optionally globally.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.angeldoctor.com/#website",
  "url": "https://www.angeldoctor.com/",
  "name": "Angel Doctor",
  "description": "Medical travel coordination, hospital matching, and local medical escort support for international patients seeking healthcare in China.",
  "publisher": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "inLanguage": "en"
}
```

Add `SearchAction` only if the website has a working internal search feature.

---

## 3. Page Type Schema Rules

---

## 3.1 Home Page

### URL

```text
/
```

### Required schema

- Organization
- WebSite
- WebPage
- BreadcrumbList
- FAQPage if FAQ section exists

### Home WebPage schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.angeldoctor.com/#webpage",
  "url": "https://www.angeldoctor.com/",
  "name": "Angel Doctor | Medical Travel to China for International Patients",
  "description": "Access trusted healthcare in China with AI-assisted hospital matching, transparent coordination, and trained local medical escorts.",
  "isPartOf": {
    "@id": "https://www.angeldoctor.com/#website"
  },
  "about": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://www.angeldoctor.com/images/angel-doctor-hero.jpg"
  },
  "inLanguage": "en"
}
```

### Home page visible content requirements

The Home page should visibly include:

- Hero value proposition: `Fast Care. Fair Price. Clear Guidance.`
- Brand slogan: `China Healthcare, Guided End to End.`
- Trust proof: healthcare group since 1998, 200+ hospitals/providers, 600+ trained escorts, English-speaking support
- Treatment links
- Destination links
- Process summary
- CTA: `Get Your Care Plan`

---

## 3.2 Treatments Index Page

### URL

```text
/treatments
```

### Required schema

- CollectionPage
- BreadcrumbList
- ItemList of treatment services

### CollectionPage schema

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.angeldoctor.com/treatments#webpage",
  "url": "https://www.angeldoctor.com/treatments",
  "name": "Treatments in China for International Patients",
  "description": "Explore dental care, health checkups, second opinions, TCM recovery, aesthetic care, and rehabilitation options in China with Angel Doctor coordination support.",
  "isPartOf": {
    "@id": "https://www.angeldoctor.com/#website"
  },
  "about": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "inLanguage": "en"
}
```

### ItemList schema

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.angeldoctor.com/treatments#itemlist",
  "name": "Angel Doctor Treatment Options",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Dental Care in China",
      "url": "https://www.angeldoctor.com/treatments/dental-care-china"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Health Checkup in China",
      "url": "https://www.angeldoctor.com/treatments/health-checkup-china"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Medical Second Opinion in China",
      "url": "https://www.angeldoctor.com/treatments/medical-second-opinion-china"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "TCM Recovery in China",
      "url": "https://www.angeldoctor.com/treatments/tcm-recovery-china"
    }
  ]
}
```

---

## 3.3 Treatment Detail Pages

### Example URLs

```text
/treatments/dental-care-china
/treatments/health-checkup-china
/treatments/medical-second-opinion-china
/treatments/tcm-recovery-china
/treatments/aesthetic-care-china
/treatments/rehabilitation-china
```

### Required schema

- WebPage
- Service
- BreadcrumbList
- FAQPage if FAQ exists

### Service schema template

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.angeldoctor.com/treatments/dental-care-china#service",
  "name": "Dental Care Coordination in China",
  "serviceType": "Medical travel coordination for dental care in China",
  "provider": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "China"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "International patients"
  },
  "description": "Angel Doctor helps international patients coordinate dental care in China, including provider matching, appointment coordination, estimated cost guidance, translation support, and local medical escort arrangements.",
  "offers": {
    "@type": "Offer",
    "name": "Get Your Care Plan",
    "url": "https://www.angeldoctor.com/contact",
    "availability": "https://schema.org/InStock"
  }
}
```

### Treatment page service names

Use these names:

```text
Dental Care Coordination in China
Health Checkup Coordination in China
Medical Second Opinion Coordination in China
TCM Recovery Coordination in China
Aesthetic Care Coordination in China
Rehabilitation Coordination in China
```

### Treatment page visible content requirements

Each treatment page should visibly include:

- Who this is for
- Common treatment options
- Estimated timeline
- Estimated cost range or pricing factors
- What to prepare
- How Angel Doctor helps
- Relevant destinations
- Risks and limitations
- FAQ
- CTA

---

## 3.4 Destinations Index Page

### URL

```text
/destinations
```

### Required schema

- CollectionPage
- ItemList
- BreadcrumbList

### CollectionPage schema

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.angeldoctor.com/destinations#webpage",
  "url": "https://www.angeldoctor.com/destinations",
  "name": "Medical Travel Destinations in China",
  "description": "Explore major Chinese medical travel destinations including Shenzhen, Guangzhou, Shanghai, Beijing, and Hainan with Angel Doctor hospital coordination and local medical escort support.",
  "isPartOf": {
    "@id": "https://www.angeldoctor.com/#website"
  },
  "about": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "inLanguage": "en"
}
```

### Destination ItemList schema

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.angeldoctor.com/destinations#itemlist",
  "name": "Angel Doctor Medical Travel Destinations",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Shenzhen Medical Travel",
      "url": "https://www.angeldoctor.com/destinations/shenzhen-medical-travel"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guangzhou Medical Travel",
      "url": "https://www.angeldoctor.com/destinations/guangzhou-medical-travel"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Shanghai Medical Travel",
      "url": "https://www.angeldoctor.com/destinations/shanghai-medical-travel"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Beijing Medical Travel",
      "url": "https://www.angeldoctor.com/destinations/beijing-medical-travel"
    }
  ]
}
```

---

## 3.5 Destination Detail Pages

### Example URLs

```text
/destinations/shenzhen-medical-travel
/destinations/guangzhou-medical-travel
/destinations/shanghai-medical-travel
/destinations/beijing-medical-travel
/destinations/hainan-medical-wellness
```

### Required schema

- WebPage
- Service
- Place or City
- BreadcrumbList
- FAQPage if FAQ exists
- ItemList if hospital cards or provider examples are shown

### Destination WebPage schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.angeldoctor.com/destinations/shenzhen-medical-travel#webpage",
  "url": "https://www.angeldoctor.com/destinations/shenzhen-medical-travel",
  "name": "Medical Travel in Shenzhen for International Patients",
  "description": "Plan medical travel in Shenzhen with Angel Doctor hospital coordination, dental care access, health checkup support, TCM recovery options, and trained local medical escorts.",
  "isPartOf": {
    "@id": "https://www.angeldoctor.com/#website"
  },
  "about": [
    {
      "@type": "City",
      "name": "Shenzhen"
    },
    {
      "@id": "https://www.angeldoctor.com/#organization"
    }
  ],
  "inLanguage": "en"
}
```

### Destination Service schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.angeldoctor.com/destinations/shenzhen-medical-travel#service",
  "name": "Medical Travel Coordination in Shenzhen",
  "serviceType": "Medical travel coordination and local medical escort support",
  "provider": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "areaServed": {
    "@type": "City",
    "name": "Shenzhen",
    "containedInPlace": {
      "@type": "Country",
      "name": "China"
    }
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "International patients"
  },
  "description": "Angel Doctor helps international patients coordinate medical travel in Shenzhen, including hospital matching, appointment coordination, English-speaking support, local medical escorts, and follow-up communication."
}
```

### Place schema for destination city

```json
{
  "@context": "https://schema.org",
  "@type": "City",
  "@id": "https://www.angeldoctor.com/destinations/shenzhen-medical-travel#city",
  "name": "Shenzhen",
  "containedInPlace": {
    "@type": "Country",
    "name": "China"
  }
}
```

---

## 3.6 Hospital Access Page

### URL

```text
/hospital-access
```

### Required schema

- WebPage
- Service
- ItemList if hospital/provider cards are shown
- BreadcrumbList
- FAQPage if FAQ exists

### Page schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.angeldoctor.com/hospital-access#webpage",
  "url": "https://www.angeldoctor.com/hospital-access",
  "name": "Hospital Access in China for International Patients",
  "description": "Angel Doctor helps international patients access suitable hospitals and healthcare providers in China through care matching, appointment coordination, translation support, and local medical escort arrangements.",
  "isPartOf": {
    "@id": "https://www.angeldoctor.com/#website"
  },
  "about": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "inLanguage": "en"
}
```

### Hospital Access Service schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.angeldoctor.com/hospital-access#service",
  "name": "Hospital Access Coordination in China",
  "serviceType": "Hospital matching and appointment coordination for international patients",
  "provider": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "China"
  },
  "description": "Angel Doctor coordinates access to hospitals and healthcare providers in China based on patient needs, city preference, doctor availability, estimated timeline, budget, language requirements, and follow-up needs."
}
```

---

## 4. Hospital / Provider Card Schema Rules

### 4.1 When hospital names can be public

If there is written permission to display a hospital/provider name, use one of the following schema types depending on the provider:

- `Hospital`
- `MedicalClinic`
- `Dentist`
- `Physician` only for individual doctor profiles, not hospital cards
- `MedicalBusiness`
- `LocalBusiness` if no better type fits

For most cards, use `Hospital` or `MedicalClinic`.

### 4.2 When hospital names cannot be public

If no public authorization exists, do not use hospital name in visible content or schema.

Use generic provider type cards instead:

```text
Selected public tertiary hospitals in Shanghai
Selected dental providers in Shenzhen
Selected executive health checkup centers in Guangzhou
```

Schema should then use `ItemList` with generic service/provider category names, not fake hospital entities.

---

### 4.3 Hospital card visible fields

Each hospital/provider card should include:

```text
Hospital / Provider Name
City
Provider Type
Best-fit Care Areas
International Patient Support
How Angel Doctor Helps
Availability Note
CTA
```

Recommended visible card example:

```text
[Hospital Name]
City: Shanghai
Provider type: Public tertiary hospital
Best-fit care areas: oncology, cardiology, health checkup, orthopedics
International patient support: appointment coordination, translation support, local medical escort, report assistance
How Angel Doctor helps: hospital matching, schedule coordination, registration support, in-hospital navigation, follow-up communication
Note: Appointment availability depends on department capacity, doctor schedule, medical record review, and provider confirmation.
[Get matched with this provider]
```

---

### 4.4 Hospital card schema example

Use only when the hospital/provider name is authorized for public use.

```json
{
  "@context": "https://schema.org",
  "@type": "Hospital",
  "@id": "https://www.angeldoctor.com/hospital-access#hospital-example-1",
  "name": "Hospital Name",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Shanghai",
    "addressCountry": "CN"
  },
  "medicalSpecialty": [
    "Oncologic",
    "Cardiovascular",
    "Orthopedic",
    "Radiologic"
  ],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Specialist consultation"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Health checkup"
    }
  ]
}
```

### 4.5 Safer generic provider card schema

Use when provider names are not public.

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.angeldoctor.com/destinations/shenzhen-medical-travel#provider-types",
  "name": "Healthcare Provider Types in Shenzhen",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Public tertiary hospitals in Shenzhen",
      "description": "Suitable for specialist consultation, medical second opinions, imaging, health checkups, and complex care coordination."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Dental providers in Shenzhen",
      "description": "Suitable for dental implants, crowns, veneers, dental checkups, and follow-up care planning."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "TCM and recovery providers in Shenzhen",
      "description": "Suitable for acupuncture, pain relief, sleep support, stress recovery, and wellness-oriented recovery programs."
    }
  ]
}
```

---

## 5. Guides / GEO Article Schema Rules

### URL examples

```text
/guides/dental-implants-china-cost
/guides/can-foreigners-see-doctors-in-china
/guides/china-vs-thailand-medical-tourism
/guides/china-vs-turkey-dental-tourism
/guides/medical-escort-service-china
```

### Required schema

- Article or MedicalWebPage
- BreadcrumbList
- FAQPage if FAQ exists
- Organization reference

### Use Article by default

For most guides, use `Article` because it is safer and more broadly supported.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://www.angeldoctor.com/guides/dental-implants-china-cost#article",
  "headline": "How Much Do Dental Implants Cost in China?",
  "description": "A guide for international patients comparing dental implant costs, treatment timelines, provider options, and follow-up considerations in China.",
  "author": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "publisher": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "mainEntityOfPage": {
    "@id": "https://www.angeldoctor.com/guides/dental-implants-china-cost#webpage"
  },
  "datePublished": "2026-06-15",
  "dateModified": "2026-06-15",
  "inLanguage": "en"
}
```

### Use MedicalWebPage only for medically focused educational pages

Use `MedicalWebPage` only when the page provides medical education, not sales-heavy content.

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": "https://www.angeldoctor.com/guides/cancer-second-opinion-china#webpage",
  "name": "Cancer Second Opinion in China for International Patients",
  "description": "A patient guide explaining how international patients can prepare records, request specialist review, and coordinate a cancer second opinion in China.",
  "medicalAudience": {
    "@type": "Patient",
    "name": "International patients"
  },
  "publisher": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "inLanguage": "en"
}
```

---

## 6. FAQPage Schema Rules

### 6.1 Only add FAQ schema when FAQ is visible

Every question and answer in FAQ schema must appear visibly on the page.

### 6.2 Keep answers factual and non-promotional

Bad FAQ answer:

```text
Angel Doctor is the best way to get world-class treatment in China.
```

Good FAQ answer:

```text
Angel Doctor helps international patients compare suitable care options, coordinate appointments, arrange translation support, and access trained local medical escorts in China.
```

### 6.3 FAQ schema template

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.angeldoctor.com/treatments/dental-care-china#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can foreigners get dental care in China?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Foreigners can access dental care in China through public hospitals, private dental clinics, dental hospitals, and international providers. Angel Doctor helps coordinate provider matching, appointments, translation support, and local medical escorts when needed."
      }
    },
    {
      "@type": "Question",
      "name": "How long should I stay in China for dental treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The recommended stay depends on the treatment plan. Simple checkups may take one day, while dental implants, crowns, veneers, or full-mouth restoration may require multiple visits or staged treatment planning."
      }
    }
  ]
}
```

---

## 7. Breadcrumb Schema Rules

Every index and detail page should include BreadcrumbList.

### Treatment detail breadcrumb example

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.angeldoctor.com/treatments/dental-care-china#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.angeldoctor.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Treatments",
      "item": "https://www.angeldoctor.com/treatments"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Dental Care in China",
      "item": "https://www.angeldoctor.com/treatments/dental-care-china"
    }
  ]
}
```

### Destination detail breadcrumb example

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.angeldoctor.com/destinations/shenzhen-medical-travel#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.angeldoctor.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Destinations",
      "item": "https://www.angeldoctor.com/destinations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Shenzhen Medical Travel",
      "item": "https://www.angeldoctor.com/destinations/shenzhen-medical-travel"
    }
  ]
}
```

---

## 8. Pricing Page Schema Rules

### URL

```text
/pricing
```

### Required schema

- WebPage
- Service
- FAQPage if FAQ exists
- BreadcrumbList

### Important pricing rule

Do not add exact prices in schema unless prices are published, accurate, and maintained.

Prefer visible price ranges or pricing factors.

Use language like:

```text
Estimated costs vary by city, provider, treatment complexity, doctor availability, medical records, and follow-up needs.
```

### Pricing page Service schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.angeldoctor.com/pricing#service",
  "name": "Medical Travel Pricing Guidance in China",
  "serviceType": "Pricing guidance for medical travel coordination in China",
  "provider": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "China"
  },
  "description": "Angel Doctor helps international patients understand the typical cost components of medical travel to China, including hospital medical fees, coordination fees, local medical escort support, translation support, and travel-related costs."
}
```

---

## 9. How It Works Page Schema Rules

### URL

```text
/how-it-works
```

### Required schema

- WebPage
- HowTo or ItemList
- BreadcrumbList
- FAQPage if FAQ exists

### Use HowTo carefully

Use `HowTo` only for the coordination process, not medical treatment.

Good:

```text
How to plan medical travel to China with Angel Doctor.
```

Bad:

```text
How to treat cancer in China.
```

### HowTo schema example

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://www.angeldoctor.com/how-it-works#howto",
  "name": "How Medical Travel to China Works with Angel Doctor",
  "description": "A step-by-step coordination process for international patients planning healthcare in China with Angel Doctor support.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Submit your care request",
      "text": "Tell Angel Doctor what type of care you are looking for, your preferred city, travel timeline, and contact details."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Share medical records if needed",
      "text": "For complex conditions, you may be asked to provide medical records, imaging reports, diagnosis history, or current treatment information."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Get matched with care options",
      "text": "Angel Doctor helps compare suitable hospitals, departments, providers, estimated timelines, and support needs."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Confirm appointments and travel plan",
      "text": "Angel Doctor coordinates appointment arrangements, local medical escort support, and hospital visit logistics after provider confirmation."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Receive care in China with local support",
      "text": "A trained local medical escort can assist with registration, navigation, communication support, payment, report collection, and follow-up coordination."
    }
  ]
}
```

---

## 10. Why Angel Doctor Page Schema Rules

### URL

```text
/why-angel-doctor
```

### Required schema

- AboutPage
- Organization reference
- BreadcrumbList
- FAQPage if FAQ exists

### AboutPage schema

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.angeldoctor.com/why-angel-doctor#webpage",
  "url": "https://www.angeldoctor.com/why-angel-doctor",
  "name": "Why International Patients Choose Angel Doctor",
  "description": "Learn how Angel Doctor supports international patients with hospital matching, transparent coordination, trained local medical escorts, English-speaking support, and healthcare group experience.",
  "isPartOf": {
    "@id": "https://www.angeldoctor.com/#website"
  },
  "about": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "inLanguage": "en"
}
```

---

## 11. Contact Page Schema Rules

### URL

```text
/contact
```

### Required schema

- ContactPage
- Organization reference
- BreadcrumbList

### ContactPage schema

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.angeldoctor.com/contact#webpage",
  "url": "https://www.angeldoctor.com/contact",
  "name": "Contact Angel Doctor",
  "description": "Contact Angel Doctor to request a care plan, ask about medical travel to China, or speak with a care coordinator.",
  "isPartOf": {
    "@id": "https://www.angeldoctor.com/#website"
  },
  "about": {
    "@id": "https://www.angeldoctor.com/#organization"
  },
  "inLanguage": "en"
}
```

---

## 12. Medical Disclaimer Schema / Content Rule

Schema does not replace visible medical disclaimers.

Every medical service page should include a visible disclaimer section near the bottom:

```text
Medical Disclaimer
Angel Doctor provides medical travel coordination, hospital matching, translation support, and local medical escort arrangements. Angel Doctor does not provide medical diagnosis, treatment, or emergency medical services. All medical decisions, diagnoses, procedures, prescriptions, and treatment plans are made by licensed healthcare providers and the patient.
```

Do not mark Angel Doctor as `Physician` or `Hospital` unless legally accurate.

---

## 13. Implementation Guidelines for Codex

### 13.1 Create reusable schema helpers

Suggested helpers:

```ts
createOrganizationSchema()
createWebsiteSchema()
createWebPageSchema(page)
createServiceSchema(service)
createBreadcrumbSchema(items)
createFAQSchema(faqs)
createItemListSchema(items)
createArticleSchema(article)
createHowToSchema(steps)
```

### 13.2 Render schema safely

React example:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

For static HTML, output escaped JSON inside script tag.

### 13.3 Allow multiple schema blocks

Each page may render multiple schema blocks:

```text
Organization
WebPage
Service
BreadcrumbList
FAQPage
```

Alternatively, Codex may combine them into one `@graph` object.

Preferred approach: use `@graph` to reduce clutter.

Example:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization" },
    { "@type": "WebPage" },
    { "@type": "BreadcrumbList" }
  ]
}
```

---

## 14. Recommended Schema by Page Map

| Page | Primary Schema | Supporting Schema |
|---|---|---|
| `/` | WebPage | Organization, WebSite, BreadcrumbList, FAQPage |
| `/treatments` | CollectionPage | ItemList, BreadcrumbList |
| `/treatments/*` | Service | WebPage, BreadcrumbList, FAQPage |
| `/destinations` | CollectionPage | ItemList, BreadcrumbList |
| `/destinations/*` | Service | WebPage, City, ItemList, BreadcrumbList, FAQPage |
| `/hospital-access` | Service | WebPage, ItemList, BreadcrumbList, FAQPage |
| `/pricing` | Service | WebPage, BreadcrumbList, FAQPage |
| `/how-it-works` | HowTo | WebPage, BreadcrumbList, FAQPage |
| `/why-angel-doctor` | AboutPage | Organization, BreadcrumbList, FAQPage |
| `/guides` | CollectionPage | ItemList, BreadcrumbList |
| `/guides/*` | Article | WebPage, BreadcrumbList, FAQPage |
| `/contact` | ContactPage | Organization, BreadcrumbList |
| `/legal/privacy-policy` | WebPage | BreadcrumbList |
| `/legal/medical-disclaimer` | WebPage | BreadcrumbList |

---

## 15. Validation Checklist

Before deployment, validate with:

- Google Rich Results Test
- Schema.org Validator
- Search Console after indexing

Checklist:

```text
[ ] All schema uses https://schema.org context
[ ] All URLs are absolute
[ ] `@id` values are stable
[ ] Organization schema does not misrepresent founding date
[ ] Angel Doctor is not marked as Hospital or Physician unless legally accurate
[ ] FAQ schema matches visible FAQ exactly
[ ] Breadcrumb schema matches visible/navigation hierarchy
[ ] Service schema describes coordination, not direct medical treatment
[ ] Hospital names are only used when public authorization exists
[ ] Pricing schema does not publish unverified exact prices
[ ] Article dateModified is updated when content changes
[ ] No fake reviews or aggregateRating are added
[ ] No unsupported medical outcome claims are added
```

---

## 16. Do Not Implement Yet

Avoid these until legally and operationally confirmed:

```text
Review schema
AggregateRating schema
Physician schema for doctors
Hospital schema for named hospitals without authorization
Offer schema with exact prices
InsuranceAccepted schema
MedicalProcedure schema implying Angel Doctor performs procedures
```

These can create compliance, trust, and SEO risk if inaccurate.

---

## 17. Final Codex Instruction

Implement Schema.org JSON-LD as a reusable schema system. Prioritize clarity, accuracy, and medical compliance over aggressive SEO. The schema should help search engines and AI systems understand that Angel Doctor is a medical travel coordination, hospital matching, and local medical escort platform for international patients seeking care in China.

Primary entity to establish:

```text
Angel Doctor = China medical travel coordination platform for international patients.
```

Primary services to reinforce:

```text
Hospital matching
Appointment coordination
Medical travel planning
English-speaking support
Local medical escort service
Dental care coordination
Health checkup coordination
Second opinion coordination
TCM recovery coordination
Destination-based medical travel support
```

Primary GEO entities to reinforce:

```text
Medical travel to China
Healthcare in China for foreigners
Dental care in China
Health checkup in China
Medical second opinion in China
TCM recovery in China
Hospital access in China
Medical escort service in China
Shenzhen medical travel
Shanghai medical travel
Guangzhou medical travel
Beijing medical travel
```
