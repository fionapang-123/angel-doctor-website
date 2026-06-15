import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { hangzhouHospitals } from "@/data/hospitals";


const data: CityPageData = {
  slug: "hangzhou-medical-travel",
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
  ],
  hospitals: hangzhouHospitals,
  providerTypes: ["Public tertiary hospitals", "Obstetrics & Gynecology hospitals", "University-affiliated hospitals"],
  faqs: [
    { question: "Can foreigners access hospitals in Hangzhou?", answer: "Yes. Foreigners can access hospitals and healthcare providers in Hangzhou. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, and arrange local medical escort support." },
    { question: "What treatments is Hangzhou best for?", answer: "Hangzhou offers strong medical resources. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs, preferred timeline, and support requirements." },
    { question: "Can Angel Doctor help me choose a hospital in Hangzhou?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Hangzhou based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Hangzhou?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Hangzhou for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Hangzhou cost?", answer: "Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Hangzhou for treatment?", answer: "Simple checkups may take one day. Specialist consultations and complex treatments may require longer stays. A coordinator can help estimate your timeline based on your needs." },
  ],
};

// const page = getPage("hangzhou-medical-travel");
export const metadata = createMetadata(data as any);

export default function HangzhouPage() {
  return <DestinationCityPage data={data} />;
}
