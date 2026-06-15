import type { LinkItem, PageContent } from "@/types/page";

const homeCrumbs: LinkItem[] = [{ label: "Home", href: "/" }];

const medicalFaq = [
  {
    question: "Does Angel Doctor provide medical diagnosis or treatment?",
    answer:
      "No. Angel Doctor provides healthcare coordination, hospital matching, translation support, appointment assistance, and local medical escort services. Diagnosis and treatment decisions are made by licensed healthcare providers.",
  },
  {
    question: "Are appointments or treatment outcomes guaranteed?",
    answer:
      "No. Appointment availability depends on provider confirmation, department capacity, doctor schedule, patient condition, medical record review, city preference, and timeline.",
  },
];

const treatmentLinks = [
  { label: "Dental Care", href: "/treatments/dental-care-china" },
  { label: "Health Checkup", href: "/treatments/health-checkup-china" },
  { label: "Second Opinion", href: "/treatments/medical-second-opinion-china" },
  { label: "TCM Recovery", href: "/treatments/tcm-recovery-china" },
];

const destinationLinks = [
  { label: "Shenzhen", href: "/destinations/shenzhen-medical-travel" },
  { label: "Guangzhou", href: "/destinations/guangzhou-medical-travel" },
  { label: "Shanghai", href: "/destinations/shanghai-medical-travel" },
];

export const pages: Record<string, PageContent> = {
  "/": {
    slug: "/",
    title: "Angel Doctor | Medical Travel to China for International Patients",
    description:
      "Access healthcare options in China with Angel Doctor hospital matching, transparent coordination, and trained local medical escort support.",
    h1: "Fast Care. Fair Price. Clear Guidance.",
    intro:
      "Angel Doctor helps international patients understand healthcare options in China through AI-assisted matching, transparent coordination, and trained local medical escorts.",
    kind: "webpage",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: homeCrumbs,
    quickAnswer:
      "Angel Doctor is a China medical travel coordination platform for international patients. We help patients compare suitable care options, prepare for visits, arrange local support, and communicate with hospitals and healthcare providers.",
    sections: [
      {
        title: "Popular Treatments",
        body: "Dental care, health checkups, medical second opinions, and TCM recovery are the first service areas for Phase 1.",
        href: "/treatments",
      },
      {
        title: "Destination Guidance",
        body: "City pages help patients compare Shenzhen, Guangzhou, and Shanghai for treatment access, local support, and medical travel planning.",
        href: "/destinations",
      },
      {
        title: "Trained Local Medical Escorts",
        body: "Medical escorts support registration, navigation, communication, payment guidance, report collection, and follow-up coordination within a clear service scope.",
        href: "/book-local-medical-escort",
      },
    ],
    relatedLinks: [
      ...treatmentLinks,
      ...destinationLinks,
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  "/treatments": {
    slug: "/treatments",
    title: "Treatments in China for International Patients | Angel Doctor",
    description:
      "Explore dental care, health checkups, second opinions, and TCM recovery options in China with Angel Doctor coordination support.",
    h1: "Treatments in China for International Patients",
    intro:
      "Treatment pages explain care categories, what Angel Doctor can coordinate, what to prepare, timelines, pricing factors, and relevant destinations.",
    kind: "collection",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Treatments", href: "/treatments" }],
    quickAnswer:
      "Angel Doctor helps patients understand suitable care options in China and prepare for hospital, clinic, dental, checkup, second opinion, or TCM visits.",
    sections: [
      { title: "Dental Care", body: "Short-stay dental evaluation, implants, crowns, veneers, checkups, and treatment planning.", href: "/treatments/dental-care-china" },
      { title: "Health Checkup", body: "Preventive screening, imaging, blood tests, executive checkups, and report explanation support.", href: "/treatments/health-checkup-china" },
      { title: "Medical Second Opinion", body: "Record preparation, department matching, specialist review coordination, and follow-up communication support.", href: "/treatments/medical-second-opinion-china" },
      { title: "TCM Recovery", body: "Acupuncture, pain relief, sleep support, fatigue recovery, stress recovery, and wellness-oriented programs.", href: "/treatments/tcm-recovery-china" },
    ],
    relatedLinks: treatmentLinks,
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  "/treatments/dental-care-china": {
    slug: "/treatments/dental-care-china",
    title: "Dental Care in China for International Patients | Angel Doctor",
    description:
      "Coordinate dental care in China, including provider matching, appointment planning, timeline guidance, translation support, and local medical escorts.",
    h1: "Dental Care in China",
    intro:
      "Dental care coordination helps patients explore dental checkups, implants, crowns, veneers, and short-stay treatment planning in China.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Treatments", href: "/treatments" }, { label: "Dental Care", href: "/treatments/dental-care-china" }],
    quickAnswer:
      "Foreign patients can access dental providers in China. Angel Doctor helps compare suitable provider options, coordinate appointments, explain timelines, and arrange local visit support when needed.",
    sections: [
      { title: "Who This Is For", body: "Patients seeking dental checkups, implants, crowns, veneers, treatment planning, or local support during a China visit." },
      { title: "How Angel Doctor Helps", body: "Provider matching, appointment coordination, timeline guidance, communication support, and local escort arrangements." },
      { title: "What to Prepare", body: "Travel timeline, treatment goals, dental history, medication list, and dental images if already available. Uploads are not required for general inquiry." },
    ],
    relatedLinks: destinationLinks,
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  "/treatments/health-checkup-china": {
    slug: "/treatments/health-checkup-china",
    title: "Health Checkup in China for International Patients | Angel Doctor",
    description:
      "Plan health checkups in China with package comparison, appointment coordination, report support, translation support, and local medical escorts.",
    h1: "Health Checkup in China",
    intro:
      "Health checkup coordination helps international patients plan preventive screening, imaging, blood tests, and specialist review during a China visit.",
    kind: "service",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Treatments", href: "/treatments" }, { label: "Health Checkup", href: "/treatments/health-checkup-china" }],
    quickAnswer:
      "Angel Doctor helps patients compare health checkup options by city, package scope, timing, language support needs, and follow-up requirements.",
    sections: [
      { title: "Common Needs", body: "Executive checkups, preventive screening, imaging, blood tests, cardiovascular screening, and report explanation support." },
      { title: "Best-Fit Cities", body: "Shenzhen, Guangzhou, and Shanghai may fit different checkup needs depending on timeline, provider type, and local support needs." },
      { title: "Pricing Guidance", body: "Total costs vary by provider, package scope, diagnostic requirements, language support, and local escort needs." },
    ],
    relatedLinks: destinationLinks,
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  "/treatments/medical-second-opinion-china": {
    slug: "/treatments/medical-second-opinion-china",
    title: "Medical Second Opinion in China | Angel Doctor",
    description:
      "Coordinate medical second opinions in China with record preparation, department matching, appointment planning, and translation support.",
    h1: "Medical Second Opinion in China",
    intro:
      "Second opinion coordination helps patients prepare records and explore suitable hospital departments or specialists in China.",
    kind: "service",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Treatments", href: "/treatments" }, { label: "Second Opinion", href: "/treatments/medical-second-opinion-china" }],
    quickAnswer:
      "For complex conditions, Angel Doctor may ask for medical records before suitable hospital or department options can be discussed with providers.",
    sections: [
      { title: "Who This Is For", body: "Patients seeking another review of diagnosis, imaging, treatment options, or specialist direction." },
      { title: "What Angel Doctor Coordinates", body: "Medical record preparation, department matching, appointment planning, translation support, and follow-up communication." },
      { title: "Limits", body: "Angel Doctor does not provide diagnosis or clinical recommendations. Licensed healthcare providers make medical decisions." },
    ],
    relatedLinks: destinationLinks,
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  "/treatments/tcm-recovery-china": {
    slug: "/treatments/tcm-recovery-china",
    title: "TCM Recovery in China for International Patients | Angel Doctor",
    description:
      "Explore TCM recovery in China with provider matching, appointment coordination, translation support, and local medical escort arrangements.",
    h1: "TCM Recovery in China",
    intro:
      "TCM recovery coordination supports patients exploring acupuncture, pain relief, sleep support, fatigue recovery, stress recovery, and wellness-oriented programs.",
    kind: "service",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Treatments", href: "/treatments" }, { label: "TCM Recovery", href: "/treatments/tcm-recovery-china" }],
    quickAnswer:
      "Angel Doctor helps international patients understand TCM provider options, prepare visit needs, and arrange local support in suitable Chinese cities.",
    sections: [
      { title: "Common Patient Goals", body: "Pain support, sleep support, stress recovery, fatigue recovery, acupuncture, and wellness-focused recovery." },
      { title: "Local Support", body: "Medical escorts may support registration, navigation, communication, payment guidance, and follow-up coordination." },
      { title: "Questions to Ask", body: "Ask about provider type, visit length, expected schedule, follow-up needs, and whether medical records are useful." },
    ],
    relatedLinks: destinationLinks,
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  "/destinations": {
    slug: "/destinations",
    title: "Medical Travel Destinations in China | Angel Doctor",
    description:
      "Compare Shenzhen, Guangzhou, and Shanghai for medical travel, hospital coordination, treatment access, and local medical escort support.",
    h1: "Medical Travel Destinations in China",
    intro:
      "Destination pages help patients choose a practical city based on treatment needs, provider types, timeline, local support, and travel plans.",
    kind: "collection",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }],
    quickAnswer:
      "Shenzhen, Guangzhou, and Shanghai each support different patient needs across dental care, health checkups, TCM recovery, second opinions, and local medical escort support.",
    sections: [
      { title: "Shenzhen", body: "Convenient for dental care, health checkups, cross-border support, and local medical escort services.", href: "/destinations/shenzhen-medical-travel" },
      { title: "Guangzhou", body: "A southern China medical hub for TCM recovery, rehabilitation-oriented support, checkups, and specialist coordination.", href: "/destinations/guangzhou-medical-travel" },
      { title: "Shanghai", body: "Suitable for executive checkups, international clinics, specialist second opinions, aesthetic care, and private care access.", href: "/destinations/shanghai-medical-travel" },
    ],
    relatedLinks: destinationLinks,
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  "/destinations/shenzhen-medical-travel": {
    slug: "/destinations/shenzhen-medical-travel",
    title: "Medical Travel in Shenzhen for International Patients | Angel Doctor",
    description:
      "Plan medical travel in Shenzhen with dental care access, health checkup support, TCM recovery options, and trained local medical escorts.",
    h1: "Medical Travel in Shenzhen for International Patients",
    intro:
      "Shenzhen is a convenient destination for dental care, health checkups, TCM recovery, and local medical support near Hong Kong.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Shenzhen", href: "/destinations/shenzhen-medical-travel" }],
    quickAnswer:
      "Angel Doctor helps patients compare Shenzhen provider options, coordinate appointments, understand timelines, and receive local escort support during hospital or clinic visits.",
    sections: [
      { title: "Best-Fit Treatments", body: "Dental care, health checkups, local medical escort support, and TCM recovery." },
      { title: "Provider Types", body: "Selected dental providers, health checkup centers, public hospital departments, private clinics, and TCM providers." },
      { title: "Local Support", body: "Appointment coordination, English-speaking support, registration assistance, navigation, and escort support." },
    ],
    relatedLinks: treatmentLinks,
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  "/destinations/guangzhou-medical-travel": {
    slug: "/destinations/guangzhou-medical-travel",
    title: "Medical Travel in Guangzhou for International Patients | Angel Doctor",
    description:
      "Plan medical travel in Guangzhou for TCM recovery, rehabilitation support, health checkups, specialist coordination, and local medical escorts.",
    h1: "Medical Travel in Guangzhou for International Patients",
    intro:
      "Guangzhou is a southern China medical hub for TCM recovery, health checkups, specialist coordination, and local medical support.",
    kind: "service",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Guangzhou", href: "/destinations/guangzhou-medical-travel" }],
    quickAnswer:
      "Angel Doctor helps patients compare Guangzhou provider options, prepare visit materials, coordinate appointments, and arrange local medical escort support.",
    sections: [
      { title: "Best-Fit Treatments", body: "TCM recovery, rehabilitation-oriented support, health checkups, second opinions, and dental care." },
      { title: "Provider Types", body: "TCM providers, rehabilitation providers, public hospital departments, checkup centers, and dental providers." },
      { title: "What to Prepare", body: "Travel timeline, treatment goals, medical records for complex needs, medication list, and preferred language support." },
    ],
    relatedLinks: treatmentLinks,
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  "/destinations/shanghai-medical-travel": {
    slug: "/destinations/shanghai-medical-travel",
    title: "Medical Travel in Shanghai for International Patients | Angel Doctor",
    description:
      "Plan medical travel in Shanghai for executive health checkups, international clinics, specialist second opinions, and local medical support.",
    h1: "Medical Travel in Shanghai for International Patients",
    intro:
      "Shanghai is suitable for executive checkups, international clinics, specialist second opinions, skin and aesthetic care, and private healthcare access.",
    kind: "service",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Shanghai", href: "/destinations/shanghai-medical-travel" }],
    quickAnswer:
      "Angel Doctor helps international patients compare Shanghai care options, coordinate appointments, prepare materials, and arrange local medical support.",
    sections: [
      { title: "Best-Fit Treatments", body: "Executive health checkups, second opinions, aesthetic care, dental care, and specialist consultation." },
      { title: "Provider Types", body: "International clinics, executive health checkup centers, selected specialist hospital departments, and private providers." },
      { title: "Pricing Factors", body: "Total cost depends on provider type, diagnostic requirements, appointment confirmation, local support, and follow-up needs." },
    ],
    relatedLinks: treatmentLinks,
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  "/guides": {
    slug: "/guides",
    title: "Medical Travel Guides for China | Angel Doctor",
    description:
      "Read patient guides about dental care costs, foreigner access to doctors in China, hospital matching, and medical travel planning.",
    h1: "Medical Travel Guides for China",
    intro:
      "Guides answer common patient questions and connect educational content to treatment, destination, pricing, and care plan pages.",
    kind: "collection",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Guides", href: "/guides" }],
    quickAnswer:
      "Angel Doctor guides are designed to help international patients understand healthcare access in China before submitting an inquiry.",
    sections: [
      { title: "Dental Implants China Cost", body: "Understand cost factors, timelines, materials, follow-up needs, and provider questions.", href: "/guides/dental-implants-china-cost" },
      { title: "Can Foreigners See Doctors in China?", body: "Learn how foreigners can access hospitals, clinics, and healthcare providers in China.", href: "/guides/can-foreigners-see-doctors-in-china" },
    ],
    relatedLinks: [
      { label: "Dental Implants China Cost", href: "/guides/dental-implants-china-cost" },
      { label: "Can Foreigners See Doctors in China?", href: "/guides/can-foreigners-see-doctors-in-china" },
    ],
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  "/guides/dental-implants-china-cost": {
    slug: "/guides/dental-implants-china-cost",
    title: "Dental Implants in China Cost Guide | Angel Doctor",
    description:
      "A guide for international patients comparing dental implant cost factors, treatment timelines, provider options, and follow-up needs in China.",
    h1: "Dental Implants in China: Cost Factors for International Patients",
    intro:
      "Dental implant costs vary by provider, materials, diagnosis, imaging, treatment complexity, number of visits, and follow-up requirements.",
    kind: "article",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Guides", href: "/guides" }, { label: "Dental Implants Cost", href: "/guides/dental-implants-china-cost" }],
    quickAnswer:
      "Angel Doctor does not publish fake fixed prices. A coordinator can help patients understand cost components and provider questions before committing to a care plan.",
    sections: [
      { title: "Cost Factors", body: "Implant brand, materials, imaging, bone condition, provider type, city, follow-up needs, and treatment staging can affect total cost." },
      { title: "Timeline Factors", body: "Some patients need short evaluation visits, while implant treatment may require staged visits depending on the clinical plan." },
      { title: "What to Prepare", body: "Treatment goals, dental history, medication list, travel dates, and dental images if already available." },
    ],
    relatedLinks: [{ label: "Dental Care", href: "/treatments/dental-care-china" }, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "medical",
    lastUpdated: "2026-06-15",
  },
  "/guides/can-foreigners-see-doctors-in-china": {
    slug: "/guides/can-foreigners-see-doctors-in-china",
    title: "Can Foreigners See Doctors in China? | Angel Doctor",
    description:
      "A guide explaining how foreigners can access hospitals, clinics, appointments, payment, translation support, and medical escorts in China.",
    h1: "Can Foreigners See Doctors in China?",
    intro:
      "Foreigners can access many hospitals, clinics, and healthcare providers in China, but appointment process, language support, and documentation vary.",
    kind: "article",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Guides", href: "/guides" }, { label: "Foreigners Seeing Doctors", href: "/guides/can-foreigners-see-doctors-in-china" }],
    quickAnswer:
      "Yes, foreigners can seek care in China. Angel Doctor helps patients understand suitable provider options, coordinate appointments, and arrange trained local support when needed.",
    sections: [
      { title: "Common Challenges", body: "Department selection, registration, payment, language barriers, report collection, and follow-up communication." },
      { title: "How Angel Doctor Helps", body: "Hospital matching, appointment preparation, translation support, local medical escort support, and follow-up coordination." },
      { title: "What to Prepare", body: "Passport for hospital registration when required, travel timeline, symptoms or goals, medication list, and medical records for complex needs." },
    ],
    relatedLinks: [{ label: "Hospital Access", href: "/hospital-access" }, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "medical",
    lastUpdated: "2026-06-15",
  },
};

export const simplePages: PageContent[] = [
  {
    slug: "/how-it-works",
    title: "How Medical Travel to China Works | Angel Doctor",
    description:
      "Learn how Angel Doctor supports care requests, hospital matching, appointment coordination, local medical escorts, and follow-up communication.",
    h1: "How Medical Travel to China Works",
    intro:
      "Angel Doctor uses a structured coordination process before, during, and after a China hospital or clinic visit.",
    kind: "howto",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "How It Works", href: "/how-it-works" }],
    quickAnswer:
      "Share your care need, review suitable options, confirm a visit plan, arrive with local support when needed, and continue follow-up communication where available.",
    sections: [
      { title: "1. Share Your Care Request", body: "Tell us your treatment interest, preferred city, timeline, contact details, and whether you need local support." },
      { title: "2. Review Care Options", body: "Angel Doctor helps compare suitable provider types, expected timelines, support needs, and pricing factors." },
      { title: "3. Visit With Local Support", body: "A trained medical escort may help with registration, navigation, communication, payment guidance, and report collection." },
    ],
    relatedLinks: [{ label: "Pricing", href: "/pricing" }, { label: "Get Your Care Plan", href: "/get-care-plan" }],
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  {
    slug: "/pricing",
    title: "Medical Travel Pricing Guidance in China | Angel Doctor",
    description:
      "Understand medical travel cost components including provider fees, coordination fees, escort support, translation, records, travel, and follow-up.",
    h1: "Pricing Guidance for Medical Travel to China",
    intro:
      "Angel Doctor explains cost components clearly while avoiding fake fixed medical prices or unsupported lowest-price claims.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Pricing", href: "/pricing" }],
    quickAnswer:
      "Total cost depends on provider confirmation, diagnosis, treatment plan, materials, doctor availability, city, timeline, translation needs, escort support, and follow-up needs.",
    sections: [
      { title: "Hospital or Provider Fees", body: "Medical fees are usually paid directly by the patient to the hospital, clinic, or healthcare provider." },
      { title: "Coordination and Escort Fees", body: "Angel Doctor may charge care coordination, medical escort, translation, preparation, or follow-up support fees." },
      { title: "Travel Costs", body: "Flights, hotels, transportation, and personal travel costs are separate from medical and coordination costs." },
    ],
    relatedLinks: [{ label: "Get Your Care Plan", href: "/get-care-plan" }, { label: "Book Local Medical Escort", href: "/book-local-medical-escort" }],
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  {
    slug: "/why-angel-doctor",
    title: "Why International Patients Choose Angel Doctor",
    description:
      "Learn how Angel Doctor supports international patients with hospital matching, transparent coordination, trained medical escorts, and clear service boundaries.",
    h1: "Why International Patients Choose Angel Doctor",
    intro:
      "Angel Doctor combines hospital access coordination, AI-assisted matching, transparent planning, and a standardized local medical escort network.",
    kind: "about",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Why Angel Doctor", href: "/why-angel-doctor" }],
    quickAnswer:
      "Angel Doctor is designed for international patients who need a reliable path into China healthcare without relying on informal agents or unsupported claims.",
    sections: [
      { title: "Healthcare Group Experience", body: "The site positions Angel Doctor as backed by a healthcare group founded in 1998, not as Angel Doctor itself founded in 1998." },
      { title: "Standardized Escort Network", body: "600+ medical escorts are positioned around training, service standards, privacy agreements, complaint handling, escalation, and coordinator oversight." },
      { title: "Clear Boundaries", body: "Angel Doctor coordinates care and support. Licensed healthcare providers make medical decisions." },
    ],
    relatedLinks: [{ label: "Hospital Access", href: "/hospital-access" }, { label: "Trust & Safety", href: "/trust-and-safety" }],
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  {
    slug: "/hospital-access",
    title: "Hospital Access in China for International Patients | Angel Doctor",
    description:
      "Angel Doctor helps international patients access suitable hospitals and healthcare providers in China through matching, appointment coordination, translation, and escorts.",
    h1: "Hospital Access in China for International Patients",
    intro:
      "Hospital access means understanding which hospital, department, provider type, city, timeline, and support pathway may fit the patient's medical need.",
    kind: "service",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Hospital Access", href: "/hospital-access" }],
    quickAnswer:
      "Angel Doctor supports hospital matching and appointment coordination, but does not guarantee access to a specific doctor, appointment, hospital acceptance, cost, or treatment outcome.",
    sections: [
      { title: "Provider Types", body: "Public tertiary hospitals, specialty hospitals, dental providers, executive health checkup centers, TCM providers, rehabilitation providers, international clinics, and private medical centers." },
      { title: "Generic Provider Cards", body: "Phase 1 uses generic provider categories unless approved hospital names and logo usage rights are confirmed." },
      { title: "Availability Boundary", body: "Appointment options depend on patient condition, provider confirmation, doctor schedule, department capacity, and record review when required." },
    ],
    relatedLinks: [...treatmentLinks, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  {
    slug: "/trust-and-safety",
    title: "Trust & Safety for Medical Travel to China | Angel Doctor",
    description:
      "Learn how Angel Doctor supports international patients with clear coordination, trained escorts, privacy-aware communication, and medical boundaries.",
    h1: "Trust & Safety for Medical Travel to China",
    intro:
      "Angel Doctor supports safer planning through clear care coordination, trained local support, privacy-aware communication, and medical role boundaries.",
    kind: "webpage",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Trust & Safety", href: "/trust-and-safety" }],
    quickAnswer:
      "Angel Doctor is not a hospital or emergency provider. It supports coordination, translation, appointment assistance, medical escort services, and follow-up communication where available.",
    sections: [
      { title: "Patient Information", body: "Patient inquiry details should be handled carefully and shared only as needed for coordination." },
      { title: "Escort Standards", body: "Medical escorts support hospital navigation and communication within a defined non-clinical service scope." },
      { title: "Emergency Boundary", body: "For medical emergencies, patients should contact local emergency services immediately." },
    ],
    relatedLinks: [{ label: "Medical Disclaimer", href: "/legal/medical-disclaimer" }, { label: "Privacy Policy", href: "/legal/privacy-policy" }],
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  {
    slug: "/about",
    title: "About Angel Doctor | Medical Travel Coordination in China",
    description:
      "Learn about Angel Doctor, a China healthcare coordination platform helping international patients access care planning and trained local medical escorts.",
    h1: "About Angel Doctor",
    intro:
      "Angel Doctor is a healthcare coordination and medical travel support platform for international patients seeking care in China.",
    kind: "about",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "About Angel Doctor", href: "/about" }],
    quickAnswer:
      "Angel Doctor helps patients understand care options, coordinate appointments, navigate visits, arrange local support, and continue follow-up communication where available.",
    sections: [
      { title: "What Angel Doctor Does", body: "Hospital matching, appointment coordination, translation support, local medical escort services, pricing guidance, and travel-to-care coordination." },
      { title: "What Angel Doctor Is Not", body: "Angel Doctor is not a hospital, clinic, doctor group, emergency provider, or substitute for licensed medical advice." },
      { title: "Who We Help", body: "International patients, short-stay travelers, overseas Chinese families, dental patients, checkup users, second opinion patients, and TCM recovery users." },
    ],
    relatedLinks: [{ label: "Hospital Access", href: "/hospital-access" }, { label: "Contact", href: "/contact" }],
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  {
    slug: "/contact",
    title: "Contact Angel Doctor | Get Your Care Plan in China",
    description:
      "Contact Angel Doctor to get a care plan for medical travel to China, including hospital matching, pricing guidance, appointment coordination, and local escort support.",
    h1: "Get Your Care Plan",
    intro:
      "Tell us what care you need, where you may travel in China, your timeline, and whether you need local medical escort support.",
    kind: "contact",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Contact", href: "/contact" }],
    quickAnswer:
      "After you submit your request, Angel Doctor can review your needs, clarify your city and timeline, and help prepare care coordination options.",
    sections: [
      { title: "What Happens Next", body: "A coordinator reviews your request and follows up about suitable options, timing, and local support needs." },
      { title: "What to Prepare", body: "Treatment interest, preferred city, travel timing, language support needs, and medical records only for complex conditions if requested later." },
      { title: "Service Boundary", body: "Angel Doctor provides coordination and support. Licensed healthcare providers make medical decisions." },
    ],
    relatedLinks: [{ label: "How It Works", href: "/how-it-works" }, { label: "Pricing", href: "/pricing" }],
    faqs: medicalFaq,
    disclaimer: "medical",
  },
  {
    slug: "/legal/medical-disclaimer",
    title: "Medical Disclaimer | Angel Doctor",
    description:
      "Read Angel Doctor's medical disclaimer for care coordination, hospital matching, translation support, and medical escort service boundaries.",
    h1: "Medical Disclaimer",
    intro:
      "Angel Doctor provides coordination and medical travel support. It does not provide medical advice, diagnosis, treatment, or emergency medical services.",
    kind: "webpage",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Medical Disclaimer", href: "/legal/medical-disclaimer" }],
    sections: [
      { title: "No Medical Advice", body: "Website information is for general informational and care coordination purposes only." },
      { title: "Licensed Providers", body: "Medical diagnosis, treatment decisions, prescriptions, procedures, and clinical recommendations are made by licensed healthcare providers." },
      { title: "No Guarantee", body: "Angel Doctor does not guarantee appointment availability, doctor access, treatment outcomes, recovery results, or medical cost estimates." },
    ],
    relatedLinks: [{ label: "Terms", href: "/legal/terms" }, { label: "Trust & Safety", href: "/trust-and-safety" }],
    disclaimer: "legal",
    lastUpdated: "2026-06-15",
  },
  {
    slug: "/legal/privacy-policy",
    title: "Privacy Policy | Angel Doctor",
    description:
      "Read Angel Doctor's Privacy Policy to understand how personal information and medical travel inquiry details may be collected and used.",
    h1: "Privacy Policy",
    intro:
      "This foundation privacy page outlines the categories of information involved in medical travel inquiries and coordination requests.",
    kind: "webpage",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Privacy Policy", href: "/legal/privacy-policy" }],
    sections: [
      { title: "Information We Collect", body: "Contact details, country or region, treatment interest, preferred city, travel timing, support needs, and inquiry messages." },
      { title: "Medical Inquiry Information", body: "Patients should not submit emergency medical information through the website." },
      { title: "How Information May Be Used", body: "Information may be used to respond to inquiries, prepare coordination options, and communicate about requested support." },
    ],
    relatedLinks: [{ label: "Terms", href: "/legal/terms" }, { label: "Contact", href: "/contact" }],
    disclaimer: "legal",
    lastUpdated: "2026-06-15",
  },
  {
    slug: "/legal/terms",
    title: "Terms of Use | Angel Doctor",
    description:
      "Read Angel Doctor's Terms of Use for website access, care coordination inquiries, service boundaries, third-party providers, and user responsibilities.",
    h1: "Terms of Use",
    intro:
      "These foundation terms explain website use, care coordination boundaries, third-party providers, appointment availability, pricing estimates, and user responsibilities.",
    kind: "webpage",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Terms", href: "/legal/terms" }],
    sections: [
      { title: "About Angel Doctor Services", body: "Angel Doctor provides healthcare coordination, hospital matching, translation support, appointment assistance, and local medical escort services." },
      { title: "Third-Party Providers", body: "Hospitals, clinics, and healthcare professionals are independent providers responsible for clinical decisions." },
      { title: "Pricing and Availability", body: "Pricing estimates and appointment options depend on provider confirmation, patient needs, and timeline." },
    ],
    relatedLinks: [{ label: "Privacy Policy", href: "/legal/privacy-policy" }, { label: "Medical Disclaimer", href: "/legal/medical-disclaimer" }],
    disclaimer: "legal",
    lastUpdated: "2026-06-15",
  },
];

for (const page of simplePages) {
  pages[page.slug] = page;
}

export function getPage(slug: string) {
  const page = pages[slug];
  if (!page) {
    throw new Error(`Missing page content for ${slug}`);
  }
  return page;
}
