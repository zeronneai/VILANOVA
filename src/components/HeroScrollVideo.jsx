import { useRef } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowDown } from 'lucide-react'
import { assets, hero } from '../data/copy.js'
import { siteConfig } from '../data/siteConfig.js'
import ShineButton from './ui/ShineButton.jsx'

const EASE = [0.22, 1, 0.36, 1]

export default function HeroScrollVideo({ unlocked = false, onUnlock }) {
  const videoRef = useRef(null)

  const handleEnded = () => {
    const v = videoRef.current
    if (!v) return
    try {
      v.pause()
      if (v.duration && Number.isFinite(v.duration)) {
        v.currentTime = Math.max(0, v.duration - 0.05)
      }
    } catch {
      /* noop */
    }
  }

  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center bg-graphite-700 overflow-hidden"
    >
      {/* Video: una sola pasada, congela al final */}
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

      {/* Glow ice */}
      <div
        className="absolute inset-0 bg-ice-glow opacity-25 mix-blend-screen pointer-events-none"
        aria-hidden="true"
      />

      {/* Grain */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />

      {/* ============ GATE (estado bloqueado) ============ */}
      <motion.div
        initial={false}
        animate={{
          opacity: unlocked ? 0 : 1,
          y: unlocked ? -16 : 0,
          scale: unlocked ? 0.98 : 1,
        }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`absolute inset-0 z-30 flex items-center justify-center px-6 sm:px-8 ${
          unlocked ? 'pointer-events-none' : ''
        }`}
      >
        <div className="w-full max-w-md sm:max-w-lg flex flex-col items-stretch sm:items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: unlocked ? 0 : 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.35 }}
            className="w-full"
          >
            <ShineButton
              as="button"
              onClick={onUnlock}
              variant="metal"
              size="lg"
              withArrow={false}
              className="w-full justify-center"
            >
              <ArrowDown size={16} className="shrink-0" />
              <span>Conoce lo que hacemos por ti</span>
            </ShineButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: unlocked ? 0 : 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.55 }}
            className="w-full"
          >
            <ShineButton
              href={waLink}
              variant="outline-light"
              size="lg"
              withArrow={false}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center"
            >
              <MessageCircle size={16} className="shrink-0" />
              <span>Mensaje directo con un asesor</span>
            </ShineButton>
          </motion.div>
        </div>
      </motion.div>

      {/* ============ HERO COMPLETO (post-unlock) ============ */}
      <motion.div
        initial={false}
        animate={{
          opacity: unlocked ? 1 : 0,
          y: unlocked ? 0 : 24,
        }}
        transition={{
          duration: 1,
          ease: EASE,
          delay: unlocked ? 0.35 : 0,
        }}
        className={`relative container-px w-full ${
          unlocked ? '' : 'pointer-events-none'
        }`}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.h1
            initial={false}
            animate={{
              opacity: unlocked ? 1 : 0,
              y: unlocked ? 0 : 24,
            }}
            transition={{
              duration: 1,
              ease: EASE,
              delay: unlocked ? 0.45 : 0,
            }}
            className="font-display text-d-1 text-offwhite font-medium leading-[0.98]"
          >
            Conseguimos tu fianza en{' '}
            <span className="font-display-italic text-metal-cool">
              48 horas,
            </span>{' '}
            sin avales personales — o no nos llevamos un peso.
          </motion.h1>

          <motion.div
            initial={false}
            animate={{
              opacity: unlocked ? 1 : 0,
              y: unlocked ? 0 : 20,
            }}
            transition={{
              duration: 1,
              ease: EASE,
              delay: unlocked ? 0.75 : 0,
            }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center w-full sm:w-auto"
          >
            <ShineButton
              href="#godfather"
              variant="metal"
              size="lg"
              withArrow
              className="w-full sm:w-auto justify-center"
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
              className="w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} className="shrink-0" />
              {hero.ctaSecondary}
            </ShineButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
