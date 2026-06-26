export default function PartyBackground({ imageSrc }) {
  return (
    <div className="party-bg-wrapper">
      {imageSrc && (
        <div className="party-bg-image">
          <img src={imageSrc} alt="Background" />
        </div>
      )}
      <div className="party-bg-overlay"></div>
      
      <div className="party-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      <div className="hero__scanlines" style={{ zIndex: 3, opacity: 0.15 }}></div>
    </div>
  )
}
