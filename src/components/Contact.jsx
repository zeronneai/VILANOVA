import { motion } from 'motion/react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import LeadForm from './LeadForm.jsx'
import Reveal from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

function OfficeCard({ office }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`p-6 lg:p-7 transition-colors duration-500 ${
        office.isHQ
          ? 'border border-bronze-500 bg-bone-50 hover:bg-white'
          : 'border border-ink-100 bg-white hover:border-bronze-300'
      }`}
    >
      <div className="flex items-baseline justify-between mb-3">
        <h4 className="font-serif text-2xl text-ink-600">{office.city}</h4>
        {office.isHQ && (
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-600 font-semibold">
            ★ Corporativo
          </span>
        )}
      </div>
      <p className="text-sm text-ink-600/75 leading-relaxed mb-4">
        {office.address}
      </p>
      <a
        href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
        className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-bronze-600 font-medium border-b border-transparent hover:border-bronze-500 transition-all"
      >
        <Phone size={14} /> {office.phone}
      </a>
    </motion.div>
  )
}

export default function Contact() {
  return (
    <section id="contacto" className="py-28 lg:py-36 bg-bone-100">
      <div className="container-px">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-600">
            09 — Contacto
          </span>
          <span className="h-px flex-1 bg-ink-100 max-w-[280px]" />
        </div>

        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
            <h2 className="lg:col-span-7 h-display text-ink-600 text-display-lg">
              Hablemos de tu próximo{' '}
              <span className="italic text-bronze-500">proyecto</span>.
            </h2>
            <p className="lg:col-span-5 text-ink-600/75 text-lg leading-relaxed lg:pl-6 lg:border-l border-bronze-500/50">
              Cuatro oficinas en México atendiendo a contratistas, empresas y
              familias. Llámanos, escríbenos o agenda tu asesoría sin costo: te
              respondemos el mismo día hábil.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.08)}
            className="lg:col-span-5 space-y-4"
          >
            {siteConfig.locations.map((o) => (
              <OfficeCard key={o.city} office={o} />
            ))}

            <motion.div
              variants={fadeUp}
              className="pt-3 flex items-center gap-2 text-sm text-ink-600/75"
            >
              <Mail size={14} className="text-bronze-500" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-bronze-600"
              >
                {siteConfig.email}
              </a>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <LeadForm />
            </Reveal>
          </div>
        </div>

        {/* Mapa corporativo */}
        <Reveal delay={0.1}>
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-5">
              <MapPin size={16} className="text-bronze-500" />
              <p className="font-mono text-[10px] uppercase tracking-widest3 text-ink-600">
                Corporativo Chihuahua
              </p>
              <span className="h-px flex-1 bg-ink-100" />
            </div>
            <div className="aspect-[16/7] w-full overflow-hidden border border-ink-100 bg-white">
              <iframe
                title="Mapa Vilanova Chihuahua"
                src={siteConfig.mapEmbedUrl}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
