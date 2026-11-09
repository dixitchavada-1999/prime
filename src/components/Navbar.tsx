import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, Phone, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { company, navLinks } from '../data/company'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { scrollToSection } from '../lib/scroll'
import Logo from './ui/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(32)
  const sectionIds = useMemo(() => navLinks.map((l) => l.href), [])
  const active = useActiveSection(sectionIds)

  // Lock body scroll while the mobile menu is open and close on Escape.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the menu automatically if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const go = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (open) {
      setOpen(false)
      // Let the menu finish closing (scroll lock released) before scrolling;
      // changing the body overflow mid-scroll cancels a smooth scroll in Chrome.
      window.setTimeout(() => scrollToSection(id), 300)
    } else {
      scrollToSection(id)
    }
  }

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-white/10 bg-navy/90 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.5)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[4.5rem] items-center justify-between lg:h-20" aria-label="Primary">
        <a href="#home" onClick={go('home')} className="shrink-0" aria-label="Prime Engineering, back to top">
          <Logo />
        </a>

        {/* Desktop links (from xl, the hamburger menu is used below that) */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href} className="relative">
                <a
                  href={`#${link.href}`}
                  onClick={go(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative block whitespace-nowrap rounded-md px-3 py-2 text-[0.9rem] font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-orange"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={`tel:${company.contact.phoneDial}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80 transition-colors hover:border-orange hover:text-orange"
            aria-label={`Call ${company.contact.phoneDisplay}`}
            title={company.contact.phoneDisplay}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            onClick={go('contact')}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-orange px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/10 bg-navy xl:hidden"
          >
            <div className="container-x max-h-[calc(100dvh-4.5rem)] overflow-y-auto py-4">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={`#${link.href}`}
                      onClick={go(link.href)}
                      aria-current={active === link.href ? 'page' : undefined}
                      className={`flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        active === link.href
                          ? 'bg-white/10 text-white'
                          : 'text-white/75 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {active === link.href && <span className="h-1.5 w-1.5 rounded-full bg-orange" />}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                <a
                  href={`tel:${company.contact.phoneDial}`}
                  className="inline-flex items-center gap-2 px-3 text-sm font-medium text-white/80"
                >
                  <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
                  {company.contact.phoneDisplay}
                </a>
                <a
                  href="#contact"
                  onClick={go('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange px-4 py-3 text-sm font-semibold text-white"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
