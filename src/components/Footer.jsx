import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">VORTEX</div>
            <p className="footer__tagline">Immersive sonic experiences.<br />Bangalore's underground, amplified.</p>
            <div className="visualizer" style={{ marginTop: 20 }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <div className="visualizer__bar" key={i}></div>
              ))}
            </div>
          </div>
          <div className="footer__links">
            <span className="footer__links-heading">Company</span>
            <Link to="/brochure">About / Brochure</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer__links">
            <span className="footer__links-heading">Connect</span>
            <a href="#">Instagram</a>
            <a href="#">Partnerships</a>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <p>© {new Date().getFullYear()} VORTEX. All rights reserved.</p>
          </div>
          <div className="footer__copy">
            Bangalore, India
          </div>
        </div>
      </div>
    </footer>
  )
}
