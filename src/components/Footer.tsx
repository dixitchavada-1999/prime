import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { company, navLinks } from '../data/company'
import { services } from '../data/services'
import { scrollToSection } from '../lib/scroll'
import Logo from './ui/Logo'
import SocialIcon from './ui/SocialIcon'

const year = new Date().getFullYear()

export default function Footer() {
  const { contact, social, footer, tagline } = company

  const go = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <footer className="relative bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/60 to-transparent" aria-hidden="true" />

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">{footer.description}</p>
          <p className="mt-4 font-display text-sm font-semibold text-orange">{tagline}</p>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {social.map(({ label, url, platform }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-orange hover:bg-orange hover:text-white"
                >
                  <SocialIcon platform={platform} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <nav className="lg:col-span-2" aria-label="Footer quick links">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-5 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  onClick={go(link.href)}
                  className="text-sm text-white/65 transition-colors hover:text-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href="#services"
                  onClick={go('services')}
                  className="text-sm text-white/65 transition-colors hover:text-orange"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-5 space-y-3.5 text-sm text-white/65">
            <li>
              <a href={`tel:${contact.phoneDial}`} className="flex items-start gap-3 transition-colors hover:text-orange">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-start gap-3 break-all transition-colors hover:text-orange">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-orange"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.city}, {contact.address.state} {contact.address.postalCode}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} {footer.legalName}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 font-medium text-white/70 transition-colors hover:border-orange hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
