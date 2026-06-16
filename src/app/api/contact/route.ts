import { NextResponse } from "next/server";
import { insertLead } from "@/lib/supabase";
import { notifyTeam, autoReply } from "@/lib/email";

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

    // --- Validate ---
    if (!body.contact || typeof body.contact !== "string" || body.contact.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    const contact = body.contact.trim().toLowerCase();
    if (!contact.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!body.treatment || !VALID_TREATMENTS.includes(body.treatment)) {
      return NextResponse.json(
        { error: "Please select a treatment type." },
        { status: 400 }
      );
    }

    // --- Store lead in Supabase ---
    try {
      await insertLead({
        source: "contact",
        contact,
        treatment: body.treatment,
        city: body.city && VALID_CITIES.includes(body.city) ? body.city : null,
        timeline: body.timeline || null,
        local_support: body.localSupport === true,
        message: body.message || null,
      });
    } catch (dbErr) {
      console.error("[api/contact] Supabase insert failed:", dbErr);
      // Don't block the user — still return success, but log the failure
    }

    // --- Send emails (non-blocking) ---
    notifyTeam({
      source: "contact",
      contact,
      treatment: body.treatment,
      city: body.city || null,
      message: body.message || null,
    }).catch((e) => console.error("[api/contact] notifyTeam failed:", e));

    autoReply(contact, "contact").catch((e) =>
      console.error("[api/contact] autoReply failed:", e)
    );

    return NextResponse.json({
      success: true,
      message:
        "Your care plan request has been received. A coordinator will respond within 1–2 business days.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
