import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'

export default function Hero() {
  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Imagen institucional de fondo. Sustituir por foto del despacho. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />

      {/* Detalle dorado lateral */}
      <div className="absolute left-0 top-1/3 w-px h-40 bg-gold-500/60 hidden md:block" />

      <div className="container-px relative z-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <p className="eyebrow text-gold-400 mb-6 animate-fade-in">
            Despacho fundado en 1955 · Tercera generación
          </p>

          <h1 className="h-display text-cream-50 text-4xl sm:text-5xl lg:text-[64px] xl:text-[72px] mb-8 animate-fade-up">
            70 años de experiencia,{' '}
            <span className="italic text-gold-300">honestidad</span> y el empuje
            de 3 generaciones nos respaldan.
          </h1>

          <p
            className="text-cream-50/85 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            Garantizamos el éxito de tu proyecto con asesoría experta en
            fianzas y seguros, conexión directa con las afianzadoras y
            aseguradoras más sólidas de México, y un servicio personalizado que
            entiende tu industria.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            <a href="#contacto" className="btn-primary group">
              Solicita tu asesoría sin costo
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Sellos de confianza */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl text-cream-50/70 text-xs sm:text-sm">
            <div>
              <div className="font-serif text-gold-300 text-2xl sm:text-3xl mb-1">
                70
              </div>
              <div className="uppercase tracking-widest2 text-[10px] sm:text-[11px]">
                Años en el mercado
              </div>
            </div>
            <div>
              <div className="font-serif text-gold-300 text-2xl sm:text-3xl mb-1">
                3
              </div>
              <div className="uppercase tracking-widest2 text-[10px] sm:text-[11px]">
                Generaciones
              </div>
            </div>
            <div>
              <div className="font-serif text-gold-300 text-2xl sm:text-3xl mb-1">
                4
              </div>
              <div className="uppercase tracking-widest2 text-[10px] sm:text-[11px]">
                Oficinas en México
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-50/60 text-[10px] uppercase tracking-widest2 flex flex-col items-center gap-2">
        <span>Descubre</span>
        <span className="block w-px h-10 bg-cream-50/40" />
      </div>
    </section>
  )
}
