import { DestinationCityPage, cityPageToContent, type CityPageData } from "@/components/DestinationCityPage";
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
    { title: "Dental Care", body: "Dental treatment planning and care at Chengdu's university-affiliated dental providers.", href: "/treatments/dental-care-china" },
  ],
  hospitals: chengduHospitals,
  providerTypes: ["Public tertiary hospitals", "University-affiliated hospitals", "Comprehensive medical centers"],
  faqs: [
    { question: "Can foreigners access hospitals in Chengdu?", answer: "Yes. West China Hospital and other Chengdu medical institutions accept international patients. Angel Doctor helps with appointment coordination, language support, and escort services for your visit." },
    { question: "What treatments is Chengdu best for?", answer: "Chengdu excels at comprehensive health checkups, specialist second opinions, and TCM recovery programs. West China Hospital — one of China's largest medical centers — anchors the city's medical expertise." },
    { question: "Can Angel Doctor help me choose a hospital in Chengdu?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Chengdu — including West China Hospital's departments — based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Chengdu?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Chengdu for hospital registration, navigation, communication support, and follow-up coordination at major hospitals." },
    { question: "How much does medical care in Chengdu cost?", answer: "Costs at West China Hospital and other Chengdu providers vary by treatment type and complexity. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Chengdu for treatment?", answer: "Simple checkups may take one day. Specialist consultations at West China Hospital may require 2–3 days including diagnostics. A coordinator can help estimate your timeline based on your needs." },
  ],
};

export const metadata = createMetadata(cityPageToContent(data));

export default function ChengduPage() {
  return <DestinationCityPage data={data} />;
}
