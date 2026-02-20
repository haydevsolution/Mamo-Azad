import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2,
  Sparkles,
  Home,
  Briefcase,
  Hammer,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react'

function Leistungen() {
  const [activeService, setActiveService] = useState(null)

  const services = [
    { 
      id: 1, 
      title: 'Gebäudereinigung', 
      icon: Building2,
      desc: 'Professionelle Reinigung für Gebäude aller Art und Größe',
      features: ['Treppenhäuser', 'Eingangsbereiche', 'Gemeinschaftsräume', 'Außenanlagen']
    },
    { 
      id: 2, 
      title: 'Büroreinigung', 
      icon: Briefcase,
      desc: 'Saubere Arbeitsplätze für produktive Mitarbeiter',
      features: ['Schreibtische', 'Sanitäranlagen', 'Küchenbereiche', 'Besprechungsräume']
    },
    { 
      id: 3, 
      title: 'Fenster- & Glasreinigung', 
      icon: Sparkles,
      desc: 'Streifenfreie Sauberkeit für klare Durchsicht',
      features: ['Fassaden', 'Schaufenster', 'Wintergärten', 'Glasdächer']
    },
    { 
      id: 4, 
      title: 'Baureinigung', 
      icon: Hammer,
      desc: 'Gründliche Reinigung nach Bauarbeiten',
      features: ['Grobreinigung', 'Feinreinigung', 'Endreinigung', 'Staubentfernung']
    },
    { 
      id: 5, 
      title: 'Boden- & Teppichreinigung', 
      icon: Home,
      desc: 'Fachgerechte Pflege für alle Bodenbeläge',
      features: ['Parkett', 'Laminat', 'Teppiche', 'Fliesen']
    },
    { 
      id: 6, 
      title: 'Montageleistungen', 
      icon: Hammer,
      desc: 'Professionelle Montage- und Handwerksarbeiten',
      features: ['Möbelmontage', 'Regalsysteme', 'Kleinreparaturen', 'Installationen']
    },
    { 
      id: 7, 
      title: 'Grundreinigung', 
      icon: Sparkles,
      desc: 'Intensive Reinigung für einen Neuanfang',
      features: ['Tiefenreinigung', 'Kalkentfernung', 'Desinfektion', 'Aufarbeitung']
    },
    { 
      id: 8, 
      title: 'Unterhaltsreinigung', 
      icon: Building2,
      desc: 'Regelmäßige Reinigung für dauerhaft saubere Räume',
      features: ['Tägliche Reinigung', 'Wöchentliche Reinigung', 'Monatliche Reinigung', 'Flexible Intervalle']
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Unsere Leistungen</h1>
          <p>Professionelle Reinigung – qualifiziert, zuverlässig, flexibel</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Was wir für Sie tun</span>
            <h2>Professionelle Reinigung & Montage</h2>
            <p>Von unserem Sitz in Heilbronn aus betreuen wir unsere Geschäfts- und Privatkunden. Ob kleine, einmalige oder umfangreiche und dauerhafte Projekte – wir erledigen diese Arbeiten gern für Sie!</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="service-icon">
                  <service.icon size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <p>Interessiert an unseren Leistungen?</p>
            <Link to="/kontakt" className="btn btn-primary">
              Jetzt anfragen
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

export default Leistungen
