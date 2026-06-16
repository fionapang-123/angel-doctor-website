import { TreatmentPage, type TreatmentPageData } from "@/components/TreatmentPage";

const data: TreatmentPageData = {
  slug: "treatments/tcm-recovery-china",
  title: "TCM Recovery in China",
  subtitle: "Pain Management, Sleep Disorders, Cupping Therapy — English-Speaking Coordination",
  badge: "TCM Wellness",
  hero: "International patients travel to China for three TCM treatments more than any other: acupuncture for chronic pain, TCM sleep therapy for insomnia, and cupping (拔火罐) for muscle recovery and inflammation. Angel Doctor coordinates your TCM journey with licensed practitioners at university-affiliated hospitals — plus English-speaking escort support throughout your visit.",
  whatWeCoordinate: [
    { title: "Pain Management (Acupuncture & Tuina)", body: "Chronic back pain, frozen shoulder, migraines, arthritis, and sciatica — matched with licensed TCM pain specialists at top university hospitals. Acupuncture and tuina massage are the most evidence-backed TCM treatments for pain." },
    { title: "Sleep Therapy (TCM Insomnia Treatment)", body: "TCM treats insomnia at the root — not just masking symptoms. Acupuncture, herbal formulas, and lifestyle recommendations based on your TCM diagnosis (pulse reading + tongue examination)." },
    { title: "Cupping Therapy (拔火罐)", body: "Popular among athletes and fitness enthusiasts worldwide — cupping relieves muscle tension, improves blood circulation, and reduces inflammation. Widely used by Olympic athletes and now accessible in China's TCM hospitals." },
    { title: "On-Site English Translation", body: "TCM consultations are complex — pulse diagnosis, tongue examination, herbal prescriptions. An English-speaking medical escort ensures you understand every step of the diagnosis and treatment plan." },
    { title: "Herbal Medicine Coordination", body: "If prescribed, we help you understand dosage, preparation, timing, and sourcing. We also flag potential interactions with any Western medications you're taking." },
    { title: "Multi-Session Scheduling", body: "Pain and sleep programs usually need 5–10 sessions. We coordinate your full treatment calendar across your stay, including follow-up communication after you return home." },
  ],
  whoIsItFor: [
    "You have chronic back pain, frozen shoulder, arthritis, or migraines and want to try acupuncture — the #1 reason foreigners seek TCM in China",
    "You struggle with insomnia or poor sleep and have tried medication without lasting results",
    "You're an athlete or active adult dealing with muscle soreness, tightness, or slow recovery — cupping is widely used in sports medicine",
    "You've seen cupping marks on Olympic swimmers and celebrities and want to try it yourself at a licensed TCM hospital, not a spa",
    "You're recovering from an injury or surgery and want TCM to complement your rehabilitation",
    "You're dealing with stress, burnout, or tension headaches and want a holistic recovery program",
    "You're an overseas Chinese who grew up with TCM and want to access it with English coordination support",
    "You want to combine TCM treatments with a short stay in Guangzhou, Shanghai, Beijing, or Chengdu",
  ],
  commonNeeds: [
    "Chronic pain — lower back pain, frozen shoulder, arthritis, sciatica, and neck pain are the most common conditions treated with acupuncture and tuina. Pain relief is often noticeable within 3–5 sessions",
    "Sleep disorders — TCM treats insomnia by rebalancing the body's energy (Qi) rather than sedating the brain. Common patterns include 'heart fire,' 'liver qi stagnation,' and 'yin deficiency' — each treated differently",
    "Cupping for muscle recovery — suction cups create negative pressure that lifts connective tissue, increases blood flow, and breaks up adhesions. Athletes use it for back pain, shoulder tightness, and hamstring recovery",
    "Stress and tension — high-pressure work environments cause physical symptoms: tight shoulders, tension headaches, jaw clenching. TCM tuina massage and acupuncture release muscle tension and calm the nervous system",
  ],
  whatIsIncluded: [
    "Acupuncture — fine, sterile single-use needles at specific meridian points. Sessions 30–60 minutes. Most patients feel relaxed during treatment; pain relief often begins within 2–3 sessions",
    "Tuina massage — therapeutic Chinese medical massage using rhythmic pressing, kneading, and stretching. More intense than spa massage — targets muscle layers and acupressure points for pain relief",
    "Cupping therapy (拔火罐) — glass or plastic cups applied to the back, shoulders, or legs. Leaves circular marks that fade in 3–7 days. One session typically takes 20–30 minutes",
    "Chinese herbal medicine — customized formulas (pills, powders, or raw herbs to boil). Prescribed only after TCM diagnosis. Cost: $15–50 per week depending on ingredients",
  ],
  hospitalAccessNote: "Angel Doctor coordinates with university-affiliated TCM hospitals — not independent spas or massage parlors. Key institutions: Guangzhou University of Chinese Medicine Hospital (national TCM leader), Shanghai University of TCM's Longhua and Yueyang Hospitals (pain and sleep specialties), Beijing's top TCM hospitals, and Chengdu University of TCM Hospital. All practitioners are licensed with 5+ years of formal TCM education.",
  recommendedCities: [
    { name: "Guangzhou", slug: "guangzhou-medical-travel", why: "Guangzhou University of Chinese Medicine — China's top TCM hospital. Leading programs in acupuncture pain management, sleep therapy, and herbal medicine. Strong English-speaking support infrastructure." },
    { name: "Shanghai", slug: "shanghai-medical-travel", why: "Shanghai University of TCM's Longhua and Yueyang Hospitals — specialized pain clinics, sleep disorder programs, and integrated TCM-Western medicine for complex cases." },
    { name: "Beijing", slug: "beijing-medical-travel", why: "National TCM research centers and university hospitals — deepest expertise in herbal medicine, chronic pain, and difficult-to-treat conditions." },
    { name: "Chengdu", slug: "chengdu-medical-travel", why: "Sichuan's renowned TCM culture — pain relief, stress recovery, and digestive health programs. Chengdu University of TCM Hospital is a major institution." },
  ],
  process: [
    { title: "Share your health goals", body: "Tell us your main concern — chronic pain, sleep problems, muscle recovery, or stress. Mention any relevant medical history and current medications." },
    { title: "Get matched with a TCM provider", body: "We identify suitable TCM departments and practitioners at university hospitals based on your condition, city, timeline, and language needs." },
    { title: "Begin treatment with escort support", body: "An English-speaking medical escort accompanies your first visit — translating the TCM diagnosis, treatment plan, herbal instructions, and follow-up schedule." },
  ],
  timeline: "Pain management: 5–10 sessions over 1–2 weeks for acute conditions; chronic pain may need 2–4 weeks. Sleep therapy: 5–10 sessions over 1–2 weeks, with herbal medicine continued at home. Cupping: single session provides immediate relief; weekly sessions recommended for ongoing muscle recovery. First visit (pulse diagnosis + initial treatment): 60–90 minutes. Follow-up sessions: 30–60 minutes.",
  risksAndLimits: [
    "Cupping leaves circular marks (瘀痕) that look like bruises — not painful, but visible for 3–7 days. Plan around beach trips or events where you'd prefer not to show them",
    "Acupuncture may cause minor bruising, soreness, or lightheadedness at first. These are typically mild and short-lived when performed by licensed practitioners",
    "Chinese herbs can interact with blood thinners, diabetes medication, and other prescriptions. You must share your complete medication list with the TCM practitioner before starting herbs",
    "TCM is a complement to conventional medicine, not a replacement. For serious conditions (cancer, heart disease, infections), continue your Western medical treatment alongside TCM",
    "Not all pain responds to acupuncture — your practitioner will assess likely effectiveness during the initial consultation. Have realistic expectations about timeline and results",
    "Pregnant women should always inform their TCM practitioner — certain acupuncture points and herbs are contraindicated during pregnancy",
  ],
  pricingNote: "Cupping therapy: $20–40 per session. Acupuncture: $30–80 per session (university hospital pricing). Tuina massage: $25–60 per session (30–60 min). Herbal medicine: $15–50 per week depending on prescription. All pricing is guidance — final costs confirmed by the provider and paid directly at the hospital.",
  faqs: [
    { q: "Does acupuncture really work for chronic pain?", a: "Multiple systematic reviews and clinical trials support acupuncture for chronic back pain, osteoarthritis, migraines, and neck pain. The World Health Organization recognizes acupuncture as effective for over 30 conditions. Results vary by individual — most patients report improvement within 5–10 sessions." },
    { q: "Is cupping (拔火罐) safe? Does it hurt?", a: "Cupping is safe when performed by licensed practitioners. You feel a pulling sensation from the suction, not pain. The marks left are not bruises — they're from blood being drawn to the surface and fade within 3–7 days. Olympic athletes including Michael Phelps have used cupping publicly since 2016." },
    { q: "How does TCM treat insomnia differently from sleeping pills?", a: "Western sleeping pills sedate the brain. TCM diagnoses the underlying imbalance — liver heat, heart fire, yin deficiency, or qi stagnation — and treats the root cause with acupuncture, herbs, and lifestyle changes. Many patients report improved sleep quality without medication dependency." },
    { q: "How many acupuncture sessions until I feel pain relief?", a: "Acute pain: often 3–5 sessions over 1 week. Chronic conditions: 5–10 sessions over 2–4 weeks. Some patients feel relief after the first session; others need the full course. Your practitioner will adjust the treatment plan based on your response." },
    { q: "Can I do cupping and acupuncture on the same visit?", a: "Yes. Many TCM practitioners combine acupuncture, cupping, and tuina in a single session — especially for back pain and muscle tension. The treatments work synergistically." },
    { q: "Do I need to prepare anything before my TCM visit?", a: "Eat a light meal 1–2 hours before (don't come on an empty stomach). Wear loose, comfortable clothing. Bring a list of current medications and any relevant medical records. Avoid alcohol for 24 hours before treatment." },
    { q: "Can Angel Doctor help me buy Chinese herbal medicine?", a: "Yes. Our escorts help you understand the prescription, dosage instructions, and where to purchase herbs from hospital pharmacies or reputable dispensaries. We also explain how to prepare raw herbs at home if needed." },
    { q: "Will my travel insurance cover TCM treatments?", a: "Most international travel insurance does not cover TCM unless it's part of an approved rehabilitation program. Hospital fees are paid out-of-pocket at the time of service. Check with your insurer before traveling." },
    { q: "Are TCM practitioners in China licensed?", a: "Yes. China requires 5+ years of university-level TCM education plus national licensing exams. Angel Doctor only coordinates with practitioners at accredited university-affiliated hospitals — not independent clinics or spas." },
    { q: "Can I continue TCM treatment after returning home?", a: "Your TCM practitioner can provide a treatment summary and herbal recommendations for you to share with a local TCM provider. Angel Doctor can also help with follow-up communication and herbal medicine sourcing guidance after you return." },
  ],
};

export default function Page() {
  return <TreatmentPage data={data} />;
}
