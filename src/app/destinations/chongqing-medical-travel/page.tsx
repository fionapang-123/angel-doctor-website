import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { chongqingHospitals } from "@/data/hospitals";
import { getPage } from "@/data/pages";
import { createPageSchema } from "@/config/schema";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";


const data: CityPageData = {
  slug: "/destinations/chongqing-medical-travel",
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
    { title: "Second Opinion", body: "Multi-disciplinary review at Chongqing's comprehensive medical centers.", href: "/treatments/medical-second-opinion-china" },
  ],
  hospitals: chongqingHospitals,
  providerTypes: ["Public tertiary hospitals", "Children's hospitals", "University-affiliated hospitals", "General hospitals"],
  faqs: [
    { question: "Can foreigners access hospitals in Chongqing?", answer: "Yes. Chongqing's major hospitals and its leading children's hospital accept international patients. Angel Doctor helps coordinate appointments, language support, and local escort services." },
    { question: "What treatments is Chongqing best for?", answer: "Chongqing is particularly strong for pediatric care at its leading children's hospital, as well as comprehensive health checkups and specialist consultations at major medical centers." },
    { question: "Can Angel Doctor help me choose a hospital in Chongqing?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Chongqing, including its renowned children's hospital and comprehensive medical centers, based on your specific needs." },
    { question: "Can I get an English-speaking medical escort in Chongqing?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Chongqing for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Chongqing cost?", answer: "Chongqing hospital costs are generally comparable to other major Chinese cities. Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination." },
    { question: "How long should I stay in Chongqing for treatment?", answer: "Simple checkups may take one day. Pediatric consultations or specialist appointments may require 1–3 days. A coordinator can help estimate your timeline based on your needs." },
  ],
};

const page = getPage("/destinations/chongqing-medical-travel");
const schema = createPageSchema(page);
export const metadata = createMetadata(page);

export default function ChongqingPage() {
  return (
    <>
      <SchemaJsonLd data={schema} />
      <DestinationCityPage data={data} />
    </>
  );
}
