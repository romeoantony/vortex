import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'


export default function HomePage() {
  const heroBgRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const el = heroBgRef.current
      if (el && window.scrollY < window.innerHeight) {
        el.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.1)`
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero__scanlines"></div>
        <div className="hero__bg">
          <img
            ref={heroBgRef}
            src="/assets/images/dj-controller-bg.png"
            alt="Hero background"
          />
          <div className="hero__overlay"></div>
          <div className="hero__overlay-top"></div>
        </div>
        <div className="hero__content">
          <div className="hero__logo" style={{ marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/images/logo.svg" alt="Vortex" style={{ height: '240px' }} />
          </div>
          <h1 className="display-lg hero-title">
            <div className="line-wrap">
              <span className="word">CURATING</span> <span className="word">THE</span>
            </div>
            <div className="line-wrap">
              <span className="word accent">UNDERGROUND</span>
            </div>
          </h1>
          <p className="body-lg hero-subtitle">
            Vortex is a premier event management company, specializing in immersive, unforgettable DJ experiences.
          </p>
          <Link to="/events" className="btn-primary glitch-btn" id="hero-cta" data-text="EXPLORE EVENTS">
            <span className="glitch-btn-text">EXPLORE EVENTS</span>
          </Link>
        </div>
      </section>


    </main>
  )
}
