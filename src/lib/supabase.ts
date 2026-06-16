import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client (used in API routes — has access to service_role key)
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing Supabase env vars");
  return createClient(url, key);
}

// Types
export interface LeadRow {
  id?: string;
  source: "contact" | "escort";
  contact: string;
  treatment?: string | null;
  city?: string | null;
  timeline?: string | null;
  local_support?: boolean | null;
  message?: string | null;
  // escort-specific
  provider?: string | null;
  visit_date?: string | null;
  duration?: string | null;
  language?: string | null;
  tasks?: string | null;
  // metadata
  status?: "new" | "contacted" | "qualified" | "closed";
  created_at?: string;
}

export async function insertLead(lead: LeadRow) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("leads")
    .insert({
      source: lead.source,
      contact: lead.contact,
      treatment: lead.treatment ?? null,
      city: lead.city ?? null,
      timeline: lead.timeline ?? null,
      local_support: lead.local_support ?? null,
      message: lead.message ?? null,
      provider: lead.provider ?? null,
      visit_date: lead.visit_date ?? null,
      duration: lead.duration ?? null,
      language: lead.language ?? null,
      tasks: lead.tasks ?? null,
      status: "new",
    })
    .select("id")
    .single();

  if (error) {
    console.error("[Supabase] insertLead error:", error);
    throw new Error("Failed to save lead");
  }

  return data;
}
