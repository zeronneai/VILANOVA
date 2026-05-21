import { useCounter } from '../hooks/useCounter.js'

function Stat({ value, suffix = '', label, prefix = '' }) {
  const [ref, current] = useCounter(value)
  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-gold-500 text-5xl sm:text-6xl lg:text-7xl leading-none mb-3">
        {prefix}
        {current}
        {suffix}
      </div>
      <div className="text-navy-600/80 text-xs sm:text-sm uppercase tracking-widest2">
        {label}
      </div>
    </div>
  )
}

export default function AuthorityCounter() {
  return (
    <section className="py-20 lg:py-24 bg-cream-100 border-y border-navy-100">
      <div className="container-px">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <Stat value={70} suffix=" años" label="De experiencia" />
          <Stat value={3} label="Generaciones" />
          <Stat value={4} label="Oficinas en México" />
          <Stat value={10} prefix="+" label="Aseguradoras de primer nivel" />
        </div>
      </div>
    </section>
  )
}
