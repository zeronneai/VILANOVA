import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import { WordsReveal } from './ui/Reveal.jsx'
import MagneticButton from './ui/MagneticButton.jsx'

export default function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '22%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.08])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '-12%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 1])

  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink-700"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-10 will-change-transform"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=85')",
          }}
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-hero-overlay"
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,5,9,0.55)_100%)]" />
        {/* Grano */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </motion.div>

      {/* Top frame elements */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute top-32 left-0 right-0 h-px bg-bone-50/15 origin-left hidden lg:block"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute left-8 top-32 bottom-0 w-px bg-bone-50/15 origin-top hidden lg:block"
      />

      {/* Side meta — vertical */}
      <div className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] uppercase tracking-widest3 text-bone-50/40 font-mono">
        Est. 1955 · Chihuahua · México
      </div>
      <div className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[10px] uppercase tracking-widest3 text-bone-50/40 font-mono">
        Fianzas &amp; Seguros · Tercera generación
      </div>

      <motion.div
        style={{ y: contentY }}
        className="container-px relative z-10 pt-40 pb-20 lg:pb-28"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="h-px w-10 bg-bronze-400" />
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-300">
            01 — Despacho fundado en 1955
          </span>
        </motion.div>

        {/* Titular masivo */}
        <h1 className="h-display text-bone-50 text-display-xl max-w-[1100px] mb-10">
          <span className="block">
            <WordsReveal text="70 años de experiencia," />
          </span>
          <span className="block">
            <WordsReveal
              text="honestidad y el empuje"
              italicWords={['honestidad']}
              highlightWords={['honestidad']}
              delay={0.15}
            />
          </span>
          <span className="block">
            <WordsReveal text="de 3 generaciones nos respaldan." delay={0.3} />
          </span>
        </h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="text-bone-50/80 text-lg sm:text-xl max-w-2xl leading-relaxed mb-12 font-light"
        >
          Garantizamos el éxito de tu proyecto con asesoría experta en fianzas
          y seguros, conexión directa con las instituciones más sólidas de
          México, y un servicio personalizado que entiende tu industria.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <MagneticButton href="#contacto" className="btn-primary group">
            <span>Solicita tu asesoría sin costo</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </MagneticButton>
          <MagneticButton
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            strength={10}
          >
            <MessageCircle size={18} />
            <span>Escríbenos por WhatsApp</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Bottom bar con sellos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        className="absolute bottom-0 inset-x-0 z-10 border-t border-bone-50/15 bg-ink-700/30 backdrop-blur-sm"
      >
        <div className="container-px py-5 flex items-center justify-between text-bone-50/70 text-xs uppercase tracking-widest2 gap-4">
          <div className="flex items-center gap-6 sm:gap-10 overflow-hidden">
            <span className="hidden sm:inline font-mono">[ Trayectoria ]</span>
            <span>4 oficinas en México</span>
            <span className="hidden md:inline opacity-50">·</span>
            <span className="hidden md:inline">+10 instituciones aliadas</span>
          </div>
          <a
            href="#trayectoria"
            className="font-mono flex items-center gap-2 hover:text-bronze-300 transition-colors whitespace-nowrap"
          >
            <span className="hidden sm:inline">Descubre</span>
            <span aria-hidden>↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
