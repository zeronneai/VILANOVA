import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AuthorityCounter from './components/AuthorityCounter.jsx'
import About from './components/About.jsx'
import Timeline from './components/Timeline.jsx'
import ServicesGrid from './components/ServicesGrid.jsx'
import ValueAdd from './components/ValueAdd.jsx'
import Partners from './components/Partners.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import { bonds, insurance } from './data/services.js'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <AuthorityCounter />
        <About />
        <Timeline />

        <ServicesGrid
          id="fianzas"
          eyebrow="Servicios — Fianzas"
          title="Fianzas que respaldan tu"
          highlight="palabra."
          intro="Operamos con todas las afianzadoras autorizadas en México. Te asesoramos en el tipo de fianza correcta, gestionamos los formatos ante el beneficiario y aceleramos la emisión para que no detengas tu obra ni tu contrato."
          items={bonds}
          variant="light"
        />

        <ServicesGrid
          id="seguros"
          eyebrow="Servicios — Seguros"
          title="Seguros para proteger tu"
          highlight="patrimonio y tu operación."
          intro="Diseñamos programas de seguros a la medida de tu industria. Desde la obra civil más compleja hasta la protección integral de tu familia o socios, con las aseguradoras más sólidas del país."
          items={insurance}
          variant="cream"
        />

        <ValueAdd />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
