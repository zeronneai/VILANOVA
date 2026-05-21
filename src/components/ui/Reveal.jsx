import { motion } from 'motion/react'
import { fadeUp, viewportOnce } from '../../lib/motion.js'

// Wrapper estándar para reveals declarativos.
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  y = 32,
  className = '',
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

// Reveal palabra por palabra para titulares
export function WordsReveal({
  text,
  className = '',
  italicWords = [],
  highlightWords = [],
  staggerWords = 0.07,
  delay = 0,
}) {
  const words = text.split(' ')
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: staggerWords, delayChildren: delay },
        },
      }}
      className={`inline ${className}`}
      aria-label={text}
    >
      {words.map((w, i) => {
        const clean = w.replace(/[.,;:!?]/g, '')
        const isItalic = italicWords.includes(clean)
        const isHighlight = highlightWords.includes(clean)
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-baseline pb-[0.12em] -mb-[0.12em]"
            aria-hidden="true"
          >
            <motion.span
              variants={{
                hidden: { y: '110%' },
                show: {
                  y: '0%',
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className={`inline-block ${isItalic ? 'italic' : ''} ${
                isHighlight ? 'text-bronze-300' : ''
              }`}
            >
              {w}
              {i < words.length - 1 && ' '}
            </motion.span>
          </span>
        )
      })}
    </motion.span>
  )
}
