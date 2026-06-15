import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { zhuhaiHospitals } from "@/data/hospitals";


const data: CityPageData = {
  slug: "zhuhai-medical-travel",
  city: "Zhuhai",
  h1: "Medical Travel in Zhuhai for International Patients",
  intro: "Access Zhuhai's public hospital for general medical care with Angel Doctor coordination and support near Macau and Hong Kong.",
  quickAnswer: "Zhuhai is a convenient destination near Macau and Hong Kong for international patients seeking general medical care in a modern Chinese city.",
  positioning: "Convenient medical access near Macau and Hong Kong.",
  trustLine: "Public hospital access · General medical care · Cross-border convenience · Local escort support",
  bestFitTreatments: [
    { title: "Health Checkup", body: "General health screening at Zhuhai People's Hospital, convenient for cross-border visitors.", href: "/treatments/health-checkup-china" },
    { title: "Dental Care", body: "Dental treatment near Macau and Hong Kong.", href: "/treatments/dental-care-china" },
  ],
  hospitals: zhuhaiHospitals,
  providerTypes: ["Public hospitals", "General medical services"],
  faqs: [
    { question: "Can foreigners access hospitals in Zhuhai?", answer: "Yes. Foreigners can access hospitals and healthcare providers in Zhuhai. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, and arrange local medical escort support." },
    { question: "What treatments is Zhuhai best for?", answer: "Zhuhai offers strong medical resources. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs, preferred timeline, and support requirements." },
    { question: "Can Angel Doctor help me choose a hospital in Zhuhai?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Zhuhai based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Zhuhai?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Zhuhai for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Zhuhai cost?", answer: "Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Zhuhai for treatment?", answer: "Simple checkups may take one day. Specialist consultations and complex treatments may require longer stays. A coordinator can help estimate your timeline based on your needs." },
  ],
};

// const page = getPage("zhuhai-medical-travel");
export const metadata = createMetadata(data as any);

export default function ZhuhaiPage() {
  return <DestinationCityPage data={data} />;
}
