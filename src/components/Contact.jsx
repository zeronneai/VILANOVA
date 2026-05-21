import { MapPin, Phone, Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import LeadForm from './LeadForm.jsx'
import { useReveal } from '../hooks/useReveal.js'

function OfficeCard({ office }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal p-6 border ${
        office.isHQ ? 'border-gold-500 bg-cream-50' : 'border-navy-100 bg-white'
      }`}
    >
      <div className="flex items-baseline justify-between mb-3">
        <h4 className="font-serif text-xl text-navy-600">{office.city}</h4>
        {office.isHQ && (
          <span className="text-[10px] uppercase tracking-widest2 text-gold-600 font-semibold">
            Corporativo
          </span>
        )}
      </div>
      <p className="text-sm text-navy-600/75 leading-relaxed mb-3">
        {office.address}
      </p>
      <a
        href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
        className="inline-flex items-center gap-2 text-sm text-navy-600 hover:text-gold-600 font-medium"
      >
        <Phone size={14} /> {office.phone}
      </a>
    </div>
  )
}

export default function Contact() {
  const intro = useReveal()
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-cream-100">
      <div className="container-px">
        <div ref={intro} className="reveal max-w-3xl mb-16">
          <p className="eyebrow mb-5">Contacto</p>
          <h2 className="h-display text-navy-600 text-4xl sm:text-5xl lg:text-[56px]">
            Hablemos de tu próximo{' '}
            <span className="italic text-gold-500">proyecto</span>.
          </h2>
          <div className="gold-rule mt-8 mb-7" />
          <p className="text-navy-600/75 text-lg leading-relaxed">
            Cuatro oficinas en México atendiendo a contratistas, empresas y
            familias. Llámanos, escríbenos o agenda tu asesoría sin costo.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            {siteConfig.locations.map((o) => (
              <OfficeCard key={o.city} office={o} />
            ))}

            <div className="pt-3 flex items-center gap-2 text-sm text-navy-600/75">
              <Mail size={14} className="text-gold-500" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-600">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>

        {/* Mapa corporativo Chihuahua */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={16} className="text-gold-500" />
            <p className="eyebrow !text-navy-600">Corporativo Chihuahua</p>
          </div>
          <div className="aspect-[16/7] w-full overflow-hidden border border-navy-100 bg-white">
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
      </div>
    </section>
  )
}
