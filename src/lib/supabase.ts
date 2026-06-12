import { createClient } from "@supabase/supabase-js";

export type LeadPayload = {
  full_name: string;
  business_name: string;
  business_type: string;
  whatsapp: string;
  whatsapp_normalized: string;
  email: string | null;
  location: string | null;
  preferred_concept: string | null;
  message: string;
  source_page: string;
};

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[Pratala] Supabase public env vars are not configured.");
    }
    return null;
  }

  return createClient(url, anonKey);
}

export async function submitLead(payload: LeadPayload) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    throw new Error(
      "Supabase belum dikonfigurasi. Tambahkan NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY sebelum menerima request."
    );
  }

  const { error } = await supabase.from("leads").insert(payload);
  if (error) throw error;
}
