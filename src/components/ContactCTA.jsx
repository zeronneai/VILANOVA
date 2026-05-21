import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import { contact } from '../data/copy.js'
import LeadForm from './LeadForm.jsx'
import HairlineRule from './ui/HairlineRule.jsx'
import Reveal, { WordsReveal } from './ui/Reveal.jsx'
import { stagger, fadeUp, viewportOnce } from '../lib/motion.js'

function OfficeCard({ office }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`p-6 lg:p-7 transition-all duration-500 ${
        office.isHQ
          ? 'border border-ice-500/60 bg-white hover:shadow-soft'
          : 'border border-hairline bg-white hover:border-ice-500/40'
      }`}
    >
      <div className="flex items-baseline justify-between mb-3">
        <h4 className="font-display text-2xl text-graphite-700 font-medium">
          {office.city}
        </h4>
        {office.isHQ && (
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-ice-600 font-semibold">
            ★ Corporativo
          </span>
        )}
      </div>
      <p className="text-sm text-graphite-500 leading-relaxed mb-4">
        {office.address}
      </p>
      <a
        href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
        className="inline-flex items-center gap-2 text-sm text-graphite-700 hover:text-ice-600 font-medium border-b border-transparent hover:border-ice-500 transition-all"
      >
        <Phone size={14} /> {office.phone}
      </a>
    </motion.div>
  )
}

export default function ContactCTA() {
  return (
    <section id="contacto" className="py-28 lg:py-36 bg-offwhite">
      <div className="container-px">
        <div className="mb-14">
          <HairlineRule num={contact.num} label={contact.eyebrow} />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20 items-end">
          <h2 className="lg:col-span-7 font-display text-d-2 text-graphite-700 font-medium">
            <WordsReveal text="Cuéntanos tu próxima licitación." />
          </h2>
          <p className="lg:col-span-5 text-graphite-500 text-lg leading-relaxed lg:pl-6 lg:border-l border-ice-500/40">
            {contact.subhead}
          </p>
        </div>

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
              className="pt-3 flex items-center gap-2 text-sm text-graphite-500"
            >
              <Mail size={14} className="text-ice-500" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-ice-600"
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

        <Reveal delay={0.1}>
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-5">
              <MapPin size={16} className="text-ice-500" />
              <p className="font-mono text-[10px] uppercase tracking-widest3 text-graphite-500">
                Corporativo Chihuahua
              </p>
              <span className="h-px flex-1 bg-hairline" />
            </div>
            <div className="aspect-[16/7] w-full overflow-hidden border border-hairline bg-white">
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
