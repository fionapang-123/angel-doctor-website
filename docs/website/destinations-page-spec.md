# Angel Doctor Destinations Page Specification

> Purpose: This document is for Codex / frontend development. It defines the recommended structure, content modules, hospital/provider card design, SEO/GEO requirements, and implementation notes for the Angel Doctor `Destinations` section.

---

## 1. Strategic Goal

The `Destinations` section should not be a travel page only. It should function as a **city-based medical travel conversion page**.

The page should help international patients answer five questions:

1. Which Chinese city is suitable for my medical need?
2. What treatments are strong in this city?
3. What types of hospitals or healthcare providers can Angel Doctor coordinate with?
4. How does Angel Doctor support me locally?
5. How do I start a care plan?

For GEO and AI-search visibility, each destination page should combine:

- City name
- Treatment categories
- Hospital/provider access
- Local medical escort support
- Estimated patient journey
- FAQ-style answers
- Clear CTA

---

## 2. URL Structure

Recommended main route:

```txt
/destinations
```

Recommended city routes:

```txt
/destinations/shenzhen-medical-travel
/destinations/guangzhou-medical-travel
/destinations/shanghai-medical-travel
/destinations/beijing-medical-travel
/destinations/hainan-medical-wellness
```

Early launch priority:

```txt
/destinations/shenzhen-medical-travel
/destinations/guangzhou-medical-travel
/destinations/shanghai-medical-travel
```

Optional later routes:

```txt
/destinations/hangzhou-medical-travel
/destinations/chengdu-medical-travel
/destinations/hong-kong-china-medical-access
```

---

## 3. Navigation Placement

Main navigation should include:

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

Do not put `Hospitals` in the main navigation at the early stage. Hospital information should be embedded into:

- `Destinations` pages
- `Treatments` pages
- `Why Angel Doctor`
- Footer page: `/hospital-access`

---

## 4. `/destinations` Main Page Design

### 4.1 Page Objective

The main Destinations page should guide users to the right city based on treatment need, not simply list cities.

### 4.2 Hero Section

**H1:**

```txt
Medical Travel Destinations in China
```

**Subheadline:**

```txt
Find the right Chinese city for dental care, health checkups, second opinions, TCM recovery, rehabilitation, and specialist medical support — with Angel Doctor’s hospital coordination and trained local medical escorts.
```

**Trust line:**

```txt
Healthcare group since 1998 · 200+ hospitals and healthcare providers · 600+ trained medical escorts · English-speaking support
```

**Primary CTA:**

```txt
Get Your Care Plan
```

**Secondary CTA:**

```txt
Compare Cities
```

---

## 5. `/destinations` Main Page Sections

Recommended section order:

1. Hero
2. City Finder Cards
3. Best City by Treatment
4. Featured Destination Cards
5. How Local Support Works
6. Hospital Access by City
7. FAQ
8. Final CTA

---

## 6. Section Details

### 6.1 City Finder Cards

Purpose: Help users choose quickly.

Recommended cards:

#### Shenzhen

```txt
Best for: Dental care, health checkups, cross-border support, local medical escort
Why: Fast access, modern clinics, proximity to Hong Kong, strong private healthcare options
CTA: Explore Shenzhen
```

#### Guangzhou

```txt
Best for: TCM recovery, rehabilitation, specialist care, health checkups
Why: Strong medical resources, traditional Chinese medicine depth, major southern China medical hub
CTA: Explore Guangzhou
```

#### Shanghai

```txt
Best for: Executive checkups, international clinics, specialist second opinions, aesthetic care
Why: International patient infrastructure, high-end private care, strong hospital ecosystem
CTA: Explore Shanghai
```

#### Beijing

```txt
Best for: Complex specialist care, second opinions, oncology, cardiology, neurology
Why: Concentration of top national hospitals and specialist departments
CTA: Explore Beijing
```


---

### 6.2 Best City by Treatment

This section should be a comparison matrix.

| Treatment | Recommended Cities | Why |
|---|---|---|
| Dental Care | Shenzhen, Shanghai, Guangzhou | Modern dental providers, strong access, short treatment trips |
| Health Checkup | Shanghai, Shenzhen, Guangzhou | Executive checkup centers, imaging, specialist review |
| Second Opinion | Beijing, Shanghai, Guangzhou | Strong specialist hospitals and department depth |
| TCM Recovery | Guangzhou, Hainan, Shanghai | TCM institutions, acupuncture, pain/sleep/stress recovery |
| Rehabilitation | Guangzhou, Shanghai, Hainan | Orthopedic, neurological, post-surgery and wellness recovery |
| Aesthetic Care | Shanghai, Shenzhen, Guangzhou | Skin, dermatology, light aesthetic care, private provider access |

CTA below matrix:

```txt
Not sure which city is right for you? Get a personalized care plan.
```

Button:

```txt
Get Your Care Plan
```

---

### 6.3 Featured Destination Cards

Each destination card should include:

- City name
- One-line positioning
- Best-fit treatments
- Local support available
- Hospital/provider types
- CTA

Example component content:

```txt
Shenzhen Medical Travel
Fast, modern, and convenient medical access near Hong Kong.

Best for:
Dental Care · Health Checkup · Medical Escort · TCM Recovery

Provider access:
Dental providers · Health checkup centers · Public hospital departments · Private clinics

Support:
Hospital matching · Appointment coordination · English-speaking support · Local medical escort

CTA: View Shenzhen
```

---

### 6.4 How Local Support Works

This section should reinforce Angel Doctor’s offline service advantage.

**Section title:**

```txt
Local Support in Every Destination
```

**Cards:**

1. **Before You Travel**
   - Care needs review
   - Hospital/provider matching
   - Estimated timeline and pricing guidance
   - Appointment coordination

2. **When You Arrive**
   - Local medical escort
   - Hospital navigation
   - Registration and payment assistance
   - Translation and communication support

3. **After Your Visit**
   - Report collection support
   - Follow-up coordination
   - Medication and instruction explanation
   - Return-home care guidance when available

---

### 6.5 Hospital Access by City

Purpose: Provide GEO-friendly content and trust signals without turning the page into a raw hospital directory.

**Section title:**

```txt
Hospital and Provider Access by City
```

**Intro copy:**

```txt
Angel Doctor works with a nationwide coordination network of hospitals and healthcare providers across China. Depending on your medical need, city preference, timeline, budget, and language requirements, we help identify suitable care options and coordinate your hospital visit.
```

**Important compliance line:**

```txt
Hospital access and appointment availability depend on your condition, department capacity, doctor schedule, medical record review, and provider confirmation.
```

City resource blocks should include provider types rather than overwhelming users with long lists.

Example:

```txt
Shenzhen
Provider types: Dental providers, health checkup centers, public hospital departments, private clinics, TCM providers
Best-fit treatments: Dental Care, Health Checkup, Medical Escort, TCM Recovery
Local support: Appointment coordination, English-speaking support, registration assistance, escort support
```

---

## 7. Individual City Page Template

All city pages should use the same structure for consistency.

Recommended section order:

1. City Hero
2. Quick Answer
3. Why This City
4. Best-Fit Treatments
5. Hospital and Provider Access
6. Hospital / Provider Cards
7. Sample Patient Journey
8. Local Medical Escort Support
9. Pricing Guidance
10. What to Prepare
11. FAQ
12. Final CTA

---

## 8. City Page Hero Design

Example: `/destinations/shenzhen-medical-travel`

**H1:**

```txt
Medical Travel in Shenzhen for International Patients
```

**Subheadline:**

```txt
Access dental care, health checkups, TCM recovery, and local medical escort support in Shenzhen with Angel Doctor’s hospital matching, transparent coordination, and English-speaking assistance.
```

**Trust line:**

```txt
Near Hong Kong · Dental and checkup access · Local medical escorts · English-speaking coordination
```

**CTA buttons:**

```txt
Get Your Shenzhen Care Plan
View Treatments in Shenzhen
```

---

## 9. Quick Answer Section

Every city page should include a short GEO-friendly answer block near the top.

Example:

```txt
Quick Answer

Shenzhen is a strong destination for international patients seeking dental care, health checkups, local medical escort support, and convenient cross-border medical access near Hong Kong. Angel Doctor helps patients compare provider options, coordinate appointments, understand expected costs and timelines, and receive local support during hospital or clinic visits.
```

This block helps AI search engines extract a clear answer.

---

## 10. Best-Fit Treatments Section

Use cards.

Card fields:

- Treatment name
- Why this city is suitable
- Typical patient need
- CTA to treatment page

Example cards for Shenzhen:

```txt
Dental Care
Suitable for dental implants, crowns, veneers, checkups, and short-stay dental treatment planning.
CTA: Explore Dental Care

Health Checkup
Suitable for executive checkups, preventive screening, imaging, blood tests, and specialist review.
CTA: Explore Health Checkup

Medical Escort
Suitable for patients who need help with registration, hospital navigation, payment, translation, and follow-up.
CTA: Book Medical Escort

TCM Recovery
Suitable for pain relief, sleep support, stress recovery, fatigue, and wellness-focused recovery programs.
CTA: Explore TCM Recovery
```

---

## 11. Hospital and Provider Access Section

### 11.1 Section Title

```txt
Hospital and Provider Access in [City]
```

### 11.2 Intro Copy

```txt
Angel Doctor can help international patients coordinate care with selected hospitals and healthcare providers in [City], including public hospital departments, specialty providers, private clinics, dental providers, health checkup centers, TCM institutions, and rehabilitation providers.
```

### 11.3 Matching Logic Copy

```txt
We recommend care options based on your medical need, preferred timeline, estimated budget, city preference, language support needs, and follow-up requirements.
```

### 11.4 Compliance Copy

```txt
Final appointment availability depends on provider confirmation, doctor schedule, department capacity, and medical record review when required.
```

---

## 12. Hospital / Provider Card Design

Hospital/provider cards are important for trust and GEO. They should not be simple logo cards.

### 12.1 Card Purpose

Each card should help patients understand:

- What type of provider it is
- Which treatment areas it is suitable for
- What Angel Doctor can coordinate
- Whether international patient support is available
- What limitations apply

### 12.2 Card Layout

Recommended card layout:

```txt
[Provider Name or Provider Category]
City · Provider Type

Best-fit care areas:
Dental Care · Health Checkup · TCM Recovery

Suitable for:
Short description of patient needs.

Angel Doctor support:
Hospital matching · Appointment coordination · Translation support · Local medical escort · Follow-up coordination

Notes:
Availability depends on provider confirmation and patient needs.

CTA:
Ask About This Provider
```

### 12.3 If Hospital Names Can Be Publicly Displayed

Use this format:

```txt
[Hospital / Provider Name]
[City] · [Public tertiary hospital / Specialty hospital / Private clinic / Dental provider / Health checkup center]

Best-fit care areas:
Oncology · Cardiology · Health Checkup · Second Opinion

Why it may be suitable:
A short, factual description. Avoid exaggerated claims such as “best hospital” unless officially supported.

Angel Doctor can help with:
Medical record preparation · Appointment coordination · Hospital navigation · Translation support · Local escort

Availability:
Appointments depend on department capacity, doctor schedule, and provider confirmation.

CTA: Get Matched
```

### 12.4 If Hospital Names Cannot Be Publicly Displayed

Use category cards:

```txt
Selected Public Tertiary Hospitals in Shanghai
Shanghai · Public hospital departments

Best-fit care areas:
Cancer Second Opinion · Cardiology · Neurology · Orthopedics

Suitable for:
Patients seeking specialist review, complex condition assessment, or hospital-based diagnostic support.

Angel Doctor can help with:
Medical record translation · Department matching · Appointment coordination · Local medical escort

Availability:
Specific hospital and doctor options are confirmed after case review.

CTA: Request Hospital Matching
```

This is safer and still useful for GEO.

---

## 13. Hospital / Provider Card Data Model

Recommended JSON-like structure for implementation:

```json
{
  "id": "shenzhen-dental-provider-01",
  "displayName": "Selected Dental Providers in Shenzhen",
  "publicNameAllowed": false,
  "city": "Shenzhen",
  "providerType": "Dental provider",
  "providerCategory": "Private dental clinic / dental hospital",
  "bestFitCareAreas": [
    "Dental Care",
    "Dental Implants",
    "Crowns",
    "Veneers",
    "Dental Checkup"
  ],
  "suitableFor": "International patients seeking short-stay dental evaluation, dental implants, crowns, veneers, and treatment planning in Shenzhen.",
  "angelDoctorSupport": [
    "Provider matching",
    "Appointment coordination",
    "Treatment timeline guidance",
    "Translation support",
    "Local medical escort",
    "Follow-up coordination"
  ],
  "availabilityNote": "Final provider access depends on treatment needs, appointment availability, doctor schedule, and provider confirmation.",
  "ctaLabel": "Ask About Dental Care in Shenzhen",
  "ctaHref": "/contact?interest=dental-care&city=shenzhen"
}
```

### 13.1 Fields

| Field | Required | Notes |
|---|---:|---|
| `id` | Yes | Stable internal slug |
| `displayName` | Yes | Public title shown on card |
| `publicNameAllowed` | Yes | Boolean for compliance control |
| `city` | Yes | City name |
| `providerType` | Yes | Public tertiary hospital, specialty hospital, dental provider, etc. |
| `providerCategory` | Optional | More detailed classification |
| `bestFitCareAreas` | Yes | Treatment tags |
| `suitableFor` | Yes | Consumer-facing explanation |
| `angelDoctorSupport` | Yes | Support services |
| `availabilityNote` | Yes | Compliance note |
| `ctaLabel` | Yes | Button label |
| `ctaHref` | Yes | CTA target |

---

## 14. Hospital / Provider Card Visual Design

### 14.1 Visual Hierarchy

Each card should have:

1. Provider name/category as the strongest visual element
2. City + provider type as a small metadata line
3. Treatment tags
4. Short explanation
5. Support list
6. CTA

### 14.2 Recommended UI Pattern

Desktop:

- 2-column or 3-column card grid
- Each card should have equal height where possible
- Use tags/pills for care areas
- CTA button at bottom

Mobile:

- Single-column cards
- Keep text short
- CTA always visible

### 14.3 Card Components

```txt
Card Header
- Provider display name
- City and provider type

Tag Row
- Dental Care
- Health Checkup
- TCM Recovery

Body
- Suitable for short explanation

Support List
- Appointment coordination
- Translation support
- Medical escort

Footer
- Availability note
- CTA button
```

### 14.4 Design Tone

Cards should feel credible, calm, and medical. Avoid luxury travel styling that makes the service feel superficial.

Recommended style:

- White or very light background
- Subtle border
- Soft shadow only if current site uses shadows
- Rounded corners
- Clear readable text
- Minimal icons
- No overuse of hospital logos unless authorized

---

## 15. Sample City Page Content: Shenzhen

### H1

```txt
Medical Travel in Shenzhen for International Patients
```

### Subheadline

```txt
Access dental care, health checkups, TCM recovery, and local medical escort support in Shenzhen with Angel Doctor’s hospital matching, transparent coordination, and English-speaking assistance.
```

### Quick Answer

```txt
Shenzhen is a convenient destination for international patients seeking dental care, health checkups, and local medical support near Hong Kong. Angel Doctor helps patients compare provider options, coordinate appointments, understand expected timelines, and receive local medical escort support during hospital or clinic visits.
```

### Best-Fit Treatments

```txt
Dental Care
Suitable for dental implants, crowns, veneers, dental checkups, and short-stay dental treatment planning.

Health Checkup
Suitable for executive health screening, preventive checkups, imaging, blood tests, and specialist review.

Medical Escort
Suitable for patients who need help with hospital navigation, registration, payment, translation, and follow-up.

TCM Recovery
Suitable for pain relief, sleep support, stress recovery, fatigue, and wellness-focused recovery programs.
```

### Hospital Access Intro

```txt
Angel Doctor can help international patients coordinate care with selected hospitals and healthcare providers in Shenzhen, including dental providers, health checkup centers, public hospital departments, private clinics, TCM providers, and rehabilitation providers.
```

### Sample Provider Cards

#### Card 1

```txt
Selected Dental Providers in Shenzhen
Shenzhen · Dental provider

Best-fit care areas:
Dental Implants · Crowns · Veneers · Dental Checkup

Suitable for:
International patients seeking short-stay dental evaluation, dental treatment planning, implants, crowns, or veneers.

Angel Doctor support:
Provider matching · Appointment coordination · Translation support · Local medical escort · Follow-up coordination

Availability:
Final provider access depends on treatment needs, doctor schedule, and provider confirmation.

CTA: Ask About Dental Care in Shenzhen
```

#### Card 2

```txt
Health Checkup Centers in Shenzhen
Shenzhen · Health checkup provider

Best-fit care areas:
Executive Checkup · Preventive Screening · Imaging · Blood Tests

Suitable for:
Patients who want preventive screening, executive checkups, imaging, and report explanation during a short stay in China.

Angel Doctor support:
Package comparison · Appointment coordination · Report assistance · Translation support · Local escort

Availability:
Checkup availability depends on package selection, provider capacity, and appointment confirmation.

CTA: Plan a Health Checkup in Shenzhen
```

#### Card 3

```txt
Selected Public Hospital Departments in Shenzhen
Shenzhen · Public hospital departments

Best-fit care areas:
Second Opinion · Specialist Consultation · Diagnostic Review

Suitable for:
Patients seeking specialist review, diagnostic support, or referral guidance based on medical records.

Angel Doctor support:
Medical record preparation · Department matching · Appointment coordination · Hospital navigation · Translation support

Availability:
Specific hospital and doctor options are confirmed after case review.

CTA: Request Hospital Matching
```

---

## 16. Sample City Page Content: Shanghai

### H1

```txt
Medical Travel in Shanghai for International Patients
```

### Positioning

```txt
Shanghai is suitable for executive health checkups, international clinics, specialist second opinions, skin and aesthetic care, and private healthcare access for international patients.
```

### Best-Fit Treatments

```txt
Executive Health Checkup
Second Opinion
Aesthetic Care
Dental Care
Specialist Consultation
```

### Provider Cards

```txt
International Clinics in Shanghai
Shanghai · International clinic
Best-fit care areas: Health Checkup · Specialist Consultation · English-speaking care

Executive Health Checkup Centers in Shanghai
Shanghai · Health checkup provider
Best-fit care areas: Preventive Screening · Imaging · Cancer Screening · Cardiovascular Screening

Selected Specialist Hospital Departments in Shanghai
Shanghai · Public hospital departments
Best-fit care areas: Oncology · Cardiology · Orthopedics · Neurology · Second Opinion
```

---

## 17. Sample City Page Content: Guangzhou

### H1

```txt
Medical Travel in Guangzhou for International Patients
```

### Positioning

```txt
Guangzhou is a strong southern China medical hub for TCM recovery, rehabilitation, health checkups, specialist consultations, and medical escort support.
```

### Best-Fit Treatments

```txt
TCM Recovery
Rehabilitation
Health Checkup
Second Opinion
Dental Care
```

### Provider Cards

```txt
TCM Providers in Guangzhou
Guangzhou · TCM institution
Best-fit care areas: Acupuncture · Pain Relief · Sleep Support · Stress Recovery

Rehabilitation Providers in Guangzhou
Guangzhou · Rehabilitation provider
Best-fit care areas: Orthopedic Rehabilitation · Post-surgery Recovery · Physical Therapy

Selected Public Hospital Departments in Guangzhou
Guangzhou · Public hospital departments
Best-fit care areas: Specialist Consultation · Second Opinion · Diagnostic Review
```

---

## 18. Sample Patient Journey Section

This section should appear on every city page.

### Section Title

```txt
Your Medical Journey in [City]
```

### Steps

```txt
1. Share your medical need
Tell us your treatment interest, timeline, city preference, and support needs.

2. Review care options
Angel Doctor helps compare suitable hospitals or providers, expected timelines, and pricing guidance.

3. Confirm your visit
We coordinate appointments and prepare your hospital visit plan.

4. Arrive with local support
A trained medical escort can help with registration, navigation, payment, communication, and follow-up.

5. Continue after the visit
We help with reports, instructions, and follow-up coordination when available.
```

---

## 19. Pricing Guidance Section

Do not promise fixed medical prices on destination pages. Use guidance language.

### Section Title

```txt
Pricing Guidance in [City]
```

### Copy

```txt
Your total cost depends on the treatment type, hospital or provider, doctor availability, diagnostic requirements, treatment complexity, and length of stay. Angel Doctor provides transparent pricing guidance before you confirm your care plan.
```

### Cost Components

```txt
Hospital or provider medical fees
Angel Doctor coordination and escort service fees
Translation or medical record preparation if needed
Travel, hotel, and local transportation costs
```

CTA:

```txt
Request a Cost Estimate
```

---

## 20. What to Prepare Section

### Section Title

```txt
What to Prepare Before Medical Travel to [City]
```

### Checklist

```txt
Passport and travel timeline
Current symptoms or treatment goals
Previous diagnosis if available
Medical records for complex conditions
Dental X-rays or CBCT for dental treatment if available
Medication list
Insurance information if relevant
Preferred language support
```

---

## 21. FAQ for City Pages

Each city page should include FAQPage schema.

Recommended questions:

```txt
Can foreigners see doctors in [City]?
What treatments is [City] best for?
Can Angel Doctor help me choose a hospital in [City]?
Can I get an English-speaking medical escort in [City]?
How much does medical care in [City] cost?
Can I choose a specific hospital or doctor?
How long should I stay in [City] for treatment?
Do I need medical records before appointment matching?
Can Angel Doctor help after I return home?
```

Example answer:

```txt
Yes. Foreigners can access hospitals, clinics, and healthcare providers in [City]. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, arrange local medical escort support, and prepare for hospital visits.
```

---

## 22. CTA Rules

Primary CTA across destination pages:

```txt
Get Your Care Plan
```

City-specific CTA:

```txt
Get Your [City] Care Plan
```

Provider card CTA examples:

```txt
Ask About This Provider
Request Hospital Matching
Plan a Health Checkup
Ask About Dental Care
Book Local Medical Escort
```

CTA should route to a form with hidden fields:

```txt
source_page: destination city page
city: shenzhen / guangzhou / shanghai
interest: selected treatment or provider card
```

---

## 23. Recommended Form Fields

Destination lead form:

```txt
Name
Email
WhatsApp
Country / Region
City interested in
Treatment interested in
When do you plan to be in China?
Do you need local medical escort support?
Briefly describe what you need
```

For complex care, optionally add:

```txt
Diagnosis if available
Upload medical records
Preferred hospital or doctor if any
```

---

## 24. SEO / GEO Requirements

Each city page must include:

### Metadata

Example Shenzhen:

```txt
Title: Medical Travel in Shenzhen for International Patients | Angel Doctor
Description: Access dental care, health checkups, TCM recovery, hospital coordination, and local medical escort support in Shenzhen with Angel Doctor.
```

### H1

```txt
Medical Travel in [City] for International Patients
```

### Required Keywords in Natural Language

```txt
medical travel in [City]
healthcare in [City] for foreigners
hospital access in [City]
medical escort in [City]
dental care in [City]
health checkup in [City]
China medical travel
international patients in China
```

Do not keyword-stuff. Use natural headings and answers.

### GEO-Friendly Blocks

Each page should have:

- Quick Answer
- Best-fit treatments
- Hospital/provider access
- Step-by-step patient journey
- Pricing guidance
- FAQ
- Last updated date

---

## 25. Schema Recommendations

Add structured data where possible.

### 25.1 BreadcrumbList

For all destination pages.

### 25.2 FAQPage

For FAQ section.

### 25.3 Service Schema

Example:

```json
{
  "@type": "Service",
  "name": "Medical Travel Coordination in Shenzhen",
  "provider": {
    "@type": "Organization",
    "name": "Angel Doctor"
  },
  "areaServed": "Shenzhen, China",
  "serviceType": "Medical travel coordination, hospital matching, medical escort"
}
```

### 25.4 Organization Schema

Use site-wide.

Important: If using 1998 founding date, clarify in visible text that this refers to the healthcare group backing Angel Doctor, not necessarily the Angel Doctor brand itself.

---

## 26. Compliance and Risk Language

Do not use exaggerated claims:

Avoid:

```txt
Best hospital in China
Guaranteed appointment
Guaranteed cure
Lowest price
Zero risk
Zero hassle
```

Use:

```txt
Suitable care options
Hospital coordination
Pricing guidance
Provider confirmation required
Medical decisions are made by licensed healthcare professionals
Angel Doctor provides coordination, translation, and local support, not medical diagnosis or treatment
```

Recommended disclaimer block for destination pages:

```txt
Angel Doctor provides care coordination, hospital matching, translation support, and local medical escort services. Medical diagnosis, treatment decisions, and clinical outcomes are the responsibility of licensed healthcare providers. Appointment availability, treatment options, and costs depend on provider confirmation and individual medical needs.
```

---

## 27. Development Notes for Codex

### 27.1 Component Suggestions

Recommended components:

```txt
DestinationHero
CityFinderGrid
TreatmentCityMatrix
DestinationCard
CityTreatmentCards
HospitalAccessSection
ProviderCard
PatientJourneySteps
PricingGuidanceBlock
PreparationChecklist
FAQAccordion
FinalCTA
```

### 27.2 Data-Driven Implementation

City pages should be data-driven, not hardcoded page-by-page.

Recommended content source:

```txt
/src/data/destinations.json
/src/data/providerCards.json
/src/data/treatments.json
```

Each city object should include:

```json
{
  "slug": "shenzhen-medical-travel",
  "city": "Shenzhen",
  "h1": "Medical Travel in Shenzhen for International Patients",
  "positioning": "Fast, modern, and convenient medical access near Hong Kong.",
  "bestFitTreatments": ["Dental Care", "Health Checkup", "Medical Escort", "TCM Recovery"],
  "providerTypes": ["Dental providers", "Health checkup centers", "Public hospital departments", "Private clinics", "TCM providers"],
  "supportServices": ["Hospital matching", "Appointment coordination", "English-speaking support", "Local medical escort"],
  "faq": []
}
```

### 27.3 Routing

Generate city pages from destination slug.

### 27.4 CTA Tracking

Every CTA should pass source context:

```txt
?source=destinations&city=shenzhen&interest=dental-care
```

### 27.5 Mobile Requirements

- Hero CTA visible without scrolling too far
- City cards in single column
- Provider cards easy to scan
- FAQ collapsed by default
- Sticky bottom CTA optional: `Get Your Care Plan`

---

## 28. Launch Priority

### Priority 1

```txt
/destinations
/destinations/shenzhen-medical-travel
/destinations/shanghai-medical-travel
/destinations/guangzhou-medical-travel
```

### Priority 2

```txt
/destinations/beijing-medical-travel
/destinations/hainan-medical-wellness
```

### Priority 3

```txt
/hospital-access
City-specific hospital/provider pages if legally approved
```

---

## 29. Final Recommendation

The `Destinations` section should not be designed as a generic travel directory. It should be designed as a **city-based medical decision guide**.

Best structure:

```txt
City → Best-fit treatments → Hospital/provider access → Local support → Patient journey → CTA
```

Hospital/provider cards should be used as trust-building and GEO content modules, not as raw directory listings. Each card should explain what the provider is suitable for, what Angel Doctor can help with, and what depends on provider confirmation.

This structure supports both:

1. Consumer conversion
2. GEO / AI-search visibility

