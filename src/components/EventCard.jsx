import { useNavigate } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import FadeUp from './FadeUp'
import ScrambleText from './ScrambleText'

export default function EventCard({ id, title, tag, day, month, venue, artists = [], image, delay = 0 }) {
  const navigate = useNavigate()
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.zIndex = '10';
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.zIndex = '1';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <FadeUp delay={delay}>
      <article className="event-card" ref={cardRef} onClick={() => navigate(id ? `/event/${id}` : '#')}>
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
            <ScrambleText text={title} as="h3" />
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
