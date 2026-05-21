// Constantes de animación centralizadas (framer-motion)

export const ease = [0.22, 1, 0.36, 1]
export const easeOut = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 1.1, ease } },
}

export const stagger = (gap = 0.08, delay = 0.05) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

export const viewportOnce = { once: true, amount: 0.2 }
