import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { xianHospitals } from "@/data/hospitals";


const data: CityPageData = {
  slug: "xian-medical-travel",
  city: "Xi'an",
  h1: "Medical Travel in Xi'an for International Patients",
  intro: "Access Xi'an Jiaotong University's affiliated hospital for specialist consultations and comprehensive care with Angel Doctor coordination.",
  quickAnswer: "Xi'an is a growing medical destination in northwest China, anchored by Xi'an Jiaotong University's First Affiliated Hospital.",
  positioning: "Northwest China's medical center — comprehensive care at Xi'an Jiaotong University Hospital.",
  trustLine: "Xi'an Jiaotong University Hospital · Specialist consultations · Comprehensive care · Local escort support",
  bestFitTreatments: [
    { title: "Health Checkup", body: "Health screening at Xi'an Jiaotong University's First Affiliated Hospital.", href: "/treatments/health-checkup-china" },
    { title: "Specialist Consultation", body: "Access specialist departments at a leading northwest China hospital.", href: "/treatments/medical-second-opinion-china" },
  ],
  hospitals: xianHospitals,
  providerTypes: ["Public tertiary hospitals", "University-affiliated hospitals"],
  faqs: [
    { question: "Can foreigners access hospitals in Xi'an?", answer: "Yes. Foreigners can access hospitals and healthcare providers in Xi'an. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, and arrange local medical escort support." },
    { question: "What treatments is Xi'an best for?", answer: "Xi'an offers strong medical resources. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs, preferred timeline, and support requirements." },
    { question: "Can Angel Doctor help me choose a hospital in Xi'an?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Xi'an based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Xi'an?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Xi'an for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Xi'an cost?", answer: "Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Xi'an for treatment?", answer: "Simple checkups may take one day. Specialist consultations and complex treatments may require longer stays. A coordinator can help estimate your timeline based on your needs." },
  ],
};

// const page = getPage("xian-medical-travel");
export const metadata = createMetadata(data as any);

export default function XianPage() {
  return <DestinationCityPage data={data} />;
}
