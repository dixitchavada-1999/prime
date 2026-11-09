import { ArrowRight, Check } from 'lucide-react'
import { services } from '../data/services'
import { scrollToSection } from '../lib/scroll'
import Button from './ui/Button'
import Reveal from './ui/Reveal'

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white" aria-labelledby="services-heading">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Intro cell */}
          <Reveal className="flex flex-col justify-center rounded-2xl bg-navy p-8 text-white lg:col-span-2 xl:col-span-1">
            <span className="eyebrow">Our Services</span>
            <h2 id="services-heading" className="mt-4 text-3xl font-bold leading-tight text-balance sm:text-4xl xl:text-[1.9rem]">
              Machining services built around your drawing
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              From a single prototype to scheduled batch production, we cover turning, milling and
              secondary operations under one roof.
            </p>
            <div className="mt-7">
              <Button
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                Send Your Drawing
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>

          {services.map(({ id, title, description, icon: Icon, highlights }, i) => (
            <Reveal
              as="article"
              key={id}
              delay={0.05 * (i + 1)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-card-hover"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{description}</p>
              <ul className="mt-5 space-y-1.5 border-t border-steel-200 pt-4">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-navy/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
