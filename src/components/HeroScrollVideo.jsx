import { useRef } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { hero, assets } from '../data/copy.js'
import { siteConfig } from '../data/siteConfig.js'
import ShineButton from './ui/ShineButton.jsx'

const EASE = [0.22, 1, 0.36, 1]

export default function HeroScrollVideo() {
  const videoRef = useRef(null)

  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`

  // Cuando el video termina, lo pausamos en el último frame.
  const handleEnded = () => {
    const v = videoRef.current
    if (!v) return
    try {
      v.pause()
      // Asegura quedarse en el último frame visible
      if (v.duration && Number.isFinite(v.duration)) {
        v.currentTime = Math.max(0, v.duration - 0.05)
      }
    } catch {
      /* noop */
    }
  }

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-graphite-700 overflow-hidden"
    >
      {/* Video de fondo: reproduce una vez y se queda en el último frame */}
      <video
        ref={videoRef}
        src={assets.heroVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        disableRemotePlayback
        onEnded={handleEnded}
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

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.65 }}
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
        </div>
      </div>
    </section>
  )
}
