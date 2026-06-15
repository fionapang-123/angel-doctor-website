import { TreatmentPage, type TreatmentPageData } from "@/components/TreatmentPage";

const data: TreatmentPageData = {
  slug: "treatments/dental-care-china",
  title: "Dental Care in China",
  subtitle: "What Angel Doctor Can Coordinate for Your Dental Visit",
  badge: "Top Service",
  hero: "From dental implants and crowns to cosmetic veneers and full-mouth restoration — Angel Doctor helps international patients access trusted dental providers in Shenzhen, Guangzhou, Shanghai, and other major Chinese cities, with English-speaking coordination and local medical escort support.",
  whatWeCoordinate: [
    { title: "Provider Matching", body: "We help identify suitable dental hospitals and clinics based on your treatment type, budget, preferred city, and timeline." },
    { title: "Treatment Planning", body: "We coordinate pre-arrival information sharing, treatment plan review, cost estimation, and visit scheduling support." },
    { title: "Visit Coordination", body: "Escorts help with clinic registration, navigation, dentist communication, payment guidance, and post-visit follow-up." },
    { title: "Multi-visit Planning", body: "For dental implants and multi-stage treatments, we help plan staged visits and follow-up coordination across trips." },
    { title: "Cross-Border Support", body: "Shenzhen and Zhuhai are particularly convenient for patients traveling from Hong Kong, Macau, and Southeast Asia." },
    { title: "English Communication", body: "Translation support and English-speaking escorts ensure clear communication with dental providers." },
  ],
  whoIsItFor: [
    "You need dental implants and are exploring cost options in China",
    "You're seeking crowns, bridges, or veneers at competitive pricing",
    "You want a full dental checkup and treatment plan while visiting China",
    "You're an overseas Chinese returning for dental care",
    "You want to combine dental treatment with a short stay in Shenzhen, Guangzhou, or Shanghai",
    "You need English-speaking coordination and hospital navigation during your dental visit",
  ],
  recommendedCities: [
    { name: "Shenzhen", slug: "shenzhen-medical-travel", why: "40 minutes from Hong Kong — popular for dental implants, crowns, and short-stay dental visits with cross-border convenience." },
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Major dental provider hub with specialty stomatology hospitals and experienced dental teams." },
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "International clinic options and specialist dental hospitals for complex restorative care." },
    { name: "Zhuhai", slug: "zhuhai-medical-travel", why: "Convenient access from Macau and Hong Kong — dental care and short-stay treatment visits." },
    { name: "Beijing", slug: "beijing-medical-travel", why: "Top national hospitals with advanced dental and stomatology departments." },
    { name: "Chengdu", slug: "chengdu-medical-travel", why: "West China Hospital of Stomatology — one of China's leading dental institutions." },
  ],
  process: [
    { title: "Tell us what you need", body: "Share your dental concern, preferred city, and approximate travel timeline. No medical records required for initial inquiry." },
    { title: "Get care options & estimates", body: "Angel Doctor suggests suitable dental providers, treatment approaches, and estimated cost ranges based on your case." },
    { title: "Visit with local support", body: "Your dental appointment is coordinated. A trained medical escort can support you during the clinic visit." },
  ],
  pricingNote: "Dental treatment costs in China vary by procedure type, materials (e.g. implant brand), provider level, city, and treatment complexity. Angel Doctor provides transparent cost guidance before you commit. Hospital treatment fees are confirmed by the provider after examination.",
  faqs: [
    { q: "How much do dental implants cost in China?", a: "Dental implant costs in China vary significantly by implant brand, provider, city, and bone condition. Angel Doctor can help you get treatment-specific estimates during care planning. Final costs are confirmed by the provider after examination." },
    { q: "Can I get dental crowns or veneers in China during a short trip?", a: "Yes. Many dental providers in Shenzhen, Guangzhou, and Shanghai can accommodate short-stay patients. Timeline depends on procedure complexity. Angel Doctor helps coordinate appointment timing." },
    { q: "Do Chinese dental providers speak English?", a: "English capability varies by provider. Angel Doctor provides English-speaking escorts and translation support to ensure clear communication during your visit." },
    { q: "How many visits do dental implants require?", a: "Typically 2-3 visits over several months. Angel Doctor can help coordinate multi-visit plans and follow-up between trips. Your provider will confirm the exact timeline." },
    { q: "Can Angel Doctor help with post-treatment follow-up?", a: "Yes. Angel Doctor can assist with follow-up communication, report translation, and coordination of continued care where available." },
    { q: "Which city is best for dental care in China?", a: "Shenzhen and Zhuhai are popular for cross-border convenience. Guangzhou has specialty stomatology hospitals. Shanghai offers international clinic options. The best city depends on your treatment type and travel plan." },
  ],
};

export default function Page() {
  return <TreatmentPage data={data} />;
}
