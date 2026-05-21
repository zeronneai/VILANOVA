import Reveal from './ui/Reveal.jsx'
import { partners } from '../data/services.js'

// Logo placeholder estilizado (sustituir por <img src="/partners/<name>.svg" />)
function LogoMark({ name }) {
  return (
    <div className="shrink-0 flex items-center justify-center min-w-[200px] lg:min-w-[260px] px-10 py-8 mx-px">
      <span className="font-serif text-ink-600/55 text-2xl lg:text-3xl tracking-wide whitespace-nowrap hover:text-bronze-500 transition-colors duration-500">
        {name}
      </span>
    </div>
  )
}

export default function Partners() {
  // Duplicamos la lista para loop infinito sin saltos
  const loop = [...partners, ...partners]

  return (
    <section className="py-24 lg:py-28 bg-bone-50 border-y border-ink-100 overflow-hidden">
      <div className="container-px mb-14">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-600">
            08 — Socios comerciales
          </span>
          <span className="h-px flex-1 bg-ink-100 max-w-[280px]" />
        </div>
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <h2 className="lg:col-span-8 h-display text-ink-600 text-display-lg">
              Operamos con las{' '}
              <span className="italic text-bronze-500">mejores instituciones</span>{' '}
              del país.
            </h2>
            <p className="lg:col-span-4 text-ink-600/70 text-base leading-relaxed">
              Más de 10 afianzadoras y aseguradoras de primer nivel. La relación
              construida durante décadas se traduce en mejores condiciones para
              cada uno de nuestros clientes.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Marquee infinito con fade en bordes */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bone-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bone-50 to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-track">
          {loop.map((p, i) => (
            <LogoMark key={`${p}-${i}`} name={p} />
          ))}
        </div>
      </div>

      <p className="container-px text-center text-xs text-ink-400 mt-10 max-w-xl mx-auto">
        Las marcas mostradas pertenecen a sus respectivos titulares y se
        presentan con fines informativos sobre las instituciones con las que
        operamos.
      </p>
    </section>
  )
}
