// WhatsApp deep-link message builder utility
// DEMO PLACEHOLDER — Primary WhatsApp number for Needle Master (03335115170)
export const PRIMARY_WHATSAPP_NUMBER = '923335115170';

/**
 * Assembles fields into a structured text message and opens wa.me link
 * @param {Record<string, any>} fields Key-value dictionary of form values
 * @param {string} title Optional header for the message
 */
export function sendToWhatsApp(fields, title = 'Inquiry from Needle Master Website') {
  const lines = [`*${title}*`, ''];
  
  Object.entries(fields).forEach(([k, v]) => {
    if (v !== undefined && v !== null && String(v).trim() !== '') {
      // Handle nested arrays or objects cleanly
      if (typeof v === 'object' && !Array.isArray(v)) {
        lines.push(`*${k}:*`);
        Object.entries(v).forEach(([subK, subV]) => {
          if (subV) lines.push(`  • ${subK}: ${subV}`);
        });
      } else if (Array.isArray(v)) {
        lines.push(`*${k}:*`);
        v.forEach((item, idx) => {
          lines.push(`  ${idx + 1}. ${typeof item === 'object' ? JSON.stringify(item) : item}`);
        });
      } else {
        lines.push(`*${k}:* ${v}`);
      }
    }
  });

  const message = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${message}`, '_blank');
}
