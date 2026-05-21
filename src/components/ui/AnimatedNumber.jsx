import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useReducedMotion,
} from 'motion/react'

// Número con animación spring al entrar en viewport.
export default function AnimatedNumber({
  value,
  className = '',
  format = (n) => n.toLocaleString('es-MX'),
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduced = useReducedMotion()
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 50, damping: 18, mass: 1 })
  const [display, setDisplay] = useState(reduced ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(value)
      return
    }
    mv.set(value)
  }, [inView, value, mv, reduced])

  useMotionValueEvent(spring, 'change', (latest) => {
    setDisplay(Math.round(latest))
  })

  return (
    <motion.span ref={ref} className={`tabular ${className}`}>
      {format(display)}
    </motion.span>
  )
}
