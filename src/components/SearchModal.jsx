import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import events from '../data/events.json'
import artists from '../data/artists.json'

const staticPages = [
  { id: 'brochure', title: 'About / Brochure', path: '/brochure', keywords: 'about mission statement values capabilities interactive deck' },
  { id: 'contact', title: 'Contact', path: '/contact', keywords: 'reach out headquarters location email message inquiry' },
  { id: 'partnerships', title: 'Partnerships', path: '/partnerships', keywords: 'collaboration brands sponsor samurai hearts' },
  { id: 'privacy', title: 'Privacy Policy', path: '/privacy', keywords: 'personal information data terms' },
  { id: 'terms', title: 'Terms of Service', path: '/terms', keywords: 'conditions service agreement' },
  { id: 'events-home', title: 'Events Directory', path: '/events', keywords: 'shows upcoming audio visual list' },
  { id: 'artists-home', title: 'Artists Roster', path: '/artists', keywords: 'djs talent roster lineup' }
]

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      setQuery('')
      document.body.style.overflow = ''
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filteredArtists = artists.filter(a => a.name.toLowerCase().includes(query.toLowerCase()))
  const filteredEvents = events.filter(e => e.title.toLowerCase().includes(query.toLowerCase()))
  const filteredPages = staticPages.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    p.keywords.toLowerCase().includes(query.toLowerCase())
  )

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <div className="search-modal">
      <div className="search-modal__backdrop" onClick={onClose}></div>
      <div className="search-modal__content">
        <div className="search-modal__header">
          <span className="material-symbols-outlined search-icon-large">search</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search artists, events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          <button className="close-btn" onClick={onClose} aria-label="Close search">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {query.length > 0 && (
          <div className="search-modal__results fade-up visible">
            {filteredEvents.length > 0 && (
              <div className="results-group">
                <h3 className="label-caps">Events</h3>
                <ul>
                  {filteredEvents.map(evt => (
                    <li key={evt.id}>
                      <Link to={`/event/${evt.id}`} onClick={handleLinkClick}>
                        <div className="result-item">
                          <img src={evt.image} alt={evt.title} />
                          <div>
                            <h4>{evt.title}</h4>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {filteredArtists.length > 0 && (
              <div className="results-group">
                <h3 className="label-caps">Artists</h3>
                <ul>
                  {filteredArtists.map(artist => (
                    <li key={artist.id}>
                      <Link to={`/artists/${artist.id}`} onClick={handleLinkClick}>
                        <div className="result-item">
                          <img src={artist.image} alt={artist.name} />
                          <div>
                            <h4>{artist.name}</h4>
                            <p>{artist.genres.join(', ')}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {filteredPages.length > 0 && (
              <div className="results-group">
                <h3 className="label-caps">Pages</h3>
                <ul>
                  {filteredPages.map(page => (
                    <li key={page.id}>
                      <Link to={page.path} onClick={handleLinkClick}>
                        <div className="result-item">
                          <div className="material-symbols-outlined" style={{ fontSize: 32, color: 'var(--tertiary)', width: 64, textAlign: 'center' }}>article</div>
                          <div>
                            <h4>{page.title}</h4>
                            <p>Information</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {filteredEvents.length === 0 && filteredArtists.length === 0 && filteredPages.length === 0 && (
              <div className="no-results">
                <p>No transmissions found matching "{query}"</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
