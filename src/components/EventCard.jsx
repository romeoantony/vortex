import { useNavigate } from 'react-router-dom'
import FadeUp from './FadeUp'

export default function EventCard({ title, tag, day, month, venue, artists, image, delay = 0 }) {
  const navigate = useNavigate()

  return (
    <FadeUp delay={delay}>
      <article className="event-card" onClick={() => navigate('/event')}>
        <div className="event-card__img">
          <img src={image} alt={`${title} event`} />
          <div className="event-card__gradient"></div>
        </div>
        <div className="event-card__content">
          <div className="event-card__top">
            <span className="event-card__tag glass label-caps">{tag}</span>
            <div className="event-card__date">
              <div className="day">{day}</div>
              <div className="month label-caps">{month}</div>
            </div>
          </div>
          <div className="event-card__info">
            <h3>{title}</h3>
            <div className="event-card__location">
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>location_on</span>
              {venue}
            </div>
            <div className="event-card__artists">
              {artists.map((a, i) => <span key={i}>{a}</span>)}
            </div>
          </div>
        </div>
      </article>
    </FadeUp>
  )
}
