import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className="navbar"
      style={{ background: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.8)' }}
    >
      <Link to="/" className="navbar__logo">VORTEX</Link>

      <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/" className={isActive('/') ? 'active' : ''}>EVENTS</Link></li>
        <li><Link to="/artist" className={isActive('/artist') ? 'active' : ''}>ARTISTS</Link></li>
        <li><a href="#">VENUES</a></li>
        <li><a href="#">TICKETS</a></li>
      </ul>

      <div className="navbar__right">
        <button className="search-icon" aria-label="Search">
          <span className="material-symbols-outlined">search</span>
        </button>
        <Link to="/" className="btn-primary" id="sign-in-btn">SIGN IN</Link>
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
