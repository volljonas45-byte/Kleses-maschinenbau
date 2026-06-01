import type { Metadata } from "next";
import Image from "next/image";
import { Cog, Layers, Monitor, Ruler, Info } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Maschinenpark – moderne CNC-Technik",
  description:
    "Der Maschinenpark von KELES Maschinenbau: moderne CNC-Fräs- und Drehzentren, 5-Achsen-Bearbeitung und CAD-CAM auf dem neuesten Stand der Technik.",
};

const ausstattung = [
  {
    icon: Cog,
    title: "CNC-Fräszentren",
    text: "Moderne Bearbeitungszentren für präzise 2,5D- und 3D-Frästeile in Metall und Kunststoff.",
  },
  {
    icon: Layers,
    title: "5-Achsen-Bearbeitung",
    text: "Simultane 5-Achsen-Fertigung für komplexe Geometrien in einer Aufspannung.",
  },
  {
    icon: Ruler,
    title: "CNC-Drehzentren",
    text: "Rotationssymmetrische Präzisionsteile mit Dreh-Fräs-Kombinationsbearbeitung.",
  },
  {
    icon: Monitor,
    title: "CAD-CAM-System",
    text: "Durchgängige digitale Prozesskette – direkt aus Ihren Konstruktionsdaten zur Fertigung.",
  },
];

export default function MaschinenparkPage() {
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Maschinenpark"
        title="Modernste Technik für höchste Präzision"
        subtitle="Unser Maschinenpark und unser CAD-CAM-System für die mechanische Metallbearbeitung sind auf dem neuesten Stand der Technik."
        crumbs={[{ label: "Maschinenpark" }]}
        image="/images/leistungen/5-achsen.jpg"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <SectionHeading
            eyebrow="Ausstattung"
            title="Unsere Fertigungstechnik"
            subtitle="Mit unserem CAD-CAM-gestützten Programmiersystem und 5-Achsen-Bearbeitungssystem fertigen wir komplexe 3D-Teile auf höchstem Qualitätsniveau."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ausstattung.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.title} delay={i * 0.07}>
                  <div className="h-full flex gap-5 bg-paper p-7 border border-paper-dark">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent text-white shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase text-lg text-ink">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                        {a.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Hinweis: konkrete Maschinendaten folgen */}
          <div className="mt-10 flex items-start gap-3 bg-accent/5 border border-accent/20 p-5 text-sm text-ink/70">
            <Info size={18} className="text-accent shrink-0 mt-0.5" />
            <p>
              Sie benötigen Details zu konkreten Maschinen, Verfahrwegen oder
              bearbeitbaren Materialien für Ihr Projekt?{" "}
              <a
                href="/kontakt"
                className="text-accent font-medium hover:underline"
              >
                Sprechen Sie uns an
              </a>{" "}
              – wir beraten Sie gerne.
            </p>
          </div>
        </div>
      </section>

      {/* Bild-Band */}
      <section className="relative h-64 sm:h-80 bg-ink overflow-hidden">
        <Image
          src="/images/leistungen/cnc-fraesen.jpg"
          alt="CNC-Bearbeitung im Detail"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-ink/40" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 h-full flex items-center">
          <p className="font-display font-extrabold uppercase text-white text-2xl sm:text-4xl max-w-2xl leading-tight">
            Komplexe 3D-Teile auf höchstem Qualitätsniveau.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
