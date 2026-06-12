export const ADIT_WHATSAPP_NUMBER = "6282246511871";

export function normalizeIndonesianPhone(input: string) {
  let value = String(input || "").trim();
  value = value.replace(/[\s\-()]/g, "");
  value = value.replace(/^\+/, "");

  if (value.startsWith("08")) return `62${value.slice(1)}`;
  if (value.startsWith("8")) return `62${value}`;
  if (value.startsWith("62")) return value;
  return value;
}

export function buildWhatsappLink(message: string, phone = ADIT_WHATSAPP_NUMBER) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const directWhatsappLink = buildWhatsappLink(
  "Halo Pratala Rerupa, saya ingin diskusi tentang pembuatan website untuk bisnis saya."
);

export const successWhatsappLink = buildWhatsappLink(
  "Halo Pratala Rerupa, saya sudah mengirim request website. Saya ingin lanjut diskusi tentang kebutuhan website bisnis saya."
);
