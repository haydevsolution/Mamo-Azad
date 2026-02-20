import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Schließe Menü bei Seitenwechsel
  useEffect(() => {
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">ARWAN</span>
          <span className="logo-subtitle">Montage & Gebäudereinigung</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/leistungen" className={isActive('/leistungen') ? 'active' : ''}>Leistungen</Link>
          <Link to="/ueber-uns" className={isActive('/ueber-uns') ? 'active' : ''}>Über uns</Link>
          <Link to="/einsatzgebiete" className={isActive('/einsatzgebiete') ? 'active' : ''}>Einsatzgebiete</Link>
          <Link to="/kontakt" className={isActive('/kontakt') ? 'active' : ''}>Kontakt</Link>
        </nav>

        <div className="header-contact">
          <a href="tel:+4917336427881" className="header-phone">
            <Phone size={18} />
            <span>0173 364 27 881</span>
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header
