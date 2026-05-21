import Logo from './Logo.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink-700 text-bone-50/75 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/40 to-transparent" />
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container-px relative">
        {/* Bloque editorial superior */}
        <div className="pb-16 mb-16 border-b border-bone-50/10">
          <div className="font-mono text-[10px] uppercase tracking-widest3 text-bronze-300 mb-6">
            — Desde 1955
          </div>
          <h3 className="h-display text-bone-50 text-display-md max-w-3xl">
            Si tu palabra es{' '}
            <span className="italic text-bronze-300">seria</span>,
            <br />
            la nuestra la respalda.
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 pb-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 text-sm text-bone-50/60 max-w-sm leading-relaxed">
              70 años respaldando el éxito de proyectos con asesoría experta en
              fianzas y seguros. Honestidad, trayectoria y servicio
              personalizado en cada operación.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-bone-50 font-mono uppercase tracking-widest2 text-[10px] mb-5">
              Fianzas
            </h5>
            <ul className="space-y-2.5 text-sm text-bone-50/65">
              <li>Licitación, anticipo, cumplimiento</li>
              <li>Programa de contratistas</li>
              <li>Suministro ante CFE</li>
              <li>Fiscales y arrendamiento</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-bone-50 font-mono uppercase tracking-widest2 text-[10px] mb-5">
              Seguros
            </h5>
            <ul className="space-y-2.5 text-sm text-bone-50/65">
              <li>Obra civil y montaje</li>
              <li>Empresarial / flotillas</li>
              <li>Vida y socios</li>
              <li>Auto y hogar</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-bone-50 font-mono uppercase tracking-widest2 text-[10px] mb-5">
              Empresa
            </h5>
            <ul className="space-y-2.5 text-sm text-bone-50/65">
              <li>
                <a href="#nosotros" className="hover:text-bronze-300 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#trayectoria" className="hover:text-bronze-300 transition-colors">
                  Trayectoria
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-bronze-300 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-bone-50/10 flex flex-col sm:flex-row gap-4 justify-between text-xs text-bone-50/50">
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
