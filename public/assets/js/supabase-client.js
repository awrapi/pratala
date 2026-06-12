const CONFIG_SCRIPT_PATH = "./supabase-config.js";
let configPromise;
let clientPromise;

async function loadRuntimeConfig() {
  if (window.PRATALA_SUPABASE_CONFIG?.url && window.PRATALA_SUPABASE_CONFIG?.anonKey) {
    return window.PRATALA_SUPABASE_CONFIG;
  }

  try {
    await import(CONFIG_SCRIPT_PATH);
  } catch (_error) {
    // Missing local config is expected before Supabase is configured.
  }

  return window.PRATALA_SUPABASE_CONFIG || {};
}

async function getSupabaseConfig() {
  configPromise ||= loadRuntimeConfig();
  const config = await configPromise;
  const missingConfig =
    !config.url ||
    !config.anonKey ||
    config.url.includes("your-project-ref") ||
    config.anonKey.includes("your-public-anon-key");

  if (missingConfig) {
    throw new Error("Supabase public config is not set. Copy assets/js/supabase-config.example.js to assets/js/supabase-config.js and add your URL plus anon key.");
  }

  return config;
}

async function getSupabaseClient() {
  clientPromise ||= (async () => {
    const config = await getSupabaseConfig();
    const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
    return createClient(config.url, config.anonKey);
  })();

  return clientPromise;
}

window.getSupabaseConfig = getSupabaseConfig;
window.getSupabaseClient = getSupabaseClient;
