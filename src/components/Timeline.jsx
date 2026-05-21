import { timeline } from '../data/services.js'
import { useReveal } from '../hooks/useReveal.js'

function Milestone({ item, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal relative pl-10 lg:pl-0"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="hidden lg:block absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500 ring-4 ring-navy-600" />
      <div className="lg:hidden absolute left-0 top-2 w-3 h-3 rounded-full bg-gold-500" />

      <div className="lg:text-center lg:max-w-xs lg:mx-auto lg:pt-8">
        <div className="text-gold-400 uppercase tracking-widest2 text-[11px] font-semibold mb-3">
          {item.period}
        </div>
        <h3 className="font-serif text-2xl text-cream-50 mb-2">
          {item.generation}
        </h3>
        <div className="text-gold-300 text-sm font-medium mb-4 italic">
          {item.title}
        </div>
        <p className="text-cream-50/75 text-sm leading-relaxed">{item.body}</p>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section
      id="trayectoria"
      className="py-24 lg:py-32 bg-navy-600 text-cream-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#B08A3E,transparent_60%)]" />
      </div>

      <div className="container-px relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-5">Línea de tiempo</p>
          <h2 className="h-display text-cream-50 text-4xl sm:text-5xl">
            Tres generaciones, una sola{' '}
            <span className="italic text-gold-300">palabra</span>.
          </h2>
          <div className="gold-rule mx-auto mt-8" />
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-[8%] right-[8%] h-px bg-cream-50/20" />
          <div className="lg:hidden absolute left-1.5 top-0 bottom-0 w-px bg-cream-50/20" />

          <div className="grid lg:grid-cols-3 gap-14 lg:gap-8">
            {timeline.map((item, i) => (
              <Milestone key={item.period} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
