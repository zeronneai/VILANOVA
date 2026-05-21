import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-cream-50">
      <div className="container-px grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div ref={r1} className="reveal lg:col-span-5">
          <p className="eyebrow mb-5">Quiénes somos</p>
          <h2 className="h-display text-navy-600 text-4xl sm:text-5xl lg:text-[56px]">
            Tres generaciones cuidando la palabra empeñada.
          </h2>
          <div className="gold-rule mt-8" />
        </div>

        <div className="lg:col-span-7 space-y-7 text-navy-600/85 text-lg leading-relaxed">
          <p ref={r2} className="reveal">
            En 1955 nuestra familia firmó la primera póliza con un principio
            que aún nos define: <em className="text-navy-600">la palabra
            empeñada vale más que cualquier contrato</em>. Siete décadas después,
            ese mismo principio guía cada asesoría que entregamos a contratistas,
            empresas y familias en Chihuahua, Torreón, Xalapa y Querétaro.
          </p>
          <p ref={r3} className="reveal" style={{ transitionDelay: '120ms' }}>
            Somos consultores, no vendedores de pólizas. Estudiamos cada
            proyecto, escogemos la afianzadora o aseguradora correcta y te
            acompañamos hasta la emisión y, sobre todo, hasta el día en que la
            garantía tiene que responder. Conocemos los formatos de CFE, PEMEX,
            obra pública federal y privada, y los procesos de las principales
            instituciones financieras del país.
          </p>

          <div className="pt-4 grid sm:grid-cols-3 gap-6">
            {[
              ['Trayectoria', 'Setenta años de relaciones sólidas con afianzadoras y aseguradoras.'],
              ['Honestidad', 'Asesoría transparente. Cobramos comisión a la institución, no a ti.'],
              ['Acompañamiento', 'Atención personal del primer contacto hasta la reclamación.'],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-gold-500/40 pt-4">
                <h4 className="font-serif text-navy-600 text-xl mb-2">
                  {title}
                </h4>
                <p className="text-sm text-navy-600/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
