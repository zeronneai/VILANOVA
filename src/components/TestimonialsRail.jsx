import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/copy.js'
import HairlineRule from './ui/HairlineRule.jsx'
import { WordsReveal } from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

function TestimonialCard({ item, index }) {
  return (
    <motion.figure
      variants={fadeUp}
      className="relative bg-white border border-hairline p-8 lg:p-10 flex flex-col"
    >
      <Quote
        size={28}
        strokeWidth={1.2}
        className="text-ice-500 mb-7"
        aria-hidden="true"
      />
      <blockquote className="font-display text-graphite-700 text-[20px] lg:text-[22px] leading-[1.3] mb-8 font-medium flex-1">
        “{item.quote}”
      </blockquote>
      <figcaption className="border-t border-hairline pt-5">
        <div className="text-[13px] font-semibold text-graphite-700">
          {item.author}
        </div>
        <div className="text-[11px] font-mono uppercase tracking-widest2 text-graphite-400 mt-1">
          {item.company}
        </div>
      </figcaption>
    </motion.figure>
  )
}

export default function TestimonialsRail() {
  return (
    <section className="bg-bone py-28 lg:py-36">
      <div className="container-px">
        <div className="mb-14">
          <HairlineRule num={testimonials.num} label={testimonials.eyebrow} />
        </div>

        <h2 className="font-display text-d-2 text-graphite-700 font-medium max-w-4xl mb-16 lg:mb-20">
          <span className="block">
            <WordsReveal text="Resultados reales. Contratos ganados." />
          </span>
          <span className="block">
            <span className="font-display-italic">
              <WordsReveal text="Garantías que sí respondieron." delay={0.15} />
            </span>
          </span>
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.12)}
          className="grid md:grid-cols-3 gap-5"
        >
          {testimonials.items.map((t, i) => (
            <TestimonialCard key={i} item={t} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
