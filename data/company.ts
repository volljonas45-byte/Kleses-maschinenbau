// Zentrale Unternehmensdaten – Single Source of Truth
// Quelle: website-recherche/01_unternehmen-info.md & 05_kontakt-und-impressum.md

export const company = {
  name: "KELES Maschinenbau",
  legalName: "Ahmet Keles – Keles Maschinenbau",
  owner: "Ahmet Keles",
  founded: 2015,
  tagline: "Präzision, die bewegt.",
  shortDescription:
    "CNC-Zerspanung aus Augsburg – Fräsen, Drehen und 5-Achsen-Bearbeitung in höchster Qualität. Vom Prototyp bis zur Kleinserie.",
  address: {
    street: "Am Mittleren Moos 20",
    zip: "86167",
    city: "Augsburg",
    country: "Deutschland",
    full: "Am Mittleren Moos 20, 86167 Augsburg",
    // Koordinaten Augsburg-Lechhausen (Richtwert für Maps/JSON-LD)
    lat: 48.3905,
    lng: 10.9395,
  },
  phone: "+49 821 54016329",
  phoneHref: "tel:+498215401329",
  email: "info@keles-maschinenbau.de",
  emailHref: "mailto:info@keles-maschinenbau.de",
  instagram: "@keles.maschinenbau",
  instagramUrl: "https://www.instagram.com/keles.maschinenbau/",
  domain: "keles-maschinenbau.de",
  url: "https://keles-maschinenbau.de",
  openingHours: "Mo–Fr 07:00–17:00 Uhr",
} as const;

export const navItems = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Maschinenpark", href: "/maschinenpark" },
  { label: "Branchen", href: "/branchen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Galerie", href: "/galerie" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
