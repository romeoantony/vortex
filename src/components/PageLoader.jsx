export default function PageLoader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg)' }}>
      <div className="visualizer" style={{ marginBottom: 24, height: 40 }}>
        <div className="visualizer__bar" style={{ width: 4 }}></div>
        <div className="visualizer__bar" style={{ width: 4 }}></div>
        <div className="visualizer__bar" style={{ width: 4 }}></div>
        <div className="visualizer__bar" style={{ width: 4 }}></div>
        <div className="visualizer__bar" style={{ width: 4 }}></div>
        <div className="visualizer__bar" style={{ width: 4 }}></div>
        <div className="visualizer__bar" style={{ width: 4 }}></div>
      </div>
      <p className="label-caps" style={{ color: 'var(--tertiary)', letterSpacing: '0.3em' }}>ESTABLISHING CONNECTION</p>
    </div>
  )
}
