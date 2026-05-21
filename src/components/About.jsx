import { motion } from 'motion/react'
import Reveal, { WordsReveal } from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

const PILLARS = [
  ['Trayectoria', 'Setenta años de relaciones sólidas con afianzadoras y aseguradoras de México.'],
  ['Honestidad', 'Asesoría transparente. Cobramos comisión a la institución, no a ti.'],
  ['Acompañamiento', 'Atención personal desde el primer contacto hasta la reclamación.'],
]

export default function About() {
  return (
    <section id="nosotros" className="py-28 lg:py-36 bg-bone-50 relative">
      <div className="container-px">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-600">
            03 — Quiénes somos
          </span>
          <span className="h-px flex-1 bg-ink-100 max-w-[280px]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="h-display text-ink-600 text-display-lg">
              <span className="block">
                <WordsReveal text="Tres generaciones" />
              </span>
              <span className="block">
                <WordsReveal
                  text="cuidando la palabra"
                  delay={0.15}
                />
              </span>
              <span className="block italic text-bronze-500">
                <WordsReveal text="empeñada." delay={0.3} />
              </span>
            </h2>
            <Reveal delay={0.5}>
              <div className="gold-rule-lg mt-10" />
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-8 text-ink-600/85 text-lg leading-relaxed">
            <Reveal>
              <p className="first-letter:font-serif first-letter:text-6xl first-letter:font-medium first-letter:text-bronze-500 first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
                En 1955 nuestra familia firmó la primera póliza con un principio
                que aún nos define: <em>la palabra empeñada vale más que cualquier
                contrato</em>. Siete décadas después, ese mismo principio guía cada
                asesoría que entregamos a contratistas, empresas y familias en
                Chihuahua, Torreón, Xalapa y Querétaro.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                Somos consultores, no vendedores de pólizas. Estudiamos cada
                proyecto, escogemos la afianzadora o aseguradora correcta y te
                acompañamos hasta la emisión y, sobre todo, hasta el día en que
                la garantía tiene que responder. Conocemos los formatos de CFE,
                PEMEX, obra pública federal y privada, y los procesos de las
                principales instituciones financieras del país.
              </p>
            </Reveal>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={stagger(0.12)}
              className="pt-6 grid sm:grid-cols-3 gap-7"
            >
              {PILLARS.map(([title, body]) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="border-t border-bronze-500/40 pt-5"
                >
                  <h4 className="font-serif text-ink-600 text-2xl mb-2">
                    {title}
                  </h4>
                  <p className="text-sm text-ink-600/70 leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
