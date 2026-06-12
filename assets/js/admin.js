console.log("[Pratala Admin] admin.js loaded");

// Credentials must never be placed in URLs. Do not support ?email= or ?password= login.

const STATUS_OPTIONS = ["new", "contacted", "interested", "deal", "rejected", "archived"];
const FOLLOW_UP_MESSAGE =
  "Halo Kak, saya Adit dari Pratala Rerupa. Terima kasih sudah request konsep website. Saya ingin tanya sedikit tentang kebutuhan website untuk bisnisnya agar bisa saya arahkan dengan lebih tepat.";

let supabase;
let leads = [];
let selectedLeadId = null;

const loginPanel = document.getElementById("login-panel");
const adminPanel = document.getElementById("admin-panel");
const logoutButton = document.getElementById("logout-button");
const leadRows = document.getElementById("lead-rows");
const leadDetail = document.getElementById("lead-detail");
const searchInput = document.getElementById("lead-search");
const statusFilter = document.getElementById("status-filter");
const adminError = document.getElementById("admin-error");
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginError = document.getElementById("login-error");
const loginStatus = document.getElementById("login-status");
const setupError = document.getElementById("setup-error");
const fileWarning = document.getElementById("file-warning");

function hasSupabaseConfig() {
  return Boolean(
    window.PRATALA_SUPABASE_CONFIG &&
    window.PRATALA_SUPABASE_CONFIG.url &&
    window.PRATALA_SUPABASE_CONFIG.anonKey &&
    !window.PRATALA_SUPABASE_CONFIG.url.includes("your-project-ref") &&
    !window.PRATALA_SUPABASE_CONFIG.anonKey.includes("your-public-anon-key")
  );
}

function showLoginError(message) {
  loginError.textContent = message;
  loginError.classList.remove("hidden");
}

function clearLoginError() {
  loginError.classList.add("hidden");
  loginError.textContent = "";
}

function showSetupError(message) {
  setupError.textContent = message;
  setupError.classList.remove("hidden");
}

function clearSetupError() {
  setupError.classList.add("hidden");
  setupError.textContent = "";
}

function setLoginLoading(isLoading) {
  loginButton.disabled = isLoading;
  loginButton.textContent = isLoading ? "Logging in..." : "Login";
  loginStatus.classList.toggle("hidden", !isLoading);
}

function isDirectFileAccess() {
  return window.location.protocol === "file:";
}

function updateFileAccessWarning() {
  fileWarning.classList.toggle("hidden", !isDirectFileAccess());
}

function showError(message) {
  adminError.textContent = message;
  adminError.classList.remove("hidden");
}

function clearError() {
  adminError.classList.add("hidden");
  adminError.textContent = "";
}

function formatDate(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function formatCsvDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day} ${month} ${year} ${hours}:${minutes}`;
}

function escapeCsvValue(value) {
  if (value === null || value === undefined) return "\"\"";
  let cleanValue = String(value)
    .replace(/\r?\n|\r/g, " ")
    .replace(/"/g, "\"\"")
    .trim();

  if (/^[=+\-@]/.test(cleanValue)) {
    cleanValue = `'${cleanValue}`;
  }

  return `"${cleanValue}"`;
}

function buildCsvRow(values) {
  return values.map(escapeCsvValue).join(";");
}

function excelSafePhone(value) {
  if (value === null || value === undefined) return "";
  const phone = String(value).trim();
  if (!phone) return "";
  return `'${phone.replace(/\r?\n|\r/g, " ")}`;
}

const CSV_COLUMNS = [
  { label: "Tanggal", value: (lead) => formatCsvDate(lead.created_at) },
  { label: "Nama", value: (lead) => lead.full_name },
  { label: "Nama Bisnis", value: (lead) => lead.business_name },
  { label: "Jenis Bisnis", value: (lead) => lead.business_type },
  { label: "WhatsApp", value: (lead) => excelSafePhone(lead.whatsapp) },
  { label: "WhatsApp Normalized", value: (lead) => excelSafePhone(lead.whatsapp_normalized) },
  { label: "Email", value: (lead) => lead.email },
  { label: "Lokasi", value: (lead) => lead.location },
  { label: "Konsep Dipilih", value: (lead) => lead.preferred_concept },
  { label: "Pesan", value: (lead) => lead.message },
  { label: "Sumber", value: (lead) => lead.source_page },
  { label: "Status", value: (lead) => lead.status },
  { label: "Catatan", value: (lead) => lead.notes },
  { label: "Dihubungi Pada", value: (lead) => formatCsvDate(lead.contacted_at) }
];

function buildLeadsCsv(rows) {
  const csvRows = [
    "sep=;",
    buildCsvRow(CSV_COLUMNS.map((column) => column.label)),
    ...rows.map((lead) => buildCsvRow(CSV_COLUMNS.map((column) => column.value(lead))))
  ];
  return `\uFEFF${csvRows.join("\r\n")}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function visibleLeads() {
  const query = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;

  return leads.filter((lead) => {
    const matchesStatus = status === "all" || lead.status === status;
    const haystack = [
      lead.full_name,
      lead.business_name,
      lead.whatsapp,
      lead.business_type,
      lead.preferred_concept
    ].join(" ").toLowerCase();
    return matchesStatus && (!query || haystack.includes(query));
  });
}

function renderRows() {
  const rows = visibleLeads();
  if (!rows.length) {
    const emptyMessage = leads.length ? "No leads found." : "No leads yet.";
    leadRows.innerHTML = `<tr><td class="px-4 py-8 text-center text-text-muted" colspan="8">${emptyMessage}</td></tr>`;
    return;
  }

  leadRows.innerHTML = rows.map((lead) => `
    <tr class="${lead.id === selectedLeadId ? "bg-surface" : "bg-surface-white"}">
      <td class="px-4 py-3">${formatDate(lead.created_at)}</td>
      <td class="px-4 py-3 font-medium">${escapeHtml(lead.full_name)}</td>
      <td class="px-4 py-3">${escapeHtml(lead.business_name)}</td>
      <td class="px-4 py-3">${escapeHtml(lead.business_type)}</td>
      <td class="px-4 py-3">${escapeHtml(lead.whatsapp)}</td>
      <td class="px-4 py-3">${escapeHtml(lead.preferred_concept || "-")}</td>
      <td class="px-4 py-3"><span class="rounded-full bg-surface px-3 py-1 font-mono text-xs uppercase">${escapeHtml(lead.status)}</span></td>
      <td class="px-4 py-3">
        <div class="flex flex-wrap gap-2">
          <button class="rounded-lg border border-border-soft px-3 py-2 text-xs transition hover:bg-surface" data-view="${lead.id}" type="button">View</button>
          <a class="rounded-lg bg-primary px-3 py-2 text-xs text-white transition hover:bg-art-cobalt" href="${whatsappLink(lead)}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </td>
    </tr>
  `).join("");
}

function whatsappLink(lead) {
  const phone = lead.whatsapp_normalized || "";
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(FOLLOW_UP_MESSAGE)}` : "#";
}

function detailLine(label, value) {
  return `
    <div class="border-b border-border-soft py-3">
      <p class="font-mono text-[11px] uppercase tracking-widest text-text-muted">${label}</p>
      <p class="mt-1 break-words">${escapeHtml(value || "-")}</p>
    </div>
  `;
}

function renderDetail() {
  const lead = leads.find((item) => item.id === selectedLeadId);
  if (!lead) {
    leadDetail.innerHTML = `
      <p class="font-mono text-xs uppercase tracking-widest text-text-muted">Lead Detail</p>
      <p class="mt-4 text-text-muted">Select a lead to review details, update status, or add internal notes.</p>
    `;
    return;
  }

  const statusOptions = STATUS_OPTIONS.map((status) => `
    <option value="${status}" ${lead.status === status ? "selected" : ""}>${status}</option>
  `).join("");

  leadDetail.innerHTML = `
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="font-mono text-xs uppercase tracking-widest text-text-muted">Lead Detail</p>
        <h2 class="mt-2 text-2xl font-semibold">${escapeHtml(lead.full_name)}</h2>
        <p class="text-text-muted">${escapeHtml(lead.business_name)}</p>
      </div>
      <a class="rounded-lg bg-primary px-4 py-3 text-sm text-white transition hover:bg-art-cobalt" href="${whatsappLink(lead)}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
    <div class="mt-6 space-y-4">
      <label class="block">
        <span class="font-mono text-xs uppercase tracking-widest text-text-muted">Status</span>
        <select class="mt-2 w-full rounded-lg border-border-soft" id="detail-status">${statusOptions}</select>
      </label>
      <label class="block">
        <span class="font-mono text-xs uppercase tracking-widest text-text-muted">Internal Notes</span>
        <textarea class="mt-2 min-h-[120px] w-full rounded-lg border-border-soft" id="detail-notes">${escapeHtml(lead.notes || "")}</textarea>
      </label>
      <div class="flex flex-wrap gap-3">
        <button class="rounded-lg bg-primary px-5 py-3 text-white transition hover:bg-art-cobalt" id="save-detail" type="button">Save Changes</button>
        <button class="rounded-lg border border-border-soft px-5 py-3 transition hover:bg-surface" id="archive-lead" type="button">Archive</button>
        <button class="rounded-lg border border-error/30 px-5 py-3 text-error transition hover:bg-red-50" id="delete-lead" type="button">Delete</button>
      </div>
    </div>
    <div class="mt-6">
      ${detailLine("full_name", lead.full_name)}
      ${detailLine("business_name", lead.business_name)}
      ${detailLine("business_type", lead.business_type)}
      ${detailLine("whatsapp", lead.whatsapp)}
      ${detailLine("whatsapp_normalized", lead.whatsapp_normalized)}
      ${detailLine("email", lead.email)}
      ${detailLine("location", lead.location)}
      ${detailLine("preferred_concept", lead.preferred_concept)}
      ${detailLine("message", lead.message)}
      ${detailLine("source_page", lead.source_page)}
      ${detailLine("status", lead.status)}
      ${detailLine("created_at", formatDate(lead.created_at))}
      ${detailLine("contacted_at", lead.contacted_at ? formatDate(lead.contacted_at) : "")}
    </div>
  `;

  document.getElementById("save-detail").addEventListener("click", saveDetail);
  document.getElementById("archive-lead").addEventListener("click", () => updateLead(lead.id, { status: "archived" }));
  document.getElementById("delete-lead").addEventListener("click", () => deleteLead(lead.id));
}

async function loadLeads() {
  clearError();
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    leads = data || [];
    if (selectedLeadId && !leads.some((lead) => lead.id === selectedLeadId)) selectedLeadId = null;
    renderRows();
    renderDetail();
  } catch (error) {
    leads = [];
    renderRows();
    showError(`Unable to load leads. Check Supabase RLS policies. ${error.message || ""}`.trim());
  }
}

async function updateLead(id, values) {
  const current = leads.find((lead) => lead.id === id);
  const payload = { ...values };
  if (payload.status === "contacted" && !current?.contacted_at) {
    payload.contacted_at = new Date().toISOString();
  }

  const { error } = await supabase.from("leads").update(payload).eq("id", id);
  if (error) {
    showError("Could not update lead.");
    return;
  }
  await loadLeads();
}

async function saveDetail() {
  const status = document.getElementById("detail-status").value;
  const notes = document.getElementById("detail-notes").value.trim() || null;
  await updateLead(selectedLeadId, { status, notes });
}

async function deleteLead(id) {
  if (!window.confirm("Delete this lead permanently?")) return;
  const { error } = await supabase.from("leads").delete().eq("id", id);
  if (error) {
    showError("Could not delete lead.");
    return;
  }
  selectedLeadId = null;
  await loadLeads();
}

function exportCsv() {
  const rows = visibleLeads();
  const blob = new Blob([buildLeadsCsv(rows)], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `pratala-rerupa-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

async function showAdmin() {
  loginPanel.classList.add("hidden");
  adminPanel.classList.remove("hidden");
  logoutButton.classList.remove("hidden");
  await loadLeads();
}

async function init() {
  updateFileAccessWarning();

  const configFound = hasSupabaseConfig();
  console.log(`[Pratala Admin] Supabase config found: ${configFound}`);
  if (!configFound) {
    console.log("[Pratala Admin] Supabase client ready: false");
    showSetupError("Supabase config is missing. Create assets/js/supabase-config.js from the example file and fill in Project URL + anon public key.");
    return;
  }

  try {
    if (typeof window.getSupabaseClient !== "function") {
      throw new Error("Supabase client loader is missing.");
    }

    supabase = await window.getSupabaseClient();
    console.log("[Pratala Admin] Supabase client ready: true");
  } catch (error) {
    console.log("[Pratala Admin] Supabase client ready: false");
    showSetupError(error.message || "Supabase config is missing. Create assets/js/supabase-config.js from the example file and fill in Project URL + anon public key.");
    return;
  }

  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    if (data.session) await showAdmin();
  } catch (error) {
    showLoginError(error.message || "Unable to check current admin session.");
  }
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  clearLoginError();
  clearSetupError();
  setLoginLoading(true);
  console.log("[Pratala Admin] login attempt started");

  try {
    const configFound = hasSupabaseConfig();
    console.log(`[Pratala Admin] Supabase config found: ${configFound}`);
    if (!configFound) {
      throw new Error("Supabase config is missing. Create assets/js/supabase-config.js from the example file and fill in Project URL + anon public key.");
    }

    if (!supabase) {
      if (typeof window.getSupabaseClient !== "function") {
        throw new Error("Supabase client loader is missing.");
      }
      supabase = await window.getSupabaseClient();
      console.log("[Pratala Admin] Supabase client ready: true");
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: form.elements.email.value.trim(),
      password: form.elements.password.value
    });

    if (error) throw error;

    console.log("[Pratala Admin] login success");
    await showAdmin();
  } catch (error) {
    console.log(`[Pratala Admin] login error: ${error.message || error}`);
    showLoginError(error.message || "Network error");
  } finally {
    if (loginPanel.classList.contains("hidden")) {
      loginStatus.classList.add("hidden");
    } else {
      setLoginLoading(false);
    }
  }
});

logoutButton.addEventListener("click", async () => {
  await supabase.auth.signOut();
  window.location.reload();
});

leadRows.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  selectedLeadId = button.dataset.view;
  renderRows();
  renderDetail();
});

searchInput.addEventListener("input", renderRows);
statusFilter.addEventListener("change", renderRows);
document.getElementById("export-csv").addEventListener("click", exportCsv);

init();
