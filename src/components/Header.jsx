import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import ShineButton from './ui/ShineButton.jsx'

const NAV = [
  { num: '01', label: 'Problema', href: '#problema' },
  { num: '02', label: 'Solución', href: '#solucion' },
  { num: '03', label: 'Servicios', href: '#fianzas' },
  { num: '06', label: 'Proceso', href: '#proceso' },
  { num: '09', label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-graphite-700/70 backdrop-blur-xl border-b border-hairline-d'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px flex items-center justify-between h-20">
        <a href="#top" aria-label="Inicio" className="z-10">
          <Logo variant="light" size="md" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-1.5 text-[13px] font-medium text-platinum-200/80 hover:text-ice-300 transition-colors"
            >
              <span className="font-mono text-[10px] text-platinum-200/40 group-hover:text-ice-400 transition-colors">
                {item.num}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
          <ShineButton href="#godfather" variant="metal" size="sm" withArrow>
            Reclama tu sesión
          </ShineButton>
        </nav>

        <button
          className="lg:hidden text-offwhite p-2 z-10"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-graphite-700 border-t border-hairline-d overflow-hidden"
          >
            <div className="container-px py-7 flex flex-col gap-5">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="flex items-baseline gap-3 text-offwhite/90 text-lg"
                >
                  <span className="font-mono text-[10px] text-ice-400">
                    {item.num}
                  </span>
                  {item.label}
                </motion.a>
              ))}
              <ShineButton
                href="#godfather"
                onClick={() => setOpen(false)}
                variant="metal"
                size="md"
                className="mt-3"
              >
                Reclama tu sesión
              </ShineButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
