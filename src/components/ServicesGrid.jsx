import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion.js'

function ServiceCard({ item, index }) {
  const ref = useRef(null)
  const spotlight = useRef(null)
  const reduced = useReducedMotion()

  const onMove = (e) => {
    if (reduced || !ref.current || !spotlight.current) return
    const rect = ref.current.getBoundingClientRect()
    spotlight.current.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    spotlight.current.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      onMouseMove={onMove}
      className="group relative bg-white border border-ink-50 p-7 lg:p-8 overflow-hidden corner-accent transition-colors duration-500 hover:border-bronze-300 cursor-default"
    >
      {/* Spotlight cursor-aware */}
      <div
        ref={spotlight}
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(164,113,72,0.10), transparent 65%)',
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-5">
          <span className="font-mono text-bronze-500 text-[11px] tracking-widest2">
            {String(index + 1).padStart(2, '0')}
          </span>
          <ArrowUpRight
            size={18}
            strokeWidth={1.4}
            className="text-ink-200 group-hover:text-bronze-500 group-hover:rotate-[15deg] transition-all duration-500"
          />
        </div>
        <h3 className="font-serif text-ink-600 text-2xl lg:text-[26px] leading-[1.15] mb-4">
          {item.name}
        </h3>
        <p className="text-ink-600/70 text-[15px] leading-relaxed">{item.desc}</p>
      </div>
    </motion.article>
  )
}

export default function ServicesGrid({
  id,
  number,
  eyebrow,
  title,
  highlight,
  intro,
  items,
  variant = 'light',
}) {
  const isLight = variant === 'light'
  return (
    <section
      id={id}
      className={`py-28 lg:py-36 ${isLight ? 'bg-bone-50' : 'bg-bone-100'}`}
    >
      <div className="container-px">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-600">
            {number} — {eyebrow}
          </span>
          <span className="h-px flex-1 bg-ink-100 max-w-[280px]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <h2 className="lg:col-span-7 h-display text-ink-600 text-display-lg">
            {title}{' '}
            {highlight && (
              <span className="italic text-bronze-500">{highlight}</span>
            )}
          </h2>
          <p className="lg:col-span-5 text-ink-600/75 text-lg leading-relaxed lg:pl-6 lg:border-l border-bronze-500/50">
            {intro}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.06)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100"
        >
          {items.map((item, i) => (
            <ServiceCard key={item.name} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
