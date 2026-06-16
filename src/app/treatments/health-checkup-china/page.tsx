import { TreatmentPage, type TreatmentPageData } from "@/components/TreatmentPage";

const data: TreatmentPageData = {
  slug: "treatments/health-checkup-china",
  title: "Health Checkup in China",
  subtitle: "One-Day Executive Screening with Specialist Access — English-Speaking Coordination",
  badge: "Most Popular",
  hero: "In the US or UK, a comprehensive health screening can take weeks — separate appointments for blood work, imaging, specialist review, and results. In China's top tertiary hospitals, it takes half a day. Angel Doctor coordinates your full executive checkup and ensures that if anything is found, you get immediate access to the right specialist — not a referral queue.",
  whatWeCoordinate: [
    { title: "Executive Health Screening", body: "Full-body checkup including blood panels, tumor markers, cardiac assessment, ultrasound, CT, and MRI — completed in 4–6 hours at major Chinese hospital checkup centers." },
    { title: "Cancer Early Detection", body: "Lung, liver, stomach, colorectal, prostate, and breast cancer screening — included in executive packages. China's high-volume hospitals detect early-stage cancers at rates comparable to top Western institutions." },
    { title: "Same-Day Results & Specialist Access", body: "Most results available same day. If an abnormality is found — a lung nodule, elevated tumor marker, cardiac issue — Angel Doctor arranges an immediate specialist consultation, not a 3-week wait." },
    { title: "English Medical Reports", body: "All findings translated into English with clear explanations. You leave with a report you can share with your doctor at home — not a stack of Chinese lab printouts." },
    { title: "Medical Escort Throughout", body: "An English-speaking escort accompanies you from registration through every station — blood draw, imaging, specialist review — ensuring nothing is lost in translation." },
    { title: "Follow-Up Care Navigation", body: "If follow-up is needed — repeat imaging, biopsy, specialist treatment — Angel Doctor coordinates the full pathway. This is the part most competitors ignore, and it's our strongest differentiator." },
  ],
  whoIsItFor: [
    "You're 40+ and want a comprehensive cancer and cardiovascular screening — but in the US it costs $3,000–$6,000 and takes weeks to schedule",
    "You're an overseas Chinese returning home for 2 weeks — you figure, 'while I'm here, let me do a full checkup' — this is our largest and easiest-to-serve group",
    "You're a business executive or entrepreneur — time is your scarcest resource. You need a complete health screen in one morning, not three separate appointments over two months",
    "You're from Southeast Asia (Malaysia, Indonesia, Thailand, Philippines) — you trust Chinese medical institutions and want high-quality screening at a fraction of private hospital prices at home",
    "You're already coming to China for dental implants, TCM, or surgery — adding a comprehensive health checkup to your trip is the smartest add-on decision you can make",
    "You have a family history of cancer or heart disease and want preventive screening — but your home country's public system has a 6-month wait for a non-urgent MRI",
    "You're uninsured or underinsured in the US — paying out of pocket for screening in China costs less than your insurance deductible back home",
    "You want peace of mind — a thorough screening now, with a clear plan if anything is found, rather than waiting for symptoms to appear",
  ],
  commonNeeds: [
    "Speed — in the US, scheduling a full executive checkup means: GP visit → blood work referral → imaging referral → specialist review → results. Each step takes 1–3 weeks. In China: all done in one morning, results same day",
    "Cost — US executive physical: $3,000–$6,000. China: $500–$1,000 for comparable or more comprehensive packages. MRI alone drops from $2,500 to $300–500. PET-CT from $5,000 to $800–2,000",
    "Cancer screening anxiety — patients over 40 are most concerned about lung, liver, stomach, colorectal, prostate, and breast cancer. China's executive checkup packages include tumor marker panels and imaging that would require separate referrals in Western systems",
    "One-stop convenience — blood work, ultrasound, CT, MRI, cardiac assessment, and specialist review all in one building, in one visit. No driving across town between labs, imaging centers, and doctors' offices",
    "What if they find something? — this is the anxiety no one talks about. Angel Doctor's core differentiator: if your screening finds a lung nodule, elevated PSA, or cardiac abnormality, we get you in front of a specialist that same day, not weeks later",
  ],
  whatIsIncluded: [
    "Comprehensive blood panel — complete blood count, liver and kidney function, lipids, glucose, thyroid function, inflammatory markers",
    "Tumor marker screening — AFP (liver), CEA (colorectal), CA19-9 (pancreatic), PSA (prostate), CA125 (ovarian), CA15-3 (breast) — depending on age, gender, and risk profile",
    "Cardiac assessment — ECG, echocardiogram, cardiac enzyme tests, and blood pressure monitoring",
    "Imaging — chest X-ray or low-dose CT (lung screening), abdominal ultrasound, thyroid ultrasound, and for executive packages: full-body MRI or PET-CT",
    "Specialist review — all results reviewed by a relevant specialist (internal medicine, cardiology, oncology as needed) on the same day",
    "English report — typed medical report in English with all findings, reference ranges, and recommendations — ready before you leave the hospital",
  ],
  hospitalAccessNote: "Angel Doctor coordinates health checkups at top-tier public hospital checkup centers and international clinic facilities across China — including Shanghai's executive checkup centers, Beijing's national hospital screening departments, Guangzhou's comprehensive medical centers, and Shenzhen's modern checkup facilities near Hong Kong. These are the same hospitals where Chinese executives and government officials do their annual screenings — not tourist clinics.",
  recommendedCities: [
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "China's best executive checkup infrastructure — international-standard screening centers, English-speaking staff, VIP express lanes, and immediate specialist access at top tertiary hospitals." },
    { name: "Beijing", slug: "beijing-medical-travel", why: "National-level hospital screening departments — the same institutions where China's leadership does their annual exams. Deepest specialist depth for follow-up if anything is detected." },
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Comprehensive screening at southern China's top medical hub — strong in cancer screening and integrated TCM-Western checkup packages." },
    { name: "Shenzhen", slug: "shenzhen-medical-travel", why: "40 minutes from Hong Kong — modern private checkup centers with English-speaking staff. Ideal for a one-day screening trip from HK." },
  ],
  process: [
    { title: "Choose your checkup package", body: "Tell us your age, gender, health concerns, and family history. We recommend a screening package — from basic health check to executive cancer screening with full-body MRI." },
    { title: "Arrive for your screening", body: "One morning at the hospital. A medical escort meets you, handles registration, and guides you through every station — blood draw, imaging, specialist review." },
    { title: "Results + specialist access", body: "Most results ready same day. If anything is flagged, Angel Doctor arranges an immediate specialist consultation. You leave with an English report and a clear next-step plan." },
  ],
  timeline: "Complete executive screening: 4–6 hours in one morning. Blood results: available within 2–4 hours. Imaging reports: same day. Full English report: ready before you leave the hospital or within 24 hours. If follow-up specialist consultation is needed: arranged same day or next business day. Total stay in China: 1–2 days for the screening itself, plus any additional days if you choose to proceed with specialist consultations or treatment.",
  risksAndLimits: [
    "Screening is not diagnosis — an abnormal finding (elevated tumor marker, imaging finding) requires further investigation. Angel Doctor coordinates this follow-up immediately",
    "No screening catches everything — small or early-stage cancers may not be visible on imaging. Regular screening intervals are more important than any single checkup",
    "False positives happen — some tumor markers can be elevated for benign reasons (inflammation, infection). A specialist will interpret results in context, not based on a single number",
    "MRI contrast agents carry a small risk of allergic reaction — inform the screening center of any known allergies before your scan",
    "CT scans involve low-dose radiation — the cancer risk from a single screening CT is negligible, but cumulative radiation exposure matters. Discuss with your doctor if you've had multiple recent CT scans",
  ],
  pricingNote: "Executive health screening in China: $500–$1,000 USD for comprehensive packages (blood panels, tumor markers, ultrasound, CT, cardiac assessment, specialist review). Full-body MRI add-on: $300–500. PET-CT: $800–2,000. For comparison: equivalent US executive physicals cost $3,000–$6,000, a standalone MRI costs $2,500, and PET-CT costs $5,000. All pricing is guidance — final costs confirmed by the provider and paid directly at the hospital. Angel Doctor's coordination and escort fees are separate.",
  faqs: [
    { q: "How long does a full health checkup take in China?", a: "A comprehensive executive screening — blood work, imaging, cardiac assessment, and specialist review — takes 4–6 hours in one morning. Most results are available the same day. This compares to 2–6 weeks for the same set of tests in the US or UK, where each step requires a separate appointment." },
    { q: "What cancer screenings are included?", a: "Executive packages typically include tumor marker panels (AFP for liver, CEA for colorectal, CA19-9 for pancreatic, PSA for prostate, CA125 for ovarian, CA15-3 for breast) plus imaging: chest CT or X-ray for lung screening, abdominal ultrasound for liver/kidney/pancreas, and thyroid ultrasound. Women receive breast ultrasound or mammography. Full-body MRI and PET-CT are available as add-ons." },
    { q: "What happens if the checkup finds something abnormal?", a: "This is Angel Doctor's core value. If your screening finds a lung nodule, elevated tumor marker, cardiac abnormality, or any concerning result, we arrange an immediate specialist consultation — same day or next day. You don't leave China with a scary finding and no plan. This 'care navigation after screening' is what separates Angel Doctor from a standalone checkup center." },
    { q: "Can I do a health checkup during a short trip to China?", a: "Yes. Executive screening takes one morning. Many overseas Chinese combine it with a family visit — fly in, do the checkup on day 2, get results, and continue your trip. Business travelers often schedule it on their first morning in China and have results before their meetings start." },
    { q: "Do I need a visa for a medical checkup in China?", a: "Many nationalities can enter China visa-free for short stays (15–30 days depending on your passport). A health checkup does not require a special medical visa — a tourist or business visa is sufficient. Check current Chinese visa policy for your nationality." },
    { q: "Are the doctors and equipment at the same standard as Western hospitals?", a: "China's top tertiary hospitals use the same imaging equipment as leading Western hospitals — Siemens, GE, Philips MRI and CT machines. The doctors are board-certified specialists who see high patient volumes. The difference is not equipment quality; it's speed, cost, and the lack of English-language coordination — which Angel Doctor provides." },
    { q: "Will my doctor at home accept the results?", a: "Yes. You receive a typed English medical report with all findings, reference ranges, and imaging on CD/USB. Most Western doctors accept results from accredited international hospitals. Angel Doctor ensures the report format is clear and usable for your home physician." },
    { q: "Can I combine a health checkup with dental work or TCM in the same trip?", a: "Yes — this is one of the smartest ways to use your trip. Many patients do an executive checkup on day 1, dental consultation on day 2, and TCM recovery sessions across the week. Angel Doctor coordinates all three. A single trip with multiple health goals maximizes the value of your travel." },
    { q: "How much does an executive checkup cost compared to the US?", a: "US executive physical: $3,000–$6,000. China: $500–$1,000 for comparable or more comprehensive packages. Standalone MRI: $2,500 (US) vs $300–500 (China). PET-CT: $5,000 (US) vs $800–2,000 (China). Flight and hotel are additional, but even with travel costs, total spend is typically 50–70% less than US out-of-pocket." },
    { q: "Do I need to prepare anything before the checkup?", a: "Fast for 8–12 hours before (water is fine) for accurate blood glucose and lipid results. Bring any prior medical records, imaging, or medication list. Wear comfortable clothing. If you're doing a cardiac stress test, bring athletic shoes. Avoid alcohol for 24 hours before. Angel Doctor sends a full preparation checklist after your appointment is confirmed." },
  ],
};

export default function Page() {
  return <TreatmentPage data={data} />;
}
