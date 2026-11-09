import { AnimatePresence, motion } from 'framer-motion'
import { Settings2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { machines } from '../data/machines'
import type { Machine, MachineType } from '../types'
import LazyImage from './ui/LazyImage'
import SectionHeading from './ui/SectionHeading'

type Filter = 'All' | MachineType
const filters: Filter[] = ['All', 'CNC Turning', 'VMC Machining']

function MachineCard({ machine }: { machine: Machine }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <figure className="relative aspect-[16/10] overflow-hidden bg-navy">
        <LazyImage
          src={machine.image}
          alt={`${machine.name} - ${machine.type}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-md px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white ${
            machine.type === 'CNC Turning' ? 'bg-orange' : 'bg-navy'
          }`}
        >
          {machine.type}
        </span>
      </figure>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-navy">{machine.name}</h3>
        <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <div className="flex gap-1.5">
            <dt className="text-steel">Brand:</dt>
            <dd className="font-medium text-navy">{machine.brand}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="text-steel">Model:</dt>
            <dd className="font-medium text-navy">{machine.model}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm leading-relaxed text-steel">{machine.description}</p>

        <div className="mt-5 border-t border-steel-200 pt-4">
          <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy">
            <Settings2 className="h-4 w-4 text-orange" aria-hidden="true" />
            Specifications
          </h4>
          <ul className="mt-3 grid gap-1.5 text-sm text-steel">
            {machine.specifications.map((spec) => (
              <li key={spec} className="flex gap-2">
                <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}

export default function Machines() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = useMemo(
    () => (filter === 'All' ? machines : machines.filter((m) => m.type === filter)),
    [filter],
  )

  return (
    <section id="machines" className="section-pad bg-steel-100" aria-labelledby="machines-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Machines"
          title="CNC turning and VMC machining equipment"
          description="Modern, well-maintained machines matched to the parts we produce. Every entry below is editable from the machines data file."
        />

        {/* Filter tabs */}
        <div className="mt-10 flex justify-center" role="tablist" aria-label="Filter machines by type">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-xl border border-steel-200 bg-white p-1 shadow-card">
            {filters.map((f) => {
              const selected = f === filter
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFilter(f)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    selected ? 'text-white' : 'text-steel hover:text-navy'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="machine-filter"
                      className="absolute inset-0 rounded-lg bg-navy"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              )
            })}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((machine) => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
