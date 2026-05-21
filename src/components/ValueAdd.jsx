import { Handshake, Building2, Award, LineChart } from 'lucide-react'
import { useReveal } from '../hooks/useReveal.js'

const VALUES = [
  {
    icon: Handshake,
    title: 'Asesoría personalizada sin costo',
    body: 'Analizamos tu proyecto, contrato o necesidad y diseñamos la solución correcta. Nuestra asesoría no tiene cargo: trabajamos por comisión institucional.',
  },
  {
    icon: Building2,
    title: 'Trámite con las mejores afianzadoras',
    body: 'Operamos con más de 10 instituciones de primer nivel. Conseguimos las condiciones, primas y tiempos que un agente común no puede ofrecer.',
  },
  {
    icon: Award,
    title: 'Reconocimiento ante beneficiarios',
    body: 'Dependencias federales, estatales y privados nos reconocen como contraparte seria. Tu fianza se acepta sin observaciones técnicas.',
  },
  {
    icon: LineChart,
    title: 'Administración de líneas de afianzamiento',
    body: 'Diseñamos y mantenemos tu línea revolvente. Renovaciones, ampliaciones y reportes financieros para que sólo te concentres en producir.',
  },
]

function ValueCard({ value, index }) {
  const ref = useReveal()
  const Icon = value.icon
  return (
    <div
      ref={ref}
      className="reveal relative bg-white border border-navy-50 p-8 hover:border-gold-300 transition-all duration-300"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon
        size={32}
        strokeWidth={1.4}
        className="text-gold-500 mb-6"
        aria-hidden="true"
      />
      <h3 className="font-serif text-navy-600 text-2xl mb-3">{value.title}</h3>
      <p className="text-navy-600/70 text-sm leading-relaxed">{value.body}</p>
    </div>
  )
}

export default function ValueAdd() {
  return (
    <section className="py-24 lg:py-32 bg-petrol-600 text-cream-50 relative overflow-hidden">
      <div className="container-px relative">
        <div className="max-w-3xl mb-16">
          <p className="text-gold-400 uppercase tracking-widest2 text-xs font-semibold mb-5">
            Valor agregado
          </p>
          <h2 className="h-display text-cream-50 text-4xl sm:text-5xl lg:text-[56px]">
            Lo que recibes cuando trabajamos{' '}
            <span className="italic text-gold-300">contigo</span>.
          </h2>
          <div className="gold-rule mt-8" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
