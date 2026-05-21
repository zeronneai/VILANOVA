import { motion } from 'motion/react'
import { Handshake, Building2, Award, LineChart } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion.js'

const VALUES = [
  {
    icon: Handshake,
    title: 'Asesoría sin costo',
    body: 'Analizamos tu proyecto, contrato o necesidad y diseñamos la solución correcta. Nuestra asesoría no tiene cargo: trabajamos por comisión institucional.',
  },
  {
    icon: Building2,
    title: 'Las mejores afianzadoras',
    body: 'Operamos con más de 10 instituciones de primer nivel. Conseguimos las condiciones, primas y tiempos que un agente común no puede ofrecer.',
  },
  {
    icon: Award,
    title: 'Reconocimiento institucional',
    body: 'Dependencias federales, estatales y privadas nos reconocen como contraparte seria. Tu fianza se acepta sin observaciones técnicas.',
  },
  {
    icon: LineChart,
    title: 'Líneas de afianzamiento',
    body: 'Diseñamos y administramos tu línea revolvente. Renovaciones, ampliaciones y reportes financieros para que sólo te concentres en producir.',
  },
]

function ValueCard({ value, index }) {
  const Icon = value.icon
  return (
    <motion.div
      variants={fadeUp}
      className={`relative p-10 lg:p-12 ${
        index !== VALUES.length - 1 ? 'lg:border-r border-bone-50/10' : ''
      } ${index > 0 && index < VALUES.length ? 'border-t lg:border-t-0' : ''} border-bone-50/10`}
    >
      <div className="font-mono text-bronze-300/70 text-[10px] mb-8">
        / {String(index + 1).padStart(2, '0')}
      </div>
      <Icon
        size={28}
        strokeWidth={1.3}
        className="text-bronze-400 mb-7"
        aria-hidden="true"
      />
      <h3 className="font-serif text-bone-50 text-2xl lg:text-3xl mb-4 leading-tight">
        {value.title}
      </h3>
      <p className="text-bone-50/65 text-[15px] leading-relaxed">
        {value.body}
      </p>
    </motion.div>
  )
}

export default function ValueAdd() {
  return (
    <section className="bg-petrol-700 text-bone-50 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-noise mix-blend-overlay" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-bronze-500/40" />

      <div className="container-px relative pt-28 lg:pt-32 pb-0">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-300">
            07 — Valor agregado
          </span>
          <span className="h-px flex-1 bg-bone-50/15 max-w-[280px]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <h2 className="lg:col-span-7 h-display text-bone-50 text-display-lg">
            Lo que recibes cuando
            <br />
            trabajamos <span className="italic text-bronze-300">contigo</span>.
          </h2>
          <p className="lg:col-span-5 text-bone-50/70 text-lg leading-relaxed lg:pl-6 lg:border-l border-bronze-500/40">
            Más que una póliza: un equipo que entiende contratos públicos y
            privados, conoce los formatos de cada institución y responde el día
            que tu garantía se ejerce.
          </p>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.1)}
        className="grid lg:grid-cols-4 border-t border-bone-50/10"
      >
        {VALUES.map((v, i) => (
          <ValueCard key={v.title} value={v} index={i} />
        ))}
      </motion.div>
    </section>
  )
}
