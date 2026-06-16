import { NextResponse } from "next/server";
import { insertLead } from "@/lib/supabase";
import { notifyTeam, autoReply } from "@/lib/email";

const VALID_CITIES = [
  "Shenzhen", "Guangzhou", "Shanghai", "Beijing",
  "Chengdu", "Chongqing", "Hangzhou", "Nanjing",
  "Wuhan", "Xi'an", "Zhuhai", "Other",
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

    if (!body.city || !VALID_CITIES.includes(body.city)) {
      return NextResponse.json(
        { error: "Please select a city." },
        { status: 400 }
      );
    }

    // --- Store lead in Supabase ---
    try {
      await insertLead({
        source: "escort",
        contact,
        city: body.city,
        provider: body.provider || null,
        visit_date: body.visitDate || null,
        duration: body.duration || null,
        language: body.language || null,
        tasks: body.tasks || null,
      });
    } catch (dbErr) {
      console.error("[api/escort] Supabase insert failed:", dbErr);
    }

    // --- Send emails (non-blocking) ---
    notifyTeam({
      source: "escort",
      contact,
      city: body.city,
      message: body.tasks || null,
    }).catch((e) => console.error("[api/escort] notifyTeam failed:", e));

    autoReply(contact, "escort").catch((e) =>
      console.error("[api/escort] autoReply failed:", e)
    );

    return NextResponse.json({
      success: true,
      message: "Your escort request has been received. A coordinator will follow up with next steps.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
