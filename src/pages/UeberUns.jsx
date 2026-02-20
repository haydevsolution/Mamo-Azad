import { Link } from 'react-router-dom'
import { 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  Award,
  Users,
  Leaf,
  ThumbsUp
} from 'lucide-react'

function UeberUns() {
  const benefits = [
    { title: 'Excellente Sauberkeit', desc: 'Stets das bestmögliche Ergebnis', icon: Star },
    { title: 'Pünktlichkeit', desc: 'Wir halten unsere Termine ein', icon: Clock },
    { title: 'Zuverlässigkeit', desc: 'Auf uns können Sie sich verlassen', icon: Shield },
    { title: 'Know-how & Erfahrung', desc: 'Bei uns sind Fachkräfte am Werk', icon: Award },
    { title: 'Flexibilität', desc: 'Wir passen uns Ihren Bedürfnissen an', icon: Users },
    { title: 'Reelle Preise', desc: 'Transparente, kalkulierbare Kosten', icon: ThumbsUp },
  ]

  const expectations = [
    { title: 'Excellente Sauberkeit', desc: 'Stets das bestmögliche Ergebnis' },
    { title: 'Pünktlichkeit', desc: 'Termine werden zuverlässig eingehalten' },
    { title: 'Zuverlässigkeit', desc: 'Auf uns können Sie sich verlassen' },
    { title: 'Know-how und Erfahrung', desc: 'Bei uns sind Fachkräfte am Werk' },
    { title: 'Flexibilität', desc: 'Wir passen uns Ihren Wünschen an' },
    { title: 'Termingerechte und fachliche Ausführung', desc: 'Professionelle Arbeitsweise' },
    { title: 'Seriosität', desc: 'Ehrlichkeit, Höflichkeit, Pünktlichkeit' },
    { title: 'Kundenzufriedenheit', desc: 'Ihre Zufriedenheit ist unser Antrieb' },
    { title: 'Umwelt- und Arbeitsschutz', desc: 'Verantwortungsvolles Handeln' },
    { title: 'Reelle Preise', desc: 'Transparente, kalkulierbare und gleichbleibende Kosten' },
    { title: 'Höchstes Qualitätsbewusstsein', desc: 'Qualität steht an erster Stelle' },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Über ARWAN</h1>
          <p>Das Beste ist gerade gut genug!</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-badge">Wer wir sind</span>
              <h2>Wir geben jeden Tag unser Bestes für Sie!</h2>
              <p className="about-lead">
                Von unserem Sitz in Heilbronn aus betreuen wir unsere Geschäfts- und Privatkunden. 
                Ob kleine, einmalige oder umfangreiche und dauerhafte Projekte – Frühjahrsputz oder 
                Winterfestmachung, Werterhaltung – wir erledigen diese Arbeiten gern für Sie!
              </p>
              <p className="about-text">
                Nur zufriedene Kunden buchen uns immer wieder! Deshalb legen wir größten Wert auf 
                Qualität, Zuverlässigkeit und ein hervorragendes Preis-Leistungs-Verhältnis.
              </p>
              <div className="benefits-grid">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="benefit-item">
                    <benefit.icon size={20} />
                    <div>
                      <strong>{benefit.title}</strong>
                      <span>{benefit.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-box">
                <div className="experience-badge">
                  <span className="exp-number">24/7</span>
                  <span className="exp-text">Für Sie im Einsatz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was Sie von uns erwarten können - NEU */}
      <section className="expectations">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Unsere Prämissen</span>
            <h2>Was Sie von uns erwarten können</h2>
            <p>Unsere Prämissen im täglichen Einsatz</p>
          </div>
          
          <div className="expectations-grid">
            {expectations.map((item, idx) => (
              <div key={idx} className="expectation-item">
                <div className="expectation-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="expectation-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unser Angebot */}
      <section className="offer">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Unser Angebot</span>
            <h2>Das schenken wir Ihnen!</h2>
          </div>
          
          <div className="offer-grid">
            <div className="offer-item">
              <div className="offer-icon">
                <Leaf size={40} />
              </div>
              <h3>Hygiene & Sauberkeit</h3>
              <p>Für ein gesundes und angenehmes Umfeld</p>
            </div>
            <div className="offer-item">
              <div className="offer-icon">
                <Star size={40} />
              </div>
              <h3>Wohlfühlatmosphäre</h3>
              <p>Saubere Räume für mehr Lebensqualität</p>
            </div>
            <div className="offer-item">
              <div className="offer-icon">
                <Clock size={40} />
              </div>
              <h3>Mehr Zeit & ein gutes Gewissen</h3>
              <p>Überlassen Sie uns die Arbeit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Überzeugt? Kontaktieren Sie uns!</h2>
          <p>Wir freuen uns auf Ihre Anfrage.</p>
          <div className="cta-buttons">
            <a href="tel:+4917336427881" className="cta-phone">
              <Phone size={24} />
              +49 (0) 173 642 7881
            </a>
            <Link to="/kontakt" className="btn btn-secondary cta-link">
              Zum Kontaktformular
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default UeberUns
