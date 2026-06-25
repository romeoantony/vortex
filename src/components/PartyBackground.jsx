import React from 'react'

export default function PartyBackground({ imageSrc = "/assets/images/gatix_event.png" }) {
  return (
    <div className="party-bg-wrapper">
      <div className="hero__scanlines" style={{ zIndex: 2 }}></div>
      <div className="hero__bg">
        <img src={imageSrc} alt="Background" />
        <div className="disco-lights">
          <div className="spotlight spotlight-1"></div>
          <div className="spotlight spotlight-2"></div>
          <div className="spotlight spotlight-3"></div>
          <div className="spotlight spotlight-4"></div>
        </div>
        <div className="hero__overlay" style={{ background: 'linear-gradient(to top, var(--bg) 0%, rgba(19,19,20,0.6) 100%)' }}></div>
      </div>
    </div>
  )
}
