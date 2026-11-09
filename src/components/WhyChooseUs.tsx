import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { company } from '../data/company'
import { mailtoLink, whatsappLink } from '../lib/scroll'
import Button from './ui/Button'
import LazyImage from './ui/LazyImage'
import Reveal from './ui/Reveal'

const sideImage = {
  src: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&w=1200&q=80',
  alt: 'Modern manufacturing floor with CNC machinery in a large industrial building',
}

export default function WhyChooseUs() {
  const { whyChooseUs, contact } = company

  return (
    <section
      id="why-choose-us"
      className="section-pad relative overflow-hidden bg-dark text-white"
      aria-labelledby="why-heading"
    >
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-orange/10 blur-[140px]" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-5 lg:gap-16">
        {/* Image */}
        <Reveal from="right" className="relative lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <LazyImage src={sideImage.src} alt={sideImage.alt} className="aspect-[4/5] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/10 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <p className="font-display text-lg font-semibold leading-snug">
                Precision Engineering. <span className="text-orange">Excellence in Manufacturing.</span>
              </p>
              <p className="mt-1 text-sm text-white/70">Our commitment on every job, big or small.</p>
            </div>
          </div>
          <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-2xl border border-orange/40" aria-hidden="true" />
        </Reveal>

        {/* Points */}
        <div className="lg:col-span-3">
          <Reveal>
            <span className="eyebrow">Why Choose Us</span>
            <h2 id="why-heading" className="mt-4 text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              A machining partner you can rely on
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Here is what you can expect when you send us a drawing.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {whyChooseUs.map(({ title, description, icon: Icon }, i) => (
              <Reveal as="li" key={title} delay={0.06 * i} className="group flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-orange transition-colors group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">{description}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3} className="mt-11 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold">Have a drawing ready?</p>
              <p className="mt-1 text-sm text-white/65">Send it over and we will get back to you with a quote.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={whatsappLink(contact.whatsappNumber, contact.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                href={mailtoLink(contact.email, 'Machining enquiry - Prime Engineering', '')}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
