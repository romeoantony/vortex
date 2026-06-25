import { useEffect, useState } from 'react'
import PartyBackground from '../components/PartyBackground'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate sending transmission
    setSubmitted(true)
  }

  return (
    <main>
      <PartyBackground imageSrc="/assets/images/gatix_event.png" />
      <section className="contact-hero" style={{ padding: '160px 0 64px', borderBottom: '1px solid var(--surface-variant)' }}>
        <div className="container">
          <p className="label-caps" style={{ color: 'var(--tertiary)', marginBottom: 12 }}>REACH OUT</p>
          <h1 className="display-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>CONTACT</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: 600, marginTop: 24 }}>
            For general inquiries, press, and accessibility needs, send a transmission.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
            <div className="contact-info">
              <h2 className="headline-md" style={{ marginBottom: 24 }}>HEADQUARTERS</h2>
              <div style={{ marginBottom: 32 }}>
                <h4 className="label-caps" style={{ color: 'var(--tertiary)', marginBottom: 8 }}>LOCATION</h4>
                <p style={{ color: 'var(--secondary)' }}>Bangalore, India</p>
              </div>
              <div style={{ marginBottom: 32 }}>
                <h4 className="label-caps" style={{ color: 'var(--tertiary)', marginBottom: 8 }}>EMAIL</h4>
                <p style={{ color: 'var(--secondary)' }}>info@vortexevents.in</p>
              </div>
            </div>

            <div className="contact-form-container">
              {submitted ? (
                <div className="success-message fade-up visible" style={{ padding: 48, background: 'var(--surface-container)', border: '1px solid var(--tertiary)', textAlign: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 48, color: 'var(--tertiary)', marginBottom: 16 }}>check_circle</span>
                  <h3 className="headline-md">TRANSMISSION SENT</h3>
                  <p style={{ color: 'var(--secondary)', marginTop: 8 }}>We will respond shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group" style={{ marginBottom: 24 }}>
                    <label htmlFor="name" className="label-caps" style={{ display: 'block', marginBottom: 8 }}>NAME</label>
                    <input type="text" id="name" required style={{ width: '100%', padding: '12px 16px', background: 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', color: '#fff', outline: 'none' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: 24 }}>
                    <label htmlFor="email" className="label-caps" style={{ display: 'block', marginBottom: 8 }}>EMAIL</label>
                    <input type="email" id="email" required style={{ width: '100%', padding: '12px 16px', background: 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', color: '#fff', outline: 'none' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: 24 }}>
                    <label htmlFor="subject" className="label-caps" style={{ display: 'block', marginBottom: 8 }}>SUBJECT</label>
                    <input type="text" id="subject" required style={{ width: '100%', padding: '12px 16px', background: 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', color: '#fff', outline: 'none' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: 32 }}>
                    <label htmlFor="message" className="label-caps" style={{ display: 'block', marginBottom: 8 }}>MESSAGE</label>
                    <textarea id="message" rows="5" required style={{ width: '100%', padding: '12px 16px', background: 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', color: '#fff', outline: 'none', resize: 'vertical' }}></textarea>
                  </div>
                  <button type="submit" className="btn-primary glitch-btn" data-text="SEND TRANSMISSION">
                    <span className="glitch-btn-text">SEND TRANSMISSION</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
