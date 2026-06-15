import { TreatmentPage, type TreatmentPageData } from "@/components/TreatmentPage";

const data: TreatmentPageData = {
  slug: "treatments/tcm-recovery-china",
  title: "TCM Recovery in China",
  subtitle: "What Angel Doctor Can Coordinate for Your TCM Wellness Journey",
  badge: "Wellness",
  hero: "Traditional Chinese Medicine (TCM) recovery programs — acupuncture, herbal medicine, tuina massage, cupping, and wellness-focused care — coordinated by Angel Doctor with English-speaking support. Access TCM hospitals and recovery providers in Guangzhou, Shanghai, Beijing, and more.",
  whatWeCoordinate: [
    { title: "TCM Provider Matching", body: "We help identify suitable TCM hospitals, university-affiliated TCM centers, and recovery providers based on your wellness goals and city preference." },
    { title: "Wellness Program Planning", body: "Whether you need pain relief, stress recovery, sleep support, or general wellness, we help plan a TCM program that fits your timeline." },
    { title: "Appointment Coordination", body: "We handle scheduling, preparation guidance, and visit planning so you arrive ready for your TCM sessions." },
    { title: "On-Site Translation", body: "English-speaking escorts help with communication during TCM consultation, treatment explanation, and herbal medicine guidance." },
    { title: "Herbal Medicine Guidance", body: "If herbal medicine is prescribed, we help explain usage instructions, dosage, and sourcing options." },
    { title: "Multi-Session Support", body: "For TCM programs requiring multiple sessions, we help coordinate schedules across your stay." },
  ],
  whoIsItFor: [
    "You're seeking acupuncture, tuina, or cupping therapy for pain or stress relief",
    "You want a TCM wellness program — sleep support, fatigue recovery, or general health improvement",
    "You're interested in herbal medicine consultation with a qualified TCM practitioner",
    "You're recovering from treatment and want TCM-based recovery support",
    "You're an overseas Chinese returning for TCM care",
    "You want to combine TCM wellness with a short stay in China",
  ],
  recommendedCities: [
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Guangzhou University of Chinese Medicine hospital — a leading TCM institution. Strong in acupuncture, herbal medicine, and integrated TCM-Western care." },
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "Shanghai University of TCM hospitals — comprehensive TCM recovery, acupuncture, and wellness programs." },
    { name: "Beijing", slug: "beijing-medical-travel", why: "Top TCM hospitals and research centers — deep expertise across TCM specialties and integrated care." },
    { name: "Chengdu", slug: "chengdu-medical-travel", why: "Strong TCM tradition and university-affiliated hospitals offering recovery and wellness programs." },
  ],
  process: [
    { title: "Share your wellness goals", body: "Tell us what you're seeking — pain relief, stress recovery, sleep support, or general TCM wellness. No medical records required to start." },
    { title: "Get program recommendations", body: "Angel Doctor suggests suitable TCM providers and program options based on your goals, timeline, and preferred city." },
    { title: "Begin your TCM journey", body: "Your sessions are coordinated. An English-speaking escort supports you during TCM consultation and treatment." },
  ],
  pricingNote: "TCM treatment costs in China vary by therapy type, provider level, session frequency, and city. Acupuncture sessions typically range from $30-80 USD, herbal medicine costs depend on prescription. Angel Doctor provides cost guidance during care planning. All treatment fees are confirmed by the provider.",
  faqs: [
    { q: "What TCM treatments can I access through Angel Doctor?", a: "Angel Doctor helps coordinate acupuncture, tuina massage, cupping, moxibustion, herbal medicine consultation, and TCM wellness programs. The specific treatments available depend on the provider and your needs." },
    { q: "Do I need a medical diagnosis for TCM treatment?", a: "No formal diagnosis is required for general wellness TCM. For pain-related or specific conditions, sharing your health history helps the TCM practitioner provide more targeted care." },
    { q: "Are TCM practitioners licensed in China?", a: "Yes. TCM hospitals and university-affiliated providers employ licensed TCM practitioners who have completed formal TCM education and clinical training. Angel Doctor coordinates with qualified institutions." },
    { q: "Can I combine TCM with Western medical treatment?", a: "Yes. Many hospitals in China offer integrated TCM-Western medicine departments. Angel Doctor can help coordinate integrated care where appropriate. Always inform all providers about concurrent treatments." },
    { q: "How many TCM sessions do I need?", a: "It depends on your condition and goals. Acute pain relief may require 3-5 sessions. Wellness programs may be designed for 5-10 sessions over 1-2 weeks. Your TCM practitioner will recommend a plan after initial consultation." },
    { q: "Can Angel Doctor help with herbal medicine prescriptions?", a: "Angel Doctor can help with translation and usage guidance for prescribed herbal medicines. We do not provide medical advice about herbal treatments — this is the role of your licensed TCM practitioner." },
  ],
};

export default function Page() {
  return <TreatmentPage data={data} />;
}
