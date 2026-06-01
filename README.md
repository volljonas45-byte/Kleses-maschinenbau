# KELES Maschinenbau – Website

Moderne Multi-Page-Website für KELES Maschinenbau (Augsburg), gebaut mit **Next.js 16**, **Tailwind CSS v4** und **Framer Motion**. Design im industriellen, cleanen Look (dunkler Hero, blaue Akzente).

## Schnellstart

```bash
npm install
npm run dev      # Entwicklung → http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server
```

## Projektstruktur

```
app/                 Seiten (App Router)
  page.tsx           Startseite
  leistungen/        Übersicht + [slug]-Detailseiten (5 Leistungen)
  maschinenpark/  branchen/  ueber-uns/  galerie/  kontakt/
  impressum/  datenschutz/
  api/contact/       Formular-Endpoint
  sitemap.ts  robots.ts
components/           Header, Footer, Hero, ServiceCard, USPSection, ContactForm, …
data/                 Inhalte zentral: company, services, branchen, usps
public/images/        Bilder (aktuell Platzhalter – siehe unten)
```

Alle Texte und Kontaktdaten sind zentral in `data/` gepflegt (Single Source of Truth).

## Kontaktformular

Das Formular postet an `app/api/contact/route.ts`. Der E-Mail-Versand läuft optional über
[Resend](https://resend.com) per REST-API. Variablen in `.env.local` setzen (siehe `.env.example`):

```
RESEND_API_KEY=...
CONTACT_FROM_EMAIL=Website <kontakt@keles-maschinenbau.de>
CONTACT_TO_EMAIL=info@keles-maschinenbau.de
```

Ohne Konfiguration werden Anfragen serverseitig nur protokolliert (kein Versand). Spam-Schutz
über Honeypot-Feld (kein externes CAPTCHA → datenschutzfreundlich).

## ⚠️ Platzhalter-Bilder

Die Bilder in `public/images/` sind **Platzhalter** (Stockfotos) und müssen vor dem Go-Live
durch echte Fotos vom Betrieb ersetzt werden. Dateinamen einfach 1:1 überschreiben.
Quelle/Strategie: `../website-recherche/bilder-referenzen/`.

## Vor dem Go-Live zu ergänzen

- Echte Betriebsfotos (Werkstatt, Maschinen, Bauteile, Inhaber)
- Impressum: USt-ID & zuständige Kammer (`app/impressum/page.tsx`)
- Datenschutzerklärung rechtlich prüfen lassen
- Resend-Credentials für den Mailversand
- Logo in Vektorform (aktuell sauberes Text-Logo „KELES")
- Maschinenpark-Details, Öffnungszeiten bestätigen

## Deployment

Optimal auf **Vercel** oder **Netlify** (Next.js wird nativ unterstützt). Die Seite ist
weitgehend statisch (SSG) – nur die Formular-Route läuft serverseitig.
