import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { nanjingHospitals } from "@/data/hospitals";


const data: CityPageData = {
  slug: "nanjing-medical-travel",
  city: "Nanjing",
  h1: "Medical Travel in Nanjing for International Patients",
  intro: "Access Jiangsu Province's top hospitals in Nanjing for specialist consultations and comprehensive medical care with Angel Doctor coordination.",
  quickAnswer: "Nanjing is a major medical center in eastern China with strong comprehensive hospital resources and specialist departments.",
  positioning: "Eastern China's medical hub — comprehensive care at Jiangsu's leading hospitals.",
  trustLine: "Jiangsu Province Hospital · Specialist consultations · Comprehensive care · Local escort support",
  bestFitTreatments: [
    { title: "Health Checkup", body: "Comprehensive screening at Jiangsu Province Hospital and Nanjing Drum Tower Hospital.", href: "/treatments/health-checkup-china" },
    { title: "Second Opinion", body: "Specialist review and diagnostics at Jiangsu's leading hospitals.", href: "/treatments/medical-second-opinion-china" },
    { title: "Dental Care", body: "Dental treatment and implants with experienced providers in Nanjing.", href: "/treatments/dental-care-china" },
  ],
  hospitals: nanjingHospitals,
  providerTypes: ["Public tertiary hospitals", "Comprehensive medical centers"],
  faqs: [
    { question: "Can foreigners access hospitals in Nanjing?", answer: "Yes. Foreigners can access hospitals and healthcare providers in Nanjing. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, and arrange local medical escort support." },
    { question: "What treatments is Nanjing best for?", answer: "Nanjing offers strong medical resources. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs, preferred timeline, and support requirements." },
    { question: "Can Angel Doctor help me choose a hospital in Nanjing?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Nanjing based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Nanjing?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Nanjing for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Nanjing cost?", answer: "Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Nanjing for treatment?", answer: "Simple checkups may take one day. Specialist consultations and complex treatments may require longer stays. A coordinator can help estimate your timeline based on your needs." },
  ],
};

// const page = getPage("nanjing-medical-travel");
export const metadata = createMetadata(data as any);

export default function NanjingPage() {
  return <DestinationCityPage data={data} />;
}
