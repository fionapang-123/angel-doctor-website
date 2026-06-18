import { TreatmentPage, treatmentPageToContent, type TreatmentPageData } from "@/components/TreatmentPage";
import { createMetadata } from "@/config/metadata";

const data: TreatmentPageData = {
  slug: "treatments/tcm-recovery-china",
  title: "TCM Recovery in China",
  subtitle: "Acupuncture, pain relief, sleep support, stress recovery, and traditional Chinese medicine programs for international patients.",
  badge: "TCM Wellness",
  hero: "Plan a calm, structured TCM recovery stay in China for chronic pain relief, sleep improvement, stress recovery, fatigue, women's health support, post-travel recovery, or general wellness. Angel Doctor helps international patients understand suitable TCM options, coordinate appointments with licensed providers, and arrange English-speaking local support when needed.",
  heroImage: {
    src: "/images/treatments/tcm-recovery-china-cupping-support.webp",
    alt: "TCM recovery coordination in China with cupping therapy support for international patients",
    caption: "TCM recovery in China with care coordination for acupuncture, bodywork, sleep support, herbal consultation, and local medical escort assistance.",
  },
  whatWeCoordinate: [
    { title: "Chronic Pain Relief", body: "Support for back pain, neck and shoulder tension, joint discomfort, migraines, sciatica, or travel-related muscle strain through provider-recommended options such as acupuncture, tuina, cupping, and lifestyle guidance." },
    { title: "Sleep & Stress Recovery", body: "Programs for insomnia, jet lag, burnout, anxiety-related tension, and nervous system recovery, with TCM consultation and a practical plan that can fit a short stay in China." },
    { title: "Fatigue & Low Energy", body: "Coordination for patients who feel depleted after work stress, long travel, illness recovery, or ongoing low energy and want a gentle, wellness-focused TCM evaluation." },
    { title: "Women's Health & General Wellness", body: "Support for cycle-related discomfort, menopause-related symptoms, digestive balance, post-travel recovery, and general wellness goals, with clear boundaries that clinical advice comes from licensed providers." },
  ],
  whoIsItFor: [
    "You want a wellness-focused TCM recovery stay instead of a complex hospital treatment journey",
    "You have chronic pain, shoulder or neck tension, headaches, sciatica, or travel-related muscle strain",
    "You struggle with sleep, jet lag, stress, burnout, fatigue, or low energy",
    "You want support for women's health concerns, digestive balance, post-travel recovery, or general wellness",
    "You want English-speaking coordination so pulse diagnosis, tongue examination, herbal instructions, and follow-up steps are easier to understand",
  ],
  commonNeeds: [
    "Short-stay recovery — combine consultation, acupuncture or bodywork sessions, and rest days around a China trip without turning the visit into a heavy medical itinerary",
    "Pain and mobility support — use TCM provider assessment to decide whether acupuncture, tuina, cupping, heat therapy, or herbal support may be appropriate",
    "Sleep, stress, and fatigue — build a practical recovery plan for rest quality, low energy, travel fatigue, and stress-related tension",
    "Communication support — arrange English-speaking escort help for registration, visit flow, consultation interpretation, payment guidance, pharmacy, and follow-up instructions",
  ],
  whatIsIncluded: [
    "TCM provider matching based on your main recovery goal, preferred city, timeline, and language needs",
    "Appointment coordination for licensed TCM providers, hospitals, or appropriate wellness medical settings",
    "Support for acupuncture, tuina, cupping, moxibustion, herbal consultation, or integrated recovery plans when recommended by the provider",
    "English-speaking escort support for registration, consultation communication, pharmacy instructions, payment guidance, and follow-up coordination",
  ],
  hospitalAccessNote: "Angel Doctor is not a TCM clinic and does not diagnose, prescribe, or provide treatment. We help international patients compare suitable TCM access options in China, which may include TCM hospitals, integrated medicine departments, licensed clinics, or wellness-focused medical providers depending on the city, case, and availability.",
  recommendedCities: [
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Strong TCM culture and practical access for acupuncture, pain relief, sleep support, and recovery programs." },
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "International-friendly city for patients who want TCM recovery alongside private healthcare, checkups, or business travel." },
    { name: "Beijing", slug: "beijing-medical-travel", why: "Broad provider choice for patients seeking structured TCM consultation, herbal guidance, and integrated care options." },
    { name: "Chengdu", slug: "chengdu-medical-travel", why: "Relaxed recovery environment for stress recovery, fatigue, digestive balance, and wellness-focused TCM planning." },
  ],
  process: [
    { title: "Share your recovery goals", body: "Tell us whether you are focused on pain relief, sleep, stress recovery, fatigue, women's health, post-travel recovery, or general wellness." },
    { title: "Plan your TCM recovery", body: "We help compare suitable cities, providers, appointment timing, likely visit flow, language needs, and whether local escort support is helpful." },
    { title: "Visit with clear support", body: "If needed, an English-speaking escort can accompany your visit and help with registration, communication, payment guidance, pharmacy, and follow-up instructions." },
  ],
  timeline: "A light TCM recovery plan can often fit into 1-3 visits during a short China stay. More structured programs for chronic pain, sleep, stress recovery, fatigue, or women's health support may require several sessions over 1-3 weeks, depending on provider assessment and your travel schedule.",
  risksAndLimits: [
    "TCM recovery is supportive care and wellness planning. It is not a substitute for urgent care, diagnosis, surgery, or treatment of serious disease",
    "Acupuncture, cupping, tuina, moxibustion, and herbs may not be suitable for every patient. The provider makes clinical recommendations after assessment",
    "Herbs can interact with blood thinners, diabetes medication, pregnancy, fertility treatment, and other prescriptions. Share your full medication and health history",
    "Cupping can leave circular marks for several days, and acupuncture may cause minor soreness, bruising, or lightheadedness",
  ],
  pricingNote: "TCM costs vary by city, provider type, consultation length, treatment modality, and whether herbs or follow-up visits are recommended. Angel Doctor can help you understand likely cost components before you confirm a visit; final prices are confirmed by the provider.",
  faqs: [
    { q: "What is TCM Recovery in China?", a: "It is a coordinated recovery and wellness visit focused on traditional Chinese medicine options such as acupuncture, tuina, cupping, moxibustion, herbal consultation, sleep support, pain relief, stress recovery, fatigue support, and general wellness planning." },
    { q: "Is this only for university hospitals?", a: "No. Depending on your city, goals, and availability, suitable options may include TCM hospitals, integrated medicine departments, licensed clinics, or wellness-focused medical providers. Angel Doctor helps you understand the options without claiming every visit must be at a university hospital." },
    { q: "Can Angel Doctor choose my TCM treatment?", a: "No. Angel Doctor provides coordination, provider matching, appointment support, translation support, and local escort services. Diagnosis, prescriptions, treatment choices, and clinical advice come from licensed healthcare providers." },
    { q: "What problems do international patients usually ask about?", a: "Common requests include chronic pain relief, neck and shoulder tension, sleep improvement, stress recovery, fatigue, low energy, women's health support, post-travel recovery, digestive balance, and general wellness." },
    { q: "Can I use TCM during a short China trip?", a: "Often, yes. A light program may fit into a short stay, while chronic pain, sleep, stress, fatigue, or women's health support may require a longer plan. We help align appointment timing with your travel schedule." },
    { q: "Will someone translate during the consultation?", a: "When requested, Angel Doctor can arrange English-speaking local escort support to help with registration, visit flow, communication, payment guidance, pharmacy instructions, and follow-up coordination." },
  ],
};

export const metadata = createMetadata(treatmentPageToContent(data));

export default function Page() {
  return <TreatmentPage data={data} />;
}
