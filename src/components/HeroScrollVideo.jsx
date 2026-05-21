import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { hero, assets } from '../data/copy.js'
import { siteConfig } from '../data/siteConfig.js'
import ShineButton from './ui/ShineButton.jsx'

const EASE = [0.22, 1, 0.36, 1]

export default function HeroScrollVideo() {
  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-graphite-700 overflow-hidden"
    >
      {/* Video de fondo en loop */}
      <video
        src={assets.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Overlay para contraste */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,13,16,0.55) 0%, rgba(11,13,16,0.25) 35%, rgba(11,13,16,0.55) 75%, rgba(11,13,16,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Glow ice-blue sutil */}
      <div
        className="absolute inset-0 bg-ice-glow opacity-30 mix-blend-screen pointer-events-none"
        aria-hidden="true"
      />

      {/* Grain */}
      <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay pointer-events-none" />

      {/* Contenido centrado */}
      <div className="relative container-px w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-8 h-px bg-ice-500" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest3 text-ice-300">
              {hero.eyebrow}
            </span>
            <span className="w-8 h-px bg-ice-500" />
          </motion.div>

          {/* Big Promise */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.35 }}
            className="font-display text-d-1 text-offwhite font-medium leading-[0.98]"
          >
            Conseguimos tu fianza en{' '}
            <span className="font-display-italic text-metal-cool">
              48 horas,
            </span>{' '}
            sin avales personales — o no nos llevamos un peso.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.65 }}
            className="mt-10 max-w-2xl text-platinum-200/85 text-base sm:text-lg leading-relaxed font-light"
          >
            {hero.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.85 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <ShineButton
              href="#godfather"
              variant="metal"
              size="lg"
              withArrow
            >
              {hero.ctaPrimary}
            </ShineButton>
            <ShineButton
              href={waLink}
              variant="outline-light"
              size="lg"
              withArrow={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              {hero.ctaSecondary}
            </ShineButton>
          </motion.div>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 1.05 }}
            className="mt-8 text-[11px] uppercase tracking-widest2 text-platinum-200/55 font-mono"
          >
            {hero.microCta}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
