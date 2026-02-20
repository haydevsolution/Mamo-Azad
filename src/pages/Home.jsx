import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown,
  Building2,
  Sparkles,
  Home as HomeIcon,
  Briefcase,
  Hammer,
  ArrowRight
} from 'lucide-react'

function Home() {
  const services = [
    { id: 1, title: 'Gebäudereinigung', icon: Building2 },
    { id: 2, title: 'Büroreinigung', icon: Briefcase },
    { id: 3, title: 'Fenster- & Glasreinigung', icon: Sparkles },
    { id: 4, title: 'Baureinigung', icon: Hammer },
    { id: 5, title: 'Boden- & Teppichreinigung', icon: HomeIcon },
    { id: 6, title: 'Montageleistungen', icon: Hammer },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">7 Tage / 24 Stunden erreichbar</div>
          <h1>Damit Sie <span className="highlight">glänzend</span> dastehen!</h1>
          <p className="hero-subtitle">Professionelle Reinigungs- & Montage-Leistungen in Heilbronn und Umgebung</p>
          <p className="hero-motto">"Bei uns ist der Kunde König!"</p>
          <div className="hero-buttons">
            <Link to="/kontakt" className="btn btn-primary">
              Kostenlose Anfrage
              <ArrowRight size={18} />
            </Link>
            <Link to="/leistungen" className="btn btn-secondary">
              Unsere Leistungen
            </Link>
          </div>
        </div>
        <Link to="/leistungen" className="hero-scroll">
          <ChevronDown size={32} />
        </Link>
      </section>

      {/* Quick Info Bar */}
      <section className="quick-info">
        <div className="quick-info-container">
          <div className="quick-info-item">
            <Phone size={24} />
            <div>
              <span className="label">Telefon</span>
              <span className="value">07131 9733352</span>
            </div>
          </div>
          <div className="quick-info-item">
            <Mail size={24} />
            <div>
              <span className="label">E-Mail</span>
              <span className="value">info@arwan.de</span>
            </div>
          </div>
          <div className="quick-info-item">
            <MapPin size={24} />
            <div>
              <span className="label">Adresse</span>
              <span className="value">Falkenstraße 4, 74072 Heilbronn</span>
            </div>
          </div>
          <div className="quick-info-item">
            <Clock size={24} />
            <div>
              <span className="label">Erreichbarkeit</span>
              <span className="value">7 Tage / 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Was wir für Sie tun</span>
            <h2>Unsere Leistungen</h2>
            <p>Professionelle Reinigung – qualifiziert, zuverlässig, flexibel</p>
          </div>
          
          <div className="services-preview-grid">
            {services.map((service) => (
              <Link to="/leistungen" key={service.id} className="service-preview-card">
                <div className="service-icon">
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
              </Link>
            ))}
          </div>
          
          <div className="services-preview-cta">
            <Link to="/leistungen" className="btn btn-primary">
              Alle Leistungen ansehen
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Sie brauchen unsere Hilfe?</h2>
          <p>Wir sind für Sie da! Ein Anruf genügt.</p>
          <a href="tel:+4917336427881" className="cta-phone">
            <Phone size={24} />
            +49 (0) 173 642 7881
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
