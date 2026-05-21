import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { whyUs } from '../data/copy.js'
import { partners } from '../data/services.js'
import HairlineRule from './ui/HairlineRule.jsx'
import Counter from './ui/Counter.jsx'
import { WordsReveal } from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

function StatItem({ stat, index, total }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`relative px-6 lg:px-8 py-8 lg:py-10 ${
        index % 3 !== 0 ? 'lg:border-l border-hairline-d' : ''
      } ${
        index >= 3 ? 'border-t border-hairline-d' : ''
      }`}
    >
      <div className="font-display text-[clamp(2.5rem,4.5vw,4rem)] leading-none mb-4 flex items-baseline text-metal-cool">
        {stat.prefix && (
          <span className="mr-1 text-[0.5em] text-platinum-200">
            {stat.prefix}
          </span>
        )}
        <Counter value={stat.value} />
        {stat.suffix && <span className="ml-1 text-[0.5em]">{stat.suffix}</span>}
      </div>
      <div className="text-offwhite text-[13px] font-medium uppercase tracking-widest2 mb-1.5">
        {stat.label}
      </div>
      <div className="text-platinum-200/50 text-[11px] font-mono">
        {stat.sub}
      </div>
    </motion.div>
  )
}

export default function WhyUsCredentials() {
  const loop = [...partners, ...partners]

  return (
    <section className="relative bg-graphite-radial text-offwhite py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container-px relative">
        <div className="mb-14">
          <HairlineRule num={whyUs.num} label={whyUs.eyebrow} onDark />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20 items-end">
          <h2 className="lg:col-span-7 font-display text-d-2 text-offwhite font-medium">
            <span className="block">
              <WordsReveal text="70 años. 3 generaciones." />
            </span>
            <span className="block">
              <span className="font-display-italic text-metal-cool">
                <WordsReveal text="Una sola palabra" delay={0.15} />
              </span>{' '}
              <WordsReveal text="empeñada." delay={0.3} />
            </span>
          </h2>

          <ul className="lg:col-span-5 space-y-3 text-platinum-200/85">
            {whyUs.credentials.map((c, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-start gap-3 text-[15px] leading-relaxed"
              >
                <Check
                  size={16}
                  strokeWidth={2}
                  className="text-ice-400 mt-1 shrink-0"
                />
                <span>{c}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Stats grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.1)}
          className="border-t border-hairline-d grid grid-cols-2 lg:grid-cols-3"
        >
          {whyUs.stats.map((s, i) => (
            <StatItem key={s.label} stat={s} index={i} total={whyUs.stats.length} />
          ))}
        </motion.div>

        {/* Marquee de socios */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-widest3 text-platinum-200/60">
              Operamos con
            </span>
            <span className="h-px flex-1 bg-hairline-d" />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-graphite-700 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-graphite-700 to-transparent z-10 pointer-events-none" />
            <div className="flex marquee-track">
              {loop.map((p, i) => (
                <div
                  key={`${p}-${i}`}
                  className="shrink-0 px-10 lg:px-14 py-6"
                >
                  <span className="font-display text-2xl lg:text-3xl text-platinum-200/60 hover:text-ice-300 transition-colors duration-500 whitespace-nowrap">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
