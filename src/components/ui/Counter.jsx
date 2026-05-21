import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useReducedMotion,
} from 'framer-motion'

export default function Counter({
  value,
  className = '',
  format = (n) => n.toLocaleString('es-MX'),
  duration = 2.2,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduced = useReducedMotion()
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 40, damping: 16, mass: 1.1, duration })
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
