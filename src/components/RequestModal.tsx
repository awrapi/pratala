"use client";

import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { submitLead } from "@/lib/supabase";
import {
  directWhatsappLink,
  normalizeIndonesianPhone,
  successWhatsappLink
} from "@/lib/whatsapp";
import { workshopData } from "@/data/workshopData";

export type RequestPrefill = {
  businessType?: string;
  preferredConcept?: string;
};

type RequestModalProps = {
  isOpen: boolean;
  prefill: RequestPrefill;
  onClose: () => void;
};

type FormValues = {
  full_name: string;
  business_name: string;
  business_type: string;
  whatsapp: string;
  email: string;
  location: string;
  preferred_concept: string;
  message: string;
};

const initialValues: FormValues = {
  full_name: "",
  business_name: "",
  business_type: "",
  whatsapp: "",
  email: "",
  location: "",
  preferred_concept: "",
  message:
    "Halo Pratala Rerupa, saya ingin dibuatkan preview website untuk bisnis saya. Saya ingin tampil lebih profesional, jelas, dan mudah diarahkan ke WhatsApp."
};

const businessOptions = [...workshopData.map((item) => item.title), "Other"];

export function RequestModal({ isOpen, prefill, onClose }: RequestModalProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setValues({
      ...initialValues,
      business_type: prefill.businessType || "",
      preferred_concept: prefill.preferredConcept || prefill.businessType || ""
    });
    setErrors({});
    setFormError("");
    setIsSubmitting(false);
    setIsSuccess(false);
    document.body.classList.add("modal-open");
    window.setTimeout(() => firstFieldRef.current?.focus(), 80);

    return () => {
      document.body.classList.remove("modal-open");
      lastFocusedRef.current?.focus?.();
    };
  }, [isOpen, prefill.businessType, prefill.preferredConcept]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [isOpen, onClose]);

  function updateValue(name: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    const required: Array<keyof FormValues> = [
      "full_name",
      "business_name",
      "business_type",
      "whatsapp",
      "message"
    ];

    required.forEach((field) => {
      if (!values[field].trim()) nextErrors[field] = "Field ini wajib diisi.";
    });

    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Format email belum valid.";
    }

    const phone = normalizeIndonesianPhone(values.whatsapp);
    if (values.whatsapp && !/^62\d{8,15}$/.test(phone)) {
      nextErrors.whatsapp = "Gunakan format 08..., 628..., atau +628...";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await submitLead({
        full_name: values.full_name.trim(),
        business_name: values.business_name.trim(),
        business_type: values.business_type.trim(),
        whatsapp: values.whatsapp.trim(),
        whatsapp_normalized: normalizeIndonesianPhone(values.whatsapp),
        email: values.email.trim() || null,
        location: values.location.trim() || null,
        preferred_concept: values.preferred_concept.trim() || null,
        message: values.message.trim(),
        source_page: "landing_page"
      });
      setIsSuccess(true);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Request belum berhasil dikirim. Coba lagi sebentar lagi, atau hubungi kami lewat WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function returnHome() {
    onClose();
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onKeyDownCapture={(event) => {
            if (event.key === "Escape") onClose();
          }}
          role="presentation"
        >
          <button
            aria-label="Tutup form request"
            className="modal-backdrop absolute inset-0"
            onClick={onClose}
            type="button"
          />
          <motion.div
            ref={dialogRef}
            aria-labelledby="request-modal-title"
            aria-modal="true"
            className="modal-panel"
            initial={{ y: 36, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 24, scale: 0.98 }}
            role="dialog"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="modal-header">
              <div>
                <p className="label">Pratala Rerupa</p>
                <h2 className="mt-2 font-display" id="request-modal-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
                  Minta Preview Website
                </h2>
                <p className="mt-2 max-w-xl" style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--ink-2)' }}>
                  Ceritakan bisnismu. Kami akan bantu susun arah website yang terasa rapi,
                  dipercaya, dan siap diarahkan ke WhatsApp.
                </p>
              </div>
              <button className="icon-button" onClick={onClose} type="button" aria-label="Tutup form" style={{ flexShrink: 0 }}>
                ✕
              </button>
            </div>

            <form className="modal-body" id="request-form" noValidate onSubmit={handleSubmit} style={{ display: 'grid', gap: 20 }}>
              {isSuccess ? (
                <div className="modal-success" id="request-success">
                  <div className="modal-success-icon">✓</div>
                  <p className="label mt-5" style={{ justifyContent: 'center' }}>Request terkirim!</p>
                  <h3 style={{ marginTop: 12, fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)' }}>
                    Terima kasih, kami akan menghubungi kamu.
                  </h3>
                  <p style={{ marginTop: 10, maxWidth: 480, margin: '10px auto 0', fontSize: '0.95rem', lineHeight: 1.72, color: 'var(--ink-2)' }}>
                    Kamu bisa langsung lanjut chat di WhatsApp atau kembali melihat contoh arah
                    website lain.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a className="btn-primary" href={successWhatsappLink} target="_blank" rel="noreferrer">
                      Diskusi via WhatsApp
                    </a>
                    <button className="btn-secondary" onClick={returnHome} type="button">
                      Kembali ke Beranda
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                    <Field label="Nama lengkap" error={errors.full_name}>
                      <input
                        ref={firstFieldRef}
                        aria-invalid={Boolean(errors.full_name)}
                        autoComplete="name"
                        name="full_name"
                        onChange={(event) => updateValue("full_name", event.target.value)}
                        value={values.full_name}
                      />
                    </Field>
                    <Field label="Nama bisnis" error={errors.business_name}>
                      <input
                        aria-invalid={Boolean(errors.business_name)}
                        name="business_name"
                        onChange={(event) => updateValue("business_name", event.target.value)}
                        value={values.business_name}
                      />
                    </Field>
                    <Field label="Jenis bisnis" error={errors.business_type}>
                      <select
                        aria-invalid={Boolean(errors.business_type)}
                        name="business_type"
                        onChange={(event) => updateValue("business_type", event.target.value)}
                        value={values.business_type}
                      >
                        <option value="">Pilih jenis bisnis</option>
                        {businessOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Nomor WhatsApp" error={errors.whatsapp}>
                      <input
                        aria-invalid={Boolean(errors.whatsapp)}
                        inputMode="tel"
                        name="whatsapp"
                        onChange={(event) => updateValue("whatsapp", event.target.value)}
                        placeholder="082246511871"
                        value={values.whatsapp}
                      />
                    </Field>
                    <Field label="Email" error={errors.email}>
                      <input
                        aria-invalid={Boolean(errors.email)}
                        autoComplete="email"
                        name="email"
                        onChange={(event) => updateValue("email", event.target.value)}
                        type="email"
                        value={values.email}
                      />
                    </Field>
                    <Field label="Lokasi bisnis" error={errors.location}>
                      <input
                        name="location"
                        onChange={(event) => updateValue("location", event.target.value)}
                        value={values.location}
                      />
                    </Field>
                  </div>
                  <Field label="Preferred concept" error={errors.preferred_concept}>
                    <input
                      name="preferred_concept"
                      onChange={(event) => updateValue("preferred_concept", event.target.value)}
                      value={values.preferred_concept}
                    />
                  </Field>
                  <Field label="Pesan / kebutuhan website" error={errors.message}>
                    <textarea
                      aria-invalid={Boolean(errors.message)}
                      name="message"
                      onChange={(event) => updateValue("message", event.target.value)}
                      rows={5}
                      value={values.message}
                    />
                  </Field>

                  {formError ? (
                    <div style={{ borderRadius: 16, border: '1.5px solid #fca5a5', background: '#fef2f2', padding: '14px 18px', fontSize: '0.9rem', lineHeight: 1.65, color: '#b91c1c' }}>
                      {formError}
                    </div>
                  ) : null}

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, borderTop: '1.5px solid var(--border)', paddingTop: 20, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                    <a className="btn-ghost" href={directWhatsappLink} target="_blank" rel="noreferrer" style={{ marginRight: 'auto' }}>
                      Chat dulu via WA
                    </a>
                    <button className="btn-secondary compact" onClick={onClose} type="button">
                      Batal
                    </button>
                    <button className="btn-primary" disabled={isSubmitting} type="submit">
                      {isSubmitting ? "Mengirim..." : "Kirim Request →"}
                    </button>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
      {error ? <small>{error}</small> : null}
    </label>
  );
}
