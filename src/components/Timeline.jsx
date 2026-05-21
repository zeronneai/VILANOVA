import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { timeline } from '../data/services.js'
import { fadeUp, stagger, viewportOnce } from '../lib/motion.js'

function Milestone({ item, index }) {
  return (
    <motion.div variants={fadeUp} className="relative pl-12 lg:pl-0">
      {/* Punto */}
      <div className="lg:hidden absolute left-0 top-2.5 w-3 h-3 rounded-full bg-bronze-500 ring-4 ring-ink-700" />
      <div className="hidden lg:flex justify-center mb-10">
        <div className="w-3 h-3 rounded-full bg-bronze-500 ring-4 ring-ink-600" />
      </div>

      <div className="lg:text-center lg:max-w-sm lg:mx-auto">
        <div className="font-mono text-bronze-300 uppercase tracking-widest3 text-[10px] mb-4">
          {item.period}
        </div>
        <h3 className="font-serif text-bone-50 text-3xl lg:text-4xl mb-3 leading-tight">
          {item.generation}
        </h3>
        <div className="text-bronze-300 text-sm font-medium mb-5 italic">
          — {item.title}
        </div>
        <p className="text-bone-50/70 text-sm leading-relaxed">{item.body}</p>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  })
  // Línea horizontal en desktop / vertical en mobile
  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="trayectoria"
      ref={ref}
      className="py-28 lg:py-36 bg-ink-600 text-bone-50 relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#A47148,transparent_55%)]" />
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-50" />
      </div>

      <div className="container-px relative">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-300">
            04 — Trayectoria
          </span>
          <span className="h-px flex-1 bg-bone-50/15 max-w-[280px]" />
        </div>

        <div className="max-w-3xl mb-20">
          <h2 className="h-display text-bone-50 text-display-lg">
            Tres generaciones,
            <br />
            una sola <span className="italic text-bronze-300">palabra</span>.
          </h2>
        </div>

        <div className="relative">
          {/* Línea horizontal scroll-driven (desktop) */}
          <div className="hidden lg:block absolute top-[18px] left-[8%] right-[8%] h-px bg-bone-50/15" />
          <motion.div
            style={{ scaleX: lineProgress, transformOrigin: 'left' }}
            className="hidden lg:block absolute top-[18px] left-[8%] right-[8%] h-px bg-bronze-500"
          />

          {/* Línea vertical scroll-driven (mobile) */}
          <div className="lg:hidden absolute left-1.5 top-0 bottom-0 w-px bg-bone-50/15" />
          <motion.div
            style={{ scaleY: lineProgress, transformOrigin: 'top' }}
            className="lg:hidden absolute left-1.5 top-0 bottom-0 w-px bg-bronze-500"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.18)}
            className="grid lg:grid-cols-3 gap-14 lg:gap-10"
          >
            {timeline.map((item, i) => (
              <Milestone key={item.period} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
