import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FadeUp from '../components/FadeUp'

const shows = [
  { month: 'OCT', day: '14', name: 'VORTEX: TERMINAL VELOCITY', location: 'Boche, Bangalore', detail: 'Mainstage (Closing Set)' },
  { month: 'NOV', day: '12', name: 'VORTEX: ECHO CHAMBER', location: 'Just BLR, Bangalore', detail: 'Main Floor' },
]

const sets = [
  { label: 'LIVE AT PRINTWORKS', title: '2 HOUR HARDWARE SET', sub: 'London, 2023', image: '/assets/images/set-printworks.png', duration: '120 MIN' },
  { label: 'BERLIN UNDERGROUND', title: 'SECRET WAREHOUSE RAVE', sub: 'Berlin, 2023', image: '/assets/images/set-warehouse.png' },
  { label: 'STUDIO SESSIONS', title: 'MODULAR EXPERIMENTS V.1', sub: 'Exclusive, 2024', image: '/assets/images/set-modular.png' },
]

export default function ArtistPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      {/* Artist Hero */}
      <section className="artist-hero" id="artist-hero">
        <div className="artist-hero__bg">
          <img src="/assets/images/artist-gatix.png" alt="Gatix performing on stage" />
          <div className="artist-hero__overlay"></div>
        </div>
        <div className="container">
          <div className="artist-hero__content">
            <div>
              <div className="artist-hero__tags label-caps">
                <span>MELODIC TECHNO</span><span>/</span><span>PROGRESSIVE</span><span>/</span><span>LIVE</span>
              </div>
              <h1 className="display-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 12 }}>
                GATIX
              </h1>
              <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: 560 }}>
                Emerging from the shadows of the European underground, Gatix has redefined the boundaries of melodic techno. Known for transcendent long-form sets that move between euphoric tension and overwhelming release, each performance is a singular, unrepeatable transmission.
              </p>
            </div>
            <div className="artist-hero__actions">
              <button className="btn-outline" id="latest-release-btn">
                <span className="material-symbols-outlined" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 4 }}>play_arrow</span>
                LATEST RELEASE
              </button>
              <button className="btn-outline" id="follow-btn">FOLLOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="section" id="shows-section">
        <div className="container">
          <div className="section__header">
            <h2 className="headline-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>UPCOMING SHOWS</h2>
            <a href="#">VIEW ALL <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span></a>
          </div>
          <div className="shows-list">
            {shows.map((show, i) => (
              <FadeUp key={show.name} delay={i * 0.05}>
                <div className="show-item">
                  <div className="show-item__date">
                    <span className="label-caps month">{show.month}</span>
                    <span className="day">{show.day}</span>
                  </div>
                  <div className="show-item__info">
                    <h3>{show.name}</h3>
                    <p>{show.location}</p>
                  </div>
                  <div className="show-item__detail body-md">{show.detail}</div>
                  <Link to="/event" className="btn-outline" id={`show-tickets-${i + 1}`}>TICKETS</Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sets */}
      <section className="section" id="sets-section">
        <div className="container">
          <div className="section__header">
            <h2 className="headline-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>RECENT SETS</h2>
          </div>
          <div className="sets-grid">
            {sets.map((set, i) => (
              <FadeUp key={set.title} delay={i * 0.1}>
                <div className="set-card" id={`set-${i + 1}`}>
                  <div className="set-card__img">
                    <img src={set.image} alt={set.title} />
                    <div className="set-card__play">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                    </div>
                    {set.duration && (
                      <div style={{ position: 'absolute', top: 12, right: 12 }}>
                        <span className="label-caps" style={{
                          padding: '4px 10px', background: 'rgba(22,22,22,0.6)',
                          backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff'
                        }}>
                          {set.duration}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="set-card__body">
                    <span className="label-caps label" style={{ color: 'var(--tertiary)' }}>{set.label}</span>
                    <h3>{set.title}</h3>
                    <p>{set.sub}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
