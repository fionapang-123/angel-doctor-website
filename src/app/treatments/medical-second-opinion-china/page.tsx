import { TreatmentPage, treatmentPageToContent, type TreatmentPageData } from "@/components/TreatmentPage";
import { createMetadata } from "@/config/metadata";

const data: TreatmentPageData = {
  slug: "treatments/medical-second-opinion-china",
  title: "Medical Second Opinion in China",
  subtitle: "Direct Specialist Access Without Referral — 7–53% of Second Opinions Change the Diagnosis",
  badge: "Specialist Access",
  hero: "A second medical opinion can meaningfully change the diagnosis, treatment direction, or confidence in the next step. In many Western systems, getting one involves referral gatekeeping, long waits, and high out-of-pocket consultation fees. China offers direct specialist access through major hospital departments, and Angel Doctor coordinates record preparation, department matching, translation support, and in-person escort support.",
  heroImage: {
    src: "/images/escort-scenes/international-patient-lounge-support.png",
    alt: "Medical second opinion coordination in China with patient lounge and local support",
    caption: "Medical second opinion coordination in China with record preparation, department matching, translation support, and local visit planning.",
  },
  whatWeCoordinate: [
    { title: "Specialist & Department Matching", body: "We identify the right subspecialist for your specific condition. A spinal tumor might need neurosurgery or orthopedics — correct matching prevents wasted consultations." },
    { title: "Record Preparation & Translation", body: "We guide you on what records to prepare — imaging (DICOM preferred), pathology, labs — and arrange professional translation into Chinese before the specialist reviews your case." },
    { title: "In-Person Consultation with Escort", body: "A bilingual medical escort accompanies your visit — translating the specialist's questions, findings, and recommendations in real time. Written opinion professionally translated into English." },
    { title: "Next-Step Care Coordination", body: "If the opinion recommends treatment in China, Angel Doctor coordinates the full pathway — hospital access, scheduling, ongoing escort support." },
  ],
  whoIsItFor: [
    "You've received a serious diagnosis (cancer, brain tumor, cardiac) and want expert confirmation before treatment",
    "A surgeon recommended major surgery but conservative alternatives weren't fully explored",
    "You have a rare/complex condition — China's high-volume specialists see more cases monthly than many Western specialists see yearly [2]",
    "You were told 'nothing more can be done' — China's specialists may identify clinical trials or options not yet considered",
    "Your home country has 6–18 month specialist wait times — China: 1–2 weeks from inquiry to consultation",
  ],
  commonNeeds: [
    "Diagnostic confirmation — 7–53% of second opinions result in a materially different diagnosis. For oral pathology, major discrepancies reach 53% [1]",
    "Volume = accuracy — a specialist who performs a procedure hundreds of times yearly may recommend a different approach than a lower-volume provider. The volume-outcome relationship is one of healthcare's most robust findings [2]",
    "Cost — US specialist consultation: $300–$600+. China: $30–$100. Including Angel Doctor's coordination, total cost is 60–80% less, with no insurance pre-authorization",
  ],
  whatIsIncluded: [
    "Case intake — coordinator reviews your diagnosis and records to determine the right specialist department",
    "Medical record translation — key documents professionally translated into Chinese",
    "Specialist consultation — 20–40 minute review with real-time English interpretation by Angel Doctor's escort",
    "Written second opinion — specialist's findings, assessment, and recommendations translated into English",
    "Follow-up coordination — if further testing or treatment in China is recommended, Angel Doctor coordinates next steps",
  ],
  hospitalAccessNote: "Angel Doctor coordinates at China's top 3A hospitals: Peking Union Medical College Hospital (Beijing — China's premier multi-specialty center), Fudan and Shanghai Jiao Tong University hospitals (oncology, cardiology, neurosurgery), Sun Yat-sen University hospitals (Guangzhou — oncology, ophthalmology), and West China Hospital (Chengdu — one of the world's largest by patient volume).",
  recommendedCities: [
    { name: "Beijing", slug: "beijing-medical-travel", why: "Peking Union Medical College Hospital — China's premier multi-specialty center for complex diagnostics." },
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "Fudan/Jiao Tong hospitals — strong in oncology, cardiology, neurosurgery." },
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Sun Yat-sen University hospitals — leading oncology and multi-disciplinary teams." },
    { name: "Chengdu", slug: "chengdu-medical-travel", why: "West China Hospital — massive patient volume, broad specialist coverage, extensive clinical trials." },
  ],
  process: [
    { title: "Submit your case", body: "Share your diagnosis, records, imaging, and the specific question for the specialist. A coordinator reviews and guides you on any missing documents." },
    { title: "Specialist review + opinion", body: "Your records are translated and matched to the right department. The specialist delivers a written opinion — remote or in-person pathway based on your case." },
    { title: "Decide your next step", body: "You receive the opinion in English. If treatment in China is recommended, Angel Doctor coordinates the pathway. If it confirms your plan, you proceed with confidence." },
  ],
  timeline: "Remote opinion: 5–10 business days after records received. In-person: 1–2 weeks from inquiry to appointment. Record translation: 2–4 business days. Total: 2–3 weeks from inquiry to written opinion for most cases.",
  risksAndLimits: [
    "A second opinion may confirm your original diagnosis — valuable for peace of mind even if nothing changes clinically",
    "Chinese specialists may recommend treatments approved in China but not in your home country — discuss with your local doctor",
    "Remote file review has limits — some conditions require physical examination. Angel Doctor helps you determine which path is appropriate",
  ],
  pricingNote: "Specialist consultation: $30–$100 (standard), $100–$300 (senior professor). US comparison: $300–$600+. Including Angel Doctor's coordination and translation, total cost typically 60–80% below US out-of-pocket. Hospital fees paid directly.",
  faqs: [
    { q: "How often does a second opinion change the diagnosis?", a: "7–53% of cases, depending on specialty and complexity. A 2021 BMJ Open systematic review confirmed discrepancies had a 'potential major impact on patient outcomes.' While many confirm the original assessment, a meaningful minority reveal important differences [1]." },
    { q: "Do I need a GP referral to see a specialist in China?", a: "No. China's direct-access model lets you register directly with any specialist department — unlike gatekeeper systems (UK NHS, Canadian provinces, US HMOs). Tell Angel Doctor your condition; we match you to the right department." },
    { q: "Can I get a second opinion without traveling?", a: "Remote file review is available for many cases. Complex conditions may benefit from in-person examination. Your coordinator recommends the best path after reviewing your records." },
    { q: "What records do I need?", a: "Imaging (CT/MRI/PET-CT in DICOM format), pathology slides/reports, clinical summary from your physician, medication list, genetic/molecular results if any. Your coordinator provides a tailored checklist." },
    { q: "How long does it take?", a: "Remote: 5–10 business days after records received. In-person consultation: 1–2 weeks from inquiry to appointment. Total: 2–3 weeks from inquiry to written opinion." },
    { q: "Will my home doctor accept a Chinese hospital's opinion?", a: "Specialists at China's top 3A hospitals are internationally recognized. The written opinion is professionally translated with credentials and rationale. Most Western doctors accept opinions from accredited international institutions." },
  ],
};

export const metadata = createMetadata(treatmentPageToContent(data));

export default function Page() {
  return <TreatmentPage data={data} />;
}
