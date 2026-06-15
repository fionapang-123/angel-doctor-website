import { TreatmentPage, type TreatmentPageData } from "@/components/TreatmentPage";

const data: TreatmentPageData = {
  slug: "treatments/health-checkup-china",
  title: "Health Checkup in China",
  subtitle: "What Angel Doctor Can Coordinate for Your Health Screening",
  badge: "Popular",
  hero: "Executive health checkups, preventive screening, imaging, blood tests, and specialist review — completed in hours instead of weeks. Angel Doctor helps international patients access health checkup centers in major Chinese cities with English-speaking coordination and local medical escort support.",
  whatWeCoordinate: [
    { title: "Checkup Center Matching", body: "We recommend suitable health checkup providers based on your age, gender, health concerns, budget, and preferred city." },
    { title: "Package Selection", body: "We help explain checkup packages (basic, comprehensive, executive) so you understand what's included before booking." },
    { title: "Appointment Scheduling", body: "We coordinate checkup timing, preparation instructions (fasting, medications), and visit planning." },
    { title: "On-Site Escort", body: "A trained medical escort can guide you through the checkup center, help with registration, translation, and navigation between stations." },
    { title: "Report Translation", body: "We help translate key findings and specialist recommendations from Chinese to English for your reference." },
    { title: "Follow-Up Coordination", body: "If follow-up consultations or specialist referrals are recommended, Angel Doctor helps coordinate next steps." },
  ],
  whoIsItFor: [
    "You want a comprehensive health checkup during a short trip to China",
    "You're an expat or overseas Chinese looking for faster and more affordable screening than in your home country",
    "You want preventive screening that includes imaging, blood panels, and specialist review",
    "You're too busy for fragmented checkups and want everything done in one visit",
    "You want English support during the checkup process",
    "You have a family history of specific conditions and want targeted screening",
  ],
  recommendedCities: [
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "International-standard executive checkup centers with English-friendly service and same-day results." },
    { name: "Beijing", slug: "beijing-medical-travel", why: "Top national hospitals offering comprehensive preventive screening packages." },
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Major southern China medical hub with efficient checkup centers and specialist availability." },
    { name: "Shenzhen", slug: "shenzhen-medical-travel", why: "Convenient for cross-border visitors — executive checkups with quick turnaround." },
  ],
  process: [
    { title: "Share your health profile", body: "Tell us about your health concerns, age, and screening goals. We'll recommend appropriate checkup options." },
    { title: "Select package & schedule", body: "Angel Doctor explains checkup packages and coordinates your appointment timing with preparation instructions." },
    { title: "Complete your checkup", body: "Arrive at the center. Your escort guides you through stations. Results and specialist review are typically available same day or next day." },
  ],
  pricingNote: "Health checkup costs in China vary by package level, included tests, imaging requirements, provider, and city. Basic packages start from approximately $100-300 USD, executive packages from $500-1,500+ USD. Angel Doctor provides transparent cost guidance before you confirm. Final pricing is confirmed by the provider.",
  faqs: [
    { q: "How long does a health checkup take in China?", a: "Most executive checkups are completed in 2-4 hours. Results and specialist review are typically available same day or within 24 hours, depending on the package and provider." },
    { q: "Do I need to fast before a health checkup?", a: "Yes, most checkup packages require 8-12 hours of fasting for blood tests and abdominal ultrasound. Your coordinator will provide specific preparation instructions." },
    { q: "Can I get my checkup results in English?", a: "Many international and executive checkup centers provide English reports. Angel Doctor can also help translate key findings and specialist recommendations." },
    { q: "What happens if the checkup finds something concerning?", a: "If follow-up consultation or specialist referral is recommended, Angel Doctor helps coordinate next steps — connecting you with suitable specialists or departments." },
    { q: "Can I combine a health checkup with dental care during the same trip?", a: "Yes. Angel Doctor can help coordinate both a health checkup and dental care during a single trip, optimizing your schedule." },
    { q: "Which city has the best health checkup options?", a: "Shanghai has the most international-standard executive checkup centers with English-friendly service. Beijing offers top national hospital packages. The best city depends on your travel plan and screening needs." },
  ],
};

export default function Page() {
  return <TreatmentPage data={data} />;
}
