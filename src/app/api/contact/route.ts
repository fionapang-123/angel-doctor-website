import { NextResponse } from "next/server";
import { insertLead } from "@/lib/supabase";
import { notifyTeam, autoReply } from "@/lib/email";
import {
  hasLeadStorageConfig,
  hasTeamNotificationConfig,
  isEmailContact,
  isValidLeadContact,
  normalizeContact,
  wantsLocalSupport,
} from "@/lib/lead";

const VALID_TREATMENTS = [
  "Dental Care", "Health Checkup", "TCM Recovery",
  "Second Opinion", "Rehabilitation", "Aesthetic Care",
  "Medical Escort", "Not sure — help me decide", "Other",
];

const VALID_CITIES = [
  "Shenzhen", "Guangzhou", "Shanghai", "Beijing",
  "Chengdu", "Chongqing", "Hangzhou", "Nanjing",
  "Wuhan", "Xi'an", "Zhuhai", "Not sure yet",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const contact = normalizeContact(body.contact);
    const emailContact = isEmailContact(contact);

    if (!isValidLeadContact(contact)) {
      return NextResponse.json(
        { error: "Please provide a valid email address or WhatsApp number." },
        { status: 400 }
      );
    }

    if (!body.treatment || !VALID_TREATMENTS.includes(body.treatment)) {
      return NextResponse.json(
        { error: "Please select a treatment type." },
        { status: 400 }
      );
    }

    const city = body.city && VALID_CITIES.includes(body.city) ? body.city : null;
    const lead = {
      source: "contact" as const,
      contact,
      treatment: body.treatment,
      city,
      timeline: body.timeline || null,
      local_support: wantsLocalSupport(body.localSupport),
      message: body.message || null,
    };

    let savedToDatabase = false;
    let notifiedTeam = false;

    if (hasLeadStorageConfig()) {
      try {
        await insertLead(lead);
        savedToDatabase = true;
      } catch (dbErr) {
        console.error("[api/contact] Supabase insert failed:", dbErr);
      }
    }

    if (hasTeamNotificationConfig()) {
      notifiedTeam = await notifyTeam(lead);
    }

    if (!savedToDatabase && !notifiedTeam) {
      return NextResponse.json(
        {
          error: "Submission could not be completed. Please contact Angel Doctor directly by WhatsApp or email.",
          fallback: true,
        },
        { status: 503 }
      );
    }

    if (emailContact) {
      autoReply(contact, "contact").catch((e) =>
        console.error("[api/contact] autoReply failed:", e)
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your care plan request has been received. A coordinator will respond within 1–2 business days.",
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to process your request. Please try again or contact Angel Doctor directly by WhatsApp or email.",
        fallback: true,
      },
      { status: 500 }
    );
  }
}
