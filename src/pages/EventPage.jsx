import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import FadeUp from '../components/FadeUp'
import events from '../data/events.json'
import artistsData from '../data/artists.json'

export default function EventPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const event = events.find(e => e.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!event) {
    return (
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: 24 }}>
        <p className="label-caps" style={{ color: 'var(--tertiary)' }}>404</p>
        <h1 className="headline-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>EVENT NOT FOUND</h1>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>The event you are looking for does not exist or has been removed.</p>
        <button className="btn-outline" onClick={() => navigate('/')}>BACK TO EVENTS</button>
      </main>
    )
  }

  // Generic Template Structure for future events
  return (
    <main>
      {/* Event Hero */}
      <header className="event-hero" id="event-hero">
        <div className="event-hero__bg">
          {event.image ? (
            <img src={event.image} alt={event.title} />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'var(--surface-container-high)' }}></div>
          )}
          <div className="event-hero__overlay"></div>
        </div>
        <div className="container">
          <div className="event-hero__grid">
            <div>
              <div className="event-hero__badge">
                <span className="dot"></span>
                <span className="label-caps" style={{ color: 'var(--tertiary)' }}>
                  {event.tag || 'EVENT TAG'}
                </span>
              </div>
              <h1 className="display-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>
                {event.title}
              </h1>
              <div className="event-hero__meta label-caps">
                <div>
                  <span className="material-symbols-outlined">calendar_today</span> {event.month} {event.day}
                </div>
                <div>
                  <span className="material-symbols-outlined">schedule</span> {event.time || 'TIME TBA'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dynamic Sections can be mapped here based on event data */}
      {event.description && (
        <section className="section">
          <div className="container">
            <FadeUp>
              <h2 className="headline-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 24 }}>ABOUT</h2>
              <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: 800 }}>{event.description}</p>
            </FadeUp>
          </div>
        </section>
      )}


      {/* Lineup Section Template */}
      {event.artists && event.artists.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section__header">
              <h2 className="headline-md" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>LINEUP</h2>
            </div>
            <div className="lineup-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 24 }}>
              {event.artists.map((artistName, i) => {
                const foundArtist = artistsData.find(a => a.name === artistName)
                const link = foundArtist ? `/artists/${foundArtist.id}` : '#'
                
                return (
                  <FadeUp key={i} delay={i * 0.1}>
                    <Link to={link} style={{ textDecoration: 'none' }}>
                      <div className="glass" style={{ padding: 24, textAlign: 'center', transition: 'background 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = 'var(--surface-container-high)'} onMouseOut={e => e.currentTarget.style.background = 'var(--surface-container)'}>
                        <h3 className="headline-md" style={{ color: 'var(--primary)' }}>{artistName}</h3>
                      </div>
                    </Link>
                  </FadeUp>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
