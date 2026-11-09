import { AnimatePresence, motion } from 'framer-motion'
import { Layers, Wrench } from 'lucide-react'
import { useMemo, useState } from 'react'
import { productCategories, products } from '../data/products'
import type { Product, ProductCategory } from '../types'
import LazyImage from './ui/LazyImage'
import SectionHeading from './ui/SectionHeading'

type Filter = 'All' | ProductCategory

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <figure className="relative aspect-[4/3] overflow-hidden bg-steel-100">
        <LazyImage
          src={product.image}
          alt={`${product.name} machined from ${product.material}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
        <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-navy backdrop-blur-sm">
          {product.category}
        </span>
      </figure>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-navy sm:text-lg">{product.name}</h3>
        <dl className="mt-3 space-y-1.5 text-sm">
          <div className="flex items-start gap-2">
            <dt className="flex items-center gap-1.5 text-steel">
              <Layers className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
              <span className="sr-only">Material</span>
            </dt>
            <dd className="font-medium text-navy">{product.material}</dd>
          </div>
          <div className="flex items-start gap-2">
            <dt className="flex items-center gap-1.5 text-steel">
              <Wrench className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
              <span className="sr-only">Process</span>
            </dt>
            <dd className="text-steel">{product.process}</dd>
          </div>
        </dl>
        <p className="mt-3 text-sm leading-relaxed text-steel">{product.description}</p>
      </div>
    </motion.article>
  )
}

export default function Products() {
  const [filter, setFilter] = useState<Filter>('All')
  const filters: Filter[] = ['All', ...productCategories]

  const visible = useMemo(
    () => (filter === 'All' ? products : products.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="products" className="section-pad bg-white" aria-labelledby="products-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Products"
          title="A gallery of components we manufacture"
          description="Representative parts across turning and milling. Filter by category to see the kind of work we handle."
        />

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter products by category">
          {filters.map((f) => {
            const selected = f === filter
            return (
              <button
                key={f}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  selected
                    ? 'border-navy bg-navy text-white shadow-card'
                    : 'border-steel-200 bg-white text-steel hover:border-navy hover:text-navy'
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>

        <p className="mt-5 text-center text-sm text-steel" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'product' : 'products'}
          {filter !== 'All' && ` in ${filter}`}
        </p>

        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
