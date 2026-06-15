import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { chongqingHospitals } from "@/data/hospitals";


const data: CityPageData = {
  slug: "chongqing-medical-travel",
  city: "Chongqing",
  h1: "Medical Travel in Chongqing for International Patients",
  intro: "Access major hospitals in Chongqing for pediatric care, specialist consultations, and comprehensive medical services with Angel Doctor coordination.",
  quickAnswer: "Chongqing is a major medical destination in southwest China with strong pediatric, specialist, and general hospital resources.",
  positioning: "Southwest China's major medical center — strong pediatric and comprehensive hospital care.",
  trustLine: "Children's hospital · Specialist consultations · Comprehensive care · Local escort support",
  bestFitTreatments: [
    { title: "Pediatric Care", body: "Access one of China's top children's hospitals for pediatric specialist care.", href: "/treatments/medical-second-opinion-china" },
    { title: "Health Checkup", body: "Comprehensive health screening at Chongqing's major university hospitals.", href: "/treatments/health-checkup-china" },
    { title: "Specialist Consultation", body: "Access specialist departments across multiple university-affiliated hospitals.", href: "/treatments/medical-second-opinion-china" },
  ],
  hospitals: chongqingHospitals,
  providerTypes: ["Public tertiary hospitals", "Children's hospitals", "University-affiliated hospitals", "General hospitals"],
  faqs: [
    { question: "Can foreigners access hospitals in Chongqing?", answer: "Yes. Foreigners can access hospitals and healthcare providers in Chongqing. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, and arrange local medical escort support." },
    { question: "What treatments is Chongqing best for?", answer: "Chongqing offers strong medical resources. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs, preferred timeline, and support requirements." },
    { question: "Can Angel Doctor help me choose a hospital in Chongqing?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Chongqing based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Chongqing?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Chongqing for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Chongqing cost?", answer: "Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Chongqing for treatment?", answer: "Simple checkups may take one day. Specialist consultations and complex treatments may require longer stays. A coordinator can help estimate your timeline based on your needs." },
  ],
};

// const page = getPage("chongqing-medical-travel");
export const metadata = createMetadata(data as any);

export default function ChongqingPage() {
  return <DestinationCityPage data={data} />;
}
