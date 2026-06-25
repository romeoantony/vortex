import { useState, useEffect } from 'react'

const brochurePages = [
  {
    title: "01 / SECTION ONE",
    subtitle: "SUBTITLE PLACEHOLDER",
    content: "This is a generic template framework. All data has been cleared. This space can be used to describe your mission statement, brand identity, or core values."
  },
  {
    title: "02 / SECTION TWO",
    subtitle: "SUBTITLE PLACEHOLDER",
    content: "Secondary section content goes here. You can detail your audio production specifications, venue partnerships, or technical rider information."
  },
  {
    title: "03 / SECTION THREE",
    subtitle: "SUBTITLE PLACEHOLDER",
    content: "Tertiary section content. Use this to highlight featured artists, past events, or community initiatives."
  },
  {
    title: "04 / SECTION FOUR",
    subtitle: "SUBTITLE PLACEHOLDER",
    content: "Final section content. Describe partnership opportunities, sponsorship tiers, or contact information."
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
            Template subtitle placeholder. Replace this text with your organization's primary offering, mission statement, or core focus areas.
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
              { icon: 'graphic_eq', title: 'Capability One', desc: 'Placeholder description for your first core capability or offering.' },
              { icon: 'blur_on', title: 'Capability Two', desc: 'Placeholder description for your second core capability or offering.' },
              { icon: 'cyclone', title: 'Capability Three', desc: 'Placeholder description for your third core capability or offering.' },
              { icon: 'token', title: 'Capability Four', desc: 'Placeholder description for your fourth core capability or offering.' },
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
              <div className="brochure-stat__value">00k+</div>
              <div className="brochure-stat__label">Statistic One</div>
            </div>
            <div>
              <div className="brochure-stat__value">00+</div>
              <div className="brochure-stat__label">Statistic Two</div>
            </div>
            <div>
              <div className="brochure-stat__value">0+</div>
              <div className="brochure-stat__label">Statistic Three</div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}
