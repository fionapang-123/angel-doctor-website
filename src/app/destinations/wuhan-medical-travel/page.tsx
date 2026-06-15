import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { wuhanHospitals } from "@/data/hospitals";


const data: CityPageData = {
  slug: "wuhan-medical-travel",
  city: "Wuhan",
  h1: "Medical Travel in Wuhan for International Patients",
  intro: "Access top Huazhong University hospitals in Wuhan for specialist care, second opinions, and comprehensive diagnostics with Angel Doctor coordination.",
  quickAnswer: "Wuhan is a central China medical hub with two of the country's largest university-affiliated hospitals, Tongji and Xiehe.",
  positioning: "Central China's premier medical destination — Tongji and Xiehe hospital systems.",
  trustLine: "Tongji Hospital · Xiehe Hospital · Specialist care · Local escort support",
  bestFitTreatments: [
    { title: "Health Checkup", body: "Comprehensive screening at Tongji and Xiehe hospitals — two of China's largest medical centers.", href: "/treatments/health-checkup-china" },
    { title: "Second Opinion", body: "Specialist review across Tongji and Xiehe hospital departments.", href: "/treatments/medical-second-opinion-china" },
    { title: "Specialist Consultation", body: "Access oncology, cardiology, neurology, and other specialists.", href: "/treatments/medical-second-opinion-china" },
  ],
  hospitals: wuhanHospitals,
  providerTypes: ["Public tertiary hospitals", "University-affiliated hospitals", "Comprehensive medical centers"],
  faqs: [
    { question: "Can foreigners access hospitals in Wuhan?", answer: "Yes. Foreigners can access hospitals and healthcare providers in Wuhan. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, and arrange local medical escort support." },
    { question: "What treatments is Wuhan best for?", answer: "Wuhan offers strong medical resources. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs, preferred timeline, and support requirements." },
    { question: "Can Angel Doctor help me choose a hospital in Wuhan?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Wuhan based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Wuhan?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Wuhan for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Wuhan cost?", answer: "Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Wuhan for treatment?", answer: "Simple checkups may take one day. Specialist consultations and complex treatments may require longer stays. A coordinator can help estimate your timeline based on your needs." },
  ],
};

// const page = getPage("wuhan-medical-travel");
export const metadata = createMetadata(data as any);

export default function WuhanPage() {
  return <DestinationCityPage data={data} />;
}
