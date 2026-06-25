import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'


export default function HomePage() {
  const heroBgRef = useRef(null)
  const heroSectionRef = useRef(null)
  const heroGlowRef = useRef(null)

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

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const heroGlow = heroGlowRef.current;
    
    if (!heroSection || !heroGlow) return;

    const handleMouseMove = (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      heroGlow.style.opacity = '1';
      heroGlow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(125,244,255,0.15) 0%, transparent 40%)`;
    };

    const handleMouseLeave = () => {
      heroGlow.style.opacity = '0';
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="hero" id="hero" ref={heroSectionRef}>
        <div className="hero__glow" id="hero-glow" ref={heroGlowRef}></div>
        <div className="hero__scanlines"></div>
        <div className="hero__bg">
          <img
            ref={heroBgRef}
            src="/assets/images/placeholder-hero.png"
            alt="Hero background placeholder"
            style={{ display: 'none' }}
          />
          <div className="hero__overlay"></div>
          <div className="hero__overlay-top"></div>
        </div>
        <div className="hero__content">
          <div className="hero__logo" style={{ marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/images/logo.svg" alt="Vortex" style={{ height: '140px', filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3))' }} />
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
