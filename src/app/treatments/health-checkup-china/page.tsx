import { TreatmentPage, treatmentPageToContent, type TreatmentPageData } from "@/components/TreatmentPage";
import { createMetadata } from "@/config/metadata";

const data: TreatmentPageData = {
  slug: "treatments/health-checkup-china",
  title: "Health Checkup in China",
  subtitle: "One-Day Executive Screening with Same-Day Specialist Access",
  badge: "Most Popular",
  hero: "Comprehensive health screening can become fragmented when blood work, imaging, and specialist review are handled across separate appointments. In China's major tertiary hospital checkup centers, many executive screening workflows can be completed in half a day. Angel Doctor coordinates your checkup pathway, examination routing, report follow-up, and specialist access if further review is needed.",
  heroImage: {
    src: "/images/treatments/health-checkup-china-imaging-support.webp",
    alt: "Health checkup coordination in China with imaging support for international patients",
    caption: "Health checkup in China with screening preparation, examination routing, report coordination, and follow-up support.",
  },
  whatWeCoordinate: [
    { title: "Executive Health Screening", body: "Full-body checkup — blood panels, tumor markers, cardiac assessment, ultrasound, CT, and MRI — completed in 4–6 hours at major hospital checkup centers with integrated testing suites [3]." },
    { title: "Cancer Early Detection", body: "Lung, liver, stomach, colorectal, prostate, and breast cancer screening. China's national programs now cover six major cancer types with protocols comparable to top Western institutions [2][4]." },
    { title: "Genetic Testing (Optional)", body: "Hereditary cancer risk panels — BRCA1/2, Lynch syndrome markers — available at university-affiliated hospital centers. Results in 7–14 days with counseling." },
    { title: "Same-Day Specialist Access", body: "If your screening finds an abnormality, Angel Doctor arranges an immediate specialist consultation — not a 3-week referral wait. This care navigation is what separates us from a standalone checkup center." },
  ],
  whoIsItFor: [
    "You're 40+ and want comprehensive cancer + cardiovascular screening — $500–$1,000 in China vs $3,000–$6,000 in the US",
    "You're an overseas Chinese returning home — add a half-day screening to your family visit",
    "You're a time-constrained executive — one morning vs weeks of separate appointments",
    "You have a family history of cancer and your home country has 6+ month waits for non-urgent MRI",
    "You're uninsured/underinsured in the US — out-of-pocket screening in China costs less than your deductible",
  ],
  commonNeeds: [
    "Speed — US: GP → blood referral → imaging referral → specialist → results (2–6 weeks). China: all done in one morning, results same day. A 2023 JAMA Network Open study confirmed low-dose CT screening in China effectively detects early-stage lung cancer [3]",
    "Cost — US executive physical: $3,000–$6,000 vs China: $500–$1,000. MRI: $2,500 vs $300–500. PET-CT: $5,000 vs $800–2,000. The volume-outcome relationship documented in NEJM [5] explains how high-throughput Chinese hospitals maintain quality at lower cost",
    "The 'what if they find something' problem — Angel Doctor's core differentiator: if screening finds a lung nodule or elevated tumor marker, you see a specialist same day, not weeks later. No anxiety-filled waiting period",
  ],
  whatIsIncluded: [
    "Comprehensive blood panel — CBC, liver/kidney function, lipids, glucose, thyroid, inflammatory markers",
    "Tumor marker screening — AFP, CEA, CA19-9, PSA, CA125, CA15-3 based on age/gender/risk profile",
    "Cardiac assessment — ECG, echocardiogram, cardiac enzymes, blood pressure monitoring",
    "Imaging — low-dose chest CT, abdominal/thyroid ultrasound. Executive packages: full-body MRI or PET-CT",
    "English report — typed findings with reference ranges and recommendations, ready before you leave",
    "Genetic testing (add-on) — BRCA1/2, Lynch syndrome, pharmacogenomics. 7–14 day turnaround",
  ],
  hospitalAccessNote: "Angel Doctor coordinates at top-tier public hospital checkup centers and international clinics — including Shanghai's executive checkup centers, Beijing's national hospital screening departments, Guangzhou's comprehensive medical centers, and Shenzhen's modern facilities near Hong Kong. These are the same hospitals where Chinese executives do their annual screenings.",
  recommendedCities: [
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "Best executive checkup infrastructure — international-standard centers, VIP express lanes, immediate specialist access." },
    { name: "Beijing", slug: "beijing-medical-travel", why: "National-level hospital screening departments — deepest specialist depth for follow-up." },
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Southern China's top medical hub — strong cancer screening, integrated TCM-Western packages." },
    { name: "Shenzhen", slug: "shenzhen-medical-travel", why: "40 min from Hong Kong — modern private checkup centers, English-speaking staff." },
  ],
  process: [
    { title: "Choose your package", body: "Tell us your age, health concerns, and family history. We recommend a screening package — from basic to executive cancer screening with full-body MRI." },
    { title: "One morning screening", body: "A medical escort handles registration and guides you through every station — blood draw, imaging, specialist review. 4–6 hours total." },
    { title: "Results + specialist access", body: "Most results same day. If anything is flagged, immediate specialist consultation. English report with clear next-step plan." },
  ],
  timeline: "Executive screening: 4–6 hours in one morning. Blood results: 2–4 hours. Imaging reports: same day. English report: before you leave or within 24 hours. Specialist follow-up if needed: same or next day. Total stay: 1–2 days for screening.",
  risksAndLimits: [
    "Screening is not diagnosis — abnormal findings require further investigation. Angel Doctor coordinates this immediately",
    "No screening catches everything — regular intervals matter more than any single checkup. False positives happen (elevated markers from benign causes)",
    "CT scans involve low-dose radiation — negligible from a single screening, but cumulative exposure matters. MRI uses no radiation",
  ],
  pricingNote: "Executive screening: $500–$1,000. Full-body MRI add-on: $300–500. PET-CT: $800–2,000. US comparison: executive physical $3,000–$6,000, standalone MRI $2,500, PET-CT $5,000. All pricing guidance — final costs confirmed by provider. Angel Doctor coordination fees separate.",
  faqs: [
    { q: "How long does a full health checkup take in China?", a: "4–6 hours in one morning. Most results same day. Compares to 2–6 weeks for the same tests in the US/UK. This speed is possible because large Chinese hospitals operate dedicated checkup floors with integrated testing suites." },
    { q: "What cancer screenings are included?", a: "Tumor marker panels (AFP, CEA, CA19-9, PSA, CA125, CA15-3) plus imaging: low-dose chest CT, abdominal/thyroid ultrasound. Women: breast ultrasound or mammography. Full-body MRI and PET-CT available as add-ons." },
    { q: "What happens if the checkup finds something abnormal?", a: "Angel Doctor arranges an immediate specialist consultation — same or next day. You don't leave China with a scary finding and no plan. This care navigation after screening is what separates us from a standalone checkup center." },
    { q: "Can I do a health checkup during a short trip?", a: "Yes. Executive screening takes one morning. Many overseas Chinese combine it with a family visit. Business travelers schedule it on their first morning and have results before meetings start." },
    { q: "Are the equipment and doctors at Western standards?", a: "China's top tertiary hospitals use the same Siemens, GE, Philips machines as leading Western hospitals. The difference isn't equipment quality — it's speed, cost, and English-language coordination, which Angel Doctor provides." },
    { q: "How much does an executive checkup cost compared to the US?", a: "US: $3,000–$6,000. China: $500–$1,000. MRI: $2,500 vs $300–500. PET-CT: $5,000 vs $800–2,000. Even with travel costs, total spend typically 50–70% less." },
    { q: "Can I combine a checkup with dental or TCM?", a: "Yes — checkup on day 1, dental on day 2, TCM across the week. Angel Doctor coordinates all three in one trip." },
  ],
};

export const metadata = createMetadata(treatmentPageToContent(data));

export default function Page() {
  return <TreatmentPage data={data} />;
}
