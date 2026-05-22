export const WHATSAPP_NUMBER = "9962474481";
export const WHATSAPP_INTL = "919962474481";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(message)}`;
}