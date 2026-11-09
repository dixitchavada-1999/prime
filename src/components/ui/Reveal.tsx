import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in seconds */
  delay?: number
  /** Direction the element travels from */
  from?: 'up' | 'down' | 'left' | 'right' | 'none'
  /** Render as a different element, defaults to div */
  as?: 'div' | 'section' | 'article' | 'li' | 'figure'
  once?: boolean
}

const offsets = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
}

/**
 * Subtle scroll-triggered reveal. Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  from = 'up',
  as = 'div',
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, ...offsets[from] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  }

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '0px 0px -80px 0px' }}
    >
      {children}
    </Tag>
  )
}
