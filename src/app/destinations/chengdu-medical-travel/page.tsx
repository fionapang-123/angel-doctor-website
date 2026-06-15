import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { chengduHospitals } from "@/data/hospitals";


const data: CityPageData = {
  slug: "chengdu-medical-travel",
  city: "Chengdu",
  h1: "Medical Travel in Chengdu for International Patients",
  intro: "Access leading West China hospitals in Chengdu for specialist care, health checkups, and comprehensive diagnostics with Angel Doctor coordination.",
  quickAnswer: "Chengdu is a major medical hub in western China, home to West China Hospital — one of the country's largest and most comprehensive medical centers.",
  positioning: "Western China's medical powerhouse — comprehensive care at one of China's largest hospital systems.",
  trustLine: "West China Hospital · Comprehensive diagnostics · Specialist care · Local escort support",
  bestFitTreatments: [
    { title: "Health Checkup", body: "Comprehensive health screening at West China Hospital, one of China's largest medical centers.", href: "/treatments/health-checkup-china" },
    { title: "Second Opinion", body: "Specialist review and diagnostics at West China's leading departments.", href: "/treatments/medical-second-opinion-china" },
    { title: "TCM Recovery", body: "Acupuncture and TCM recovery programs in Sichuan's renowned medical environment.", href: "/treatments/tcm-recovery-china" },
  ],
  hospitals: chengduHospitals,
  providerTypes: ["Public tertiary hospitals", "University-affiliated hospitals", "Comprehensive medical centers"],
  faqs: [
    { question: "Can foreigners access hospitals in Chengdu?", answer: "Yes. Foreigners can access hospitals and healthcare providers in Chengdu. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, and arrange local medical escort support." },
    { question: "What treatments is Chengdu best for?", answer: "Chengdu offers strong medical resources. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs, preferred timeline, and support requirements." },
    { question: "Can Angel Doctor help me choose a hospital in Chengdu?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Chengdu based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Chengdu?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Chengdu for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Chengdu cost?", answer: "Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Chengdu for treatment?", answer: "Simple checkups may take one day. Specialist consultations and complex treatments may require longer stays. A coordinator can help estimate your timeline based on your needs." },
  ],
};

// const page = getPage("chengdu-medical-travel");
export const metadata = createMetadata(data as any);

export default function ChengduPage() {
  return <DestinationCityPage data={data} />;
}
