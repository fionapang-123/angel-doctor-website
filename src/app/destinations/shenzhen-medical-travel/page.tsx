import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { shenzhenHospitals } from "@/data/hospitals";
import { getPage } from "@/data/pages";
import { createPageSchema } from "@/config/schema";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";

const data: CityPageData = {
  slug: "/destinations/shenzhen-medical-travel",
  city: "Shenzhen",
  h1: "Medical Travel in Shenzhen for International Patients",
  intro: "Access dental care, health checkups, TCM recovery, and local medical escort support in Shenzhen with Angel Doctor's hospital matching, transparent coordination, and English-speaking assistance.",
  quickAnswer: "Shenzhen is a convenient destination for international patients seeking dental care, health checkups, and local medical support near Hong Kong. Angel Doctor helps patients compare provider options, coordinate appointments, understand expected timelines, and receive local medical escort support during hospital or clinic visits.",
  positioning: "Fast, modern, and convenient medical access near Hong Kong.",
  trustLine: "Near Hong Kong · Dental and checkup access · Local medical escorts · English-speaking coordination",
  bestFitTreatments: [
    { title: "Dental Care", body: "Dental implants, crowns, veneers, checkups, and short-stay treatment planning with modern providers.", href: "/treatments/dental-care-china" },
    { title: "Health Checkup", body: "Executive health screening, preventive checkups, imaging, blood tests, and specialist review.", href: "/treatments/health-checkup-china" },
    { title: "TCM Recovery", body: "Pain relief, sleep support, stress recovery, fatigue, and wellness-focused TCM programs.", href: "/treatments/tcm-recovery-china" },
    { title: "Second Opinion", body: "Medical record preparation, department matching, specialist review coordination in Shenzhen hospitals.", href: "/treatments/medical-second-opinion-china" },
  ],
  hospitals: shenzhenHospitals,
  providerTypes: ["Public tertiary hospitals", "Specialty hospitals", "Private clinics", "Dental providers", "Health checkup centers", "TCM providers"],
  faqs: [
    { question: "Can foreigners see doctors in Shenzhen?", answer: "Yes. Foreigners can access hospitals and clinics in Shenzhen. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, and arrange local medical escort support." },
    { question: "What treatments is Shenzhen best for?", answer: "Shenzhen is particularly strong for dental care, health checkups, and cross-border medical access. It's convenient for patients coming from Hong Kong or seeking modern private healthcare options." },
    { question: "Can Angel Doctor help me choose a hospital in Shenzhen?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Shenzhen based on your treatment needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Shenzhen?", answer: "Yes. Angel Doctor's trained local medical escorts in Shenzhen provide registration assistance, hospital navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Shenzhen cost?", answer: "Costs vary by treatment type, provider, and complexity. Angel Doctor provides pricing guidance during care coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Shenzhen for treatment?", answer: "Simple checkups may take one day. Dental implants or complex treatments may require multiple visits. A coordinator can help estimate your timeline based on your specific needs." },
  ],
};

const page = getPage("/destinations/shenzhen-medical-travel");
const schema = createPageSchema(page);
export const metadata = createMetadata(page);

export default function ShenzhenPage() {
  return (
    <>
      <SchemaJsonLd data={schema} />
      <DestinationCityPage data={data} includeSchema={false} />
    </>
  );
}
