import { industries } from '../data/industries'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Industries() {
  return (
    <section
      id="industries"
      className="section-pad relative bg-steel-100"
      aria-labelledby="industries-heading"
    >
      <div className="absolute inset-0 grid-pattern-light" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Components for demanding industrial sectors"
          description="We machine parts for OEMs, fabricators and maintenance teams across a range of industries."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ id, name, description, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={id}
              delay={0.05 * i}
              className="group rounded-2xl border border-steel-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-card-hover"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
