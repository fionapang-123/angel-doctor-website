import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

// --------------------
// City normalization
// --------------------

const VALID_CITIES = [
  "Shenzhen",
  "Guangzhou",
  "Shanghai",
  "Beijing",
  "Chengdu",
  "Chongqing",
  "Hangzhou",
  "Nanjing",
  "Wuhan",
  "Xi'an",
  "Zhuhai",
  "Other",
];

// normalize city safely
function normalizeCity(city?: string) {
  if (!city) return "Other";

  const cleaned = city
    .trim()
    .replace(/’/g, "'") // fix smart quotes
    .replace(/\s+/g, "");

  const match = VALID_CITIES.find(
    (c) => c.replace(/\s+/g, "") === cleaned
  );

  return match || "Other";
}

// --------------------
// Contact validation
// --------------------
function normalizeContact(input?: string) {
  if (!input) return null;

  const trimmed = input.trim();

  // email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(trimmed)) return trimmed;

  // phone / whatsapp
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length >= 7 && digits.length <= 16) return digits;

  return null;
}

// --------------------
// Main handler
// --------------------
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // flexible field mapping (IMPORTANT)
    const contactRaw =
      body.contact ??
      body.email ??
      body.whatsapp ??
      body.phone ??
      body.contactInfo;

    const contact = normalizeContact(contactRaw);

    // ❗ ONLY HARD BLOCK: invalid contact
    if (!contact) {
      return NextResponse.json(
        { error: "Invalid contact" },
        { status: 400 }
      );
    }

    const city = normalizeCity(body.city);

    const lead = {
      source: "escort" as const,
      contact,
      city,
      provider: body.provider ?? body.hospital ?? null,
      visit_date: body.visitDate ?? null,
      duration: body.duration ?? null,
      language: body.language ?? null,
      tasks: body.tasks ?? body.message ?? null,
      created_at: new Date().toISOString(),
    };

    // --------------------
    // Supabase write (never block)
    // --------------------
    try {
      const supabase = getSupabaseAdmin();
      const { error: dbError } = await supabase
        .from("leads")
        .insert([lead]);

      if (dbError) {
        console.error("[Supabase Error]", dbError);
      }
    } catch (err) {
      console.error("[Supabase Error]", err);
    }

    // --------------------
    // Resend notify (never block)
    // --------------------
    try {
      if (process.env.LEAD_NOTIFY_EMAIL) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from:
            process.env.EMAIL_FROM ||
            "Angel Doctor <onboarding@resend.dev>",
          to: process.env.LEAD_NOTIFY_EMAIL,
          subject: "New Medical Escort Lead",
          text: JSON.stringify(lead, null, 2),
        });
      }
    } catch (err) {
      console.error("[Resend Error]", err);
    }

    // --------------------
    // Response always success
    // --------------------
    return NextResponse.json({ success: true, lead });
  } catch (err) {
    console.error("[Escort API Fatal]", err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
