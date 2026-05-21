import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { hero, assets } from '../data/copy.js'
import { siteConfig } from '../data/siteConfig.js'
import ShineButton from './ui/ShineButton.jsx'
import useMediaQuery from '../hooks/useMediaQuery.js'
import { WordsReveal } from './ui/Reveal.jsx'

export default function HeroScrollVideo() {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
  const [duration, setDuration] = useState(0)
  const isMobile = useMediaQuery('(max-width: 1023px)')
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // En móvil dejamos el video en loop; en desktop scrubbing
  const useScrubbing = !isMobile && !reduced

  // Capas de texto cronografiadas por scroll progress
  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.10, 0.20], [1, 1, 0])
  const eyebrowY       = useTransform(scrollYProgress, [0, 0.20], [0, -30])

  const promiseOpacity = useTransform(scrollYProgress, [0.18, 0.30, 0.62, 0.74], [0, 1, 1, 0])
  const promiseY       = useTransform(scrollYProgress, [0.18, 0.30, 0.74], [40, 0, -30])
  const promiseScale   = useTransform(scrollYProgress, [0.18, 0.30, 0.74], [1.03, 1, 0.98])

  const ctaOpacity     = useTransform(scrollYProgress, [0.70, 0.82, 0.95, 1], [0, 1, 1, 1])
  const ctaY           = useTransform(scrollYProgress, [0.70, 0.82], [40, 0])

  // Glow ice-blue acompaña al hero
  const glowOpacity    = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.75, 0.55])

  // Scrubbing del video
  useEffect(() => {
    if (!useScrubbing) return
    const v = videoRef.current
    if (!v) return

    const onMeta = () => {
      setDuration(v.duration || 0)
      setVideoReady(true)
    }
    if (v.readyState >= 1) onMeta()
    v.addEventListener('loadedmetadata', onMeta)
    return () => v.removeEventListener('loadedmetadata', onMeta)
  }, [useScrubbing])

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    if (!useScrubbing || !videoReady) return
    const v = videoRef.current
    if (!v || !duration) return
    const t = Math.max(0, Math.min(duration - 0.05, p * duration))
    // Usar requestAnimationFrame para no saturar el main thread
    if (!v._rafScheduled) {
      v._rafScheduled = true
      requestAnimationFrame(() => {
        v.currentTime = t
        v._rafScheduled = false
      })
    }
  })

  // Auto-play en móvil
  useEffect(() => {
    if (useScrubbing) return
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.loop = true
    v.play().catch(() => {})
  }, [useScrubbing])

  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`

  return (
    <section
      id="top"
      ref={ref}
      className={`relative bg-graphite-700 ${useScrubbing ? 'h-[300vh]' : 'min-h-[100svh]'}`}
    >
      {/* Sticky stage */}
      <div
        className={`${useScrubbing ? 'sticky top-0' : 'relative'} h-[100svh] w-full overflow-hidden`}
      >
        {/* Capa video */}
        <video
          ref={videoRef}
          src={assets.heroVideo}
          muted
          playsInline
          preload="auto"
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />

        {/* Overlay degradado para contraste de texto */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,13,16,0.45) 0%, rgba(11,13,16,0.15) 30%, rgba(11,13,16,0.50) 70%, rgba(11,13,16,0.92) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Glow ice-blue */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 bg-ice-glow pointer-events-none mix-blend-screen"
          aria-hidden="true"
        />

        {/* Grain */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

        {/* Side meta */}
        <div className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] uppercase tracking-widest3 text-platinum-200/70 font-mono">
          Est. MCMLV · Chihuahua · México
        </div>
        <div className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[10px] uppercase tracking-widest3 text-platinum-200/70 font-mono">
          Vilanova · Tercera generación
        </div>

        {/* Frame editorial */}
        <div className="absolute inset-x-8 top-28 h-px hairline-d hidden lg:block" />
        <div className="absolute inset-x-8 bottom-16 h-px hairline-d hidden lg:block" />

        {/* Contenido */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-px relative w-full">
            {/* Capa 1: Eyebrow */}
            <motion.div
              style={
                useScrubbing
                  ? { opacity: eyebrowOpacity, y: eyebrowY }
                  : undefined
              }
              initial={!useScrubbing ? { opacity: 0, y: 20 } : false}
              animate={!useScrubbing ? { opacity: 1, y: 0 } : undefined}
              transition={!useScrubbing ? { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 } : undefined}
              className="absolute top-[18%] sm:top-[14%] left-0 right-0 px-6 sm:px-8 lg:px-14 max-w-[1440px] mx-auto"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-ice-500" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest3 text-ice-300">
                  {hero.eyebrow}
                </span>
              </div>
            </motion.div>

            {/* Capa 2: Big Promise */}
            <motion.div
              style={
                useScrubbing
                  ? { opacity: promiseOpacity, y: promiseY, scale: promiseScale }
                  : undefined
              }
              initial={!useScrubbing ? { opacity: 0, y: 30 } : false}
              animate={!useScrubbing ? { opacity: 1, y: 0 } : undefined}
              transition={!useScrubbing ? { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 } : undefined}
              className="max-w-[1100px]"
            >
              <h1 className="font-display text-d-1 text-offwhite font-medium">
                <span className="block">
                  <WordsReveal text="Conseguimos tu fianza en" />
                </span>
                <span className="block">
                  <span className="font-display-italic text-metal-cool">
                    <WordsReveal text="48 horas," delay={0.15} />
                  </span>{' '}
                  <WordsReveal text="sin avales" delay={0.3} />
                </span>
                <span className="block">
                  <WordsReveal text="personales — o no nos" delay={0.45} />
                </span>
                <span className="block">
                  <WordsReveal text="llevamos un peso." delay={0.6} />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
                className="mt-8 max-w-2xl text-platinum-200/85 text-base sm:text-lg leading-relaxed font-light"
              >
                {hero.subhead}
              </motion.p>
            </motion.div>

            {/* Capa 3: CTA */}
            <motion.div
              style={
                useScrubbing
                  ? { opacity: ctaOpacity, y: ctaY }
                  : undefined
              }
              initial={!useScrubbing ? { opacity: 0, y: 30 } : false}
              animate={!useScrubbing ? { opacity: 1, y: 0 } : undefined}
              transition={!useScrubbing ? { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.3 } : undefined}
              className="absolute bottom-[14%] sm:bottom-[10%] left-0 right-0 px-6 sm:px-8 lg:px-14 max-w-[1440px] mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-platinum-200/60 font-mono">
                {hero.microCta}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        {useScrubbing && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-platinum-200/50">
            <span className="font-mono text-[10px] uppercase tracking-widest3">
              Desliza
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="block w-px h-8 bg-platinum-200/40"
            />
          </div>
        )}
      </div>
    </section>
  )
}
