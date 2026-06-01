import { company } from "@/data/company";

// LocalBusiness-Schema für lokale Suche (Google)
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MachineShop",
    name: company.name,
    description: company.shortDescription,
    url: company.url,
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.zip,
      addressLocality: company.address.city,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.address.lat,
      longitude: company.address.lng,
    },
    areaServed: "Augsburg und Umgebung, Bayern",
    sameAs: [company.instagramUrl],
    knowsAbout: [
      "CNC-Fräsen",
      "CNC-Drehen",
      "5-Achsen-Bearbeitung",
      "Zerspanung",
      "Prototypenfertigung",
      "Kleinserienfertigung",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
