import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import HairlineRule from './ui/HairlineRule.jsx'
import { WordsReveal } from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

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
      className="group relative bg-white border border-hairline p-7 lg:p-8 overflow-hidden transition-all duration-500 hover:border-ice-500/50 cursor-default"
    >
      <div
        ref={spotlight}
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(110,168,254,0.12), transparent 65%)',
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-ice-600 text-[11px] tracking-widest2">
            {String(index + 1).padStart(2, '0')}
          </span>
          <ArrowUpRight
            size={18}
            strokeWidth={1.4}
            className="text-graphite-200 group-hover:text-ice-500 group-hover:rotate-[15deg] transition-all duration-500"
          />
        </div>
        <h3 className="font-display text-graphite-700 text-[24px] lg:text-[26px] leading-[1.15] mb-4 font-medium">
          {item.name}
        </h3>
        <p className="text-graphite-500 text-[14.5px] leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.article>
  )
}

export default function ServicesPremium({
  id,
  num,
  eyebrow,
  headline,
  italicWords = [],
  subhead,
  items,
  variant = 'light',
}) {
  const isLight = variant === 'light'
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 lg:py-32 ${isLight ? 'bg-offwhite' : 'bg-bone'}`}
    >
      <div className="container-px">
        <div className="mb-14">
          <HairlineRule num={num} label={eyebrow} />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20 items-end">
          <h2 className="lg:col-span-7 font-display text-d-2 text-graphite-700 font-medium">
            <WordsReveal text={headline} />
          </h2>
          <p className="lg:col-span-5 text-graphite-500 text-lg leading-relaxed lg:pl-6 lg:border-l border-ice-500/40">
            {subhead}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.05)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline"
        >
          {items.map((item, i) => (
            <ServiceCard key={item.name} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
