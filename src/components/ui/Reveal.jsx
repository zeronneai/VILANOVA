import { motion } from 'framer-motion'
import { viewportOnce, ease } from '../../lib/motion.js'

// Wrapper estándar para reveals al entrar en viewport.
export default function Reveal({
  as = 'div',
  delay = 0,
  y = 28,
  className = '',
  children,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

// Reveal palabra por palabra (mask + translate)
export function WordsReveal({ text, className = '', delay = 0, stagger = 0.06 }) {
  const words = text.split(' ')
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={`inline ${className}`}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-baseline pb-[0.14em] -mb-[0.14em]"
          aria-hidden="true"
        >
          <motion.span
            variants={{
              hidden: { y: '110%' },
              show: {
                y: '0%',
                transition: { duration: 0.9, ease },
              },
            }}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
