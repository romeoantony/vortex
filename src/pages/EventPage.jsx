import { useEffect } from 'react'
import FadeUp from '../components/FadeUp'

export default function EventPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      {/* Event Hero */}
      <header className="event-hero" id="event-hero">
        <div className="event-hero__bg">
          <img src="/assets/images/event-cybernetic.png" alt="Cybernetic Awakening venue" />
          <div className="event-hero__overlay"></div>
        </div>
        <div className="container">
          <div className="event-hero__grid">
            <div>
              <div className="event-hero__badge">
                <span className="dot"></span>
                <span className="label-caps" style={{ color: 'var(--tertiary)' }}>
                  LIVE TRANSMISSION // ONGOING
                </span>
              </div>
              <h1 className="display-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>
                Cybernetic<br />Awakening
              </h1>
              <div className="event-hero__meta label-caps">
                <div>
                  <span className="material-symbols-outlined">calendar_today</span> OCTOBER 28, 2024
                </div>
                <div>
                  <span className="material-symbols-outlined">schedule</span> 22:00 — 06:00
                </div>
                <div>
                  <div><span className="material-symbols-outlined">location_on</span> BOCHE, BANGALORE</div>
                </div>
              </div>
            </div>
            <div>
              <div className="ticket-panel glass">
                <div className="ticket-panel__header">
                  <span className="label-caps" style={{ color: 'var(--secondary)' }}>CURRENT TIER</span>
                  <span className="ticket-panel__price">₹3,999</span>
                </div>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                  Tier 2 tickets are selling fast. Secure your access to the grid.
                </p>
                <button className="btn-primary" style={{ width: '100%', padding: 16, marginTop: 8 }} id="ticket-cta">
                  GET TICKETS
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Transmission */}
      <section className="section" id="transmission-section">
        <div className="container">
          <FadeUp>
            <div className="transmission">
              <div>
                <h2 className="headline-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>
                  The<br />Transmission
                </h2>
              </div>
              <div className="transmission__text glass">
                <p className="body-lg">
                  Enter the mainframe. Cybernetic Awakening is a visceral audio-visual experience designed to blur the lines between humanity and machinery. Expect punishing industrial techno, relentless hard groove, and a lighting production that will restructure your neural pathways.
                </p>
                <p className="body-md">
                  This is not just a party; it is a temporary autonomous zone. Leave your physical constraints at the door. The sound system has been reinforced. The lasers are primed. Prepare for total system override.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Lineup */}
      <section className="section" id="lineup-section">
        <div className="container">
          <div className="section__header">
            <h2 className="headline-md" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>Lineup</h2>
            <span className="label-caps" style={{ color: 'var(--tertiary)' }}>04 ARTISTS / 2 STAGES</span>
          </div>
          <div className="lineup-grid">
            {/* Headliner */}
            <FadeUp className="lineup-card lineup-card--headliner">
              <img src="/assets/images/artist-amelie-lens.png" alt="Amelie Lens" />
              <div className="lineup-card__overlay">
                <span className="label-caps" style={{ color: 'var(--tertiary)', marginBottom: 8 }}>
                  HEADLINE // MAIN ROOM
                </span>
                <h3 className="headline-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>
                  AMELIE LENS
                </h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: 8, maxWidth: 400 }}>
                  The Belgian powerhouse returns to deliver her signature blend of high-energy, dark, and driving techno.
                </p>
              </div>
            </FadeUp>

            {/* Support 1 */}
            <FadeUp delay={0.1} className="lineup-card">
              <img src="/assets/images/set-warehouse.png" alt="Dax J" />
              <div className="lineup-card__overlay">
                <h3 className="headline-md" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>DAX J</h3>
                <span className="label-caps" style={{ color: 'var(--secondary)', marginTop: 4 }}>MAIN ROOM</span>
              </div>
            </FadeUp>

            {/* Support 2 */}
            <FadeUp delay={0.15} className="lineup-card">
              <img src="/assets/images/set-modular.png" alt="VTSS" />
              <div className="lineup-card__overlay">
                <h3 className="headline-md" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>VTSS</h3>
                <span className="label-caps" style={{ color: 'var(--secondary)', marginTop: 4 }}>THE BUNKER</span>
              </div>
            </FadeUp>

            {/* Local Support */}
            <FadeUp delay={0.2} className="lineup-card lineup-card--support-wide lineup-card--text-only">
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 36, color: 'var(--tertiary)' }}>
                  graphic_eq
                </span>
                <span className="label-caps" style={{ color: 'var(--tertiary)' }}>LOCAL SUPPORT</span>
              </div>
              <h3 className="headline-md" style={{ color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 8 }}>
                Klangkuenstler
              </h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Opening set setting the industrial tone.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Venue & House Rules */}
      <section className="section" id="venue-section">
        <div className="container">
          <div className="split-grid">
            <FadeUp>
              <h2 className="headline-md" style={{ color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 24 }}>
                Location
              </h2>
              <div className="map-container">
                <img src="/assets/images/venue-map.png" alt="Venue map — The Vault, Berlin" />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }}></div>
                <div className="map-marker">
                  <div className="dot"></div>
                  <div className="glass" style={{ padding: '12px 20px', textAlign: 'center' }}>
                    <h4 className="label-caps" style={{ color: 'var(--primary)' }}>BOCHE</h4>
                    <p style={{ fontSize: 10, color: 'var(--secondary)', marginTop: 4 }}>Church Street, Bangalore, KA</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="headline-md" style={{ color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 24 }}>
                House Rules
              </h2>
              <div className="rules-panel glass">
                {[
                  { icon: 'no_photography', title: 'NO PHOTOS OR VIDEOS', text: 'Camera lenses will be taped at the door. Experience the moment, do not record it.' },
                  { icon: 'front_hand', title: 'ZERO TOLERANCE', text: 'Racism, sexism, homophobia, transphobia, or non-consensual behavior will result in immediate ejection.' },
                  { icon: 'dark_mode', title: 'DRESS CODE', text: 'Black. Functional. Brutalist. Dress for the sweat, not for the gram.' },
                ].map((rule) => (
                  <div className="rule" key={rule.title}>
                    <span className="material-symbols-outlined">{rule.icon}</span>
                    <div>
                      <h4 className="label-caps" style={{ color: 'var(--primary)' }}>{rule.title}</h4>
                      <p className="body-md">{rule.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  )
}
