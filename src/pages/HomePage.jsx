import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'

const events = [
  {
    title: 'TERMINAL VELOCITY', tag: 'TECHNO', day: '24', month: 'OCT',
    venue: 'BOCHE, BANGALORE', artists: ['GATIX', 'KOBOSIL'],
    image: '/assets/images/event-terminal-velocity.png',
  },
  {
    title: 'ECHO CHAMBER', tag: 'AUDIO VISUAL', day: '12', month: 'NOV',
    venue: 'JUST BLR, BANGALORE', artists: ['ANYMA', 'TALE OF US'],
    image: '/assets/images/event-echo-chamber.png',
  },
  {
    title: 'OBELISK 2024', tag: 'FESTIVAL', day: '05', month: 'DEC',
    venue: 'CHURCH STREET SOCIAL, BANGALORE', artists: ['ERIC PRYDZ', 'MACEO PLEX'],
    image: '/assets/images/event-obelisk.png',
  },
]

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

  const scrollToTransmissions = () => {
    document.getElementById('transmissions')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <img
            ref={heroBgRef}
            src="/assets/images/hero-festival.png"
            alt="Electronic music festival with massive crowd and laser beams"
          />
          <div className="hero__overlay"></div>
          <div className="hero__overlay-top"></div>
        </div>
        <div className="hero__content">
          <img src="/assets/images/logo.svg" alt="Vortex Logo" className="hero__logo" />
          <h1 className="display-lg">
            THE CALM BEFORE<br /><span className="accent">THE DROP</span>
          </h1>
          <p className="body-lg">
            Immersive sonic experiences. Brutal architecture. Pure energy. Welcome to the next generation of live electronic music events.
          </p>
          <Link to="/event" className="btn-primary" id="hero-cta">GET TICKETS</Link>
        </div>
        <div className="scroll-indicator" onClick={scrollToTransmissions} style={{ cursor: 'pointer' }}>
          <span className="label-caps" style={{ marginBottom: 8 }}>DESCEND</span>
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Upcoming Transmissions */}
      <section className="section" id="transmissions">
        <div className="container">
          <div className="section__header">
            <h2 className="headline-lg">UPCOMING TRANSMISSIONS</h2>
            <a href="#">
              VIEW ALL{' '}
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </a>
          </div>
          <div className="events-grid">
            {events.map((evt, i) => (
              <EventCard key={evt.title} {...evt} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
