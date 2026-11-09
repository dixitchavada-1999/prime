import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-orange text-white shadow-[0_8px_20px_-8px_rgb(242_140_40/0.6)] hover:bg-orange-600 hover:shadow-[0_12px_28px_-8px_rgb(242_140_40/0.7)] hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-navy text-white hover:bg-navy-700 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10',
  ghost: 'border border-steel-200 bg-white text-navy hover:border-navy hover:bg-steel-100',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export default function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
