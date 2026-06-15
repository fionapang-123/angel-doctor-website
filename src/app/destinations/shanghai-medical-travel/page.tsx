import { DestinationCityPage, type CityPageData } from "@/components/DestinationCityPage";
import { createMetadata } from "@/config/metadata";
import { shanghaiHospitals } from "@/data/hospitals";
import { getPage } from "@/data/pages";

const data: CityPageData = {
  slug: "/destinations/shanghai-medical-travel",
  city: "Shanghai",
  h1: "Medical Travel in Shanghai for International Patients",
  intro: "Access executive health checkups, international clinics, specialist second opinions, and private healthcare in Shanghai with Angel Doctor's hospital matching, transparent coordination, and English-speaking assistance.",
  quickAnswer: "Shanghai is suitable for international patients seeking executive health checkups, international clinics, specialist second opinions, and private healthcare access. Angel Doctor helps coordinate hospital matching, appointments, translation support, and local medical escort services.",
  positioning: "China's premier destination for international-standard medical care and executive health services.",
  trustLine: "International clinics · Executive checkup centers · Specialist hospitals · English-speaking coordination",
  bestFitTreatments: [
    { title: "Health Checkup", body: "Executive health screening, preventive checkups, imaging, blood tests, cancer screening, and cardiovascular assessment.", href: "/treatments/health-checkup-china" },
    { title: "Second Opinion", body: "Medical record review, specialist matching, department coordination with Shanghai's top hospitals.", href: "/treatments/medical-second-opinion-china" },
    { title: "Dental Care", body: "Dental implants, crowns, veneers, cosmetic dentistry, and specialist dental treatment.", href: "/treatments/dental-care-china" },
    { title: "TCM Recovery", body: "Acupuncture, pain management, sleep support, and wellness-oriented TCM programs.", href: "/treatments/tcm-recovery-china" },
  ],
  hospitals: shanghaiHospitals,
  providerTypes: ["Public tertiary hospitals", "International clinics", "Specialty hospitals", "Executive health checkup centers", "Private medical centers", "TCM institutions"],
  faqs: [
    { question: "Can foreigners access hospitals in Shanghai?", answer: "Yes. Shanghai has extensive international patient infrastructure, including international clinics and English-speaking departments in major public hospitals." },
    { question: "What is Shanghai best for in medical travel?", answer: "Shanghai excels in executive health checkups, international-standard specialist care, second opinions, and private healthcare. It's also strong in oncology, cardiology, and orthopedics." },
    { question: "Can Angel Doctor coordinate appointments at Shanghai hospitals?", answer: "Yes. Angel Doctor helps match your needs to suitable hospitals or clinics in Shanghai, coordinate appointments, and arrange translation support and local medical escorts." },
    { question: "Do Shanghai hospitals have English-speaking staff?", answer: "Many international clinics and major hospital departments in Shanghai have English-speaking staff. Angel Doctor can also arrange English-speaking medical escorts for additional support." },
    { question: "How much does medical care in Shanghai cost?", answer: "Costs vary by provider type — private international clinics cost more than public hospital departments. Angel Doctor provides transparent pricing guidance during coordination." },
    { question: "How long should I plan to stay in Shanghai?", answer: "Executive checkups can be completed in 1–2 days. Specialist consultations and second opinions may require 2–5 days depending on imaging, testing, and doctor availability." },
  ],
};

const page = getPage("/destinations/shanghai-medical-travel");
export const metadata = createMetadata(page);

export default function ShanghaiPage() {
  return <DestinationCityPage data={data} />;
}
