import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

const NAV = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Fianzas', href: '#fianzas' },
  { label: 'Seguros', href: '#seguros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-600/95 backdrop-blur-md border-b border-navy-500/50 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px flex items-center justify-between h-20">
        <a href="#top" aria-label="Inicio">
          <Logo variant="light" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream-50/85 hover:text-gold-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary !py-2.5 !px-5">
            Asesoría sin costo
          </a>
        </nav>

        <button
          className="lg:hidden text-cream-50 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden bg-navy-600 border-t border-navy-500/50">
          <div className="container-px py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-cream-50/90 text-base"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Asesoría sin costo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
