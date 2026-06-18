import { DestinationCityPage, cityPageToContent, type CityPageData } from "@/components/DestinationCityPage";
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
    { title: "TCM Recovery", body: "Acupuncture and TCM programs at Wuhan's integrated medicine centers.", href: "/treatments/tcm-recovery-china" },
  ],
  hospitals: wuhanHospitals,
  providerTypes: ["Public tertiary hospitals", "University-affiliated hospitals", "Comprehensive medical centers"],
  faqs: [
    { question: "Can foreigners access hospitals in Wuhan?", answer: "Yes. Wuhan's Tongji and Xiehe hospitals — two of China's largest university-affiliated systems — accept international patients. Angel Doctor helps coordinate appointments, language support, and local escort services." },
    { question: "What treatments is Wuhan best for?", answer: "Wuhan excels at comprehensive health checkups, multi-specialist consultations, and advanced diagnostics. Tongji Hospital is one of China's largest with extensive department coverage." },
    { question: "Can Angel Doctor help me choose a hospital in Wuhan?", answer: "Yes. Angel Doctor can help compare suitable departments at Tongji and Xiehe hospitals based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Wuhan?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Wuhan for hospital registration, navigation, communication support, and follow-up coordination at major hospitals." },
    { question: "How much does medical care in Wuhan cost?", answer: "Wuhan hospital costs are generally lower than coastal cities like Shanghai. Costs vary by treatment type and provider. Angel Doctor provides transparent pricing guidance during coordination." },
    { question: "How long should I stay in Wuhan for treatment?", answer: "Simple checkups may take one day. Specialist consultations or comprehensive diagnostics at Tongji/Xiehe may require 2–4 days. A coordinator can help estimate your timeline." },
  ],
};

export const metadata = createMetadata(cityPageToContent(data));

export default function WuhanPage() {
  return <DestinationCityPage data={data} />;
}
