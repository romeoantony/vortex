import { useNavigate } from 'react-router-dom'
import FadeUp from './FadeUp'

export default function ArtistCard({ id, name, genres, image, stats, delay = 0 }) {
  const navigate = useNavigate()

  return (
    <FadeUp delay={delay}>
      <article className="artist-card" onClick={() => navigate(`/artists/${id}`)}>
        <div className="artist-card__img">
          <img src={image} alt={`${name}`} />
          <div className="artist-card__gradient"></div>
        </div>
        <div className="artist-card__content">
          <div className="artist-card__genres label-caps">
            {genres.map((g, i) => (
              <span key={i}>{g}{i < genres.length - 1 && <span className="artist-card__sep">/</span>}</span>
            ))}
          </div>
          <h3>{name}</h3>
          {stats && (
            <div className="artist-card__stats label-caps">
              <span>{stats.monthlyListeners} <span style={{ color: 'var(--on-surface-variant)', fontWeight: 400 }}>listeners</span></span>
              <span className="artist-card__dot"></span>
              <span>{stats.followers} <span style={{ color: 'var(--on-surface-variant)', fontWeight: 400 }}>followers</span></span>
            </div>
          )}
        </div>
      </article>
    </FadeUp>
  )
}
