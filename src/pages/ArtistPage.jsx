import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import FadeUp from '../components/FadeUp'
import artists from '../data/artists.json'

export default function ArtistPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const artist = artists.find(a => a.id === id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!artist) {
    return (
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: 24 }}>
        <p className="label-caps" style={{ color: 'var(--tertiary)' }}>404</p>
        <h1 className="headline-lg" style={{ color: 'var(--primary)' }}>ARTIST NOT FOUND</h1>
        <button className="btn-outline" onClick={() => navigate('/artists')}>BACK TO ARTISTS</button>
      </main>
    )
  }

  return (
    <main>
      {/* Artist Hero */}
      <section className="artist-hero" id="artist-hero">
        <div className="artist-hero__bg">
          <img src={artist.image} alt={`${artist.name} performing on stage`} />
          <div className="artist-hero__overlay"></div>
        </div>
        <div className="container">
          <div className="artist-hero__content">
            <div>
              <div className="artist-hero__tags label-caps">
                {artist.genres.map((g, i) => (
                  <span key={i}>{g}{i < artist.genres.length - 1 && <span style={{ color: 'var(--on-surface-variant)' }}>/</span>}</span>
                ))}
              </div>
              <h1 className="display-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 12 }}>
                {artist.name}
              </h1>
              <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: 560 }}>
                {artist.bio}
              </p>
            </div>
            <div className="artist-hero__actions">
              <button className="btn-outline">
                <span className="material-symbols-outlined" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 4 }}>play_arrow</span>
                LATEST RELEASE
              </button>
              <button className="btn-outline">FOLLOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats + Social */}
      <section style={{ background: 'var(--surface-container)', borderBottom: '1px solid var(--surface-variant)' }}>
        <div className="container">
          <div className="artist-meta-bar">
            <div className="artist-stats glass">
              <div className="artist-stats__item">
                <span className="artist-stats__value">{artist.listeners || artist.stats?.monthlyListeners || 'N/A'}</span>
                <span className="label-caps artist-stats__label">Monthly Listeners</span>
              </div>
              <div className="artist-stats__divider"></div>
              <div className="artist-stats__item">
                <span className="artist-stats__value">{artist.followers || artist.stats?.followers || 'N/A'}</span>
                <span className="label-caps artist-stats__label">Followers</span>
              </div>
            </div>
            <div className="artist-social">
              {artist.socialLinks?.instagram && (
                <a href={artist.socialLinks.instagram} className="artist-social__link" aria-label="Instagram">
                  <span className="material-symbols-outlined">photo_camera</span>
                  <span className="label-caps">INSTAGRAM</span>
                </a>
              )}
              {artist.socialLinks?.spotify && (
                <a href={artist.socialLinks.spotify} className="artist-social__link" aria-label="Spotify">
                  <span className="material-symbols-outlined">music_note</span>
                  <span className="label-caps">SPOTIFY</span>
                </a>
              )}
              {artist.socialLinks?.soundcloud && (
                <a href={artist.socialLinks.soundcloud} className="artist-social__link" aria-label="SoundCloud">
                  <span className="material-symbols-outlined">cloud</span>
                  <span className="label-caps">SOUNDCLOUD</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="section" id="shows-section">
        <div className="container">
          <div className="section__header">
            <h2 className="headline-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>UPCOMING SHOWS</h2>
            <a href="#">VIEW ALL <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span></a>
          </div>
          <div className="shows-list">
            {(artist.shows || []).map((show, i) => (
              <FadeUp key={show.name} delay={i * 0.05}>
                <div className="show-item">
                  <div className="show-item__date">
                    <span className="label-caps month">{show.month}</span>
                    <span className="day">{show.day}</span>
                  </div>
                  <div className="show-item__info">
                    <h3>{show.name}</h3>
                    <p>{show.location}</p>
                  </div>
                  <Link to="/event" className="btn-outline">VIEW EVENT</Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>


      {/* Recent Sets */}
      <section className="section" style={{ paddingTop: 0 }} id="sets-section">
        <div className="container">
          <div className="section__header">
            <h2 className="headline-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>RECENT SETS</h2>
          </div>
          <div className="sets-grid">
            {(artist.sets || []).map((set, i) => (
              <FadeUp key={set.title} delay={i * 0.1}>
                <div className="set-card">
                  <div className="set-card__img">
                    <img src={set.image} alt={set.title} />
                    <div className="set-card__play">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                    </div>
                    {set.duration && (
                      <div style={{ position: 'absolute', top: 12, right: 12 }}>
                        <span className="label-caps" style={{
                          padding: '4px 10px', background: 'rgba(22,22,22,0.6)',
                          backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff'
                        }}>
                          {set.duration}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="set-card__body">
                    <span className="label-caps label" style={{ color: 'var(--tertiary)' }}>{set.label}</span>
                    <h3>{set.title}</h3>
                    <p>{set.sub}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
