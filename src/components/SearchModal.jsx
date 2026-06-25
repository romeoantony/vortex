import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import events from '../data/events.json'
import artists from '../data/artists.json'

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

            {filteredEvents.length === 0 && filteredArtists.length === 0 && (
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
