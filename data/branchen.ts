// Branchen / Zielgruppen – Quelle: website-recherche/02_service-texte.md
export type Branche = {
  title: string;
  description: string;
  image: string;
};

export const branchen: Branche[] = [
  {
    title: "Maschinenbau",
    description: "Sondermaschinenbau, Anlagenbau und Vorrichtungsbau.",
    image: "/images/branchen/maschinenbau.jpg",
  },
  {
    title: "Automotive",
    description: "Zulieferteile, Prototypen, Halterungen und Sonderkomponenten.",
    image: "/images/branchen/automotive.jpg",
  },
  {
    title: "Halbleiter & Elektronik",
    description: "Hochpräzise Gehäuse, Träger und Führungselemente.",
    image: "/images/branchen/halbleiter.jpg",
  },
  {
    title: "Luft- und Raumfahrt",
    description: "Leichtbauteile, Titanbearbeitung und enge Toleranzfelder.",
    image: "/images/branchen/luftfahrt.jpg",
  },
  {
    title: "Medizintechnik",
    description: "Chirurgische Instrumente, Implantate und Prüfvorrichtungen.",
    image: "/images/branchen/medizintechnik.jpg",
  },
  {
    title: "Allgemeiner Maschinenbau",
    description: "Wellen, Flansche, Buchsen und Sonderteile aller Art.",
    image: "/images/branchen/allgemein.jpg",
  },
];
