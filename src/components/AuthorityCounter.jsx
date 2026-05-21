import { motion } from 'motion/react'
import AnimatedNumber from './ui/AnimatedNumber.jsx'
import { viewportOnce, stagger, fadeUp } from '../lib/motion.js'

const STATS = [
  { value: 70, suffix: '', label: 'Años de experiencia', sub: 'Desde 1955' },
  { value: 3,  suffix: '', label: 'Generaciones', sub: 'Vínculo familiar continuo' },
  { value: 4,  suffix: '', label: 'Oficinas en México', sub: 'Chih · Lag · Ver · Bajío' },
  { value: 10, prefix: '+', label: 'Instituciones aliadas', sub: 'Afianzadoras & aseguradoras' },
]

function Stat({ stat, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`relative px-6 lg:px-10 py-2 ${
        index > 0 ? 'lg:border-l border-ink-100' : ''
      }`}
    >
      <div className="font-serif text-bronze-500 text-display-md leading-none mb-4 flex items-baseline">
        {stat.prefix && <span className="mr-1 text-[0.55em] text-bronze-400">{stat.prefix}</span>}
        <AnimatedNumber value={stat.value} />
        {stat.suffix && <span className="ml-1 text-[0.45em]">{stat.suffix}</span>}
      </div>
      <div className="text-ink-600 text-sm font-medium uppercase tracking-widest2 mb-1">
        {stat.label}
      </div>
      <div className="text-ink-400 text-xs font-mono">{stat.sub}</div>
    </motion.div>
  )
}

export default function AuthorityCounter() {
  return (
    <section className="py-20 lg:py-28 bg-bone-100 border-y border-ink-100 relative overflow-hidden">
      {/* Eyebrow numerado */}
      <div className="container-px mb-12 flex items-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-600">
          02 — Cifras que nos respaldan
        </span>
        <span className="h-px flex-1 bg-ink-100 max-w-[280px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.12)}
        className="container-px grid grid-cols-2 lg:grid-cols-4"
      >
        {STATS.map((s, i) => (
          <Stat key={s.label} stat={s} index={i} />
        ))}
      </motion.div>
    </section>
  )
}
