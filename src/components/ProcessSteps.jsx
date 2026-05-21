import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { process } from '../data/copy.js'
import HairlineRule from './ui/HairlineRule.jsx'
import { WordsReveal } from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

function StepCard({ step, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative bg-white border border-hairline p-8 lg:p-10 group hover:border-ice-500/50 transition-colors duration-500"
    >
      <div className="font-display text-d-3 text-metal leading-none mb-7 font-medium">
        {step.n}
      </div>
      <h3 className="font-display text-graphite-700 text-2xl lg:text-[28px] mb-4 leading-tight font-medium">
        {step.title}
      </h3>
      <p className="text-graphite-500 text-[15px] leading-relaxed">
        {step.body}
      </p>
    </motion.div>
  )
}

export default function ProcessSteps() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 30%'],
  })
  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="proceso" ref={ref} className="bg-offwhite py-20 sm:py-24 lg:py-32">
      <div className="container-px">
        <div className="mb-14">
          <HairlineRule num={process.num} label={process.eyebrow} />
        </div>

        <h2 className="font-display text-d-2 text-graphite-700 font-medium max-w-5xl mb-16 lg:mb-20">
          <span className="block">
            <WordsReveal text="De una llamada a la fianza emitida —" />
          </span>
          <span className="block">
            <span className="font-display-italic">
              <WordsReveal text="en 4 pasos sin fricción." delay={0.15} />
            </span>
          </span>
        </h2>

        <div className="relative">
          {/* Línea horizontal scroll-driven (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-hairline -translate-y-1/2" />
          <motion.div
            style={{ scaleX: lineProgress, transformOrigin: 'left' }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-ice-500/60 -translate-y-1/2"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.12)}
            className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {process.steps.map((s, i) => (
              <StepCard key={s.n} step={s} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
