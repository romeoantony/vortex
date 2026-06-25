import { useState, useEffect } from 'react'

const brochurePages = [
  {
    title: "01 / MISSION STATEMENT",
    subtitle: "THE VORTEX EXPERIENCE",
    content: "Vortex is an elite event management company specializing in high-energy DJ performances and underground electronic music events. Our mission is to create unforgettable, immersive experiences that connect audiences with cutting-edge sound."
  },
  {
    title: "02 / AUDIO & VISUALS",
    subtitle: "SENSORY OVERLOAD",
    content: "We provide industry-leading audio production and state-of-the-art visual installations. From custom DJ booth designs to massive laser and lighting rigs, we engineer environments that amplify the energy of the music."
  },
  {
    title: "03 / ARTIST ROSTER",
    subtitle: "CURATING TALENT",
    content: "We partner with top-tier electronic music producers and underground DJs to curate lineups that push boundaries. Our booking team ensures the perfect sonic journey from the opening set to the final drop."
  },
  {
    title: "04 / PARTNERSHIPS",
    subtitle: "JOIN THE MOVEMENT",
    content: "We are always looking to collaborate with venues, sponsors, and record labels. Reach out to our team to discuss booking inquiries, brand integrations, or co-hosting an upcoming Vortex event."
  }
]

export default function BrochurePage() {
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleNext = () => {
    if (currentPage < brochurePages.length - 1) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const handlePrint = () => {
    window.print()
  }



  return (
    <main>
      {/* Hero Section */}
      <section className="brochure-hero">
        <div className="container">
          <h1 className="brochure-hero__title">
            Brand <span className="accent">Brochure</span>
          </h1>
          <p className="brochure-hero__subtitle body-lg">
            Immersive DJ Events. State-of-the-art production. Unforgettable nights.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="headline-lg">CORE CAPABILITIES</h2>
            <span className="label-caps" style={{ color: 'var(--tertiary)' }}>EXPERTISE</span>
          </div>

          <div className="capabilities-grid">
            {[
              { icon: 'graphic_eq', title: 'Audio Production', desc: 'World-class sound systems engineered for electronic music.' },
              { icon: 'blur_on', title: 'Stage Design', desc: 'Custom lighting, lasers, and visual installations.' },
              { icon: 'cyclone', title: 'Event Management', desc: 'End-to-end event planning, from ticketing to security.' },
              { icon: 'token', title: 'Artist Booking', desc: 'Curating lineups with top-tier and emerging DJs.' },
            ].map((cap, i) => (
              <div className="capability-card" key={i}>
                <span className="material-symbols-outlined capability-card__icon">{cap.icon}</span>
                <h3 className="capability-card__title">{cap.title}</h3>
                <p className="capability-card__desc body-md">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Brochure Booklet */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div className="section__header">
            <h2 className="headline-lg">INTERACTIVE DECK</h2>
            <span className="label-caps" style={{ color: 'var(--tertiary)' }}>DIGITAL MANUAL</span>
          </div>

          <div className="interactive-brochure">
            {/* Brochure Viewer Deck */}
            <div className="brochure-viewer">
              <div className="brochure-viewer__header">
                <span className="label-caps font-display" style={{ letterSpacing: '0.2em' }}>BRAND DIRECTIVE</span>
                <span className="brochure-viewer__page-num font-display">PAGE {currentPage + 1} / {brochurePages.length}</span>
              </div>

              <div className="brochure-viewer__body">
                <h3 className="brochure-viewer__title">{brochurePages[currentPage].title}</h3>
                <h4 className="label-caps" style={{ color: 'var(--secondary)', marginBottom: 12 }}>{brochurePages[currentPage].subtitle}</h4>
                <p className="brochure-viewer__text body-md">{brochurePages[currentPage].content}</p>
              </div>

              <div className="brochure-viewer__footer">
                <div className="brochure-viewer__nav">
                  <button
                    className="brochure-viewer__btn label-caps"
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                  >
                    PREV
                  </button>
                  <button
                    className="brochure-viewer__btn label-caps"
                    onClick={handleNext}
                    disabled={currentPage === brochurePages.length - 1}
                  >
                    NEXT
                  </button>
                </div>
                <button className="btn-outline" onClick={handlePrint}>
                  PRINT MANUAL
                </button>
              </div>
            </div>

            {/* Explanatory text & actions */}
            <div>
              <h3 className="headline-md" style={{ marginBottom: 16, color: '#fff' }}>Interactive Profile Book</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 24 }}>
                Flip through our core booklet slides detailing our values, specifications, and operational systems. Print or save directly as a clean physical PDF using your browser options.
              </p>
              <button className="btn-primary" onClick={handlePrint}>
                DOWNLOAD PRINTABLE PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand In Numbers */}
      <section className="section">
        <div className="container">
          <div className="brochure-stats">
            <div>
              <div className="brochure-stat__value">100k+</div>
              <div className="brochure-stat__label">Attendees</div>
            </div>
            <div>
              <div className="brochure-stat__value">150+</div>
              <div className="brochure-stat__label">Events Hosted</div>
            </div>
            <div>
              <div className="brochure-stat__value">50+</div>
              <div className="brochure-stat__label">DJ Partnerships</div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}
