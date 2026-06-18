import { NextResponse } from "next/server";
import { insertLead } from "@/lib/supabase";
import { notifyTeam, autoReply } from "@/lib/email";
import {
  hasLeadStorageConfig,
  hasTeamNotificationConfig,
  isEmailContact,
  isValidLeadContact,
  normalizeContact,
} from "@/lib/lead";

const VALID_CITIES = [
  "Shenzhen", "Guangzhou", "Shanghai", "Beijing",
  "Chengdu", "Chongqing", "Hangzhou", "Nanjing",
  "Wuhan", "Xi'an", "Zhuhai", "Other",
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

    if (!body.city || !VALID_CITIES.includes(body.city)) {
      return NextResponse.json(
        { error: "Please select a city." },
        { status: 400 }
      );
    }

    const lead = {
      source: "escort" as const,
      contact,
      city: body.city,
      provider: body.provider || null,
      visit_date: body.visitDate || null,
      duration: body.duration || null,
      language: body.language || null,
      tasks: body.tasks || null,
    };

    let savedToDatabase = false;
    let notifiedTeam = false;

    if (hasLeadStorageConfig()) {
      try {
        await insertLead(lead);
        savedToDatabase = true;
      } catch (dbErr) {
        console.error("[api/escort] Supabase insert failed:", dbErr);
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
      autoReply(contact, "escort").catch((e) =>
        console.error("[api/escort] autoReply failed:", e)
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your escort request has been received. A coordinator will follow up with next steps.",
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
