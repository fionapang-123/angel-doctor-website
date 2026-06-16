import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { nanjingHospitals } from "@/data/hospitals";
import { getPage } from "@/data/pages";
import { createPageSchema } from "@/config/schema";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";


const data: CityPageData = {
  slug: "/destinations/nanjing-medical-travel",
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
    { title: "TCM Recovery", body: "Acupuncture and TCM wellness programs at Nanjing's integrated medicine centers.", href: "/treatments/tcm-recovery-china" },
  ],
  hospitals: nanjingHospitals,
  providerTypes: ["Public tertiary hospitals", "Comprehensive medical centers"],
  faqs: [
    { question: "Can foreigners access hospitals in Nanjing?", answer: "Yes. Nanjing's Jiangsu Province Hospital and Drum Tower Hospital accept international patients. Angel Doctor helps with appointment coordination, language support, and local escort services." },
    { question: "What treatments is Nanjing best for?", answer: "Nanjing is a comprehensive medical destination strong in specialist consultations, second opinions, and diagnostic review. Jiangsu Province Hospital offers a wide range of departments and specialties." },
    { question: "Can Angel Doctor help me choose a hospital in Nanjing?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Nanjing, including Jiangsu Province Hospital and Drum Tower Hospital, based on your medical needs, timeline, and budget." },
    { question: "Can I get an English-speaking medical escort in Nanjing?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Nanjing for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Nanjing cost?", answer: "Nanjing hospital costs are generally moderate compared to Shanghai and Beijing. Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination." },
    { question: "How long should I stay in Nanjing for treatment?", answer: "Simple checkups may take one day. Specialist consultations or comprehensive diagnostics may require 2–3 days. A coordinator can help estimate your timeline based on your needs." },
  ],
};

const page = getPage("/destinations/nanjing-medical-travel");
const schema = createPageSchema(page);
export const metadata = createMetadata(page);

export default function NanjingPage() {
  return (
    <>
      <SchemaJsonLd data={schema} />
      <DestinationCityPage data={data} />
    </>
  );
}
