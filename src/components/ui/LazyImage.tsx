import { useState, type ImgHTMLAttributes } from 'react'

const FALLBACK = '/images/placeholder.svg'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  /** Set true for above-the-fold images (hero) to load eagerly */
  priority?: boolean
}

/**
 * Lazy-loaded image with a soft fade-in and a branded fallback if the
 * source fails to load (e.g. a placeholder URL that was never replaced).
 */
export default function LazyImage({
  src,
  alt,
  priority = false,
  className = '',
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <img
      src={failed ? FALLBACK : src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (!failed) setFailed(true)
      }}
      className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...rest}
    />
  )
}
