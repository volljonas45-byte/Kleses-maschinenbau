// Leistungen – Quelle: website-recherche/02_service-texte.md
import {
  Cog,
  CircleDot,
  Boxes,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string; // Kurztext für Karten
  intro: string; // Einleitungstext Detailseite
  benefits: string[];
  image: string;
  icon: LucideIcon;
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "cnc-fraesen",
    title: "CNC-Fräsen",
    short:
      "Präzise Frästeile aus Metall und Kunststoff – von einfachen Konturen bis zu komplexen 3D-Freiformflächen.",
    intro:
      "Mit unseren modernen CNC-Fräsmaschinen fertigen wir Bauteile in höchster Präzision – von einfachen 2,5D-Konturen bis hin zu komplexen 3D-Freiformflächen. Unser Maschinenpark ermöglicht eine effiziente Bearbeitung auch anspruchsvollster Geometrien in Metall und Kunststoff.",
    benefits: [
      "Bearbeitung von Metallen (Stahl, Aluminium, Edelstahl, Messing, Titan) und Kunststoffen",
      "Enge Toleranzen und reproduzierbare Qualität",
      "Kurze Lieferzeiten durch optimierte Prozesse",
      "Einzel- und Serienfertigung",
    ],
    image: "/images/leistungen/cnc-fraesen.jpg",
    icon: Cog,
    seoTitle: "CNC-Fräsen Augsburg",
    seoDescription:
      "CNC-Fräsen in Augsburg: Präzisionsteile aus Metall & Kunststoff, enge Toleranzen, kurze Lieferzeiten. Einzelteile und Serien bei KELES Maschinenbau.",
  },
  {
    slug: "cnc-drehen",
    title: "CNC-Drehen",
    short:
      "Rotationssymmetrische Präzisionsteile – Wellen, Buchsen, Flansche und Sonderteile mit engsten Toleranzen.",
    intro:
      "Ob Wellen, Buchsen, Flansche oder Sonderteile – unsere CNC-Drehzentren liefern rotationssymmetrische Bauteile mit engsten Toleranzen. Durch die Kombination von Drehen und Fräsen in einem Aufspann sparen wir Zeit und erhöhen die Genauigkeit.",
    benefits: [
      "Dreh-Fräs-Kombinationsbearbeitung möglich",
      "Alle gängigen Metalle und technischen Kunststoffe",
      "Einzel- und Serienfertigung",
      "Schnelle Prototypenrealisierung",
    ],
    image: "/images/leistungen/cnc-drehen.jpg",
    icon: CircleDot,
    seoTitle: "CNC-Drehen Augsburg",
    seoDescription:
      "CNC-Drehen in Augsburg: Wellen, Buchsen, Flansche & Sonderteile mit engsten Toleranzen. Dreh-Fräs-Bearbeitung bei KELES Maschinenbau.",
  },
  {
    slug: "5-achsen-bearbeitung",
    title: "5-Achsen-Bearbeitung",
    short:
      "Hochkomplexe Bauteile in einer einzigen Aufspannung – weniger Umspannen, höhere Genauigkeit.",
    intro:
      "Dank unseres 5-Achsen-Bearbeitungszentrums können wir hochkomplexe Bauteile in einer einzigen Aufspannung fertigstellen. Das reduziert nicht nur Fehlerquellen durch mehrfaches Umspannen, sondern ermöglicht auch die Realisierung von Hinterschneidungen, freigeformten Flächen und anspruchsvollen Bauteilgeometrien.",
    benefits: [
      "Simultaneingriff aller 5 Achsen für komplexe 3D-Geometrien",
      "Weniger Aufspannungen = höhere Genauigkeit",
      "Ideal für Luft- und Raumfahrt, Automotive, Werkzeugbau",
      "CAD-CAM-gestützte NC-Programmierung",
    ],
    image: "/images/leistungen/5-achsen.jpg",
    icon: Layers,
    seoTitle: "5-Achsen-Bearbeitung Augsburg",
    seoDescription:
      "5-Achsen-CNC-Bearbeitung in Augsburg: komplexe 3D-Bauteile in einer Aufspannung, höchste Präzision. CAD-CAM-gestützt bei KELES Maschinenbau.",
  },
  {
    slug: "einzelteile-kleinserien",
    title: "Einzelteile & Kleinserien",
    short:
      "Flexibel und wirtschaftlich – von der Losgröße 1 bis zur Kleinserie, direkt aus Ihren CAD-Daten.",
    intro:
      "Von der Einzelanfertigung bis zur Kleinserie – KELES Maschinenbau bietet schnelle Reaktionszeiten und wirtschaftliche Lösungen für kleinere Stückzahlen. Unsere CAD-CAM-Technologie ermöglicht es, direkt aus Ihren Konstruktionsdaten zu fertigen und Änderungen flexibel einzupflegen.",
    benefits: [
      "Losgröße 1 bis Kleinserie problemlos umsetzbar",
      "Direkte Bearbeitung von CAD-Daten (STEP, IGES, DXF)",
      "Kurze Vorlaufzeiten",
      "Attraktives Preis-Leistungs-Verhältnis",
    ],
    image: "/images/leistungen/kleinserien.jpg",
    icon: Boxes,
    seoTitle: "Einzelteile & Kleinserienfertigung Augsburg",
    seoDescription:
      "Einzelteil- und Kleinserienfertigung in Augsburg: flexibel, wirtschaftlich, direkt aus CAD-Daten. Kurze Lieferzeiten bei KELES Maschinenbau.",
  },
  {
    slug: "prototypen",
    title: "Prototypenfertigung",
    short:
      "Schnell vom CAD zum funktionsfähigen Bauteil – ideal für Funktionstests und Musterzulassungen.",
    intro:
      "Entwickeln Sie Ihre Ideen mit uns weiter. Mit KELES Maschinenbau als Fertigungspartner realisieren Sie Prototypen schnell und zuverlässig – in der Qualität, die Sie für Funktionstests und Musterzulassungen benötigen. Wir verstehen Ihre Konstruktionsdaten und denken fertigungsgerecht mit.",
    benefits: [
      "Schnelle Umsetzung von Konstruktionsdaten",
      "Direkte Kommunikation mit dem Fachmann",
      "Änderungsschleifen effizient möglich",
      "Materialberatung inklusive",
    ],
    image: "/images/leistungen/prototypen-cnc.jpg",
    icon: Wrench,
    seoTitle: "Prototypenfertigung Augsburg",
    seoDescription:
      "Prototypenfertigung in Augsburg: schnell vom CAD zum Bauteil, ideal für Funktionstests. Fertigungsgerechte Beratung bei KELES Maschinenbau.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
