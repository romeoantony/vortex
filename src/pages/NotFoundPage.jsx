import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="hero__scanlines"></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h1 className="display-lg" style={{ color: 'var(--tertiary)', marginBottom: 24 }}>404</h1>
          <h2 className="headline-md" style={{ textTransform: 'uppercase', marginBottom: 16 }}>Transmission Lost</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: 600, margin: '0 auto 48px' }}>
            The coordinate you are looking for does not exist in this sector.
          </p>
          <Link to="/" className="btn-primary glitch-btn" data-text="RETURN TO BASE">
            <span className="glitch-btn-text">RETURN TO BASE</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
