import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { hangzhouHospitals } from "@/data/hospitals";
import { getPage } from "@/data/pages";
import { createPageSchema } from "@/config/schema";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";


const data: CityPageData = {
  slug: "/destinations/hangzhou-medical-travel",
  city: "Hangzhou",
  h1: "Medical Travel in Hangzhou for International Patients",
  intro: "Access Zhejiang University-affiliated hospitals in Hangzhou for specialist care and obstetrics & gynecology services with Angel Doctor coordination.",
  quickAnswer: "Hangzhou is home to Zhejiang University's top-ranked medical institutions, offering strong specialist and women's health services.",
  positioning: "Top Zhejiang medical institutions — specialist care and women's health in a scenic city.",
  trustLine: "Zhejiang University hospitals · Specialist consultations · Women's health · Local escort support",
  bestFitTreatments: [
    { title: "Health Checkup", body: "Executive health screening at Zhejiang University-affiliated hospitals.", href: "/treatments/health-checkup-china" },
    { title: "Women's Health", body: "Specialized obstetrics and gynecology care at Zhejiang University hospital.", href: "/treatments/medical-second-opinion-china" },
    { title: "Specialist Consultation", body: "Access specialist departments at Sir Run Run Shaw and affiliated hospitals.", href: "/treatments/medical-second-opinion-china" },
    { title: "Second Opinion", body: "Multi-specialist diagnostic review at Zhejiang University hospitals.", href: "/treatments/medical-second-opinion-china" },
  ],
  hospitals: hangzhouHospitals,
  providerTypes: ["Public tertiary hospitals", "Obstetrics & Gynecology hospitals", "University-affiliated hospitals"],
  faqs: [
    { question: "Can foreigners access hospitals in Hangzhou?", answer: "Yes. Zhejiang University's top-ranked affiliated hospitals in Hangzhou accept international patients. Angel Doctor helps with appointment coordination, language support, and local escort services." },
    { question: "What treatments is Hangzhou best for?", answer: "Hangzhou stands out for obstetrics and gynecology at Zhejiang University's Women's Hospital, as well as specialist consultations and health checkups at the university's comprehensive medical centers." },
    { question: "Can Angel Doctor help me choose a hospital in Hangzhou?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Hangzhou, including Zhejiang University's affiliated hospitals, based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Hangzhou?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Hangzhou for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Hangzhou cost?", answer: "Hangzhou hospital costs are comparable to other major eastern Chinese cities. Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination." },
    { question: "How long should I stay in Hangzhou for treatment?", answer: "Simple checkups may take one day. Specialist consultations at Zhejiang University hospitals may require 1–3 days. A coordinator can help estimate your timeline based on your needs." },
  ],
};

const page = getPage("/destinations/hangzhou-medical-travel");
const schema = createPageSchema(page);
export const metadata = createMetadata(page);

export default function HangzhouPage() {
  return (
    <>
      <SchemaJsonLd data={schema} />
      <DestinationCityPage data={data} includeSchema={false} />
    </>
  );
}
