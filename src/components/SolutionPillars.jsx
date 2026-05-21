import { motion } from 'framer-motion'
import { solution } from '../data/copy.js'
import HairlineRule from './ui/HairlineRule.jsx'
import { WordsReveal } from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

function PillarCard({ pillar, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative bg-white p-8 lg:p-10 border border-hairline transition-all duration-500 hover:border-ice-500/50 hover:shadow-soft"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ice-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="font-mono text-ice-600 text-[11px] tracking-widest2 mb-6">
        / {String(index + 1).padStart(2, '0')}
      </div>
      <h3 className="font-display text-d-4 text-graphite-700 mb-5 leading-tight">
        {pillar.title}
      </h3>
      <p className="text-graphite-500 text-[15px] leading-relaxed">
        {pillar.body}
      </p>
    </motion.div>
  )
}

export default function SolutionPillars() {
  return (
    <section id="solucion" className="bg-offwhite py-20 sm:py-24 lg:py-32">
      <div className="container-px">
        <div className="mb-14">
          <HairlineRule num={solution.num} label={solution.eyebrow} />
        </div>

        <h2 className="font-display text-d-2 text-graphite-700 font-medium max-w-5xl mb-16 lg:mb-20">
          <span className="block">
            <WordsReveal text="Cuando la fianza es el" />
          </span>
          <span className="block">
            <span className="font-display-italic text-graphite-700">
              <WordsReveal text="cuello de botella," delay={0.12} />
            </span>{' '}
            <WordsReveal text="no contratas" delay={0.24} />
          </span>
          <span className="block">
            <WordsReveal text="un agente. Contratas un despacho" delay={0.36} />
          </span>
          <span className="block">
            <WordsReveal text="con 70 años de relaciones." delay={0.48} />
          </span>
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.1)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {solution.pillars.map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
