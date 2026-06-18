import { TreatmentPage, treatmentPageToContent, type TreatmentPageData } from "@/components/TreatmentPage";
import { createMetadata } from "@/config/metadata";

const data: TreatmentPageData = {
  slug: "treatments/dental-care-china",
  title: "Dental Care in China",
  subtitle: "Checkups, Cleaning, Fillings, Dental Pain Visits, and Short-Stay Dental Support",
  badge: "Short-Stay Care",
  hero: "Angel Doctor helps international travelers coordinate basic dental care in China, including dental checkups, cleaning, simple fillings, dental pain assessment, crowns or implant consultations, appointment preparation, translation support, and local medical escorts. Licensed dental providers make all clinical decisions and confirm final pricing after examination.",
  heroImage: {
    src: "/images/treatments/dental-care-china-consultation.webp",
    alt: "Dental care coordination in China with consultation support for international patients",
    caption: "Dental care in China with provider matching, appointment preparation, translation support, and local medical escort coordination.",
  },
  whatWeCoordinate: [
    { title: "Short-Stay Provider Matching", body: "We help match your travel dates, city, and dental need with suitable dental providers, including private clinics or hospital-affiliated stomatology departments where appropriate." },
    { title: "Appointment and Visit Preparation", body: "We help prepare your visit details, explain what information to bring, and make the appointment process easier before you arrive." },
    { title: "In-Clinic Escort Support", body: "A trained medical escort can help with registration, communication, payment guidance, clinic navigation, and aftercare instructions in English." },
    { title: "Next-Step Planning", body: "If the dentist finds that crowns, root canal treatment, implants, or staged care are needed, Angel Doctor helps you understand timing and follow-up options." },
  ],
  whoIsItFor: [
    "You are visiting China and want a dental checkup, cleaning, or simple filling during the trip",
    "You have tooth discomfort and want help arranging a basic dental assessment",
    "You are an overseas Chinese traveler returning for family, business, or a short stay",
    "You are near Hong Kong, Macau, or Southeast Asia and want short-stay dental support in Shenzhen, Zhuhai, or Guangzhou",
    "You need English-speaking coordination so appointment, pricing, and aftercare instructions are easier to understand",
  ],
  commonNeeds: [
    "Basic dental timing — checkups, cleaning, and simple fillings may fit into a half-day visit, depending on provider availability and the dentist's evaluation.",
    "Travel-fit planning — Angel Doctor helps match dental appointments around your China itinerary, especially for short stays, family visits, business trips, and cross-border travel.",
    "Clear communication — local escort support helps with registration, dentist communication, payment guidance, and aftercare instructions when English support is limited.",
  ],
  whatIsIncluded: [
    "Dental checkup and cleaning — basic oral health review and hygiene visit when clinically suitable",
    "Simple fillings — dentist evaluation and treatment if the cavity or tooth condition is appropriate for same-day care",
    "Dental pain assessment — provider review of tooth pain, sensitivity, gum swelling, or urgent discomfort",
    "Crowns, veneers, root canals, or implant consultations — planning support for care that may need more time or staged visits",
  ],
  hospitalAccessNote: "Angel Doctor coordinates with dental providers in major China destinations, including private clinics and hospital-affiliated stomatology departments where appropriate. Provider choice depends on the dental need, city, appointment availability, language support, and whether the case is simple, urgent, cosmetic, or complex.",
  recommendedCities: [
    { name: "Shenzhen", slug: "shenzhen-medical-travel", why: "Convenient for short-stay dental visits, Hong Kong access, checkups, cleaning, fillings, and local escort support." },
    { name: "Zhuhai", slug: "zhuhai-medical-travel", why: "Useful for travelers near Macau or Hong Kong who need basic dental visits and cross-border coordination." },
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Strong southern China dental access for basic visits, restorative planning, and specialist escalation when needed." },
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "Suitable for international travelers who prefer private clinic options and broader English-speaking support." },
    { name: "Beijing", slug: "beijing-medical-travel", why: "Useful when a simple visit may need referral to larger stomatology departments or specialist review." },
    { name: "Chengdu", slug: "chengdu-medical-travel", why: "An option for travelers in western China who need dental assessment or more structured stomatology access." },
  ],
  process: [
    { title: "Tell us your dental issue", body: "Share whether you need cleaning, a checkup, a filling, pain assessment, or planning for more complex dental work." },
    { title: "Plan around your trip", body: "We help identify suitable provider options, appointment timing, likely preparation needs, and whether local escort support is useful." },
    { title: "Visit with escort support", body: "A medical escort can meet you at the clinic and help with registration, communication, payment guidance, and aftercare instructions." },
  ],
  timeline: "Basic dental visits such as checkups, cleaning, and simple fillings may take half a day when clinically suitable. Dental pain assessment can often start with a short visit, but treatment depends on the dentist's findings. Crowns, veneers, root canal treatment, implants, bone grafting, or full-mouth restoration may require additional days or staged visits over several months.",
  risksAndLimits: [
    "Same-day care is not always possible. Infection, deep cavities, gum disease, imaging findings, or pain severity may change the plan.",
    "Crowns, root canals, implants, and cosmetic dental work may need more than one visit, lab time, healing time, or follow-up after you return home.",
    "Angel Doctor coordinates access and support. Licensed dental providers make the diagnosis, treatment plan, clinical decisions, and final pricing.",
  ],
  pricingNote: "Basic dental pricing depends on the provider, city, examination findings, imaging needs, materials, and whether the visit is cleaning, filling, pain assessment, crown planning, or another service. Angel Doctor can help you understand likely pricing components, but final costs are confirmed by the dental provider after examination.",
  faqs: [
    { q: "Can I get dental cleaning or a simple filling during a short China trip?", a: "Often yes. Basic dental visits such as checkups, cleaning, and simple fillings may take half a day when the case is straightforward and appointment availability fits your schedule. The dentist decides what can safely be completed after examination." },
    { q: "Why does the page mention more time for some dental care?", a: "Simple visits may be quick, but crowns, veneers, root canals, implants, bone grafting, or full-mouth restoration can require lab work, healing time, or staged appointments. Angel Doctor helps you understand which timeline fits your dental need." },
    { q: "Can dental implants be completed in one trip?", a: "Usually not as a full treatment. An implant first visit may include consultation, imaging, planning, and possible placement, but the final crown is commonly fitted after healing. Your dental provider will confirm the timeline after examination." },
    { q: "Which city is best for basic dental care during travel?", a: "Shenzhen and Zhuhai are convenient for Hong Kong or Macau access. Guangzhou is useful for southern China dental access. Shanghai may be suitable for travelers who prefer private clinic options and more English support. Best fit depends on your route, timing, and dental need." },
    { q: "Do Chinese dentists speak English?", a: "It varies by provider. Some private clinics have English-speaking staff, while hospital departments may have limited English support. Angel Doctor can arrange local escort support to help with communication, registration, payment guidance, and aftercare instructions." },
    { q: "Does Angel Doctor provide dental diagnosis or treatment?", a: "No. Angel Doctor provides coordination, appointment preparation, translation support, and local medical escort services. Licensed dental providers make all diagnosis, treatment, prescription, procedure, and final pricing decisions." },
  ],
};

export const metadata = createMetadata(treatmentPageToContent(data));

export default function Page() {
  return <TreatmentPage data={data} />;
}
