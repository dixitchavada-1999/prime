interface LogoProps {
  className?: string
}

/** Brand mark + wordmark. Replace the SVG with your logo file if you have one. */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-white/10 ring-1 ring-white/15">
        <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
          <path
            d="M18 46V18h14.5c7.2 0 11.5 3.9 11.5 9.6S39.7 37.3 32.5 37.3H25.5V46H18zm7.5-15h6.4c3 0 4.6-1.4 4.6-3.4s-1.6-3.4-4.6-3.4h-6.4V31z"
            fill="#FFFFFF"
          />
          <rect x="40" y="40" width="10" height="10" rx="2" fill="#F28C28" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold tracking-wide text-white">PRIME</span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-orange">
          Engineering
        </span>
      </span>
    </span>
  )
}
