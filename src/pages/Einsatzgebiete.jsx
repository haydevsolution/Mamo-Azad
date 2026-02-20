import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Phone } from 'lucide-react'

function Einsatzgebiete() {
  const locations = [
    { name: 'Heilbronn', main: true },
    { name: 'Heidelberg', main: false },
    { name: 'Mosbach', main: false },
    { name: 'Karlsruhe', main: false },
    { name: 'Pforzheim', main: false },
    { name: 'Eppingen', main: false },
    { name: 'Crailsheim', main: false },
    { name: 'Ludwigsburg', main: false },
    { name: 'Stuttgart', main: false },
  ]

  const objectTypes = [
    'Gebäude aller Art & Größe',
    'Glas & Fenster',
    'Büros & Praxen',
    'Läden des Einzelhandels',
    'Schulen und Kindereinrichtungen',
    'Messe- & Ausstellungsräume',
    'Fitness Center',
    'Baustellen',
    'Wintergärten',
    'Privatwohnungen',
    'Treppenflure',
    'Böden (Parkett, Laminat, …)',
    'Teppiche',
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Unsere Einsatzgebiete</h1>
          <p>In und im Umkreis von Heilbronn</p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-page">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Wo wir für Sie tätig sind</span>
            <h2>Umkreis Heilbronn - Einsatzorte</h2>
            <p>Wir betreuen Kunden in folgenden Städten und deren Umgebung</p>
          </div>
          
          <div className="locations-grid-large">
            {locations.map((location, idx) => (
              <div key={idx} className={`location-item-large ${location.main ? 'main' : ''}`}>
                <MapPin size={24} />
                <span>{location.name}</span>
                {location.main && <span className="main-badge">Hauptsitz</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Object Types */}
      <section className="object-types">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Die Objekte unserer Kunden</span>
            <h2>Unsere Einsatzbereiche</h2>
            <p>Wir reinigen Objekte sowohl im gewerblichen als auch im privaten Bereich</p>
          </div>
          
          <div className="object-types-grid">
            {objectTypes.map((type, idx) => (
              <div key={idx} className="object-type-item">
                <span className="object-type-number">{String(idx + 1).padStart(2, '0')}</span>
                <span className="object-type-name">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Sie befinden sich in unserem Einzugsgebiet?</h2>
          <p>Kontaktieren Sie uns für ein unverbindliches Angebot!</p>
          <div className="cta-buttons">
            <a href="tel:+4917336427881" className="cta-phone">
              <Phone size={24} />
              +49 (0) 173 642 7881
            </a>
            <Link to="/kontakt" className="btn btn-secondary cta-link">
              Anfrage stellen
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Einsatzgebiete
