import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { zhuhaiHospitals } from "@/data/hospitals";
import { getPage } from "@/data/pages";
import { createPageSchema } from "@/config/schema";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";


const data: CityPageData = {
  slug: "/destinations/zhuhai-medical-travel",
  city: "Zhuhai",
  h1: "Medical Travel in Zhuhai for International Patients",
  intro: "Access Zhuhai's public hospital for general medical care with Angel Doctor coordination and support near Macau and Hong Kong.",
  quickAnswer: "Zhuhai is a convenient destination near Macau and Hong Kong for international patients seeking general medical care in a modern Chinese city.",
  positioning: "Convenient medical access near Macau and Hong Kong.",
  trustLine: "Public hospital access · General medical care · Cross-border convenience · Local escort support",
  bestFitTreatments: [
    { title: "Health Checkup", body: "General health screening at Zhuhai People's Hospital, convenient for cross-border visitors.", href: "/treatments/health-checkup-china" },
    { title: "Dental Care", body: "Dental treatment near Macau and Hong Kong.", href: "/treatments/dental-care-china" },
    { title: "Medical Escort", body: "Local English-speaking escort for hospital registration, navigation, and communication.", href: "/book-local-medical-escort" },
    { title: "Specialist Referral", body: "Initial consultation and referral to larger hospitals in Guangzhou or Shenzhen if needed.", href: "/treatments/medical-second-opinion-china" },
  ],
  hospitals: zhuhaiHospitals,
  providerTypes: ["Public hospitals", "General medical services"],
  faqs: [
    { question: "Can foreigners access hospitals in Zhuhai?", answer: "Yes. Zhuhai's public hospitals accept international patients. Its location near Macau and Hong Kong makes it convenient for cross-border medical visits. Angel Doctor helps coordinate appointments and local support." },
    { question: "What treatments is Zhuhai best for?", answer: "Zhuhai is ideal for general medical consultations, health checkups, and specialist referrals — especially for patients combining a Macau/Hong Kong trip with a brief China medical visit." },
    { question: "Can Angel Doctor help me choose a hospital in Zhuhai?", answer: "Yes. Angel Doctor can help coordinate care at Zhuhai's public hospitals based on your medical needs, language requirements, and whether you're crossing from Macau or Hong Kong." },
    { question: "Can I get an English-speaking medical escort in Zhuhai?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Zhuhai for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Zhuhai cost?", answer: "Zhuhai medical costs are generally moderate. Costs vary by treatment type and provider. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Zhuhai for treatment?", answer: "Simple checkups and consultations often take half a day to one day — practical for day trips from Macau or Hong Kong. A coordinator can help estimate your timeline." },
  ],
};

const page = getPage("/destinations/zhuhai-medical-travel");
const schema = createPageSchema(page);
export const metadata = createMetadata(page);

export default function ZhuhaiPage() {
  return (
    <>
      <SchemaJsonLd data={schema} />
      <DestinationCityPage data={data} />
    </>
  );
}
