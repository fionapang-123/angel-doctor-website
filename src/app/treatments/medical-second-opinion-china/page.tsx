import { TreatmentPage, type TreatmentPageData } from "@/components/TreatmentPage";

const data: TreatmentPageData = {
  slug: "treatments/medical-second-opinion-china",
  title: "Medical Second Opinion in China",
  subtitle: "How Angel Doctor Helps You Get a Specialist Second Opinion",
  badge: "Specialist Access",
  hero: "Get a second medical opinion from a Chinese specialist without traveling first. Angel Doctor helps international patients submit medical records, identify suitable hospitals and specialists, coordinate remote or in-person second opinions, and support follow-up care planning.",
  whatWeCoordinate: [
    { title: "Specialist Matching", body: "Based on your diagnosis and medical records, we help identify suitable hospitals and specialist departments in China for a second opinion." },
    { title: "Record Preparation", body: "We guide you on what records to prepare — diagnosis reports, imaging, test results, medication list, and treatment history." },
    { title: "Remote or In-Person Options", body: "Depending on your case, a second opinion may be available remotely, or may require an in-person visit. We help you understand both paths." },
    { title: "Opinion Translation", body: "We help translate the specialist's opinion and recommendations from Chinese to English, including treatment options and care guidance." },
    { title: "Next-Step Planning", body: "If the second opinion confirms treatment in China, Angel Doctor helps coordinate appointments, hospital access, and local support." },
    { title: "Multi-disciplinary Access", body: "For complex cases, we can help coordinate multi-department specialist review at major hospitals." },
  ],
  whoIsItFor: [
    "You've received a serious diagnosis and want a second opinion before proceeding with treatment",
    "You're considering treatment in China and want a specialist to review your case first",
    "You have a rare or complex condition and want access to Chinese specialist expertise",
    "Your home country treatment options are limited and you want to explore alternatives in China",
    "You want a specialist to confirm a diagnosis, treatment plan, or surgical recommendation",
    "You're an overseas Chinese seeking a specialist opinion from a top Chinese hospital",
  ],
  recommendedCities: [
    { name: "Beijing", slug: "beijing-medical-travel", why: "Peking Union Medical College Hospital and other top national centers — deep specialist expertise across oncology, neurology, cardiology, and rare diseases." },
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "Fudan and Shanghai Jiao Tong University hospitals — strong in oncology, cardiology, orthopedics, and specialist surgery." },
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Sun Yat-sen University hospitals — leading oncology, ophthalmology, and multi-disciplinary centers." },
    { name: "Chengdu", slug: "chengdu-medical-travel", why: "West China Hospital — comprehensive diagnostics and specialist care across multiple departments." },
  ],
  process: [
    { title: "Submit your case", body: "Share your diagnosis, medical records, and what you're seeking a second opinion on. A coordinator will review what's needed." },
    { title: "Specialist review", body: "Angel Doctor identifies suitable specialists or departments. Your records are prepared for review. Remote or in-person pathway is confirmed." },
    { title: "Receive your opinion & plan", body: "You receive the specialist's opinion in English. If treatment in China is recommended, Angel Doctor helps coordinate next steps." },
  ],
  pricingNote: "Remote second opinion costs vary by case complexity, specialist department, and review depth. In-person second opinions include consultation fees set by the hospital. Angel Doctor's coordination fees depend on the service package. All hospital and specialist fees are confirmed before you proceed.",
  faqs: [
    { q: "Can I get a second opinion without traveling to China?", a: "For many cases, yes. Remote second opinions are available for patients who can submit medical records, imaging, and test results. A coordinator will confirm whether an in-person visit is required after reviewing your case." },
    { q: "What medical records do I need for a second opinion?", a: "Typically: diagnosis reports, imaging (CT, MRI, X-ray), pathology reports, blood test results, current medication list, treatment history, and the specific question you want answered. Your coordinator will provide a tailored checklist." },
    { q: "How long does a second opinion take?", a: "Remote second opinions typically take 5-10 business days after records are received, depending on specialist availability and case complexity. In-person timelines depend on appointment scheduling." },
    { q: "Will the specialist communicate in English?", a: "Some specialists have English capability. In all cases, Angel Doctor provides translation support so you receive the opinion and recommendations in clear English." },
    { q: "What if the second opinion recommends treatment in China?", a: "Angel Doctor can help coordinate the next steps — hospital access, appointment scheduling, local escorts, and follow-up planning." },
    { q: "How is a second opinion different from a regular consultation?", a: "A second opinion involves a structured specialist review of your existing case with specific questions. It may include treatment confirmation, alternative treatment options, or clinical trial eligibility assessment." },
  ],
};

export default function Page() {
  return <TreatmentPage data={data} />;
}
