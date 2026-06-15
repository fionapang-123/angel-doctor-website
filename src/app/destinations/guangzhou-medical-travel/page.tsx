import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { guangzhouHospitals } from "@/data/hospitals";
import { getPage } from "@/data/pages";

const data: CityPageData = {
  slug: "/destinations/guangzhou-medical-travel",
  city: "Guangzhou",
  h1: "Medical Travel in Guangzhou for International Patients",
  intro: "Access TCM recovery, rehabilitation, health checkups, specialist consultations, and medical escort support in Guangzhou with Angel Doctor's hospital matching, transparent coordination, and English-speaking assistance.",
  quickAnswer: "Guangzhou is a strong southern China medical hub for TCM recovery, rehabilitation, health checkups, and specialist consultations. Angel Doctor helps patients compare provider options, coordinate appointments, and receive local medical escort support during hospital or clinic visits.",
  positioning: "Southern China's medical hub — deep TCM tradition, strong specialist resources, and comprehensive rehabilitation care.",
  trustLine: "TCM & rehabilitation · Specialist hospitals · Health checkup access · Local medical escorts",
  bestFitTreatments: [
    { title: "TCM Recovery", body: "Acupuncture, pain relief, sleep support, stress recovery, and wellness TCM programs at renowned institutions.", href: "/treatments/tcm-recovery-china" },
    { title: "Health Checkup", body: "Comprehensive health screening, preventive checkups, imaging diagnostics, and specialist review.", href: "/treatments/health-checkup-china" },
    { title: "Second Opinion", body: "Specialist consultation, medical record review, and department matching at Guangzhou's top hospitals.", href: "/treatments/medical-second-opinion-china" },
    { title: "Dental Care", body: "Dental implants, crowns, veneers, and treatment planning with experienced providers.", href: "/treatments/dental-care-china" },
  ],
  hospitals: guangzhouHospitals,
  providerTypes: ["Public tertiary hospitals", "TCM institutions", "Specialty hospitals", "Rehabilitation providers", "Health checkup centers", "Dental providers"],
  faqs: [
    { question: "Is Guangzhou good for TCM treatment?", answer: "Yes. Guangzhou is one of China's strongest cities for Traditional Chinese Medicine, with major TCM universities and hospitals offering acupuncture, herbal medicine, pain management, and recovery programs." },
    { question: "Can foreigners access healthcare in Guangzhou?", answer: "Yes. Guangzhou has extensive healthcare infrastructure. Angel Doctor helps international patients navigate hospital selection, coordinate appointments, and arrange translation and local escort support." },
    { question: "What treatments is Guangzhou best for?", answer: "Guangzhou excels in TCM recovery, rehabilitation, specialist consultations, health checkups, and dental care. It's particularly strong for patients seeking integrated Chinese-Western medical approaches." },
    { question: "Can Angel Doctor arrange a medical escort in Guangzhou?", answer: "Yes. Angel Doctor's trained local medical escorts support patients with hospital registration, navigation, communication, payment guidance, and follow-up coordination in Guangzhou." },
    { question: "How much does medical care in Guangzhou cost?", answer: "Costs depend on treatment type, provider, and complexity. Angel Doctor provides pricing guidance during coordination. Generally, Guangzhou costs are competitive compared to Shanghai and Beijing." },
    { question: "How long should I stay in Guangzhou for TCM recovery?", answer: "TCM recovery programs vary from single-session treatments to multi-week programs. A coordinator can help estimate your timeline after understanding your recovery goals." },
  ],
};

const page = getPage("/destinations/guangzhou-medical-travel");
export const metadata = createMetadata(page);

export default function GuangzhouPage() {
  return <DestinationCityPage data={data} />;
}
