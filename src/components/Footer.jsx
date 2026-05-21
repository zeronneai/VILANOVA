import Logo from './Logo.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-graphite-700 text-platinum-200/75 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ice-500/40 to-transparent" />
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container-px relative">
        {/* Bloque editorial superior */}
        <div className="pb-16 mb-16 border-b border-hairline-d">
          <div className="font-mono text-[10px] uppercase tracking-widest3 text-ice-300 mb-6">
            — Desde 1955
          </div>
          <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-offwhite font-medium leading-[1.05] max-w-3xl">
            Si tu palabra es{' '}
            <span className="font-display-italic text-metal-cool">seria</span>,
            <br />
            la nuestra la respalda.
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 pb-12">
          <div className="lg:col-span-5">
            <Logo variant="light" size="md" />
            <p className="mt-6 text-sm text-platinum-200/60 max-w-sm leading-relaxed">
              70 años respaldando el éxito de proyectos con asesoría experta en
              fianzas y seguros. Honestidad, trayectoria y servicio
              personalizado en cada operación.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-offwhite font-mono uppercase tracking-widest2 text-[10px] mb-5">
              Fianzas
            </h5>
            <ul className="space-y-2.5 text-sm text-platinum-200/65">
              <li>Licitación, anticipo, cumplimiento</li>
              <li>Programa de contratistas</li>
              <li>Suministro ante CFE</li>
              <li>Fiscales y arrendamiento</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-offwhite font-mono uppercase tracking-widest2 text-[10px] mb-5">
              Seguros
            </h5>
            <ul className="space-y-2.5 text-sm text-platinum-200/65">
              <li>Obra civil y montaje</li>
              <li>Empresarial / flotillas</li>
              <li>Vida y socios</li>
              <li>Auto y hogar</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-offwhite font-mono uppercase tracking-widest2 text-[10px] mb-5">
              Empresa
            </h5>
            <ul className="space-y-2.5 text-sm text-platinum-200/65">
              <li>
                <a
                  href="#solucion"
                  className="hover:text-ice-300 transition-colors"
                >
                  Solución
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="hover:text-ice-300 transition-colors"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-ice-300 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-hairline-d flex flex-col sm:flex-row gap-4 justify-between text-xs text-platinum-200/50">
          <p className="font-mono">
            © {year} {siteConfig.brandFull}. Todos los derechos reservados.
          </p>
          <p>
            Aviso de privacidad disponible para consulta en nuestras oficinas y
            por correo electrónico.
          </p>
        </div>
      </div>
    </footer>
  )
}
