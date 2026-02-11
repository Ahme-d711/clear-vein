/**
 * WhatsApp Utility Functions
 * Professional WhatsApp integration for booking and contact
 */

const WHATSAPP_NUMBER = '201018939831'; // Egypt format without +

/**
 * Generates a WhatsApp Web/App URL with pre-filled message
 * @param message - Optional custom message to pre-fill
 * @returns WhatsApp URL
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = 'Hello! I would like to book an appointment for vein treatment.';
  const text = encodeURIComponent(message || defaultMessage);
  
  // Use wa.me for universal compatibility (works on both mobile and desktop)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * Opens WhatsApp in a new window/tab
 * @param message - Optional custom message to pre-fill
 */
export function openWhatsApp(message?: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
