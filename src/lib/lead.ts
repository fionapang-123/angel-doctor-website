export function normalizeContact(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

export function isEmailContact(contact: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
}

export function isWhatsAppLikeContact(contact: string) {
  const digits = contact.replace(/[^\d]/g, "");
  return digits.length >= 7 && digits.length <= 16;
}

export function isValidLeadContact(contact: string) {
  return isEmailContact(contact) || isWhatsAppLikeContact(contact);
}

export function wantsLocalSupport(value: unknown) {
  if (value === true) return true;
  if (typeof value !== "string") return false;

  const normalized = value.toLowerCase();
  return normalized.includes("yes") || normalized.includes("medical escort");
}

export function hasLeadStorageConfig() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function hasTeamNotificationConfig() {
  return Boolean(process.env.RESEND_API_KEY?.trim().startsWith("re_"));
}
