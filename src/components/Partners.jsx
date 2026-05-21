import { partners } from '../data/services.js'
import { useReveal } from '../hooks/useReveal.js'

// Placeholder de logos. Sustituir por <img> con los SVG/PNG reales en /public/partners/.
function PartnerLogo({ name }) {
  return (
    <div className="aspect-[5/2] flex items-center justify-center bg-white border border-navy-100 px-6 py-5 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
      <span className="font-serif text-navy-600 text-lg sm:text-xl tracking-wide">
        {name}
      </span>
    </div>
  )
}

export default function Partners() {
  const ref = useReveal()
  return (
    <section className="py-24 lg:py-28 bg-cream-50">
      <div className="container-px">
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-5">Socios comerciales</p>
          <h2 className="h-display text-navy-600 text-4xl sm:text-5xl">
            Trabajamos con las{' '}
            <span className="italic text-gold-500">mejores instituciones</span>{' '}
            del país.
          </h2>
          <div className="gold-rule mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((p) => (
            <PartnerLogo key={p} name={p} />
          ))}
        </div>

        <p className="text-center text-xs text-navy-600/50 mt-10 max-w-xl mx-auto">
          Las marcas mostradas pertenecen a sus respectivos titulares y se
          presentan únicamente con fines informativos sobre las instituciones
          con las que operamos.
        </p>
      </div>
    </section>
  )
}
