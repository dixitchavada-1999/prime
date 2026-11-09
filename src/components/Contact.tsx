import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { company } from '../data/company'
import { mailtoLink, whatsappLink } from '../lib/scroll'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

interface FormValues {
  name: string
  companyName: string
  phone: string
  email: string
  message: string
}

type Errors = Partial<Record<keyof FormValues, string>>

const initial: FormValues = { name: '', companyName: '', phone: '', email: '', message: '' }

function validate(v: FormValues): Errors {
  const errors: Errors = {}
  if (v.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[+\d][\d\s\-()]{6,19}$/.test(v.phone.trim())) errors.phone = 'Please enter a valid phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) errors.email = 'Please enter a valid email address.'
  if (v.message.trim().length < 10) errors.message = 'Please describe your requirement (at least 10 characters).'
  return errors
}

function buildMessage(v: FormValues): string {
  return [
    `Enquiry for ${company.name}`,
    '',
    `Name: ${v.name.trim()}`,
    v.companyName.trim() ? `Company: ${v.companyName.trim()}` : null,
    `Phone: ${v.phone.trim()}`,
    `Email: ${v.email.trim()}`,
    '',
    'Requirement:',
    v.message.trim(),
  ]
    .filter((line): line is string => line !== null)
    .join('\n')
}

const inputBase =
  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy placeholder:text-steel/70 transition-colors focus:outline-none focus:ring-2 focus:ring-orange/40'

export default function Contact() {
  const { contact } = company
  const [values, setValues] = useState<FormValues>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})
  const [ready, setReady] = useState(false)

  const update = (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: e.target.value }
    setValues(next)
    if (touched[field]) setErrors(validate(next))
    if (ready) setReady(false)
  }

  const blur = (field: keyof FormValues) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    setTouched({ name: true, phone: true, email: true, message: true })
    if (Object.keys(errs).length === 0) {
      setReady(true)
    } else {
      setReady(false)
      const first = Object.keys(errs)[0]
      document.getElementById(`field-${first}`)?.focus()
    }
  }

  const composed = buildMessage(values)
  const waHref = whatsappLink(contact.whatsappNumber, composed)
  const mailHref = mailtoLink(contact.email, `Machining enquiry from ${values.name.trim() || 'website'}`, composed)

  const addressLines = [
    contact.address.line1,
    contact.address.line2,
    `${contact.address.city}, ${contact.address.state} ${contact.address.postalCode}`,
    contact.address.country,
  ].filter(Boolean)

  const infoCards = [
    {
      icon: Phone,
      label: 'Call us',
      value: contact.phoneDisplay,
      href: `tel:${contact.phoneDial}`,
      hint: 'Click to call',
      external: false,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: contact.phoneDisplay,
      href: whatsappLink(contact.whatsappNumber, contact.whatsappMessage),
      hint: 'Chat on WhatsApp',
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      hint: 'Send an email',
      external: false,
    },
  ]

  return (
    <section id="contact" className="section-pad bg-steel-100" aria-labelledby="contact-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's talk about your next component"
          description="Call, message or email us with your drawing and quantity. We will respond with a clear quote and lead time."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact details */}
          <div className="space-y-4 lg:col-span-2">
            {infoCards.map(({ icon: Icon, label, value, href, hint, external }, i) => (
              <Reveal key={label} delay={0.06 * i}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-steel-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-orange/50 hover:shadow-card-hover"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-steel">{label}</span>
                    <span className="block truncate text-base font-semibold text-navy">{value}</span>
                    <span className="block text-xs text-steel">{hint}</span>
                  </span>
                  {external && <ExternalLink className="h-4 w-4 shrink-0 text-steel" aria-hidden="true" />}
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-steel-200 bg-white p-5 shadow-card">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-steel">Factory address</span>
                    <address className="mt-1 text-sm not-italic leading-relaxed text-navy">
                      {addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <a
                      href={contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
                    >
                      Get directions
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4 border-t border-steel-200 pt-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-steel">Working hours</span>
                    <ul className="mt-1 space-y-0.5 text-sm text-navy">
                      {contact.workingHours.map((w) => (
                        <li key={w.days}>
                          <span className="font-medium">{w.days}:</span> {w.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {contact.googleMapsEmbedUrl && (
              <Reveal delay={0.25}>
                <div className="overflow-hidden rounded-2xl border border-steel-200 shadow-card">
                  <iframe
                    src={contact.googleMapsEmbedUrl}
                    title="Prime Engineering factory location on Google Maps"
                    className="h-56 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            )}
          </div>

          {/* Enquiry form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-steel-200 bg-white p-6 shadow-card sm:p-8"
              aria-describedby="form-note"
            >
              <h3 className="text-xl font-semibold text-navy">Send an enquiry</h3>
              <p id="form-note" className="mt-1 text-sm text-steel">
                Fill in your details and requirement. Your enquiry will open in WhatsApp or your email
                app, ready to send. This website does not store or transmit form data on its own.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Your name" required error={touched.name ? errors.name : undefined}>
                  <input
                    id="field-name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update('name')}
                    onBlur={blur('name')}
                    placeholder="Full name"
                    aria-invalid={touched.name && !!errors.name}
                    aria-describedby={touched.name && errors.name ? 'error-name' : undefined}
                    className={`${inputBase} ${touched.name && errors.name ? 'border-red-400' : 'border-steel-200 focus:border-orange'}`}
                  />
                </Field>
                <Field id="companyName" label="Company" error={undefined}>
                  <input
                    id="field-companyName"
                    type="text"
                    autoComplete="organization"
                    value={values.companyName}
                    onChange={update('companyName')}
                    placeholder="Company name (optional)"
                    className={`${inputBase} border-steel-200 focus:border-orange`}
                  />
                </Field>
                <Field id="phone" label="Phone" required error={touched.phone ? errors.phone : undefined}>
                  <input
                    id="field-phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={values.phone}
                    onChange={update('phone')}
                    onBlur={blur('phone')}
                    placeholder="+91 98765 43210"
                    aria-invalid={touched.phone && !!errors.phone}
                    aria-describedby={touched.phone && errors.phone ? 'error-phone' : undefined}
                    className={`${inputBase} ${touched.phone && errors.phone ? 'border-red-400' : 'border-steel-200 focus:border-orange'}`}
                  />
                </Field>
                <Field id="email" label="Email" required error={touched.email ? errors.email : undefined}>
                  <input
                    id="field-email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={values.email}
                    onChange={update('email')}
                    onBlur={blur('email')}
                    placeholder="you@company.com"
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={touched.email && errors.email ? 'error-email' : undefined}
                    className={`${inputBase} ${touched.email && errors.email ? 'border-red-400' : 'border-steel-200 focus:border-orange'}`}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field id="message" label="Requirement" required error={touched.message ? errors.message : undefined}>
                    <textarea
                      id="field-message"
                      rows={5}
                      value={values.message}
                      onChange={update('message')}
                      onBlur={blur('message')}
                      placeholder="Part description, material, quantity, tolerance and delivery expectation. Mention if you have a drawing to share."
                      aria-invalid={touched.message && !!errors.message}
                      aria-describedby={touched.message && errors.message ? 'error-message' : undefined}
                      className={`${inputBase} resize-y ${touched.message && errors.message ? 'border-red-400' : 'border-steel-200 focus:border-orange'}`}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" variant="secondary">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Prepare Enquiry
                </Button>
                <span className="text-xs text-steel">Fields marked * are required.</span>
              </div>

              <AnimatePresence>
                {ready && (
                  <motion.div
                    key="ready"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    role="status"
                    className="mt-6 rounded-xl border border-orange/30 bg-orange/5 p-5"
                  >
                    <p className="flex items-start gap-2 text-sm font-semibold text-navy">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                      Your enquiry is ready. Choose how you would like to send it:
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button href={waHref} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Send via WhatsApp
                      </Button>
                      <Button href={mailHref} variant="ghost">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        Send via Email
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  id: keyof FormValues
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={`field-${id}`} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && (
          <span className="text-orange" aria-hidden="true">
            {' '}*
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`error-${id}`} className="mt-1.5 flex items-center gap-1 text-xs text-red-600" role="alert">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
