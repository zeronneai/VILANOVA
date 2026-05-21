import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'

// Botón con sutil "atracción" hacia el cursor. Pure CSS transform, GPU-friendly.
export default function MagneticButton({
  as = 'a',
  href,
  onClick,
  className = '',
  children,
  strength = 18,
  ...rest
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })
  const reduced = useReducedMotion()

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const mx = e.clientX - rect.left - rect.width / 2
    const my = e.clientY - rect.top - rect.height / 2
    x.set((mx / rect.width) * strength)
    y.set((my / rect.height) * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Component = as === 'a' ? motion.a : motion.button
  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  )
}
