// USPs "Warum KELES" – Quelle: website-recherche/01 & 02
import {
  Target,
  Clock,
  Handshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Usp = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const usps: Usp[] = [
  {
    title: "Qualität",
    description:
      "Enge Toleranzen, reproduzierbare Ergebnisse und lückenlose Qualitätskontrolle bei jedem Auftrag.",
    icon: Target,
  },
  {
    title: "Termintreue",
    description:
      "Verlässliche Lieferung ist für uns kein Versprechen, sondern Standard – durch optimierte Prozesse.",
    icon: Clock,
  },
  {
    title: "Partnerschaft",
    description:
      "Direkter Draht zum Fachmann: kurze Entscheidungswege, schnelle Angebote, faire Beratung.",
    icon: Handshake,
  },
  {
    title: "Moderne Technik",
    description:
      "CNC-Bearbeitungszentren und CAD-CAM auf dem neuesten Stand für optimale Ergebnisse.",
    icon: Sparkles,
  },
];
