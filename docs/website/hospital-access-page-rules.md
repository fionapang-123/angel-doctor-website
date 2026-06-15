# Hospital Access Page Rules for Angel Doctor

> Purpose: This document defines the development rules for the Footer-only **Hospital Access** page. It is intended for Codex implementation.

---

## 1. Page Role

The **Hospital Access** page is a standalone Footer page.

It is **not** a main navigation page and **not** a simple hospital directory.

Its role is to support:

1. GEO / SEO visibility
2. User trust and conversion
3. Hospital network explanation
4. Compliance and medical boundary clarity
5. Internal linking to Treatments and Destinations pages

Recommended URL:

```txt
/hospital-access
```

Recommended page title:

```txt
Hospital Access in China for International Patients
```

Recommended meta title:

```txt
Hospital Access in China for International Patients | Angel Doctor
```

Recommended meta description:

```txt
Angel Doctor helps international patients access partner hospitals and healthcare providers in China through care matching, appointment coordination, translation support, and trained local medical escorts.
```

---

## 2. Navigation Placement

Do **not** place `Hospital Access` in the main navigation.

Main navigation should remain:

```txt
Home
Treatments
Destinations
How It Works
Pricing
Why Angel Doctor
Guides
Contact
```

Place `Hospital Access` in the Footer under a trust / company / patient resources group.

Recommended Footer group:

```txt
Trust & Safety
- Why Angel Doctor
- Hospital Access
- Medical Disclaimer
- Privacy Policy
- Terms
```

---

## 3. Core Positioning

The page should explain:

> Angel Doctor helps international patients access suitable hospitals, departments, clinics, and healthcare providers in China through hospital matching, appointment coordination, translation support, and local medical escort services.

Use the phrase **hospital access** instead of **hospital list**.

Avoid positioning the page as:

- A public hospital ranking page
- A guarantee of access to any specific doctor
- A guarantee of treatment outcome
- A pure directory with no user path explanation

---

## 4. Page Structure

Implement the page in the following section order.

### Section 1: Hero

**H1:**

```txt
Hospital Access in China for International Patients
```

**Hero body:**

```txt
Angel Doctor helps international patients access suitable hospitals, clinics, and healthcare providers in China through care matching, appointment coordination, translation support, and trained local medical escorts.
```

**Trust bar:**

```txt
Healthcare group since 1998 · 200+ partner hospitals and healthcare providers · 600+ trained medical escorts · English-speaking support
```

**Primary CTA:**

```txt
Get Your Care Plan
```

**Secondary CTA:**

```txt
View Destinations
```

Primary CTA should link to `/contact` or the main inquiry form.

Secondary CTA should link to `/destinations`.

---

### Section 2: What Hospital Access Means

**Section title:**

```txt
What Hospital Access Means
```

**Copy:**

```txt
Hospital access is not just a list of hospital names. For international patients, it means knowing which hospital, department, doctor type, city, timeline, and support pathway may fit their medical need.

Angel Doctor helps patients understand available care options, prepare the right information, coordinate appointments, arrange local support, and navigate the hospital visit in China.
```

Use a 3-card layout:

#### Card 1

**Title:**

```txt
Care Matching
```

**Body:**

```txt
We help identify suitable hospitals, departments, and care options based on your medical need, location preference, timeline, and budget.
```

#### Card 2

**Title:**

```txt
Appointment Coordination
```

**Body:**

```txt
We support scheduling, information preparation, hospital communication, and visit planning before you arrive.
```

#### Card 3

**Title:**

```txt
Local Hospital Support
```

**Body:**

```txt
Trained medical escorts can help with registration, navigation, translation support, payment guidance, report collection, and follow-up coordination.
```

---

### Section 3: Hospital and Provider Types

**Section title:**

```txt
Types of Hospitals and Providers in Our Network
```

Use cards or icon cards.

Provider types:

```txt
Public Tertiary Hospitals
Specialty Hospitals
Dental Providers
Executive Health Checkup Centers
TCM and Recovery Providers
Rehabilitation Institutions
International Clinics
Private Medical Centers
```

Each provider type card should include:

- Provider type
- Best-fit care areas
- When to choose this provider type
- Relevant treatment links

Example card:

```txt
Public Tertiary Hospitals
Best for: complex specialist care, cancer second opinions, cardiology, neurology, orthopedics, and advanced diagnostics.
When to choose: when your case requires specialist departments, advanced imaging, multidisciplinary review, or hospital-based treatment.
Related: Second Opinion, Health Checkup, Rehabilitation
```

---

### Section 4: Major Medical Destinations

**Section title:**

```txt
Major Medical Destinations in China
```

Show city cards linking to city destination pages.

Recommended cities:

```txt
Shenzhen
Guangzhou
Shanghai
Beijing
Hangzhou
Chengdu
```

Minimum initial launch cities:

```txt
Shenzhen
Guangzhou
Shanghai
Beijing
```

City card fields:

```txt
City name
Short positioning
Best-fit treatments
Available support
Link to city page
```

Example city card:

```txt
Shenzhen
Best for dental care, health checkups, cross-border medical support, and local medical escort services.
Best-fit treatments: Dental Care, Health Checkup, Medical Escort, TCM Recovery
Support: hospital matching, appointment coordination, English-speaking support, local escort
Link: /destinations/shenzhen-medical-travel
```

---

### Section 5: Partner Hospital / Provider Examples

Because hospital names can be publicly displayed, include a dedicated section.

**Section title:**

```txt
Partner Hospital and Provider Examples
```

**Important rule:**
Do not show all 200+ partners at launch unless data is verified, formatted, and approved.

Recommended launch approach:

- Show 8-24 representative hospital/provider cards
- Group by city or provider type
- Include a filter system if there are more than 24 cards
- Add a note that availability depends on confirmation

Recommended grouping options:

Option A: By City

```txt
Beijing
Shanghai
Guangzhou
Shenzhen
Other Cities
```

Option B: By Provider Type

```txt
Public Hospitals
Dental Providers
Health Checkup Centers
TCM Providers
Rehabilitation Providers
International Clinics
```

Preferred approach:

```txt
Group by city first, then allow provider type tags inside each card.
```

---

## 5. Hospital Card Design

### 5.1 Hospital Card Purpose

Hospital cards should create trust and GEO value.

They should not look like aggressive ads.

Each card should answer:

1. What is this hospital/provider?
2. Where is it?
3. What care areas is it suitable for?
4. What support can Angel Doctor provide?
5. What is the availability boundary?

---

### 5.2 Hospital Card Fields

Each hospital card should support these fields:

```ts
type HospitalCard = {
  id: string;
  name: string;
  city: string;
  district?: string;
  providerType: string;
  careAreas: string[];
  bestFor: string[];
  internationalSupport: string[];
  angelDoctorSupport: string[];
  languages?: string[];
  insuranceNote?: string;
  availabilityNote: string;
  relatedTreatments: {
    label: string;
    href: string;
  }[];
  relatedDestination?: {
    label: string;
    href: string;
  };
  logoUrl?: string;
  imageUrl?: string;
  publicDisplayApproved: boolean;
};
```

---

### 5.3 Required Card Content

Each displayed card must include:

```txt
Hospital / Provider Name
City
Provider Type
Best-fit Care Areas
Angel Doctor Support
Availability Note
Related Treatment Links
```

Optional fields:

```txt
District
Logo
Hospital image
Languages
Insurance note
Provider description
```

---

### 5.4 Hospital Card UI Layout

Recommended desktop layout:

```txt
[Logo or Icon] Hospital Name
City · Provider Type

Best-fit care areas:
[Tag] [Tag] [Tag]

How Angel Doctor helps:
- Appointment coordination
- Translation support
- Local medical escort
- Report assistance

Availability:
Appointment options depend on department capacity, doctor schedule, medical record review, and provider confirmation.

[View Related Treatment] [Get Your Care Plan]
```

Recommended mobile layout:

```txt
Hospital Name
City · Provider Type
[Care Tags]
Short support summary
[Get Your Care Plan]
```

Keep mobile cards compact. Expand details with accordion if needed.

---

### 5.5 Hospital Card Example

```txt
Shanghai Example Hospital
Shanghai · Public tertiary hospital

Best-fit care areas:
Oncology · Cardiology · Health Checkup · Specialist Consultation

How Angel Doctor helps:
Angel Doctor helps coordinate care options, prepare medical records, support appointment planning, arrange local hospital navigation, and assist with follow-up communication.

Availability:
Appointment options depend on department capacity, doctor schedule, medical record review, and provider confirmation.

Related:
Medical Second Opinion · Health Checkup · Shanghai Medical Travel
```

---

### 5.6 Hospital Card Style Rules

Use a clean, high-trust, healthcare-grade card design.

Recommended visual style:

- White or very light background
- Thin border
- Rounded corners
- Clear tags
- Minimal icon use
- No flashy gradients inside cards
- Do not overuse hospital logos
- No exaggerated badges like “Best Hospital” unless legally verified

Avoid:

- Star ratings
- Patient ranking claims
- “Top 1” claims
- “Guaranteed appointment” wording
- Unverified doctor names
- Before/after imagery
- Aggressive pricing inside hospital cards

---

## 6. Hospital Data Rules

### 6.1 Public Display Approval

Only display hospital names when `publicDisplayApproved = true`.

If not approved, use generic provider cards:

```txt
Selected public tertiary hospital in Shanghai
Selected dental provider in Shenzhen
Selected executive health checkup center in Guangzhou
```

### 6.2 Hospital Naming

Use the official English hospital name if available.

If no official English name exists, use a consistent transliteration and keep the Chinese name optional.

Example:

```txt
Peking Union Medical College Hospital
北京协和医院
```

Do not translate hospital names casually.

### 6.3 Logo Use

Only use hospital logos if logo usage is explicitly approved.

If logo usage is not approved, use:

- Provider type icon
- City icon
- Neutral hospital building icon

### 6.4 Cooperation Wording

Preferred wording:

```txt
partner hospitals and healthcare providers
```

Alternative safer wording:

```txt
hospitals and healthcare providers in our coordination network
```

Avoid unless legally verified:

```txt
official partner hospital
exclusive partner
certified by the hospital
hospital authorized platform
```

---

## 7. Compliance and Medical Boundary Copy

Add this section before FAQ.

**Section title:**

```txt
Important Notes on Hospital Access
```

**Required copy:**

```txt
Hospital access and appointment availability depend on the patient’s condition, department capacity, doctor schedule, medical record review, city preference, timeline, and provider confirmation.

Angel Doctor provides care coordination, translation support, appointment assistance, and local medical escort services. Medical diagnosis, treatment plans, medical risks, prescriptions, procedures, and clinical decisions are made by licensed healthcare providers.
```

Optional additional copy:

```txt
Angel Doctor does not guarantee treatment outcomes, specific doctor availability, or hospital acceptance for every case. For complex medical conditions, patients may be asked to provide medical records for review before care options can be recommended.
```

---

## 8. Internal Linking Rules

Hospital Access page should link to:

```txt
/treatments
/treatments/dental-care-china
/treatments/health-checkup-china
/treatments/medical-second-opinion-china
/treatments/tcm-recovery-china
/treatments/rehabilitation-china
/destinations
/destinations/shenzhen-medical-travel
/destinations/guangzhou-medical-travel
/destinations/shanghai-medical-travel
/destinations/beijing-medical-travel
/how-it-works
/pricing
/contact
```

Use contextual links, not only buttons.

Example:

```txt
For patients seeking dental care, Angel Doctor can help compare dental providers in major cities such as Shenzhen, Guangzhou, and Shanghai.
```

Link `dental care` to `/treatments/dental-care-china` and city names to destination pages.

---

## 9. FAQ Requirements

Add FAQ section at bottom.

FAQ title:

```txt
Hospital Access FAQ
```

Required questions:

```txt
Can foreigners access hospitals in China?
How does Angel Doctor choose a hospital for international patients?
Can I choose a specific hospital or doctor in China?
Does Angel Doctor work with public or private hospitals?
Can Angel Doctor help with hospital appointments in China?
Can I get an English-speaking medical escort at the hospital?
Do Chinese hospitals accept international insurance?
What medical records should I prepare before hospital matching?
Can Angel Doctor help after I return home?
Does Angel Doctor provide medical diagnosis or treatment?
```

FAQ answers should be factual, cautious, and conversion-oriented.

Example answer:

```txt
Yes. Foreigners can access many hospitals and healthcare providers in China. However, appointment process, language support, payment method, department availability, and documentation requirements vary by hospital. Angel Doctor helps international patients understand suitable options and coordinate the hospital visit process.
```

---

## 10. GEO / SEO Content Rules

The page must include direct answers for AI/search engines.

Include these phrases naturally:

```txt
hospital access in China for international patients
foreigners access hospitals in China
hospital appointment coordination in China
medical travel to China
China hospital matching
English-speaking medical escort in China
partner hospitals in China
public hospitals and private clinics in China
```

Do not keyword stuff.

Use clear H2 and H3 headings.

Recommended headings:

```txt
What Hospital Access Means
Types of Hospitals and Providers in Our Network
Major Medical Destinations in China
Partner Hospital and Provider Examples
How Angel Doctor Supports Your Hospital Visit
Important Notes on Hospital Access
Hospital Access FAQ
```

---

## 11. Schema Requirements

Implement JSON-LD for this page.

Required schema types:

1. `Organization`
2. `WebPage`
3. `Service`
4. `FAQPage`
5. `BreadcrumbList`

Optional schema:

6. `ItemList` for hospital/provider cards
7. `MedicalBusiness` only if the page represents a specific local medical provider; generally avoid using MedicalBusiness for Angel Doctor unless the site has a clear eligible healthcare business profile.

---

### 11.1 WebPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hospital Access in China for International Patients",
  "url": "https://www.example.com/hospital-access",
  "description": "Angel Doctor helps international patients access suitable hospitals and healthcare providers in China through care matching, appointment coordination, translation support, and trained local medical escorts.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Angel Doctor",
    "url": "https://www.example.com"
  },
  "about": [
    "hospital access in China",
    "medical travel to China",
    "hospital appointment coordination",
    "medical escort services"
  ]
}
```

Replace `https://www.example.com` with production domain.

---

### 11.2 Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hospital Access and Care Coordination in China",
  "serviceType": "Medical travel coordination and hospital access support",
  "provider": {
    "@type": "Organization",
    "name": "Angel Doctor"
  },
  "areaServed": {
    "@type": "Country",
    "name": "China"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "International patients seeking healthcare in China"
  },
  "description": "Angel Doctor helps international patients access suitable hospitals, clinics, and healthcare providers in China through hospital matching, appointment coordination, translation support, and local medical escorts."
}
```

---

### 11.3 FAQPage Schema

FAQ schema must match visible FAQ content on the page.

Do not include hidden FAQ in JSON-LD.

---

### 11.4 Breadcrumb Schema

Breadcrumb path:

```txt
Home > Hospital Access
```

---

### 11.5 ItemList Schema for Hospital Cards

If hospital names are displayed, add an `ItemList` schema.

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Partner Hospital and Provider Examples",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Organization",
        "name": "Example Hospital Name",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Shanghai",
          "addressCountry": "CN"
        }
      }
    }
  ]
}
```

Only add data that is visible and verified.

---

## 12. Data File Recommendation

Create a reusable hospital data file.

Suggested path:

```txt
/src/data/hospitals.ts
```

or if using JSON:

```txt
/src/data/hospitals.json
```

Suggested data shape:

```ts
export const hospitals = [
  {
    id: "shanghai-example-hospital",
    name: "Example Hospital Name",
    city: "Shanghai",
    district: "",
    providerType: "Public tertiary hospital",
    careAreas: ["Oncology", "Cardiology", "Health Checkup"],
    bestFor: ["Specialist consultation", "Complex second opinion", "Advanced diagnostics"],
    internationalSupport: ["Appointment coordination", "Translation support", "Local medical escort", "Report assistance"],
    angelDoctorSupport: ["Care matching", "Schedule coordination", "Hospital navigation", "Follow-up communication"],
    languages: ["English support via Angel Doctor"],
    insuranceNote: "Insurance acceptance depends on provider and policy confirmation.",
    availabilityNote: "Appointment options depend on department capacity, doctor schedule, medical record review, and provider confirmation.",
    relatedTreatments: [
      { label: "Medical Second Opinion", href: "/treatments/medical-second-opinion-china" },
      { label: "Health Checkup", href: "/treatments/health-checkup-china" }
    ],
    relatedDestination: { label: "Shanghai Medical Travel", href: "/destinations/shanghai-medical-travel" },
    logoUrl: "",
    imageUrl: "",
    publicDisplayApproved: true
  }
];
```

---

## 13. Filtering and Sorting Rules

If more than 12 hospital cards are displayed, implement filters.

Recommended filters:

```txt
City
Provider Type
Care Area
```

Recommended default sort:

1. Featured / approved priority
2. City priority
3. Provider type
4. Alphabetical name

Do not sort by “best”, “top”, or ratings unless verified data exists.

---

## 14. CTA Rules

Add CTAs in three places:

1. Hero
2. After partner hospital cards
3. Final section above footer

Recommended CTA copy:

```txt
Get Your Care Plan
```

Recommended CTA support text:

```txt
Tell us what care you need, your preferred city, and your timeline. Angel Doctor will help you understand suitable hospital access options in China.
```

Avoid CTA copy such as:

```txt
Book a guaranteed hospital appointment
Reserve top doctor now
Get treatment immediately
```

---

## 15. Accessibility and UX Rules

- Use semantic headings: one H1, clear H2/H3 sections
- Hospital cards must be keyboard accessible
- Filter controls must have labels
- Card tags must have sufficient contrast
- CTA buttons must be large enough on mobile
- Avoid text embedded in images
- Add alt text for hospital/provider images if used
- If logos are used, alt text should be `Hospital Name logo`

---

## 16. Performance Rules

- Lazy-load hospital images/logos
- Avoid heavy map libraries for initial launch
- If using map, implement as optional static map or lightweight SVG first
- Keep JSON-LD generation static where possible
- Use reusable card components

---

## 17. Page Acceptance Criteria

Codex implementation is complete when:

- `/hospital-access` page exists
- Footer links to `/hospital-access`
- Page is not shown in main navigation
- Hero, trust bar, provider type section, city section, hospital card section, compliance section, FAQ, and CTA exist
- Hospital cards are generated from reusable data
- Public display approval field exists in data model
- Hospital availability disclaimer is visible
- FAQ content is visible and included in FAQPage schema
- WebPage, Service, BreadcrumbList, FAQPage, and optional ItemList JSON-LD are implemented
- Page links internally to Treatments, Destinations, How It Works, Pricing, and Contact
- No guaranteed appointment or treatment outcome language appears
- Page is responsive on mobile and desktop

---

## 18. Recommended Initial Hospital Access Page Copy

Use this copy as a starting point.

```txt
Hospital Access in China for International Patients

Angel Doctor helps international patients access suitable hospitals, clinics, and healthcare providers in China through care matching, appointment coordination, translation support, and trained local medical escorts.

Healthcare group since 1998 · 200+ partner hospitals and healthcare providers · 600+ trained medical escorts · English-speaking support

Hospital access is not just a list of hospital names. For international patients, it means knowing which hospital, department, doctor type, city, timeline, and support pathway may fit their medical need.

Angel Doctor helps patients understand available care options, prepare the right information, coordinate appointments, arrange local support, and navigate the hospital visit in China.

Hospital access and appointment availability depend on the patient’s condition, department capacity, doctor schedule, medical record review, city preference, timeline, and provider confirmation.

Angel Doctor provides care coordination, translation support, appointment assistance, and local medical escort services. Medical diagnosis, treatment plans, medical risks, prescriptions, procedures, and clinical decisions are made by licensed healthcare providers.
```

---

## 19. Do Not Implement

Do not implement the following unless separately approved:

- Public doctor ranking
- Hospital star ratings
- Unverified hospital logos
- Patient case claims tied to specific hospitals
- “Best hospital” claims
- Guaranteed doctor availability
- Guaranteed treatment outcomes
- Payment or insurance acceptance claims without provider-level verification
- Large public map with exact hospital locations if not needed for conversion

---

## 20. Strategic Note

The goal of this page is not to make patients choose a hospital by themselves.

The goal is to help them believe:

> Angel Doctor has a real hospital coordination network in China, understands how to match patients to suitable care options, and can support the patient through the hospital journey.

