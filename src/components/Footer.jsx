import Logo from './Logo.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-700 text-cream-50/80 pt-16 pb-8">
      <div className="container-px">
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-cream-50/10">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 text-sm text-cream-50/65 max-w-sm leading-relaxed">
              70 años respaldando el éxito de proyectos con asesoría experta en
              fianzas y seguros. Honestidad, trayectoria y servicio
              personalizado en cada operación.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-cream-50 font-semibold uppercase tracking-widest2 text-xs mb-5">
              Fianzas
            </h5>
            <ul className="space-y-2 text-sm text-cream-50/70">
              <li>Licitación, anticipo, cumplimiento</li>
              <li>Programa de contratistas</li>
              <li>Suministro ante CFE</li>
              <li>Fiscales y arrendamiento</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-cream-50 font-semibold uppercase tracking-widest2 text-xs mb-5">
              Seguros
            </h5>
            <ul className="space-y-2 text-sm text-cream-50/70">
              <li>Obra civil y montaje</li>
              <li>Empresarial / flotillas</li>
              <li>Vida y socios</li>
              <li>Auto y hogar</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-cream-50 font-semibold uppercase tracking-widest2 text-xs mb-5">
              Empresa
            </h5>
            <ul className="space-y-2 text-sm text-cream-50/70">
              <li>
                <a href="#nosotros" className="hover:text-gold-300">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#trayectoria" className="hover:text-gold-300">
                  Trayectoria
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-gold-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-between text-xs text-cream-50/55">
          <p>
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
