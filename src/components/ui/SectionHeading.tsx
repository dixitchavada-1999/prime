import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** Use light text on dark backgrounds */
  tone?: 'light' | 'dark'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={`${isCenter ? 'mx-auto text-center' : 'text-left'} max-w-3xl ${className}`}
    >
      <span className={`eyebrow ${isCenter ? 'justify-center' : ''}`}>{eyebrow}</span>
      <h2
        className={`mt-4 text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
          tone === 'light' ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === 'light' ? 'text-white/70' : 'text-steel'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
