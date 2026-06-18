import { Resend } from "resend";
import type { LeadRow } from "@/lib/supabase";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Missing RESEND_API_KEY env var");
  return new Resend(key);
}

const TEAM_EMAIL = process.env.LEAD_NOTIFY_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "marketing@jumper-medical.com";
const FROM = process.env.EMAIL_FROM || "Angel Doctor <onboarding@resend.dev>";

/** Send a notification to the Angel Doctor team about a new lead */
export async function notifyTeam(lead: LeadRow) {
  if (!process.env.RESEND_API_KEY) {
    console.log("[Email] SKIP — no RESEND_API_KEY configured");
    return false;
  }

  const resend = getResend();
  const summary = [
    `Source: ${lead.source}`,
    `Contact: ${lead.contact}`,
    lead.treatment ? `Treatment: ${lead.treatment}` : null,
    lead.city ? `City: ${lead.city}` : null,
    lead.timeline ? `Timeline: ${lead.timeline}` : null,
    typeof lead.local_support === "boolean" ? `Local support: ${lead.local_support ? "Yes" : "No"}` : null,
    lead.provider ? `Hospital or clinic: ${lead.provider}` : null,
    lead.visit_date ? `Visit date: ${lead.visit_date}` : null,
    lead.duration ? `Duration: ${lead.duration}` : null,
    lead.language ? `Language: ${lead.language}` : null,
    lead.tasks ? `Support tasks: ${lead.tasks}` : null,
    lead.message ? `Message: ${lead.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from: FROM,
    to: TEAM_EMAIL,
    subject: `New ${lead.source === "escort" ? "Escort" : "Care Plan"} Lead — ${lead.contact}`,
    text: `New lead submitted via angeldoctor.com\n\n${summary}`,
  });

  if (error) {
    console.error("[Email] notifyTeam error:", error);
    return false;
  }

  return true;
}

/** Send an auto-reply confirmation to the user */
export async function autoReply(email: string, source: string) {
  if (!process.env.RESEND_API_KEY) {
    console.log("[Email] SKIP auto-reply — no RESEND_API_KEY configured");
    return false;
  }

  const resend = getResend();

  const isEscort = source === "escort";
  const subject = isEscort
    ? "Your medical escort request — Angel Doctor"
    : "Your care plan request — Angel Doctor";

  const text = isEscort
    ? `Hi,

Thank you for reaching out to Angel Doctor. We've received your escort request.

A coordinator will review your needs and reply within 1–2 business days with next steps, availability, and any questions we may have.

If you have urgent questions, you can reply directly to this email.

— Angel Doctor Team
marketing@jumper-medical.com`
    : `Hi,

Thank you for your interest in Angel Doctor. We've received your care plan request.

A coordinator will review your treatment needs and preferred city, then reply within 1–2 business days with initial guidance — including provider options, estimated costs, and next steps.

You can reply to this email anytime if you have questions.

— Angel Doctor Team
marketing@jumper-medical.com`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: email,
    subject,
    text,
  });

  if (error) {
    console.error("[Email] autoReply error:", error);
    return false;
  }

  return true;
}
