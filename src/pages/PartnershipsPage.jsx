import { useEffect } from 'react'
import PartyBackground from '../components/PartyBackground'

export default function PartnershipsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      <PartyBackground imageSrc="/assets/images/gatix_event.png" />
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container">
          <p className="label-caps" style={{ color: 'var(--tertiary)', marginBottom: 12 }}>COLLABORATION</p>
          <h1 className="display-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>PARTNERSHIPS</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: 600, marginTop: 24 }}>
            We align with visionary brands to create unforgettable sonic experiences.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass" style={{ padding: 48, borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h2 className="headline-lg" style={{ color: 'var(--primary)' }}>Samurai Hearts</h2>
            <p className="label-caps" style={{ color: 'var(--tertiary)' }}>OFFICIAL SPONSOR & PARTNER</p>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              We are incredibly proud to partner with Samurai Hearts, a brand that shares our passion for high-energy underground culture and uncompromised artistic vision. 
            </p>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              Together, we are pushing the boundaries of immersive event experiences. Expect exclusive Samurai Hearts activations, VIP lounges, and collaborative merchandise at all major upcoming Vortex events. Go for it!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
