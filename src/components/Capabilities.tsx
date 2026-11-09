import { Check } from 'lucide-react'
import { capabilities } from '../data/capabilities'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section-pad relative overflow-hidden bg-navy text-white"
      aria-labelledby="capabilities-heading"
    >
      <div className="absolute inset-0 grid-pattern opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-orange/15 blur-[140px]" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Capabilities"
          title="What our shop floor is set up to deliver"
          description="A clear picture of the materials, processes and inspection practices behind every component we machine."
          tone="light"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {capabilities.map(({ id, title, description, icon: Icon, items }, i) => (
            <Reveal
              as="article"
              key={id}
              delay={i * 0.08}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-orange/50 hover:bg-white/[0.07] sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange text-white shadow-[0_8px_20px_-8px_rgb(242_140_40/0.8)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/65">{description}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                    <span>{item}</span>
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
