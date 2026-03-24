import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173'],
  methods: ['POST'],
}))
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

function validateContactForm(body) {
  const errors = []
  const { vorname, nachname, email, nachricht } = body

  if (!vorname || typeof vorname !== 'string' || vorname.trim().length === 0) {
    errors.push('Vorname ist erforderlich.')
  }
  if (!nachname || typeof nachname !== 'string' || nachname.trim().length === 0) {
    errors.push('Nachname ist erforderlich.')
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Eine gueltige E-Mail-Adresse ist erforderlich.')
  }
  if (!nachricht || typeof nachricht !== 'string' || nachricht.trim().length === 0) {
    errors.push('Nachricht ist erforderlich.')
  }

  if (vorname && vorname.length > 100) errors.push('Vorname ist zu lang.')
  if (nachname && nachname.length > 100) errors.push('Nachname ist zu lang.')
  if (email && email.length > 254) errors.push('E-Mail ist zu lang.')
  if (nachricht && nachricht.length > 5000) errors.push('Nachricht ist zu lang (max. 5000 Zeichen).')

  return errors
}

function sanitize(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildEmailHtml({ vorname, nachname, email, telefon, nachricht }) {
  const safeVorname = sanitize(vorname)
  const safeNachname = sanitize(nachname)
  const safeEmail = sanitize(email)
  const safeTelefon = sanitize(telefon)
  const safeNachricht = sanitize(nachricht).replace(/\n/g, '<br>')

  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:#0a4b8c;padding:28px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:0.5px;">
                ARWAN Montage &amp; Geb&auml;udereinigung
              </h1>
              <p style="margin:8px 0 0;color:#b8d4f0;font-size:14px;">Neue Kontaktanfrage</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e8ecf1;">
                    <strong style="color:#0a4b8c;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">Name</strong><br>
                    <span style="color:#333;font-size:15px;">${safeVorname} ${safeNachname}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e8ecf1;">
                    <strong style="color:#0a4b8c;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">E-Mail</strong><br>
                    <a href="mailto:${safeEmail}" style="color:#0a4b8c;font-size:15px;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                ${safeTelefon ? `
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e8ecf1;">
                    <strong style="color:#0a4b8c;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">Telefon</strong><br>
                    <a href="tel:${safeTelefon}" style="color:#0a4b8c;font-size:15px;text-decoration:none;">${safeTelefon}</a>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding:16px 0 0;">
                    <strong style="color:#0a4b8c;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">Nachricht</strong>
                    <div style="margin-top:8px;padding:16px;background-color:#f4f6f9;border-radius:8px;color:#333;font-size:15px;line-height:1.6;">
                      ${safeNachricht}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f4f6f9;padding:20px 32px;text-align:center;border-top:1px solid #e8ecf1;">
              <p style="margin:0;color:#888;font-size:12px;">
                Diese Nachricht wurde &uuml;ber das Kontaktformular auf arwan.de gesendet.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

app.post('/api/contact', async (req, res) => {
  try {
    const errors = validateContactForm(req.body)
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors })
    }

    const { vorname, nachname, email, telefon, nachricht } = req.body
    const contactEmail = process.env.CONTACT_EMAIL || 'info@arwan.de'

    await transporter.sendMail({
      from: `"ARWAN Kontaktformular" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: contactEmail,
      subject: `Neue Kontaktanfrage von ${vorname} ${nachname}`,
      html: buildEmailHtml({ vorname, nachname, email, telefon, nachricht }),
      text: [
        `Neue Kontaktanfrage`,
        `Name: ${vorname} ${nachname}`,
        `E-Mail: ${email}`,
        telefon ? `Telefon: ${telefon}` : null,
        `\nNachricht:\n${nachricht}`,
      ].filter(Boolean).join('\n'),
    })

    return res.json({ success: true, message: 'Nachricht wurde erfolgreich gesendet.' })
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error)
    return res.status(500).json({
      success: false,
      errors: ['Die Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es spaeter erneut.'],
    })
  }
})

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`ARWAN Contact API laeuft auf Port ${PORT}`)
})
