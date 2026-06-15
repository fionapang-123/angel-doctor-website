# Angel Doctor GEO-First Website Structure & Development Notes

> Version: v2.0  
> Project: Angel Doctor International Medical Tourism Platform  
> Current Focus: Dental + Health Checkup + Second Opinion + TCM Recovery  
> Strategic Priority: Consumer conversion + GEO / SEO discovery  
> Purpose: Source-of-truth website architecture document for Codex, Claude Code, and developers.

---

## 0. What Changed From v1.0

This version updates the earlier GEO-first structure based on the latest positioning decisions.

### Major Updates

```text
1. Main navigation changes from Specialties to Treatments.
2. About is moved out of primary navigation; Why Angel Doctor becomes the trust/conversion page.
3. Patient Guides becomes Guides in navigation.
4. Destinations is added as a major conversion and GEO section.
5. Hospital Access is added as a footer-level trust/GEO page.
6. Treatments become the service conversion engine.
7. Guides remain the content discovery engine.
8. Destinations become the city-based medical travel engine.
9. Hospital cards are used inside Destinations and Hospital Access pages.
10. Schema rules are required by page type.
```

### New Source of Truth

```text
/guides/ = GEO / SEO content discovery
/treatments/ = service conversion and patient inquiry
/destinations/ = city-based conversion and GEO visibility
/hospital-access = hospital network trust and structured GEO support
/why-angel-doctor = trust, differentiation, and conversion
/contact = lead capture
```

---

## 1. Core Strategy

Angel Doctor should be built as a scalable international medical tourism platform, not as a single-specialty dental website.

The website must help international patients answer five questions quickly:

```text
1. Can I get suitable healthcare in China?
2. Which treatment or city should I consider?
3. How much might it cost?
4. How does the process work?
5. Why should I trust Angel Doctor?
```

### Brand Positioning

```text
Angel Doctor helps international patients access trusted healthcare in China through AI-assisted hospital matching, transparent coordination, English-speaking support, and trained local medical escorts.
```

### Hero Conversion Message

```text
Fast Care. Fair Price. Clear Guidance.
```

### Brand Mindset Slogan

```text
China Healthcare, Guided End to End.
```

### Recommended Homepage Trust Bar

```text
Healthcare group since 1998 · 200+ partner hospitals · 600+ trained medical escorts · English-speaking support
```

Important wording rule:

```text
Use "Healthcare group since 1998" only if 1998 refers to the parent healthcare group.
Do not write "Angel Doctor since 1998" unless the Angel Doctor brand itself was founded in 1998.
```

---

## 2. Correct Platform Positioning

### Correct Positioning

```text
Angel Doctor is a healthcare coordination and medical travel support platform for international patients seeking care in China.
```

Angel Doctor supports:

```text
AI-assisted hospital matching
Hospital and appointment coordination
Treatment pathway guidance
Translation and communication support
Trained local medical escorts
Pricing guidance
Travel-to-care coordination
Follow-up communication support
```

### Incorrect Positioning

Do not position Angel Doctor as:

```text
A hospital
A dental clinic
A treatment marketplace
A pure agency site
A cheap medical tourism directory
A company that guarantees outcomes
A substitute for licensed medical advice
```

---

## 3. Final Recommended Main Navigation

### Desktop Navigation

```text
Home
Treatments
Destinations
How It Works
Pricing
Why Angel Doctor
Guides
Contact
```

### Mobile Navigation

```text
Treatments
Destinations
How It Works
Pricing
Why Angel Doctor
Guides
Contact
```

### Footer Navigation

```text
About Angel Doctor
Hospital Access
Trust & Safety
Medical Disclaimer
Privacy Policy
Terms
Contact
```

### Navigation Rules

```text
Use Treatments, not Specialties, in the primary navigation.
Use Guides, not Patient Guides, in the primary navigation.
Use Why Angel Doctor, not About, in the primary navigation.
Do not place Hospitals in the primary navigation.
Place Hospital Access in the footer and link to it from relevant pages.
```

---

## 4. Recommended Top-Level Website Structure

```text
/
  Homepage

/treatments
  Treatment overview and service conversion hub

/treatments/dental-care-china
  Dental Care in China

/treatments/health-checkup-china
  Health Checkup in China

/treatments/medical-second-opinion-china
  Medical Second Opinion in China

/treatments/tcm-recovery-china
  TCM Recovery in China

/treatments/aesthetic-care-china
  Skin & Aesthetic Care in China

/treatments/rehabilitation-china
  Rehabilitation in China

/destinations
  City-based medical travel hub

/destinations/shenzhen-medical-travel
  Shenzhen Medical Travel

/destinations/guangzhou-medical-travel
  Guangzhou Medical Travel

/destinations/shanghai-medical-travel
  Shanghai Medical Travel

/destinations/beijing-medical-travel
  Beijing Medical Travel

/destinations/hainan-medical-wellness
  Hainan Medical Wellness

/guides
  GEO / SEO content hub

/guides/dental-implants-china-cost
  Cost guide for dental implants in China

/guides/can-foreigners-see-doctors-in-china
  Foreigner access guide

/guides/china-vs-thailand-medical-tourism
  Competitive comparison guide

/guides/china-vs-turkey-dental-tourism
  Dental tourism comparison guide

/guides/medical-escort-service-china
  Medical escort guide

/how-it-works
  Cross-border medical travel process

/pricing
  Pricing guidance and transparency

/why-angel-doctor
  Trust, differentiation, and proof

/hospital-access
  Hospital network and hospital access explanation

/contact
  Lead capture

/legal/privacy-policy
/legal/terms
/legal/medical-disclaimer
/legal/data-protection
```

---

## 5. URL Strategy

### Use Consumer-Friendly URLs

Use:

```text
/treatments/dental-care-china
/treatments/health-checkup-china
/treatments/medical-second-opinion-china
/treatments/tcm-recovery-china
/destinations/shenzhen-medical-travel
/guides/dental-implants-china-cost
```

Avoid:

```text
/specialties/dental
/specialties/tcm
/specialties/orthopedics
/specialties/dental/guides/dental-implants-in-china
```

### Why Use Treatments Instead of Specialties

```text
Treatments is consumer language.
Specialties is hospital/internal medical language.
International patients search for treatment needs, not internal department names.
```

### Why Keep Guides Separate

```text
/guides/ is the platform-level content hub.
Guide pages are written to answer patient questions and support AI search citation.
Treatment pages are written to convert patients into inquiries.
Do not place guide articles under /treatments/.
```

---

## 6. Page Type Definitions

Codex must clearly separate page types.

---

### 6.1 Homepage

Purpose:

```text
Explain the promise quickly.
Convert visitors into care plan inquiries.
Show the platform is credible.
Route users to treatments, destinations, pricing, and guides.
```

Recommended homepage structure:

```text
1. Hero
2. Trust Bar
3. China Healthcare, Guided End to End section
4. Popular Treatments
5. How It Works
6. Featured Destinations
7. Why Angel Doctor
8. Pricing Transparency
9. Featured Guides
10. FAQ
11. Final CTA
```

Hero copy:

```text
H1:
Fast Care. Fair Price. Clear Guidance.

Subheadline:
Access trusted healthcare in China with AI hospital matching, transparent coordination, and trained local medical escorts.

Trust Bar:
Healthcare group since 1998 · 200+ partner hospitals · 600+ trained medical escorts · English-speaking support

CTA:
Get Your Care Plan
```

---

### 6.2 Treatments Pages

Treatment pages live under:

```text
/treatments/
```

Purpose:

```text
Explain the care category.
Show how Angel Doctor supports the patient journey.
Build conversion intent.
Move users toward Contact or Get Your Care Plan.
```

Recommended active treatment pages:

```text
/treatments/dental-care-china
/treatments/health-checkup-china
/treatments/medical-second-opinion-china
/treatments/tcm-recovery-china
```

Future treatment pages:

```text
/treatments/aesthetic-care-china
/treatments/rehabilitation-china
/treatments/fertility-care-china
/treatments/oncology-second-opinion-china
/treatments/cardiology-care-china
/treatments/orthopedic-care-china
```

Treatment page template:

```text
1. Hero
2. Who this is for
3. Common patient needs
4. What this treatment may include
5. How Angel Doctor helps
6. Best-fit destinations
7. Hospital/provider access module
8. Estimated timeline
9. Pricing guidance
10. What to prepare
11. Risks and limitations
12. FAQ
13. CTA
14. Medical disclaimer
```

Primary CTA:

```text
Get Your Care Plan
```

Secondary CTA:

```text
Talk to a Care Coordinator
```

---

### 6.3 Destinations Pages

Destination pages live under:

```text
/destinations/
```

Purpose:

```text
Create city-based GEO visibility.
Help patients choose a practical medical travel destination.
Connect cities to treatments, hospital access, local escorts, airport/hotel support, and CTA.
```

Destination hub:

```text
/destinations
```

City pages:

```text
/destinations/shenzhen-medical-travel
/destinations/guangzhou-medical-travel
/destinations/shanghai-medical-travel
/destinations/beijing-medical-travel
/destinations/hainan-medical-wellness
```

Destination page template:

```text
1. Hero
2. Quick answer
3. Why choose this city for medical care
4. Best-fit treatments in this city
5. Hospital access in this city
6. Hospital/provider cards
7. How Angel Doctor supports you locally
8. Arrival, hotel, and hospital visit support
9. Estimated timelines
10. Related treatment links
11. Related guide links
12. FAQ
13. CTA
14. Medical disclaimer
```

Example city hero:

```text
H1:
Medical Travel in Shenzhen for International Patients

Subheadline:
Access dental care, health checkups, TCM recovery, and local medical escort support in Shenzhen with Angel Doctor’s care coordination team.

CTA:
Get a Shenzhen Care Plan
```

Destination page GEO questions to answer:

```text
Can foreigners see doctors in Shenzhen?
What treatments are suitable in Shenzhen?
Can Angel Doctor help with hospital appointments in Shenzhen?
Can I get an English-speaking medical escort in Shenzhen?
How long should I stay in Shenzhen for dental care or health checkups?
```

---

### 6.4 Guides Pages

Guide pages live under:

```text
/guides/
```

Purpose:

```text
Answer patient questions.
Support GEO and SEO discovery.
Build trust before conversion.
Provide AI-search-friendly explanations.
Route users to treatment and destination pages.
```

Recommended guide page template:

```text
1. H1
2. Quick answer
3. Who this guide is for
4. Topic overview
5. Why patients consider China
6. Typical process
7. Cost factors
8. Timeline factors
9. Risks and questions to ask
10. What international patients should prepare
11. How Angel Doctor helps
12. Related treatments
13. Related destinations
14. FAQ
15. CTA
16. Medical disclaimer
17. Last updated date
```

Recommended first guides:

```text
/guides/dental-implants-china-cost
/guides/can-foreigners-see-doctors-in-china
/guides/how-to-choose-a-hospital-in-china
/guides/china-medical-travel-process
/guides/china-vs-thailand-medical-tourism
/guides/china-vs-turkey-dental-tourism
/guides/china-vs-singapore-healthcare
/guides/medical-escort-service-china
```

---

### 6.5 Why Angel Doctor Page

URL:

```text
/why-angel-doctor
```

Purpose:

```text
Answer why international patients should trust Angel Doctor.
Show differentiation against medical tourism competitors.
Explain care coordination, hospital access, escorts, transparency, and compliance.
```

Page structure:

```text
1. Hero
2. Why international patients choose Angel Doctor
3. Healthcare group since 1998
4. 200+ partner hospitals / provider network
5. 600+ trained medical escorts
6. AI-assisted hospital matching
7. Transparent care coordination
8. English-speaking support
9. Patient safety and medical boundaries
10. Comparison: agency vs hospital vs Angel Doctor
11. FAQ
12. CTA
```

Recommended H1:

```text
Why International Patients Choose Angel Doctor
```

---

### 6.6 Hospital Access Page

URL:

```text
/hospital-access
```

Purpose:

```text
Explain Angel Doctor’s hospital and provider network.
Support trust and GEO.
Avoid creating a risky or confusing raw hospital list.
```

Page title:

```text
Hospital Access in China for International Patients
```

Recommended structure:

```text
1. Hero
2. Our hospital coordination network
3. Major medical destinations
4. Types of hospitals and providers
5. Selected partner hospital/provider cards
6. How hospital matching works
7. What affects appointment availability
8. Patient safety and care boundaries
9. FAQ
10. CTA
```

Use the term:

```text
Hospital Access
```

Avoid:

```text
Hospitals List
Our Hospitals
Hospital Directory
```

Safer wording:

```text
200+ hospitals and healthcare providers in our coordination network
```

Do not write:

```text
We own hospitals.
We guarantee access to any doctor.
We guarantee appointment availability.
```

---

## 7. Hospital Card Design Rules

Hospital cards should be used in:

```text
/destinations/*
/hospital-access
/treatments/* when relevant
```

### Hospital Card Purpose

```text
Show city-level and treatment-level credibility.
Explain what type of provider the patient may access.
Avoid overwhelming patients with a raw hospital directory.
Support GEO by connecting city + provider type + treatment areas + support services.
```

### Hospital Card Required Fields

```text
Hospital or Provider Name
City
Provider Type
Best-Fit Care Areas
International Patient Support
How Angel Doctor Helps
Availability Note
CTA
```

### Hospital Card Optional Fields

```text
District
Public / private status
Accreditation or level
Languages supported
Nearby airport or transport note
Image
Logo
Website link
```

### Hospital Card Content Template

```text
[Hospital / Provider Name]

City:
Shenzhen

Provider type:
Public tertiary hospital / Specialty hospital / Dental provider / Health checkup center / TCM provider / Rehabilitation institution / International clinic

Best-fit care areas:
Dental care, health checkup, TCM recovery, rehabilitation, second opinion

International patient support:
Appointment coordination, English-speaking support, local medical escort, report assistance

How Angel Doctor helps:
Angel Doctor can help with care matching, appointment planning, hospital navigation, translation support, payment guidance, and follow-up communication.

Availability note:
Appointment options depend on department capacity, doctor schedule, patient condition, medical record review, and provider confirmation.

CTA:
Request care options
```

### Hospital Card UI Rules

```text
Use card grid on desktop: 2 or 3 columns.
Use single-column stacked cards on mobile.
Do not overload cards with long paragraphs.
Use tags for provider type and care areas.
Use a small "Availability depends on confirmation" note.
Do not make the card look like a hotel booking card.
Do not show fake ratings.
Do not show fake prices.
Do not show fake review counts.
Do not use hospital logos unless permission is confirmed.
```

### Hospital Card Example

```text
Card Title:
Selected Dental Providers in Shenzhen

Tags:
Dental Care · Implant Dentistry · English Support

Description:
Angel Doctor can coordinate dental care options in Shenzhen through selected dental providers and hospital-affiliated dental departments, depending on treatment needs, imaging, timeline, and provider confirmation.

Support:
Care matching · Appointment planning · Local escort · Translation support

CTA:
Request Shenzhen Dental Options
```

### Public Hospital Card Example

```text
Card Title:
Selected Public Tertiary Hospitals in Shanghai

Tags:
Second Opinion · Health Checkup · Specialist Care

Description:
Angel Doctor can help international patients explore suitable public hospital departments in Shanghai for specialist consultation, second opinions, and health checkups based on medical records, appointment availability, and provider confirmation.

Support:
Medical record review · Department matching · Appointment coordination · Hospital navigation

CTA:
Get Shanghai Care Plan
```

---

## 8. Destination Hub Design

URL:

```text
/destinations
```

Purpose:

```text
Act as the city selection hub.
Route users to city pages.
Show China as a practical medical travel destination.
```

Recommended sections:

```text
1. Hero
2. Quick answer: Where can international patients receive care in China?
3. City cards
4. Compare cities by best-fit treatments
5. How Angel Doctor supports city selection
6. Related treatments
7. FAQ
8. CTA
```

### Destination City Card Fields

```text
City Name
Short Positioning
Best-Fit Treatments
Local Support Available
Airport / Travel Note
CTA
```

### Destination City Card Examples

```text
Shenzhen
Best for dental care, health checkups, TCM recovery, and cross-border access from Hong Kong.
Support: Hospital matching, local medical escorts, English-speaking coordination.
CTA: View Shenzhen Medical Travel
```

```text
Shanghai
Best for executive health checkups, specialist consultations, international clinics, and high-end medical services.
Support: Hospital coordination, translation support, local escort, follow-up communication.
CTA: View Shanghai Medical Travel
```

```text
Guangzhou
Best for TCM recovery, dental care, rehabilitation, and specialist hospital access in South China.
Support: Provider matching, hospital visit planning, local escort.
CTA: View Guangzhou Medical Travel
```

---

## 9. Treatment Naming Rules

Use these names in navigation and cards:

```text
Dental Care
Health Checkup
Second Opinion
TCM Recovery
Aesthetic Care
Rehabilitation
```

### Page H1 Names

```text
Dental Care in China for International Patients
Health Checkup in China for International Patients
Medical Second Opinion in China for International Patients
TCM Recovery Programs in China
Skin & Aesthetic Care in China
Rehabilitation in China for International Patients
```

### Important Naming Decisions

```text
Use Health Checkup, not Checkup.
Use TCM Recovery, not only TCM.
Use Treatments, not Specialties.
Use Guides, not Patient Guides.
Use Why Angel Doctor, not About, in the primary navigation.
Use Hospital Access, not Hospital List.
```

### TCM Recovery vs Rehabilitation

```text
TCM Recovery = state recovery: pain relief, sleep, stress, fatigue, wellness, women’s health support.
Rehabilitation = functional recovery: post-surgery, orthopedic, neurological, physical therapy, sports injury, elderly rehabilitation.
```

---

## 10. Pricing Page Rules

URL:

```text
/pricing
```

Purpose:

```text
Provide transparent pricing guidance without making false price guarantees.
```

Recommended H1:

```text
Transparent Pricing Guidance for Medical Travel in China
```

Pricing structure:

```text
1. Hospital medical fees
2. Angel Doctor coordination fee
3. Travel-related costs
```

Do not write:

```text
Guaranteed lowest prices.
Exact price before consultation.
No hidden costs guaranteed.
```

Use safer wording:

```text
Estimated costs depend on provider confirmation, diagnosis, treatment plan, materials, doctor availability, and follow-up needs.
```

---

## 11. Contact and Lead Capture Rules

URL:

```text
/contact
```

Primary CTA wording:

```text
Get Your Care Plan
```

Secondary CTA:

```text
Talk to a Care Coordinator
```

### Standard Form Fields

```text
Name
Email
WhatsApp
Country / region
Treatment interested in
Preferred city in China
When do you plan to travel?
Do you need local support?
Tell us what you need
```

### Complex Care Optional Fields

```text
Diagnosis if available
Medical concern
Upload medical records
Current treatment status
Preferred timeline
```

Button text:

```text
Get My Care Plan
```

Avoid:

```text
Submit
Book Surgery
Reserve Treatment
```

---

## 12. Internal Linking Rules

### Homepage Should Link To

```text
/treatments
/treatments/dental-care-china
/treatments/health-checkup-china
/treatments/medical-second-opinion-china
/treatments/tcm-recovery-china
/destinations
/how-it-works
/pricing
/why-angel-doctor
/guides
/contact
```

### Treatment Pages Should Link To

```text
Relevant destination pages
Relevant guide pages
Pricing page
How It Works page
Hospital Access page
Contact page
```

### Destination Pages Should Link To

```text
Relevant treatment pages
Hospital Access page
Relevant guide pages
Pricing page
Contact page
```

### Guide Pages Should Link To

```text
Relevant treatment page
Relevant destination page
Pricing page
How It Works page
Hospital Access page
Contact page
Related guides
```

### Hospital Access Page Should Link To

```text
Destinations
Treatments
Why Angel Doctor
How It Works
Contact
```

---

## 13. SEO / GEO Requirements

Every page must include:

```text
Unique title tag
Unique meta description
Canonical URL
Open Graph title
Open Graph description
Readable H1
Logical H2/H3 structure
Breadcrumbs
Internal links
CTA
FAQ where relevant
Medical disclaimer where relevant
```

### GEO-Friendly Content Blocks

Every major page should include:

```text
Quick Answer
Who this is for
What Angel Doctor helps with
What to prepare
Timeline
Cost factors
Risks and limitations
FAQ
Last updated date
```

### Recommended Schema by Page Type

```text
Homepage:
Organization, WebSite, WebPage, FAQPage if FAQ exists

Treatments:
Service, MedicalWebPage, FAQPage, BreadcrumbList

Destinations:
Service, MedicalBusiness or LocalBusiness, FAQPage, BreadcrumbList

Guides:
Article or MedicalWebPage, FAQPage, BreadcrumbList

Why Angel Doctor:
Organization, WebPage, FAQPage, BreadcrumbList

Hospital Access:
Organization, Service, ItemList, FAQPage, BreadcrumbList

Contact:
ContactPage, Organization, BreadcrumbList

Pricing:
Service, WebPage, FAQPage, BreadcrumbList
```

Do not add fake schema values.

---

## 14. Medical Trust and Compliance Rules

### Avoid Overclaims

Do not write:

```text
Guaranteed results
Best doctors
Lowest price
100% safe
Cure guaranteed
Instant approval
World-class care without proof
Zero hassle
No risk
```

### Use Safer Language

Use:

```text
Help coordinate
Support communication
Assist with appointment planning
Provide translation support
Connect patients with suitable providers
Treatment decisions are made by licensed medical professionals
Final costs depend on consultation and diagnosis
Appointment availability depends on provider confirmation
```

### Required Disclaimer

Use this disclaimer or a similar version on all medical-related pages:

```text
Angel Doctor provides healthcare coordination, translation, and patient support services. Diagnosis and treatment decisions are made by licensed medical professionals after consultation. Information on this website is for general guidance and should not replace professional medical advice.
```

### Hospital Availability Disclaimer

Use on Hospital Access, Destinations, and Treatment pages:

```text
Hospital access and appointment availability depend on the patient’s condition, department capacity, doctor schedule, medical record review, and provider confirmation.
```

---

## 15. Design and UX Rules

### Brand Feel

```text
Premium
Calm
Trustworthy
International
Human
Clear
Medical but not cold
High-end but not exaggerated
```

### Avoid

```text
Generic SaaS template look
Too many gradients
Fake doctor stock photos
Overcrowded sections
Long unreadable paragraphs
Too many CTAs in one section
Heavy animations
AI-generated layout feeling
Fake patient reviews
Fake hospital ratings
```

### Preferred UX

```text
Clear hero message
Concrete trust proof
Simple process steps
Short paragraphs
Strong internal links
Mobile-first layout
CTA above the fold
FAQ near the bottom
Human care coordinator feel
```

---

## 16. Component Rules

Build reusable components.

### Recommended Components

```text
SiteHeader
SiteFooter
HeroSection
TrustBar
TreatmentCard
DestinationCard
HospitalCard
GuideCard
ProcessSteps
FAQBlock
CTASection
PricingExplanation
Breadcrumbs
DisclaimerBlock
ContactForm
SchemaJsonLd
```

### Component Rule

Do not hard-code Dental into reusable platform components.

Bad:

```text
DentalHero
DentalCTA
```

Better:

```text
TreatmentHero
TreatmentCTA
```

Dental should be passed as content data.

---

## 17. Phase 1 Required Pages

Phase 1 should build the minimum strong conversion + GEO platform.

```text
/
 /treatments
 /treatments/dental-care-china
 /treatments/health-checkup-china
 /treatments/medical-second-opinion-china
 /treatments/tcm-recovery-china
 /destinations
 /destinations/shenzhen-medical-travel
 /destinations/guangzhou-medical-travel
 /destinations/shanghai-medical-travel
 /guides
 /guides/dental-implants-china-cost
 /guides/can-foreigners-see-doctors-in-china
 /how-it-works
 /pricing
 /why-angel-doctor
 /hospital-access
 /contact
 /legal/medical-disclaimer
 /legal/privacy-policy
 /legal/terms
```

---

## 18. Phase 2 Expansion

After Phase 1 is stable, add:

```text
/treatments/aesthetic-care-china
/treatments/rehabilitation-china
/destinations/beijing-medical-travel
/destinations/hainan-medical-wellness
/guides/china-vs-thailand-medical-tourism
/guides/china-vs-turkey-dental-tourism
/guides/china-vs-singapore-healthcare
/guides/medical-escort-service-china
/guides/how-to-choose-a-hospital-in-china
/guides/china-medical-travel-process
```

---

## 19. Codex Development Rules

Codex must follow these rules before editing:

```text
Read this document first.
Do not use /specialties/ unless explicitly asked.
Use /treatments/ as the service conversion section.
Use /guides/ as the GEO content hub.
Use /destinations/ as the city-based GEO and conversion section.
Do not put hospital list in the primary navigation.
Use /hospital-access as a footer-level trust page.
Do not duplicate Guide and Treatment content.
Do not add fake hospitals, fake doctors, fake prices, fake reviews, or fake ratings.
Do not use hospital logos unless permission is confirmed.
Do not add unnecessary dependencies.
Do not change the framework unless explicitly requested.
Run the build before completing the task.
Write a done file after each task.
```

### Required Done File Format

For each task, create a matching done file.

Example:

```text
/tasks/01-update-site-structure-plan.md
/tasks/01-update-site-structure-done.md
```

Done file should include:

```text
Task completed
Files changed
URL structure affected
SEO/GEO changes
Schema changes
Build result
Known issues
Next recommended task
```

---

## 20. Suggested Codex Task Sequence

### Task 01: Rename architecture from Specialties to Treatments

```text
Replace /specialties references with /treatments.
Update navigation.
Update route config.
Keep redirects if old URLs already exist.
```

### Task 02: Build homepage conversion structure

```text
Hero: Fast Care. Fair Price. Clear Guidance.
Trust bar.
Treatment cards.
Destination cards.
Why Angel Doctor preview.
Guides preview.
CTA.
```

### Task 03: Build Treatments hub and first treatment pages

```text
Create /treatments.
Create Dental Care, Health Checkup, Second Opinion, TCM Recovery pages.
Use shared TreatmentCard and TreatmentHero components.
```

### Task 04: Build Destinations hub and city pages

```text
Create /destinations.
Create Shenzhen, Guangzhou, Shanghai city pages.
Add DestinationCard and HospitalCard components.
```

### Task 05: Build Hospital Access page

```text
Create /hospital-access.
Add hospital network explanation.
Add safe hospital/provider card design.
Add FAQ.
Add CTA.
```

### Task 06: Build Why Angel Doctor page

```text
Create /why-angel-doctor.
Move About-type trust content here.
Add 1998 healthcare group, 200+ hospitals, 600+ escorts, AI matching, pricing transparency, safety boundaries.
```

### Task 07: Build Guides foundation

```text
Create /guides.
Create first two guide pages.
Add internal links to treatments, destinations, pricing, hospital-access, contact.
```

### Task 08: Add Schema foundation

```text
Add SchemaJsonLd component.
Add Organization, WebSite, Service, FAQPage, BreadcrumbList, Article/MedicalWebPage schemas by page type.
Follow the separate schema-rules-for-geo-seo.md file if present.
```

### Task 09: Add legal and disclaimer pages

```text
Create /legal/medical-disclaimer.
Create /legal/privacy-policy.
Create /legal/terms.
Add disclaimer blocks on medical-related pages.
```

### Task 10: Build and QA

```text
Run build.
Check broken internal links.
Check mobile nav.
Check title and meta per page.
Check schema JSON-LD validity.
Create done file.
```

---

## 21. Acceptance Criteria

The website structure is correct if:

```text
Primary navigation uses Treatments, Destinations, How It Works, Pricing, Why Angel Doctor, Guides, Contact.
About is not in primary navigation.
Guides is the main GEO content hub.
Treatments is the main conversion section.
Destinations is the city-based GEO and conversion section.
Hospital Access exists but is not in the primary navigation.
Hospital cards are structured, cautious, and useful.
Dental is active but the site still feels like a multi-treatment platform.
Guide pages and treatment pages are not duplicates.
Every guide links to relevant treatments and destinations.
Every treatment links to relevant guides, destinations, pricing, and contact.
Every destination links to relevant treatments, hospital-access, guides, and contact.
Medical claims are cautious and compliant.
Schema is implemented by page type.
Codex can execute tasks without guessing the architecture.
```

---

## 22. One-Sentence Source of Truth

```text
Angel Doctor should be developed as a GEO-first international medical tourism platform: /guides/ builds search and AI visibility, /treatments/ converts patient intent into inquiries, /destinations/ captures city-based medical travel demand, and /hospital-access supports trust without turning the site into a risky hospital directory.
```
