console.log("[Pratala] request-form.js loaded");
console.log(`[Pratala] request-form.js url: ${document.currentScript?.src || "unknown"}`);
console.log(`[Pratala] page url: ${window.location.href}`);
window.PRATALA_REQUEST_FORM_DEBUG = {
  loaded: true,
  scriptUrl: document.currentScript?.src || "",
  pageUrl: window.location.href
};

const BUSINESS_TYPES = [
  "Cafe & Eatery",
  "Clinic & Healthcare",
  "Property & Residence",
  "Travel & Tour",
  "Automotive Showroom",
  "Education & Course",
  "Beauty & Wellness",
  "Business Profile",
  "Other"
];

const DIRECT_WHATSAPP_URL =
  "https://wa.me/6282246511871?text=Halo%20Adit%2C%20saya%20ingin%20diskusi%20tentang%20pembuatan%20website%20untuk%20bisnis%20saya.";

const SUCCESS_WHATSAPP_URL =
  "https://wa.me/6282246511871?text=Halo%20Adit%2C%20saya%20sudah%20mengirim%20request%20website%20concept%20di%20Pratala%20Rerupa.%20Saya%20ingin%20lanjut%20diskusi%20tentang%20kebutuhan%20website%20bisnis%20saya.";

let modal;
let form;
let lastFocusedElement;

function normalizeIndonesianPhone(input) {
  let value = String(input || "").trim();
  value = value.replace(/[\s\-()]/g, "");
  value = value.replace(/^\+/, "");

  if (value.startsWith("08")) return `62${value.slice(1)}`;
  if (value.startsWith("8")) return `62${value}`;
  if (value.startsWith("62")) return value;
  return value;
}

window.normalizeIndonesianPhone = normalizeIndonesianPhone;

function conceptFromText(text) {
  const normalized = String(text || "").replace(/\s+Concept$/i, "").trim();
  const match = BUSINESS_TYPES.find((type) => normalized.toLowerCase().includes(type.toLowerCase()));
  return match || "";
}

function selectedWorkshopConcept() {
  const activeTab = document.querySelector(".workshop-tab.active");
  const workshopTypeByKey = {
    cafe: "Cafe & Eatery",
    clinic: "Clinic & Healthcare",
    property: "Property & Residence",
    travel: "Travel & Tour",
    automotive: "Automotive Showroom",
    education: "Education & Course",
    beauty: "Beauty & Wellness",
    business: "Business Profile"
  };

  return workshopTypeByKey[activeTab?.dataset.workshop] || document.querySelector("#workshop-title")?.textContent.trim() || "";
}

function requestPrefillFromButton(button) {
  if (button.hasAttribute("data-workshop-request")) {
    const workshopConcept = selectedWorkshopConcept();
    return {
      preferred_concept: workshopConcept,
      business_type: workshopConcept
    };
  }

  const cardTitle = button.closest("#concept-grid > div")?.querySelector("h3")?.textContent;
  const cardConcept = conceptFromText(cardTitle);
  const preferredConcept = button.dataset.concept || cardConcept || "";
  const businessType = button.dataset.businessType || preferredConcept;

  return {
    preferred_concept: preferredConcept,
    business_type: businessType
  };
}

function makeField(name, label, control) {
  return `
    <label class="block">
      <span class="font-label-mono text-[11px] uppercase tracking-widest text-text-muted">${label}</span>
      ${control}
      <span class="request-error mt-1 hidden text-sm text-error" data-error-for="${name}"></span>
    </label>
  `;
}

function createModal() {
  modal = document.getElementById("request-modal");
  form = document.getElementById("request-form");
  if (modal && form) return;

  const options = BUSINESS_TYPES.map((type) => `<option value="${type}">${type}</option>`).join("");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div class="fixed inset-0 z-[100] hidden items-center justify-center px-5 py-8" id="request-modal" role="dialog" aria-modal="true" aria-labelledby="request-modal-title">
      <div class="absolute inset-0 bg-primary/35 backdrop-blur-sm" data-request-close></div>
      <div class="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border border-border-soft bg-surface-white ambient-shadow">
        <div class="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-border-soft bg-surface-white/95 p-6 backdrop-blur">
          <div>
            <p class="font-label-mono text-label-mono uppercase tracking-widest text-text-muted">Pratala Rerupa</p>
            <h2 class="mt-2 font-headline-md text-headline-md text-primary" id="request-modal-title">Request Website Concept</h2>
            <p class="mt-2 font-body-md text-body-md text-text-muted">Ceritakan bisnis kamu. Adit akan bantu arahkan konsep website yang paling cocok.</p>
          </div>
          <button class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-soft text-primary transition hover:bg-surface" type="button" id="request-modal-close" aria-label="Close request form" data-request-close>
            <span class="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>
        <form class="space-y-5 p-6" id="request-form" novalidate>
          <div class="space-y-5" id="request-form-fields">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              ${makeField("full_name", "Nama", '<input class="mt-2 w-full rounded-lg border-border-soft bg-surface-white" name="full_name" required autocomplete="name" />')}
              ${makeField("business_name", "Nama Bisnis", '<input class="mt-2 w-full rounded-lg border-border-soft bg-surface-white" name="business_name" required />')}
              ${makeField("business_type", "Jenis Bisnis", `<select class="mt-2 w-full rounded-lg border-border-soft bg-surface-white" name="business_type" required><option value="">Pilih jenis bisnis</option>${options}</select>`)}
              ${makeField("whatsapp", "Nomor WhatsApp", '<input class="mt-2 w-full rounded-lg border-border-soft bg-surface-white" name="whatsapp" required inputmode="tel" placeholder="082246511871" />')}
              ${makeField("email", "Email", '<input class="mt-2 w-full rounded-lg border-border-soft bg-surface-white" name="email" type="email" autocomplete="email" />')}
              ${makeField("location", "Lokasi Bisnis", '<input class="mt-2 w-full rounded-lg border-border-soft bg-surface-white" name="location" />')}
            </div>
            ${makeField("preferred_concept", "Konsep yang Dipilih", '<input class="mt-2 w-full rounded-lg border-border-soft bg-surface-white" name="preferred_concept" readonly />')}
            ${makeField("message", "Pesan / Kebutuhan Website", '<textarea class="mt-2 min-h-[130px] w-full rounded-lg border-border-soft bg-surface-white" name="message" required placeholder="Halo Adit, saya ingin dibuatkan konsep website untuk bisnis saya. Saya ingin website yang terlihat profesional, mudah dipahami, dan bisa mengarahkan pengunjung ke WhatsApp."></textarea>')}
            <div class="hidden rounded-lg border border-error/20 bg-error-container p-4 text-sm text-error" id="request-form-alert"></div>
          </div>
          <div class="hidden rounded-2xl border border-art-lime/30 bg-surface-white p-7 text-center shadow-sm" id="request-success">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-art-lime/30 bg-art-lime/10 text-primary">
              <span class="material-symbols-outlined text-[24px]">check</span>
            </div>
            <p class="mt-5 font-label-mono text-label-mono uppercase tracking-widest text-text-muted">PRATALA RERUPA</p>
            <h3 class="mt-3 font-headline-md text-headline-md text-primary">Terima kasih, request kamu sudah terkirim.</h3>
            <p class="mx-auto mt-3 max-w-xl font-body-md text-body-md text-text-muted">Adit akan menghubungi kamu lewat WhatsApp untuk menanyakan detail bisnis dan arah website yang paling cocok.</p>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-white transition hover:bg-art-cobalt" id="request-whatsapp-success" href="${SUCCESS_WHATSAPP_URL}" target="_blank" rel="noopener" data-skip-cta>
              Chat Adit di WhatsApp
              <span class="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
              <button class="inline-flex items-center justify-center rounded-lg border border-border-soft px-5 py-3 text-primary transition hover:bg-surface" id="request-home-success" type="button">Kembali ke Beranda</button>
            </div>
          </div>
          <div class="flex flex-col-reverse gap-3 border-t border-border-soft pt-5 sm:flex-row sm:justify-end" id="request-form-actions">
            <button class="rounded-lg border border-border-soft px-5 py-3 text-primary transition hover:bg-surface" type="button" data-request-close>Cancel</button>
            <button class="rounded-lg bg-primary px-6 py-3 text-white transition hover:bg-art-cobalt disabled:cursor-not-allowed disabled:opacity-60" id="request-submit" type="submit">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(wrapper.firstElementChild);
  modal = document.getElementById("request-modal");
  form = document.getElementById("request-form");
}

function setError(name, message) {
  const error = form.querySelector(`[data-error-for="${name}"]`);
  const field = form.elements[name];
  if (!error || !field) return;

  error.textContent = message;
  error.classList.toggle("hidden", !message);
  field.setAttribute("aria-invalid", message ? "true" : "false");
}

function clearErrors() {
  form.querySelectorAll("[data-error-for]").forEach((node) => {
    node.textContent = "";
    node.classList.add("hidden");
  });
  form.querySelectorAll("[aria-invalid]").forEach((node) => node.removeAttribute("aria-invalid"));
  document.getElementById("request-form-alert").classList.add("hidden");
}

function setSuccessMode(isSuccess) {
  document.getElementById("request-form-fields")?.classList.toggle("hidden", isSuccess);
  document.getElementById("request-form-actions")?.classList.toggle("hidden", isSuccess);
  document.getElementById("request-success")?.classList.toggle("hidden", !isSuccess);
}

function resetFormState() {
  const submitButton = document.getElementById("request-submit");
  setSuccessMode(false);
  clearErrors();
  form.classList.remove("request-done");
  form.querySelectorAll("input, select, textarea, button").forEach((node) => {
    node.disabled = false;
  });
  if (submitButton) {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Request";
  }
  document.getElementById("request-whatsapp-success")?.setAttribute("href", SUCCESS_WHATSAPP_URL);
}

function trimmedValue(name) {
  return String(form.elements[name]?.value || "").trim();
}

function validateForm() {
  clearErrors();
  let valid = true;
  const required = ["full_name", "business_name", "business_type", "whatsapp", "message"];

  required.forEach((name) => {
    if (!trimmedValue(name)) {
      setError(name, "Field ini wajib diisi.");
      valid = false;
    }
  });

  const email = trimmedValue("email");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("email", "Format email belum valid.");
    valid = false;
  }

  const phone = normalizeIndonesianPhone(trimmedValue("whatsapp"));
  if (trimmedValue("whatsapp") && !/^62\d{8,15}$/.test(phone)) {
    setError("whatsapp", "Gunakan format 08..., 628..., atau +628...");
    valid = false;
  }

  return valid;
}

function openModal(prefill = {}) {
  if (!modal || !form) {
    console.warn("[Pratala] request modal found: false");
    return;
  }

  lastFocusedElement = document.activeElement;
  resetFormState();
  form.reset();

  const preferredConcept = prefill.preferred_concept || prefill.concept || prefill.business_type || "";
  const businessType = prefill.business_type || prefill.concept || preferredConcept;
  console.log(`[Pratala] selected concept: ${preferredConcept || businessType || "none"}`);
  form.elements.preferred_concept.value = preferredConcept;
  form.elements.business_type.value = BUSINESS_TYPES.includes(businessType) ? businessType : "";
  form.elements.message.value =
    "Halo Adit, saya ingin dibuatkan konsep website untuk bisnis saya. Saya ingin website yang terlihat profesional, mudah dipahami, dan bisa mengarahkan pengunjung ke WhatsApp.";

  modal.classList.remove("hidden");
  modal.classList.remove("modal-closing");
  modal.classList.add("flex");
  console.log("[Pratala] open modal triggered");
  document.body.classList.add("overflow-hidden");
  window.setTimeout(() => form.elements.full_name.focus(), 50);
}

function closeModal() {
  if (modal.classList.contains("modal-closing")) return;
  modal.classList.add("modal-closing");
  window.setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex", "modal-closing");
    document.body.classList.remove("overflow-hidden");
    lastFocusedElement?.focus?.();
  }, 220);
}

function returnHomeFromSuccess() {
  closeModal();
  resetFormState();
  form.reset();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openDirectWhatsapp() {
  window.open(DIRECT_WHATSAPP_URL, "_blank", "noopener");
}

function collectLead() {
  const whatsapp = trimmedValue("whatsapp");
  const lead = {
    full_name: trimmedValue("full_name"),
    business_name: trimmedValue("business_name"),
    business_type: trimmedValue("business_type"),
    whatsapp,
    whatsapp_normalized: normalizeIndonesianPhone(whatsapp),
    email: trimmedValue("email") || null,
    location: trimmedValue("location") || null,
    preferred_concept: trimmedValue("preferred_concept") || null,
    message: trimmedValue("message"),
    source_page: "landing_page"
  };

  return lead;
}

async function maybeNotifyByEmail(_lead) {
  // TODO: Add email notification later when an email provider is configured.
}

async function submitForm(event) {
  event.preventDefault();
  if (!validateForm()) return;

  const submitButton = document.getElementById("request-submit");
  const alert = document.getElementById("request-form-alert");
  const lead = collectLead();

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";
  alert.classList.add("hidden");
  let submitted = false;

  try {
    if (typeof window.getSupabaseClient !== "function") {
      throw new Error("Supabase public config is not set.");
    }

    const supabase = await window.getSupabaseClient();
    const { error } = await supabase.from("leads").insert(lead);
    if (error) throw error;

    await maybeNotifyByEmail(lead);
    form.classList.add("request-done");
    setSuccessMode(true);
    submitButton.disabled = false;
    submitButton.textContent = "Submit Request";
    submitted = true;
  } catch (error) {
    alert.textContent = error.message.includes("Supabase public config")
      ? "Supabase belum dikonfigurasi. Tambahkan URL dan anon key public sebelum menerima request."
      : "Request belum berhasil dikirim. Coba lagi sebentar lagi, atau chat Adit lewat WhatsApp.";
    alert.classList.remove("hidden");
  } finally {
    if (!submitted) {
      submitButton.disabled = false;
      submitButton.textContent = "Submit Request";
    }
  }
}

function bindCtas() {
  document.addEventListener("click", (event) => {
    const whatsappButton = event.target.closest("[data-whatsapp-chat]");
    if (whatsappButton) {
      event.preventDefault();
      openDirectWhatsapp();
      return;
    }

    const requestButton = event.target.closest("[data-open-request-modal]");
    if (!requestButton || requestButton.hasAttribute("data-skip-cta")) return;

    event.preventDefault();
    openModal(requestPrefillFromButton(requestButton));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createModal();
  console.log(`[Pratala] request modal found: ${Boolean(modal && form)}`);
  bindCtas();
  form.addEventListener("submit", submitForm);
  document.getElementById("request-whatsapp-success")?.setAttribute("href", SUCCESS_WHATSAPP_URL);
  document.getElementById("request-home-success")?.addEventListener("click", returnHomeFromSuccess);
  modal.querySelectorAll("[data-request-close]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
});
