import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { xianHospitals } from "@/data/hospitals";
import { getPage } from "@/data/pages";
import { createPageSchema } from "@/config/schema";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";


const data: CityPageData = {
  slug: "/destinations/xian-medical-travel",
  city: "Xi'an",
  h1: "Medical Travel in Xi'an for International Patients",
  intro: "Access Xi'an Jiaotong University's affiliated hospital for specialist consultations and comprehensive care with Angel Doctor coordination.",
  quickAnswer: "Xi'an is a growing medical destination in northwest China, anchored by Xi'an Jiaotong University's First Affiliated Hospital.",
  positioning: "Northwest China's medical center — comprehensive care at Xi'an Jiaotong University Hospital.",
  trustLine: "Xi'an Jiaotong University Hospital · Specialist consultations · Comprehensive care · Local escort support",
  bestFitTreatments: [
    { title: "Health Checkup", body: "Health screening at Xi'an Jiaotong University's First Affiliated Hospital.", href: "/treatments/health-checkup-china" },
    { title: "Specialist Consultation", body: "Access specialist departments at a leading northwest China hospital.", href: "/treatments/medical-second-opinion-china" },
    { title: "Second Opinion", body: "Specialist review and diagnostic support at Xi'an Jiaotong University Hospital.", href: "/treatments/medical-second-opinion-china" },
    { title: "Dental Care", body: "Dental treatment planning at Xi'an's affiliated stomatology providers.", href: "/treatments/dental-care-china" },
  ],
  hospitals: xianHospitals,
  providerTypes: ["Public tertiary hospitals", "University-affiliated hospitals"],
  faqs: [
    { question: "Can foreigners access hospitals in Xi'an?", answer: "Yes. Xi'an Jiaotong University's First Affiliated Hospital — the leading medical center in northwest China — accepts international patients. Angel Doctor helps coordinate appointments and local escort support." },
    { question: "What treatments is Xi'an best for?", answer: "Xi'an is anchored by Xi'an Jiaotong University Hospital, offering comprehensive specialist consultations, health checkups, and second opinion services for northwest China." },
    { question: "Can Angel Doctor help me choose a hospital in Xi'an?", answer: "Yes. Angel Doctor can help coordinate care at Xi'an Jiaotong University's First Affiliated Hospital and other Xi'an providers based on your medical needs, timeline, and budget." },
    { question: "Can I get an English-speaking medical escort in Xi'an?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Xi'an for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Xi'an cost?", answer: "Xi'an hospital costs are generally lower than coastal tier-1 cities. Costs vary by treatment type and provider. Angel Doctor provides transparent pricing guidance during coordination." },
    { question: "How long should I stay in Xi'an for treatment?", answer: "Simple checkups may take one day. Specialist consultations or comprehensive diagnostics may require 2–3 days. A coordinator can help estimate your timeline based on your needs." },
  ],
};

const page = getPage("/destinations/xian-medical-travel");
const schema = createPageSchema(page);
export const metadata = createMetadata(page);

export default function XianPage() {
  return (
    <>
      <SchemaJsonLd data={schema} />
      <DestinationCityPage data={data} />
    </>
  );
}
