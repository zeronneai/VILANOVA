// Variants reutilizables para mantener un mismo ritmo en todo el sitio.

export const ease = [0.22, 1, 0.36, 1] // ease-out cubic (luxury)
export const easeSpring = { type: 'spring', stiffness: 80, damping: 18, mass: 0.8 }

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 1.2, ease } },
}

export const stagger = (gap = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
})

export const wordReveal = {
  hidden: { y: '110%', opacity: 0 },
  show:   { y: '0%', opacity: 1, transition: { duration: 0.85, ease } },
}

export const viewportOnce = { once: true, amount: 0.2 }
