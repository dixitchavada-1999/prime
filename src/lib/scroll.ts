/**
 * Smoothly scroll to a section by id without a page reload.
 * Also updates the URL hash so links are shareable.
 */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id)
  if (!target) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })

  if (history.replaceState) {
    history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`)
  }
}

/** Build a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** Build a mailto link with subject and body. */
export function mailtoLink(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
