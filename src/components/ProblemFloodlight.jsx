import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { problem } from '../data/copy.js'
import HairlineRule from './ui/HairlineRule.jsx'
import Reveal, { WordsReveal } from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

export default function ProblemFloodlight() {
  return (
    <section
      id="problema"
      className="relative bg-graphite-700 text-offwhite py-28 lg:py-36 overflow-hidden"
    >
      {/* Floodlight effect */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-ice-glow opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay pointer-events-none" />

      <div className="container-px relative">
        <div className="mb-14">
          <HairlineRule num={problem.num} label={problem.eyebrow} onDark />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-d-2 text-offwhite font-medium">
              <span className="block">
                <WordsReveal text="Mientras tú esperas la fianza," />
              </span>
              <span className="block">
                <span className="font-display-italic text-metal-cool">
                  <WordsReveal text="tu competencia" delay={0.15} />
                </span>
              </span>
              <span className="block">
                <WordsReveal text="ya ganó el contrato." delay={0.3} />
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 text-platinum-200/80 text-lg leading-relaxed font-light">
            {problem.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="text-offwhite font-medium text-xl pt-2 border-t border-hairline-d">
                {problem.punch}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Pains grid */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.08, 0.2)}
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-hairline-d"
        >
          {problem.pains.map((p, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="bg-graphite-700 p-7 hover:bg-graphite-600 transition-colors duration-500"
            >
              <div className="flex items-start gap-3">
                <AlertCircle
                  size={18}
                  strokeWidth={1.4}
                  className="text-ice-400 mt-0.5 shrink-0"
                />
                <p className="text-platinum-200/85 text-[14px] leading-relaxed">
                  {p}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
