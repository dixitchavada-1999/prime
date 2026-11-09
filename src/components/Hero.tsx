import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, CircleDot, Crosshair, Layers3, PackageCheck } from 'lucide-react'
import { company } from '../data/company'
import { scrollToSection } from '../lib/scroll'
import Button from './ui/Button'
import LazyImage from './ui/LazyImage'

const highlights = [
  { icon: CircleDot, label: 'CNC Turning' },
  { icon: Layers3, label: 'VMC Milling' },
  { icon: Crosshair, label: 'Precision Components' },
  { icon: PackageCheck, label: 'Prototype to Batch' },
]

export default function Hero() {
  const reduce = useReducedMotion()
  const { hero, tagline } = company

  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  })

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background photo */}
      <div className="absolute inset-0 -z-20">
        <LazyImage
          src={hero.image}
          alt={hero.imageAlt}
          priority
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-60" />
      {/* Accent glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-orange/20 blur-[120px]" />

      <div className="container-x relative pb-24 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
        <div className="max-w-3xl">
          <motion.p {...fade(0.05)} className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm sm:text-[0.8rem]">
            <span className="h-2 w-2 rounded-full bg-orange shadow-[0_0_0_4px_rgb(242_140_40/0.25)]" />
            {tagline}
          </motion.p>

          <motion.h1
            id="hero-heading"
            {...fade(0.15)}
            className="mt-7 text-4xl font-bold leading-[1.1] text-balance sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Advanced <span className="text-orange">CNC &amp; VMC</span> Machining Solutions
          </motion.h1>

          <motion.p {...fade(0.25)} className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
            {hero.description}
          </motion.p>

          <motion.div {...fade(0.35)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="#machines"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('machines')
              }}
            >
              Explore Our Machines
            </Button>
          </motion.div>
        </div>

        {/* Highlight strip */}
        <motion.ul
          {...fade(0.5)}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm lg:mt-20 lg:grid-cols-4"
          aria-label="Core capabilities"
        >
          {highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 bg-navy/70 px-4 py-4 sm:px-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-orange/15 text-orange">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-white/90 sm:text-[0.95rem]">{label}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('about')
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white lg:flex"
        aria-label="Scroll to About section"
      >
        Scroll
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  )
}
