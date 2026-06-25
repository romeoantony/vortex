import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchModal from './SearchModal'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
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
  const isArtistsActive = () => location.pathname.startsWith('/artists')

  return (
    <>
      <nav
        className="navbar"
        style={{ background: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.8)' }}
      >
        <Link to="/" className="navbar__logo">
          <img src="/assets/images/logo.svg" alt="Vortex" style={{ height: '72px', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }} />
        </Link>

        <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>HOME</Link></li>
          <li><Link to="/events" className={isActive('/events') ? 'active' : ''}>EVENTS</Link></li>
          <li><Link to="/artists" className={isArtistsActive() ? 'active' : ''}>ARTISTS</Link></li>
          <li><Link to="/brochure" className={isActive('/brochure') ? 'active' : ''}>BROCHURE</Link></li>
        </ul>

        <div className="navbar__right">
          <button className="search-icon" aria-label="Search" onClick={() => setSearchOpen(true)}>
            <span className="material-symbols-outlined">search</span>
          </button>
          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
