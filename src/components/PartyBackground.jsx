export default function PartyBackground({ imageSrc }) {
  return (
    <div className="party-bg-wrapper">
      {imageSrc && (
        <div className="party-bg-image">
          <img src={imageSrc} alt="Background" />
        </div>
      )}
    </div>
  )
}
