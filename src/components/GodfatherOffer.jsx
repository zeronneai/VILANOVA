import { motion } from 'framer-motion'
import { Check, ShieldCheck } from 'lucide-react'
import { godfather } from '../data/copy.js'
import HairlineRule from './ui/HairlineRule.jsx'
import ShineButton from './ui/ShineButton.jsx'
import { WordsReveal } from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

export default function GodfatherOffer() {
  return (
    <section
      id="godfather"
      className="relative bg-graphite-700 text-offwhite py-28 lg:py-40 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-ice-glow opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Top frame */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ice-500/60 to-transparent" />

      <div className="container-px relative">
        <div className="mb-14">
          <HairlineRule num={godfather.num} label={godfather.eyebrow} onDark />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-d-1 text-offwhite font-medium mb-10">
              <span className="block">
                <WordsReveal text="Reclama 30 minutos" />
              </span>
              <span className="block">
                <span className="font-display-italic text-metal-cool">
                  <WordsReveal text="con un consultor" delay={0.15} />
                </span>{' '}
                <WordsReveal text="Vilanova." delay={0.3} />
              </span>
              <span className="block text-platinum-200/85 text-[0.6em]">
                <WordsReveal text="Sin costo. Sin compromiso." delay={0.45} />
              </span>
            </h2>

            <p className="text-platinum-200/85 text-lg lg:text-xl font-light mb-8 max-w-2xl">
              {godfather.intro}
            </p>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={stagger(0.08, 0.1)}
              className="space-y-4 mb-10 max-w-2xl"
            >
              {godfather.promises.map((p, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-[16px] text-offwhite leading-relaxed"
                >
                  <Check
                    size={18}
                    strokeWidth={2}
                    className="text-ice-400 mt-1 shrink-0"
                  />
                  <span>{p}</span>
                </motion.li>
              ))}
            </motion.ul>

            <p className="text-platinum-200/80 text-[15px] italic leading-relaxed max-w-2xl mb-10 border-l border-ice-500/40 pl-5">
              {godfather.closing}
            </p>

            <ShineButton
              href="#contacto"
              variant="ice"
              size="lg"
              withArrow
            >
              {godfather.cta}
            </ShineButton>
          </div>

          {/* Garantía */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="glass-dark p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-ice-glow opacity-30 pointer-events-none" />
              <div className="relative">
                <ShieldCheck
                  size={36}
                  strokeWidth={1.2}
                  className="text-ice-300 mb-6"
                  aria-hidden="true"
                />
                <div className="font-mono uppercase tracking-widest3 text-[11px] text-ice-300 mb-3">
                  {godfather.guarantee.label}
                </div>
                <p className="font-display text-offwhite text-[22px] lg:text-[24px] leading-[1.3] font-medium">
                  {godfather.guarantee.body}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
