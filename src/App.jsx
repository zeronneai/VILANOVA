import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import SmoothScroll from './lib/lenis.jsx'
import Header from './components/Header.jsx'
import HeroScrollVideo from './components/HeroScrollVideo.jsx'
import ProblemFloodlight from './components/ProblemFloodlight.jsx'
import SolutionPillars from './components/SolutionPillars.jsx'
import ServicesPremium from './components/ServicesPremium.jsx'
import WhyUsCredentials from './components/WhyUsCredentials.jsx'
import ProcessSteps from './components/ProcessSteps.jsx'
import TestimonialsRail from './components/TestimonialsRail.jsx'
import GodfatherOffer from './components/GodfatherOffer.jsx'
import ContactCTA from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import { bonds, insurance } from './data/services.js'
import { bondsSection, insuranceSection } from './data/copy.js'

export default function App() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll locked={!unlocked}>
        <div className="min-h-screen bg-offwhite">
          <Header visible={unlocked} />
          <main>
            <HeroScrollVideo
              unlocked={unlocked}
              onUnlock={() => setUnlocked(true)}
            />
            <ProblemFloodlight />
            <SolutionPillars />

            <ServicesPremium
              id="fianzas"
              num={bondsSection.num}
              eyebrow={bondsSection.eyebrow}
              headline={bondsSection.headline}
              subhead={bondsSection.subhead}
              items={bonds}
              variant="light"
            />

            <ServicesPremium
              id="seguros"
              num={insuranceSection.num}
              eyebrow={insuranceSection.eyebrow}
              headline={insuranceSection.headline}
              subhead={insuranceSection.subhead}
              items={insurance}
              variant="cream"
            />

            <WhyUsCredentials />
            <ProcessSteps />
            <TestimonialsRail />
            <GodfatherOffer />
            <ContactCTA />
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </SmoothScroll>
    </MotionConfig>
  )
}
