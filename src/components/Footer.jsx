export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">VORTEX</div>
            <div className="visualizer" style={{ marginTop: 16 }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <div className="visualizer__bar" key={i}></div>
              ))}
            </div>
          </div>
          <div className="footer__links">
            <a href="#">COMPANY</a>
            <a href="#">PRIVACY</a>
            <a href="#">TERMS</a>
          </div>
          <div className="footer__links">
            <a href="#">SOCIAL</a>
            <a href="#">PARTNERSHIPS</a>
          </div>
        </div>
        <div className="footer__copy">
          © 2024 VORTEX. ALL RIGHTS RESERVED. PARTNERED WITH SAMURAI HEARTS.
        </div>
      </div>
    </footer>
  )
}
