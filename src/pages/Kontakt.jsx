import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

const API_URL = 'http://localhost:3001/api/contact'

function Kontakt() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    nachricht: ''
  })
  const [datenschutz, setDatenschutz] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        const message = data.errors?.join(' ') || 'Ein unbekannter Fehler ist aufgetreten.'
        throw new Error(message)
      }

      setSubmitted(true)
      setFormData({ vorname: '', nachname: '', email: '', telefon: '', nachricht: '' })
      setDatenschutz(false)
    } catch (err) {
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        setError('Der Server ist nicht erreichbar. Bitte versuchen Sie es später erneut.')
      } else {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Kontakt</h1>
          <p>Wir melden uns so schnell wie möglich zurück</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-badge">Kontaktieren Sie uns</span>
              <h2>Hier erreichen Sie uns</h2>
              <p>Senden Sie uns eine kurze Nachricht. Wir melden uns umgehend zurück.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <strong>Adresse</strong>
                    <p>Falkenstraße 4<br />74072 Heilbronn</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <strong>Telefon</strong>
                    <p>Tel: 07131 9733352<br />Mobil: 0173 364 278 81</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <strong>E-Mail</strong>
                    <p>info@arwan.de</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock size={24} />
                  <div>
                    <strong>Erreichbarkeit</strong>
                    <p>7 Tage / 24 Stunden</p>
                  </div>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.8456!2d9.2167!3d49.1427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982930c0e0e2c1%3A0x8e3c8c8c8c8c8c8c!2sFalkenstra%C3%9Fe%204%2C%2074072%20Heilbronn!5e0!3m2!1sde!2sde!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ARWAN Standort"
                ></iframe>
              </div>
            </div>

            <div className="contact-form-container">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={60} />
                  <h3>Vielen Dank!</h3>
                  <p>Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: '1rem' }}
                  >
                    Neue Nachricht senden
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Kostenlose Anfrage</h3>

                  {error && (
                    <div className="form-error" style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: '8px',
                      color: '#991b1b',
                      fontSize: '0.9rem',
                      marginBottom: '1rem',
                    }}>
                      <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label>Vorname *</label>
                      <input
                        type="text"
                        name="vorname"
                        placeholder="Ihr Vorname"
                        value={formData.vorname}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Nachname *</label>
                      <input
                        type="text"
                        name="nachname"
                        placeholder="Ihr Nachname"
                        value={formData.nachname}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>E-Mail *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="ihre@email.de"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon</label>
                    <input
                      type="tel"
                      name="telefon"
                      placeholder="Ihre Telefonnummer"
                      value={formData.telefon}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nachricht *</label>
                    <textarea
                      rows="5"
                      name="nachricht"
                      placeholder="Wie können wir Ihnen helfen?"
                      value={formData.nachricht}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    ></textarea>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      lineHeight: '1.4',
                      color: '#555',
                    }}>
                      <input
                        type="checkbox"
                        checked={datenschutz}
                        onChange={(e) => setDatenschutz(e.target.checked)}
                        disabled={loading}
                        required
                        style={{ marginTop: '3px', flexShrink: 0 }}
                      />
                      <span>
                        Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                        <Link to="/datenschutz" style={{ color: '#0a4b8c', textDecoration: 'underline' }}>
                          Datenschutzerklärung
                        </Link>{' '}
                        zu. *
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-full"
                    disabled={loading}
                    style={loading ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                  >
                    {loading ? (
                      <>
                        Wird gesendet...
                        <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  <p className="form-note">* Pflichtfelder</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}

export default Kontakt
