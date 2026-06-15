import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { beijingHospitals } from "@/data/hospitals";


const data: CityPageData = {
  slug: "beijing-medical-travel",
  city: "Beijing",
  h1: "Medical Travel in Beijing for International Patients",
  intro: "Access China's top national hospitals in Beijing for specialist consultations, complex second opinions, and advanced diagnostics with Angel Doctor's hospital coordination and local escort support.",
  quickAnswer: "Beijing is home to China's highest concentration of top national hospitals, making it the premier destination for complex specialist consultations, second opinions, and advanced medical diagnostics.",
  positioning: "China's capital of medical excellence — top national hospitals and unmatched specialist depth.",
  trustLine: "Top national hospitals · Specialist consultations · Second opinions · English-speaking coordination",
  bestFitTreatments: [
    { title: "Second Opinion", body: "Complex condition assessment, multi-disciplinary specialist review, and advanced diagnostics.", href: "/treatments/medical-second-opinion-china" },
    { title: "Health Checkup", body: "Executive health screening at top national hospitals with comprehensive diagnostics.", href: "/treatments/health-checkup-china" },
    { title: "Specialist Consultation", body: "Access oncology, cardiology, neurology, and pediatric specialists at China's leading hospitals.", href: "/treatments/medical-second-opinion-china" },
    { title: "Dental Care", body: "Dental implants, crowns, and treatment planning at Beijing's top dental providers.", href: "/treatments/dental-care-china" },
  ],
  hospitals: beijingHospitals,
  providerTypes: ["Public tertiary hospitals", "Specialty hospitals", "Children's hospitals", "University-affiliated hospitals"],
  faqs: [
    { question: "Can foreigners access hospitals in Beijing?", answer: "Yes. Foreigners can access hospitals and healthcare providers in Beijing. Angel Doctor helps international patients understand suitable provider options, coordinate appointments, and arrange local medical escort support." },
    { question: "What treatments is Beijing best for?", answer: "Beijing offers strong medical resources. Angel Doctor can help identify suitable hospitals and departments based on your specific treatment needs, preferred timeline, and support requirements." },
    { question: "Can Angel Doctor help me choose a hospital in Beijing?", answer: "Yes. Angel Doctor can help compare suitable hospitals and providers in Beijing based on your medical needs, timeline, budget, and language requirements." },
    { question: "Can I get an English-speaking medical escort in Beijing?", answer: "Yes. Angel Doctor's trained local medical escorts are available in Beijing for hospital registration, navigation, communication support, and follow-up coordination." },
    { question: "How much does medical care in Beijing cost?", answer: "Costs vary by treatment type, provider, and complexity. Angel Doctor provides transparent pricing guidance during coordination. Hospital medical fees are paid directly to the provider." },
    { question: "How long should I stay in Beijing for treatment?", answer: "Simple checkups may take one day. Specialist consultations and complex treatments may require longer stays. A coordinator can help estimate your timeline based on your needs." },
  ],
};

// const page = getPage("beijing-medical-travel");
export const metadata = createMetadata(data as any);

export default function BeijingPage() {
  return <DestinationCityPage data={data} />;
}
