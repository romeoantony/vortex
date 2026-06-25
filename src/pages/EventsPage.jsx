import { useEffect } from 'react'
import PartyBackground from '../components/PartyBackground'
import EventCard from '../components/EventCard'
import events from '../data/events.json'

export default function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <PartyBackground imageSrc="/assets/images/gatix_event.png" />
      <section className="contact-hero" style={{ padding: '160px 0 64px', borderBottom: '1px solid var(--surface-variant)' }}>
        <div className="container">
          <p className="label-caps" style={{ color: 'var(--tertiary)', marginBottom: 12 }}>DISCOVER</p>
          <h1 className="display-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>EVENTS</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: 600, marginTop: 24 }}>
            Explore our upcoming audio-visual experiences.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {events.length > 0 ? (
            <div className="events-grid">
              {events.map((evt, i) => (
                <EventCard key={evt.id || i} {...evt} delay={i * 0.1} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <p className="label-caps" style={{ color: 'var(--tertiary)' }}>NO EVENTS SCHEDULED</p>
              <h2 className="headline-md" style={{ color: 'var(--primary)', marginTop: 16 }}>CHECK BACK LATER</h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: 8 }}>
                There are no upcoming events at this time.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
