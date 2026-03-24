import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo2 from '../assets/Logo2.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src={Logo2} alt="ARWAN Montage & Gebäudereinigung" className="logo-img" />
            </Link>
            <p>Ihr Spezialist für Gebäudereinigung & Montageleistungen in und im Umkreis von Heilbronn</p>
          </div>
          
          <div className="footer-links">
            <h4>Leistungen</h4>
            <ul>
              <li><Link to="/leistungen">Gebäudereinigung</Link></li>
              <li><Link to="/leistungen">Büroreinigung</Link></li>
              <li><Link to="/leistungen">Fenster- & Glasreinigung</Link></li>
              <li><Link to="/leistungen">Baureinigung</Link></li>
              <li><Link to="/leistungen">Montageleistungen</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/leistungen">Leistungen</Link></li>
              <li><Link to="/ueber-uns">Über uns</Link></li>
              <li><Link to="/galerie">Galerie</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
              <li><Link to="/impressum">Impressum</Link></li>
              <li><Link to="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Kontakt</h4>
            <p><MapPin size={16} /> Falkenstraße 4, 74072 Heilbronn</p>
            <p><Phone size={16} /> 07131 9733352</p>
            <p><Mail size={16} /> info@arwan.de</p>
            <p><Clock size={16} /> 7 Tage / 24h</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 ARWAN Montage & Gebäudereinigung. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
