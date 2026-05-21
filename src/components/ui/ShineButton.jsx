import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// CTA premium con shine-sweep + glow ice-blue en hover.
// Variants: 'metal' (botón de plata sobre claro), 'ice' (azul brillante),
// 'outline-light' (sobre fondo oscuro)
export default function ShineButton({
  as = 'a',
  href,
  onClick,
  variant = 'metal',
  size = 'md',
  children,
  withArrow = true,
  className = '',
  ...rest
}) {
  const Tag = motion[as] || motion.a

  const base =
    'shine-sweep relative inline-flex items-center justify-center gap-3 font-semibold tracking-wide transition-all duration-300 isolate group'
  const sizes = {
    sm: 'px-5 py-2.5 text-[12px]',
    md: 'px-7 py-4 text-[13px]',
    lg: 'px-9 py-5 text-[14px]',
  }
  const variants = {
    metal:
      'text-graphite-700 bg-gradient-to-b from-platinum-50 via-platinum-100 to-platinum-300 border border-graphite-700/10 shadow-soft hover:shadow-ice hover:-translate-y-0.5',
    ice:
      'text-graphite-800 bg-gradient-to-br from-ice-200 via-ice-300 to-ice-500 border border-ice-600/30 shadow-soft hover:shadow-ice hover:-translate-y-0.5',
    'outline-light':
      'text-offwhite border border-offwhite/30 hover:border-offwhite/60 backdrop-blur-md hover:bg-offwhite/5',
    'outline-dark':
      'text-graphite-700 border border-graphite-700/40 hover:border-graphite-700 hover:bg-graphite-700 hover:text-offwhite',
  }

  return (
    <Tag
      href={href}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {withArrow && (
        <ArrowRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Tag>
  )
}
