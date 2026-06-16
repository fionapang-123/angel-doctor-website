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
      "Angel Doctor helps international patients understand healthcare options in China through smart provider matching, transparent coordination, and trained local medical escorts.",
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
    h1: "Dental Care in China for International Patients",
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
    title: "Health Checkup in China — One-Day Executive Screening | Angel Doctor",
    description:
      "Full health screening in 4–6 hours — cancer screening, cardiac assessment, MRI, CT, blood panels. English reports, same-day specialist access. $500–$1,000 vs $3,000–$6,000 in the US.",
    h1: "Health Checkup in China for International Patients",
    intro:
      "Executive health screening completed in one morning, with same-day results, English reports, and immediate specialist access if anything is found — coordinated at China's top tertiary hospital checkup centers.",
    kind: "service",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Treatments", href: "/treatments" }, { label: "Health Checkup", href: "/treatments/health-checkup-china" }],
    quickAnswer:
      "International patients choose China for health checkups for three reasons: speed (one morning vs weeks), cost ($500–$1,000 vs $3,000–$6,000), and follow-up care — Angel Doctor ensures that if anything is found, you get immediate specialist access, not a referral queue.",
    sections: [
      { title: "Executive Screening in One Morning", body: "Blood panels, tumor markers, cardiac assessment, ultrasound, CT, MRI — all completed in 4–6 hours at top-tier hospital checkup centers. Same-day results, English reports, and immediate specialist consultation if abnormalities are found." },
      { title: "Cancer Early Detection", body: "Lung, liver, stomach, colorectal, prostate, and breast cancer screening included. China's high-volume hospitals detect early-stage cancers at rates comparable to top Western institutions." },
      { title: "Care Navigation After Screening", body: "The part most competitors ignore: if your checkup finds a lung nodule, elevated tumor marker, or cardiac issue, Angel Doctor arranges same-day specialist access — not a 3-week referral wait." },
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
    h1: "Medical Second Opinion in China for International Patients",
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
    title: "TCM Recovery in China — Acupuncture, Cupping, Sleep Therapy | Angel Doctor",
    description:
      "Pain management, cupping therapy (拔火罐), sleep disorders, and stress recovery with licensed TCM practitioners in China. English-speaking escort support.",
    h1: "TCM Recovery in China for International Patients",
    intro:
      "Acupuncture for chronic pain, cupping for muscle recovery, TCM sleep therapy for insomnia — coordinated at university-affiliated TCM hospitals with English-speaking medical escort support.",
    kind: "service",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Treatments", href: "/treatments" }, { label: "TCM Recovery", href: "/treatments/tcm-recovery-china" }],
    quickAnswer:
      "Foreign patients travel to China for three TCM treatments: acupuncture for pain, cupping (拔火罐) for muscle recovery, and TCM sleep therapy for insomnia. Angel Doctor coordinates with licensed practitioners at university hospitals.",
    sections: [
      { title: "Pain Management", body: "Acupuncture and tuina massage for chronic back pain, frozen shoulder, migraines, arthritis, and sciatica — the #1 reason international patients seek TCM in China." },
      { title: "Cupping Therapy (拔火罐)", body: "Made famous by Olympic athletes — suction cup therapy for muscle recovery, inflammation reduction, and circulation improvement. Safe, licensed hospital settings." },
      { title: "Sleep Therapy", body: "TCM treats insomnia at the root cause — not just sedation. Acupuncture, herbal formulas, and lifestyle diagnosis based on pulse reading and tongue examination." },
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
    title: "Medical Travel in Shenzhen | Angel Doctor",
    description:
      "Plan medical travel in Shenzhen with dental care access, health checkup support, TCM recovery options, and trained local medical escorts.",
    h1: "Medical Travel in Shenzhen",
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
    title: "Medical Travel in Guangzhou | Angel Doctor",
    description:
      "Plan medical travel in Guangzhou for TCM recovery, rehabilitation support, health checkups, specialist coordination, and local medical escorts.",
    h1: "Medical Travel in Guangzhou",
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
    title: "Medical Travel in Shanghai | Angel Doctor",
    description:
      "Plan medical travel in Shanghai for executive health checkups, international clinics, specialist second opinions, and local medical support.",
    h1: "Medical Travel in Shanghai",
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
  "/destinations/beijing-medical-travel": {
    slug: "/destinations/beijing-medical-travel",
    title: "Medical Travel in Beijing for International Patients | Angel Doctor",
    description: "Plan medical travel in Beijing with top national hospital coordination, specialist consultations, complex second opinions, and local medical escort support.",
    h1: "Medical Travel in Beijing for International Patients",
    intro: "Beijing is home to China's highest concentration of top national hospitals, making it the premier destination for complex specialist consultations, second opinions, and advanced medical diagnostics.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Beijing", href: "/destinations/beijing-medical-travel" }],
    quickAnswer: "Beijing offers access to China's top national hospitals for complex specialist care. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs.",
    sections: [
      { title: "Best-Fit Treatments", body: "Second opinions, health checkups, specialist consultations, and dental care at China's leading hospitals." },
      { title: "Provider Types", body: "Public tertiary hospitals, specialty hospitals, children's hospitals, university-affiliated hospitals." },
      { title: "Local Support", body: "Appointment coordination, English-speaking support, registration assistance, navigation, and escort support." },
    ],
    relatedLinks: treatmentLinks,
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  "/guides": {
    slug: "/guides",
    title: "Medical Travel Guides for China | Angel Doctor",
    description:
      "Read patient guides about dental care costs, foreigner access to doctors in China, hospital selection, medical escort services, and country comparisons for medical travel.",
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
      { title: "China vs Turkey Dental Tourism", body: "Compare cost, quality, logistics, and support for dental tourism in China and Turkey.", href: "/guides/china-vs-turkey-dental-tourism" },
      { title: "How to Choose a Hospital in China", body: "Understand hospital tiers, public vs private, department matching, and how Angel Doctor helps.", href: "/guides/how-to-choose-a-hospital-in-china" },
      { title: "Medical Escort Service in China", body: "What medical escorts do, don't do, training standards, and how to book one.", href: "/guides/medical-escort-service-china" },
      { title: "China vs Thailand Medical Tourism", body: "Compare China and Thailand across cost, treatment scope, patient experience, and language support.", href: "/guides/china-vs-thailand-medical-tourism" },
      { title: "China Medical Travel Process", body: "Step-by-step guide: care request, provider matching, appointment, travel prep, hospital visit, follow-up.", href: "/guides/china-medical-travel-process" },
      { title: "China vs Singapore Healthcare", body: "Compare public vs private systems, costs, specialist access, and which destination fits your needs.", href: "/guides/china-vs-singapore-healthcare" },
    ],
    relatedLinks: [
      { label: "Dental Implants China Cost", href: "/guides/dental-implants-china-cost" },
      { label: "Can Foreigners See Doctors?", href: "/guides/can-foreigners-see-doctors-in-china" },
      { label: "China vs Turkey Dental", href: "/guides/china-vs-turkey-dental-tourism" },
      { label: "How to Choose a Hospital", href: "/guides/how-to-choose-a-hospital-in-china" },
      { label: "Medical Escort Service", href: "/guides/medical-escort-service-china" },
      { label: "China vs Thailand", href: "/guides/china-vs-thailand-medical-tourism" },
      { label: "China Medical Travel Process", href: "/guides/china-medical-travel-process" },
      { label: "China vs Singapore", href: "/guides/china-vs-singapore-healthcare" },
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
  "/guides/china-vs-turkey-dental-tourism": {
    slug: "/guides/china-vs-turkey-dental-tourism",
    title: "China vs Turkey Dental Tourism | Cost, Quality & Process Compared | Angel Doctor",
    description:
      "Compare China vs Turkey for dental implants and dental tourism: cost factors, quality considerations, travel logistics, language support, and follow-up planning.",
    h1: "China vs Turkey Dental Tourism: An Honest Comparison for International Patients",
    intro:
      "Dental tourism to China and Turkey both offer significant savings compared to US, UK, or Australian dental prices. But cost is only one factor — provider access, language support, follow-up logistics, and the overall patient experience differ meaningfully between these two destinations.",
    kind: "article",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Guides", href: "/guides" }, { label: "China vs Turkey Dental Tourism", href: "/guides/china-vs-turkey-dental-tourism" }],
    quickAnswer:
      "Both China and Turkey offer dental care at 50–80% below Western prices. Turkey has a well-established dental tourism industry with bundled packages. China offers access to hospital-affiliated dental departments, implant specialists in major cities, and the option to combine dental care with family visits or business travel. Angel Doctor helps patients compare provider options and coordinate appointments in China.",
    sections: [
      { title: "Cost Comparison at a Glance", body: "Dental implant costs in both countries range broadly by provider type, implant brand, materials, and case complexity. Turkey often advertises all-inclusive packages ($2,000–$4,000 per implant including hotel and transfer). In China, hospital-affiliated departments and private dental providers offer treatment at comparable or slightly lower base costs ($800–$3,000 per implant), but typically without bundled travel packages — patients arrange flights and accommodation separately." },
      { title: "Provider Access and Quality", body: "Turkey's dental tourism industry is served by private clinics that cater specifically to international patients, many with English-speaking coordinators. In China, patients can access hospital-affiliated dental departments in public tertiary hospitals as well as private dental providers in major cities. Hospital-affiliated providers in China follow the same regulatory standards as all public hospital departments, and implant specialists in top-tier cities often have high procedure volumes. Angel Doctor focuses on matching patients with suitable providers in China — not on making quality comparisons that would require clinical assessment." },
      { title: "Language and Communication", body: "Turkish dental clinics serving international patients typically have English-speaking coordinators as part of their tourism model. In China, public hospital dental departments may have limited English support, and registration, payment, and follow-up instructions are often in Chinese. This is where a trained local medical escort makes a meaningful difference — handling communication, translation, and navigation during the hospital visit. Angel Doctor's escort network is designed specifically to bridge this gap for patients in China." },
      { title: "Travel and Logistics", body: "Turkey (especially Istanbul and Antalya) is within a 3–4 hour flight from most European cities, making it a convenient choice for European patients. China is further for most Western travelers but closer for patients from Asia-Pacific, the Middle East, and Africa. Additionally, many overseas Chinese and business travelers combine a China dental visit with family trips or work — a practical advantage that Turkey cannot offer for this demographic." },
      { title: "Follow-Up and Aftercare", body: "Dental implant treatment often requires multiple visits — initial consultation, implant placement, and crown fitting spaced weeks or months apart. In both Turkey and China, patients should plan for follow-up visits or arrange aftercare with a local dentist at home. Angel Doctor's coordination support includes follow-up communication between the patient and the provider in China, helping bridge the gap when the patient returns home." },
      { title: "The Decision Factors", body: "Choose Turkey if you are in Europe, prefer an all-inclusive dental tourism package, and want a well-trodden path with established clinic coordinators. Choose China if you are in Asia-Pacific, have family or business ties to China, want access to hospital-affiliated implant departments, prefer a medical escort model over a clinic package model, or need to combine dental care with other treatments (health checkup, TCM recovery) that China's hospital system supports well." },
      { title: "How Angel Doctor Helps Patients Choosing China", body: "Angel Doctor coordinates the China side: matching you with suitable dental providers based on your treatment needs and preferred city, helping you understand timelines and preparation requirements, arranging a trained local medical escort for in-hospital support, and maintaining follow-up communication. We do not sell treatment packages or guarantee specific prices — we help you navigate the system with reliable support." },
    ],
    relatedLinks: [
      { label: "Dental Care in China", href: "/treatments/dental-care-china" },
      { label: "Dental Implants Cost Guide", href: "/guides/dental-implants-china-cost" },
      ...destinationLinks,
      { label: "How It Works", href: "/how-it-works" },
    ],
    faqs: [
      ...medicalFaq,
      {
        question: "Is dental implant quality better in Turkey or China?",
        answer: "Angel Doctor does not make clinical quality comparisons. Both Turkey and China have skilled implant dentists. In China, hospital-affiliated dental departments follow the same regulatory and training standards as all public hospital departments. The most important factors are the individual provider's experience, the implant brand and materials used, and the patient's specific clinical needs — not the country itself.",
      },
      {
        question: "Do Angel Doctor's prices include flights and hotels?",
        answer: "No. Angel Doctor's service fees cover care coordination, provider matching, appointment planning, translation support, and local medical escort services. Flights, hotels, transportation, and personal travel costs are separate. Hospital or provider medical fees are usually paid directly by the patient to the provider.",
      },
      {
        question: "Can I combine dental care with other treatments in China?",
        answer: "Yes. A key advantage of choosing China is that patients can often combine dental care with a health checkup, TCM recovery, or specialist consultation during the same trip. Angel Doctor can coordinate multiple treatment needs across your visit plan.",
      },
    ],
    disclaimer: "medical",
    lastUpdated: "2026-06-16",
  },
  "/guides/how-to-choose-a-hospital-in-china": {
    slug: "/guides/how-to-choose-a-hospital-in-china",
    title: "How to Choose a Hospital in China as an International Patient | Angel Doctor",
    description:
      "A practical guide to selecting hospitals in China for international patients: public vs private, tier levels, city factors, department matching, and how Angel Doctor helps.",
    h1: "How to Choose a Hospital in China as an International Patient",
    intro:
      "Choosing a hospital in China is not like choosing one in your home country. China's hospital system uses a tiered classification, and finding the right department, navigating registration, and communicating in Chinese are real barriers for international patients. This guide explains what you need to know.",
    kind: "article",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Guides", href: "/guides" }, { label: "How to Choose a Hospital", href: "/guides/how-to-choose-a-hospital-in-china" }],
    quickAnswer:
      "International patients should consider the hospital tier (tertiary/highest level is 3A or Class A Grade 3), whether it is public or private, which city it is in, and whether its departments have experience with international patients. Angel Doctor helps match patients with suitable hospitals based on treatment needs, preferred city, language support requirements, and appointment availability.",
    sections: [
      { title: "Understanding China's Hospital Tiers", body: "China classifies hospitals into three tiers. Tier 3 (三级) is the highest, further divided into 3A (三级甲等, the top classification), 3B, and 3C. Tier 3A public hospitals are typically large teaching hospitals with the widest range of departments and specialists. Tier 2 hospitals serve regional needs. Private and international clinics exist outside this tier system and often provide more English-friendly environments, though usually at higher cost and with fewer departments than large public hospitals." },
      { title: "Public vs Private vs International Clinics", body: "Public tertiary hospitals offer the broadest specialist access and are often the first choice for complex conditions, second opinions, and specialist consultations. However, they can be crowded and have limited English support. Private hospitals and international clinics (e.g., United Family Healthcare, Raffles Medical) offer English-speaking staff, appointment-based systems, and a more familiar experience for Western patients — but at higher cost. Dental providers and health checkup centers operate as separate facility types and may be public, private, or standalone." },
      { title: "City Matters More Than You Think", body: "Which city you choose affects everything: which hospitals are available, what specialties they are known for, whether English-speaking support is common, and how easy it is to travel there. Shenzhen is close to Hong Kong and convenient for dental and checkup visits. Guangzhou is southern China's medical hub with many Tier 3A hospitals. Shanghai has the most international clinics and private hospital options. Beijing has China's top-ranked teaching hospitals. Angel Doctor's destination pages explain the medical profile of each city in detail." },
      { title: "Department Matching — The Hidden Challenge", body: "In China's hospital system, you don't simply 'see a doctor.' You register with a specific department (科室), and the department assigns a doctor based on your condition and availability. Choosing the wrong department can waste a visit. For example, a foreign patient with back pain might not know whether to register with orthopedics (骨科), rehabilitation (康复科), or pain management (疼痛科). Angel Doctor's coordinators help identify the right department based on your symptoms, medical records, and treatment goals." },
      { title: "Registration and Appointment Reality", body: "Public hospitals in China typically do not accept walk-in international patients for specialist consultations. Registration often requires a Chinese ID or passport, and popular specialists may have waitlists of weeks. Some hospitals accept appointment bookings through third-party platforms (in Chinese). Angel Doctor handles appointment coordination — contacting the hospital, confirming availability, and communicating timing back to you in English." },
      { title: "Language and Navigation Support", body: "In most Chinese public hospitals, signage, forms, payment systems, and report collection are entirely in Chinese. Reception staff may not speak English. Even private hospitals may have limited English on the clinical side. A trained medical escort who speaks both English and Chinese, understands hospital processes, and can navigate registration, payment, pharmacy, and report collection is often the difference between a smooth visit and a frustrating one." },
      { title: "How Angel Doctor Simplifies Hospital Selection", body: "Instead of you researching hospital tiers, departments, and doctor schedules in Chinese, Angel Doctor asks about your treatment need, preferred city, timeline, and support requirements — then matches you with suitable provider options. You review the options, ask questions, and decide. After you confirm a plan, Angel Doctor coordinates the appointment and can arrange a local medical escort for your visit day." },
    ],
    relatedLinks: [
      { label: "Hospital Access", href: "/hospital-access" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      ...destinationLinks,
    ],
    faqs: [
      ...medicalFaq,
      {
        question: "Can I directly book an appointment at a Chinese hospital myself?",
        answer: "Some hospitals and third-party platforms allow online registration, but the process is almost entirely in Chinese and may require a Chinese phone number or ID. Specialist availability is not always shown online. Angel Doctor handles the coordination process for you — including confirming availability, communicating timing, and preparing you for the visit.",
      },
      {
        question: "How long does it take to get an appointment?",
        answer: "Appointment wait times vary significantly by hospital, department, specialist, and season. General consultations may be available within days to a week. Top specialists may require 2–4 weeks or longer. Angel Doctor provides realistic timing estimates based on your specific case once we begin coordinating.",
      },
      {
        question: "Do I need a referral to see a specialist in China?",
        answer: "China's hospital system generally does not require a GP referral to see a specialist. You can register directly with the relevant department. However, for complex conditions, having your medical records, imaging, and test results ready will help the specialist provide a more informed consultation.",
      },
    ],
    disclaimer: "medical",
    lastUpdated: "2026-06-16",
  },
  "/guides/medical-escort-service-china": {
    slug: "/guides/medical-escort-service-china",
    title: "Medical Escort Service in China | What Escorts Do, Don't Do & How to Book | Angel Doctor",
    description:
      "Understand what a medical escort in China does: hospital navigation, translation, registration support, payment guidance, report collection — and clear service boundaries.",
    h1: "Medical Escort Service in China: Your In-Hospital Guide and Translator",
    intro:
      "A medical escort is a trained local professional who accompanies you during hospital or clinic visits in China — handling language barriers, navigating hospital processes, and ensuring you understand what is happening at every step. This guide explains what escorts do, what they don't do, and how to arrange one through Angel Doctor.",
    kind: "article",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Guides", href: "/guides" }, { label: "Medical Escort Service", href: "/guides/medical-escort-service-china" }],
    quickAnswer:
      "A medical escort provides in-person, non-clinical support during your hospital visit in China — including registration assistance, Chinese-English translation, hospital navigation, payment guidance, report and prescription collection, and follow-up communication coordination. Medical escorts do not provide medical advice, diagnosis, or treatment. Angel Doctor's escort network includes 600+ trained escorts across 11 major Chinese cities.",
    sections: [
      { title: "What a Medical Escort Does", body: "Registration assistance (helping you fill forms and complete the registration process at the hospital reception), Chinese-English interpretation (translating between you and doctors, nurses, and hospital staff during consultations), hospital navigation (guiding you to the right department, consultation room, testing area, pharmacy, and payment counter — Chinese hospitals can be large and confusing), payment guidance (explaining hospital bills, helping you understand what each charge is for, and guiding you through the payment process), report and prescription collection (collecting test results, imaging reports, and prescriptions on your behalf when you are unable to wait), and follow-up communication (relaying doctor instructions, scheduling follow-up appointments, and answering post-visit questions)." },
      { title: "What a Medical Escort Does NOT Do", body: "Medical escorts are non-clinical support professionals. They do not provide medical advice, diagnose conditions, recommend treatments, prescribe medication, perform any clinical procedures, guarantee appointment availability or treatment outcomes, or make medical decisions on your behalf. Licensed healthcare providers are solely responsible for all clinical decisions. This boundary protects both you and the escort." },
      { title: "When You Need an Escort Most", body: "An escort is especially valuable if: you don't speak or read Chinese (the single biggest barrier in China's hospital system), you are visiting a public hospital (private and international clinics may have some English support, but public hospitals rarely do), you are undergoing a multi-step visit (consultation → testing → results review → payment → pharmacy in one day), you are traveling alone (having someone to handle logistics reduces stress and prevents mistakes), or it's your first time navigating China's healthcare system." },
      { title: "Escort Training and Standards", body: "Angel Doctor's escort network includes 600+ escorts trained in hospital processes, medical terminology (English-Chinese), patient privacy and confidentiality, professional conduct, and escalation procedures (when to involve a care coordinator or seek clarification from hospital staff). Escorts are assigned based on your city, language needs, and the type of hospital or clinic you are visiting." },
      { title: "How to Book an Escort", body: "Start by requesting a care plan through Angel Doctor — tell us your treatment need, preferred city, expected visit date, and that you need local escort support. A coordinator reviews your needs, confirms escort availability for your dates, and provides you with an estimated service fee. Once confirmed, the escort meets you at the hospital entrance or a pre-arranged meeting point on your visit day. Angel Doctor's escort service fees are bundled within the overall service fee — there is no separate per-hour billing unless your visit is unusually long or complex." },
      { title: "Escort Availability Across Cities", body: "Angel Doctor coordinates escorts in all 11 cities in our network: Shenzhen, Guangzhou, Shanghai, Beijing, Chengdu, Chongqing, Hangzhou, Nanjing, Wuhan, Xi'an, and Zhuhai. Availability depends on your visit date and the specific hospital. For popular hospitals and peak seasons, we recommend requesting an escort at least 1–2 weeks before your planned visit." },
      { title: "The Difference an Escort Makes", body: "Without an escort, international patients in Chinese public hospitals often spend hours figuring out where to go, what forms to fill, and how to communicate their symptoms — sometimes leaving without a clear understanding of their diagnosis or next steps. With a trained escort, the same visit becomes structured: you arrive, the escort handles registration, accompanies you to consultations (translating in real time), guides you through testing and payment, collects your reports, and ensures you leave with clear instructions. It's the difference between navigating alone in an unfamiliar system and having a local guide who knows exactly how the system works." },
    ],
    relatedLinks: [
      { label: "Book Local Medical Escort", href: "/book-local-medical-escort" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Hospital Access", href: "/hospital-access" },
      { label: "Trust & Safety", href: "/trust-and-safety" },
      ...destinationLinks,
    ],
    faqs: [
      ...medicalFaq,
      {
        question: "How much does a medical escort cost?",
        answer: "Escort service fees are bundled within Angel Doctor's overall service fee — there is no separate per-hour charge for typical half-day or full-day visits. The total service fee depends on your city, the type of hospital, the duration and complexity of your visit, and the specific support you need. A coordinator provides an estimate before you confirm.",
      },
      {
        question: "Can I request an escort who speaks a language other than English?",
        answer: "Angel Doctor's primary escort language is English-Chinese bilingual support. For other language needs (French, Arabic, Russian, etc.), please mention this in your inquiry. Availability varies by city and may involve additional coordination.",
      },
      {
        question: "What if my hospital visit runs longer than expected?",
        answer: "Escorts are trained to accommodate reasonable schedule changes during the visit day. If your consultation, testing, or treatment extends significantly beyond the planned duration, the escort coordinates with Angel Doctor's care team. Extended hours may involve an additional fee, which will be communicated to you before it applies.",
      },
      {
        question: "Can the escort make medical decisions for me?",
        answer: "No. Medical escorts provide translation and navigation support only. They do not recommend treatments, interpret test results, advise on medication, or make any clinical decisions. All medical decisions are between you and the licensed healthcare provider.",
      },
    ],
    disclaimer: "medical",
    lastUpdated: "2026-06-16",
  },
  "/guides/china-vs-thailand-medical-tourism": {
    slug: "/guides/china-vs-thailand-medical-tourism",
    title: "China vs Thailand Medical Tourism | Compare Cost, Quality & Support | Angel Doctor",
    description:
      "Compare China and Thailand for medical tourism: treatment scope, cost factors, hospital access, language support, travel logistics, and follow-up planning.",
    h1: "China vs Thailand Medical Tourism: Which Destination Fits Your Needs?",
    intro:
      "Thailand is one of the world's most established medical tourism destinations, known for private international hospitals and hospitality-driven patient experiences. China offers a different model: access to large public tertiary hospitals, high-volume specialist departments, and the option to combine medical care with business or family travel. This guide compares the two on what matters most to international patients.",
    kind: "article",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Guides", href: "/guides" }, { label: "China vs Thailand Medical Tourism", href: "/guides/china-vs-thailand-medical-tourism" }],
    quickAnswer:
      "Thailand is known for well-marketed private hospital groups (Bumrungrad, Bangkok Hospital) with English-speaking staff and tourism-friendly packages. China offers access to large public tertiary hospitals with high procedure volumes, particularly in dentistry, specialist consultations, and traditional Chinese medicine. Angel Doctor helps patients navigate China's hospital system with trained local escorts.",
    sections: [
      { title: "Treatment Scope and Specialties", body: "Thailand excels in cosmetic surgery, gender-affirming care, wellness retreats, and dental tourism — all served by private hospitals with strong international marketing. China's strengths lie in its public hospital system: large tertiary hospitals with high-volume specialist departments, advanced imaging and diagnostic capabilities, dental implant programs in major cities, TCM and rehabilitation services, and health checkup centers integrated with hospital departments. For complex specialist consultations and second opinions, China's top-tier public hospitals offer depth that private international hospitals may not match." },
      { title: "Cost Comparison", body: "Thailand's private international hospitals charge above local Thai rates but typically 40–60% below US/UK prices. Dental implants in Thailand range $1,500–$3,500. In China, hospital-affiliated dental departments offer implants at $800–$3,000, and specialist consultations at public hospitals cost significantly less than Thailand's private international hospitals. However, China does not offer the all-inclusive medical tourism packages (hospital + hotel + transfers) that many Thai providers bundle. Travel, accommodation, and local logistics are separate in China — which is where Angel Doctor's coordination support fills the gap." },
      { title: "Patient Experience and Hospitality", body: "Thailand's medical tourism industry is built on hospitality. Private hospitals feel like hotels — English-speaking reception, concierge services, international patient lounges, and airport transfers. China's public hospitals are clinical environments focused on medical throughput, not tourism experience. They can feel crowded, signage is in Chinese, and the process is unfamiliar to Western patients. Angel Doctor bridges this gap with trained medical escorts who handle registration, translation, navigation, and communication — making the clinical environment navigable for international patients." },
      { title: "Language and Communication", body: "Thailand's private international hospitals operate primarily in English, with coordinators dedicated to international patients. This is one of Thailand's strongest advantages. In China, English support in public hospitals is limited, and even private hospitals may not have English-speaking clinical staff. Angel Doctor's escort network — 600+ trained bilingual escorts — is designed specifically to solve this problem during hospital visits in China." },
      { title: "Travel and Geography", body: "Thailand is well-connected to Europe, the Middle East, and Australia, with Bangkok as a major hub. China's major cities (Shenzhen, Guangzhou, Shanghai, Beijing) have extensive international flight connections and are closer for patients from Asia-Pacific, East Asia, and North America's west coast. For overseas Chinese families across Southeast Asia, combining a medical visit to China with family reunions is a practical advantage neither Thailand nor any other destination can offer." },
      { title: "Which Destination for Which Patient", body: "Choose Thailand if you want a packaged medical tourism experience, prefer a private-hospital environment with English-speaking staff throughout, are seeking cosmetic or wellness procedures, or want a vacation-like recovery setting. Choose China if you need access to large public tertiary hospitals and high-volume specialists, are cost-sensitive and willing to trade tourism polish for medical depth, have family or business ties to China, want to combine multiple treatments (dental + checkup + TCM) in one trip, or value a personal medical escort over a hospital's international patient department." },
      { title: "How Angel Doctor Helps in China", body: "Angel Doctor provides the coordination layer that Thailand's private hospitals offer as an in-house service: provider matching based on your treatment needs and city, appointment coordination with real availability confirmation, a trained local medical escort for in-hospital support, and follow-up communication after your visit. We do this across 11 Chinese cities with access to 200+ hospital and provider relationships — giving you the structured support that makes China's medical depth accessible." },
    ],
    relatedLinks: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Hospital Access", href: "/hospital-access" },
      { label: "Pricing", href: "/pricing" },
      ...treatmentLinks,
      ...destinationLinks,
    ],
    faqs: [
      ...medicalFaq,
      {
        question: "Is medical care in China as safe as in Thailand?",
        answer: "Both China and Thailand have accredited hospitals with internationally trained doctors. China's Tier 3A public hospitals follow strict regulatory standards and many departments handle case volumes far exceeding most private international hospitals. Safety depends on the specific provider, not the country. Angel Doctor focuses on matching patients with suitable accredited providers — not on making country-level safety claims.",
      },
      {
        question: "Can I combine a Thailand vacation with a China medical trip?",
        answer: "It is possible but requires separate coordination. Angel Doctor only coordinates care in China. If you plan to visit both countries, we recommend coordinating your China treatment dates first, then arranging Thailand travel around those dates independently.",
      },
      {
        question: "Does Angel Doctor offer packages like Thai hospitals do?",
        answer: "No. Angel Doctor provides care coordination and local escort services — not all-inclusive packages. Hospital/provider medical fees, flights, hotels, and personal travel costs are separate. We help you navigate the system with reliable support rather than selling a bundled product.",
      },
    ],
    disclaimer: "medical",
    lastUpdated: "2026-06-16",
  },
  "/guides/china-medical-travel-process": {
    slug: "/guides/china-medical-travel-process",
    title: "China Medical Travel Process | Step-by-Step Guide for International Patients | Angel Doctor",
    description:
      "A step-by-step guide to planning medical travel to China: care requests, hospital matching, appointment coordination, visa and travel, hospital visits, and follow-up.",
    h1: "China Medical Travel Process: A Step-by-Step Guide for International Patients",
    intro:
      "Planning a medical trip to China may feel overwhelming — but it follows a clear sequence. From your first inquiry through arriving at the hospital and following up after your visit, this guide walks through every stage so you know exactly what to expect and what to prepare.",
    kind: "article",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Guides", href: "/guides" }, { label: "Medical Travel Process", href: "/guides/china-medical-travel-process" }],
    quickAnswer:
      "Medical travel to China typically follows six stages: (1) share your treatment needs and preferences, (2) Angel Doctor matches suitable providers and provides options, (3) you review and confirm a care plan, (4) prepare travel documents and logistics, (5) visit the hospital with local escort support, and (6) follow-up communication after returning home. Angel Doctor coordinates stages 1–3 and 5–6.",
    sections: [
      { title: "Stage 1: Share Your Care Request (1–2 days)", body: "Start by telling Angel Doctor what treatment you need, which city you prefer, your travel timeline, and whether you need local escort support. You can submit this through the contact form or by requesting a care plan directly. Be specific: for dental care, mention which procedures interest you (implants, crowns, checkup). For second opinions, be ready to share your medical records when requested. The more detail you provide, the more targeted the provider matching will be." },
      { title: "Stage 2: Provider Matching and Options (2–5 business days)", body: "A care coordinator reviews your request and matches you with suitable providers based on your treatment needs, preferred city, timeline, budget expectations, and support requirements. You receive a shortlist of options — not a single recommendation — with information about each provider type, expected timeline, cost factors, and what to prepare. This is a discussion, not an automated result: you can ask questions, adjust preferences, and refine your plan before committing." },
      { title: "Stage 3: Confirm Your Care Plan (varies)", body: "Once you choose a provider and plan, Angel Doctor coordinates the appointment. This involves contacting the hospital department, confirming the doctor's availability for your preferred dates, communicating any preparation requirements (fasting for checkups, bringing prior imaging for specialist consultations), and setting a confirmed visit date. You receive a summary with the hospital name, department, date, time, preparation checklist, and escort arrangement if requested." },
      { title: "Stage 4: Travel and Logistics Preparation (1–4 weeks before)", body: "Book your flights and accommodation. If you are in Shenzhen, note that it is 40 minutes from Hong Kong by high-speed rail — many patients fly into Hong Kong and cross by train. For Shanghai and Beijing, international flights are direct and frequent. Check visa requirements: many nationalities can enter China visa-free for short stays (check current policy for your nationality). Prepare: passport (required for hospital registration), travel insurance, treatment goals summary, medication list, prior medical records and imaging if relevant, and local currency or WeChat Pay/Alipay setup (most Chinese hospitals do not accept foreign credit cards at the counter)." },
      { title: "Stage 5: Hospital Visit Day (the core experience)", body: "Arrive at the hospital at the confirmed time. If you booked an escort, they meet you at the entrance or a pre-arranged meeting point. The escort handles: registration (using your passport), guiding you to the right department and consultation room, translating between you and the doctor in real time, accompanying you through any tests or imaging, explaining bills and guiding payment, collecting reports and prescriptions, and ensuring you understand next steps before you leave. A typical specialist consultation visit lasts 2–4 hours from arrival to departure, depending on testing needs." },
      { title: "Stage 6: Follow-Up and Aftercare (after returning home)", body: "After your visit, Angel Doctor maintains follow-up communication between you and the provider. This includes: relaying test results that arrive after your visit, scheduling follow-up appointments if treatment requires multiple visits (common for dental implants), answering post-visit questions, and coordinating with your local doctor if you need to share records from your China visit. For dental implant patients who need a second visit for crown fitting, Angel Doctor coordinates the return visit as part of the ongoing care plan." },
      { title: "Realistic Timeline Overview", body: "Short-stay treatments (health checkup, dental consultation, single specialist visit): 2–5 days in China, with 2–3 weeks total planning from inquiry to visit. Multi-visit treatments (dental implants, TCM program, rehabilitation): initial visit 3–7 days, then a second visit weeks or months later, with Angel Doctor coordinating both. Complex cases (second opinion requiring multiple specialist consultations, combined treatments): timeline varies significantly and is discussed case by case during the care plan review." },
    ],
    relatedLinks: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Hospital Access", href: "/hospital-access" },
      { label: "Can Foreigners See Doctors?", href: "/guides/can-foreigners-see-doctors-in-china" },
      { label: "Medical Escort Service", href: "/guides/medical-escort-service-china" },
      ...destinationLinks,
    ],
    faqs: [
      ...medicalFaq,
      {
        question: "How far in advance should I start planning?",
        answer: "For most treatments, 3–4 weeks before your preferred visit date is ideal. This allows time for provider matching, appointment confirmation, travel booking, and preparation. For top specialists or peak travel seasons, allow 4–6 weeks. Express coordination for urgent cases may be possible — mention your timeline urgency in your care request.",
      },
      {
        question: "Do I need a visa to enter China for medical treatment?",
        answer: "Visa requirements depend on your nationality and current Chinese immigration policy. Many nationalities can now enter China visa-free for short stays (typically 15–30 days). For longer stays or nationalities requiring visas, a tourist (L) visa or medical (S2) visa may apply. Check with your local Chinese embassy or consulate for current requirements.",
      },
      {
        question: "What if I need to change my appointment date?",
        answer: "Contact Angel Doctor as soon as possible. We coordinate with the hospital to reschedule — availability for the new date depends on the department and doctor's schedule. Rescheduling is usually possible with sufficient notice, though popular specialists may have limited flexibility.",
      },
      {
        question: "Can Angel Doctor help with airport pickup and hotel?",
        answer: "Angel Doctor's coordination focuses on the medical side — provider matching, appointments, escort support, and follow-up. Airport transfers and hotel bookings are travel arrangements you handle directly or through a travel agent. We can recommend areas near your hospital, but do not book travel logistics.",
      },
    ],
    disclaimer: "medical",
    lastUpdated: "2026-06-16",
  },
  "/guides/china-vs-singapore-healthcare": {
    slug: "/guides/china-vs-singapore-healthcare",
    title: "China vs Singapore Healthcare | Compare for Medical Travel | Angel Doctor",
    description:
      "Compare China and Singapore for medical travel: public vs private systems, cost differences, specialist access, language support, and which suits different patient needs.",
    h1: "China vs Singapore Healthcare: A Practical Comparison for Medical Travelers",
    intro:
      "Singapore has one of Asia's most respected healthcare systems — efficient, English-speaking, and internationally accredited. China offers a different model: a vast public hospital system with high-volume specialist departments at significantly lower cost. This guide compares the two for international patients considering medical travel.",
    kind: "article",
    cta: "carePlan",
    breadcrumbs: [...homeCrumbs, { label: "Guides", href: "/guides" }, { label: "China vs Singapore Healthcare", href: "/guides/china-vs-singapore-healthcare" }],
    quickAnswer:
      "Singapore offers world-class private and public hospitals with full English proficiency, JCI accreditation, and a familiar patient experience for Western visitors — at Singapore-level costs. China offers access to large public tertiary hospitals with high procedure volumes and specialist depth at significantly lower cost, but with language barriers that Angel Doctor's escort network helps bridge.",
    sections: [
      { title: "Cost: The Biggest Difference", body: "Singapore is one of the most expensive healthcare destinations in Asia, with private hospital costs approaching US levels. A specialist consultation at a private Singapore hospital may cost SGD 150–300 (USD 110–220). A health checkup package at a private hospital can range SGD 500–3,000. China's public tertiary hospitals offer specialist consultations for RMB 50–300 (USD 7–40) and health checkup packages starting at a fraction of Singapore rates. For cost-sensitive patients, the difference is dramatic — China can be 70–90% less expensive than Singapore for comparable procedures." },
      { title: "Quality and Accreditation", body: "Singapore's hospitals — both public (SingHealth, NUHS) and private (Mount Elizabeth, Gleneagles, Raffles) — are JCI-accredited and operate to standards familiar to Western patients. China's top Tier 3A public hospitals do not typically seek JCI accreditation but operate under China's own rigorous hospital classification system, with many departments handling case volumes that exceed most international hospitals. For specialist depth in specific fields (oncology, cardiology, orthopedics), China's largest teaching hospitals see patient volumes and case variety that few Singapore institutions match." },
      { title: "Language: Singapore's Clear Edge", body: "English is one of Singapore's official languages and the primary language of its healthcare system. Every doctor, nurse, and receptionist speaks English. Medical records, prescriptions, and reports are in English. This is Singapore's strongest advantage over China, where public hospital communication is almost entirely in Chinese. Angel Doctor's escort network is designed to neutralize this gap in China — a bilingual escort accompanies you through your entire hospital visit, translating in real time." },
      { title: "Treatment Types: Different Strengths", body: "Singapore is strong for: complex surgery, oncology treatment, cardiology, and procedures where patients want a fully English-speaking environment with familiar clinical protocols. China is strong for: dental care (high-volume implant programs), health checkups (efficient, comprehensive, low-cost), TCM and rehabilitation (services that are not mainstream in Singapore's Western-oriented system), and specialist second opinions from high-volume departments. For patients who need both cost savings and specialist depth, China offers a combination Singapore cannot match on price." },
      { title: "Patient Experience", body: "Singapore offers a clean, efficient, English-speaking experience that feels familiar to Western visitors. Appointments are scheduled, wait times are communicated, and the entire process is designed for international patients. In China, the public hospital experience is functional and clinical — not designed for comfort or tourism. This is where Angel Doctor's escort service transforms the experience: instead of navigating Chinese registration forms, crowded waiting areas, and language barriers alone, you have a trained local professional handling every step." },
      { title: "Geographic and Cultural Fit", body: "Singapore is well-connected across Southeast Asia, Australia, and the Middle East, with a multicultural environment that feels welcoming to diverse patients. China's advantage is for patients with existing ties: overseas Chinese families across Southeast Asia, business travelers who already visit China regularly, and patients from neighboring Asian countries where China is the closest major medical destination." },
      { title: "Making the Choice", body: "Choose Singapore if budget is not a primary concern, you value a seamless English-speaking experience above all else, and you are seeking complex surgery or oncology care in a JCI-accredited setting. Choose China if cost savings are important, you want access to high-volume specialist departments and teaching hospitals, you need dental care, health checkups, or TCM at significantly lower cost, you have family or business ties to China, or you are willing to trade Singapore's polished patient experience for China's medical depth — with an escort to handle the logistics." },
    ],
    relatedLinks: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Hospital Access", href: "/hospital-access" },
      { label: "Pricing", href: "/pricing" },
      { label: "China vs Thailand", href: "/guides/china-vs-thailand-medical-tourism" },
      { label: "China vs Turkey Dental", href: "/guides/china-vs-turkey-dental-tourism" },
      ...destinationLinks,
    ],
    faqs: [
      ...medicalFaq,
      {
        question: "Are Chinese hospitals internationally accredited like Singapore's?",
        answer: "Most Chinese Tier 3A public hospitals do not hold JCI accreditation — they operate under China's own classification and regulatory system. This does not mean lower quality; many Tier 3A teaching hospitals have departments with case volumes and specialist expertise that exceed JCI-accredited hospitals. Accreditation is one quality signal among many — procedure volume, specialist training, and patient outcomes matter more for individual treatment decisions.",
      },
      {
        question: "Can I use my Singapore health insurance in China?",
        answer: "Most Singapore and international health insurance plans do not directly cover treatment at Chinese public hospitals. Some international plans may cover private international clinics in China. Check with your insurer. Patients typically pay Chinese hospitals directly (cash or Chinese payment methods), and costs are low enough that many patients self-pay without needing insurance reimbursement.",
      },
      {
        question: "Is it worth traveling to China if I am already in Singapore?",
        answer: "For dental care, health checkups, and TCM, the cost difference between Singapore and China can be substantial enough to justify the trip — especially for multi-procedure dental work or comprehensive checkup packages. Angel Doctor can provide cost guidance during your care plan review so you can compare before deciding.",
      },
    ],
    disclaimer: "medical",
    lastUpdated: "2026-06-16",
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
      "Angel Doctor combines hospital access coordination, smart provider matching, transparent planning, and a standardized local medical escort network.",
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
  // ── Extended destination city pages (schema support) ──
  {
    slug: "/destinations/chengdu-medical-travel",
    title: "Medical Travel in Chengdu for International Patients | Angel Doctor",
    description: "Plan medical travel in Chengdu with West China Hospital coordination, health checkups, specialist care, TCM recovery, and local medical escort support.",
    h1: "Medical Travel in Chengdu for International Patients",
    intro: "Chengdu is a major medical hub in western China, home to West China Hospital — one of the country's largest and most comprehensive medical centers.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Chengdu", href: "/destinations/chengdu-medical-travel" }],
    quickAnswer: "Chengdu offers strong medical resources anchored by West China Hospital. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs, preferred timeline, and support requirements.",
    sections: [
      { title: "Best-Fit Treatments", body: "Health checkups, second opinions, TCM recovery, and specialist consultations." },
      { title: "Provider Types", body: "Public tertiary hospitals, university-affiliated hospitals, comprehensive medical centers." },
      { title: "Local Support", body: "Appointment coordination, English-speaking support, registration assistance, navigation, and escort support." },
    ],
    relatedLinks: [...treatmentLinks, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  {
    slug: "/destinations/chongqing-medical-travel",
    title: "Medical Travel in Chongqing for International Patients | Angel Doctor",
    description: "Plan medical travel in Chongqing with major hospital coordination for pediatric care, specialist consultations, and local medical escort support.",
    h1: "Medical Travel in Chongqing for International Patients",
    intro: "Chongqing is a major medical destination in southwest China with strong pediatric, specialist, and general hospital resources.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Chongqing", href: "/destinations/chongqing-medical-travel" }],
    quickAnswer: "Chongqing offers strong medical resources with leading children's hospitals and comprehensive medical centers. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs.",
    sections: [
      { title: "Best-Fit Treatments", body: "Pediatric care, health checkups, specialist consultations, and second opinions." },
      { title: "Provider Types", body: "Public tertiary hospitals, children's hospitals, comprehensive medical centers." },
      { title: "Local Support", body: "Appointment coordination, English-speaking support, registration assistance, navigation, and escort support." },
    ],
    relatedLinks: [...treatmentLinks, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  {
    slug: "/destinations/hangzhou-medical-travel",
    title: "Medical Travel in Hangzhou for International Patients | Angel Doctor",
    description: "Plan medical travel in Hangzhou with Zhejiang University-affiliated hospital coordination, specialist care, women's health, and local medical escort support.",
    h1: "Medical Travel in Hangzhou for International Patients",
    intro: "Hangzhou is home to Zhejiang University's top-ranked medical institutions, offering strong specialist and women's health services.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Hangzhou", href: "/destinations/hangzhou-medical-travel" }],
    quickAnswer: "Hangzhou offers strong medical resources through Zhejiang University's affiliated hospitals. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs.",
    sections: [
      { title: "Best-Fit Treatments", body: "Obstetrics & gynecology, health checkups, specialist consultations, and second opinions." },
      { title: "Provider Types", body: "Public tertiary hospitals, university-affiliated hospitals, women's health centers." },
      { title: "Local Support", body: "Appointment coordination, English-speaking support, registration assistance, navigation, and escort support." },
    ],
    relatedLinks: [...treatmentLinks, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  {
    slug: "/destinations/nanjing-medical-travel",
    title: "Medical Travel in Nanjing for International Patients | Angel Doctor",
    description: "Plan medical travel in Nanjing with Jiangsu Province hospital coordination, specialist consultations, and local medical escort support.",
    h1: "Medical Travel in Nanjing for International Patients",
    intro: "Nanjing is a major medical center in eastern China with strong comprehensive hospital resources and specialist departments.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Nanjing", href: "/destinations/nanjing-medical-travel" }],
    quickAnswer: "Nanjing offers strong medical resources through Jiangsu Province's leading hospitals. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs.",
    sections: [
      { title: "Best-Fit Treatments", body: "Specialist consultations, health checkups, second opinions, and comprehensive diagnostics." },
      { title: "Provider Types", body: "Public tertiary hospitals, university-affiliated hospitals, comprehensive medical centers." },
      { title: "Local Support", body: "Appointment coordination, English-speaking support, registration assistance, navigation, and escort support." },
    ],
    relatedLinks: [...treatmentLinks, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  {
    slug: "/destinations/wuhan-medical-travel",
    title: "Medical Travel in Wuhan for International Patients | Angel Doctor",
    description: "Plan medical travel in Wuhan with Tongji and Xiehe hospital coordination, specialist care, second opinions, and local medical escort support.",
    h1: "Medical Travel in Wuhan for International Patients",
    intro: "Wuhan is a central China medical hub with two of the country's largest university-affiliated hospitals, Tongji and Xiehe.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Wuhan", href: "/destinations/wuhan-medical-travel" }],
    quickAnswer: "Wuhan offers strong medical resources through Tongji and Xiehe hospital systems. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs.",
    sections: [
      { title: "Best-Fit Treatments", body: "Health checkups, second opinions, specialist consultations, and comprehensive diagnostics." },
      { title: "Provider Types", body: "Public tertiary hospitals, university-affiliated hospitals, comprehensive medical centers." },
      { title: "Local Support", body: "Appointment coordination, English-speaking support, registration assistance, navigation, and escort support." },
    ],
    relatedLinks: [...treatmentLinks, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  {
    slug: "/destinations/xian-medical-travel",
    title: "Medical Travel in Xi'an for International Patients | Angel Doctor",
    description: "Plan medical travel in Xi'an with Xi'an Jiaotong University hospital coordination, specialist consultations, and local medical escort support.",
    h1: "Medical Travel in Xi'an for International Patients",
    intro: "Xi'an is a growing medical destination in northwest China, anchored by Xi'an Jiaotong University's First Affiliated Hospital.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Xi'an", href: "/destinations/xian-medical-travel" }],
    quickAnswer: "Xi'an offers strong medical resources through Xi'an Jiaotong University Hospital. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs.",
    sections: [
      { title: "Best-Fit Treatments", body: "Specialist consultations, health checkups, second opinions, and comprehensive care." },
      { title: "Provider Types", body: "Public tertiary hospitals, university-affiliated hospitals, comprehensive medical centers." },
      { title: "Local Support", body: "Appointment coordination, English-speaking support, registration assistance, navigation, and escort support." },
    ],
    relatedLinks: [...treatmentLinks, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "hospital",
  },
  {
    slug: "/destinations/zhuhai-medical-travel",
    title: "Medical Travel in Zhuhai for International Patients | Angel Doctor",
    description: "Plan medical travel in Zhuhai with public hospital coordination, general medical care, cross-border access near Macau, and local medical escort support.",
    h1: "Medical Travel in Zhuhai for International Patients",
    intro: "Zhuhai is a convenient destination near Macau and Hong Kong for international patients seeking general medical care in a modern Chinese city.",
    kind: "service",
    cta: "carePlan",
    secondaryCta: "escort",
    breadcrumbs: [...homeCrumbs, { label: "Destinations", href: "/destinations" }, { label: "Zhuhai", href: "/destinations/zhuhai-medical-travel" }],
    quickAnswer: "Zhuhai offers convenient medical access near Macau and Hong Kong. Angel Doctor can help identify suitable providers based on your specific treatment needs.",
    sections: [
      { title: "Best-Fit Treatments", body: "Health checkups, general medical consultations, and specialist referrals." },
      { title: "Provider Types", body: "Public tertiary hospitals, general medical centers." },
      { title: "Local Support", body: "Appointment coordination, English-speaking support, registration assistance, navigation, and escort support." },
    ],
    relatedLinks: [...treatmentLinks, ...destinationLinks],
    faqs: medicalFaq,
    disclaimer: "hospital",
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
