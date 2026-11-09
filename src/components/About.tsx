import { ArrowRight } from 'lucide-react'
import { company } from '../data/company'
import { scrollToSection } from '../lib/scroll'
import Button from './ui/Button'
import LazyImage from './ui/LazyImage'
import Reveal from './ui/Reveal'

export default function About() {
  const { about, tagline } = company
  const [primary, secondary] = about.images

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-white" aria-labelledby="about-heading">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <Reveal from="right" className="relative">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-32 w-32 rounded-2xl border-2 border-orange/60 lg:-left-6 lg:-top-6 lg:h-40 lg:w-40" aria-hidden="true" />
            <figure className="relative overflow-hidden rounded-2xl shadow-card-hover">
              <LazyImage
                src={primary.src}
                alt={primary.alt}
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            {secondary && (
              <figure className="absolute -bottom-8 -right-3 w-[46%] overflow-hidden rounded-xl border-4 border-white shadow-card-hover sm:-right-8">
                <LazyImage src={secondary.src} alt={secondary.alt} className="aspect-[4/3] w-full object-cover" />
              </figure>
            )}
            <div className="absolute -bottom-6 left-4 rounded-xl bg-navy px-5 py-4 text-white shadow-card-hover sm:left-6">
              <p className="font-display text-sm font-semibold leading-snug">{tagline}</p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="pt-6 lg:pt-0">
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 id="about-heading" className="mt-4 text-3xl font-bold leading-tight text-balance text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-steel sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * (i + 1)}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-9 grid gap-5 sm:grid-cols-3">
            {about.values.map(({ icon: Icon, title, description }, i) => (
              <Reveal as="li" key={title} delay={0.1 + i * 0.08} className="group">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-navy">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-steel">{description}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3} className="mt-10">
            <Button
              variant="secondary"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Discuss Your Requirement
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
