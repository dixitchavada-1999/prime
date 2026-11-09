import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { company } from '../data/company'
import { useScrolled } from '../hooks/useScrolled'
import { scrollToSection, whatsappLink } from '../lib/scroll'

/** Floating WhatsApp shortcut and back-to-top button. */
export default function FloatingActions() {
  const scrolled = useScrolled(480)
  const { contact } = company

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {scrolled && (
          <motion.button
            key="top"
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => scrollToSection('home')}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-steel-200 bg-white text-navy shadow-card-hover transition-colors hover:bg-navy hover:text-white"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
      <a
        href={whatsappLink(contact.whatsappNumber, contact.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgb(37_211_102/0.7)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  )
}
